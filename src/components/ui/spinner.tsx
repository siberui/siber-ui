import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const spinnerVariants = cva('relative inline-flex', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    },
    variant: {
      default: 'text-slate-400',
      neon: 'text-cyan-400',
      neonPurple: 'text-purple-400',
      destructive: 'text-rose-400',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  /** Optional label for screen readers or displayed below */
  label?: string;
  showLabel?: boolean;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, label = 'Loading...', showLabel = false, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col items-center justify-center gap-2', className)} ref={ref} {...props}>
        <div className={cn(spinnerVariants({ size, variant }))} role="status">
          {/* Outer Ring */}
          <svg
            className="animate-spin w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            {/* The glow / scanner effect */}
            <path
              className="opacity-100"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          
          {/* Inner pulse ring for neon variants */}
          {variant !== 'default' && (
            <span
              className={cn(
                'absolute inset-0 rounded-full animate-ping opacity-20',
                variant === 'neon' ? 'bg-cyan-400' : '',
                variant === 'neonPurple' ? 'bg-purple-400' : '',
                variant === 'destructive' ? 'bg-rose-400' : ''
              )}
            />
          )}
          <span className="sr-only">{label}</span>
        </div>
        
        {showLabel && (
          <span className={cn(
            'text-xs font-mono tracking-widest uppercase',
            variant === 'default' ? 'text-slate-400' :
            variant === 'neon' ? 'text-cyan-400' :
            variant === 'neonPurple' ? 'text-purple-400' :
            'text-rose-400'
          )}>
            {label}
          </span>
        )}
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants };
