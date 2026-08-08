import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, Text, Code, Kbd, Label, Divider } from './typography';

const meta: Meta = {
  title: 'Components/UI/Typography',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const HeadingScale: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-2xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// HEADING SCALE</h3>
        <p className="text-xs text-slate-500 mt-1.5">Type scale with gradient variants</p>
      </div>

      <Heading size="h1">Quantum Interface v2.0</Heading>
      <Heading size="h2">Neural Grid Management</Heading>
      <Heading size="h3">Core Node Status</Heading>
      <Heading size="h4">Access Protocol</Heading>
      <Heading size="h5">System Trace</Heading>
      <Heading size="h6">Debug Output</Heading>

      <Divider label="gradient variants" glow="cyan" />

      <Heading size="h1" gradient="cyan">Siber-Minimalist UI Kit</Heading>
      <Heading size="h2" gradient="purple">Quantum Grid Engine</Heading>
      <Heading size="h3" gradient="mixed">Cyber × Minimal</Heading>
    </div>
  ),
};

export const TextVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// TEXT VARIANTS</h3>
        <p className="text-xs text-slate-500 mt-1.5">Semantic body text with hierarchy</p>
      </div>

      <Text variant="lead">A distributed neural interface for quantum-state orchestration across multi-node cyber grids.</Text>
      <Text>Standard body text for general-purpose content with baseline slate-200 color.</Text>
      <Text variant="subtle">Subtle secondary information in slate-400 for supporting details.</Text>
      <Text variant="muted">Muted helper text at slate-500 for metadata and timestamps.</Text>

      <Divider label="neon accents" />

      <Text variant="neon" mono>SYS_STATUS: NOMINAL</Text>
      <Text variant="neonPurple" mono>ENCRYPTION: ACTIVE</Text>
      <Text variant="neonGreen" mono>INTEGRITY: VERIFIED</Text>
      <Text variant="destructive" mono>BREACH: DETECTED</Text>
    </div>
  ),
};

export const InlineElements: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// INLINE ELEMENTS</h3>
        <p className="text-xs text-slate-500 mt-1.5">Code, labels, and keyboard shortcuts</p>
      </div>

      <div className="space-y-3">
        <Label>Form Field Label</Label>
        <Label required>Required Field</Label>
      </div>

      <Divider />

      <div className="space-y-3">
        <Text>
          Import the component via <Code>{'import { Button } from "siber-ui"'}</Code> in your project.
        </Text>
        <Text>
          Press <Kbd>⌘</Kbd><span className="text-slate-500 mx-1 text-sm">+</span><Kbd>K</Kbd> to open the command palette.
        </Text>
        <Text>
          Use <Kbd>Ctrl</Kbd><span className="text-slate-500 mx-1 text-sm">+</span><Kbd>Shift</Kbd><span className="text-slate-500 mx-1 text-sm">+</span><Kbd>P</Kbd> to execute a command.
        </Text>
      </div>

      <Divider label="code block" glow="cyan" />

      <Code block>{`import { Button, Badge } from 'siber-ui';

function App() {
  return (
    <Button variant="neon">
      CONNECT_GRID
    </Button>
  );
}`}</Code>
    </div>
  ),
};

export const DividerVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// DIVIDERS</h3>
        <p className="text-xs text-slate-500 mt-1.5">Section separators with optional labels and glow</p>
      </div>

      <Text variant="subtle" size="sm">Plain divider</Text>
      <Divider />

      <Text variant="subtle" size="sm">With label</Text>
      <Divider label="OR" />

      <Text variant="subtle" size="sm">Cyan glow</Text>
      <Divider label="GRID SECTION" glow="cyan" />

      <Text variant="subtle" size="sm">Purple glow</Text>
      <Divider label="ENCRYPTED" glow="purple" />
    </div>
  ),
};
