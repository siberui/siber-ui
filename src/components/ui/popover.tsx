import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Popover Context
// ─────────────────────────────────────────────────────────────────────────────
export type PopoverVariant = 'default' | 'neon' | 'glass';

const PopoverContext = React.createContext<{ variant?: PopoverVariant }>({
  variant: 'default',
});

// ─────────────────────────────────────────────────────────────────────────────
// Popover Root
// ─────────────────────────────────────────────────────────────────────────────
export interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  variant?: PopoverVariant;
}

const Popover = ({ variant = 'default', children, ...props }: PopoverProps) => (
  <PopoverContext.Provider value={{ variant }}>
    <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
  </PopoverContext.Provider>
);
Popover.displayName = PopoverPrimitive.Root.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// PopoverTrigger & PopoverAnchor
// ─────────────────────────────────────────────────────────────────────────────
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;

// ─────────────────────────────────────────────────────────────────────────────
// PopoverContent
// ─────────────────────────────────────────────────────────────────────────────
const popoverVariants = cva(
  'z-50 w-72 rounded-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 border border-white/[0.08] text-slate-200 shadow-xl',
        neon:
          'bg-[#050d14] border border-cyan-500/30 text-cyan-50 shadow-[0_0_25px_rgba(0,240,255,0.15)]',
        glass:
          'bg-white/[0.02] border border-white/[0.1] text-white backdrop-blur-xl shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    VariantProps<typeof popoverVariants> {}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    { className, variant, align = 'center', sideOffset = 4, children, ...props },
    ref
  ) => {
    const context = React.useContext(PopoverContext);
    const resolvedVariant = variant ?? context.variant ?? 'default';

    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(popoverVariants({ variant: resolvedVariant }), className)}
          {...props}
        >
          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    );
  }
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// PopoverArrow (Optional)
// ─────────────────────────────────────────────────────────────────────────────
const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => {
  const context = React.useContext(PopoverContext);
  const variant = context.variant ?? 'default';

  return (
    <PopoverPrimitive.Arrow
      ref={ref}
      className={cn(
        variant === 'neon' ? 'fill-cyan-500/30' : 'fill-white/[0.08]',
        className
      )}
      {...props}
    />
  );
});
PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// PopoverHeader / PopoverFooter (Helper blocks)
// ─────────────────────────────────────────────────────────────────────────────
const PopoverHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const context = React.useContext(PopoverContext);
  const isNeon = context.variant === 'neon';
  
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 p-4 pb-3 border-b',
        isNeon ? 'border-cyan-500/20' : 'border-white/[0.08]',
        className
      )}
      {...props}
    />
  );
};
PopoverHeader.displayName = 'PopoverHeader';

const PopoverFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const context = React.useContext(PopoverContext);
  const isNeon = context.variant === 'neon';

  return (
    <div
      className={cn(
        'flex items-center justify-end p-4 pt-3 border-t',
        isNeon ? 'border-cyan-500/20' : 'border-white/[0.08]',
        className
      )}
      {...props}
    />
  );
};
PopoverFooter.displayName = 'PopoverFooter';

// ─────────────────────────────────────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────────────────────────────────────
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverArrow,
  PopoverHeader,
  PopoverFooter,
};
