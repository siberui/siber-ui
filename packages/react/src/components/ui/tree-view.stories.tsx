import type { Meta, StoryObj } from '@storybook/react-vite';
import { TreeView, type TreeDataItem } from './tree-view';
import {
  FileText,
  FileCode,
  Image,
  Database,
  Terminal,
  Cpu,
  Wifi,
  Shield,
  Server,
} from 'lucide-react';

const meta: Meta = {
  title: 'Components/Data/TreeView',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
};
export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Sample Data: File System
// ─────────────────────────────────────────────────────────────────────────────
const fileSystemData: TreeDataItem[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          {
            id: 'ui',
            label: 'ui',
            children: [
              { id: 'button.tsx', label: 'button.tsx', icon: <FileCode className="w-4 h-4 text-sky-400" /> },
              { id: 'tree-view.tsx', label: 'tree-view.tsx', icon: <FileCode className="w-4 h-4 text-sky-400" /> },
            ],
          },
        ],
      },
      {
        id: 'assets',
        label: 'assets',
        children: [
          { id: 'logo.svg', label: 'logo.svg', icon: <Image className="w-4 h-4 text-emerald-400" /> },
          { id: 'banner.png', label: 'banner.png', icon: <Image className="w-4 h-4 text-emerald-400" /> },
        ],
      },
      { id: 'index.ts', label: 'index.ts', icon: <FileCode className="w-4 h-4 text-sky-400" /> },
      { id: 'styles.css', label: 'styles.css', icon: <FileText className="w-4 h-4 text-indigo-400" /> },
    ],
  },
  {
    id: 'public',
    label: 'public',
    children: [
      { id: 'favicon.ico', label: 'favicon.ico', icon: <Image className="w-4 h-4 text-emerald-400" /> },
    ],
  },
  { id: 'package.json', label: 'package.json', icon: <FileText className="w-4 h-4 text-yellow-400" /> },
  { id: 'README.md', label: 'README.md', icon: <FileText className="w-4 h-4 text-slate-400" /> },
];

// ─────────────────────────────────────────────────────────────────────────────
// Default (File Explorer)
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
    <TreeView
      data={fileSystemData}
      defaultExpandedIds={['src', 'components', 'ui']}
      defaultSelectedId="tree-view.tsx"
      className="h-[400px]"
    />
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Sample Data: Network Topology (Neon Theme)
// ─────────────────────────────────────────────────────────────────────────────
const networkData: TreeDataItem[] = [
  {
    id: 'cluster-alpha',
    label: 'CLUSTER_ALPHA',
    icon: <Database className="w-4 h-4 text-cyan-400" />,
    children: [
      {
        id: 'node-01',
        label: 'NODE_01 (Active)',
        icon: <Server className="w-4 h-4 text-emerald-400" />,
        children: [
          { id: 'cpu-01', label: 'CPU_ALLOCATION', icon: <Cpu className="w-4 h-4 text-cyan-500" /> },
          { id: 'mem-01', label: 'MEMORY_USAGE', icon: <Database className="w-4 h-4 text-cyan-500" /> },
        ],
      },
      {
        id: 'node-02',
        label: 'NODE_02 (Standby)',
        icon: <Server className="w-4 h-4 text-slate-500" />,
      },
    ],
  },
  {
    id: 'gateway',
    label: 'API_GATEWAY',
    icon: <Wifi className="w-4 h-4 text-cyan-400" />,
    children: [
      { id: 'firewall', label: 'FIREWALL_RULES', icon: <Shield className="w-4 h-4 text-amber-400" /> },
      { id: 'ssh', label: 'SSH_TUNNEL', icon: <Terminal className="w-4 h-4 text-purple-400" /> },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <div className="bg-[#050d14] p-4 rounded-xl w-full">
      <TreeView
        variant="neon"
        data={networkData}
        defaultExpandedIds={['cluster-alpha', 'node-01']}
        defaultSelectedId="cpu-01"
        className="h-[300px]"
        onNodeSelect={(node) => console.log('Selected node:', node.id)}
      />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => (
    <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-8 rounded-2xl w-full">
      <TreeView
        variant="glass"
        data={fileSystemData}
        defaultExpandedIds={['src']}
        className="h-[300px]"
      />
    </div>
  ),
};
