import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const inputVariants = cva(
  [
    'flex w-full text-fg placeholder:text-fg-subtle font-sans',
    'bg-surface-1',
    'transition-colors duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-0',
    'selection:bg-cyan-500/30 selection:text-cyan-200',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'border border-primary-600 bg-primary text-primary-foreground placeholder:text-primary-foreground/70',
          'hover:bg-primary-600 hover:border-primary-500',
          'focus-visible:border-primary-500',
        ].join(' '),
        'primary-subtle': [
          'border border-primary-border bg-primary-subtle text-primary placeholder:text-primary/70',
          'hover:bg-primary-hover hover:border-primary-400',
          'focus-visible:border-primary-500',
        ].join(' '),
        'primary-outline': [
          'border border-primary-border bg-transparent text-primary placeholder:text-primary/60',
          'hover:bg-primary-subtle hover:border-primary-400',
          'focus-visible:bg-primary-subtle focus-visible:border-primary-500',
        ].join(' '),
        neon: [
          'border border-primary-border bg-surface-1 text-primary placeholder:text-primary/60 font-mono shadow-glow-cyan',
          'hover:bg-surface-2 hover:border-primary-400',
          'focus-visible:border-primary-500',
        ].join(' '),
        default: [
          'border border-primary-border bg-transparent text-primary placeholder:text-primary/60',
          'hover:bg-primary-subtle hover:border-primary-400',
          'focus-visible:bg-primary-subtle focus-visible:border-primary-500',
        ].join(' '),
        ghost: [
          'border border-transparent bg-surface-1/60',
          'hover:bg-surface-2',
          'focus-visible:bg-surface-2 focus-visible:border-border-strong',
        ].join(' '),
        glass: [
          'border border-white/10 bg-white/[0.04] text-white placeholder:text-white/40 backdrop-blur-xl',
          'hover:bg-white/[0.07] hover:border-white/20',
          'focus-visible:bg-white/[0.08] focus-visible:border-cyan-400/80 focus-visible:ring-cyan-500/50',
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
          'border-danger-border text-danger placeholder:text-danger/60',
          'focus-visible:border-danger-500 focus-visible:ring-danger-focus/70',
        ].join(' '),
        success: [
          'border-success-border text-success placeholder:text-success/60',
          'focus-visible:border-success-500 focus-visible:ring-success-focus/70',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
      state: 'normal',
    },
  },
);

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  error?: string | boolean;
  success?: boolean;
  label?: string;
  helperText?: string;
  /** Shows an inline spinner and disables interaction, without losing layout. */
  isLoading?: boolean;
  /** Shows a clear (×) button when the (controlled) value is non-empty. */
  clearable?: boolean;
  onClear?: () => void;
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
      isLoading = false,
      clearable = false,
      onClear,
      value,
      disabled,
      ...props
    },
    ref,
  ) => {
    const inputId = id || React.useId();
    const computedState = error ? 'error' : success ? 'success' : state;
    const showClear =
      clearable && !isLoading && typeof value === 'string' && value.length > 0;
    const trailingSlot = isLoading ? (
      <Loader2
        className="h-4 w-4 animate-spin text-fg-subtle"
        aria-hidden="true"
      />
    ) : showClear ? (
      <button
        type="button"
        onClick={onClear}
        aria-label="Clear input"
        className="pointer-events-auto text-fg-subtle hover:text-fg transition-colors"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    ) : (
      rightIcon
    );

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-caption text-fg-subtle flex items-center justify-between"
          >
            <span>{label}</span>
            {error && typeof error === 'string' && (
              <span className="text-[10px] text-danger normal-case tracking-normal font-sans">
                {error}
              </span>
            )}
          </label>
        )}

        <div className="relative flex items-center w-full rounded-md">
          {leftAddon && (
            <div className="inline-flex items-center px-3 h-full border border-r-0 border-border-default bg-surface-2 text-fg-subtle text-xs font-mono rounded-l-md shrink-0">
              {leftAddon}
            </div>
          )}

          <div className="relative flex-1 flex items-center">
            {leftIcon && (
              <div className="absolute left-3 z-10 text-fg-subtle pointer-events-none flex items-center justify-center transition-colors duration-200">
                {leftIcon}
              </div>
            )}

            <input
              id={inputId}
              type={type}
              value={value}
              disabled={disabled || isLoading}
              className={cn(
                inputVariants({ variant, inputSize, state: computedState }),
                leftIcon && 'pl-9',
                (rightIcon || isLoading || showClear) && 'pr-9',
                leftAddon && 'rounded-l-none',
                rightAddon && 'rounded-r-none',
                className,
              )}
              ref={ref}
              aria-invalid={!!error}
              {...props}
            />

            {trailingSlot && (
              <div className="absolute right-3 z-10 flex items-center justify-center">
                {trailingSlot}
              </div>
            )}
          </div>

          {rightAddon && (
            <div className="inline-flex items-center px-3 h-full border border-l-0 border-border-default bg-surface-2 text-fg-subtle text-xs font-mono rounded-r-md shrink-0">
              {rightAddon}
            </div>
          )}
        </div>

        {helperText && !error && (
          <p className="text-caption text-fg-subtle normal-case tracking-normal">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input, inputVariants };
