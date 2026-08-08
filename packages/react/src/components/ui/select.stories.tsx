import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'Components/UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'neon', 'ghost'],
    },
    selectSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'NODE TYPE',
    placeholder: 'Select node...',
    helperText: 'Choose the target grid node.',
    options: [
      { value: 'alpha', label: 'Alpha Node' },
      { value: 'beta', label: 'Beta Node' },
      { value: 'gamma', label: 'Gamma Node' },
      { value: 'delta', label: 'Delta Node (Offline)', disabled: true },
    ],
    defaultValue: '',
  },
};

export const Neon: Story = {
  args: {
    variant: 'neon',
    label: 'PROTOCOL',
    placeholder: 'Select protocol...',
    options: [
      { value: 'tcp', label: 'TCP/IP' },
      { value: 'udp', label: 'UDP' },
      { value: 'quic', label: 'QUIC' },
      { value: 'ws', label: 'WebSocket' },
    ],
    defaultValue: '',
  },
};

export const WithGroups: Story = {
  args: {
    label: 'SECTOR',
    placeholder: 'Select sector...',
    options: [
      {
        label: '// ACTIVE ZONES',
        options: [
          { value: 'z1', label: 'Zone Alpha-1' },
          { value: 'z2', label: 'Zone Beta-7' },
          { value: 'z3', label: 'Zone Gamma-3' },
        ],
      },
      {
        label: '// RESTRICTED',
        options: [
          { value: 'r1', label: 'Sector Red-X', disabled: true },
          { value: 'r2', label: 'Sector Black-0', disabled: true },
        ],
      },
    ],
    defaultValue: '',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'CLEARANCE LEVEL',
    error: 'Access denied. Insufficient rank.',
    options: [
      { value: '1', label: 'Level 1 — Public' },
      { value: '2', label: 'Level 2 — Internal' },
      { value: '3', label: 'Level 3 — Classified' },
      { value: '4', label: 'Level 4 — Top Secret' },
    ],
    defaultValue: '4',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <Select
        selectSize="sm"
        label="SMALL"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        defaultValue="a"
      />
      <Select
        selectSize="md"
        label="MEDIUM"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        defaultValue="a"
      />
      <Select
        selectSize="lg"
        label="LARGE"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        defaultValue="a"
      />
    </div>
  ),
};

export const AllSelects: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// SELECT SPECTRUM</h3>
        <p className="text-xs text-slate-500 mt-1.5">Cyber-Minimalist Dropdown Controls</p>
      </div>

      <Select
        label="DEFAULT SELECT"
        placeholder="Choose option..."
        options={[
          { value: 'a', label: 'Alpha Protocol' },
          { value: 'b', label: 'Beta Protocol' },
        ]}
        defaultValue=""
      />
      <Select
        variant="neon"
        label="NEON SELECT"
        options={[
          { value: 'tcp', label: 'TCP/IP' },
          { value: 'ws', label: 'WebSocket' },
        ]}
        defaultValue="tcp"
      />
      <Select
        label="WITH GROUPS"
        options={[
          {
            label: '// CORE',
            options: [
              { value: 'c1', label: 'Core-1' },
              { value: 'c2', label: 'Core-2' },
            ],
          },
          {
            label: '// AUXILIARY',
            options: [
              { value: 'a1', label: 'Aux-1' },
            ],
          },
        ]}
        defaultValue="c1"
      />
      <Select
        label="ERROR STATE"
        error="Invalid sector selected."
        options={[
          { value: '1', label: 'Sector-01' },
          { value: '2', label: 'Sector-02' },
        ]}
        defaultValue="2"
      />
    </div>
  ),
};
