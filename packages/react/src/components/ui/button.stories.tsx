import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Terminal, Zap, ShieldAlert, ArrowRight, Power } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'neon', 'neonPurple', 'neonGreen', 'ghost', 'destructive', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    glow: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'EXECUTE COMMAND',
    variant: 'primary',
    size: 'md',
  },
};

export const NeonCyan: Story = {
  args: {
    children: 'CONNECT_GRID',
    variant: 'neon',
    size: 'md',
    leftIcon: <Terminal className="h-4 w-4" strokeWidth={1.5} />,
  },
};

export const NeonPurple: Story = {
  args: {
    children: 'OVERDRIVE',
    variant: 'neonPurple',
    size: 'md',
    leftIcon: <Zap className="h-4 w-4" strokeWidth={1.5} />,
  },
};

export const NeonGreen: Story = {
  args: {
    children: 'SYSTEM_ONLINE',
    variant: 'neonGreen',
    size: 'md',
    leftIcon: <Power className="h-4 w-4" strokeWidth={1.5} />,
  },
};

export const Secondary: Story = {
  args: {
    children: 'VIEW LOGS',
    variant: 'secondary',
    size: 'md',
  },
};

export const Destructive: Story = {
  args: {
    children: 'PURGE PROTOCOL',
    variant: 'destructive',
    size: 'md',
    leftIcon: <ShieldAlert className="h-4 w-4" strokeWidth={1.5} />,
  },
};

export const Loading: Story = {
  args: {
    children: 'INITIALIZING...',
    variant: 'neon',
    isLoading: true,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'INITIALIZE SYSTEM',
    variant: 'primary',
    rightIcon: <ArrowRight className="h-4 w-4" strokeWidth={1.5} />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-2xl">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// BUTTON VARIANTS</h3>
        <p className="text-xs text-slate-500 mt-1.5">Siber-Minimalist Design Token Spectrum</p>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="neon" leftIcon={<Terminal className="h-4 w-4" strokeWidth={1.5} />}>Neon Cyan</Button>
        <Button variant="neonPurple" leftIcon={<Zap className="h-4 w-4" strokeWidth={1.5} />}>Neon Purple</Button>
        <Button variant="neonGreen">Neon Green</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      <div className="border-t border-white/[0.06] pt-5 flex flex-col gap-4">
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">// Sizes & States</span>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="neon" size="sm">Small (sm)</Button>
          <Button variant="neon" size="md">Medium (md)</Button>
          <Button variant="neon" size="lg">Large (lg)</Button>
          <Button variant="neon" size="icon"><Zap className="h-4 w-4" strokeWidth={1.5} /></Button>
          <Button variant="primary" isLoading>Loading</Button>
          <Button variant="neon" glow>With Glow</Button>
        </div>
      </div>
    </div>
  ),
};
