import type { Meta, StoryObj } from '@storybook/react-vite';
import { CornerFrame, CornerMarker } from './corner-frame';

const meta: Meta<typeof CornerFrame> = {
  title: 'Components/UI/CornerFrame',
  component: CornerFrame,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CornerFrame>;

export const Default: Story = {
  render: () => (
    <CornerFrame
      signal="cyan"
      className="w-72 rounded-lg border border-border-hairline bg-surface-1 p-6"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
        Instrumented surface
      </p>
      <p className="mt-2 text-sm text-fg-muted">
        Four corner marks read as &quot;technical instrument&quot; without
        clipping the surface underneath.
      </p>
    </CornerFrame>
  ),
};

export const Signals: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {(['cyan', 'violet', 'green', 'amber', 'rose'] as const).map((signal) => (
        <CornerFrame
          key={signal}
          signal={signal}
          className="w-48 rounded-lg border border-border-hairline bg-surface-1 p-5"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
            {signal}
          </p>
        </CornerFrame>
      ))}
    </div>
  ),
};

export const PartialCorners: Story = {
  render: () => (
    <CornerFrame
      signal="green"
      corners={['tl', 'br']}
      className="w-64 rounded-lg border border-border-hairline bg-surface-1 p-6"
    >
      <p className="text-sm text-fg-muted">Only top-left and bottom-right marks.</p>
    </CornerFrame>
  ),
};

export const SingleMarker: Story = {
  render: () => (
    <div className="relative h-24 w-24 rounded-lg border border-border-hairline bg-surface-1">
      <CornerMarker
        position="tl"
        signal="cyan"
      />
    </div>
  ),
};
