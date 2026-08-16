'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const killSwitchVariants = cva(
  'relative inline-flex flex-col items-center select-none font-mono transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'w-28 p-2',
        md: 'w-36 p-3',
        lg: 'w-44 p-4',
      },
      hazard: {
        amber: '[--hazard-color:#f5a524] [--hazard-glow:rgba(245,165,36,0.35)] [--hazard-bg:rgba(245,165,36,0.12)]',
        rose: '[--hazard-color:#fb5a7e] [--hazard-glow:rgba(251,90,126,0.45)] [--hazard-bg:rgba(251,90,126,0.15)]',
        cyan: '[--hazard-color:#00d9e8] [--hazard-glow:rgba(0,217,232,0.4)] [--hazard-bg:rgba(0,217,232,0.12)]',
        neutral: '[--hazard-color:#94a3b8] [--hazard-glow:rgba(148,163,184,0.25)] [--hazard-bg:rgba(148,163,184,0.08)]',
      },
    },
    defaultVariants: {
      size: 'md',
      hazard: 'amber',
    },
  },
);

export interface KillSwitchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof killSwitchVariants> {
  /** Controlled armed / active state */
  isArmed?: boolean;
  /** Callback fired when armed state changes */
  onArmChange?: (armed: boolean) => void;
  /** Controlled cover open/closed state */
  isCoverOpen?: boolean;
  /** Callback fired when cover open state changes */
  onCoverOpenChange?: (open: boolean) => void;
  /** Primary action label */
  label?: string;
  /** Status subtitle */
  sublabel?: string;
  /** Text shown when switch is armed */
  armedLabel?: string;
  /** Text shown when switch is safe/disarmed */
  disarmedLabel?: string;
  /** Disabled state */
  disabled?: boolean;
}

function HexScrew() {
  return (
    <div className="relative h-2.5 w-2.5 flex items-center justify-center">
      <div className="h-2.5 w-2.5 rounded-full bg-slate-800 border border-slate-600/70 flex items-center justify-center shadow-inner">
        <div className="h-1.5 w-0.5 bg-slate-400 rotate-45" />
        <div className="absolute h-0.5 w-1.5 bg-slate-400 rotate-45" />
      </div>
    </div>
  );
}

