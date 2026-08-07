import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const radioVariants = cva(
  [
    'inline-flex items-center justify-center shrink-0 cursor-pointer rounded-full',
    'border transition-all duration-300 ease-out',
    'bg-white/[0.03] backdrop-blur-sm',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-0',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'border-white/[0.15] hover:border-white/[0.25]',
          'focus-visible:ring-cyan-400/50',
          'data-[state=checked]:border-cyan-500/50',
          'data-[state=checked]:shadow-[0_0_12px_rgba(0,240,255,0.15)]',
        ].join(' '),
        neon: [
          'border-cyan-500/25 hover:border-cyan-500/40',
          'focus-visible:ring-cyan-400/50',
          'data-[state=checked]:border-cyan-400/60 data-[state=checked]:bg-cyan-500/10',
          'data-[state=checked]:shadow-[0_0_18px_rgba(0,240,255,0.25)]',
        ].join(' '),
      },
      radioSize: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      radioSize: 'md',
    },
  }
);

const dotColorMap: Record<string, string> = {
  default: 'bg-cyan-400',
  neon: 'bg-cyan-300',
};

const dotSizeMap: Record<string, string> = {
  sm: 'h-1.5 w-1.5',
  md: 'h-2 w-2',
  lg: 'h-2.5 w-2.5',
};

const dotGlowMap: Record<string, string> = {
  default: 'shadow-[0_0_6px_rgba(0,240,255,0.4)]',
  neon: 'shadow-[0_0_8px_rgba(0,240,255,0.6)]',
};

/* ─── RadioGroup ─── */

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  label?: string;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
}

interface RadioGroupContextValue {
  name: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

function useRadioGroup() {
  const ctx = React.useContext(RadioGroupContext);
  if (!ctx) throw new Error('Radio must be used within a RadioGroup');
  return ctx;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      value,
      defaultValue,
      onValueChange,
      name,
      label,
      orientation = 'vertical',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const generatedName = React.useId();
    const groupName = name || generatedName;
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;

    const handleValueChange = React.useCallback(
      (val: string) => {
        if (!controlled) setInternalValue(val);
        onValueChange?.(val);
      },
      [controlled, onValueChange]
    );

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">
            {label}
          </span>
        )}
        <RadioGroupContext.Provider
          value={{
            name: groupName,
            value: currentValue,
            onValueChange: handleValueChange,
            disabled,
          }}
        >
          <div
            ref={ref}
            role="radiogroup"
            aria-label={label}
            className={cn(
              'flex gap-3',
              orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
              className
            )}
            {...props}
          >
            {children}
          </div>
        </RadioGroupContext.Provider>
      </div>
    );
  }
);
RadioGroup.displayName = 'RadioGroup';

/* ─── Radio ─── */

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof radioVariants> {
  label?: string;
  description?: string;
  radioValue: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      variant = 'default',
      radioSize = 'md',
      label,
      description,
      radioValue,
      disabled: localDisabled,
      id,
      ...props
    },
    ref
  ) => {
    const group = useRadioGroup();
    const radioId = id || React.useId();
    const isChecked = group.value === radioValue;
    const isDisabled = localDisabled || group.disabled;

    const dotColor = dotColorMap[variant || 'default'];
    const dotSize = dotSizeMap[radioSize || 'md'];
    const dotGlow = dotGlowMap[variant || 'default'];

    return (
      <label
        htmlFor={radioId}
        className={cn(
          'inline-flex items-start gap-2.5 cursor-pointer group select-none',
          isDisabled && 'cursor-not-allowed opacity-40'
        )}
      >
        <div className="relative flex items-center justify-center pt-0.5">
          <input
            type="radio"
            id={radioId}
            ref={ref}
            name={group.name}
            value={radioValue}
            checked={isChecked}
            disabled={isDisabled}
            onChange={() => group.onValueChange(radioValue)}
            className="sr-only"
            {...props}
          />
          <div
            data-state={isChecked ? 'checked' : 'unchecked'}
            className={cn(
              radioVariants({ variant, radioSize }),
              className
            )}
          >
            {isChecked && (
              <div
                className={cn(
                  'rounded-full animate-radio-dot-in',
                  dotColor,
                  dotSize,
                  dotGlow
                )}
              />
            )}
          </div>
        </div>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <span className="text-sm text-slate-200 font-sans leading-none transition-colors duration-200 group-hover:text-white">
                {label}
              </span>
            )}
            {description && (
              <span className="text-[11px] text-slate-500 font-mono">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);
Radio.displayName = 'Radio';

export { RadioGroup, Radio, radioVariants };
