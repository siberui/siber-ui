'use client';

import * as React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  useCyberAudio,
  type CyberSoundType,
  Button,
  ChamferCard,
  ChamferCardHeader,
  ChamferCardTitle,
  ChamferCardDescription,
  ChamferCardContent,
  Slider,
} from '@siberui/react';
import { Volume2, VolumeX } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'soundboard', text: 'Interactive Cyberpunk Soundboard', level: 2 },
  { id: 'component-integration', text: 'UI Kit Integration (Buttons & Haptics)', level: 2 },
  { id: 'synthesizer-architecture', text: 'Zero-Asset Oscillator Architecture', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

const soundTypes: { type: CyberSoundType; label: string; desc: string; color: string }[] = [
  { type: 'click', label: 'TACTICAL CLICK', desc: '25ms ultra-short tactile UI micro-tick', color: 'border-cyan-500/40 text-cyan-400' },
  { type: 'blip', label: 'NAV BLIP', desc: '50ms sine wave HUD navigation ping', color: 'border-violet-500/40 text-violet-400' },
  { type: 'scan', label: 'LASER SWEEP', desc: '140ms frequency sweeping radar chirp', color: 'border-cyan-500/40 text-cyan-400' },
  { type: 'arm', label: 'SWITCH CLACK', desc: 'Mechanical two-stage impulse switch clack', color: 'border-amber-500/40 text-amber-400' },
  { type: 'granted', label: 'AUTH GRANTED', desc: 'Ascending two-tone futuristic chime', color: 'border-emerald-500/40 text-emerald-400' },
  { type: 'denied', label: 'AUTH DENIED', desc: 'Sawtooth warning buzz & glitch error', color: 'border-rose-500/40 text-rose-400' },
  { type: 'alarm', label: 'ALERT PULSE', desc: '250ms tactical recurring siren sweep', color: 'border-rose-500/40 text-rose-400' },
  { type: 'telemetry', label: 'DATA STREAM', desc: 'Triple high-frequency packet burst', color: 'border-emerald-500/40 text-emerald-400' },
];

export default function CyberAudioDocsPage() {
  const { play, isMuted, toggleMute, volume, setVolume } = useCyberAudio({ volume: 0.35 });

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Cyber Audio (useCyberAudio)"
        description="Zero-dependency Web Audio API sound synthesizer hook for futuristic SiberUI interfaces. Realtime oscillator acoustic cues without external MP3 asset downloads."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { useCyberAudio } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Interactive Soundboard ── */}
      <ContentSection title="Interactive Cyberpunk Soundboard" id="soundboard">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Eight signature sci-fi UI acoustic cues generated in micro-seconds natively via browser <code className="text-cyan-400">AudioContext</code> oscillators without downloading any audio files.
          </p>

          <Playground
            code={`const { play, isMuted, toggleMute, volume, setVolume } = useCyberAudio();

// Trigger sound effects
play('click');
play('scan');
play('granted');
play('denied');`}
          >
            <div className="w-full p-4 sm:p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] flex flex-col gap-6">
              {/* Sound Control Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-xl bg-[#060914] border border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant={isMuted ? 'danger' : 'outline'}
                    onClick={() => {
                      toggleMute();
                      if (isMuted) play('blip');
                    }}
                    className="gap-2"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-cyan-400" />}
                    <span>{isMuted ? 'MUTED' : 'AUDIO ACTIVE'}</span>
                  </Button>
                  <span className="text-[10px] font-mono text-slate-400">
                    MASTER VOL: {Math.round(volume * 100)}%
                  </span>
                </div>

                <div className="w-36 flex items-center gap-2">
                  <Slider
                    value={[volume * 100]}
                    max={100}
                    step={5}
                    onValueChange={(val) => {
                      const newVol = (Array.isArray(val) ? val[0] : val) / 100;
                      setVolume(newVol);
                    }}
                  />
                </div>
              </div>

              {/* Soundboard Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                {soundTypes.map((item) => (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => play(item.type)}
                    className={`flex flex-col items-start p-3.5 rounded-xl bg-[#050812] border hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-150 text-left ${item.color}`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-xs font-mono font-bold">{item.label}</span>
                      <span className="text-[8px] opacity-60 font-mono">SYNTH</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-sans leading-tight">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── UI Kit Integration ── */}
      <ContentSection title="UI Kit Integration (Buttons & Haptics)" id="component-integration">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Attach acoustic cues to components like <code className="text-cyan-400">Button</code>, <code className="text-cyan-400">KillSwitch</code>, or <code className="text-cyan-400">BiometricScanner</code>.
          </p>

          <Playground
            code={`const { play } = useCyberAudio();

<ChamferCard signal="cyan" glow tag="SYS // AUDIO_FEED" statusDot="cyan">
  <ChamferCardHeader>
    <ChamferCardTitle>AUDIO-ENHANCED TERMINAL</ChamferCardTitle>
    <ChamferCardDescription>Tactile acoustic feedback integrated directly on actions.</ChamferCardDescription>
  </ChamferCardHeader>
  <ChamferCardContent className="flex flex-wrap gap-3">
    <Button onClick={() => play('click')}>TACTICAL CLICK</Button>
    <Button variant="primary" onClick={() => play('granted')}>CONFIRM ACTION</Button>
    <Button variant="danger" onClick={() => play('denied')}>ABORT COMMAND</Button>
  </ChamferCardContent>
</ChamferCard>`}
          >
            <div className="w-full p-4 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <ChamferCard signal="cyan" glow tag="SYS // AUDIO_FEED" statusDot="cyan" className="w-full">
                <ChamferCardHeader>
                  <ChamferCardTitle>AUDIO-ENHANCED TERMINAL</ChamferCardTitle>
                  <ChamferCardDescription>
                    Tactile acoustic feedback integrated directly on actions.
                  </ChamferCardDescription>
                </ChamferCardHeader>
                <ChamferCardContent className="flex flex-wrap gap-3">
                  <Button onClick={() => play('click')}>TACTICAL CLICK</Button>
                  <Button variant="primary" onClick={() => play('granted')}>CONFIRM ACTION</Button>
                  <Button variant="danger" onClick={() => play('denied')}>ABORT COMMAND</Button>
                </ChamferCardContent>
              </ChamferCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Synthesizer Architecture ── */}
      <ContentSection title="Zero-Asset Oscillator Architecture" id="synthesizer-architecture">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Zero Network Overhead:</strong> No external <code className="text-cyan-400 font-mono text-xs">.mp3</code> or <code className="text-cyan-400 font-mono text-xs">.wav</code> assets required; all tones are synthesized mathematically in client memory using Web Audio oscillators.
          </li>
          <li>
            <strong>SSR & Autoplay Policy Safe:</strong> Safely noops on the server and lazily initializes / resumes the <code className="text-cyan-400 font-mono text-xs">AudioContext</code> upon the first user interaction.
          </li>
        </ul>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'play',
              description: 'Plays the specified synthesized cyberpunk audio cue.',
              type: '(type: CyberSoundType, customVolume?: number) => void',
            },
            {
              property: 'isMuted',
              description: 'Boolean flag indicating whether audio output is currently muted.',
              type: 'boolean',
            },
            {
              property: 'toggleMute',
              description: 'Toggles master audio mute state.',
              type: '() => void',
            },
            {
              property: 'volume',
              description: 'Current master volume level (0.0 to 1.0).',
              type: 'number',
              defaultValue: '0.3',
            },
            {
              property: 'setVolume',
              description: 'Sets the master volume level.',
              type: '(volume: number) => void',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
