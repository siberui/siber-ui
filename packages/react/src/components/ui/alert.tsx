'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle2, Info, ShieldAlert, X } from 'lucide-react';
import { cn } from '../../utils/cn';

/* ─────────────────────────────────────────────────────────
   Alert Variants
───────────────────────────────────────────────────────── */

const alertVariants = cva(
  [
    'relative flex items-start gap-3.5 w-full rounded-xl p-4',
    'bg-surface-1',
    'border transition-colors duration-200 ease-out',
    'overflow-hidden',
    // Top accent line
    'before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r',
    'before:from-transparent before:to-transparent',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-subtle border-primary-border/60',
          'before:via-primary/70',
        ].join(' '),
        'primary-subtle': [
          'bg-primary-subtle border-primary-border/60',
          'before:via-primary/50',
        ].join(' '),
        'primary-outline': [
          'bg-surface-1 border-primary-border/60',
          'before:via-primary/45',
        ].join(' '),
        neon: [
          'bg-surface-1 border-primary-border/60 shadow-glow-cyan',
          'before:via-primary/60',
        ].join(' '),
        info: [
          'bg-primary-subtle border-primary-border/60',
          'before:via-primary/60',
        ].join(' '),
        success: [
          'bg-success-subtle border-success-border/60',
          'before:via-success/60',
        ].join(' '),
        warning: [
          'bg-warning-subtle border-warning-border/60',
          'before:via-warning/60',
        ].join(' '),
        destructive: [
          'bg-danger-subtle border-danger-border/60',
          'before:via-danger/60',
        ].join(' '),
        glass: [
          'bg-white/[0.04] border-white/10 text-white backdrop-blur-xl shadow-2xl',
          'before:via-white/50',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'primary-subtle',
    },
  },
);

const iconVariantMap: Record<string, React.ReactNode> = {
  primary: (
    <Info
      className="h-4.5 w-4.5 shrink-0 mt-0.5 text-primary"
      strokeWidth={1.5}
    />
  ),
  'primary-subtle': (
    <Info
      className="h-4.5 w-4.5 shrink-0 mt-0.5 text-primary"
      strokeWidth={1.5}
    />
  ),
  'primary-outline': (
    <Info
      className="h-4.5 w-4.5 shrink-0 mt-0.5 text-primary"
      strokeWidth={1.5}
    />
  ),
  neon: (
    <Info
      className="h-4.5 w-4.5 shrink-0 mt-0.5 text-primary"
      strokeWidth={1.5}
    />
  ),
  info: (
    <Info
      className="h-4.5 w-4.5 shrink-0 mt-0.5 text-primary"
      strokeWidth={1.5}
    />
  ),
  success: (
    <CheckCircle2
      className="h-4.5 w-4.5 shrink-0 mt-0.5 text-signal-green"
      strokeWidth={1.5}
    />
  ),
  warning: (
    <AlertCircle
      className="h-4.5 w-4.5 shrink-0 mt-0.5 text-signal-amber"
      strokeWidth={1.5}
    />
  ),
  destructive: (
    <ShieldAlert
      className="h-4.5 w-4.5 shrink-0 mt-0.5 text-signal-rose"
      strokeWidth={1.5}
    />
  ),
  glass: (
    <Info
      className="h-4.5 w-4.5 shrink-0 mt-0.5 text-cyan-400"
      strokeWidth={1.5}
    />
  ),
};

const titleColorMap: Record<string, string> = {
  primary: 'text-primary',
  'primary-subtle': 'text-primary',
  'primary-outline': 'text-primary',
  neon: 'text-primary',
  info: 'text-primary',
  success: 'text-success',
  warning: 'text-warning',
  destructive: 'text-danger',
  glass: 'text-white',
};

/* ─────────────────────────────────────────────────────────
   Alert Props & Component
───────────────────────────────────────────────────────── */

export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  closable?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'primary-subtle',
      title,
      icon,
      onClose,
      closable = false,
      children,
      ...props
    },
    ref,
  ) => {
    const variantKey = variant ?? 'primary-subtle';
    const defaultIcon = iconVariantMap[variantKey];
    const titleColor = titleColorMap[variantKey];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        {/* Icon */}
        <div className="shrink-0">{icon ?? defaultIcon}</div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-0.5">
          {title && (
            <p
              className={cn(
                'text-sm font-semibold font-sans leading-tight',
                titleColor,
              )}
            >
              {title}
            </p>
          )}
          {children && (
            <p className="text-[13px] text-fg-muted font-sans leading-relaxed">
              {children}
            </p>
          )}
        </div>

        {/* Close Button */}
        {closable && (
          <button
            type="button"
            aria-label="Dismiss alert"
            onClick={onClose}
            className="ml-auto shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-md text-fg-subtle hover:text-fg bg-surface-2 hover:bg-surface-3 border border-border-default hover:border-border-strong transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-cyan/50"
          >
            <X
              className="h-3.5 w-3.5"
              strokeWidth={1.75}
            />
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = 'Alert';

export { Alert, alertVariants };
