'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const switchTrackVariants = cva(
  [
    'relative inline-flex items-center shrink-0 cursor-pointer rounded-full p-0.5',
    'border transition-all duration-300 ease-out',
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
        ].join(' '),
        'primary-subtle': [
          'border-primary-border bg-primary-subtle',
          'hover:border-primary-400 hover:bg-primary-hover',
          'peer-focus-visible:ring-primary-focus/70',
          'data-[state=checked]:bg-primary-active data-[state=checked]:border-primary-500',
        ].join(' '),
        'primary-outline': [
          'border-primary-border bg-transparent',
          'hover:border-primary-400 hover:bg-primary-subtle',
          'peer-focus-visible:ring-primary-focus/70',
          'data-[state=checked]:bg-primary-subtle data-[state=checked]:border-primary-500',
        ].join(' '),
        neon: [
          'border-primary-border bg-surface-1 shadow-glow-cyan',
          'hover:border-primary-400 hover:bg-surface-2',
          'peer-focus-visible:ring-primary-focus/70',
          'data-[state=checked]:bg-surface-3 data-[state=checked]:border-primary-500 data-[state=checked]:shadow-glow-cyan-hover',
        ].join(' '),
        default: [
          'border-primary-border bg-transparent',
          'hover:border-primary-400 hover:bg-primary-subtle',
          'peer-focus-visible:ring-primary-focus/70',
          'data-[state=checked]:bg-primary-subtle data-[state=checked]:border-primary-500',
        ].join(' '),
        neonPurple: [
          'border-secondary-border',
          'data-[state=checked]:bg-secondary-subtle data-[state=checked]:border-secondary-500',
          'data-[state=checked]:shadow-glow-purple',
          'hover:border-secondary-400',
        ].join(' '),
        neonGreen: [
          'border-success-border',
          'data-[state=checked]:bg-success-subtle data-[state=checked]:border-success-500',
          'data-[state=checked]:shadow-glow-green',
          'hover:border-success-400',
        ].join(' '),
      },
      switchSize: {
        sm: 'h-4 w-7',
        md: 'h-5 w-9',
        lg: 'h-6 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      switchSize: 'md',
    },
  },
);

const thumbColorMap: Record<string, { off: string; on: string }> = {
  primary: {
    off: 'bg-primary-foreground/70',
    on: 'bg-primary-foreground',
  },
  'primary-subtle': {
    off: 'bg-primary/35',
    on: 'bg-primary',
  },
  'primary-outline': {
    off: 'bg-primary/35',
    on: 'bg-primary',
  },
  default: {
    off: 'bg-primary/35',
    on: 'bg-primary',
  },
  neon: {
    off: 'bg-primary/40',
    on: 'bg-primary shadow-glow-cyan',
  },
  neonPurple: {
    off: 'bg-secondary/40',
    on: 'bg-secondary shadow-glow-purple',
  },
  neonGreen: {
    off: 'bg-success/40',
    on: 'bg-success shadow-glow-green',
  },
};

const thumbSizeMap: Record<string, { size: string; translate: string }> = {
  sm: { size: 'h-3 w-3', translate: 'translate-x-3' },
  md: { size: 'h-4 w-4', translate: 'translate-x-4' },
  lg: { size: 'h-5 w-5', translate: 'translate-x-5' },
};

export interface SwitchProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof switchTrackVariants> {
  label?: string;
  description?: string;
  labelPosition?: 'left' | 'right';
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      variant = 'default',
      switchSize = 'md',
      label,
      description,
      labelPosition = 'right',
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
    const switchId = id || React.useId();
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false);
    const controlled = checked !== undefined;
    const currentChecked = controlled ? checked : isChecked;

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

    const thumb = thumbColorMap[variant || 'default'];
    const thumbSize = thumbSizeMap[switchSize || 'md'];

    const labelContent = (label || description) && (
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
    );

    return (
      <label
        htmlFor={switchId}
        className={cn(
          'inline-flex items-center gap-2.5 cursor-pointer group select-none',
          disabled && 'cursor-not-allowed opacity-40',
        )}
      >
        {labelPosition === 'left' && labelContent}

        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            role="switch"
            id={switchId}
            ref={ref}
            checked={controlled ? checked : undefined}
            defaultChecked={!controlled ? defaultChecked : undefined}
            onChange={handleChange}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div
            data-state={currentChecked ? 'checked' : 'unchecked'}
            className={cn(
              switchTrackVariants({ variant, switchSize }),
              className,
            )}
          >
            <span
              className={cn(
                'pointer-events-none block rounded-full transition-transform duration-300 ease-out shrink-0',
                thumbSize.size,
                currentChecked ? thumb.on : thumb.off,
                currentChecked ? thumbSize.translate : 'translate-x-0',
              )}
            />
          </div>
        </div>

        {labelPosition === 'right' && labelContent}
      </label>
    );
  },
);

Switch.displayName = 'Switch';

export { Switch, switchTrackVariants };
