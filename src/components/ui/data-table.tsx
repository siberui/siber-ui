import * as React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type RowSelectionState,
  type VisibilityState,
  type Table as TanStackTable,
  type Row,
  type Header,
  type Cell,
  type HeaderGroup,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Minus,
  Search,
} from 'lucide-react';
import { cn } from '@/utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Re-export ColumnDef for consumers
// ─────────────────────────────────────────────────────────────────────────────
export type { ColumnDef as DataTableColumnDef };

// ─────────────────────────────────────────────────────────────────────────────
// Variant context
// ─────────────────────────────────────────────────────────────────────────────
type DataTableVariant = 'default' | 'neon' | 'glass';

const DataTableContext = React.createContext<{ variant: DataTableVariant }>({
  variant: 'default',
});

// ─────────────────────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────────────────────
export interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, unknown>[];
  variant?: DataTableVariant;

  // Features
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableSelection?: boolean;
  enablePagination?: boolean;
  enableVirtualization?: boolean;

  // Pagination
  pageSize?: number;
  pageSizeOptions?: number[];

  // Virtualization
  estimateRowHeight?: number;
  overscan?: number;
  maxHeight?: string;

  // Callbacks
  onRowClick?: (row: TData) => void;
  onSelectionChange?: (rows: TData[]) => void;

  // Slots
  caption?: string;
  emptyState?: React.ReactNode;
  toolbar?: React.ReactNode;

  className?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// DataTable — main component
// ─────────────────────────────────────────────────────────────────────────────
export function DataTable<TData>({
  data,
  columns: columnsProp,
  variant = 'default',
  enableSorting = true,
  enableFiltering = true,
  enableSelection = false,
  enablePagination = true,
  enableVirtualization = false,
  pageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  estimateRowHeight = 48,
  overscan = 5,
  maxHeight = '600px',
  onRowClick,
  onSelectionChange,
  caption,
  emptyState,
  toolbar,
  className,
}: DataTableProps<TData>) {
  // ── state ──
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  // ── selection column ──
  const selectionColumn: ColumnDef<TData, unknown> = React.useMemo(
    () => ({
      id: 'select',
      header: ({ table }: { table: TanStackTable<TData> }) => (
        <DataTableCheckbox
          checked={table.getIsAllPageRowsSelected()}
          indeterminate={table.getIsSomePageRowsSelected()}
          onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }: { row: Row<TData> }) => (
        <DataTableCheckbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
          aria-label={`Select row ${row.index + 1}`}
        />
      ),
      size: 40,
      enableSorting: false,
      enableColumnFilter: false,
    }),
    []
  );

  const columns = React.useMemo(
    () => (enableSelection ? [selectionColumn, ...columnsProp] : columnsProp),
    [enableSelection, selectionColumn, columnsProp]
  );

  // ── table instance ──
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      rowSelection,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    ...(enableSorting && { getSortedRowModel: getSortedRowModel() }),
    ...(enableFiltering && { getFilteredRowModel: getFilteredRowModel() }),
    ...(enablePagination &&
      !enableVirtualization && { getPaginationRowModel: getPaginationRowModel() }),
    enableRowSelection: enableSelection,
    initialState: {
      pagination: { pageSize },
    },
  });

  // ── selection callback ──
  React.useEffect(() => {
    if (onSelectionChange) {
      const selectedRows = table
        .getSelectedRowModel()
        .rows.map((r: Row<TData>) => r.original);
      onSelectionChange(selectedRows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection]);

  // ── rows ──
  const { rows } = enablePagination && !enableVirtualization
    ? table.getPaginationRowModel()
    : table.getRowModel();

  // ── virtualizer ──
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => estimateRowHeight,
    overscan,
    enabled: enableVirtualization,
  });

  // ── variant styles ──
  const variantStyles = {
    default: {
      container: 'border border-white/[0.08] bg-slate-950 rounded-xl',
      header: 'bg-slate-900/80',
      headerCell: 'text-slate-400 font-semibold text-xs uppercase tracking-wider',
      row: 'border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors',
      cell: 'text-slate-300 text-sm',
      activeRow: 'bg-white/[0.05]',
    },
    neon: {
      container: 'border border-cyan-500/20 bg-[#050d14] rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.03)]',
      header: 'bg-cyan-950/40',
      headerCell: 'text-cyan-400/80 font-mono text-[11px] uppercase tracking-widest',
      row: 'border-b border-cyan-500/10 hover:bg-cyan-500/[0.05] transition-colors',
      cell: 'text-slate-300 text-sm font-mono',
      activeRow: 'bg-cyan-500/[0.08] shadow-[inset_0_0_20px_rgba(0,240,255,0.03)]',
    },
    glass: {
      container: 'border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl rounded-xl shadow-xl',
      header: 'bg-white/[0.04]',
      headerCell: 'text-slate-300 font-semibold text-xs uppercase tracking-wider',
      row: 'border-b border-white/[0.04] hover:bg-white/[0.04] transition-colors',
      cell: 'text-slate-200 text-sm',
      activeRow: 'bg-white/[0.06]',
    },
  };

  const s = variantStyles[variant];

  return (
    <DataTableContext.Provider value={{ variant }}>
      <div className={cn('space-y-4', className)}>
        {/* Toolbar */}
        {(enableFiltering || toolbar) && (
          <div className="flex items-center justify-between gap-4">
            {enableFiltering && (
              <div className="relative flex-1 max-w-sm">
                <Search
                  className={cn(
                    'absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4',
                    variant === 'neon' ? 'text-cyan-500/50' : 'text-slate-500'
                  )}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  value={globalFilter ?? ''}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  className={cn(
                    'w-full h-9 pl-9 pr-4 rounded-lg text-sm border outline-none transition-all',
                    variant === 'neon'
                      ? 'bg-cyan-950/30 border-cyan-500/20 text-cyan-300 placeholder:text-cyan-500/30 font-mono focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                      : variant === 'glass'
                      ? 'bg-white/[0.03] border-white/[0.1] text-white placeholder:text-slate-500 focus:border-white/20'
                      : 'bg-slate-900/60 border-white/10 text-white placeholder:text-slate-600 focus:border-white/20'
                  )}
                />
              </div>
            )}
            {toolbar}
          </div>
        )}

        {/* Selection info bar */}
        {enableSelection && Object.keys(rowSelection).length > 0 && (
          <div
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono',
              variant === 'neon'
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                : 'bg-white/[0.05] text-slate-300 border border-white/10'
            )}
          >
            <Check className="h-3.5 w-3.5" />
            {Object.keys(rowSelection).length} of {rows.length} row(s) selected
          </div>
        )}

        {/* Table container */}
        <div
          ref={tableContainerRef}
          className={cn(
            s.container,
            'overflow-auto',
            enableVirtualization && 'contain-strict'
          )}
          style={enableVirtualization ? { maxHeight } : undefined}
        >
          <table
            className="w-full border-collapse"
            role="grid"
            aria-rowcount={data.length}
          >
            {caption && (
              <caption className="sr-only">{caption}</caption>
            )}

            {/* THEAD */}
            <thead className={cn(s.header, 'sticky top-0 z-10')}>
              {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
                <tr key={headerGroup.id} role="row">
                  {headerGroup.headers.map((header: Header<TData, unknown>) => (
                    <th
                      key={header.id}
                      role="columnheader"
                      scope="col"
                      aria-sort={
                        header.column.getIsSorted()
                          ? header.column.getIsSorted() === 'asc'
                            ? 'ascending'
                            : 'descending'
                          : undefined
                      }
                      style={{ width: header.getSize() !== 150 ? header.getSize() : undefined }}
                      className={cn(
                        s.headerCell,
                        'px-4 py-3 text-left',
                        header.column.getCanSort() && 'cursor-pointer select-none hover:text-white transition-colors'
                      )}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder ? null : (
                        <div className="flex items-center gap-1.5">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getCanSort() && (
                            <SortIcon direction={header.column.getIsSorted()} variant={variant} />
                          )}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            {/* TBODY */}
            <tbody
              style={
                enableVirtualization
                  ? { height: `${virtualizer.getTotalSize()}px`, position: 'relative' }
                  : undefined
              }
            >
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="py-16 text-center"
                  >
                    {emptyState ?? (
                      <div className="flex flex-col items-center gap-2">
                        <span className={cn(
                          'text-sm',
                          variant === 'neon' ? 'text-cyan-500/40 font-mono' : 'text-slate-600'
                        )}>
                          {variant === 'neon' ? '// NO_DATA_FOUND' : 'No results found.'}
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ) : enableVirtualization ? (
                virtualizer.getVirtualItems().map((virtualRow) => {
                  const row = rows[virtualRow.index];
                  return (
                    <tr
                      key={row.id}
                      role="row"
                      aria-rowindex={virtualRow.index + 2}
                      aria-selected={row.getIsSelected() || undefined}
                      data-index={virtualRow.index}
                      ref={(node) => virtualizer.measureElement(node)}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                      className={cn(
                        s.row,
                        row.getIsSelected() && s.activeRow,
                        onRowClick && 'cursor-pointer'
                      )}
                      onClick={() => onRowClick?.(row.original)}
                    >
                      {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                        <td
                          key={cell.id}
                          role="gridcell"
                          className={cn(s.cell, 'px-4 py-3')}
                          style={{ width: cell.column.getSize() !== 150 ? cell.column.getSize() : undefined }}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                rows.map((row: Row<TData>) => (
                  <tr
                    key={row.id}
                    role="row"
                    aria-selected={row.getIsSelected() || undefined}
                    className={cn(
                      s.row,
                      row.getIsSelected() && s.activeRow,
                      onRowClick && 'cursor-pointer'
                    )}
                    onClick={() => onRowClick?.(row.original)}
                  >
                    {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                      <td
                        key={cell.id}
                        role="gridcell"
                        className={cn(s.cell, 'px-4 py-3')}
                        style={{ width: cell.column.getSize() !== 150 ? cell.column.getSize() : undefined }}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {enablePagination && !enableVirtualization && (
          <DataTablePagination
            table={table}
            pageSizeOptions={pageSizeOptions}
            variant={variant}
          />
        )}

        {/* Virtual row count */}
        {enableVirtualization && (
          <div
            className={cn(
              'text-xs px-1',
              variant === 'neon' ? 'text-cyan-500/40 font-mono' : 'text-slate-600'
            )}
          >
            {rows.length.toLocaleString()} rows
          </div>
        )}
      </div>
    </DataTableContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SortIcon
// ─────────────────────────────────────────────────────────────────────────────
function SortIcon({
  direction,
  variant,
}: {
  direction: false | 'asc' | 'desc';
  variant: DataTableVariant;
}) {
  const cls = cn(
    'h-3.5 w-3.5 transition-colors',
    variant === 'neon'
      ? direction ? 'text-cyan-400' : 'text-cyan-500/30'
      : direction ? 'text-white' : 'text-slate-600'
  );

  if (direction === 'asc') return <ArrowUp className={cls} />;
  if (direction === 'desc') return <ArrowDown className={cls} />;
  return <ArrowUpDown className={cls} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// DataTableCheckbox
// ─────────────────────────────────────────────────────────────────────────────
function DataTableCheckbox({
  checked,
  indeterminate,
  onCheckedChange,
  ...props
}: {
  checked: boolean;
  indeterminate?: boolean;
  onCheckedChange: (val: boolean) => void;
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'onChange'>) {
  const { variant } = React.useContext(DataTableContext);

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      onClick={(e) => {
        e.stopPropagation();
        onCheckedChange(!checked);
      }}
      className={cn(
        'flex items-center justify-center h-4 w-4 rounded border transition-all shrink-0',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-950',
        checked || indeterminate
          ? variant === 'neon'
            ? 'bg-cyan-500/80 border-cyan-400 text-white shadow-[0_0_8px_rgba(0,240,255,0.4)]'
            : 'bg-white/80 border-white text-slate-950'
          : variant === 'neon'
          ? 'border-cyan-500/30 hover:border-cyan-400/60'
          : 'border-white/20 hover:border-white/40'
      )}
      {...props}
    >
      {checked && <Check className="h-3 w-3" strokeWidth={3} />}
      {indeterminate && !checked && <Minus className="h-3 w-3" strokeWidth={3} />}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DataTablePagination
// ─────────────────────────────────────────────────────────────────────────────
function DataTablePagination<TData>({
  table,
  pageSizeOptions,
  variant,
}: {
  table: TanStackTable<TData>;
  pageSizeOptions: number[];
  variant: DataTableVariant;
}) {
  const btnBase = cn(
    'flex items-center justify-center h-8 w-8 rounded border transition-all',
    'disabled:opacity-30 disabled:pointer-events-none'
  );

  const btnStyle =
    variant === 'neon'
      ? 'border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/40'
      : variant === 'glass'
      ? 'border-white/10 text-white/70 hover:bg-white/10'
      : 'border-white/10 text-slate-400 hover:bg-white/10 hover:text-white';

  const selectStyle =
    variant === 'neon'
      ? 'bg-cyan-950/40 border-cyan-500/20 text-cyan-400 font-mono'
      : variant === 'glass'
      ? 'bg-white/[0.04] border-white/10 text-white'
      : 'bg-slate-900 border-white/10 text-slate-300';

  return (
    <div className="flex items-center justify-between px-1">
      {/* Row count info */}
      <div
        className={cn(
          'text-xs',
          variant === 'neon' ? 'text-cyan-500/50 font-mono' : 'text-slate-500'
        )}
      >
        {table.getFilteredRowModel().rows.length.toLocaleString()} row(s)
      </div>

      <div className="flex items-center gap-6">
        {/* Page size selector */}
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'text-xs',
              variant === 'neon' ? 'text-cyan-500/50 font-mono' : 'text-slate-500'
            )}
          >
            Rows
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className={cn(
              'h-8 rounded border px-2 text-xs outline-none',
              selectStyle
            )}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Page info */}
        <span
          className={cn(
            'text-xs',
            variant === 'neon' ? 'text-cyan-400/70 font-mono' : 'text-slate-400'
          )}
        >
          {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
        </span>

        {/* Navigation buttons */}
        <div className="flex items-center gap-1">
          <button
            className={cn(btnBase, btnStyle)}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            aria-label="First page"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
          <button
            className={cn(btnBase, btnStyle)}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className={cn(btnBase, btnStyle)}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            className={cn(btnBase, btnStyle)}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            aria-label="Last page"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
