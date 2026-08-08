import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center font-mono font-medium tracking-wider uppercase select-none',
    'transition-all duration-300 ease-out',
    'border rounded-full backdrop-blur-sm',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-white/[0.05] text-slate-200 border-white/[0.1] shadow-[0_2px_10px_rgba(0,0,0,0.3)]',
        secondary:
          'bg-white/[0.03] text-slate-400 border-white/[0.06]',
        neon: [
          'bg-cyan-500/[0.08] text-cyan-400 border-cyan-500/25',
          'shadow-[0_0_8px_rgba(0,240,255,0.15)]',
        ].join(' '),
        neonPurple: [
          'bg-purple-500/[0.08] text-purple-300 border-purple-500/25',
          'shadow-[0_0_8px_rgba(168,85,247,0.15)]',
        ].join(' '),
        neonGreen: [
          'bg-emerald-500/[0.08] text-emerald-400 border-emerald-500/25',
          'shadow-[0_0_8px_rgba(57,255,20,0.15)]',
        ].join(' '),
        destructive: [
          'bg-rose-950/20 text-rose-400 border-rose-800/30',
          'shadow-[0_0_8px_rgba(244,63,94,0.15)]',
        ].join(' '),
        outline:
          'bg-transparent text-slate-300 border-slate-700/50 hover:border-slate-500/60',
      },
      size: {
        sm: 'text-[10px] px-2 py-0.5 gap-1',
        md: 'text-xs px-2.5 py-1 gap-1.5',
        lg: 'text-sm px-3 py-1.5 gap-2 rounded-md',
      },
      pulse: {
        true: 'animate-pulse',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      pulse: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  dotColor?: 'cyan' | 'purple' | 'green' | 'rose' | 'slate';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    { className, variant, size, pulse, dot = false, dotColor, children, ...props },
    ref
  ) => {
    const getDotColorClass = () => {
      switch (dotColor) {
        case 'cyan':
          return 'bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.7)]';
        case 'purple':
          return 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.7)]';
        case 'green':
          return 'bg-emerald-400 shadow-[0_0_8px_rgba(57,255,20,0.7)]';
        case 'rose':
          return 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.7)]';
        default:
          return 'bg-current shadow-[0_0_6px_currentColor]';
      }
    };

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, pulse, className }))}
        {...props}
      >
        {dot && (
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span
              className={cn(
                'absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping',
                getDotColorClass()
              )}
            />
            <span className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', getDotColorClass())} />
          </span>
        )}
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
