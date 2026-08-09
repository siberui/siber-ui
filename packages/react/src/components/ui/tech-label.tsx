import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * TechLabel — small monospace metadata text (IDs, timestamps, technical
 * values). Uppercase tracking is used here deliberately, as metadata, not as
 * the default voice of the whole UI.
 */
const techLabelVariants = cva('text-caption text-fg-subtle', {
  variants: {
    tone: {
      neutral: 'text-fg-subtle',
      cyan: 'text-signal-cyan',
      violet: 'text-signal-violet',
      green: 'text-signal-green',
      amber: 'text-signal-amber',
      rose: 'text-signal-rose',
    },
  },
  defaultVariants: {
    tone: 'neutral',
  },
});

export interface TechLabelProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof techLabelVariants> {
  as?: 'span' | 'div' | 'label';
}

const TechLabel = React.forwardRef<HTMLSpanElement, TechLabelProps>(
  ({ className, tone, as: Comp = 'span', ...props }, ref) => (
    <Comp
      ref={ref as never}
      className={cn(techLabelVariants({ tone }), className)}
      {...props}
    />
  ),
);
TechLabel.displayName = 'TechLabel';

/**
 * SystemBadge — a compact bracketed system-style tag, e.g. `[ v1.2.0 ]` or
 * `[ BETA ]`. Optional, not a default decoration for every component.
 */
const systemBadgeVariants = cva(
  [
    'inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5',
    'text-caption leading-none',
  ].join(' '),
  {
    variants: {
      tone: {
        neutral: 'border-border-default text-fg-muted',
        cyan: 'border-signal-cyan/30 text-signal-cyan',
        violet: 'border-signal-violet/30 text-signal-violet',
        green: 'border-signal-green/30 text-signal-green',
        amber: 'border-signal-amber/30 text-signal-amber',
        rose: 'border-signal-rose/30 text-signal-rose',
      },
    },
    defaultVariants: {
      tone: 'neutral',
    },
  },
);

export interface SystemBadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof systemBadgeVariants> {}

const SystemBadge = React.forwardRef<HTMLSpanElement, SystemBadgeProps>(
  ({ className, tone, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(systemBadgeVariants({ tone }), className)}
      {...props}
    >
      {children}
    </span>
  ),
);
SystemBadge.displayName = 'SystemBadge';

export { TechLabel, techLabelVariants, SystemBadge, systemBadgeVariants };
