import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './scroll-area';

const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border border-slate-800 bg-slate-950/50 p-4">
      <div className="text-sm text-slate-300 font-mono space-y-4">
        <h4 className="mb-4 text-sm font-bold leading-none text-cyan-400">SOC System Logs</h4>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex gap-2 text-xs">
            <span className="text-slate-500">[{new Date().toISOString()}]</span>
            <span className="text-slate-300">Authentication successful for user_id={1000 + i}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScrolling: Story = {
  args: {},
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border border-slate-800 bg-slate-950/50 p-4">
      <div className="flex w-max space-x-4 p-2 font-mono text-sm text-slate-300">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-[150px] shrink-0 rounded-md border border-slate-800 bg-slate-900 p-3"
          >
            <div className="font-semibold text-cyan-400">Node {i + 1}</div>
            <div className="text-xs text-slate-500 mt-1">Status: Active</div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
