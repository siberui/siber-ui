'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const textareaVariants = cva(
  [
    'flex w-full text-slate-100 placeholder:text-slate-600 font-sans resize-none',
    'bg-white/[0.03] backdrop-blur-sm',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-0',
    'selection:bg-cyan-500/30 selection:text-cyan-200',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'border border-border-hairline hover:border-border-subtle',
          'focus-visible:border-cyan-500/50 focus-visible:ring-1 focus-visible:ring-cyan-500/30',
          'focus-visible:shadow-[0_0_20px_rgba(0,240,255,0.1),0_0_50px_rgba(0,240,255,0.04)]',
        ].join(' '),
        neon: [
          'border border-cyan-500/20 bg-cyan-950/[0.06] text-cyan-100 placeholder:text-cyan-800/50',
          'hover:border-cyan-500/35 font-mono',
          'focus-visible:border-cyan-400/60 focus-visible:ring-1 focus-visible:ring-cyan-400/30',
          'focus-visible:shadow-[0_0_25px_rgba(0,240,255,0.15),0_0_60px_rgba(0,240,255,0.06)]',
        ].join(' '),
        ghost: [
          'border border-transparent bg-white/[0.02]',
          'hover:bg-white/[0.05]',
          'focus-visible:bg-white/[0.04] focus-visible:border-border-subtle',
        ].join(' '),
        glass: [
          'border border-white/10 bg-white/[0.04] text-white placeholder:text-white/40 backdrop-blur-xl',
          'hover:bg-white/[0.07] hover:border-white/20',
          'focus-visible:bg-white/[0.08] focus-visible:border-cyan-400/80 focus-visible:ring-1 focus-visible:ring-cyan-500/50',
          'focus-visible:shadow-[0_0_25px_rgba(0,240,255,0.15)]',
        ].join(' '),
      },
      textareaSize: {
        sm: 'px-2.5 py-2 text-xs rounded-md min-h-[60px]',
        md: 'px-3.5 py-2.5 text-sm rounded-md min-h-[80px]',
        lg: 'px-4 py-3 text-base rounded-lg min-h-[120px]',
      },
      state: {
        normal: '',
        error: [
          'border-rose-500/40 text-rose-200 placeholder:text-rose-500/30',
          'focus-visible:border-rose-500/60 focus-visible:ring-rose-500/25',
          'focus-visible:shadow-[0_0_20px_rgba(244,63,94,0.12),0_0_50px_rgba(244,63,94,0.05)]',
        ].join(' '),
        success: [
          'border-emerald-500/40 text-emerald-200 placeholder:text-emerald-500/30',
          'focus-visible:border-emerald-400/60 focus-visible:ring-emerald-400/25',
          'focus-visible:shadow-[0_0_20px_rgba(57,255,20,0.12),0_0_50px_rgba(57,255,20,0.05)]',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
      textareaSize: 'md',
      state: 'normal',
    },
  }
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {
  error?: string | boolean;
  success?: boolean;
  label?: string;
  helperText?: string;
  maxCharacters?: number;
  autoResize?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      textareaSize,
      state,
      error,
      success,
      label,
      helperText,
      maxCharacters,
      autoResize = false,
      id,
      onChange,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId();
    const computedState = error ? 'error' : success ? 'success' : state;
    const [charCount, setCharCount] = React.useState(
      () => String(value || defaultValue || '').length
    );
    const internalRef = React.useRef<HTMLTextAreaElement | null>(null);

    const handleResize = React.useCallback(() => {
      const textarea = internalRef.current;
      if (textarea && autoResize) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [autoResize]);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(e.target.value.length);
        handleResize();
        onChange?.(e);
      },
      [onChange, handleResize]
    );

    React.useEffect(() => {
      handleResize();
    }, [handleResize, value]);

    const setRefs = React.useCallback(
      (node: HTMLTextAreaElement | null) => {
        internalRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
        }
      },
      [ref]
    );

    const isOverLimit = maxCharacters ? charCount > maxCharacters : false;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-[11px] font-mono tracking-wider text-slate-500 uppercase flex items-center justify-between"
          >
            <span>{label}</span>
            {error && typeof error === 'string' && (
              <span className="text-[10px] text-rose-400/80 normal-case font-sans">{error}</span>
            )}
          </label>
        )}

        <textarea
          id={textareaId}
          className={cn(
            textareaVariants({ variant, textareaSize, state: computedState }),
            isOverLimit && 'border-rose-500/40',
            className
          )}
          ref={setRefs}
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxCharacters ? maxCharacters + 10 : undefined}
          {...props}
        />

        {(helperText || maxCharacters) && (
          <div className="flex items-center justify-between">
            {helperText && !error && (
              <p className="text-[11px] text-slate-600 font-mono">{helperText}</p>
            )}
            {!helperText && <span />}
            {maxCharacters && (
              <span
                className={cn(
                  'text-[10px] font-mono tabular-nums transition-colors duration-300',
                  isOverLimit
                    ? 'text-rose-400'
                    : charCount > maxCharacters * 0.9
                      ? 'text-amber-400/70'
                      : 'text-slate-600'
                )}
              >
                {charCount}/{maxCharacters}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
