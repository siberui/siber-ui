import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'neon', 'neonPurple', 'neonGreen'],
    },
    switchSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Enable dark mode',
    description: 'Switch between light and dark themes.',
  },
};

export const Neon: Story = {
  args: {
    variant: 'neon',
    label: 'Neural link active',
    description: 'Direct brain-interface connection.',
    defaultChecked: true,
  },
};

export const NeonPurple: Story = {
  args: {
    variant: 'neonPurple',
    label: 'Stealth protocol',
    defaultChecked: true,
  },
};

export const NeonGreen: Story = {
  args: {
    variant: 'neonGreen',
    label: 'Auto-sync enabled',
    defaultChecked: true,
  },
};

export const LabelLeft: Story = {
  args: {
    variant: 'neon',
    label: 'Notifications',
    labelPosition: 'left',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'System override (locked)',
    disabled: true,
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch switchSize="sm" label="Small — Compact toggle" defaultChecked />
      <Switch switchSize="md" label="Medium — Default toggle" defaultChecked />
      <Switch switchSize="lg" label="Large — Expanded toggle" defaultChecked />
    </div>
  ),
};

export const AllSwitches: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// SWITCH SPECTRUM</h3>
        <p className="text-xs text-slate-500 mt-1.5">Cyber-Minimalist Toggle Controls</p>
      </div>

      <div className="flex flex-col gap-4">
        <Switch label="Default — System toggle" description="Standard mode" />
        <Switch variant="neon" label="Neon — Cyber toggle" description="Encrypted channel active" defaultChecked />
        <Switch variant="neonPurple" label="Purple — Stealth toggle" defaultChecked />
        <Switch variant="neonGreen" label="Green — Eco-mode toggle" defaultChecked />
        <Switch variant="neon" label="Left-aligned label" labelPosition="left" defaultChecked />
        <Switch label="Disabled — Locked toggle" disabled defaultChecked />
      </div>
    </div>
  ),
};
