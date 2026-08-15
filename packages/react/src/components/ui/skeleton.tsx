'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Base Skeleton Variants — Futuristic HUD & Semantic Signal Tokens
// ─────────────────────────────────────────────────────────────────────────────
const skeletonVariants = cva(
  'relative overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        /** Neutral dark slate with silver shimmer */
        default: 'bg-slate-900/60 border border-white/[0.06] backdrop-blur-[2px]',
        /** Cyan-tinted cyber grid shimmer — primary / interactive */
        neon: 'bg-cyan-950/25 border border-cyan-500/25 backdrop-blur-[2px] shadow-[0_0_15px_rgba(0,217,232,0.08)]',
        /** Cyan synonym */
        cyan: 'bg-cyan-950/25 border border-cyan-500/25 backdrop-blur-[2px] shadow-[0_0_15px_rgba(0,217,232,0.08)]',
        /** Violet synaptic neural shimmer — core / telemetry */
        violet: 'bg-violet-950/25 border border-violet-500/25 backdrop-blur-[2px] shadow-[0_0_15px_rgba(167,139,250,0.08)]',
        /** Emerald verified data buffer shimmer */
        emerald: 'bg-emerald-950/25 border border-emerald-500/25 backdrop-blur-[2px] shadow-[0_0_15px_rgba(52,211,153,0.08)]',
        /** Amber warning / processing telemetry shimmer */
        amber: 'bg-amber-950/25 border border-amber-500/25 backdrop-blur-[2px] shadow-[0_0_15px_rgba(245,165,36,0.08)]',
        /** Rose critical breach / security quarantine shimmer */
        rose: 'bg-rose-950/25 border border-rose-500/25 backdrop-blur-[2px] shadow-[0_0_15px_rgba(251,90,126,0.08)]',
        /** Frosted acrylic glassmorphism */
        glass: 'bg-white/[0.03] border border-white/[0.12] backdrop-blur-xl shadow-2xl',
      },
      shape: {
        rounded: 'rounded-xl',
        circle: 'rounded-full',
        squircle: 'rounded-2xl',
        square: 'rounded-none',
      },
      animation: {
        shimmer: '',
        pulse: '',
        scan: '',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      shape: 'rounded',
      animation: 'shimmer',
    },
  }
);

const shimmerGradients = {
  default: 'from-transparent via-white/[0.08] via-50% to-transparent',
  neon: 'from-transparent via-cyan-400/25 via-50% to-transparent',
  cyan: 'from-transparent via-cyan-400/25 via-50% to-transparent',
  violet: 'from-transparent via-violet-400/25 via-50% to-transparent',
  emerald: 'from-transparent via-emerald-400/25 via-50% to-transparent',
  amber: 'from-transparent via-amber-400/25 via-50% to-transparent',
  rose: 'from-transparent via-rose-400/25 via-50% to-transparent',
  glass: 'from-transparent via-white/[0.15] via-50% to-transparent',
};

