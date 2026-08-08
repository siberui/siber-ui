import type { Meta, StoryObj } from '@storybook/react';
import { Marquee } from './marquee';
import { TerminalBlock } from './terminal-block';
import { ThreatIndicator } from './threat-indicator';

const meta = {
  title: 'Cyber/Marquee',
  component: Marquee,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['left', 'right', 'up', 'down'],
    },
    speed: {
      control: 'select',
      options: ['slow', 'normal', 'fast'],
    },
    pauseOnHover: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalText: Story = {
  args: {
    direction: 'left',
    speed: 'normal',
    pauseOnHover: true,
  },
  render: (args) => (
    <div className="w-full max-w-2xl border-y border-cyan-500/30 bg-slate-950">
      <Marquee {...args} className="py-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-cyan-400 font-mono text-sm mx-8">
            [SYS_LOG] Node {100 + i} connected successfully. Latency: {12 + i}ms.
          </span>
        ))}
      </Marquee>
    </div>
  ),
};

export const Cards: Story = {
  args: {
    direction: 'left',
    speed: 'slow',
    pauseOnHover: true,
  },
  render: (args) => (
    <div className="w-full max-w-4xl p-4 border border-slate-800 bg-slate-950 rounded-lg overflow-hidden">
      <Marquee {...args}>
        <ThreatIndicator label="Alpha" value={12} level="low" size="sm" />
        <ThreatIndicator label="Beta" value={45} level="medium" size="sm" />
        <ThreatIndicator label="Gamma" value={82} level="high" size="sm" />
        <ThreatIndicator label="Delta" value={98} level="critical" size="sm" />
        <ThreatIndicator label="Epsilon" value={5} level="low" size="sm" />
      </Marquee>
    </div>
  ),
};

export const VerticalCode: Story = {
  args: {
    direction: 'up',
    speed: 'normal',
    pauseOnHover: false,
  },
  render: (args) => (
    <div className="w-[400px] h-[300px] border border-slate-800 bg-slate-950 rounded-lg overflow-hidden relative">
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />
      <Marquee {...args}>
        {Array.from({ length: 3 }).map((_, i) => (
          <TerminalBlock 
            key={i}
            code={`function scan() {\n  return checkNode(${i});\n}`} 
            title={`script_${i}.js`} 
          />
        ))}
      </Marquee>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
    </div>
  ),
};
