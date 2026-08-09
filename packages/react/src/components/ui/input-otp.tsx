'use client';

import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// InputOTP Context
// ─────────────────────────────────────────────────────────────────────────────
export type InputOTPVariant = 'default' | 'neon' | 'glass';

const InputOTPVariantContext = React.createContext<{
  variant?: InputOTPVariant;
  state?: 'normal' | 'error' | 'success';
}>({
  variant: 'default',
  state: 'normal',
});

// ─────────────────────────────────────────────────────────────────────────────
// InputOTP Root
// ─────────────────────────────────────────────────────────────────────────────
export type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput> & {
  variant?: InputOTPVariant;
  label?: string;
  error?: string | boolean;
  success?: boolean;
  helperText?: string;
};

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  InputOTPProps
>(
  (
    {
      className,
      containerClassName,
      variant = 'default',
      error,
      success,
      label,
      helperText,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const computedState = error ? 'error' : success ? 'success' : 'normal';

    return (
      <InputOTPVariantContext.Provider value={{ variant, state: computedState }}>
        <div className={cn('flex flex-col gap-1.5 w-full', containerClassName)}>
          {label && (
            <label
              htmlFor={generatedId}
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

          <OTPInput
            id={generatedId}
            ref={ref}
            containerClassName={cn(
              'flex items-center gap-2 has-[:disabled]:opacity-50',
              className
            )}
            className={cn('disabled:cursor-not-allowed')}
            {...props}
          />

          {helperText && !error && (
            <p className="text-[11px] text-slate-600 font-mono">{helperText}</p>
          )}
        </div>
      </InputOTPVariantContext.Provider>
    );
  }
);
InputOTP.displayName = 'InputOTP';

// ─────────────────────────────────────────────────────────────────────────────
// InputOTP Group
// ─────────────────────────────────────────────────────────────────────────────
const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

// ─────────────────────────────────────────────────────────────────────────────
// InputOTP Slot
// ─────────────────────────────────────────────────────────────────────────────
const slotVariants = cva(
  'relative flex h-12 w-10 items-center justify-center border-y border-r text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
  {
    variants: {
      variant: {
        default: 'border-border-hairline bg-white/[0.03] text-slate-100',
        neon: 'border-cyan-500/20 bg-cyan-950/[0.06] text-cyan-100 font-mono',
        glass: 'border-transparent bg-white/[0.02] text-white',
      },
      state: {
        normal: '',
        error: 'border-rose-500/40 text-rose-200 bg-rose-500/[0.03]',
        success: 'border-emerald-500/40 text-emerald-200 bg-emerald-500/[0.03]',
      },
      isActive: {
        true: 'z-10 ring-1',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        isActive: true,
        className: 'border-cyan-500/50 ring-cyan-500/30 bg-white/[0.05] shadow-[0_0_20px_rgba(0,240,255,0.1)]',
      },
      {
        variant: 'neon',
        isActive: true,
        className: 'border-cyan-400/60 ring-cyan-400/30 bg-cyan-500/10 shadow-[0_0_25px_rgba(0,240,255,0.15)]',
      },
      {
        variant: 'glass',
        isActive: true,
        className: 'border-border-subtle bg-white/[0.04]',
      },
      {
        state: 'error',
        isActive: true,
        className: 'border-rose-500/60 ring-rose-500/25 shadow-[0_0_20px_rgba(244,63,94,0.12)]',
      },
      {
        state: 'success',
        isActive: true,
        className: 'border-emerald-400/60 ring-emerald-400/25 shadow-[0_0_20px_rgba(57,255,20,0.12)]',
      },
    ],
    defaultVariants: {
      variant: 'default',
      state: 'normal',
      isActive: false,
    },
  }
);

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const variantContext = React.useContext(InputOTPVariantContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        slotVariants({
          variant: variantContext.variant,
          state: variantContext.state,
          isActive,
        }),
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-slate-100 duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

// ─────────────────────────────────────────────────────────────────────────────
// InputOTP Separator
// ─────────────────────────────────────────────────────────────────────────────
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot className="w-5 h-5 text-slate-500" />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
