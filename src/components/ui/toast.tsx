import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { CheckCircle2, Info, ShieldAlert, AlertCircle, X } from 'lucide-react';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────── */

export type ToastVariant = 'info' | 'success' | 'warning' | 'destructive';
export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export interface ToastItem {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  icon?: React.ReactNode;
}

/* ─────────────────────────────────────────────────────────
   Context
───────────────────────────────────────────────────────── */

interface ToastContextValue {
  toast: (options: Omit<ToastItem, 'id'>) => void;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}

/* ─────────────────────────────────────────────────────────
   CVA — Single Toast Item
───────────────────────────────────────────────────────── */

const toastVariants = cva(
  [
    'relative flex items-start gap-3.5 w-full min-w-[300px] max-w-[400px] rounded-xl p-4',
    'bg-white/[0.04] backdrop-blur-xl border',
    'overflow-hidden',
    'transition-all duration-300 ease-out',
    // Gradient top accent line
    'before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px]',
    'before:bg-gradient-to-r before:from-transparent before:to-transparent',
    // Subtle inner shadow for depth
    'shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)]',
  ].join(' '),
  {
    variants: {
      variant: {
        info: [
          'border-cyan-500/20',
          'shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(0,240,255,0.06),inset_0_1px_0_rgba(255,255,255,0.04)]',
          'before:via-cyan-400/50',
        ].join(' '),
        success: [
          'border-emerald-500/20',
          'shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(57,255,20,0.05),inset_0_1px_0_rgba(255,255,255,0.04)]',
          'before:via-emerald-400/50',
        ].join(' '),
        warning: [
          'border-amber-500/25',
          'shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(245,158,11,0.06),inset_0_1px_0_rgba(255,255,255,0.04)]',
          'before:via-amber-400/50',
        ].join(' '),
        destructive: [
          'border-rose-500/20',
          'shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(244,63,94,0.06),inset_0_1px_0_rgba(255,255,255,0.04)]',
          'before:via-rose-500/50',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const iconVariantMap: Record<ToastVariant, React.ReactNode> = {
  info: <Info className="h-[18px] w-[18px] shrink-0 text-cyan-400 mt-px" strokeWidth={1.5} />,
  success: <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-emerald-400 mt-px" strokeWidth={1.5} />,
  warning: <AlertCircle className="h-[18px] w-[18px] shrink-0 text-amber-400 mt-px" strokeWidth={1.5} />,
  destructive: <ShieldAlert className="h-[18px] w-[18px] shrink-0 text-rose-400 mt-px" strokeWidth={1.5} />,
};

const titleColorMap: Record<ToastVariant, string> = {
  info: 'text-cyan-200',
  success: 'text-emerald-200',
  warning: 'text-amber-200',
  destructive: 'text-rose-200',
};

const progressColorMap: Record<ToastVariant, string> = {
  info: 'bg-gradient-to-r from-cyan-500/60 to-cyan-400/30',
  success: 'bg-gradient-to-r from-emerald-500/60 to-emerald-400/30',
  warning: 'bg-gradient-to-r from-amber-500/60 to-amber-400/30',
  destructive: 'bg-gradient-to-r from-rose-500/60 to-rose-400/30',
};

/* ─────────────────────────────────────────────────────────
   Single Toast Component (internal)
───────────────────────────────────────────────────────── */

interface ToastItemComponentProps extends VariantProps<typeof toastVariants> {
  toast: ToastItem;
  onDismiss: (id: string) => void;
}

function ToastItemComponent({ toast, onDismiss }: ToastItemComponentProps) {
  const [visible, setVisible] = React.useState(false);
  const [leaving, setLeaving] = React.useState(false);
  const [progress, setProgress] = React.useState(100);
  const variant = toast.variant ?? 'info';
  const duration = toast.duration ?? 4000;

  // Entrance animation
  React.useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // Progress bar countdown
  React.useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (remaining === 0) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [duration]);

  // Auto-dismiss
  React.useEffect(() => {
    const timer = setTimeout(() => handleDismiss(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  function handleDismiss() {
    setLeaving(true);
    setTimeout(() => onDismiss(toast.id), 280);
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        toastVariants({ variant }),
        'relative select-none',
        visible && !leaving
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-2 scale-[0.97]',
        'transition-all duration-300 ease-out'
      )}
    >
      {/* Icon */}
      {toast.icon ?? iconVariantMap[variant]}

      {/* Body */}
      <div className="flex-1 min-w-0 space-y-0.5">
        {toast.title && (
          <p className={cn('text-sm font-semibold leading-snug font-sans', titleColorMap[variant])}>
            {toast.title}
          </p>
        )}
        {toast.description && (
          <p className="text-[13px] text-slate-400 leading-relaxed font-sans">
            {toast.description}
          </p>
        )}
      </div>

      {/* Dismiss */}
      <button
        type="button"
        aria-label="Dismiss notification"
        onClick={handleDismiss}
        className="ml-1 flex-shrink-0 text-slate-600 hover:text-slate-200 transition-colors duration-200 rounded-md p-0.5 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
      >
        <X className="h-4 w-4" strokeWidth={1.5} />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04]">
        <div
          className={cn('h-full transition-none rounded-full', progressColorMap[variant])}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Position utility
───────────────────────────────────────────────────────── */

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-4 right-4 items-end',
  'top-left': 'top-4 left-4 items-start',
  'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-4 right-4 items-end',
  'bottom-left': 'bottom-4 left-4 items-start',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
};

/* ─────────────────────────────────────────────────────────
   ToastProvider
───────────────────────────────────────────────────────── */

export interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastPosition;
  maxToasts?: number;
}

export function ToastProvider({
  children,
  position = 'bottom-right',
  maxToasts = 5,
}: ToastProviderProps) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const toast = React.useCallback(
    (options: Omit<ToastItem, 'id'>) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      setToasts((prev) => {
        const next = [{ ...options, id }, ...prev];
        return next.slice(0, maxToasts);
      });
    },
    [maxToasts]
  );

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}

      {/* Toast Container */}
      <div
        aria-label="Notifications"
        className={cn(
          'fixed z-[9999] flex flex-col gap-3 pointer-events-none',
          positionClasses[position]
        )}
      >
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto">
            <ToastItemComponent toast={t} onDismiss={dismiss} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
