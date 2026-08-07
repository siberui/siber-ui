import * as React from 'react';
import { cn } from '@/utils/cn';

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  error?: string | boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      label,
      htmlFor,
      error,
      helperText,
      required,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const fieldId = htmlFor || generatedId;

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-1.5 w-full',
          disabled && 'opacity-40 pointer-events-none',
          className
        )}
        {...props}
      >
        {label && (
          <label
            htmlFor={fieldId}
            className="text-[11px] font-mono tracking-wider text-slate-500 uppercase flex items-center gap-1.5"
          >
            <span className="flex items-center gap-1.5">
              {required && (
                <span className="inline-block h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_4px_rgba(0,240,255,0.6)]" />
              )}
              {label}
            </span>

            {error && typeof error === 'string' && (
              <span className="text-[10px] text-rose-400/80 normal-case font-sans ml-auto">
                {error}
              </span>
            )}
          </label>
        )}

        <div className="w-full">{children}</div>

        {helperText && !error && (
          <p className="text-[11px] text-slate-600 font-mono">{helperText}</p>
        )}

        {error && typeof error === 'boolean' && !label && (
          <p className="text-[10px] text-rose-400/80 font-sans">
            This field has an error.
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export { FormField };
