import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';
import { ShieldCheck, Cpu } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Components/UI/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const NeonCyan: Story = {
  args: {
    children: 'ONLINE',
    variant: 'neon',
    dot: true,
    dotColor: 'cyan',
  },
};

export const NeonPurple: Story = {
  args: {
    children: 'ENCRYPTED',
    variant: 'neonPurple',
    dot: true,
    dotColor: 'purple',
  },
};

export const NeonGreen: Story = {
  args: {
    children: 'SYSTEM NORMAL',
    variant: 'neonGreen',
    dot: true,
    dotColor: 'green',
  },
};

export const AllBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// STATUS BADGES</h3>
        <p className="text-xs text-slate-500 mt-1.5">Live status indicators & tech pills</p>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <Badge variant="neon" dot dotColor="cyan">CYBER_ONLINE</Badge>
        <Badge variant="neonPurple" dot dotColor="purple">OVERCLOCK</Badge>
        <Badge variant="neonGreen" dot dotColor="green">NODE_STABLE</Badge>
        <Badge variant="destructive" dot dotColor="rose">BREACH_DETECTED</Badge>
        <Badge variant="primary">v1.0.4-beta</Badge>
        <Badge variant="secondary">STAGING</Badge>
        <Badge variant="outline"><Cpu className="h-3 w-3 mr-1" strokeWidth={1.5} /> CORE 8</Badge>
        <Badge variant="neon" pulse><ShieldCheck className="h-3 w-3 mr-1" strokeWidth={1.5} /> ACTIVE SHIELD</Badge>
      </div>
    </div>
  ),
};
