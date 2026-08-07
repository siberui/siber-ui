import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';
import { Activity, Clock, ShieldAlert } from 'lucide-react';

const meta = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: 'single' },
  render: () => (
    <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 w-fit">
      <ToggleGroup type="single" defaultValue="1h" variant="outline">
        <ToggleGroupItem value="15m" aria-label="Last 15 minutes">
          15m
        </ToggleGroupItem>
        <ToggleGroupItem value="1h" aria-label="Last 1 hour">
          1h
        </ToggleGroupItem>
        <ToggleGroupItem value="24h" aria-label="Last 24 hours">
          24h
        </ToggleGroupItem>
        <ToggleGroupItem value="7d" aria-label="Last 7 days">
          7d
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const WithIcons: Story = {
  args: { type: 'multiple' },
  render: () => (
    <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 w-fit">
      <ToggleGroup type="multiple" variant="default">
        <ToggleGroupItem value="logs" aria-label="Show Logs">
          <Clock className="mr-2 h-4 w-4" />
          Logs
        </ToggleGroupItem>
        <ToggleGroupItem value="metrics" aria-label="Show Metrics">
          <Activity className="mr-2 h-4 w-4" />
          Metrics
        </ToggleGroupItem>
        <ToggleGroupItem value="alerts" aria-label="Show Alerts">
          <ShieldAlert className="mr-2 h-4 w-4" />
          Alerts
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};
