'use client';

import * as React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Breadcrumb Root
// ─────────────────────────────────────────────────────────────────────────────
export type BreadcrumbVariant = 'default' | 'neon' | 'ghost';

const BreadcrumbContext = React.createContext<{ variant?: BreadcrumbVariant }>({
  variant: 'default',
});

interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
  variant?: BreadcrumbVariant;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, variant = 'default', children, ...props }, ref) => (
    <BreadcrumbContext.Provider value={{ variant }}>
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn('flex items-center', className)}
        {...props}
      >
        {children}
      </nav>
    </BreadcrumbContext.Provider>
  )
);
Breadcrumb.displayName = 'Breadcrumb';

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbList
// ─────────────────────────────────────────────────────────────────────────────
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm',
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = 'BreadcrumbList';

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbItem
// ─────────────────────────────────────────────────────────────────────────────
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbLink
// ─────────────────────────────────────────────────────────────────────────────
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(BreadcrumbContext);

  return (
    <a
      ref={ref}
      className={cn(
        'transition-colors font-medium',
        variant === 'neon'
          ? 'text-cyan-400/70 hover:text-cyan-300 font-mono text-xs tracking-wide hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]'
          : variant === 'ghost'
          ? 'text-slate-500 hover:text-slate-200'
          : 'text-slate-400 hover:text-slate-100',
        className
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbPage (active / current item)
// ─────────────────────────────────────────────────────────────────────────────
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(BreadcrumbContext);

  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        'font-medium',
        variant === 'neon'
          ? 'text-cyan-300 font-mono text-xs tracking-wide drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]'
          : variant === 'ghost'
          ? 'text-slate-200'
          : 'text-slate-100',
        className
      )}
      {...props}
    />
  );
});
BreadcrumbPage.displayName = 'BreadcrumbPage';

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbSeparator
// ─────────────────────────────────────────────────────────────────────────────
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => {
  const { variant } = React.useContext(BreadcrumbContext);

  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn(
        'flex items-center',
        variant === 'neon' ? 'text-cyan-500/40' : 'text-slate-600',
        className
      )}
      {...props}
    >
      {children ?? <ChevronRight className="h-3.5 w-3.5" />}
    </li>
  );
};
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbEllipsis (collapsed middle items)
// ─────────────────────────────────────────────────────────────────────────────
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  const { variant } = React.useContext(BreadcrumbContext);

  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded',
        variant === 'neon' ? 'text-cyan-400/60' : 'text-slate-500',
        className
      )}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  );
};
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
