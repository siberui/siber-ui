import type { Meta, StoryObj } from '@storybook/react';
import { ThreatIndicator } from './threat-indicator';

const meta = {
  title: 'UI/ThreatIndicator',
  component: ThreatIndicator,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ThreatIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Low: Story = {
  args: {
    value: 15,
    level: 'low',
    label: 'Risk',
  },
};

export const Medium: Story = {
  args: {
    value: 45,
    level: 'medium',
    label: 'Risk',
  },
};

export const High: Story = {
  args: {
    value: 80,
    level: 'high',
    label: 'Risk',
  },
};

export const Critical: Story = {
  args: {
    value: 98,
    level: 'critical',
    label: 'Risk',
  },
};

export const DashboardRow: Story = {
  args: { value: 0 },
  render: () => (
    <div className="flex gap-8 p-8 bg-slate-950 border border-slate-800 rounded-lg w-fit">
      <ThreatIndicator value={12} level="low" label="System A" size="sm" />
      <ThreatIndicator value={55} level="medium" label="System B" size="sm" />
      <ThreatIndicator value={89} level="high" label="System C" size="sm" />
      <ThreatIndicator value={99} level="critical" label="Core" size="lg" />
    </div>
  ),
};
