'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Bot, User, Cpu } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   Avatar Root Variants
───────────────────────────────────────────────────────── */

const avatarVariants = cva(
  [
    'relative inline-flex items-center justify-center shrink-0',
    'overflow-hidden select-none',
    'font-mono font-semibold tracking-tight',
    'transition-all duration-300 ease-out',
  ].join(' '),
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-lg',
        '2xl': 'h-20 w-20 text-xl',
      },
      shape: {
        circle: 'rounded-full',
        squircle: 'rounded-2xl',
        square: 'rounded-lg',
      },
      variant: {
        default: 'bg-surface-1 border border-border-hairline text-slate-200',
        neon: 'bg-[#050811] border border-cyan-500/50 shadow-[0_0_18px_rgba(0,217,232,0.3)] text-cyan-200 ring-1 ring-cyan-400/30',
        glass: 'backdrop-blur-xl bg-white/[0.04] border border-white/[0.15] shadow-2xl text-white',
        hologram: 'bg-cyan-950/40 border border-cyan-400/40 text-cyan-300 shadow-[0_0_24px_rgba(0,217,232,0.35)]',
      },
      ring: {
        none: '',
        cyan: 'ring-2 ring-cyan-500/60 ring-offset-2 ring-offset-slate-950 shadow-[0_0_16px_rgba(0,217,232,0.35)]',
        violet: 'ring-2 ring-violet-500/60 ring-offset-2 ring-offset-slate-950 shadow-[0_0_16px_rgba(167,139,250,0.35)]',
        emerald: 'ring-2 ring-emerald-500/60 ring-offset-2 ring-offset-slate-950 shadow-[0_0_16px_rgba(52,211,153,0.35)]',
        rose: 'ring-2 ring-rose-500/60 ring-offset-2 ring-offset-slate-950 shadow-[0_0_16px_rgba(251,90,126,0.35)]',
        amber: 'ring-2 ring-amber-500/60 ring-offset-2 ring-offset-slate-950 shadow-[0_0_16px_rgba(245,165,36,0.35)]',
        white: 'ring-2 ring-white/30 ring-offset-2 ring-offset-slate-950',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
      variant: 'default',
      ring: 'none',
    },
  }
);

/* ─────────────────────────────────────────────────────────
   Status Configuration
───────────────────────────────────────────────────────── */

export type AvatarStatus = 'online' | 'idle' | 'busy' | 'streaming' | 'offline';

const statusConfig: Record<AvatarStatus, { color: string; glow: string; label: string; animate?: string }> = {
  online: {
    color: 'bg-emerald-400',
    glow: 'shadow-[0_0_8px_rgba(52,211,153,0.9)]',
    label: 'Online',
    animate: 'animate-pulse',
  },
  idle: {
    color: 'bg-amber-400',
    glow: 'shadow-[0_0_8px_rgba(245,165,36,0.9)]',
    label: 'Idle',
  },
  busy: {
    color: 'bg-rose-500',
    glow: 'shadow-[0_0_8px_rgba(251,90,126,0.9)]',
    label: 'Busy / DND',
  },
  streaming: {
    color: 'bg-cyan-400',
    glow: 'shadow-[0_0_10px_rgba(0,217,232,1)]',
    label: 'Streaming Telemetry',
    animate: 'animate-ping',
  },
  offline: {
    color: 'bg-slate-600',
    glow: '',
    label: 'Offline',
  },
};

/* ─────────────────────────────────────────────────────────
   Avatar Fallback Helper
───────────────────────────────────────────────────────── */

const fallbackPalette = [
  'text-cyan-300',
  'text-violet-300',
  'text-emerald-300',
  'text-amber-300',
  'text-rose-300',
  'text-sky-300',
];

function getInitials(name: string): string {
  if (!name) return '';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function getColorFromName(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return fallbackPalette[Math.abs(hash) % fallbackPalette.length];
}

/* ─────────────────────────────────────────────────────────
   Avatar Component
───────────────────────────────────────────────────────── */

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  name?: string;
  fallbackType?: 'initials' | 'user' | 'bot' | 'cpu';
  status?: AvatarStatus;
  statusPosition?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left';
  scanline?: boolean;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      size = 'md',
      shape = 'circle',
      variant = 'default',
      ring = 'none',
      src,
      alt,
      name = '',
      fallbackType = 'initials',
      status,
      statusPosition = 'bottom-right',
      scanline = false,
      ...props
    },
    ref
  ) => {
    const [imgError, setImgError] = React.useState(false);
    const showImg = src && !imgError;
    const initials = getInitials(name);
    const textColor = getColorFromName(name);

    const statusDotSize: Record<NonNullable<typeof size>, string> = {
      xs: 'h-1.5 w-1.5 border-[1px]',
      sm: 'h-2 w-2 border-[1.5px]',
      md: 'h-2.5 w-2.5 border-2',
      lg: 'h-3 w-3 border-2',
      xl: 'h-3.5 w-3.5 border-2',
      '2xl': 'h-4 w-4 border-2',
    };

    const statusPositionMap = {
      'bottom-right': 'bottom-0 right-0 translate-x-[15%] translate-y-[15%]',
      'top-right': 'top-0 right-0 translate-x-[15%] -translate-y-[15%]',
      'bottom-left': 'bottom-0 left-0 -translate-x-[15%] translate-y-[15%]',
      'top-left': 'top-0 left-0 -translate-x-[15%] -translate-y-[15%]',
    };

    const renderFallback = () => {
      if (fallbackType === 'bot') {
        return <Bot className="h-1/2 w-1/2 text-cyan-400" />;
      }
      if (fallbackType === 'cpu') {
        return <Cpu className="h-1/2 w-1/2 text-violet-400" />;
      }
      if (fallbackType === 'user' || !initials) {
        return <User className="h-1/2 w-1/2 text-slate-400" />;
      }
      return <span className={cn('leading-none font-bold', textColor)}>{initials}</span>;
    };

    return (
      <div ref={ref} className={cn('relative inline-flex shrink-0 group', className)} {...props}>
        <div className={cn(avatarVariants({ size, shape, variant, ring }))}>
          {showImg ? (
            <img
              src={src}
              alt={alt ?? name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            renderFallback()
          )}

          {/* Holographic cyber-scanline overlay */}
          {scanline && (
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,217,232,0.15)_51%)] bg-[size:100%_4px] mix-blend-overlay opacity-80" />
          )}
        </div>

        {/* Status Indicator Dot */}
        {status && (
          <span className={cn('absolute z-10 flex items-center justify-center', statusPositionMap[statusPosition])}>
            {statusConfig[status].animate && (
              <span
                className={cn(
                  'absolute rounded-full opacity-75',
                  statusDotSize[size ?? 'md'],
                  statusConfig[status].color,
                  statusConfig[status].animate
                )}
              />
            )}
            <span
              aria-label={statusConfig[status].label}
              className={cn(
                'relative rounded-full border-slate-950',
                statusDotSize[size ?? 'md'],
                statusConfig[status].color,
                statusConfig[status].glow
              )}
            />
          </span>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

/* ─────────────────────────────────────────────────────────
   AvatarGroup — stacked overlap layout
───────────────────────────────────────────────────────── */

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  size?: AvatarProps['size'];
  shape?: AvatarProps['shape'];
  variant?: AvatarProps['variant'];
  ring?: AvatarProps['ring'];
  avatars: Pick<AvatarProps, 'src' | 'name' | 'alt' | 'status' | 'fallbackType'>[];
}

function AvatarGroup({
  avatars,
  max = 4,
  size = 'md',
  shape = 'circle',
  variant = 'default',
  ring = 'none',
  className,
  ...props
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <div className={cn('flex items-center -space-x-2.5 hover:space-x-1 transition-all duration-300', className)} {...props}>
      {visible.map((a, i) => (
        <Avatar
          key={i}
          src={a.src}
          name={a.name ?? ''}
          alt={a.alt}
          status={a.status}
          fallbackType={a.fallbackType}
          size={size}
          shape={shape}
          variant={variant}
          ring={ring !== 'none' ? ring : 'white'}
          className="transition-transform duration-200 hover:scale-110 hover:z-30 cursor-pointer"
          style={{ zIndex: visible.length - i }}
        />
      ))}
      {overflow > 0 && (
        <div
          className={cn(
            avatarVariants({ size, shape, variant }),
            'ring-2 ring-slate-950 bg-surface-2 border-border-hairline text-cyan-300 font-mono text-xs z-0'
          )}
        >
          +{overflow}
        </div>
      )}
    </div>
  );
}

export { Avatar, avatarVariants, AvatarGroup };
