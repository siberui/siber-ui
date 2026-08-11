import type { Meta, StoryObj } from '@storybook/react-vite';
import { TechLabel, SystemBadge } from './tech-label';
import { VERSION } from '../../version';

const meta: Meta<typeof TechLabel> = {
  title: 'Components/UI/TechLabel',
  component: TechLabel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TechLabel>;

export const Default: Story = {
  args: {
    children: 'NODE_042 / LAST_SYNC 12:04:33Z',
  },
};

export const Tones: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(['neutral', 'cyan', 'violet', 'green', 'amber', 'rose'] as const).map(
        (tone) => (
          <TechLabel
            key={tone}
            tone={tone}
          >
            {tone.toUpperCase()} / METADATA_LABEL
          </TechLabel>
        ),
      )}
    </div>
  ),
};

export const SystemBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <SystemBadge tone="neutral">v{VERSION}</SystemBadge>
      <SystemBadge tone="cyan">BETA</SystemBadge>
      <SystemBadge tone="green">STABLE</SystemBadge>
      <SystemBadge tone="amber">DEPRECATED</SystemBadge>
      <SystemBadge tone="rose">BREAKING</SystemBadge>
    </div>
  ),
};
