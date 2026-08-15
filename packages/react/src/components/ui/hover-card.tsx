import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const hoverCardVariants = cva(
  [
    'z-50 w-80 rounded-xl p-4 text-slate-300 shadow-xl outline-none',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=delayed-open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-slate-950/95 border border-border-hairline text-slate-300 shadow-2xl backdrop-blur-md',
        neon: 'bg-[#050d14]/95 border border-cyan-500/30 text-cyan-50 shadow-[0_0_25px_rgba(0,240,255,0.15)] backdrop-blur-md',
        glass: 'glass-surface border border-white/10 text-slate-200 shadow-2xl backdrop-blur-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface HoverCardContentProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>,
    VariantProps<typeof hoverCardVariants> {}

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(({ className, align = 'center', sideOffset = 6, variant = 'default', ...props }, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(hoverCardVariants({ variant }), className)}
      {...props}
    />
  </HoverCardPrimitive.Portal>
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent, hoverCardVariants };
