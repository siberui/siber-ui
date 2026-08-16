'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

export type BiometricMode = 'fingerprint' | 'retina' | 'facial' | 'dna';
export type BiometricState = 'idle' | 'scanning' | 'granted' | 'denied';

const biometricScannerVariants = cva(
  'relative inline-flex flex-col items-center justify-center font-mono select-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'w-32 p-3',
        md: 'w-44 p-4',
        lg: 'w-56 p-5',
      },
      signal: {
        cyan: 'focus-visible:ring-cyan-500/70',
        violet: 'focus-visible:ring-violet-500/70',
        green: 'focus-visible:ring-emerald-500/70',
        amber: 'focus-visible:ring-amber-500/70',
        rose: 'focus-visible:ring-rose-500/70',
      },
    },
    defaultVariants: {
      size: 'md',
      signal: 'cyan',
    },
  },
);

export interface BiometricScannerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /** Biometric scanning sensor visual mode */
  mode?: BiometricMode;
  /** Controlled biometric scan state */
  state?: BiometricState;
  /** Trigger interaction mechanism */
  triggerType?: 'click' | 'hold';
  /** Hold duration in milliseconds when triggerType="hold" (default: 1200ms) */
  holdDuration?: number;
  /** Simulated scan duration when triggerType="click" (default: 1500ms) */
  scanDuration?: number;
  /** Primary label displayed above or below the sensor pad */
  label?: string;
  /** Status / instruction subtext */
  sublabel?: string;
  /** Display circular progress telemetry ring */
  showProgressRing?: boolean;
  /** Display rotating outer calibration compass ticks */
  showCalibrationRing?: boolean;
  /** Enable vertical laser beam sweep during scanning */
  showLaserBeam?: boolean;
  /** Display real-time telemetry HUD overlay (matching percentage, node locks) */
  showTelemetry?: boolean;
  /** Probability of success when state is not controlled (0 to 1, default: 1) */
  simulatedSuccessRate?: number;
  /** Size variant */
  size?: VariantProps<typeof biometricScannerVariants>['size'];
  /** Signal accent color */
  signal?: 'cyan' | 'violet' | 'green' | 'amber' | 'rose';
  /** Callback fired when scanning begins */
  onScanStart?: () => void;
  /** Callback fired when scanning completes successfully */
  onScanSuccess?: () => void;
  /** Callback fired when scanning fails */
  onScanError?: () => void;
  /** Callback fired when scanning ends with final success boolean */
  onScanComplete?: (success: boolean) => void;
}

