'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium tracking-wide cursor-pointer',
    'transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    'disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed disabled:saturate-0',
    'active:translate-y-px',
    'relative overflow-hidden selection:bg-cyan-500/30',
  ].join(' '),
  {
    variants: {
      variant: {
        // Strongest semantic action.
        primary: [
          'bg-primary text-primary-foreground border border-primary-600',
          'hover:bg-primary-600 hover:border-primary-500',
          'active:bg-primary-700 active:border-primary-600',
        ].join(' '),
        'primary-subtle': [
          'bg-primary-subtle text-primary border border-primary-border',
          'hover:bg-primary-hover hover:border-primary-400',
          'active:bg-primary-active active:border-primary-500',
        ].join(' '),
        'primary-outline': [
          'bg-transparent text-primary border border-primary-border',
          'hover:bg-primary-subtle hover:border-primary-400',
          'active:bg-primary-active active:border-primary-500',
        ].join(' '),
        secondary: [
          'bg-surface-1 text-fg-muted border border-border-hairline',
          'hover:text-fg hover:border-border-subtle hover:bg-surface-2',
        ].join(' '),
        outline: [
          'bg-transparent text-fg-muted border border-border-hairline',
          'hover:text-fg hover:border-signal-cyan/40 hover:bg-surface-1',
        ].join(' '),
        ghost: [
          'text-fg-muted border border-transparent',
          'hover:bg-surface-1 hover:text-fg',
        ].join(' '),
        // Semantic intent variants.
        danger: [
          'bg-danger-subtle text-danger border border-danger-border',
          'hover:bg-danger-hover hover:border-danger-400',
          'active:bg-danger-active active:border-danger-500',
        ].join(' '),
        success: [
          'bg-success-subtle text-success border border-success-border',
          'hover:bg-success-hover hover:border-success-400',
          'active:bg-success-active active:border-success-500',
        ].join(' '),
        /** @deprecated use `danger` */
        destructive: [
          'bg-signal-rose/10 text-signal-rose border border-signal-rose/30',
          'hover:bg-signal-rose/15 hover:border-signal-rose/50',
        ].join(' '),
        // Kept for API compatibility.
        signal: [
          'bg-primary-subtle text-primary border border-primary-border',
          'hover:bg-primary-hover hover:border-primary-400',
          'active:bg-primary-active active:border-primary-500',
        ].join(' '),
        // Expressive special variant, intentionally below primary action weight.
        neon: [
          'bg-surface-1 text-primary border border-primary-border font-mono uppercase tracking-wider shadow-glow-cyan',
          'hover:bg-surface-2 hover:border-primary-400',
          'active:bg-surface-3 active:border-primary-500',
        ].join(' '),
        /** @deprecated use `variant="signal"` with a violet className override */
        neonPurple: [
          'bg-signal-violet/[0.08] text-signal-violet border border-signal-violet/30 font-mono uppercase tracking-wider',
          'hover:bg-signal-violet hover:text-bg hover:border-signal-violet hover:shadow-glow-purple-hover',
        ].join(' '),
        /** @deprecated use `success` */
        neonGreen: [
          'bg-signal-green/[0.08] text-signal-green border border-signal-green/30 font-mono uppercase tracking-wider',
          'hover:bg-signal-green hover:text-bg hover:border-signal-green hover:shadow-glow-green-hover',
        ].join(' '),
        // Terminal — monospace, system-console voice.
        terminal: [
          'bg-surface-1 text-signal-green border border-border-default font-mono lowercase',
          'hover:border-signal-green/40 hover:bg-surface-2',
        ].join(' '),
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
        md: 'h-10 px-4 text-sm rounded-md gap-2',
        lg: 'h-12 px-6 text-base rounded-lg gap-2.5',
        icon: 'h-10 w-10 p-0 rounded-md justify-center items-center',
      },
      glow: {
        true: 'shadow-glow-cyan',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      glow: false,
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      glow,
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const buttonType = asChild ? type : (type ?? 'button');

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, glow, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        type={buttonType}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2
              className="h-4 w-4 animate-spin text-current"
              strokeWidth={1.5}
            />
            {children && (
              <span className="inline-flex items-center justify-center gap-2 leading-none">
                {children}
              </span>
            )}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="inline-flex shrink-0 items-center justify-center leading-none">
                {leftIcon}
              </span>
            )}
            {children && (
              <span className="inline-flex items-center justify-center gap-2 leading-none">
                {children}
              </span>
            )}
            {rightIcon && (
              <span className="inline-flex shrink-0 items-center justify-center leading-none">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
