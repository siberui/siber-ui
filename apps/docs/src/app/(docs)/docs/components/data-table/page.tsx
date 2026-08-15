'use client';

import * as React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  DataTable,
  type DataTableColumnDef,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';

interface SentinelNode {
  id: string;
  codename: string;
  sector: string;
  status: 'OPTIMAL' | 'DEGRADED' | 'CRITICAL';
  throughput: string;
  latency: string;
}

const sentinelData: SentinelNode[] = [
  { id: '1', codename: 'SENTINEL-ALPHA-01', sector: 'Sector 09 [Orbital]', status: 'OPTIMAL', throughput: '14.8 GB/s', latency: '0.18 ms' },
  { id: '2', codename: 'SENTINEL-BETA-02', sector: 'Sector 04 [Ground]', status: 'OPTIMAL', throughput: '9.4 GB/s', latency: '0.24 ms' },
  { id: '3', codename: 'SENTINEL-GAMMA-03', sector: 'Sector 12 [Relay]', status: 'DEGRADED', throughput: '2.1 GB/s', latency: '4.80 ms' },
  { id: '4', codename: 'SENTINEL-DELTA-04', sector: 'Sector 01 [Core]', status: 'OPTIMAL', throughput: '24.0 GB/s', latency: '0.09 ms' },
  { id: '5', codename: 'SENTINEL-EPSILON-05', sector: 'Sector 07 [Airgap]', status: 'CRITICAL', throughput: '0.0 GB/s', latency: '999 ms' },
];

const columns: DataTableColumnDef<SentinelNode>[] = [
  {
    accessorKey: 'codename',
    header: 'SENTINEL NODE',
    cell: ({ row }) => (
      <span className="font-mono font-bold text-cyan-300">
        {row.getValue('codename')}
      </span>
    ),
  },
  {
    accessorKey: 'sector',
    header: 'SECTOR',
    cell: ({ row }) => (
      <span className="text-slate-300 text-xs font-mono">
        {row.getValue('sector')}
      </span>
    ),
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <Badge
          variant={status === 'OPTIMAL' ? 'neon' : status === 'DEGRADED' ? 'outline' : 'destructive'}
          size="sm"
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'throughput',
    header: 'THROUGHPUT',
    cell: ({ row }) => (
      <span className="font-mono text-xs text-slate-200">
        {row.getValue('throughput')}
      </span>
    ),
  },
  {
    accessorKey: 'latency',
    header: 'LATENCY',
    cell: ({ row }) => (
      <span className="font-mono text-xs text-cyan-400">
        {row.getValue('latency')}
      </span>
    ),
  },
];

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Column Definitions', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Data Grid with Row Selection', level: 2 },
  { id: 'frosted-glass-table', text: 'Frosted Cyber-Glass Data Grid', level: 2 },
  { id: 'tactical-hud-grid', text: 'Tactical HUD Sentinel Telemetry Grid Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function DataTableDocsPage() {
  const [selectedNodes, setSelectedNodes] = React.useState<SentinelNode[]>([]);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Data Table"
        description="High-performance data grid built on TanStack Table v8 with fuzzy search, column sorting, pagination, multi-row selection, and optional row virtualization."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock
          code={`import { 
  DataTable, 
  type DataTableColumnDef 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Column Definitions" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass an array of typed data objects and <code className="text-cyan-400">DataTableColumnDef</code> definitions. Sorting and global filtering are enabled by default.
          </p>

          <Playground
            code={`<DataTable
  columns={columns}
  data={sentinelData}
  pageSize={4}
/>`}
          >
            <div className="p-6 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <DataTable
                columns={columns}
                data={sentinelData}
                pageSize={4}
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Data Grid with Row Selection" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Enable <code className="text-cyan-400">enableSelection</code> to insert a multi-select checkbox column and pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> for cyan header styling and glowing selection highlights.
          </p>

          <Playground
            code={`<DataTable
  variant="neon"
  columns={columns}
  data={sentinelData}
  enableSelection
  pageSize={3}
  onSelectionChange={setSelectedNodes}
/>`}
          >
            <div className="flex flex-col gap-3 p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <DataTable
                variant="neon"
                columns={columns}
                data={sentinelData}
                enableSelection
                pageSize={3}
                onSelectionChange={setSelectedNodes}
              />
              <span className="text-xs font-mono text-cyan-400">
                Selected Nodes: {selectedNodes.length}
              </span>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Data Grid ── */}
      <ContentSection title="Frosted Cyber-Glass Data Grid" id="frosted-glass-table">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Translucent acrylic grid layered over circuit board textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <DataTable
    variant="glass"
    columns={columns}
    data={sentinelData}
    pageSize={3}
  />
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <DataTable
                  variant="glass"
                  columns={columns}
                  data={sentinelData}
                  pageSize={3}
                />
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Sentinel Telemetry Grid Card ── */}
      <ContentSection title="Tactical HUD Sentinel Telemetry Grid Card" id="tactical-hud-grid">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card embedding the live telemetry table.
          </p>

          <Playground
            code={`<Card className="border-cyan-500/30 bg-[#070b14] shadow-xl w-full">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SENTINEL FLEET TELEMETRY</CardTitle>
      <Badge variant="neon" size="sm">ONLINE • 5 NODES</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Real-time orbital tracking and carrier status.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <DataTable
      variant="neon"
      columns={columns}
      data={sentinelData}
      pageSize={3}
    />
  </CardContent>
</Card>`}
          >
            <div className="p-6 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="border-cyan-500/25 bg-[#070b14] shadow-xl w-full">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SENTINEL FLEET TELEMETRY</CardTitle>
                    <Badge variant="neon" size="sm">ONLINE • 5 NODES</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Real-time orbital tracking and carrier status.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <DataTable
                    variant="neon"
                    columns={columns}
                    data={sentinelData}
                    pageSize={3}
                  />
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'data',
              description: 'Array of data records to render in the table rows.',
              type: 'TData[]',
            },
            {
              property: 'columns',
              description: 'TanStack Table column definition array.',
              type: 'DataTableColumnDef<TData>[]',
            },
            {
              property: 'variant',
              description: 'Visual theme for table borders, headers, and selection ("default", "neon", "glass").',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'enableSorting',
              description: 'Whether columns can be sorted upon header click.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'enableFiltering',
              description: 'Whether global fuzzy search input is rendered above table.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'enableSelection',
              description: 'Whether leading row checkbox selection column is enabled.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'enablePagination',
              description: 'Whether pagination controls and page limits are enabled.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'enableVirtualization',
              description: 'Whether TanStack Virtual row virtualization is active for huge datasets.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'pageSize',
              description: 'Initial number of rows displayed per page.',
              type: 'number',
              defaultValue: '10',
            },
            {
              property: 'onSelectionChange',
              description: 'Callback fired when selected row collection changes.',
              type: '(rows: TData[]) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Grid Semantics:</strong> Implements <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;grid&quot;</code>, <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;row&quot;</code>, <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;columnheader&quot;</code> with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-sort</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Virtualization:</strong> For datasets exceeding 500 rows where pagination is disabled, enable <code className="text-cyan-400">enableVirtualization</code> to maintain 60 FPS scrolling performance.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
