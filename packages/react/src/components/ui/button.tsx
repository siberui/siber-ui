'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium tracking-wide cursor-pointer',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed disabled:saturate-0',
    'active:scale-[0.97]',
    'relative overflow-hidden selection:bg-cyan-500/30',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'bg-slate-900/90 backdrop-blur-sm text-slate-100 border border-cyan-500/20',
          'hover:bg-slate-800 hover:text-white hover:border-cyan-400/50',
          'hover:shadow-[0_0_12px_rgba(0,240,255,0.15)]',
          'hover:scale-[1.02]',
        ].join(' '),
        secondary: [
          'bg-white/[0.03] backdrop-blur-md text-slate-300 border border-slate-800/60',
          'hover:bg-white/[0.06] hover:text-cyan-300 hover:border-slate-700/80',
          'hover:scale-[1.02]',
        ].join(' '),
        neon: [
          'bg-cyan-500/[0.05] backdrop-blur-sm text-cyan-400 border border-cyan-500/30',
          'font-mono uppercase tracking-wider',
          'hover:bg-cyan-400/90 hover:text-slate-950 hover:border-cyan-400',
          'hover:shadow-[0_0_12px_rgba(0,240,255,0.2)]',
          'hover:scale-[1.02]',
        ].join(' '),
        neonPurple: [
          'bg-purple-500/[0.05] backdrop-blur-sm text-purple-300 border border-purple-500/30',
          'font-mono uppercase tracking-wider',
          'hover:bg-purple-500/90 hover:text-white hover:border-purple-400',
          'hover:shadow-[0_0_12px_rgba(168,85,247,0.2)]',
          'hover:scale-[1.02]',
        ].join(' '),
        neonGreen: [
          'bg-emerald-500/[0.05] backdrop-blur-sm text-emerald-400 border border-emerald-500/30',
          'font-mono uppercase tracking-wider',
          'hover:bg-emerald-400/90 hover:text-slate-950 hover:border-emerald-400',
          'hover:shadow-[0_0_12px_rgba(57,255,20,0.2)]',
          'hover:scale-[1.02]',
        ].join(' '),
        ghost: [
          'text-slate-400 border border-transparent',
          'hover:bg-white/[0.04] hover:text-slate-100',
          'hover:scale-[1.02]',
        ].join(' '),
        destructive: [
          'bg-rose-950/30 backdrop-blur-sm text-rose-400 border border-rose-800/40',
          'hover:bg-rose-600/90 hover:text-white hover:border-rose-500',
          'hover:shadow-[0_0_12px_rgba(244,63,94,0.2)]',
          'hover:scale-[1.02]',
        ].join(' '),
        outline: [
          'bg-transparent text-slate-200 border border-slate-700/60',
          'hover:border-slate-500/80 hover:bg-white/[0.03]',
          'hover:scale-[1.02]',
        ].join(' '),
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
        md: 'h-10 px-4 text-sm rounded-md gap-2',
        lg: 'h-12 px-6 text-base rounded-lg gap-2.5',
        icon: 'h-10 w-10 p-0 rounded-md justify-center items-center',
      },
      glow: {
        true: 'shadow-[0_0_20px_rgba(0,240,255,0.15),0_0_50px_rgba(0,240,255,0.08)]',
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
