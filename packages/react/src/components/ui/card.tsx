import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const cardVariants = cva(
  [
    'rounded-xl text-fg relative overflow-hidden',
    'transition-colors duration-200 ease-out',
  ].join(' '),
  {
    variants: {
      variant: {
        // Level 1 surface — the default, extremely usable everyday card.
        default: [
          'bg-surface-1 border border-border-hairline',
          'hover:border-border-subtle',
        ].join(' '),
        // Level 2 surface — for cards that sit above other content.
        elevated: [
          'bg-surface-2 border border-border-hairline shadow-[0_8px_24px_rgba(0,0,0,0.28)]',
          'hover:border-border-subtle',
        ].join(' '),
        outlined: [
          'bg-transparent border border-border-subtle',
          'hover:border-signal-cyan/30',
        ].join(' '),
        interactive: [
          'bg-surface-1 border border-border-hairline cursor-pointer',
          'hover:border-border-subtle hover:bg-surface-2',
          'active:translate-y-px',
        ].join(' '),
        terminal: [
          'bg-surface-1 border border-border-hairline font-mono',
          'hover:border-signal-green/30',
        ].join(' '),
        signal: [
          'bg-surface-1 border border-signal-cyan/25',
          'shadow-[0_0_0_1px_rgba(0,217,232,0.06)]',
          'hover:border-signal-cyan/40',
        ].join(' '),
        glass: [
          'glass-surface border border-border-hairline',
          'hover:border-border-subtle',
        ].join(' '),
        /** @deprecated use `signal` */
        neon: [
          'bg-surface-1 border-signal-cyan/20',
          'shadow-[0_0_25px_rgba(0,217,232,0.05)]',
          'hover:border-signal-cyan/40',
        ].join(' '),
        /** @deprecated use `default`/`ghost-like` transparent surface */
        ghost: [
          'bg-transparent border-transparent shadow-none',
          'hover:bg-surface-1',
        ].join(' '),
      },
      accentLine: {
        none: '',
        cyan: [
          'before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px]',
          'before:bg-gradient-to-r before:from-transparent before:via-signal-cyan/70 before:to-transparent',
        ].join(' '),
        purple: [
          'before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px]',
          'before:bg-gradient-to-r before:from-transparent before:via-signal-violet/70 before:to-transparent',
        ].join(' '),
        green: [
          'before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px]',
          'before:bg-gradient-to-r before:from-transparent before:via-signal-green/70 before:to-transparent',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
      accentLine: 'none',
    },
  },
);

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, accentLine, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, accentLine, className }))}
      {...props}
    />
  ),
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
    className={cn('text-title text-fg', className)}
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
    className={cn(
      'text-caption text-fg-subtle normal-case tracking-normal',
      className,
    )}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-6 pt-0', className)}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center p-6 pt-4 border-t border-border-default mt-4',
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
