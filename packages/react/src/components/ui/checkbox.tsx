'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

const checkboxVariants = cva(
  [
    'inline-flex items-center justify-center shrink-0 cursor-pointer',
    'border rounded transition-all duration-300 ease-out',
    'bg-white/[0.03] backdrop-blur-sm',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-0',
    'peer',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'border-white/[0.15] hover:border-white/[0.25]',
          'focus-visible:ring-cyan-400/50',
          'data-[state=checked]:bg-slate-800 data-[state=checked]:border-cyan-500/50',
          'data-[state=checked]:shadow-[0_0_12px_rgba(0,240,255,0.15)]',
          'data-[state=indeterminate]:bg-slate-800 data-[state=indeterminate]:border-cyan-500/50',
        ].join(' '),
        neon: [
          'border-cyan-500/25 hover:border-cyan-500/40',
          'focus-visible:ring-cyan-400/50',
          'data-[state=checked]:bg-cyan-500/20 data-[state=checked]:border-cyan-400/60',
          'data-[state=checked]:shadow-[0_0_18px_rgba(0,240,255,0.25)]',
          'data-[state=indeterminate]:bg-cyan-500/20 data-[state=indeterminate]:border-cyan-400/60',
        ].join(' '),
        neonPurple: [
          'border-purple-500/25 hover:border-purple-500/40',
          'focus-visible:ring-purple-400/50',
          'data-[state=checked]:bg-purple-500/20 data-[state=checked]:border-purple-400/60',
          'data-[state=checked]:shadow-[0_0_18px_rgba(168,85,247,0.25)]',
          'data-[state=indeterminate]:bg-purple-500/20 data-[state=indeterminate]:border-purple-400/60',
        ].join(' '),
        neonGreen: [
          'border-emerald-500/25 hover:border-emerald-500/40',
          'focus-visible:ring-emerald-400/50',
          'data-[state=checked]:bg-emerald-500/20 data-[state=checked]:border-emerald-400/60',
          'data-[state=checked]:shadow-[0_0_18px_rgba(57,255,20,0.25)]',
          'data-[state=indeterminate]:bg-emerald-500/20 data-[state=indeterminate]:border-emerald-400/60',
        ].join(' '),
      },
      checkboxSize: {
        sm: 'h-3.5 w-3.5 rounded-[3px]',
        md: 'h-4 w-4 rounded',
        lg: 'h-5 w-5 rounded-[5px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      checkboxSize: 'md',
    },
  }
);

const iconColorMap: Record<string, string> = {
  default: 'text-cyan-400',
  neon: 'text-cyan-300',
  neonPurple: 'text-purple-300',
  neonGreen: 'text-emerald-300',
};

const iconSizeMap: Record<string, string> = {
  sm: 'h-2.5 w-2.5',
  md: 'h-3 w-3',
  lg: 'h-3.5 w-3.5',
};

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant = 'default',
      checkboxSize = 'md',
      label,
      description,
      indeterminate = false,
      checked,
      defaultChecked,
      onChange,
      onCheckedChange,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || React.useId();
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false);
    const controlled = checked !== undefined;
    const currentChecked = controlled ? checked : isChecked;

    const internalRef = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const setRefs = React.useCallback(
      (node: HTMLInputElement | null) => {
        internalRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
      },
      [ref]
    );

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!controlled) {
          setIsChecked(e.target.checked);
        }
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
      },
      [controlled, onChange, onCheckedChange]
    );

    const state = indeterminate ? 'indeterminate' : currentChecked ? 'checked' : 'unchecked';
    const iconColor = iconColorMap[variant || 'default'];
    const iconSize = iconSizeMap[checkboxSize || 'md'];

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          'inline-flex items-start gap-2.5 cursor-pointer group select-none',
          disabled && 'cursor-not-allowed opacity-40'
        )}
      >
        <div className="relative flex items-center justify-center pt-0.5">
          <input
            type="checkbox"
            id={checkboxId}
            ref={setRefs}
            checked={controlled ? checked : undefined}
            defaultChecked={!controlled ? defaultChecked : undefined}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          <div
            data-state={state}
            className={cn(
              checkboxVariants({ variant, checkboxSize }),
              className
            )}
          >
            {state === 'checked' && (
              <Check
                className={cn(iconSize, iconColor, 'animate-check-stroke')}
                strokeWidth={2.5}
              />
            )}
            {state === 'indeterminate' && (
              <Minus
                className={cn(iconSize, iconColor, 'animate-indeterminate-dash')}
                strokeWidth={2.5}
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

Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants };
