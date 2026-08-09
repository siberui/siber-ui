import type { Meta, StoryObj } from '@storybook/react-vite';
import { Status, StatusDot, StatusBadge, StatusIndicator, SystemState } from './status';

const meta: Meta<typeof Status> = {
  title: 'Components/UI/Status',
  component: Status,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Status>;

const allStates = [
  'online',
  'offline',
  'idle',
  'loading',
  'warning',
  'critical',
  'unknown',
] as const;

export const Dots: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {allStates.map((state) => (
        <StatusDot
          key={state}
          state={state}
        />
      ))}
    </div>
  ),
};

export const Badges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {allStates.map((state) => (
        <StatusBadge
          key={state}
          state={state}
        />
      ))}
    </div>
  ),
};

export const Indicators: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {allStates.map((state) => (
        <StatusIndicator
          key={state}
          state={state}
        />
      ))}
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Status
      state="critical"
      label="Node unreachable"
      description="Last heartbeat 4 minutes ago — check network partition."
      className="max-w-xs"
    />
  ),
};

export const SystemStateRows: Story = {
  render: () => (
    <div className="w-80 rounded-lg border border-border-hairline bg-surface-1 px-4">
      <SystemState
        label="Uptime"
        value="14d 06h"
        state="online"
      />
      <SystemState
        label="Region"
        value="eu-central-1"
      />
      <SystemState
        label="Latency"
        value="212ms"
        state="warning"
      />
    </div>
  ),
};
