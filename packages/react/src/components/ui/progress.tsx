import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const progressVariants = cva(
  'relative w-full overflow-hidden bg-slate-900 rounded-full',
  {
    variants: {
      variant: {
        default: 'border border-slate-800',
        neon: 'border border-cyan-900/50',
        neonPurple: 'border border-purple-900/50',
        neonGreen: 'border border-emerald-900/50',
        destructive: 'border border-rose-900/50',
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
  }
);

const progressIndicatorVariants = cva(
  'h-full w-full flex-1 transition-all duration-500 ease-out',
  {
    variants: {
      variant: {
        default: 'bg-slate-100',
        neon: 'bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.6)]',
        neonPurple: 'bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.6)]',
        neonGreen: 'bg-emerald-400 shadow-[0_0_10px_rgba(57,255,20,0.6)]',
        destructive: 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]',
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
  }
);

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  indicatorClassName?: string;
  isIndeterminate?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, size, indicatorClassName, isIndeterminate, ...props }, ref) => {
  // If no value is provided, it's considered indeterminate
  const indeterminate = isIndeterminate || value === undefined || value === null;
  
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(progressVariants({ variant, size }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          progressIndicatorVariants({ variant, isIndeterminate: indeterminate }),
          indicatorClassName
        )}
        style={{
          transform: indeterminate ? 'translateX(0)' : `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants };
