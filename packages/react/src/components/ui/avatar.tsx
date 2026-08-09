'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/* ─────────────────────────────────────────────────────────
   Avatar Root
───────────────────────────────────────────────────────── */

const avatarVariants = cva(
  [
    'relative inline-flex items-center justify-center shrink-0',
    'rounded-full overflow-hidden',
    'bg-white/[0.05] border border-border-hairline',
    'font-mono font-semibold tracking-tight select-none',
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
      ring: {
        none: '',
        cyan: 'ring-2 ring-cyan-500/50 ring-offset-2 ring-offset-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.2)]',
        purple: 'ring-2 ring-purple-500/50 ring-offset-2 ring-offset-slate-950 shadow-[0_0_15px_rgba(168,85,247,0.2)]',
        green: 'ring-2 ring-emerald-500/50 ring-offset-2 ring-offset-slate-950 shadow-[0_0_15px_rgba(57,255,20,0.2)]',
        white: 'ring-2 ring-white/20 ring-offset-2 ring-offset-slate-950',
      },
    },
    defaultVariants: {
      size: 'md',
      ring: 'none',
    },
  }
);

/* ─────────────────────────────────────────────────────────
   Status dot
───────────────────────────────────────────────────────── */

export type AvatarStatus = 'online' | 'idle' | 'busy' | 'offline';

const statusConfig: Record<AvatarStatus, { color: string; glow: string; label: string }> = {
  online: {
    color: 'bg-emerald-400',
    glow: 'shadow-[0_0_6px_rgba(57,255,20,0.8)]',
    label: 'Online',
  },
  idle: {
    color: 'bg-amber-400',
    glow: 'shadow-[0_0_6px_rgba(245,158,11,0.8)]',
    label: 'Idle',
  },
  busy: {
    color: 'bg-rose-500',
    glow: 'shadow-[0_0_6px_rgba(244,63,94,0.8)]',
    label: 'Busy',
  },
  offline: {
    color: 'bg-slate-600',
    glow: '',
    label: 'Offline',
  },
};

/* ─────────────────────────────────────────────────────────
   Avatar fallback color from initials
───────────────────────────────────────────────────────── */

const fallbackPalette = [
  'text-cyan-300',
  'text-purple-300',
  'text-emerald-300',
  'text-amber-300',
  'text-rose-300',
  'text-sky-300',
];

function getInitials(name: string): string {
  return name
    .split(' ')
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
  status?: AvatarStatus;
  statusPosition?: 'bottom-right' | 'top-right';
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      size = 'md',
      ring,
      src,
      alt,
      name = '',
      status,
      statusPosition = 'bottom-right',
      ...props
    },
    ref
  ) => {
    const [imgError, setImgError] = React.useState(false);
    const showImg = src && !imgError;
    const initials = getInitials(name);
    const textColor = getColorFromName(name);

    const statusDotSize: Record<NonNullable<typeof size>, string> = {
      xs: 'h-1.5 w-1.5 border',
      sm: 'h-2 w-2 border',
      md: 'h-2.5 w-2.5 border',
      lg: 'h-3 w-3 border-2',
      xl: 'h-3.5 w-3.5 border-2',
      '2xl': 'h-4 w-4 border-2',
    };

    const statusPosition_class =
      statusPosition === 'top-right'
        ? 'top-0 right-0'
        : 'bottom-0 right-0';

    return (
      <div ref={ref} className={cn('relative inline-flex', className)} {...props}>
        <div className={cn(avatarVariants({ size, ring }))}>
          {showImg ? (
            <img
              src={src}
              alt={alt ?? name}
              className="h-full w-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className={cn('leading-none', textColor)}>{initials || '?'}</span>
          )}
        </div>

        {status && (
          <span
            aria-label={statusConfig[status].label}
            className={cn(
              'absolute rounded-full border-slate-950',
              statusDotSize[size ?? 'md'],
              statusPosition_class,
              statusConfig[status].color,
              statusConfig[status].glow
            )}
          />
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
  ring?: AvatarProps['ring'];
  avatars: Pick<AvatarProps, 'src' | 'name' | 'alt' | 'status'>[];
}

function AvatarGroup({
  avatars,
  max = 4,
  size = 'md',
  ring = 'none',
  className,
  ...props
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <div className={cn('flex items-center', className)} {...props}>
      {visible.map((a, i) => (
        <Avatar
          key={i}
          src={a.src}
          name={a.name ?? ''}
          alt={a.alt}
          status={a.status}
          size={size}
          ring={ring}
          className={i > 0 ? '-ml-2' : ''}
          style={{ zIndex: visible.length - i }}
        />
      ))}
      {overflow > 0 && (
        <div
          className={cn(
            avatarVariants({ size }),
            '-ml-2 bg-white/[0.06] border-border-hairline text-slate-400',
            'z-0'
          )}
        >
          +{overflow}
        </div>
      )}
    </div>
  );
}

export { Avatar, avatarVariants, AvatarGroup };
