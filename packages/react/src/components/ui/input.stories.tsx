import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';
import { Search, Lock, Mail, Key } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'neon', 'ghost'],
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter access token...',
    label: 'ACCESS TOKEN',
    helperText: 'Required for level 4 clearance.',
  },
};

export const Neon: Story = {
  args: {
    variant: 'neon',
    placeholder: 'USR_ADMIN_01',
    label: 'IDENTITY_TAG',
    leftIcon: <Key className="h-4 w-4 text-cyan-500/60" strokeWidth={1.5} />,
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: 'Search neural node...',
    label: 'NODE SEARCH',
    leftIcon: <Search className="h-4 w-4" strokeWidth={1.5} />,
  },
};

export const WithAddons: Story = {
  args: {
    placeholder: 'api.siber-ui.io',
    label: 'ENDPOINT URI',
    leftAddon: 'HTTPS://',
    rightAddon: 'V1',
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'user@matrix.internal',
    label: 'NEURAL LINK EMAIL',
    leftIcon: <Mail className="h-4 w-4" strokeWidth={1.5} />,
    error: 'Invalid protocol key provided.',
  },
};

export const AllInputs: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// INPUT SPECTRUM</h3>
        <p className="text-xs text-slate-500 mt-1.5">Cyber-Minimalist Text Field Controls</p>
      </div>

      <Input label="STANDARD INPUT" placeholder="Enter grid ID..." leftIcon={<Search className="h-4 w-4" strokeWidth={1.5} />} />
      <Input variant="neon" label="NEON CYBER INPUT" placeholder="SYS_OVERRIDE_KEY" leftIcon={<Lock className="h-4 w-4 text-cyan-500/60" strokeWidth={1.5} />} />
      <Input label="INPUT WITH ADDON" leftAddon="GRID://" placeholder="node-alpha" rightAddon=".NET" />
      <Input label="ERROR STATE" error="Connection timed out (504)" defaultValue="192.168.0.255" />
    </div>
  ),
};