const pulseGlows = {
  default: 'bg-white/[0.04]',
  neon: 'bg-cyan-500/[0.08]',
  cyan: 'bg-cyan-500/[0.08]',
  violet: 'bg-violet-500/[0.08]',
  emerald: 'bg-emerald-500/[0.08]',
  amber: 'bg-amber-500/[0.08]',
  rose: 'bg-rose-500/[0.08]',
  glass: 'bg-white/[0.08]',
};

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /** Enables sleek rounded HUD corner tech brackets */
  hud?: boolean;
  /** Adds holographic CRT scanline raster */
  scanline?: boolean;
  /** Embeds tactical dotted target crosshairs in center */
  target?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = 'default',
      shape = 'rounded',
      animation = 'shimmer',
      hud = false,
      scanline = false,
      target = false,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const activeVariant = variant ?? 'default';

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          skeletonVariants({ variant: activeVariant, shape, animation }),
          hud && 'border-cyan-500/40 shadow-[0_0_20px_rgba(0,217,232,0.12)]',
          className
        )}
        style={style}
        {...props}
      >
        {/* Horizontal Shimmer Sweep */}
        {animation === 'shimmer' && (
          <span
            className={cn(
              'absolute inset-0 -translate-x-full animate-shimmer-sweep pointer-events-none bg-gradient-to-r',
              shimmerGradients[activeVariant]
            )}
          />
        )}

        {/* Vertical Laser Scan Sweep */}
        {animation === 'scan' && (
          <span
            className={cn(
              'absolute inset-0 -translate-y-full animate-scan-sweep pointer-events-none bg-gradient-to-b',
              shimmerGradients[activeVariant]
            )}
          />
        )}

        {/* Pulse Luminescence */}
        {animation === 'pulse' && (
          <span
            className={cn(
              'absolute inset-0 animate-pulse pointer-events-none',
              pulseGlows[activeVariant]
            )}
          />
        )}

        {/* Holographic CRT Scanline raster */}
        {scanline && (
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,217,232,0.08)_51%)] bg-[size:100%_4px] mix-blend-overlay opacity-70" />
        )}

        {/* Tactical HUD Corner Brackets */}
        {hud && (
          <>
            <span className="absolute top-2.5 left-2.5 w-3 h-3 rounded-tl-sm border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
            <span className="absolute top-2.5 right-2.5 w-3 h-3 rounded-tr-sm border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
            <span className="absolute bottom-2.5 left-2.5 w-3 h-3 rounded-bl-sm border-b-2 border-l-2 border-cyan-400/80 pointer-events-none" />
            <span className="absolute bottom-2.5 right-2.5 w-3 h-3 rounded-br-sm border-b-2 border-r-2 border-cyan-400/80 pointer-events-none" />
          </>
        )}

        {/* Tactical Dotted Center Target Reticle */}
        {target && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <div className="relative flex items-center justify-center w-16 h-16">
              {/* Outer dotted target ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-[spin_15s_linear_infinite]" />
              {/* Inner subtle solid ring */}
              <div className="absolute w-9 h-9 rounded-full border border-cyan-400/25" />
              {/* Center crosshair lines */}
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
              {/* Center target dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(0,217,232,0.9)] animate-pulse" />
            </div>
          </div>
        )}

        {children}
      </div>
    );
  }
);
Skeleton.displayName = 'Skeleton';

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonText — typography placeholder lines
// ─────────────────────────────────────────────────────────────────────────────
export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
  variant?: VariantProps<typeof skeletonVariants>['variant'];
  animation?: VariantProps<typeof skeletonVariants>['animation'];
  /** Shorten the last line to look more natural */
  lastLineWidth?: string;
}

const SkeletonText = ({
  lines = 3,
  variant,
  animation,
  lastLineWidth = '65%',
  className,
  ...props
}: SkeletonTextProps) => (
  <div className={cn('flex flex-col gap-2.5', className)} {...props}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        variant={variant}
        animation={animation}
        className="h-3 rounded-md"
        style={{ width: i === lines - 1 && lines > 1 ? lastLineWidth : '100%' }}
      />
    ))}
  </div>
);
SkeletonText.displayName = 'SkeletonText';

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonAvatar — circular, squircle or square entity placeholder
// ─────────────────────────────────────────────────────────────────────────────
const sizeMap = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  '2xl': 80,
} as const;

export interface SkeletonAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeMap;
  shape?: 'circle' | 'squircle' | 'square';
  variant?: VariantProps<typeof skeletonVariants>['variant'];
  animation?: VariantProps<typeof skeletonVariants>['animation'];
  scanline?: boolean;
}

const SkeletonAvatar = ({
  size = 'md',
  shape = 'circle',
  variant,
  animation,
  scanline = false,
  className,
  ...props
}: SkeletonAvatarProps) => (
  <Skeleton
    variant={variant}
    shape={shape}
    animation={animation}
    scanline={scanline}
    className={cn('shrink-0', className)}
    style={{ width: sizeMap[size], height: sizeMap[size] }}
    {...props}
  />
);
SkeletonAvatar.displayName = 'SkeletonAvatar';

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonBadge — tag or telemetry status badge placeholder
// ─────────────────────────────────────────────────────────────────────────────
export interface SkeletonBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: VariantProps<typeof skeletonVariants>['variant'];
  animation?: VariantProps<typeof skeletonVariants>['animation'];
  size?: 'sm' | 'md' | 'lg';
}

