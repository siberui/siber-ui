'use client';

import * as React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Breadcrumb Root
// ─────────────────────────────────────────────────────────────────────────────
export type BreadcrumbVariant = 'default' | 'neon' | 'glass' | 'ghost';

interface BreadcrumbContextValue {
  variant?: BreadcrumbVariant;
  separator?: React.ReactNode;
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({
  variant: 'default',
});

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
  variant?: BreadcrumbVariant;
  separator?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, variant = 'default', separator, children, ...props }, ref) => (
    <BreadcrumbContext.Provider value={{ variant, separator }}>
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
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(BreadcrumbContext);

  return (
    <ol
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm',
        variant === 'neon' && 'gap-2',
        className
      )}
      {...props}
    />
  );
});
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
        'transition-all font-medium inline-flex items-center gap-1.5',
        variant === 'neon'
          ? 'text-cyan-400/70 hover:text-cyan-200 hover:bg-cyan-500/10 px-2 py-0.5 rounded font-mono text-xs tracking-wider hover:shadow-[0_0_10px_rgba(0,217,232,0.25)]'
          : variant === 'glass'
          ? 'text-slate-300 hover:text-white hover:bg-white/[0.06] px-2 py-0.5 rounded text-xs transition-colors'
          : variant === 'ghost'
          ? 'text-slate-500 hover:text-slate-200 text-xs'
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
        'font-medium inline-flex items-center gap-1.5',
        variant === 'neon'
          ? 'text-cyan-200 bg-cyan-500/15 border border-cyan-500/40 px-2.5 py-0.5 rounded font-mono text-xs tracking-wider shadow-[0_0_14px_rgba(0,217,232,0.25)]'
          : variant === 'glass'
          ? 'text-white bg-white/[0.08] border border-white/10 px-2.5 py-0.5 rounded text-xs backdrop-blur-md'
          : variant === 'ghost'
          ? 'text-slate-200 text-xs font-semibold'
          : 'text-slate-100 font-semibold',
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
  const { variant, separator } = React.useContext(BreadcrumbContext);

  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn(
        'flex items-center select-none',
        variant === 'neon' ? 'text-cyan-500/50 drop-shadow-[0_0_6px_rgba(0,217,232,0.3)] font-mono text-xs' : 'text-slate-600',
        className
      )}
      {...props}
    >
      {children ?? separator ?? <ChevronRight className="h-3.5 w-3.5" />}
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
        'flex h-7 w-7 items-center justify-center rounded',
        variant === 'neon'
          ? 'text-cyan-400/60 bg-cyan-950/30 border border-cyan-500/20 font-mono text-xs'
          : variant === 'glass'
          ? 'text-slate-400 bg-white/[0.03] border border-white/10'
          : 'text-slate-500',
        className
      )}
      {...props}
    >
      <MoreHorizontal className="h-3.5 w-3.5" />
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