export const BiometricScanner = React.forwardRef<HTMLDivElement, BiometricScannerProps>(
  (
    {
      className,
      mode = 'fingerprint',
      state: controlledState,
      triggerType = 'click',
      holdDuration = 1200,
      scanDuration = 1500,
      size = 'md',
      signal = 'cyan',
      label,
      sublabel,
      showProgressRing = true,
      showCalibrationRing = true,
      showLaserBeam = true,
      showTelemetry = true,
      simulatedSuccessRate = 1.0,
      onScanStart,
      onScanSuccess,
      onScanError,
      onScanComplete,
      ...props
    },
    ref,
  ) => {
    const [internalState, setInternalState] = React.useState<BiometricState>('idle');
    const [progress, setProgress] = React.useState(0);
    const holdTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const holdProgressIntervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
    const isHoldingRef = React.useRef(false);

    const currentState = controlledState !== undefined ? controlledState : internalState;

    // Signal color mapping
    const signalColors = React.useMemo(
      () => ({
        cyan: { stroke: '#00d9e8', text: 'text-cyan-400', glow: 'rgba(0, 217, 232, 0.45)', bg: 'bg-cyan-500/10', border: 'border-cyan-500/40' },
        violet: { stroke: '#a78bfa', text: 'text-violet-400', glow: 'rgba(167, 139, 250, 0.45)', bg: 'bg-violet-500/10', border: 'border-violet-500/40' },
        green: { stroke: '#34d399', text: 'text-emerald-400', glow: 'rgba(52, 211, 153, 0.45)', bg: 'bg-emerald-500/10', border: 'border-emerald-500/40' },
        amber: { stroke: '#f5a524', text: 'text-amber-400', glow: 'rgba(245, 165, 36, 0.45)', bg: 'bg-amber-500/10', border: 'border-amber-500/40' },
        rose: { stroke: '#fb5a7e', text: 'text-rose-400', glow: 'rgba(251, 90, 126, 0.45)', bg: 'bg-rose-500/10', border: 'border-rose-500/40' },
      }),
      [],
    );

    const activeTheme = React.useMemo(() => {
      if (currentState === 'granted') return signalColors.green;
      if (currentState === 'denied') return signalColors.rose;
      return signalColors[signal || 'cyan'];
    }, [currentState, signal, signalColors]);

    const finishScan = React.useCallback(
      (success: boolean) => {
        if (controlledState === undefined) {
          setInternalState(success ? 'granted' : 'denied');
        }
        if (success) {
          onScanSuccess?.();
        } else {
          onScanError?.();
        }
        onScanComplete?.(success);

        if (controlledState === undefined) {
          setTimeout(() => {
            setInternalState('idle');
            setProgress(0);
          }, 2600);
        }
      },
      [controlledState, onScanSuccess, onScanError, onScanComplete],
    );

    const startClickScan = React.useCallback(() => {
      if (currentState === 'scanning') return;

      if (controlledState === undefined) {
        setInternalState('scanning');
      }
      setProgress(0);
      onScanStart?.();

      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const currentProgress = Math.min(100, (elapsed / scanDuration) * 100);
        setProgress(currentProgress);

        if (elapsed >= scanDuration) {
          clearInterval(interval);
          const isSuccess = Math.random() < simulatedSuccessRate;
          finishScan(isSuccess);
        }
      }, 25);
    }, [currentState, controlledState, scanDuration, simulatedSuccessRate, onScanStart, finishScan]);

    const handleHoldStart = React.useCallback(() => {
      if (currentState === 'scanning' || currentState === 'granted') return;
      isHoldingRef.current = true;

      if (controlledState === undefined) {
        setInternalState('scanning');
      }
      onScanStart?.();
      setProgress(0);

      const startTime = Date.now();
      holdProgressIntervalRef.current = setInterval(() => {
        if (!isHoldingRef.current) return;
        const elapsed = Date.now() - startTime;
        const currentProgress = Math.min(100, (elapsed / holdDuration) * 100);
        setProgress(currentProgress);

        if (elapsed >= holdDuration) {
          if (holdProgressIntervalRef.current) clearInterval(holdProgressIntervalRef.current);
          const isSuccess = Math.random() < simulatedSuccessRate;
          finishScan(isSuccess);
        }
      }, 20);
    }, [currentState, controlledState, holdDuration, simulatedSuccessRate, onScanStart, finishScan]);

    const handleHoldEnd = React.useCallback(() => {
      if (triggerType !== 'hold') return;
      isHoldingRef.current = false;
      if (holdProgressIntervalRef.current) clearInterval(holdProgressIntervalRef.current);
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);

      if (currentState === 'scanning' && progress < 100) {
        if (controlledState === undefined) {
          setInternalState('idle');
        }
        setProgress(0);
      }
    }, [triggerType, currentState, progress, controlledState]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (triggerType === 'hold') {
          handleHoldStart();
        } else {
          startClickScan();
        }
      }
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (triggerType === 'hold') {
          handleHoldEnd();
        }
      }
    };

    // Vector Biometric Artwork with sequential node locks
    const renderSensorGraphic = () => {
      const isScanning = currentState === 'scanning';
      const isGranted = currentState === 'granted';
      const node1Locked = progress > 25 || isGranted;
      const node2Locked = progress > 50 || isGranted;
      const node3Locked = progress > 75 || isGranted;

      switch (mode) {
        case 'retina':
          return (
            <svg
              className="w-full h-full p-2 transition-all duration-300 overflow-visible"
              viewBox="0 0 100 100"
              fill="none"
              stroke={activeTheme.stroke}
            >
              {/* Concentric Calibration Target Rings */}
              <circle cx="50" cy="50" r="44" strokeWidth="1" strokeDasharray="3 3" opacity={isScanning ? '0.7' : '0.3'} />
              <circle cx="50" cy="50" r="34" strokeWidth="1.2" opacity="0.6" />
              <circle cx="50" cy="50" r="22" strokeWidth="1.5" strokeDasharray="8 4" className={isScanning ? 'animate-[spin_6s_linear_infinite] origin-center' : ''} />
              <circle cx="50" cy="50" r="10" strokeWidth="1.8" fill={activeTheme.stroke} fillOpacity={isGranted ? '0.35' : '0.12'} />

              {/* Crosshair precision marks */}
              <line x1="8" y1="50" x2="28" y2="50" strokeWidth="1.5" />
              <line x1="72" y1="50" x2="92" y2="50" strokeWidth="1.5" />
              <line x1="50" y1="8" x2="50" y2="28" strokeWidth="1.5" />
              <line x1="50" y1="72" x2="50" y2="92" strokeWidth="1.5" />

              {/* Retinal Optical Feature Lock Brackets */}
              {node1Locked && (
                <g className="text-cyan-300 animate-pulse">
                  <path d="M 32,32 L 36,32 L 36,36" strokeWidth="1.5" />
                  <circle cx="34" cy="34" r="1.5" fill={activeTheme.stroke} />
                </g>
              )}
              {node2Locked && (
                <g className="text-cyan-300 animate-pulse">
                  <path d="M 68,32 L 64,32 L 64,36" strokeWidth="1.5" />
                  <circle cx="66" cy="34" r="1.5" fill={activeTheme.stroke} />
                </g>
              )}
              {node3Locked && (
                <g className="text-cyan-300 animate-pulse">
                  <path d="M 50,68 L 46,68 L 46,64" strokeWidth="1.5" />
                  <circle cx="50" cy="66" r="1.5" fill={activeTheme.stroke} />
                </g>
              )}
            </svg>
          );

        case 'facial':
          return (
            <svg
              className="w-full h-full p-2.5 transition-all duration-300"
              viewBox="0 0 100 100"
              fill="none"
              stroke={activeTheme.stroke}
            >
              {/* 3D Polygon Wireframe Head Contour */}
              <polygon
                points="50,12 76,28 72,68 50,90 28,68 24,28"
                strokeWidth="1.5"
                fill={activeTheme.stroke}
                fillOpacity={isGranted ? '0.25' : isScanning ? '0.08' : '0.03'}
                className="transition-all duration-300"
              />
              {/* Eye sockets, Brow, Nose, Jawlines */}
              <line x1="32" y1="40" x2="44" y2="40" strokeWidth="2" strokeLinecap="round" />
              <line x1="56" y1="40" x2="68" y2="40" strokeWidth="2" strokeLinecap="round" />
              <polyline points="50,32 50,54 44,58 56,58" strokeWidth="1.4" />
              <line x1="40" y1="72" x2="60" y2="72" strokeWidth="1.8" strokeLinecap="round" />

              {/* Wireframe Connecting Lattice */}
              <line x1="50" y1="12" x2="50" y2="32" strokeWidth="1" opacity="0.4" />
              <line x1="24" y1="28" x2="38" y2="40" strokeWidth="1" opacity="0.4" />
              <line x1="76" y1="28" x2="62" y2="40" strokeWidth="1" opacity="0.4" />
              <line x1="28" y1="68" x2="40" y2="72" strokeWidth="1" opacity="0.4" />
              <line x1="72" y1="68" x2="60" y2="72" strokeWidth="1" opacity="0.4" />

              {/* Facial Landmark Tracking Nodes */}
              <circle cx="38" cy="40" r={node1Locked ? '2.5' : '1.5'} fill={activeTheme.stroke} />
              <circle cx="62" cy="40" r={node1Locked ? '2.5' : '1.5'} fill={activeTheme.stroke} />
              <circle cx="50" cy="54" r={node2Locked ? '2.5' : '1.5'} fill={activeTheme.stroke} />
              <circle cx="50" cy="72" r={node3Locked ? '2.5' : '1.5'} fill={activeTheme.stroke} />
            </svg>
          );

        case 'dna':
          return (
            <svg
              className="w-full h-full p-2.5 transition-all duration-300"
              viewBox="0 0 100 100"
              fill="none"
              stroke={activeTheme.stroke}
            >
              {/* DNA Double Helix Strands */}
              <path d="M 28,12 Q 50,34 72,50 Q 50,66 28,88" strokeWidth="2" strokeLinecap="round" />
              <path d="M 72,12 Q 50,34 28,50 Q 50,66 72,88" strokeWidth="2" strokeLinecap="round" />

              {/* Base Pair Horizontal Bridges */}
              <line x1="34" y1="20" x2="66" y2="20" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="44" y1="32" x2="56" y2="32" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="28" y1="50" x2="72" y2="50" strokeWidth="2" />
              <line x1="44" y1="68" x2="56" y2="68" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="34" y1="80" x2="66" y2="80" strokeWidth="1.5" strokeDasharray="3 2" />

              {/* Nucleotide Nodes */}
              <circle cx="28" cy="12" r={node1Locked ? '3' : '2'} fill={activeTheme.stroke} />
              <circle cx="72" cy="12" r={node1Locked ? '3' : '2'} fill={activeTheme.stroke} />
              <circle cx="50" cy="50" r={node2Locked ? '3.5' : '2'} fill={activeTheme.stroke} />
              <circle cx="28" cy="88" r={node3Locked ? '3' : '2'} fill={activeTheme.stroke} />
              <circle cx="72" cy="88" r={node3Locked ? '3' : '2'} fill={activeTheme.stroke} />
            </svg>
          );

        case 'fingerprint':
        default:
          return (
            <svg
              className="w-full h-full p-2.5 transition-all duration-300"
              viewBox="0 0 100 100"
              fill="none"
              stroke={activeTheme.stroke}
              strokeLinecap="round"
            >
              {/* Fingerprint Arch Loops */}
              <path d="M 50,14 C 30,14 18,28 18,48 C 18,70 30,84 50,88 C 70,84 82,70 82,48 C 82,28 70,14 50,14 Z" strokeWidth="1.8" opacity="0.35" />
              <path d="M 50,22 C 34,22 26,34 26,50 C 26,67 36,78 50,81 C 64,78 74,67 74,50 C 74,34 66,22 50,22 Z" strokeWidth="2" opacity="0.6" />
              <path d="M 50,30 C 40,30 34,38 34,51 C 34,64 42,71 50,74 C 58,71 66,64 66,51 C 66,38 60,30 50,30 Z" strokeWidth="2.2" />
              <path d="M 50,38 C 45,38 42,44 42,52 C 42,60 46,65 50,67 C 54,65 58,60 58,52 C 58,44 55,38 50,38 Z" strokeWidth="2.4" />
              <path d="M 50,46 L 50,58" strokeWidth="2.6" />

              {/* Biometric Ridge Verification Nodal Points */}
              {node1Locked && (
                <g className="animate-pulse">
                  <circle cx="34" cy="38" r="2.5" fill={activeTheme.stroke} />
                  <line x1="34" y1="33" x2="34" y2="43" strokeWidth="1" />
                  <line x1="29" y1="38" x2="39" y2="38" strokeWidth="1" />
                </g>
              )}
              {node2Locked && (
                <g className="animate-pulse">
                  <circle cx="66" cy="42" r="2.5" fill={activeTheme.stroke} />
                  <line x1="66" y1="37" x2="66" y2="47" strokeWidth="1" />
                  <line x1="61" y1="42" x2="71" y2="42" strokeWidth="1" />
                </g>
              )}
              {node3Locked && (
                <g className="animate-pulse">
                  <circle cx="50" cy="67" r="2.5" fill={activeTheme.stroke} />
                  <line x1="50" y1="62" x2="50" y2="72" strokeWidth="1" />
                  <line x1="45" y1="67" x2="55" y2="67" strokeWidth="1" />
                </g>
              )}
            </svg>
          );
      }
    };

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const defaultSublabel = React.useMemo(() => {
      if (currentState === 'granted') return 'ACCESS GRANTED';
      if (currentState === 'denied') return 'ACCESS DENIED';
      if (currentState === 'scanning') return `SCANNING (${Math.round(progress)}%)`;
      return triggerType === 'hold' ? 'HOLD TO SCAN' : 'CLICK TO SCAN';
    }, [currentState, triggerType, progress]);

    return (
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label={label || `Biometric ${mode} scanner`}
        aria-live="polite"
        className={cn(
          biometricScannerVariants({ size, signal }),
          'cursor-pointer group',
          className,
        )}
        onClick={triggerType === 'click' ? startClickScan : undefined}
        onMouseDown={triggerType === 'hold' ? handleHoldStart : undefined}
        onMouseUp={triggerType === 'hold' ? handleHoldEnd : undefined}
        onMouseLeave={triggerType === 'hold' ? handleHoldEnd : undefined}
        onTouchStart={triggerType === 'hold' ? handleHoldStart : undefined}
        onTouchEnd={triggerType === 'hold' ? handleHoldEnd : undefined}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        {...props}
      >
        {label && (
          <div className="flex items-center justify-between w-full mb-2 px-1">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-fg-subtle font-bold">
              {label}
            </span>
            <span className="text-[8px] font-mono text-cyan-400/70 tracking-tighter">
              [OPT.0{mode === 'fingerprint' ? '1' : mode === 'retina' ? '2' : mode === 'facial' ? '3' : '4'}]
            </span>
          </div>
        )}

        {/* Central Optical Sensor Substrate Panel */}
        <div
          className={cn(
            'relative w-full aspect-square rounded-2xl bg-gradient-to-b from-[#080d1a] via-[#040710] to-[#020409] border border-white/[0.12] shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-300',
            currentState === 'scanning' && 'border-cyan-400/60 shadow-[0_0_32px_rgba(0,217,232,0.35)]',
            currentState === 'granted' && 'border-emerald-400/70 shadow-[0_0_36px_rgba(52,211,153,0.45)]',
            currentState === 'denied' && 'border-rose-400/70 shadow-[0_0_36px_rgba(251,90,126,0.45)] animate-shake',
          )}
        >
          {/* Subtle Modern Optical Lens Depth Vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_75%)]"
          />

          {/* Rotating Compass / Calibration Degree Marks */}
          {showCalibrationRing && (
            <svg
              className={cn(
                'absolute inset-0 w-full h-full pointer-events-none p-1 transition-all duration-500 opacity-40',
                currentState === 'scanning' && 'animate-[spin_16s_linear_infinite]',
              )}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 6" className={activeTheme.text} />
              <line x1="50" y1="0" x2="50" y2="4" stroke="currentColor" strokeWidth="1.5" className={activeTheme.text} />
              <line x1="100" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="1.5" className={activeTheme.text} />
              <line x1="50" y1="100" x2="50" y2="96" stroke="currentColor" strokeWidth="1.5" className={activeTheme.text} />
              <line x1="0" y1="50" x2="4" y2="50" stroke="currentColor" strokeWidth="1.5" className={activeTheme.text} />
            </svg>
          )}

          {/* Circular Progress Ring */}
          {showProgressRing && (
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none p-2.5 z-10"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="transparent"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2.5"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="transparent"
                stroke={activeTheme.stroke}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-75 ease-linear"
              />
            </svg>
          )}

          {/* Biometric SVG Vector Graphic */}
          <div className="relative z-10 w-4/5 h-4/5 flex items-center justify-center">
            {renderSensorGraphic()}
          </div>

          {/* Ultra-Precision 1px Sweeping Optical Laser Beam */}
          {showLaserBeam && currentState === 'scanning' && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 z-20 animate-laser-bounce"
            >
              {/* Subtle diffused glow wash */}
              <div
                className="h-3 -my-1.5 opacity-25 blur-[1.5px]"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${activeTheme.stroke}, transparent)`,
                }}
              />
              {/* Ultra-thin 1px razor optical hairline */}
              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(to right, transparent, ${activeTheme.stroke} 15%, #ffffff 50%, ${activeTheme.stroke} 85%, transparent)`,
                  boxShadow: `0 0 5px ${activeTheme.stroke}`,
                }}
              />
            </div>
          )}

          {/* HUD Live Telemetry Badge inside Sensor */}
          {showTelemetry && currentState === 'scanning' && (
            <div className="absolute bottom-2 inset-x-2 z-20 flex justify-between items-center px-1.5 py-0.5 rounded bg-black/75 border border-cyan-500/30 text-[7px] font-mono text-cyan-300">
              <span>MATCH: {Math.min(99.8, Math.round(progress * 0.99))}%</span>
              <span className="animate-pulse text-[6px]">LOCKED</span>
            </div>
          )}

          {/* Precision HUD Corner Brackets */}
          <span className="absolute top-2 left-2 h-2 w-2 border-t border-l border-white/40 pointer-events-none" />
          <span className="absolute top-2 right-2 h-2 w-2 border-t border-r border-white/40 pointer-events-none" />
          <span className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-white/40 pointer-events-none" />
          <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-white/40 pointer-events-none" />
        </div>

        {/* Sublabel / Live Status Readout */}
        <span
          className={cn(
            'text-[10px] font-mono tracking-widest mt-2.5 uppercase text-center transition-colors duration-200',
            currentState === 'granted' && 'text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]',
            currentState === 'denied' && 'text-rose-400 font-bold drop-shadow-[0_0_8px_rgba(251,90,126,0.5)]',
            currentState === 'scanning' && activeTheme.text,
            currentState === 'idle' && 'text-fg-muted group-hover:text-fg',
          )}
        >
          {sublabel || defaultSublabel}
        </span>
      </div>
    );
  },
);

BiometricScanner.displayName = 'BiometricScanner';
