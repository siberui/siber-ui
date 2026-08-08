'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Calendar, type CalendarVariant } from './calendar';
import { cva, type VariantProps } from 'class-variance-authority';

// ─────────────────────────────────────────────────────────────────────────────
// DatePicker Trigger Styling (Similar to Input)
// ─────────────────────────────────────────────────────────────────────────────
const datePickerTriggerVariants = cva(
  [
    'flex w-full text-slate-100 placeholder:text-slate-600 font-sans text-left items-center justify-start',
    'bg-white/[0.03] backdrop-blur-sm',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-0',
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
        glass: [
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
      inputSize: 'md',
      state: 'normal',
    },
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────────────────────
export interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    VariantProps<typeof datePickerTriggerVariants> {
  value?: Date;
  onChange?: (date?: Date) => void;
  placeholder?: string;
  error?: string | boolean;
  success?: boolean;
  label?: string;
  helperText?: string;
  disabled?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      className,
      value,
      onChange,
      placeholder = 'Pick a date',
      variant = 'default',
      inputSize,
      state,
      error,
      success,
      label,
      helperText,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const triggerId = id || React.useId();
    const computedState = error ? 'error' : success ? 'success' : state;
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSelect = (date?: Date) => {
      onChange?.(date);
      setIsOpen(false);
    };

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={triggerId}
            className="text-[11px] font-mono tracking-wider text-slate-500 uppercase flex items-center justify-between"
          >
            <span>{label}</span>
            {error && typeof error === 'string' && (
              <span className="text-[10px] text-rose-400/80 normal-case font-sans">
                {error}
              </span>
            )}
          </label>
        )}

        <Popover open={isOpen} onOpenChange={setIsOpen} variant={variant as CalendarVariant}>
          <PopoverTrigger asChild>
            <button
              id={triggerId}
              ref={ref}
              disabled={disabled}
              className={cn(
                datePickerTriggerVariants({ variant, inputSize, state: computedState }),
                !value && (variant === 'neon' ? 'text-cyan-800/50' : 'text-slate-500'),
                className
              )}
              {...props}
            >
              <CalendarIcon
                className={cn(
                  'mr-2 h-4 w-4 shrink-0 transition-colors duration-300',
                  variant === 'neon' ? 'text-cyan-500/70' : 'text-slate-500'
                )}
              />
              <span className="truncate flex-1">
                {value ? format(value, 'PPP') : placeholder}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={value}
              onSelect={handleSelect}
              initialFocus
              variant={variant as CalendarVariant}
              className={cn(variant === 'neon' ? 'bg-[#050d14] border-0' : 'border-0')}
            />
          </PopoverContent>
        </Popover>

        {helperText && !error && (
          <p className="text-[11px] text-slate-600 font-mono">{helperText}</p>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export { DatePicker, datePickerTriggerVariants };
