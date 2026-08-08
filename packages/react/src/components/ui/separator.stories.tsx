import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="w-full max-w-sm rounded-lg border border-slate-800 bg-slate-950 p-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold font-mono text-cyan-400">Node Configuration</h4>
        <p className="text-xs text-slate-500 font-sans">View internal details and settings.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm font-mono text-slate-300">
        <div>Network</div>
        <Separator orientation="vertical" />
        <div>Security</div>
        <Separator orientation="vertical" />
        <div>Logs</div>
      </div>
    </div>
  ),
};
