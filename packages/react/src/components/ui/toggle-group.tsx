'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const toggleGroupItemVariants = cva(
  [
    'inline-flex items-center justify-center text-sm font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500/50',
    'disabled:pointer-events-none disabled:opacity-40 select-none cursor-pointer',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent',
          'data-[state=on]:bg-slate-800 data-[state=on]:text-white data-[state=on]:border-border-strong',
        ].join(' '),
        outline: [
          'bg-transparent text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200',
          'data-[state=on]:border-cyan-500/50 data-[state=on]:bg-cyan-500/10 data-[state=on]:text-cyan-300',
        ].join(' '),
        neon: [
          'bg-transparent text-slate-400 font-mono text-xs border border-transparent hover:text-cyan-300 hover:bg-cyan-500/[0.06]',
          'data-[state=on]:bg-cyan-500/20 data-[state=on]:text-cyan-300 data-[state=on]:border-cyan-400/60 data-[state=on]:shadow-[0_0_12px_rgba(0,240,255,0.2)]',
        ].join(' '),
        glass: [
          'bg-white/[0.02] text-slate-300 border border-white/[0.06] backdrop-blur-md hover:bg-white/[0.06]',
          'data-[state=on]:bg-white/[0.1] data-[state=on]:text-white data-[state=on]:border-cyan-500/40 data-[state=on]:shadow-[0_0_12px_rgba(0,240,255,0.15)]',
        ].join(' '),
      },
      size: {
        sm: 'h-8 px-2.5 text-xs gap-1.5',
        md: 'h-9 px-3 text-sm gap-2',
        lg: 'h-10 px-4 text-base gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleGroupItemVariants>
>({
  size: 'md',
  variant: 'default',
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleGroupItemVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('flex items-center gap-1', className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleGroupItemVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleGroupItemVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        'rounded-md',
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem, toggleGroupItemVariants };
