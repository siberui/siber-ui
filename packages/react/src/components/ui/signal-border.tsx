import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * SignalBorder — a thin 1px gradient edge that fades from a signal color to
 * transparent. This is SiberUI's primary "instrumented surface" border
 * primitive, used instead of ad-hoc glow shadows.
 */
const signalBorderVariants = cva('signal-border', {
  variants: {
    signal: {
      cyan: '[--sb-signal-color:var(--sb-signal-cyan)]',
      violet: '[--sb-signal-color:var(--sb-signal-violet)]',
      green: '[--sb-signal-color:var(--sb-signal-green)]',
      amber: '[--sb-signal-color:var(--sb-signal-amber)]',
      rose: '[--sb-signal-color:var(--sb-signal-rose)]',
    },
  },
  defaultVariants: {
    signal: 'cyan',
  },
});

export interface SignalBorderProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof signalBorderVariants> {}

const SignalBorder = React.forwardRef<HTMLDivElement, SignalBorderProps>(
  ({ className, signal, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(signalBorderVariants({ signal }), className)}
      {...props}
    />
  ),
);
SignalBorder.displayName = 'SignalBorder';

export { SignalBorder, signalBorderVariants };
