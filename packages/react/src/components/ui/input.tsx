import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const inputVariants = cva(
  [
    'flex w-full text-slate-100 placeholder:text-slate-600 font-sans',
    'bg-white/[0.03] backdrop-blur-sm',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-0',
    'selection:bg-cyan-500/30 selection:text-cyan-200',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'border border-white/[0.08] hover:border-white/[0.15]',
          'focus-visible:border-cyan-500/50 focus-visible:ring-1 focus-visible:ring-cyan-500/30',
          'focus-visible:shadow-[0_0_8px_rgba(0,240,255,0.15)]',
        ].join(' '),
        neon: [
          'border border-cyan-500/20 bg-cyan-950/[0.06] text-cyan-100 placeholder:text-cyan-800/50',
          'hover:border-cyan-500/35 font-mono',
          'focus-visible:border-cyan-400/60 focus-visible:ring-1 focus-visible:ring-cyan-400/30',
          'focus-visible:shadow-[0_0_8px_rgba(0,240,255,0.15)]',
        ].join(' '),
        ghost: [
          'border border-transparent bg-white/[0.02]',
          'hover:bg-white/[0.05]',
          'focus-visible:bg-white/[0.04] focus-visible:border-white/[0.1]',
        ].join(' '),
      },
      inputSize: {
        sm: 'h-8 px-2.5 text-xs rounded-md',
        md: 'h-10 px-3.5 text-sm rounded-md',
        lg: 'h-12 px-4 text-base rounded-lg',
      },
      state: {
        normal: '',
        error: [
          'border-rose-500/40 text-rose-200 placeholder:text-rose-500/30',
          'focus-visible:border-rose-500/60 focus-visible:ring-rose-500/25',
          'focus-visible:shadow-[0_0_8px_rgba(244,63,94,0.15)]',
        ].join(' '),
        success: [
          'border-emerald-500/40 text-emerald-200 placeholder:text-emerald-500/30',
          'focus-visible:border-emerald-400/60 focus-visible:ring-emerald-400/25',
          'focus-visible:shadow-[0_0_8px_rgba(57,255,20,0.15)]',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
      state: 'normal',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  error?: string | boolean;
  success?: boolean;
  label?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      variant,
      inputSize,
      state,
      error,
      success,
      leftIcon,
      rightIcon,
      leftAddon,
      rightAddon,
      label,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();
    const computedState = error ? 'error' : success ? 'success' : state;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[11px] font-mono tracking-wider text-slate-500 uppercase flex items-center justify-between"
          >
            <span>{label}</span>
            {error && typeof error === 'string' && (
              <span className="text-[10px] text-rose-400/80 normal-case font-sans">{error}</span>
            )}
          </label>
        )}

        <div className="relative flex items-center w-full rounded-md">
          {leftAddon && (
            <div className="inline-flex items-center px-3 h-full border border-r-0 border-white/[0.08] bg-white/[0.04] text-slate-500 text-xs font-mono rounded-l-md shrink-0">
              {leftAddon}
            </div>
          )}

          <div className="relative flex-1 flex items-center">
            {leftIcon && (
              <div className="absolute left-3 z-10 text-slate-500 pointer-events-none flex items-center justify-center transition-colors duration-300">
                {leftIcon}
              </div>
            )}

            <input
              id={inputId}
              type={type}
              className={cn(
                inputVariants({ variant, inputSize, state: computedState }),
                leftIcon && 'pl-9',
                rightIcon && 'pr-9',
                leftAddon && 'rounded-l-none',
                rightAddon && 'rounded-r-none',
                className
              )}
              ref={ref}
              aria-invalid={!!error}
              {...props}
            />

            {rightIcon && (
              <div className="absolute right-3 z-10 text-slate-500 flex items-center justify-center transition-colors duration-300">
                {rightIcon}
              </div>
            )}
          </div>

          {rightAddon && (
            <div className="inline-flex items-center px-3 h-full border border-l-0 border-white/[0.08] bg-white/[0.04] text-slate-500 text-xs font-mono rounded-r-md shrink-0">
              {rightAddon}
            </div>
          )}
        </div>

        {helperText && !error && (
          <p className="text-[11px] text-slate-600 font-mono">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
