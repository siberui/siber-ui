import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { DataTableDemo, DataTableNeonDemo, DataTableGlassDemo } from './demo';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function DataTableDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Data Table"
        description="Powerful data grid component built on TanStack Table, featuring sorting, filtering, selection, and virtualization."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<DataTable 
  columns={columns} 
  data={data} 
  enablePagination 
  enableFiltering 
  enableSorting 
/>`}>
              <div className="w-full">
                <DataTableDemo />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<DataTable 
  variant="neon" 
  columns={columns} 
  data={data} 
  enableSelection 
/>`}>
              <div className="w-full bg-slate-900/40 p-4 rounded-xl border border-border-hairline">
                <DataTableNeonDemo />
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Glass Variant</h3>
            <Playground code={`<DataTable variant="glass" columns={columns} data={data} />`}>
              <div className="w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-slate-900 p-8 rounded-xl border border-border-hairline">
                <DataTableGlassDemo />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'data', description: 'The data array.', type: 'TData[]' },
            { property: 'columns', description: 'Column definitions (TanStack).', type: 'DataTableColumnDef<TData>[]' },
            { property: 'variant', description: 'Visual style.', type: '"default" | "neon" | "glass"' },
            { property: 'enableSorting', description: 'Enable column sorting.', type: 'boolean', defaultValue: 'true' },
            { property: 'enableFiltering', description: 'Enable global search.', type: 'boolean', defaultValue: 'true' },
            { property: 'enableSelection', description: 'Enable row selection checkboxes.', type: 'boolean', defaultValue: 'false' },
            { property: 'enableVirtualization', description: 'Enable row virtualization for large datasets.', type: 'boolean', defaultValue: 'false' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
