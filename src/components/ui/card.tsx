import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const cardVariants = cva(
  [
    'rounded-xl text-slate-100 relative overflow-hidden',
    'transition-all duration-300 ease-out',
    'bg-white/[0.03] backdrop-blur-xl border border-white/[0.07]',
    'shadow-[0_4px_30px_rgba(0,0,0,0.3)]',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'hover:border-white/[0.12]',
          'hover:shadow-[0_4px_40px_rgba(0,0,0,0.4)]',
        ].join(' '),
        neon: [
          'border-cyan-500/20',
          'shadow-[0_0_25px_rgba(0,240,255,0.06),0_4px_30px_rgba(0,0,0,0.3)]',
          'hover:border-cyan-500/40',
          'hover:shadow-[0_0_35px_rgba(0,240,255,0.12),0_0_70px_rgba(0,240,255,0.05),0_4px_30px_rgba(0,0,0,0.3)]',
        ].join(' '),
        interactive: [
          'cursor-pointer',
          'hover:border-white/[0.12] hover:bg-white/[0.05]',
          'hover:scale-[1.02]',
          'hover:shadow-[0_8px_50px_rgba(0,0,0,0.5)]',
        ].join(' '),
        ghost: [
          'bg-transparent border-slate-800/40 shadow-none',
          'hover:bg-white/[0.03]',
        ].join(' '),
      },
      accentLine: {
        none: '',
        cyan: [
          'before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px]',
          'before:bg-gradient-to-r before:from-transparent before:via-cyan-400/70 before:to-transparent',
        ].join(' '),
        purple: [
          'before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px]',
          'before:bg-gradient-to-r before:from-transparent before:via-purple-400/70 before:to-transparent',
        ].join(' '),
        green: [
          'before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px]',
          'before:bg-gradient-to-r before:from-transparent before:via-emerald-400/70 before:to-transparent',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
      accentLine: 'none',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, accentLine, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, accentLine, className }))}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6 pb-3', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg font-semibold tracking-tight text-white font-sans',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-xs font-mono text-slate-500', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-4 border-t border-white/[0.06] mt-4', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