const SkeletonBadge = ({
  variant = 'neon',
  animation = 'shimmer',
  size = 'md',
  className,
  ...props
}: SkeletonBadgeProps) => {
  const badgeHeights = { sm: 'h-5 w-16', md: 'h-6 w-20', lg: 'h-7 w-24' };

  return (
    <Skeleton
      variant={variant}
      animation={animation}
      className={cn('rounded-full', badgeHeights[size], className)}
      {...props}
    />
  );
};
SkeletonBadge.displayName = 'SkeletonBadge';

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonCard — full panel placeholder with header, avatar & data rows
// ─────────────────────────────────────────────────────────────────────────────
export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: VariantProps<typeof skeletonVariants>['variant'];
  animation?: VariantProps<typeof skeletonVariants>['animation'];
  hasImage?: boolean;
  hasAvatar?: boolean;
  lines?: number;
  hud?: boolean;
  scanline?: boolean;
  target?: boolean;
}

const SkeletonCard = ({
  variant = 'default',
  animation = 'shimmer',
  hasImage = true,
  hasAvatar = true,
  lines = 3,
  hud = false,
  scanline = false,
  target = false,
  className,
  ...props
}: SkeletonCardProps) => (
  <div
    className={cn(
      'relative rounded-2xl border p-6 space-y-5 overflow-hidden transition-all',
      variant === 'neon' || variant === 'cyan'
        ? 'border-cyan-500/25 bg-[#050811] shadow-[0_0_25px_rgba(0,217,232,0.08)]'
        : variant === 'violet'
        ? 'border-violet-500/25 bg-[#080514] shadow-[0_0_25px_rgba(167,139,250,0.08)]'
        : variant === 'emerald'
        ? 'border-emerald-500/25 bg-[#040f0c] shadow-[0_0_25px_rgba(52,211,153,0.08)]'
        : variant === 'amber'
        ? 'border-amber-500/25 bg-[#120a03] shadow-[0_0_25px_rgba(245,165,36,0.08)]'
        : variant === 'rose'
        ? 'border-rose-500/25 bg-[#120509] shadow-[0_0_25px_rgba(251,90,126,0.08)]'
        : variant === 'glass'
        ? 'border-white/[0.12] bg-white/[0.03] backdrop-blur-xl shadow-2xl'
        : 'border-white/[0.08] bg-[#070b14]',
      hud && 'border-cyan-500/40 shadow-[0_0_20px_rgba(0,217,232,0.1)]',
      className
    )}
    {...props}
  >
    {/* Card Image / Viewport placeholder with optional target reticle */}
    {hasImage && (
      <Skeleton
        variant={variant}
        animation={animation}
        hud={hud}
        scanline={scanline}
        target={target}
        className="w-full h-36 rounded-xl"
      />
    )}

    {/* Header / Avatar row */}
    <div className="flex items-center gap-3.5">
      {hasAvatar && (
        <SkeletonAvatar
          size="md"
          shape="squircle"
          variant={variant}
          animation={animation}
        />
      )}
      <div className="flex-1 space-y-2">
        <Skeleton variant={variant} animation={animation} className="h-3.5 w-3/5 rounded-md" />
        <Skeleton variant={variant} animation={animation} className="h-2.5 w-2/5 rounded-md" />
      </div>
    </div>

    {/* Content lines */}
    <SkeletonText lines={lines} variant={variant} animation={animation} />

    {/* Refined rounded HUD Corner Tech Ticks on outer card */}
    {hud && (
      <>
        <span className="absolute top-3 left-3 w-3 h-3 rounded-tl-sm border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
        <span className="absolute top-3 right-3 w-3 h-3 rounded-tr-sm border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
        <span className="absolute bottom-3 left-3 w-3 h-3 rounded-bl-sm border-b-2 border-l-2 border-cyan-400/80 pointer-events-none" />
        <span className="absolute bottom-3 right-3 w-3 h-3 rounded-br-sm border-b-2 border-r-2 border-cyan-400/80 pointer-events-none" />
      </>
    )}

    {/* Center target reticle when card has no image */}
    {!hasImage && target && (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-[spin_15s_linear_infinite]" />
          <div className="absolute w-9 h-9 rounded-full border border-cyan-400/25" />
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(0,217,232,0.9)] animate-pulse" />
        </div>
      </div>
    )}
  </div>
);
SkeletonCard.displayName = 'SkeletonCard';

export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonBadge,
  SkeletonCard,
  skeletonVariants,
};
