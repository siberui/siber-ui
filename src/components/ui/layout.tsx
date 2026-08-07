import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────
   DESIGN TOKENS — Gap Scales
   Shared across Container, Grid, Stack, Row
───────────────────────────────────────────────────────── */

export const gapScale = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-12',
} as const;

export const rowGapScale = {
  none: 'gap-y-0',
  xs: 'gap-y-1',
  sm: 'gap-y-2',
  md: 'gap-y-4',
  lg: 'gap-y-6',
  xl: 'gap-y-8',
  '2xl': 'gap-y-12',
} as const;

export const colGapScale = {
  none: 'gap-x-0',
  xs: 'gap-x-1',
  sm: 'gap-x-2',
  md: 'gap-x-4',
  lg: 'gap-x-6',
  xl: 'gap-x-8',
  '2xl': 'gap-x-12',
} as const;

export type GapSize = keyof typeof gapScale;

/* ─────────────────────────────────────────────────────────
   CONTAINER
   Centers content, enforces max-width, adds horizontal padding.
───────────────────────────────────────────────────────── */

const containerVariants = cva('w-full mx-auto px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
  },
  defaultVariants: { size: 'xl' },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(containerVariants({ size, className }))} {...props} />
  )
);
Container.displayName = 'Container';

/* ─────────────────────────────────────────────────────────
   GRID
   CSS Grid with explicit col count, responsive overrides,
   and fluid auto-fill mode.
───────────────────────────────────────────────────────── */

const colsMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

const smColsMap: Record<number, string> = {
  1: 'sm:grid-cols-1', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4', 5: 'sm:grid-cols-5', 6: 'sm:grid-cols-6',
  7: 'sm:grid-cols-7', 8: 'sm:grid-cols-8', 9: 'sm:grid-cols-9',
  10: 'sm:grid-cols-10', 11: 'sm:grid-cols-11', 12: 'sm:grid-cols-12',
};

const mdColsMap: Record<number, string> = {
  1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3',
  4: 'md:grid-cols-4', 5: 'md:grid-cols-5', 6: 'md:grid-cols-6',
  7: 'md:grid-cols-7', 8: 'md:grid-cols-8', 9: 'md:grid-cols-9',
  10: 'md:grid-cols-10', 11: 'md:grid-cols-11', 12: 'md:grid-cols-12',
};

const lgColsMap: Record<number, string> = {
  1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7', 8: 'lg:grid-cols-8', 9: 'lg:grid-cols-9',
  10: 'lg:grid-cols-10', 11: 'lg:grid-cols-11', 12: 'lg:grid-cols-12',
};

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Column count at default (mobile-first) breakpoint. 1-12 or "auto" for fluid */
  cols?: number | 'auto';
  /** Column count at sm breakpoint */
  smCols?: number;
  /** Column count at md breakpoint */
  mdCols?: number;
  /** Column count at lg breakpoint */
  lgCols?: number;
  /** Gap between cells */
  gap?: GapSize;
  /** Row gap (overrides gap for rows only) */
  rowGap?: GapSize;
  /** Column gap (overrides gap for cols only) */
  colGap?: GapSize;
  /** Min cell width for auto-fill mode */
  minCellWidth?: string;
  /** Stretch cells to fill row height */
  stretch?: boolean;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      cols = 12,
      smCols,
      mdCols,
      lgCols,
      gap = 'md',
      rowGap,
      colGap,
      minCellWidth = '240px',
      stretch = false,
      style,
      ...props
    },
    ref
  ) => {
    const isAuto = cols === 'auto';
    const colClass = isAuto ? '' : colsMap[cols] ?? 'grid-cols-12';
    const smClass = smCols ? smColsMap[smCols] : '';
    const mdClass = mdCols ? mdColsMap[mdCols] : '';
    const lgClass = lgCols ? lgColsMap[lgCols] : '';

    const gapClass = rowGap || colGap
      ? cn(rowGap && rowGapScale[rowGap], colGap && colGapScale[colGap])
      : gapScale[gap];

    const autoStyle: React.CSSProperties = isAuto
      ? { gridTemplateColumns: `repeat(auto-fill, minmax(${minCellWidth}, 1fr))`, ...style }
      : style ?? {};

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          colClass,
          smClass,
          mdClass,
          lgClass,
          gapClass,
          stretch && 'items-stretch',
          className
        )}
        style={autoStyle}
        {...props}
      />
    );
  }
);
Grid.displayName = 'Grid';

/* ─────────────────────────────────────────────────────────
   COL
   Grid cell with span, offset (col-start), and row-span.
───────────────────────────────────────────────────────── */

const spanMap: Record<number | 'full', string> = {
  1: 'col-span-1', 2: 'col-span-2', 3: 'col-span-3',
  4: 'col-span-4', 5: 'col-span-5', 6: 'col-span-6',
  7: 'col-span-7', 8: 'col-span-8', 9: 'col-span-9',
  10: 'col-span-10', 11: 'col-span-11', 12: 'col-span-12',
  full: 'col-span-full',
};

const smSpanMap: Record<number | 'full', string> = {
  1: 'sm:col-span-1', 2: 'sm:col-span-2', 3: 'sm:col-span-3',
  4: 'sm:col-span-4', 5: 'sm:col-span-5', 6: 'sm:col-span-6',
  7: 'sm:col-span-7', 8: 'sm:col-span-8', 9: 'sm:col-span-9',
  10: 'sm:col-span-10', 11: 'sm:col-span-11', 12: 'sm:col-span-12',
  full: 'sm:col-span-full',
};

const mdSpanMap: Record<number | 'full', string> = {
  1: 'md:col-span-1', 2: 'md:col-span-2', 3: 'md:col-span-3',
  4: 'md:col-span-4', 5: 'md:col-span-5', 6: 'md:col-span-6',
  7: 'md:col-span-7', 8: 'md:col-span-8', 9: 'md:col-span-9',
  10: 'md:col-span-10', 11: 'md:col-span-11', 12: 'md:col-span-12',
  full: 'md:col-span-full',
};

const lgSpanMap: Record<number | 'full', string> = {
  1: 'lg:col-span-1', 2: 'lg:col-span-2', 3: 'lg:col-span-3',
  4: 'lg:col-span-4', 5: 'lg:col-span-5', 6: 'lg:col-span-6',
  7: 'lg:col-span-7', 8: 'lg:col-span-8', 9: 'lg:col-span-9',
  10: 'lg:col-span-10', 11: 'lg:col-span-11', 12: 'lg:col-span-12',
  full: 'lg:col-span-full',
};

const rowSpanMap: Record<number, string> = {
  1: 'row-span-1', 2: 'row-span-2', 3: 'row-span-3',
  4: 'row-span-4', 5: 'row-span-5', 6: 'row-span-6',
};

const startMap: Record<number, string> = {
  1: 'col-start-1', 2: 'col-start-2', 3: 'col-start-3',
  4: 'col-start-4', 5: 'col-start-5', 6: 'col-start-6',
  7: 'col-start-7', 8: 'col-start-8', 9: 'col-start-9',
  10: 'col-start-10', 11: 'col-start-11', 12: 'col-start-12',
};

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number | 'full';
  smSpan?: number | 'full';
  mdSpan?: number | 'full';
  lgSpan?: number | 'full';
  rowSpan?: number;
  start?: number;
}

const Col = React.forwardRef<HTMLDivElement, ColProps>(
  ({ className, span, smSpan, mdSpan, lgSpan, rowSpan, start, ...props }, ref) => {
    // If no base span is passed but responsive spans are provided, default base span to 'full' for responsive stacking on mobile.
    const effectiveSpan = span ?? (smSpan || mdSpan || lgSpan ? 'full' : 1);

    return (
      <div
        ref={ref}
        className={cn(
          spanMap[effectiveSpan] ?? 'col-span-1',
          smSpan && smSpanMap[smSpan],
          mdSpan && mdSpanMap[mdSpan],
          lgSpan && lgSpanMap[lgSpan],
          rowSpan && rowSpanMap[rowSpan],
          start && startMap[start],
          className
        )}
        {...props}
      />
    );
  }
);
Col.displayName = 'Col';

/* ─────────────────────────────────────────────────────────
   STACK
   Flexbox column (default) or row direction.
   The primary composition primitive for vertical rhythm.
───────────────────────────────────────────────────────── */

const stackVariants = cva('flex', {
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    gap: gapScale,
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
    full: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    gap: 'md',
    align: 'stretch',
    justify: 'start',
    wrap: false,
    full: false,
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, gap, align, justify, wrap, full, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(stackVariants({ direction, gap, align, justify, wrap, full, className }))}
      {...props}
    />
  )
);
Stack.displayName = 'Stack';

/* ─────────────────────────────────────────────────────────
   ROW
   Horizontal flex — convenience wrapper for Stack horizontal.
   Defaults: align=center, gap=md, wrap=false.
───────────────────────────────────────────────────────── */

export interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof stackVariants>, 'direction'> {}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ className, gap = 'md', align = 'center', justify = 'start', wrap = false, full = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(stackVariants({ direction: 'horizontal', gap, align, justify, wrap, full, className }))}
      {...props}
    />
  )
);
Row.displayName = 'Row';

/* ─────────────────────────────────────────────────────────
   DIVIDER — layout-aware separator
───────────────────────────────────────────────────────── */

export interface LayoutDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
}

const LayoutDivider = React.forwardRef<HTMLHRElement, LayoutDividerProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <hr
      ref={ref}
      aria-orientation={orientation}
      className={cn(
        'border-0 shrink-0 opacity-60 my-2',
        orientation === 'horizontal'
          ? 'w-full h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent'
          : 'h-full w-px bg-gradient-to-b from-transparent via-white/[0.12] to-transparent self-stretch mx-2',
        className
      )}
      {...props}
    />
  )
);
LayoutDivider.displayName = 'LayoutDivider';

/* ─────────────────────────────────────────────────────────
   SPACER
   Flexible empty space for pushing items in a flex container.
───────────────────────────────────────────────────────── */

function Spacer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div aria-hidden className={cn('flex-1', className)} {...props} />;
}

/* ─────────────────────────────────────────────────────────
   EXPORTS
───────────────────────────────────────────────────────── */

export {
  Container, containerVariants,
  Grid,
  Col,
  Stack, stackVariants,
  Row,
  LayoutDivider,
  Spacer,
};
