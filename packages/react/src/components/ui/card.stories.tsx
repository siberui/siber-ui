import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Cpu, Activity, ArrowRight, ShieldCheck, Gauge, HardDrive, Wifi } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Components/UI/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CyberCard: Story = {
  render: () => (
    <Card className="w-[400px]" accentLine="cyan" variant="neon">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="neon" dot dotColor="cyan">ACTIVE NODE</Badge>
          <span className="text-[10px] font-mono text-slate-600">ID: 0x9F41</span>
        </div>
        <CardTitle className="flex items-center gap-2.5 mt-3">
          <Cpu className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
          Quantum Core Alpha
        </CardTitle>
        <CardDescription>High throughput distributed compute module</CardDescription>
      </CardHeader>
      <CardContent className="space-y-0 font-mono text-xs">
        <div className="flex justify-between py-3 border-b border-white/[0.05]">
          <span className="text-slate-500 flex items-center gap-2">
            <Gauge className="h-3.5 w-3.5" strokeWidth={1.5} />
            Load Level
          </span>
          <span className="text-cyan-400 font-semibold">42.8%</span>
        </div>
        <div className="flex justify-between py-3 border-b border-white/[0.05]">
          <span className="text-slate-500 flex items-center gap-2">
            <HardDrive className="h-3.5 w-3.5" strokeWidth={1.5} />
            Memory Allocation
          </span>
          <span className="text-white">128 GB / 256 GB</span>
        </div>
        <div className="flex justify-between py-3 border-b border-white/[0.05]">
          <span className="text-slate-500 flex items-center gap-2">
            <Wifi className="h-3.5 w-3.5" strokeWidth={1.5} />
            Latency
          </span>
          <span className="text-white">0.3 ms</span>
        </div>
        <div className="flex justify-between py-3">
          <span className="text-slate-500 flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
            Security Layer
          </span>
          <span className="text-emerald-400 font-semibold">VERIFIED</span>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost" size="sm">DIAGNOSTICS</Button>
        <Button variant="neon" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />}>CONNECT</Button>
      </CardFooter>
    </Card>
  ),
};

export const CardVariantsShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <Card accentLine="cyan">
        <CardHeader>
          <CardTitle>Default Glass Card</CardTitle>
          <CardDescription>Glassmorphic surface with cyan accent gradient</CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-slate-400">
          Frosted glass effect with backdrop-blur and subtle white/alpha borders create premium depth perception.
        </CardContent>
      </Card>

      <Card accentLine="purple" variant="interactive">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Interactive Card
            <Activity className="h-4 w-4 text-purple-400" strokeWidth={1.5} />
          </CardTitle>
          <CardDescription>Hover for micro-interaction feedback</CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-slate-400">
          Responds to hover with scale-[1.02] elevation, deepened shadow, and glass border intensification.
        </CardContent>
      </Card>

      <Card variant="neon" accentLine="green">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="neonGreen" dot dotColor="green" size="sm">ONLINE</Badge>
            <span className="text-[9px] font-mono text-slate-600">UPTIME: 99.97%</span>
          </div>
          <CardTitle className="mt-2">Neon Variant</CardTitle>
          <CardDescription>Soft cyan aura with ambient glow diffusion</CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-slate-400">
          Multi-layered box-shadow with decreasing opacity creates atmospheric light bleed around the card edges.
        </CardContent>
      </Card>

      <Card variant="ghost">
        <CardHeader>
          <CardTitle>Ghost Card</CardTitle>
          <CardDescription>Transparent minimal surface</CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-slate-400">
          Zero background opacity for embedding in complex layouts where visual layering is already present.
        </CardContent>
      </Card>
    </div>
  ),
};
