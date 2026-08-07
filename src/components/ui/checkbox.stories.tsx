import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'neon', 'neonPurple', 'neonGreen'],
    },
    checkboxSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Enable neural link synchronization',
    description: 'Sync data across all connected nodes.',
  },
};

export const Neon: Story = {
  args: {
    variant: 'neon',
    label: 'Activate cyber protocol',
    description: 'Enables encrypted data channel.',
  },
};

export const NeonPurple: Story = {
  args: {
    variant: 'neonPurple',
    label: 'Enable stealth mode',
  },
};

export const NeonGreen: Story = {
  args: {
    variant: 'neonGreen',
    label: 'Auto-deploy on commit',
  },
};

export const Indeterminate: Story = {
  args: {
    variant: 'neon',
    label: 'Select all nodes',
    description: 'Some nodes are already selected.',
    indeterminate: true,
  },
};

export const Checked: Story = {
  args: {
    label: 'Firewall enabled',
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
      <Checkbox checkboxSize="sm" label="Small — Compact mode" />
      <Checkbox checkboxSize="md" label="Medium — Default mode" />
      <Checkbox checkboxSize="lg" label="Large — Expanded mode" />
    </div>
  ),
};

export const AllCheckboxes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// CHECKBOX SPECTRUM</h3>
        <p className="text-xs text-slate-500 mt-1.5">Cyber-Minimalist Toggle Controls</p>
      </div>

      <div className="flex flex-col gap-4">
        <Checkbox label="Default — Neural sync enabled" description="Standard protocol" />
        <Checkbox variant="neon" label="Neon — Cyber protocol active" description="Encrypted channel" defaultChecked />
        <Checkbox variant="neonPurple" label="Purple — Stealth mode" />
        <Checkbox variant="neonGreen" label="Green — Auto-deploy" defaultChecked />
        <Checkbox variant="neon" label="Indeterminate — Partial selection" indeterminate />
        <Checkbox label="Disabled — System locked" disabled defaultChecked />
      </div>
    </div>
  ),
};
