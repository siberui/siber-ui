import type { Meta, StoryObj } from '@storybook/react';
import { AchievementBadge } from './achievement-badge';

const meta: Meta<typeof AchievementBadge> = {
  title: 'Cyber/AchievementBadge',
  component: AchievementBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AchievementBadge>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-slate-950 text-slate-100 space-y-3 max-w-md mx-auto">
      <AchievementBadge
        title="AWS Certified Solutions Architect"
        issuer="Amazon Web Services"
        date="2025.11"
        status="verified"
      />
      <AchievementBadge
        title="Cybersecurity Fundamentals Certification"
        issuer="Siber Security Academy"
        date="2024.08"
        status="verified"
      />
    </div>
  ),
};