export const KillSwitch = React.forwardRef<HTMLDivElement, KillSwitchProps>(
  (
    {
      className,
      size = 'md',
      hazard = 'amber',
      isArmed: controlledArmed,
      onArmChange,
      isCoverOpen: controlledCover,
      onCoverOpenChange,
      label = 'KILL SWITCH',
      sublabel,
      armedLabel = 'ARMED // LIVE',
      disarmedLabel = 'SECURE // SAFE',
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [internalCoverOpen, setInternalCoverOpen] = React.useState(false);
    const [internalArmed, setInternalArmed] = React.useState(false);

    const isCoverOpen = controlledCover !== undefined ? controlledCover : internalCoverOpen;
    const isArmed = controlledArmed !== undefined ? controlledArmed : internalArmed;

    const toggleCover = (e?: React.MouseEvent | React.KeyboardEvent) => {
      e?.stopPropagation();
      if (disabled) return;
      const nextCoverState = !isCoverOpen;

      if (controlledCover === undefined) {
        setInternalCoverOpen(nextCoverState);
      }
      onCoverOpenChange?.(nextCoverState);

      // Closing cover while armed automatically flips the switch back to safe
      if (!nextCoverState && isArmed) {
        if (controlledArmed === undefined) {
          setInternalArmed(false);
        }
        onArmChange?.(false);
      }
    };

    const toggleArm = (e?: React.MouseEvent | React.KeyboardEvent) => {
      e?.stopPropagation();
      if (disabled) return;

      if (!isCoverOpen) {
        // If cover is closed, first click opens the cover
        toggleCover(e);
        return;
      }

      const nextArmedState = !isArmed;
      if (controlledArmed === undefined) {
        setInternalArmed(nextArmedState);
      }
      onArmChange?.(nextArmedState);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape' && isCoverOpen) {
        toggleCover(e);
      }
    };

    return (
      <div
        ref={ref}
        role="group"
        aria-label={label}
        onKeyDown={handleKeyDown}
        className={cn(
          killSwitchVariants({ size, hazard }),
          disabled && 'opacity-40 pointer-events-none grayscale',
          className,
        )}
        {...props}
      >
        {/* Top Header Technical Badge */}
        {label && (
          <div className="mb-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/40 border border-white/[0.08] shadow-sm">
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-all duration-300',
                isArmed
                  ? 'bg-rose-500 shadow-[0_0_8px_#fb5a7e] animate-pulse'
                  : isCoverOpen
                    ? 'bg-amber-400 shadow-[0_0_6px_#f5a524]'
                    : 'bg-emerald-400/80',
              )}
            />
            <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase truncate">
              {label}
            </span>
          </div>
        )}

        {/* 3D Master Enclosure & Chassis */}
        <div
          className="relative w-full aspect-[4/5.4] rounded-2xl bg-gradient-to-b from-[#0a0f1d] via-[#050811] to-[#020408] border border-white/[0.12] p-2.5 flex flex-col items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300"
          style={{
            perspective: '800px',
            boxShadow: isArmed
              ? '0 0 24px var(--hazard-glow), inset 0 0 16px var(--hazard-bg)'
              : undefined,
          }}
        >
          {/* Subtle Cyberpunk Substrate Grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
              backgroundSize: '10px 10px',
            }}
          />

          {/* Corner Precision Hex Fasteners */}
          <div className="relative z-10 w-full flex justify-between items-center pointer-events-none px-0.5">
            <HexScrew />
            <div className="flex items-center gap-1">
              <span className="text-[7px] font-mono text-slate-500 tracking-tighter">SYS-ILOCK</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
            </div>
            <HexScrew />
          </div>

          {/* Precision Hinge Pivot Bar */}
          <div className="relative z-20 w-11/12 h-3 rounded-full bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border border-slate-600/80 shadow-md flex items-center justify-between px-2 my-1">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shadow-inner" />
            <div className="h-1 w-12 rounded-full bg-black/50 border-t border-black" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shadow-inner" />
          </div>

          {/* Switch Cockpit Well / Chamber */}
          <div className="relative z-10 w-full flex-1 rounded-xl bg-gradient-to-b from-[#020307] to-[#080c16] border border-white/[0.08] shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)] flex flex-col items-center justify-between p-2 my-1 overflow-hidden">
            {/* Warning Chevron Micro-stripes in Chamber */}
            <div
              aria-hidden="true"
              className={cn(
                'absolute inset-0 pointer-events-none transition-opacity duration-300',
                isArmed ? 'opacity-25' : 'opacity-10',
              )}
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, var(--hazard-color), var(--hazard-color) 4px, transparent 4px, transparent 10px)',
              }}
            />

            {/* Chamber Status Markings */}
            <div className="relative z-10 w-full flex justify-between items-center text-[7px] font-mono font-bold text-slate-500 px-1">
              <span className={cn('transition-colors duration-200', isArmed && 'text-rose-400 font-black')}>
                [ARM]
              </span>
              <span className="tracking-widest text-slate-600">● ● ●</span>
              <span className={cn('transition-colors duration-200', !isArmed && 'text-emerald-400/80 font-black')}>
                [SAFE]
              </span>
            </div>

            {/* The Precision Mechanical Toggle Switch Lever */}
            <button
              type="button"
              role="switch"
              aria-checked={isArmed}
              aria-label={`${label} toggle lever`}
              disabled={disabled}
              onClick={toggleArm}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleArm(e);
                }
              }}
              className={cn(
                'relative z-10 w-12 sm:w-14 h-16 sm:h-20 rounded-xl transition-all duration-300 flex flex-col items-center justify-between p-1.5 outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400',
                'bg-gradient-to-b from-slate-800 via-slate-900 to-black border border-white/10 shadow-lg',
              )}
            >
              {/* Vertical Laser Travel Track */}
              <div className="absolute inset-y-2 w-1.5 rounded-full bg-black border border-white/5 flex flex-col justify-between items-center py-1">
                <span className={cn('h-1 w-1 rounded-full', isArmed ? 'bg-rose-400' : 'bg-slate-700')} />
                <span className={cn('h-1 w-1 rounded-full', !isArmed ? 'bg-emerald-400' : 'bg-slate-700')} />
              </div>

              {/* Solid Anodized Lever Knob / Handle */}
              <div
                className={cn(
                  'relative z-20 w-full h-8 sm:h-9 rounded-lg transition-all duration-300 flex flex-col items-center justify-center border shadow-md',
                  isArmed
                    ? 'translate-y-0 bg-gradient-to-b from-rose-500 via-rose-600 to-rose-800 border-rose-300 shadow-[0_0_20px_#fb5a7e]'
                    : 'translate-y-7 sm:translate-y-9 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-900 border-slate-500 shadow-inner',
                )}
              >
                {/* Knurled Grip Ridges */}
                <div className="flex gap-0.5 items-center justify-center w-full px-1.5 mb-1 opacity-75">
                  <span className="h-2.5 w-0.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-0.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-0.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-0.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-0.5 rounded-full bg-white/40" />
                </div>

                {/* Laser Core LED Indicator */}
                <span
                  className={cn(
                    'h-1.5 w-5 rounded-full transition-all duration-300',
                    isArmed
                      ? 'bg-rose-100 shadow-[0_0_8px_#ffffff] animate-pulse'
                      : 'bg-emerald-400/80 shadow-[0_0_4px_#34d399]',
                  )}
                />
              </div>
            </button>

            {/* Switch Socket Safety Warning */}
            <div className="relative z-10 w-full text-center">
              <span className="text-[6.5px] font-mono uppercase tracking-widest text-slate-500">
                {isCoverOpen ? 'INTERLOCK ACTIVE' : 'LOCKED UNDER GUARD'}
              </span>
            </div>
          </div>

          {/* 3D Translucent Glassmorphic Safety Cover Guard */}
          <button
            type="button"
            role="button"
            aria-expanded={isCoverOpen}
            aria-label={`${label} protective guard shield`}
            disabled={disabled}
            onClick={toggleCover}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggleCover(e);
              }
            }}
            className={cn(
              'absolute inset-x-2.5 top-6 bottom-3 z-30 rounded-xl border backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top flex flex-col items-center justify-between p-2.5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-amber-400 shadow-2xl',
              isCoverOpen
                ? '-rotate-x-[115deg] -translate-y-2 opacity-30 pointer-events-auto bg-amber-500/10 border-amber-500/40 shadow-none'
                : 'rotate-x-0 translate-y-0 opacity-95 bg-gradient-to-b from-amber-950/60 via-amber-950/40 to-black/80 border-amber-500/70 shadow-[0_8px_24px_rgba(245,165,36,0.28),inset_0_1px_2px_rgba(255,255,255,0.3)] hover:border-amber-400 hover:shadow-[0_8px_28px_rgba(245,165,36,0.4)]',
            )}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Safety Guard Decal Header */}
            <div className="w-full flex items-center justify-between px-1">
              <span className="h-1 w-1 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[7.5px] font-mono font-black tracking-widest text-amber-300 uppercase px-1.5 py-0.5 rounded bg-black/80 border border-amber-500/50 shadow-inner">
                SAFETY GUARD
              </span>
              <span className="h-1 w-1 rounded-full bg-amber-400 animate-pulse" />
            </div>

            {/* Centered Caution Chevron Emblem */}
            <div className="flex flex-col items-center justify-center my-auto space-y-1">
              <div className="h-7 w-7 rounded-lg bg-black/60 border border-amber-500/40 flex items-center justify-center shadow-inner">
                <svg className="h-4 w-4 text-amber-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <span className="text-[7px] font-mono font-bold tracking-widest text-amber-200/90 uppercase">
                {isCoverOpen ? 'GUARD LIFTED' : 'CLICK TO LIFT'}
              </span>
            </div>

            {/* Bottom Guard Lock Latch */}
            <div className="w-full flex items-center justify-between text-[6.5px] font-mono text-amber-400/70 border-t border-amber-500/20 pt-1">
              <span>INTERLOCK</span>
              <span>MIL-SPEC</span>
            </div>
          </button>

          {/* Bottom Fasteners and Serial */}
          <div className="relative z-10 w-full flex justify-between items-center pointer-events-none px-0.5 pt-0.5">
            <HexScrew />
            <span className="text-[6.5px] font-mono text-slate-600 tracking-wider">
              {isArmed ? 'LIVE_CIRCUIT' : 'INTERLOCK_ENGAGED'}
            </span>
            <HexScrew />
          </div>
        </div>

        {/* Dynamic Digital Status Pill */}
        <div className="flex flex-col items-center mt-3 space-y-1 w-full max-w-[90%]">
          <div
            className={cn(
              'w-full py-1 px-2 rounded-md border flex items-center justify-center gap-1.5 text-[9px] font-mono font-bold tracking-widest uppercase transition-all duration-300 shadow-sm',
              isArmed
                ? 'bg-rose-950/50 border-rose-500/60 text-rose-300 shadow-[0_0_12px_rgba(251,90,126,0.3)] animate-pulse'
                : isCoverOpen
                  ? 'bg-amber-950/40 border-amber-500/50 text-amber-300'
                  : 'bg-slate-900/60 border-slate-700/60 text-emerald-400/90',
            )}
          >
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                isArmed
                  ? 'bg-rose-400 animate-ping'
                  : isCoverOpen
                    ? 'bg-amber-400'
                    : 'bg-emerald-400',
              )}
            />
            <span className="truncate">{isArmed ? armedLabel : disarmedLabel}</span>
          </div>

          {sublabel && (
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-tight text-center">
              {sublabel}
            </span>
          )}
        </div>
      </div>
    );
  },
);

KillSwitch.displayName = 'KillSwitch';
