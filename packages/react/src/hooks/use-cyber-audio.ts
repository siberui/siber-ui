'use client';

import * as React from 'react';

export type CyberSoundType =
  | 'click'
  | 'blip'
  | 'scan'
  | 'arm'
  | 'granted'
  | 'denied'
  | 'alarm'
  | 'telemetry';

export interface UseCyberAudioOptions {
  /** Master sound enabled toggle (default: true) */
  enabled?: boolean;
  /** Master volume multiplier (0.0 to 1.0, default: 0.3) */
  volume?: number;
}

// Helper: create a distortion curve for WaveShaperNode
function createDistortionCurve(amount: number): Float32Array<ArrayBuffer> {
  const n = 256;
  const curve = new Float32Array(new ArrayBuffer(n * 4));
  for (let i = 0; i < n; i++) {
    const x = (i * 2) / n - 1;
    curve[i] = ((Math.PI + amount) * x) / (Math.PI + amount * Math.abs(x));
  }
  return curve;
}

// Helper: add a subtle stereo delay / echo trail
function addDelay(ctx: AudioContext, src: AudioNode, delayTime: number, feedback: number, wet: number): AudioNode {
  const delay = ctx.createDelay(2.0);
  const fbGain = ctx.createGain();
  const wetGain = ctx.createGain();

  delay.delayTime.value = delayTime;
  fbGain.gain.value = feedback;
  wetGain.gain.value = wet;

  src.connect(delay);
  delay.connect(fbGain);
  fbGain.connect(delay);
  delay.connect(wetGain);

  return wetGain;
}

