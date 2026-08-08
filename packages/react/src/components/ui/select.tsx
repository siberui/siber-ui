import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const selectVariants = cva(
  [
    'flex w-full text-slate-100 font-sans appearance-none cursor-pointer',
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
          'focus-visible:shadow-[0_0_20px_rgba(0,240,255,0.1),0_0_50px_rgba(0,240,255,0.04)]',
        ].join(' '),
        neon: [
          'border border-cyan-500/20 bg-cyan-950/[0.06] text-cyan-100',
          'hover:border-cyan-500/35 font-mono',
          'focus-visible:border-cyan-400/60 focus-visible:ring-1 focus-visible:ring-cyan-400/30',
          'focus-visible:shadow-[0_0_25px_rgba(0,240,255,0.15),0_0_60px_rgba(0,240,255,0.06)]',
        ].join(' '),
        ghost: [
          'border border-transparent bg-white/[0.02]',
          'hover:bg-white/[0.05]',
          'focus-visible:bg-white/[0.04] focus-visible:border-white/[0.1]',
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
          'border-rose-500/40 text-rose-200',
          'focus-visible:border-rose-500/60 focus-visible:ring-rose-500/25',
          'focus-visible:shadow-[0_0_20px_rgba(244,63,94,0.12),0_0_50px_rgba(244,63,94,0.05)]',
        ].join(' '),
        success: [
          'border-emerald-500/40 text-emerald-200',
          'focus-visible:border-emerald-400/60 focus-visible:ring-emerald-400/25',
          'focus-visible:shadow-[0_0_20px_rgba(57,255,20,0.12),0_0_50px_rgba(57,255,20,0.05)]',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
      selectSize: 'md',
      state: 'normal',
    },
  }
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
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  options?: (SelectOption | SelectOptionGroup)[];
  error?: string | boolean;
  success?: boolean;
  label?: string;
  helperText?: string;
  placeholder?: string;
}

function isOptionGroup(
  option: SelectOption | SelectOptionGroup
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
    ref
  ) => {
    const selectId = id || React.useId();
    const computedState = error ? 'error' : success ? 'success' : state;

    const chevronColor =
      computedState === 'error'
        ? 'text-rose-400/60'
        : computedState === 'success'
          ? 'text-emerald-400/60'
          : variant === 'neon'
            ? 'text-cyan-500/50'
            : 'text-slate-500';

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="text-[11px] font-mono tracking-wider text-slate-500 uppercase flex items-center justify-between"
          >
            <span>{label}</span>
            {error && typeof error === 'string' && (
              <span className="text-[10px] text-rose-400/80 normal-case font-sans">{error}</span>
            )}
          </label>
        )}

        <div className="relative w-full">
          <select
            id={selectId}
            className={cn(
              selectVariants({ variant, selectSize, state: computedState }),
              className
            )}
            ref={ref}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="text-slate-600 bg-[#0d121d]">
                {placeholder}
              </option>
            )}
            {children ||
              options.map((option) =>
                isOptionGroup(option) ? (
                  <optgroup
                    key={option.label}
                    label={option.label}
                    className="bg-[#0d121d] text-slate-300 font-mono"
                  >
                    {option.options.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.disabled}
                        className="bg-[#0d121d] text-slate-200"
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
                    className="bg-[#0d121d] text-slate-200"
                  >
                    {option.label}
                  </option>
                )
              )}
          </select>

          <div
            className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none z-10 transition-colors duration-300',
              chevronColor
            )}
          >
            <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
          </div>
        </div>

        {helperText && !error && (
          <p className="text-[11px] text-slate-600 font-mono">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select, selectVariants };
