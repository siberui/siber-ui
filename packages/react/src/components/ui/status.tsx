import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Status system — one of SiberUI's signature primitives. A single source of
 * truth for state -> color -> label mapping across the whole library.
 * Animation (pulse) is opt-in and only meaningful for live states.
 */
export type StatusState =
  | 'online'
  | 'offline'
  | 'idle'
  | 'loading'
  | 'warning'
  | 'critical'
  | 'unknown';

export const statusConfig: Record<
  StatusState,
  { label: string; dot: string; text: string; ring: string }
> = {
  online: {
    label: 'Online',
    dot: 'bg-signal-green',
    text: 'text-signal-green',
    ring: 'rgba(52, 211, 153, 0.45)',
  },
  offline: {
    label: 'Offline',
    dot: 'bg-fg-subtle',
    text: 'text-fg-subtle',
    ring: 'rgba(148, 163, 184, 0.3)',
  },
  idle: {
    label: 'Idle',
    dot: 'bg-signal-amber',
    text: 'text-signal-amber',
    ring: 'rgba(245, 165, 36, 0.4)',
  },
  loading: {
    label: 'Loading',
    dot: 'bg-signal-cyan',
    text: 'text-signal-cyan',
    ring: 'rgba(0, 217, 232, 0.4)',
  },
  warning: {
    label: 'Warning',
    dot: 'bg-signal-amber',
    text: 'text-signal-amber',
    ring: 'rgba(245, 165, 36, 0.4)',
  },
  critical: {
    label: 'Critical',
    dot: 'bg-signal-rose',
    text: 'text-signal-rose',
    ring: 'rgba(251, 90, 126, 0.45)',
  },
  unknown: {
    label: 'Unknown',
    dot: 'bg-fg-subtle',
    text: 'text-fg-subtle',
    ring: 'rgba(148, 163, 184, 0.3)',
  },
};

const dotSizeMap = { sm: 'h-1.5 w-1.5', md: 'h-2 w-2', lg: 'h-2.5 w-2.5' };

/* ─────────────────────────────────────────────────────────
   StatusDot — the smallest unit: a colored dot, optionally pulsing
───────────────────────────────────────────────────────── */
export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  state?: StatusState;
  size?: 'sm' | 'md' | 'lg';
  /** Animate only when the state is meaningfully "live" (default: online/loading/critical). */
  pulse?: boolean;
}

const StatusDot = React.forwardRef<HTMLSpanElement, StatusDotProps>(
  (
    { className, state = 'unknown', size = 'md', pulse, style, ...props },
    ref,
  ) => {
    const cfg = statusConfig[state];
    const shouldPulse =
      pulse ??
      (state === 'online' || state === 'loading' || state === 'critical');
    return (
      <span
        ref={ref}
        role="status"
        aria-label={cfg.label}
        className={cn(
          'inline-block rounded-full',
          dotSizeMap[size],
          cfg.dot,
          shouldPulse && 'status-dot',
          className,
        )}
        style={{ ['--sb-status-glow' as string]: cfg.ring, ...style }}
        {...props}
      />
    );
  },
);
StatusDot.displayName = 'StatusDot';

/* ─────────────────────────────────────────────────────────
   StatusBadge — dot + label as a compact pill
───────────────────────────────────────────────────────── */
const statusBadgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-label',
  {
    variants: {
      size: {
        sm: 'text-[11px] px-1.5 py-0.5',
        md: 'text-xs px-2 py-0.5',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

export interface StatusBadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  state?: StatusState;
  label?: React.ReactNode;
  pulse?: boolean;
}

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ className, state = 'unknown', label, pulse, size, ...props }, ref) => {
    const cfg = statusConfig[state];
    return (
      <div
        ref={ref}
        className={cn(
          statusBadgeVariants({ size }),
          'border-border-default bg-surface-2',
          cfg.text,
          className,
        )}
        {...props}
      >
        <StatusDot
          state={state}
          pulse={pulse}
          size="sm"
        />
        <span>{label ?? cfg.label}</span>
      </div>
    );
  },
);
StatusBadge.displayName = 'StatusBadge';

/* ─────────────────────────────────────────────────────────
   StatusIndicator — icon-forward variant for headers/toolbars
───────────────────────────────────────────────────────── */
export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: StatusState;
  label?: React.ReactNode;
}

const StatusIndicator = React.forwardRef<HTMLDivElement, StatusIndicatorProps>(
  ({ className, state = 'unknown', label, ...props }, ref) => {
    const cfg = statusConfig[state];
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center gap-2', className)}
        {...props}
      >
        {state === 'loading' ? (
          <Loader2
            className={cn('h-3.5 w-3.5 animate-spin', cfg.text)}
            strokeWidth={2}
          />
        ) : (
          <StatusDot
            state={state}
            size="md"
          />
        )}
        <span className={cn('text-label', cfg.text)}>{label ?? cfg.label}</span>
      </div>
    );
  },
);
StatusIndicator.displayName = 'StatusIndicator';

/* ─────────────────────────────────────────────────────────
   Status — the full composite: dot/icon, label, description
───────────────────────────────────────────────────────── */
export interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: StatusState;
  label?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  showDot?: boolean;
  pulse?: boolean;
}

const Status = React.forwardRef<HTMLDivElement, StatusProps>(
  (
    {
      className,
      state = 'unknown',
      label,
      description,
      icon,
      showDot = true,
      pulse,
      ...props
    },
    ref,
  ) => {
    const cfg = statusConfig[state];
    return (
      <div
        ref={ref}
        className={cn('flex items-start gap-2.5', className)}
        {...props}
      >
        {icon ? (
          <span className={cn('mt-0.5 shrink-0', cfg.text)}>{icon}</span>
        ) : (
          showDot && (
            <StatusDot
              state={state}
              pulse={pulse}
              className="mt-1.5 shrink-0"
            />
          )
        )}
        <div className="min-w-0">
          <p className={cn('text-label', cfg.text)}>{label ?? cfg.label}</p>
          {description && (
            <p className="text-caption text-fg-subtle mt-0.5 normal-case tracking-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  },
);
Status.displayName = 'Status';

/* ─────────────────────────────────────────────────────────
   SystemState — label/value row for system metadata (uptime, region, etc.)
───────────────────────────────────────────────────────── */
export interface SystemStateProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  state?: StatusState;
}

const SystemState = React.forwardRef<HTMLDivElement, SystemStateProps>(
  ({ className, label, value, state, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-between gap-4 border-b border-border-default py-2.5 last:border-b-0',
        className,
      )}
      {...props}
    >
      <span className="text-caption text-fg-subtle">{label}</span>
      <span
        className={cn(
          'text-code inline-flex items-center gap-1.5',
          state ? statusConfig[state].text : 'text-fg-muted',
        )}
      >
        {state && (
          <StatusDot
            state={state}
            size="sm"
          />
        )}
        {value}
      </span>
    </div>
  ),
);
SystemState.displayName = 'SystemState';

export {
  Status,
  StatusDot,
  StatusBadge,
  StatusIndicator,
  SystemState,
  statusBadgeVariants,
};
