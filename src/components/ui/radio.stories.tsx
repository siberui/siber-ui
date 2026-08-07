import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, Radio } from './radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/UI/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup label="NETWORK MODE" defaultValue="mesh">
      <Radio radioValue="mesh" label="Mesh Network" description="Distributed peer-to-peer topology" />
      <Radio radioValue="star" label="Star Network" description="Central hub architecture" />
      <Radio radioValue="ring" label="Ring Network" description="Sequential data relay" />
    </RadioGroup>
  ),
};

export const Neon: Story = {
  render: () => (
    <RadioGroup label="ENCRYPTION LEVEL" defaultValue="aes256">
      <Radio variant="neon" radioValue="aes128" label="AES-128" description="Standard encryption" />
      <Radio variant="neon" radioValue="aes256" label="AES-256" description="Military-grade encryption" />
      <Radio variant="neon" radioValue="quantum" label="Quantum-Safe" description="Post-quantum lattice-based" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup label="PRIORITY" defaultValue="medium" orientation="horizontal">
      <Radio radioValue="low" label="Low" />
      <Radio radioValue="medium" label="Medium" />
      <Radio radioValue="high" label="High" />
      <Radio radioValue="critical" label="Critical" />
    </RadioGroup>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <RadioGroup label="SECTOR ACCESS" defaultValue="alpha">
      <Radio radioValue="alpha" label="Sector Alpha" description="Full access granted" />
      <Radio radioValue="beta" label="Sector Beta" description="Limited access" />
      <Radio radioValue="omega" label="Sector Omega" description="Requires Level 5 clearance" disabled />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <RadioGroup label="SMALL" defaultValue="a">
        <Radio radioSize="sm" radioValue="a" label="Option A — Compact" />
        <Radio radioSize="sm" radioValue="b" label="Option B — Compact" />
      </RadioGroup>
      <RadioGroup label="MEDIUM" defaultValue="a">
        <Radio radioSize="md" radioValue="a" label="Option A — Default" />
        <Radio radioSize="md" radioValue="b" label="Option B — Default" />
      </RadioGroup>
      <RadioGroup label="LARGE" defaultValue="a">
        <Radio radioSize="lg" radioValue="a" label="Option A — Expanded" />
        <Radio radioSize="lg" radioValue="b" label="Option B — Expanded" />
      </RadioGroup>
    </div>
  ),
};

export const AllRadios: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// RADIO SPECTRUM</h3>
        <p className="text-xs text-slate-500 mt-1.5">Cyber-Minimalist Selection Controls</p>
      </div>

      <RadioGroup label="DEFAULT VARIANT" defaultValue="opt1">
        <Radio radioValue="opt1" label="Neural Link Mode" description="Direct brain-computer interface" />
        <Radio radioValue="opt2" label="Relay Mode" description="Signal through proxy nodes" />
      </RadioGroup>

      <div className="border-t border-white/[0.06] pt-4">
        <RadioGroup label="NEON VARIANT" defaultValue="q1">
          <Radio variant="neon" radioValue="q1" label="Quantum Core" description="Entanglement-based processing" />
          <Radio variant="neon" radioValue="q2" label="Classical Core" description="Traditional silicon compute" />
        </RadioGroup>
      </div>

      <div className="border-t border-white/[0.06] pt-4">
        <RadioGroup label="HORIZONTAL LAYOUT" defaultValue="fast" orientation="horizontal">
          <Radio radioValue="fast" label="Fast" />
          <Radio radioValue="balanced" label="Balanced" />
          <Radio radioValue="safe" label="Safe" />
        </RadioGroup>
      </div>
    </div>
  ),
};
