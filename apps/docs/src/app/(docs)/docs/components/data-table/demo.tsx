'use client';

import React from 'react';
import { DataTable, type DataTableColumnDef } from '@siberui/react';

type ServerStatus = {
  id: string;
  name: string;
  status: 'Online' | 'Offline' | 'Warning';
  uptime: number;
};

const data: ServerStatus[] = [
  { id: '1', name: 'Alpha Node', status: 'Online', uptime: 99.9 },
  { id: '2', name: 'Beta Cluster', status: 'Warning', uptime: 98.5 },
  { id: '3', name: 'Gamma Relay', status: 'Offline', uptime: 0 },
  { id: '4', name: 'Delta Proxy', status: 'Online', uptime: 99.99 },
];

const columns: DataTableColumnDef<ServerStatus>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <span className={
          status === 'Online' ? 'text-emerald-400' : 
          status === 'Warning' ? 'text-amber-400' : 'text-rose-400'
        }>
          {status}
        </span>
      );
    }
  },
  {
    accessorKey: 'uptime',
    header: 'Uptime',
    cell: ({ row }) => {
      const val = parseFloat(row.getValue('uptime'));
      return `${val.toFixed(2)}%`;
    }
  }
];

export function DataTableDemo() {
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
}

export function DataTableNeonDemo() {
  return (
    <DataTable
      variant="neon"
      columns={columns}
      data={data}
      enableSelection
      pageSize={3}
    />
  );
}

export function DataTableGlassDemo() {
  return (
    <DataTable
      variant="glass"
      columns={columns}
      data={data}
      enableFiltering={false}
      pageSize={3}
    />
  );
}
