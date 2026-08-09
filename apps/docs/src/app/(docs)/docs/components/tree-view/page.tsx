import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { TreeView } from '@siberui/react';
import { FileCode, FileImage } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

const treeData = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          { id: 'button.tsx', label: 'button.tsx', icon: <FileCode className="w-4 h-4 text-slate-400" /> },
          { id: 'input.tsx', label: 'input.tsx', icon: <FileCode className="w-4 h-4 text-slate-400" /> },
        ]
      },
      {
        id: 'assets',
        label: 'assets',
        children: [
          { id: 'logo.png', label: 'logo.png', icon: <FileImage className="w-4 h-4 text-emerald-400" /> },
        ]
      },
      { id: 'index.ts', label: 'index.ts', icon: <FileCode className="w-4 h-4 text-slate-400" /> },
    ]
  },
  { id: 'package.json', label: 'package.json', icon: <FileCode className="w-4 h-4 text-yellow-400" /> }
];

export default function TreeViewDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tree View"
        description="A hierarchical list component for displaying nested structures like file systems."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<TreeView 
  data={treeData} 
  defaultExpandedIds={['src', 'components']} 
  defaultSelectedId="button.tsx" 
/>`}>
              <div className="flex items-center justify-center p-8">
                <div className="w-full max-w-xs h-64 border border-border-hairline rounded-xl overflow-hidden shadow-xl">
                  <TreeView 
                    className="h-full w-full"
                    data={treeData} 
                    defaultExpandedIds={['src', 'components']}
                    defaultSelectedId="button.tsx"
                  />
                </div>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<TreeView variant="neon" data={treeData} />`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl">
                <div className="w-full max-w-xs h-64">
                  <TreeView 
                    variant="neon"
                    className="h-full w-full"
                    data={treeData} 
                    defaultExpandedIds={['src']}
                  />
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'data', description: 'Array of TreeDataItem objects representing the hierarchy.', type: 'TreeDataItem[]' },
            { property: 'variant', description: 'Visual style for the tree view.', type: '"default" | "neon" | "glass"' },
            { property: 'defaultExpandedIds', description: 'List of node IDs that should be expanded initially.', type: 'string[]' },
            { property: 'defaultSelectedId', description: 'ID of the node that should be selected initially.', type: 'string' },
            { property: 'onNodeSelect', description: 'Callback fired when a node is clicked.', type: '(node: TreeDataItem) => void' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
