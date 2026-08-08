import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Provider — wrap your app root with this once
// ─────────────────────────────────────────────────────────────────────────────
const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipPortal = TooltipPrimitive.Portal;

// ─────────────────────────────────────────────────────────────────────────────
// Content Variants
// ─────────────────────────────────────────────────────────────────────────────
const tooltipContentVariants = cva(
  [
    'z-50 overflow-hidden rounded-lg px-3 py-2 text-xs font-sans leading-snug shadow-xl',
    'will-change-[transform,opacity]',
    // Entry / exit animations using Radix data-state
    'data-[state=delayed-open]:animate-in data-[state=closed]:animate-out',
    'data-[state=delayed-open]:fade-in-0 data-[state=closed]:fade-out-0',
    'data-[state=delayed-open]:zoom-in-95 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-1.5 data-[side=top]:slide-in-from-bottom-1.5',
    'data-[side=left]:slide-in-from-right-1.5 data-[side=right]:slide-in-from-left-1.5',
    'duration-150 ease-out',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'bg-slate-900/95 text-slate-100 border border-white/[0.1] backdrop-blur-md',
        ].join(' '),
        neon: [
          'bg-cyan-950/90 text-cyan-300 font-mono tracking-wide',
          'border border-cyan-500/40',
          'shadow-[0_0_20px_rgba(0,240,255,0.12)]',
          'backdrop-blur-md',
        ].join(' '),
        neonPurple: [
          'bg-purple-950/90 text-purple-300 font-mono tracking-wide',
          'border border-purple-500/40',
          'shadow-[0_0_20px_rgba(168,85,247,0.12)]',
          'backdrop-blur-md',
        ].join(' '),
        destructive: [
          'bg-rose-950/90 text-rose-300',
          'border border-rose-500/40',
          'shadow-[0_0_20px_rgba(244,63,94,0.12)]',
          'backdrop-blur-md',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// Arrow Variants
// ─────────────────────────────────────────────────────────────────────────────
const arrowVariants: Record<string, string> = {
  default: 'fill-slate-900',
  neon: 'fill-cyan-950',
  neonPurple: 'fill-purple-950',
  destructive: 'fill-rose-950',
};

// ─────────────────────────────────────────────────────────────────────────────
// TooltipContent
// ─────────────────────────────────────────────────────────────────────────────
export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {
  /** Show the small arrow pointing at the trigger */
  showArrow?: boolean;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, variant = 'default', sideOffset = 6, showArrow = true, children, ...props }, ref) => (
  <TooltipPortal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tooltipContentVariants({ variant }), className)}
      {...props}
    >
      {children}
      {showArrow && (
        <TooltipPrimitive.Arrow
          className={cn('opacity-80', arrowVariants[variant ?? 'default'])}
          width={8}
          height={4}
        />
      )}
    </TooltipPrimitive.Content>
  </TooltipPortal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// Convenience wrapper — single-component usage
// ─────────────────────────────────────────────────────────────────────────────
export interface SimpleTooltipProps extends Omit<TooltipContentProps, 'content'> {
  /** The tooltip body — text or any React node */
  label: React.ReactNode;
  children: React.ReactNode;
  delayDuration?: number;
}

const SimpleTooltip = ({
  label,
  children,
  delayDuration = 400,
  variant,
  side,
  align,
  showArrow,
  className,
  ...contentProps
}: SimpleTooltipProps) => (
  <TooltipProvider delayDuration={delayDuration}>
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        variant={variant}
        side={side}
        align={align}
        showArrow={showArrow}
        className={className}
        {...contentProps}
      >
        {label}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipPortal,
  SimpleTooltip,
};
