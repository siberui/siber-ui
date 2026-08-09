import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const selectVariants = cva(
  [
    'flex w-full text-slate-100 font-sans appearance-none cursor-pointer',
    'bg-surface-1',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-0',
    'selection:bg-cyan-500/30 selection:text-cyan-200',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'border border-primary-600 bg-primary text-primary-foreground',
          'hover:bg-primary-600 hover:border-primary-500',
          'focus-visible:border-primary-500',
        ].join(' '),
        'primary-subtle': [
          'border border-primary-border bg-primary-subtle text-primary',
          'hover:bg-primary-hover hover:border-primary-400',
          'focus-visible:border-primary-500',
        ].join(' '),
        'primary-outline': [
          'border border-primary-border bg-transparent text-primary',
          'hover:bg-primary-subtle hover:border-primary-400',
          'focus-visible:bg-primary-subtle focus-visible:border-primary-500',
        ].join(' '),
        neon: [
          'border border-primary-border bg-surface-1 text-primary font-mono shadow-glow-cyan',
          'hover:bg-surface-2 hover:border-primary-400',
          'focus-visible:border-primary-500',
        ].join(' '),
        default: [
          'border border-primary-border bg-transparent text-primary',
          'hover:bg-primary-subtle hover:border-primary-400',
          'focus-visible:bg-primary-subtle focus-visible:border-primary-500',
        ].join(' '),
        ghost: [
          'border border-transparent bg-white/[0.02]',
          'hover:bg-white/[0.05]',
          'focus-visible:bg-white/[0.04] focus-visible:border-border-hairline',
        ].join(' '),
      },
      selectSize: {
        sm: 'h-8 px-2.5 pr-8 text-xs rounded-md',
        md: 'h-10 px-3.5 pr-9 text-sm rounded-md',
        lg: 'h-12 px-4 pr-10 text-base rounded-lg',
      },
      state: {
        normal: '',
        error: [
          'border-danger-border text-danger',
          'focus-visible:border-danger-500 focus-visible:ring-danger-focus/70',
        ].join(' '),
        success: [
          'border-success-border text-success',
          'focus-visible:border-success-500 focus-visible:ring-success-focus/70',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
      selectSize: 'md',
      state: 'normal',
    },
  },
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps
  extends
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  options?: (SelectOption | SelectOptionGroup)[];
  error?: string | boolean;
  success?: boolean;
  label?: string;
  helperText?: string;
  placeholder?: string;
}

function isOptionGroup(
  option: SelectOption | SelectOptionGroup,
): option is SelectOptionGroup {
  return 'options' in option;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant,
      selectSize,
      state,
      error,
      success,
      label,
      helperText,
      placeholder,
      options = [],
      id,
      children,
      ...props
    },
    ref,
  ) => {
    const selectId = id || React.useId();
    const computedState = error ? 'error' : success ? 'success' : state;

    const chevronColor =
      computedState === 'error'
        ? 'text-danger'
        : computedState === 'success'
          ? 'text-success'
          : variant === 'neon'
            ? 'text-primary'
            : 'text-fg-subtle';

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="text-[11px] font-mono tracking-wider text-slate-500 uppercase flex items-center justify-between"
          >
            <span>{label}</span>
            {error && typeof error === 'string' && (
              <span className="text-[10px] text-danger normal-case font-sans">
                {error}
              </span>
            )}
          </label>
        )}

        <div className="relative w-full">
          <select
            id={selectId}
            className={cn(
              selectVariants({ variant, selectSize, state: computedState }),
              className,
            )}
            ref={ref}
            {...props}
          >
            {placeholder && (
              <option
                value=""
                disabled
                className="text-fg-subtle bg-surface-1"
              >
                {placeholder}
              </option>
            )}
            {children ||
              options.map((option) =>
                isOptionGroup(option) ? (
                  <optgroup
                    key={option.label}
                    label={option.label}
                    className="bg-surface-1 text-fg-muted font-mono"
                  >
                    {option.options.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.disabled}
                        className="bg-surface-1 text-fg"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </optgroup>
                ) : (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className="bg-surface-1 text-fg"
                  >
                    {option.label}
                  </option>
                ),
              )}
          </select>

          <div
            className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none z-10 transition-colors duration-300',
              chevronColor,
            )}
          >
            <ChevronDown
              className="h-4 w-4"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {helperText && !error && (
          <p className="text-[11px] text-slate-600 font-mono">{helperText}</p>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select, selectVariants };
