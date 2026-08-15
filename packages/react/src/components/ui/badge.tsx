import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center font-medium select-none',
    'transition-colors duration-200 ease-out',
    'border',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground border-primary-600',
        'primary-subtle':
          'bg-primary-subtle text-primary border-primary-border',
        'primary-outline': 'bg-transparent text-primary border-primary-border',
        neon: 'font-mono uppercase tracking-wider bg-surface-1 text-primary border-primary-border shadow-glow-cyan',
        glass: 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-slate-100 shadow-md',
        secondary: 'bg-surface-1 text-fg-muted border-border-hairline',
        outline:
          'bg-transparent text-fg-muted border-border-hairline hover:border-border-subtle',
        success: 'bg-success-subtle text-success border-success-border',
        warning: 'bg-warning-subtle text-warning border-warning-border',
        danger: 'bg-danger-subtle text-danger border-danger-border',
        signal: 'bg-primary-subtle text-primary border-primary-border',
        /** @deprecated use `danger` */
        destructive: 'bg-danger-subtle text-danger border-danger-border',
        /** @deprecated use `neon` + className override */
        neonPurple:
          'font-mono uppercase tracking-wider bg-surface-1 text-secondary border-secondary-border shadow-glow-purple',
        /** @deprecated use `success` */
        neonGreen:
          'font-mono uppercase tracking-wider bg-surface-1 text-success border-success-border shadow-glow-green',
      },
      shape: {
        pill: 'rounded-full',
        rounded: 'rounded-md',
        square: 'rounded-sm',
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
      shape: 'pill',
      size: 'md',
      pulse: false,
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  dotColor?: 'cyan' | 'purple' | 'green' | 'rose' | 'amber' | 'slate';
  glow?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant,
      shape = 'pill',
      size,
      pulse,
      dot = false,
      dotColor,
      glow = false,
      children,
      ...props
    },
    ref,
  ) => {
    const getDotColorClass = () => {
      switch (dotColor) {
        case 'cyan':
          return 'bg-primary shadow-glow-cyan';
        case 'purple':
          return 'bg-secondary shadow-glow-purple';
        case 'green':
          return 'bg-success shadow-glow-green';
        case 'rose':
          return 'bg-danger shadow-glow-rose';
        case 'amber':
          return 'bg-warning shadow-[0_0_8px_rgba(245,165,36,0.8)]';
        default:
          return 'bg-current shadow-[0_0_6px_currentColor]';
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ variant, shape, size, pulse }),
          glow && 'shadow-[0_0_14px_rgba(0,217,232,0.25)]',
          className
        )}
        {...props}
      >
        {dot && (
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span
              className={cn(
                'absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping',
                getDotColorClass(),
              )}
            />
            <span
              className={cn(
                'relative inline-flex h-1.5 w-1.5 rounded-full',
                getDotColorClass(),
              )}
            />
          </span>
        )}
        {children}
      </div>
    );
  },
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
