import type { Meta, StoryObj } from '@storybook/react';
import { RadarProgress } from './radar-progress';

const meta = {
  title: 'Cyber/RadarProgress',
  component: RadarProgress,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['cyan', 'green', 'rose'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    scanning: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadarProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'cyan',
    size: 'md',
    scanning: true,
  },
  render: (args) => (
    <div className="p-12 bg-slate-950 flex items-center justify-center rounded-lg border border-slate-800">
      <RadarProgress {...args} />
    </div>
  ),
};

export const Grid: Story = {
  args: {},
  render: () => (
    <div className="p-12 bg-slate-950 flex items-center justify-center gap-12 rounded-lg border border-slate-800">
      <div className="flex flex-col items-center gap-4">
        <RadarProgress color="green" size="sm" />
        <span className="text-xs font-mono text-slate-500">Node Sync</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <RadarProgress color="cyan" size="md" />
        <span className="text-xs font-mono text-cyan-500">Global Scan</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <RadarProgress color="rose" size="lg" />
        <span className="text-xs font-mono text-rose-500">Threat Detect</span>
      </div>
    </div>
  ),
};
