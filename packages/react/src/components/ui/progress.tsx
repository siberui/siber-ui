import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full border border-border-hairline bg-surface-1',
  {
    variants: {
      // Track stays neutral hairline across variants — the fill carries the
      // visual weight, not the outline.
      variant: {
        primary: '',
        'primary-subtle': '',
        'primary-outline': '',
        neon: '',
        default: '',
        neonPurple: '',
        neonGreen: '',
        destructive: '',
      },
      size: {
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

const progressIndicatorVariants = cva(
  'h-full w-full flex-1 transition-all duration-500 ease-out',
  {
    variants: {
      variant: {
        primary: 'bg-primary',
        'primary-subtle': 'bg-primary',
        'primary-outline': 'bg-primary',
        default: 'bg-primary',
        neon: 'bg-primary shadow-glow-cyan',
        neonPurple: 'bg-secondary shadow-glow-purple',
        neonGreen: 'bg-success shadow-glow-green',
        destructive: 'bg-danger shadow-glow-rose',
      },
      isIndeterminate: {
        true: 'animate-progress-indeterminate origin-left',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      isIndeterminate: false,
    },
  },
);

export interface ProgressProps
  extends
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  indicatorClassName?: string;
  isIndeterminate?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value,
      variant,
      size,
      indicatorClassName,
      isIndeterminate,
      ...props
    },
    ref,
  ) => {
    // If no value is provided, it's considered indeterminate
    const indeterminate =
      isIndeterminate || value === undefined || value === null;

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(progressVariants({ variant, size }), className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            progressIndicatorVariants({
              variant,
              isIndeterminate: indeterminate,
            }),
            indicatorClassName,
          )}
          style={{
            transform: indeterminate
              ? 'translateX(0)'
              : `translateX(-${100 - (value || 0)}%)`,
          }}
        />
      </ProgressPrimitive.Root>
    );
  },
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants };
