'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const scanlineVariants = cva('pointer-events-none absolute inset-0 overflow-hidden select-none z-10', {
  variants: {
    variant: {
      crt: '',
      sweep: '',
      grid: '',
      glitch: '',
    },
    signal: {
      cyan: '[--scanline-color:#00d9e8] text-cyan-400',
      violet: '[--scanline-color:#a78bfa] text-violet-400',
      green: '[--scanline-color:#34d399] text-emerald-400',
      amber: '[--scanline-color:#f5a524] text-amber-400',
      rose: '[--scanline-color:#fb5a7e] text-rose-400',
      white: '[--scanline-color:#ffffff] text-slate-100',
    },
    density: {
      fine: '[--scan-step:2px]',
      medium: '[--scan-step:4px]',
      coarse: '[--scan-step:8px]',
    },
    intensity: {
      subtle: 'opacity-20',
      medium: 'opacity-40',
      high: 'opacity-70',
    },
    speed: {
      slow: '[--sweep-duration:5s]',
      normal: '[--sweep-duration:2.5s]',
      fast: '[--sweep-duration:1.2s]',
    },
  },
  defaultVariants: {
    variant: 'crt',
    signal: 'cyan',
    density: 'medium',
    intensity: 'medium',
    speed: 'normal',
  },
});

export interface ScanlineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scanlineVariants> {
  /** Direction of sweeping beam */
  direction?: 'vertical' | 'horizontal';
  /** Enable subtle CRT phosphor flicker */
  flicker?: boolean;
}

const Scanline = React.forwardRef<HTMLDivElement, ScanlineProps>(
  (
    {
      className,
      variant = 'crt',
      signal = 'cyan',
      density = 'medium',
      intensity = 'medium',
      speed = 'normal',
      direction = 'vertical',
      flicker = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          scanlineVariants({ variant, signal, density, intensity, speed }),
          flicker && 'motion-safe:animate-[neon-flicker_6s_steps(2,start)_infinite]',
          className,
        )}
        {...props}
      >
        {/* 1. CRT Static Scanline Raster Pattern */}
        {(variant === 'crt' || variant === 'grid') && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0px, rgba(0, 0, 0, 0.6) 1px, transparent 1px, transparent var(--scan-step, 4px))',
              backgroundSize: '100% var(--scan-step, 4px)',
            }}
          />
        )}

        {/* 2. Grid Substrate Raster */}
        {variant === 'grid' && (
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                'linear-gradient(to right, var(--scanline-color) 1px, transparent 1px), linear-gradient(to bottom, var(--scanline-color) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />
        )}

        {/* 3. Sweeping High-Energy Laser Beam */}
        {(variant === 'sweep' || variant === 'grid' || variant === 'glitch') && (
          <div
            className={cn(
              'absolute pointer-events-none',
              direction === 'vertical'
                ? 'inset-x-0 h-6 animate-[laser-sweep-bounce_var(--sweep-duration,2.5s)_ease-in-out_infinite]'
                : 'inset-y-0 w-6 animate-[laser-sweep-horizontal_var(--sweep-duration,2.5s)_ease-in-out_infinite]',
            )}
          >
            {/* Subtle Diffused Bloom Wash */}
            <div
              className={cn(
                'w-full h-full opacity-20 blur-[2px]',
                direction === 'vertical'
                  ? 'bg-gradient-to-b from-transparent via-current to-transparent'
                  : 'bg-gradient-to-r from-transparent via-current to-transparent',
              )}
            />
            {/* Ultra-Precision 1px Laser Hairline */}
            <div
              className={cn(
                'absolute',
                direction === 'vertical'
                  ? 'top-1/2 inset-x-0 h-px bg-gradient-to-r from-transparent via-current to-transparent shadow-[0_0_4px_var(--scanline-color)]'
                  : 'left-1/2 inset-y-0 w-px bg-gradient-to-b from-transparent via-current to-transparent shadow-[0_0_4px_var(--scanline-color)]',
              )}
            />
          </div>
        )}

        {children}
      </div>
    );
  },
);

Scanline.displayName = 'Scanline';

export { Scanline, scanlineVariants };
