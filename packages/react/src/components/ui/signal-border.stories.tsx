import type { Meta, StoryObj } from '@storybook/react-vite';
import { SignalBorder } from './signal-border';

const meta: Meta<typeof SignalBorder> = {
  title: 'Components/UI/SignalBorder',
  component: SignalBorder,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignalBorder>;

export const Default: Story = {
  render: () => (
    <SignalBorder
      signal="cyan"
      className="w-72 rounded-lg bg-surface-1 p-6"
    >
      <p className="text-sm text-fg-muted">
        A thin 1px gradient edge fading top → transparent — SiberUI&apos;s
        instrumented-surface border primitive.
      </p>
    </SignalBorder>
  ),
};

export const Signals: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {(['cyan', 'violet', 'green', 'amber', 'rose'] as const).map((signal) => (
        <SignalBorder
          key={signal}
          signal={signal}
          className="w-48 rounded-lg bg-surface-1 p-5"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
            {signal}
          </p>
        </SignalBorder>
      ))}
    </div>
  ),
};
