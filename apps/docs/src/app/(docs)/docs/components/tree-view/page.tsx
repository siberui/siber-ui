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
  TreeView,
  type TreeDataItem,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';
import {
  FileCode,
  FileText,
  Shield,
  Terminal,
} from 'lucide-react';

const clusterData: TreeDataItem[] = [
  {
    id: 'core-network',
    label: 'CORE_NETWORK',
    children: [
      {
        id: 'orbital-cluster',
        label: 'orbital-sentinels',
        children: [
          { id: 'sat-alpha.ts', label: 'sat-alpha.ts', icon: <Terminal className="w-4 h-4 text-cyan-400" /> },
          { id: 'sat-beta.ts', label: 'sat-beta.ts', icon: <Terminal className="w-4 h-4 text-cyan-400" /> },
        ],
      },
      {
        id: 'security-mesh',
        label: 'security-mesh',
        children: [
          { id: 'kyber-hsm.bin', label: 'kyber-hsm.bin', icon: <Shield className="w-4 h-4 text-emerald-400" /> },
          { id: 'firewall.cfg', label: 'firewall.cfg', icon: <FileText className="w-4 h-4 text-purple-400" /> },
        ],
      },
    ],
  },
  {
    id: 'airgap-manifest.json',
    label: 'airgap-manifest.json',
    icon: <FileCode className="w-4 h-4 text-amber-400" />,
  },
];

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Recursive Hierarchy', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Tree & Monospace Labels', level: 2 },
  { id: 'frosted-glass-tree', text: 'Frosted Cyber-Glass Directory Tree', level: 2 },
  { id: 'tactical-hud-tree', text: 'Tactical HUD Subnet Hierarchy Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function TreeViewDocsPage() {
  const [selectedNode, setSelectedNode] = React.useState<TreeDataItem | null>(null);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tree View"
        description="Hierarchical directory and node tree navigator with expandable folders, custom icon glyphs, keyboard navigation, and neon active branch markers."
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
  TreeView, 
  type TreeDataItem 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Recursive Hierarchy" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass a recursive <code className="text-cyan-400">TreeDataItem[]</code> array and specify initially expanded nodes using <code className="text-cyan-400">defaultExpandedIds</code>.
          </p>

          <Playground
            code={`<TreeView
  data={clusterData}
  defaultExpandedIds={['core-network', 'orbital-cluster']}
  defaultSelectedId="sat-alpha.ts"
  onNodeSelect={(node) => console.log('Selected:', node.label)}
  className="h-64 max-w-sm"
/>`}
          >
            <div className="flex flex-col items-center gap-4 p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="w-full max-w-sm h-64 border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl bg-[#050811]">
                <TreeView
                  data={clusterData}
                  defaultExpandedIds={['core-network', 'orbital-cluster']}
                  defaultSelectedId="sat-alpha.ts"
                  onNodeSelect={setSelectedNode}
                  className="h-full w-full"
                />
              </div>
              <span className="text-xs font-mono text-cyan-400">
                Selected: {selectedNode?.label ?? 'sat-alpha.ts'}
              </span>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Tree & Monospace Labels" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Set <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser selection borders, illuminated folder glyphs, and monospace typography.
          </p>

          <Playground
            code={`<TreeView
  variant="neon"
  data={clusterData}
  defaultExpandedIds={['core-network', 'security-mesh']}
  className="h-64 max-w-sm"
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="w-full max-w-sm h-64 border border-cyan-500/20 rounded-xl overflow-hidden bg-[#050d14] shadow-[0_0_20px_rgba(0,240,255,0.05)]">
                <TreeView
                  variant="neon"
                  data={clusterData}
                  defaultExpandedIds={['core-network', 'security-mesh']}
                  className="h-full w-full"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Directory Tree ── */}
      <ContentSection title="Frosted Cyber-Glass Directory Tree" id="frosted-glass-tree">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layered acrylic directory tree floating over circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex justify-center">
  <TreeView
    variant="glass"
    data={clusterData}
    defaultExpandedIds={['core-network']}
    className="h-64 w-full max-w-xs"
  />
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <div className="relative z-10 w-full max-w-xs h-64 border border-white/[0.08] rounded-xl overflow-hidden backdrop-blur-md bg-white/[0.03]">
                <TreeView
                  variant="glass"
                  data={clusterData}
                  defaultExpandedIds={['core-network']}
                  className="h-full w-full"
                />
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Subnet Hierarchy Card ── */}
      <ContentSection title="Tactical HUD Subnet Hierarchy Card" id="tactical-hud-tree">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card embedding the filesystem tree.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">NETWORK TOPOLOGY TREE</CardTitle>
      <Badge variant="neon" size="sm">ONLINE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Active subnets and endpoint cryptographic nodes.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-4">
    <div className="h-60 rounded-lg overflow-hidden border border-cyan-500/20 bg-black/40">
      <TreeView
        variant="neon"
        data={clusterData}
        defaultExpandedIds={['core-network', 'orbital-cluster']}
        className="h-full w-full"
      />
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">NETWORK TOPOLOGY TREE</CardTitle>
                    <Badge variant="neon" size="sm">ONLINE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Active subnets and endpoint cryptographic nodes.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-4">
                  <div className="h-60 rounded-lg overflow-hidden border border-cyan-500/20 bg-black/40">
                    <TreeView
                      variant="neon"
                      data={clusterData}
                      defaultExpandedIds={['core-network', 'orbital-cluster']}
                      className="h-full w-full"
                    />
                  </div>
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
              description: 'Array of TreeDataItem objects representing the recursive tree hierarchy.',
              type: 'TreeDataItem[]',
            },
            {
              property: 'variant',
              description: 'Visual theme for tree borders, hover states, and selection markers.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'defaultExpandedIds',
              description: 'Array of string node IDs that should be expanded on initial render.',
              type: 'string[]',
              defaultValue: '[]',
            },
            {
              property: 'defaultSelectedId',
              description: 'ID of the node that is initially selected.',
              type: 'string',
            },
            {
              property: 'onNodeSelect',
              description: 'Callback fired when a node row is clicked.',
              type: '(node: TreeDataItem) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Tree Pattern:</strong> Container implements <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;tree&quot;</code>, individual items output <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;treeitem&quot;</code> with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-expanded</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-selected</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Custom Glyphs:</strong> Provide semantic icons on <code className="text-cyan-400">TreeDataItem.icon</code> to quickly differentiate file types (e.g. scripts vs keys).
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
