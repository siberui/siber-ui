'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

const checkboxVariants = cva(
  [
    'inline-flex items-center justify-center shrink-0 cursor-pointer',
    'border rounded transition-all duration-300 ease-out',
    'bg-surface-1',
    'peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg',
    'disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-0',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'border-primary-600 bg-primary',
          'hover:border-primary-500 hover:bg-primary-600',
          'peer-focus-visible:ring-primary-focus/70',
          'data-[state=checked]:bg-primary-700 data-[state=checked]:border-primary-500',
          'data-[state=indeterminate]:bg-primary-700 data-[state=indeterminate]:border-primary-500',
        ].join(' '),
        'primary-subtle': [
          'border-primary-border bg-primary-subtle',
          'hover:border-primary-400 hover:bg-primary-hover',
          'peer-focus-visible:ring-primary-focus/70',
          'data-[state=checked]:bg-primary-active data-[state=checked]:border-primary-500',
          'data-[state=indeterminate]:bg-primary-active data-[state=indeterminate]:border-primary-500',
        ].join(' '),
        'primary-outline': [
          'border-primary-border bg-transparent',
          'hover:border-primary-400 hover:bg-primary-subtle',
          'peer-focus-visible:ring-primary-focus/70',
          'data-[state=checked]:bg-primary-subtle data-[state=checked]:border-primary-500',
          'data-[state=indeterminate]:bg-primary-subtle data-[state=indeterminate]:border-primary-500',
        ].join(' '),
        neon: [
          'border-primary-border bg-surface-1 shadow-glow-cyan',
          'hover:border-primary-400 hover:bg-surface-2',
          'peer-focus-visible:ring-primary-focus/70',
          'data-[state=checked]:bg-surface-3 data-[state=checked]:border-primary-500 data-[state=checked]:shadow-glow-cyan-hover',
          'data-[state=indeterminate]:bg-surface-3 data-[state=indeterminate]:border-primary-500 data-[state=indeterminate]:shadow-glow-cyan-hover',
        ].join(' '),
        default: [
          'border-primary-border bg-transparent',
          'hover:border-primary-400 hover:bg-primary-subtle',
          'peer-focus-visible:ring-primary-focus/70',
          'data-[state=checked]:bg-primary-subtle data-[state=checked]:border-primary-500',
          'data-[state=indeterminate]:bg-primary-subtle data-[state=indeterminate]:border-primary-500',
        ].join(' '),
        neonPurple: [
          'border-secondary-border hover:border-secondary-400',
          'peer-focus-visible:ring-secondary-focus/70',
          'data-[state=checked]:bg-secondary-subtle data-[state=checked]:border-secondary-500',
          'data-[state=checked]:shadow-glow-purple',
          'data-[state=indeterminate]:bg-secondary-subtle data-[state=indeterminate]:border-secondary-500',
        ].join(' '),
        neonGreen: [
          'border-success-border hover:border-success-400',
          'peer-focus-visible:ring-success-focus/70',
          'data-[state=checked]:bg-success-subtle data-[state=checked]:border-success-500',
          'data-[state=checked]:shadow-glow-green',
          'data-[state=indeterminate]:bg-success-subtle data-[state=indeterminate]:border-success-500',
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
  },
);

const iconColorMap: Record<string, string> = {
  primary: 'text-primary-foreground',
  'primary-subtle': 'text-primary',
  'primary-outline': 'text-primary',
  default: 'text-primary',
  neon: 'text-primary',
  neonPurple: 'text-secondary',
  neonGreen: 'text-success',
};

const iconSizeMap: Record<string, string> = {
  sm: 'h-2.5 w-2.5',
  md: 'h-3 w-3',
  lg: 'h-3.5 w-3.5',
};

export interface CheckboxProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
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
    ref,
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
          (ref as React.MutableRefObject<HTMLInputElement | null>).current =
            node;
        }
      },
      [ref],
    );

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!controlled) {
          setIsChecked(e.target.checked);
        }
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
      },
      [controlled, onChange, onCheckedChange],
    );

    const state = indeterminate
      ? 'indeterminate'
      : currentChecked
        ? 'checked'
        : 'unchecked';
    const iconColor = iconColorMap[variant || 'default'];
    const iconSize = iconSizeMap[checkboxSize || 'md'];

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          'inline-flex items-start gap-2.5 cursor-pointer group select-none',
          disabled && 'cursor-not-allowed opacity-40',
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
            className="peer sr-only"
            {...props}
          />
          <div
            data-state={state}
            className={cn(
              checkboxVariants({ variant, checkboxSize }),
              className,
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
                className={cn(
                  iconSize,
                  iconColor,
                  'animate-indeterminate-dash',
                )}
                strokeWidth={2.5}
              />
            )}
          </div>
        </div>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <span className="text-sm text-fg font-sans leading-none transition-colors duration-200 group-hover:text-fg">
                {label}
              </span>
            )}
            {description && (
              <span className="text-[11px] text-fg-subtle font-mono">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants };
