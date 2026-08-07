import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { DataTable, type DataTableColumnDef } from './data-table';
import { Badge } from './badge';

// ─────────────────────────────────────────────────────────────────────────────
// Sample data types
// ─────────────────────────────────────────────────────────────────────────────
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
}

interface LogEntry {
  id: number;
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  source: string;
  message: string;
  latency: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// User data generator
// ─────────────────────────────────────────────────────────────────────────────
const names = [
  'Alex Mercer', 'Nova Sterling', 'Kai Zhang', 'Elena Vasquez', 'Ryn Okada',
  'Jordan Blake', 'Sasha Romanov', 'Zara Hadid', 'Luca Moretti', 'Mira Chen',
  'Dean Torres', 'Luna Park', 'River Stone', 'Aria Kim', 'Dante Cruz',
  'Sage Brooks', 'Quinn Taylor', 'Rowan Ellis', 'Wren Foster', 'Atlas Gray',
];

const roles = ['Admin', 'Developer', 'Designer', 'Analyst', 'DevOps', 'QA Lead'];
const statuses: User['status'][] = ['active', 'inactive', 'pending'];

function generateUsers(count: number): User[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `USR-${String(i + 1).padStart(4, '0')}`,
    name: names[i % names.length],
    email: `${names[i % names.length].toLowerCase().replace(' ', '.')}@siber.io`,
    role: roles[i % roles.length],
    status: statuses[i % 3],
    lastActive: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
      .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// Log data generator (for virtualized stories)
// ─────────────────────────────────────────────────────────────────────────────
const sources = ['auth-service', 'api-gateway', 'db-primary', 'cache-node', 'edge-proxy', 'scheduler'];
const levels: LogEntry['level'][] = ['info', 'warn', 'error', 'debug'];
const messages = [
  'Connection established',
  'Request processed successfully',
  'Rate limit exceeded for endpoint /api/v3/data',
  'Cache miss – fetching from origin',
  'SSL certificate renewed',
  'Healthcheck passed',
  'Memory usage above 80% threshold',
  'Query execution time exceeded 500ms',
  'New deployment rolled out (v2.14.7)',
  'Websocket connection dropped – reconnecting',
];

function generateLogs(count: number): LogEntry[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    timestamp: new Date(Date.now() - i * 3000).toISOString(),
    level: levels[Math.floor(Math.random() * levels.length)],
    source: sources[Math.floor(Math.random() * sources.length)],
    message: messages[Math.floor(Math.random() * messages.length)],
    latency: Math.floor(Math.random() * 800) + 10,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// Column definitions
// ─────────────────────────────────────────────────────────────────────────────
const userColumns: DataTableColumnDef<User, unknown>[] = [
  { accessorKey: 'id', header: 'ID', size: 100 },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role', size: 100 },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 110,
    cell: ({ row }) => {
      const status = row.getValue('status') as User['status'];
      const map: Record<User['status'], { variant: 'primary' | 'destructive' | 'outline'; label: string }> = {
        active: { variant: 'primary', label: 'Active' },
        inactive: { variant: 'destructive', label: 'Inactive' },
        pending: { variant: 'outline', label: 'Pending' },
      };
      const { variant, label } = map[status];
      return <Badge variant={variant} className="text-[10px] px-2 py-0.5">{label}</Badge>;
    },
  },
  { accessorKey: 'lastActive', header: 'Last Active', size: 120 },
];

const logColumns: DataTableColumnDef<LogEntry, unknown>[] = [
  { accessorKey: 'id', header: '#', size: 60 },
  {
    accessorKey: 'timestamp',
    header: 'TIMESTAMP',
    size: 190,
    cell: ({ row }) => {
      const ts = row.getValue('timestamp') as string;
      return (
        <span className="text-cyan-400/60 text-[11px]">
          {new Date(ts).toLocaleTimeString('en-US', { hour12: false })}
        </span>
      );
    },
  },
  {
    accessorKey: 'level',
    header: 'LEVEL',
    size: 80,
    cell: ({ row }) => {
      const level = row.getValue('level') as LogEntry['level'];
      const color: Record<LogEntry['level'], string> = {
        info: 'text-blue-400',
        warn: 'text-amber-400',
        error: 'text-red-400',
        debug: 'text-slate-500',
      };
      return <span className={`${color[level]} uppercase text-[11px] font-bold`}>{level}</span>;
    },
  },
  {
    accessorKey: 'source',
    header: 'SOURCE',
    size: 130,
    cell: ({ row }) => (
      <span className="text-purple-400/80 text-[11px]">{row.getValue('source') as string}</span>
    ),
  },
  { accessorKey: 'message', header: 'MESSAGE' },
  {
    accessorKey: 'latency',
    header: 'LATENCY',
    size: 90,
    cell: ({ row }) => {
      const ms = row.getValue('latency') as number;
      const color = ms > 500 ? 'text-red-400' : ms > 200 ? 'text-amber-400' : 'text-emerald-400';
      return <span className={`${color} text-[11px]`}>{ms}ms</span>;
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Components/Data/DataTable',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => {
    const data = React.useMemo(() => generateUsers(20), []);
    return (
      <DataTable
        data={data}
        columns={userColumns}
        caption="User management table"
      />
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => {
    const data = React.useMemo(() => generateUsers(15), []);
    return (
      <div className="bg-[#050d14] p-6 rounded-xl min-h-[600px]">
        <DataTable
          data={data}
          columns={userColumns}
          variant="neon"
          caption="Neon variant user table"
          pageSize={5}
        />
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => {
    const data = React.useMemo(() => generateUsers(12), []);
    return (
      <div className="bg-gradient-to-br from-cyan-950/40 via-slate-950 to-purple-950/40 p-6 rounded-xl min-h-[600px]">
        <DataTable
          data={data}
          columns={userColumns}
          variant="glass"
          caption="Glass variant user table"
          pageSize={6}
        />
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// With Selection
// ─────────────────────────────────────────────────────────────────────────────
export const WithSelection: StoryObj = {
  render: () => {
    const data = React.useMemo(() => generateUsers(20), []);
    return (
      <DataTable
        data={data}
        columns={userColumns}
        enableSelection
        variant="neon"
        caption="Selectable user table"
        onSelectionChange={(selected) => {
          // eslint-disable-next-line no-console
          console.log('Selected:', selected.length, 'rows');
        }}
      />
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Virtualized (10K rows)
// ─────────────────────────────────────────────────────────────────────────────
export const Virtualized: StoryObj = {
  render: () => {
    const data = React.useMemo(() => generateLogs(10_000), []);
    return (
      <div className="bg-[#050d14] p-6 rounded-xl">
        <h3 className="text-cyan-400 font-mono text-sm mb-3">
          // SYSTEM_LOG — {data.length.toLocaleString()} ENTRIES
        </h3>
        <DataTable
          data={data}
          columns={logColumns}
          variant="neon"
          enableVirtualization
          enablePagination={false}
          maxHeight="500px"
          estimateRowHeight={40}
          overscan={10}
          caption="Virtualized system log with 10,000 entries"
        />
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// With Pagination
// ─────────────────────────────────────────────────────────────────────────────
export const WithPagination: StoryObj = {
  render: () => {
    const data = React.useMemo(() => generateUsers(100), []);
    return (
      <DataTable
        data={data}
        columns={userColumns}
        pageSize={10}
        pageSizeOptions={[5, 10, 20, 50]}
        caption="Paginated user table with 100 rows"
      />
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Empty State
// ─────────────────────────────────────────────────────────────────────────────
export const EmptyState: StoryObj = {
  render: () => (
    <DataTable<User>
      data={[]}
      columns={userColumns}
      variant="neon"
      enableFiltering={false}
      emptyState={
        <div className="flex flex-col items-center gap-3 py-8">
          <div className="text-4xl">🔍</div>
          <p className="text-cyan-400/60 font-mono text-sm">// NO_RECORDS_FOUND</p>
          <p className="text-slate-600 text-xs">Try adjusting your search or filters</p>
        </div>
      }
      caption="Empty table"
    />
  ),
};
