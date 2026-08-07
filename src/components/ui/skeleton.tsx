import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Base Skeleton — single animated block
// ─────────────────────────────────────────────────────────────────────────────
const skeletonVariants = cva(
  'relative overflow-hidden rounded-md',
  {
    variants: {
      variant: {
        /** Subtle grey shimmer — neutral contexts */
        default: 'bg-slate-900/40 border border-white/[0.04] backdrop-blur-[2px]',
        /** Cyan-tinted shimmer — neon / highlighted contexts */
        neon: 'bg-cyan-950/20 border border-cyan-500/20 backdrop-blur-[2px] shadow-[0_0_15px_rgba(0,240,255,0.05)]',
        /** Glassy effect */
        glass: 'bg-white/[0.02] border border-white/[0.08] backdrop-blur-md',
      },
      animation: {
        pulse: '',
        shimmer: '',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      animation: 'shimmer',
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, animation = 'shimmer', style, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(skeletonVariants({ variant, animation }), className)}
      style={style}
      {...props}
    >
      {/* Shimmer sweep */}
      {animation === 'shimmer' && (
        <span
          className={cn(
            'absolute inset-0 -translate-x-full animate-shimmer-sweep',
            variant === 'neon'
              ? 'bg-gradient-to-r from-transparent via-cyan-400/20 via-50% to-transparent'
              : variant === 'glass'
              ? 'bg-gradient-to-r from-transparent via-white/[0.1] via-50% to-transparent'
              : 'bg-gradient-to-r from-transparent via-white/[0.06] via-50% to-transparent'
          )}
        />
      )}
      {/* Pulse is handled by Tailwind animate-pulse on the wrapper */}
      {animation === 'pulse' && (
        <span className="absolute inset-0 animate-pulse bg-white/[0.04]" />
      )}
    </div>
  )
);
Skeleton.displayName = 'Skeleton';

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonText — paragraph-like lines
// ─────────────────────────────────────────────────────────────────────────────
interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
  variant?: 'default' | 'neon' | 'glass';
  animation?: 'shimmer' | 'pulse' | 'none';
  /** Shorten the last line to look more natural */
  lastLineWidth?: string;
}

const SkeletonText = ({
  lines = 3,
  variant,
  animation,
  lastLineWidth = '60%',
  className,
  ...props
}: SkeletonTextProps) => (
  <div className={cn('flex flex-col gap-2', className)} {...props}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        variant={variant}
        animation={animation}
        className="h-3 rounded"
        style={{ width: i === lines - 1 && lines > 1 ? lastLineWidth : '100%' }}
      />
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonAvatar — circular placeholder
// ─────────────────────────────────────────────────────────────────────────────
const sizeMap = { sm: 32, md: 40, lg: 48, xl: 64 } as const;

interface SkeletonAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeMap;
  variant?: 'default' | 'neon' | 'glass';
  animation?: 'shimmer' | 'pulse' | 'none';
}

const SkeletonAvatar = ({
  size = 'md',
  variant,
  animation,
  className,
  ...props
}: SkeletonAvatarProps) => (
  <Skeleton
    variant={variant}
    animation={animation}
    className={cn('shrink-0 rounded-full', className)}
    style={{ width: sizeMap[size], height: sizeMap[size] }}
    {...props}
  />
);

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonCard — full card placeholder
// ─────────────────────────────────────────────────────────────────────────────
interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'neon' | 'glass';
  animation?: 'shimmer' | 'pulse' | 'none';
  hasImage?: boolean;
}

const SkeletonCard = ({
  variant,
  animation,
  hasImage = true,
  className,
  ...props
}: SkeletonCardProps) => (
  <div
    className={cn(
      'rounded-xl border p-5 space-y-4',
        variant === 'neon'
        ? 'border-cyan-500/20 bg-cyan-950/10 shadow-[0_0_20px_rgba(0,240,255,0.05)]'
        : variant === 'glass'
        ? 'border-white/[0.08] bg-white/[0.02] backdrop-blur-xl'
        : 'border-white/[0.04] bg-slate-900/40',
      className
    )}
    {...props}
  >
    {hasImage && (
      <Skeleton
        variant={variant}
        animation={animation}
        className="w-full h-40 rounded-lg"
      />
    )}
    <div className="flex items-center gap-3">
      <SkeletonAvatar size="md" variant={variant} animation={animation} />
      <div className="flex-1 space-y-2">
        <Skeleton variant={variant} animation={animation} className="h-3 w-2/3" />
        <Skeleton variant={variant} animation={animation} className="h-3 w-1/3" />
      </div>
    </div>
    <SkeletonText lines={3} variant={variant} animation={animation} />
  </div>
);

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard, skeletonVariants };