export function useCyberAudio(options: UseCyberAudioOptions = {}) {
  const { enabled = true, volume: defaultVolume = 0.3 } = options;
  const [isMuted, setIsMuted] = React.useState(!enabled);
  const [volume, setVolumeState] = React.useState(defaultVolume);
  const audioCtxRef = React.useRef<AudioContext | null>(null);

  const getAudioContext = React.useCallback((): AudioContext | null => {
    if (typeof window === 'undefined') return null;

    if (!audioCtxRef.current) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

      if (AudioCtxClass) {
        audioCtxRef.current = new AudioCtxClass();
      }
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }

    return audioCtxRef.current;
  }, []);

  const play = React.useCallback(
    (type: CyberSoundType, customVol?: number) => {
      if (isMuted) return;

      const ctx = getAudioContext();
      if (!ctx) return;

      const effectiveVolume = Math.max(0, Math.min(1, customVol !== undefined ? customVol : volume));
      const now = ctx.currentTime;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(effectiveVolume, now);
      masterGain.connect(ctx.destination);

      switch (type) {

        // 1. CLICK — Hardened metallic transient with sub punch
        case 'click': {
          // Sub punch (noise burst shaped into a thud)
          const bufferSize = ctx.sampleRate * 0.04;
          const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = noiseBuffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

          const noise = ctx.createBufferSource();
          const noiseFilter = ctx.createBiquadFilter();
          const noiseGain = ctx.createGain();

          noise.buffer = noiseBuffer;
          noiseFilter.type = 'bandpass';
          noiseFilter.frequency.setValueAtTime(3000, now);
          noiseFilter.Q.value = 0.8;
          noiseGain.gain.setValueAtTime(0.6, now);
          noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.018);

          noise.connect(noiseFilter);
          noiseFilter.connect(noiseGain);
          noiseGain.connect(masterGain);
          noise.start(now);
          noise.stop(now + 0.02);

          // Pitched transient click
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          const distortion = ctx.createWaveShaper();
          distortion.curve = createDistortionCurve(80);

          osc.type = 'square';
          osc.frequency.setValueAtTime(4800, now);
          osc.frequency.exponentialRampToValueAtTime(200, now + 0.02);
          oscGain.gain.setValueAtTime(0.5, now);
          oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

          osc.connect(distortion);
          distortion.connect(oscGain);
          oscGain.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.025);
          break;
        }

        // 2. BLIP — Cyberpunk terminal data blip with overtone shimmer
        case 'blip': {
          const freqs = [1200, 2400, 3600];
          freqs.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = i === 0 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(freq, now);
            osc.frequency.setValueAtTime(freq * 1.12, now + 0.02);
            osc.frequency.setValueAtTime(freq, now + 0.04);

            gain.gain.setValueAtTime(0.25 / (i + 1), now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

            osc.connect(gain);
            gain.connect(masterGain);
            osc.start(now);
            osc.stop(now + 0.08);
          });
          break;
        }

        // 3. SCAN — Alien radar sweep: wide pitch glide + filtered noise hiss
        case 'scan': {
          // Laser sweep oscillator
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(80, now);
          osc.frequency.linearRampToValueAtTime(4800, now + 0.12);
          osc.frequency.exponentialRampToValueAtTime(200, now + 0.22);

          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(2000, now);
          filter.Q.value = 2;

          oscGain.gain.setValueAtTime(0.4, now);
          oscGain.gain.setValueAtTime(0.4, now + 0.12);
          oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

          osc.connect(filter);
          filter.connect(oscGain);
          oscGain.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.25);

          // Hiss layer
          const hissBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.22, ctx.sampleRate);
          const hissData = hissBuffer.getChannelData(0);
          for (let i = 0; i < hissData.length; i++) hissData[i] = Math.random() * 2 - 1;

          const hiss = ctx.createBufferSource();
          const hissFilter = ctx.createBiquadFilter();
          const hissGain = ctx.createGain();

          hiss.buffer = hissBuffer;
          hissFilter.type = 'highpass';
          hissFilter.frequency.value = 4000;
          hissGain.gain.setValueAtTime(0.08, now);
          hissGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

          hiss.connect(hissFilter);
          hissFilter.connect(hissGain);
          hissGain.connect(masterGain);
          hiss.start(now);
          hiss.stop(now + 0.24);
          break;
        }

        // 4. ARM — Heavy electro-mechanical weapons lock: two-stage clunk + power hum
        case 'arm': {
          // Stage 1: Heavy metallic thud
          const buf1 = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
          const buf1Data = buf1.getChannelData(0);
          for (let i = 0; i < buf1Data.length; i++) buf1Data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (buf1Data.length * 0.15));

          const thud = ctx.createBufferSource();
          const thudFilter = ctx.createBiquadFilter();
          const thudGain = ctx.createGain();
          thud.buffer = buf1;
          thudFilter.type = 'lowpass';
          thudFilter.frequency.value = 400;
          thudGain.gain.setValueAtTime(0.8, now);
          thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
          thud.connect(thudFilter);
          thudFilter.connect(thudGain);
          thudGain.connect(masterGain);
          thud.start(now);
          thud.stop(now + 0.07);

          // Stage 2: Power surge hum
          const osc = ctx.createOscillator();
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          const oscGain = ctx.createGain();
          const distort = ctx.createWaveShaper();
          distort.curve = createDistortionCurve(200);

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(60, now + 0.04);
          osc.frequency.linearRampToValueAtTime(180, now + 0.14);

          lfo.type = 'sine';
          lfo.frequency.value = 60;
          lfoGain.gain.value = 20;
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);

          oscGain.gain.setValueAtTime(0.001, now + 0.04);
          oscGain.gain.linearRampToValueAtTime(0.55, now + 0.08);
          oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

          osc.connect(distort);
          distort.connect(oscGain);
          oscGain.connect(masterGain);

          osc.start(now + 0.04);
          osc.stop(now + 0.2);
          lfo.start(now + 0.04);
          lfo.stop(now + 0.2);
          break;
        }

        // 5. GRANTED — Neural uplink confirmed: ascending harmonic triad + shimmer tail
        case 'granted': {
          // Rising chord: root → fifth → octave in sequence
          const chord = [660, 990, 1320, 1760];
          chord.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const t = now + i * 0.055;

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq * 0.92, t);
            osc.frequency.linearRampToValueAtTime(freq, t + 0.03);

            gain.gain.setValueAtTime(0.0, t);
            gain.gain.linearRampToValueAtTime(0.28 - i * 0.03, t + 0.025);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

            const delayed = addDelay(ctx, gain, 0.12, 0.25, 0.15);
            delayed.connect(masterGain);

            osc.connect(gain);
            gain.connect(masterGain);
            osc.start(t);
            osc.stop(t + 0.3);
          });
          break;
        }

        // 6. DENIED — Hard glitch rejection: descending alien buzz + noise burst
        case 'denied': {
          // Aggressive descending sweep
          const osc = ctx.createOscillator();
          const distort = ctx.createWaveShaper();
          const filter = ctx.createBiquadFilter();
          const gain = ctx.createGain();

          distort.curve = createDistortionCurve(300);
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(1200, now);
          osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);

          filter.type = 'bandpass';
          filter.frequency.value = 600;
          filter.Q.value = 3;

          gain.gain.setValueAtTime(0.7, now);
          gain.gain.setValueAtTime(0.7, now + 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

          osc.connect(distort);
          distort.connect(filter);
          filter.connect(gain);
          gain.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.18);

          // Second glitch stutter
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'square';
          osc2.frequency.setValueAtTime(400, now + 0.07);
          osc2.frequency.setValueAtTime(300, now + 0.10);
          osc2.frequency.setValueAtTime(200, now + 0.13);
          gain2.gain.setValueAtTime(0.35, now + 0.07);
          gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
          osc2.connect(gain2);
          gain2.connect(masterGain);
          osc2.start(now + 0.07);
          osc2.stop(now + 0.2);
          break;
        }

        // 7. ALARM — Cyberpunk Tactical Alert Pulse (Resonant FM synth sweep + sub punch + delay)
        case 'alarm': {
          [0, 0.11].forEach((offset, idx) => {
            const t = now + offset;
            const baseFreq = idx === 0 ? 540 : 660;

            // 1. Cyber sawtooth carrier
            const osc = ctx.createOscillator();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(baseFreq, t);
            osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.45, t + 0.1);

            // 2. FM digital modulation (cybernetic electronic grit)
            const fmMod = ctx.createOscillator();
            const fmGain = ctx.createGain();
            fmMod.type = 'sawtooth';
            fmMod.frequency.setValueAtTime(42, t);
            fmGain.gain.setValueAtTime(75, t);
            fmGain.gain.exponentialRampToValueAtTime(1, t + 0.08);
            fmMod.connect(fmGain);
            fmGain.connect(osc.frequency);

            // 3. Sub body oscillator for low-end mechanical weight
            const sub = ctx.createOscillator();
            const subGain = ctx.createGain();
            sub.type = 'triangle';
            sub.frequency.setValueAtTime(baseFreq * 0.25, t);
            sub.frequency.exponentialRampToValueAtTime(45, t + 0.1);
            subGain.gain.setValueAtTime(0.3, t);
            subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
            sub.connect(subGain);

            // 4. Resonant sweeping bandpass filter
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(3200, t);
            filter.frequency.exponentialRampToValueAtTime(480, t + 0.09);
            filter.Q.value = 3.5;

            // 5. Warm digital cyber saturation
            const distort = ctx.createWaveShaper();
            distort.curve = createDistortionCurve(45);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.0, t);
            gain.gain.linearRampToValueAtTime(0.42, t + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.11);

            osc.connect(filter);
            filter.connect(distort);
            distort.connect(gain);
            subGain.connect(gain);

            // 6. Holographic delay tail
            const delayed = addDelay(ctx, gain, 0.08, 0.25, 0.15);
            delayed.connect(masterGain);
            gain.connect(masterGain);

            osc.start(t);
            osc.stop(t + 0.12);
            fmMod.start(t);
            fmMod.stop(t + 0.12);
            sub.start(t);
            sub.stop(t + 0.12);
          });
          break;
        }

        // 8. TELEMETRY — Data cascade: glitching frequency burst with ring modulation texture
        case 'telemetry': {
          const steps = [0, 0.028, 0.056, 0.084, 0.11];
          const freqSeq = [3200, 2100, 4400, 1600, 3800];

          steps.forEach((offset, idx) => {
            const osc = ctx.createOscillator();
            const ring = ctx.createOscillator();
            const ringGain = ctx.createGain();
            const gain = ctx.createGain();

            // Ring modulation for metallic alien texture
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freqSeq[idx], now + offset);

            ring.type = 'sine';
            ring.frequency.value = 120 + idx * 60;
            ringGain.gain.value = 0;
            ring.connect(ringGain);
            ringGain.gain.setValueAtTime(0.4, now + offset);

            gain.gain.setValueAtTime(0.18, now + offset);
            gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.022);

            osc.connect(ringGain);
            ringGain.connect(gain);
            gain.connect(masterGain);

            osc.start(now + offset);
            osc.stop(now + offset + 0.03);
            ring.start(now + offset);
            ring.stop(now + offset + 0.03);
          });
          break;
        }
      }
    },
    [isMuted, volume, getAudioContext],
  );

  const toggleMute = React.useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const setVolume = React.useCallback((newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(1, newVolume)));
  }, []);

  return {
    play,
    isMuted,
    toggleMute,
    volume,
    setVolume,
  };
}
