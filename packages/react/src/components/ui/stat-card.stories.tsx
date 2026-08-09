import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './stat-card';

const meta: Meta<typeof StatCard> = {
  title: 'Cyber/StatCard',
  component: StatCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-slate-950 text-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
      <StatCard value="4+" label="Years Exp." subtext="FULLSTACK & FRONTEND" color="cyan" />
      <StatCard value="35+" label="Projects" subtext="OPEN SOURCE & CLIENTS" color="purple" />
      <StatCard value="1,240+" label="Commits" subtext="THIS YEAR // 2026" color="emerald" />
    </div>
  ),
};
