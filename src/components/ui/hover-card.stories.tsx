import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';
import { Button } from './button';
import { ShieldAlert } from 'lucide-react';

const meta = {
  title: 'UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="p-10 flex items-center justify-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" className="font-mono text-cyan-400 border-cyan-500/30 hover:bg-cyan-950/30">
            IP: 192.168.1.105
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="mt-1 bg-rose-500/10 p-2 rounded-md h-fit">
              <ShieldAlert className="h-4 w-4 text-rose-500" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-rose-400 font-mono">Suspicious Node</h4>
              <p className="text-sm text-slate-400">
                Multiple failed login attempts detected from this internal node within the last 5 minutes.
              </p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-slate-500 font-mono">
                  Last seen: 2 mins ago
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};
