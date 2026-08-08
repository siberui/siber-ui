import * as React from 'react';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const threatVariants = cva('flex flex-col items-center justify-center font-mono', {
  variants: {
    level: {
      low: 'text-cyan-400',
      medium: 'text-amber-400',
      high: 'text-rose-500',
      critical: 'text-rose-600 animate-pulse',
    },
    size: {
      sm: 'w-16 h-16 text-xs',
      md: 'w-24 h-24 text-sm',
      lg: 'w-32 h-32 text-lg',
    },
  },
  defaultVariants: {
    level: 'low',
    size: 'md',
  },
});

export interface ThreatIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof threatVariants> {
  value: number; // 0 to 100
  label?: string;
}

const ThreatIndicator = React.forwardRef<HTMLDivElement, ThreatIndicatorProps>(
  ({ className, level = 'low', size = 'md', value, label, ...props }, ref) => {
    // Restrict value between 0 and 100
    const clampedValue = Math.min(Math.max(value, 0), 100);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (clampedValue / 100) * circumference;

    const getColorClass = (l: string | null | undefined) => {
      switch (l) {
        case 'medium':
          return 'stroke-amber-400';
        case 'high':
          return 'stroke-rose-500';
        case 'critical':
          return 'stroke-rose-600';
        case 'low':
        default:
          return 'stroke-cyan-400';
      }
    };

    return (
      <div
        ref={ref}
        className={cn(threatVariants({ level, size }), className)}
        role="meter"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Threat Level'}
        {...props}
      >
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Background Track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-800"
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="square"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={cn(
              'transition-all duration-1000 ease-out',
              getColorClass(level)
            )}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="font-bold">{clampedValue}%</span>
          {label && <span className="text-[0.65em] uppercase text-slate-500 mt-1">{label}</span>}
        </div>
      </div>
    );
  }
);

ThreatIndicator.displayName = 'ThreatIndicator';

export { ThreatIndicator, threatVariants };
