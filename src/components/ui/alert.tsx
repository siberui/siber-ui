import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle2, Info, ShieldAlert, X } from 'lucide-react';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────
   Alert Variants
───────────────────────────────────────────────────────── */

const alertVariants = cva(
  [
    'relative flex items-start gap-3.5 w-full rounded-xl p-4',
    'bg-white/[0.03] backdrop-blur-md',
    'border transition-all duration-300 ease-out',
    'overflow-hidden',
    // Top accent line
    'before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r',
    'before:from-transparent before:to-transparent',
  ].join(' '),
  {
    variants: {
      variant: {
        info: [
          'border-cyan-500/20',
          'shadow-[0_4px_12px_rgba(0,0,0,0.3),0_0_4px_rgba(0,240,255,0.1)]',
          'before:via-cyan-400/60',
        ].join(' '),
        success: [
          'border-emerald-500/20',
          'shadow-[0_4px_12px_rgba(0,0,0,0.3),0_0_4px_rgba(57,255,20,0.1)]',
          'before:via-emerald-400/60',
        ].join(' '),
        warning: [
          'border-amber-500/25',
          'shadow-[0_4px_12px_rgba(0,0,0,0.3),0_0_4px_rgba(245,158,11,0.1)]',
          'before:via-amber-400/60',
        ].join(' '),
        destructive: [
          'border-rose-500/20',
          'shadow-[0_4px_12px_rgba(0,0,0,0.3),0_0_4px_rgba(244,63,94,0.1)]',
          'before:via-rose-500/60',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const iconVariantMap: Record<string, React.ReactNode> = {
  info: <Info className="h-4.5 w-4.5 shrink-0 mt-0.5 text-cyan-400" strokeWidth={1.5} />,
  success: <CheckCircle2 className="h-4.5 w-4.5 shrink-0 mt-0.5 text-emerald-400" strokeWidth={1.5} />,
  warning: <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5 text-amber-400" strokeWidth={1.5} />,
  destructive: <ShieldAlert className="h-4.5 w-4.5 shrink-0 mt-0.5 text-rose-400" strokeWidth={1.5} />,
};

const titleColorMap: Record<string, string> = {
  info: 'text-cyan-300',
  success: 'text-emerald-300',
  warning: 'text-amber-300',
  destructive: 'text-rose-300',
};

/* ─────────────────────────────────────────────────────────
   Alert Props & Component
───────────────────────────────────────────────────────── */

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  closable?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'info',
      title,
      icon,
      onClose,
      closable = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantKey = variant ?? 'info';
    const defaultIcon = iconVariantMap[variantKey];
    const titleColor = titleColorMap[variantKey];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        {/* Icon */}
        <div className="flex-shrink-0">{icon ?? defaultIcon}</div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-0.5">
          {title && (
            <p className={cn('text-sm font-semibold font-sans leading-tight', titleColor)}>
              {title}
            </p>
          )}
          {children && (
            <p className="text-[13px] text-slate-400 font-sans leading-relaxed">{children}</p>
          )}
        </div>

        {/* Close Button */}
        {closable && (
          <button
            type="button"
            aria-label="Dismiss alert"
            onClick={onClose}
            className="ml-auto shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-md text-slate-400 hover:text-slate-100 bg-white/[0.02] hover:bg-white/[0.08] border border-white/[0.05] hover:border-white/[0.15] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500/50"
          >
            <X className="h-3.5 w-3.5" strokeWidth={1.75} />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert, alertVariants };
