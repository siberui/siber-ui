'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Context for variant sharing
// ─────────────────────────────────────────────────────────────────────────────
type AccordionVariant = 'default' | 'neon' | 'bordered' | 'glass';

const AccordionContext = React.createContext<{ variant?: AccordionVariant }>({
  variant: 'default',
});

// ─────────────────────────────────────────────────────────────────────────────
// Accordion Root
// ─────────────────────────────────────────────────────────────────────────────
export type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> & {
  variant?: AccordionVariant;
};

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ variant = 'default', className, children, ...props }, ref) => (
  <AccordionContext.Provider value={{ variant }}>
    <AccordionPrimitive.Root
      ref={ref}
      className={cn(
        variant === 'bordered' && 'space-y-3',
        variant === 'glass' && 'space-y-3',
        className
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  </AccordionContext.Provider>
));
Accordion.displayName = 'Accordion';

// ─────────────────────────────────────────────────────────────────────────────
// Accordion Item
// ─────────────────────────────────────────────────────────────────────────────
const accordionItemVariants = cva('transition-all duration-200', {
  variants: {
    variant: {
      default: 'border-b border-white/10 last:border-b-0',
      neon: [
        'border-b border-cyan-500/20 last:border-b-0',
        'data-[state=open]:border-cyan-400/60 data-[state=open]:bg-cyan-500/[0.03]',
      ].join(' '),
      bordered: [
        'rounded-xl border border-white/10 bg-slate-950/60 overflow-hidden',
        'data-[state=open]:border-white/20 data-[state=open]:bg-slate-900/60',
      ].join(' '),
      glass: [
        'rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md overflow-hidden',
        'data-[state=open]:border-white/20 data-[state=open]:bg-white/[0.05]',
      ].join(' '),
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionItemVariants({ variant }), className)}
      {...props}
    />
  );
});
AccordionItem.displayName = 'AccordionItem';

// ─────────────────────────────────────────────────────────────────────────────
// Accordion Trigger
// ─────────────────────────────────────────────────────────────────────────────
const accordionTriggerVariants = cva(
  [
    'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all duration-200 select-none cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'disabled:pointer-events-none disabled:opacity-40',
    '[&[data-state=open]>svg]:rotate-180',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'text-slate-200 hover:text-white',
        neon: [
          'font-mono uppercase tracking-wider text-cyan-400/80 px-1',
          'hover:text-cyan-300 hover:translate-x-0.5',
          'data-[state=open]:text-cyan-300 data-[state=open]:font-bold',
        ].join(' '),
        bordered: 'px-5 text-slate-200 hover:text-white',
        glass: 'px-5 text-slate-200 hover:text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { variant } = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants({ variant }), className)}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 transition-transform duration-200',
            variant === 'neon' ? 'text-cyan-400' : 'text-slate-400'
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// Accordion Content
// ─────────────────────────────────────────────────────────────────────────────
const accordionContentVariants = cva(
  'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  {
    variants: {
      variant: {
        default: 'text-slate-400',
        neon: 'text-slate-300 px-1',
        bordered: 'px-5 text-slate-400',
        glass: 'px-5 text-slate-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { variant } = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(accordionContentVariants({ variant }), className)}
      {...props}
    >
      <div className={cn('pb-4 pt-0', (variant === 'bordered' || variant === 'glass') && 'pt-1')}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
