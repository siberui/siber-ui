import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const separatorVariants = cva('shrink-0', {
  variants: {
    variant: {
      default: 'bg-border-default',
      subtle: 'bg-border-hairline',
      signal: 'bg-gradient-to-r from-transparent via-signal-cyan/50 to-transparent',
      glow: 'bg-signal-cyan/40 shadow-[0_0_8px_rgba(0,217,232,0.4)]',
      gradient: 'bg-gradient-to-r from-transparent via-white/20 to-transparent',
    },
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
  },
  compoundVariants: [
    {
      variant: 'signal',
      orientation: 'vertical',
      class: 'bg-gradient-to-b from-transparent via-signal-cyan/50 to-transparent',
    },
    {
      variant: 'gradient',
      orientation: 'vertical',
      class: 'bg-gradient-to-b from-transparent via-white/20 to-transparent',
    },
  ],
  defaultVariants: {
    variant: 'default',
    orientation: 'horizontal',
  },
});

export interface SeparatorProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, 'orientation'>,
    VariantProps<typeof separatorVariants> {}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = 'horizontal', decorative = true, variant, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation ?? undefined}
      className={cn(
        separatorVariants({
          variant,
          orientation,
          className,
        })
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator, separatorVariants };
