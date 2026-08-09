'use client';

import * as React from 'react';
import { cn } from '../../utils/cn';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
export type PaginationVariant = 'default' | 'neon' | 'ghost';

interface PaginationRootProps extends React.ComponentPropsWithoutRef<'nav'> {
  variant?: PaginationVariant;
}

const PaginationContext = React.createContext<{ variant?: PaginationVariant }>({
  variant: 'default',
});

// ─────────────────────────────────────────────────────────────────────────────
// Pagination Root
// ─────────────────────────────────────────────────────────────────────────────
const Pagination = React.forwardRef<HTMLElement, PaginationRootProps>(
  ({ className, variant = 'default', children, ...props }, ref) => (
    <PaginationContext.Provider value={{ variant }}>
      <nav
        ref={ref}
        role="navigation"
        aria-label="pagination"
        className={cn('mx-auto flex w-full justify-center', className)}
        {...props}
      >
        {children}
      </nav>
    </PaginationContext.Provider>
  )
);
Pagination.displayName = 'Pagination';

// ─────────────────────────────────────────────────────────────────────────────
// PaginationContent
// ─────────────────────────────────────────────────────────────────────────────
const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

// ─────────────────────────────────────────────────────────────────────────────
// PaginationItem
// ─────────────────────────────────────────────────────────────────────────────
const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

// ─────────────────────────────────────────────────────────────────────────────
// PaginationLink — base button element
// ─────────────────────────────────────────────────────────────────────────────
interface PaginationLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  isActive?: boolean;
}

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, children, ...props }, ref) => {
    const { variant } = React.useContext(PaginationContext);

    const base =
      'flex h-9 w-9 items-center justify-center rounded text-sm font-medium transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

    const styles = {
      default: {
        inactive: 'text-slate-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-border-hairline',
        active: 'bg-slate-700 text-white border border-border-strong',
      },
      neon: {
        inactive:
          'font-mono text-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30',
        active:
          'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(0,240,255,0.2)]',
      },
      ghost: {
        inactive: 'text-slate-500 hover:text-slate-200 hover:bg-white/5',
        active: 'bg-white/10 text-white',
      },
    };

    const v = variant ?? 'default';
    const stateClass = isActive ? styles[v].active : styles[v].inactive;

    return (
      <a
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        className={cn(base, stateClass, className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);
PaginationLink.displayName = 'PaginationLink';

// ─────────────────────────────────────────────────────────────────────────────
// PaginationPrevious
// ─────────────────────────────────────────────────────────────────────────────
const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  Omit<PaginationLinkProps, 'isActive'>
>(({ className, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to previous page"
    className={cn('gap-1 w-auto px-2.5', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span className="sr-only sm:not-sr-only sm:text-xs">Prev</span>
  </PaginationLink>
));
PaginationPrevious.displayName = 'PaginationPrevious';

// ─────────────────────────────────────────────────────────────────────────────
// PaginationNext
// ─────────────────────────────────────────────────────────────────────────────
const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  Omit<PaginationLinkProps, 'isActive'>
>(({ className, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to next page"
    className={cn('gap-1 w-auto px-2.5', className)}
    {...props}
  >
    <span className="sr-only sm:not-sr-only sm:text-xs">Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
));
PaginationNext.displayName = 'PaginationNext';

// ─────────────────────────────────────────────────────────────────────────────
// PaginationEllipsis
// ─────────────────────────────────────────────────────────────────────────────
const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  const { variant } = React.useContext(PaginationContext);

  return (
    <span
      aria-hidden
      className={cn(
        'flex h-9 w-9 items-center justify-center',
        variant === 'neon' ? 'text-cyan-500/40' : 'text-slate-600',
        className
      )}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
};
PaginationEllipsis.displayName = 'PaginationEllipsis';

// ─────────────────────────────────────────────────────────────────────────────
// Compound — usePagination helper hook
// ─────────────────────────────────────────────────────────────────────────────
export function usePagination({
  totalPages,
  currentPage,
  siblingCount = 1,
}: {
  totalPages: number;
  currentPage: number;
  siblingCount?: number;
}): (number | '...')[] {
  const pages: (number | '...')[] = [];
  const totalShown = siblingCount * 2 + 5; // first, last, current ± siblings + 2 ellipses

  if (totalPages <= totalShown) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 2);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);
  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPages - 1;

  pages.push(1);
  if (showLeftDots) pages.push('...');
  for (let i = leftSibling; i <= rightSibling; i++) pages.push(i);
  if (showRightDots) pages.push('...');
  pages.push(totalPages);

  return pages;
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
