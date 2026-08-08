'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const switchTrackVariants = cva(
  [
    'relative inline-flex items-center shrink-0 cursor-pointer rounded-full p-0.5',
    'border transition-all duration-300 ease-out',
    'bg-white/[0.05] backdrop-blur-sm',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-0',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'border-white/[0.12]',
          'data-[state=checked]:bg-slate-800/80 data-[state=checked]:border-cyan-500/40',
          'data-[state=checked]:shadow-[0_0_15px_rgba(0,240,255,0.12)]',
          'hover:border-white/[0.2]',
        ].join(' '),
        neon: [
          'border-cyan-500/20',
          'data-[state=checked]:bg-cyan-950/40 data-[state=checked]:border-cyan-400/50',
          'data-[state=checked]:shadow-[0_0_20px_rgba(0,240,255,0.2)]',
          'hover:border-cyan-500/35',
        ].join(' '),
        neonPurple: [
          'border-purple-500/20',
          'data-[state=checked]:bg-purple-950/40 data-[state=checked]:border-purple-400/50',
          'data-[state=checked]:shadow-[0_0_20px_rgba(168,85,247,0.2)]',
          'hover:border-purple-500/35',
        ].join(' '),
        neonGreen: [
          'border-emerald-500/20',
          'data-[state=checked]:bg-emerald-950/40 data-[state=checked]:border-emerald-400/50',
          'data-[state=checked]:shadow-[0_0_20px_rgba(57,255,20,0.2)]',
          'hover:border-emerald-500/35',
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
  }
);

const thumbColorMap: Record<string, { off: string; on: string }> = {
  default: {
    off: 'bg-slate-400',
    on: 'bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.4)]',
  },
  neon: {
    off: 'bg-cyan-800/60',
    on: 'bg-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.5)]',
  },
  neonPurple: {
    off: 'bg-purple-800/60',
    on: 'bg-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]',
  },
  neonGreen: {
    off: 'bg-emerald-800/60',
    on: 'bg-emerald-300 shadow-[0_0_10px_rgba(57,255,20,0.5)]',
  },
};

const thumbSizeMap: Record<string, { size: string; translate: string }> = {
  sm: { size: 'h-3 w-3', translate: 'translate-x-3' },
  md: { size: 'h-4 w-4', translate: 'translate-x-4' },
  lg: { size: 'h-5 w-5', translate: 'translate-x-5' },
};

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
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
    ref
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
      [controlled, onChange, onCheckedChange]
    );

    const thumb = thumbColorMap[variant || 'default'];
    const thumbSize = thumbSizeMap[switchSize || 'md'];

    const labelContent = (label || description) && (
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
    );

    return (
      <label
        htmlFor={switchId}
        className={cn(
          'inline-flex items-center gap-2.5 cursor-pointer group select-none',
          disabled && 'cursor-not-allowed opacity-40'
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
            className="sr-only"
            {...props}
          />
          <div
            data-state={currentChecked ? 'checked' : 'unchecked'}
            className={cn(
              switchTrackVariants({ variant, switchSize }),
              className
            )}
          >
            <span
              className={cn(
                'pointer-events-none block rounded-full transition-transform duration-300 ease-out shrink-0',
                thumbSize.size,
                currentChecked ? thumb.on : thumb.off,
                currentChecked ? thumbSize.translate : 'translate-x-0'
              )}
            />
          </div>
        </div>

        {labelPosition === 'right' && labelContent}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch, switchTrackVariants };
