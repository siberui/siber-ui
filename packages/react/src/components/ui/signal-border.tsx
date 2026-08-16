'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const signalBorderVariants = cva('pointer-events-none absolute inset-0 z-10 rounded-[inherit]', {
  variants: {
    signal: {
      cyan: 'text-cyan-400 [--sb-color:#00d9e8] [--sb-glow:rgba(0,217,232,0.4)]',
      violet: 'text-violet-400 [--sb-color:#a78bfa] [--sb-glow:rgba(167,139,250,0.4)]',
      green: 'text-emerald-400 [--sb-color:#34d399] [--sb-glow:rgba(52,211,153,0.4)]',
      amber: 'text-amber-400 [--sb-color:#f5a524] [--sb-glow:rgba(245,165,36,0.4)]',
      rose: 'text-rose-400 [--sb-color:#fb5a7e] [--sb-glow:rgba(251,90,126,0.4)]',
      white: 'text-slate-200 [--sb-color:#ffffff] [--sb-glow:rgba(255,255,255,0.3)]',
    },
    placement: {
      all: '',
      top: '',
      bottom: '',
      sides: '',
    },
    effect: {
      static: '',
      pulse: 'animate-[cyber-pulse_3s_ease-in-out_infinite]',
      dashed: '',
    },
    glow: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    signal: 'cyan',
    placement: 'all',
    effect: 'static',
    glow: false,
  },
});

export interface SignalBorderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof signalBorderVariants> {
  /** Optional embedded technical HUD badge on the top border */
  techNotch?: boolean;
  /** Custom text for technical HUD badge (default: '// SYS.01') */
  notchLabel?: string;
  /** Alignment of technical HUD badge */
  notchAlign?: 'left' | 'center' | 'right';
}

export const SignalBorder = React.forwardRef<HTMLDivElement, SignalBorderProps>(
  (
    {
      className,
      signal = 'cyan',
      placement = 'all',
      effect = 'static',
      glow = false,
      techNotch = false,
      notchLabel = '// SYS.01',
      notchAlign = 'left',
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(signalBorderVariants({ signal, placement, effect, glow }), className)}
        {...props}
      >
        {/* 1. Placement: ALL (Crisp 1px border with illuminated top gradient) */}
        {placement === 'all' && (
          <div
            className={cn(
              'absolute inset-0 rounded-[inherit] pointer-events-none border border-white/[0.08]',
              effect === 'dashed' && 'border-dashed border-current/30 [stroke-dasharray:4_4]',
            )}
          >
            {/* Top illuminated 1px laser hairline */}
            <div
              className={cn(
                'absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-80',
                glow && 'shadow-[0_0_8px_var(--sb-glow)]',
              )}
            />
          </div>
        )}

        {/* 2. Placement: TOP ONLY */}
        {placement === 'top' && (
          <div
            className={cn(
              'absolute inset-x-0 top-0 h-px pointer-events-none',
              effect === 'dashed'
                ? 'border-t border-dashed border-current/50'
                : 'bg-gradient-to-r from-transparent via-current to-transparent opacity-80',
              glow && 'shadow-[0_0_8px_var(--sb-glow)]',
            )}
          />
        )}

        {/* 3. Placement: BOTTOM ONLY */}
        {placement === 'bottom' && (
          <div
            className={cn(
              'absolute inset-x-0 bottom-0 h-px pointer-events-none',
              effect === 'dashed'
                ? 'border-b border-dashed border-current/50'
                : 'bg-gradient-to-r from-transparent via-current to-transparent opacity-80',
              glow && 'shadow-[0_0_8px_var(--sb-glow)]',
            )}
          />
        )}

        {/* 4. Placement: SIDES */}
        {placement === 'sides' && (
          <>
            <div
              className={cn(
                'absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-current to-transparent opacity-70 pointer-events-none',
                glow && 'shadow-[0_0_8px_var(--sb-glow)]',
              )}
            />
            <div
              className={cn(
                'absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-current to-transparent opacity-70 pointer-events-none',
                glow && 'shadow-[0_0_8px_var(--sb-glow)]',
              )}
            />
          </>
        )}

        {/* Technical HUD Tag Badge */}
        {techNotch && (
          <div
            className={cn(
              'absolute -top-2.5 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#060913] border border-current/40 text-[8px] font-mono font-bold tracking-widest text-current uppercase shadow-sm pointer-events-none',
              notchAlign === 'left' && 'left-6',
              notchAlign === 'center' && 'left-1/2 -translate-x-1/2',
              notchAlign === 'right' && 'right-6',
            )}
          >
            <span className="h-1 w-1 rounded-full bg-current animate-pulse" />
            <span>{notchLabel}</span>
          </div>
        )}
      </div>
    );
  },
);

SignalBorder.displayName = 'SignalBorder';
