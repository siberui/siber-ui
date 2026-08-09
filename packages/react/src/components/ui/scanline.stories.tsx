import type { Meta, StoryObj } from '@storybook/react-vite';
import { Scanline } from './scanline';

const meta: Meta<typeof Scanline> = {
  title: 'Components/UI/Scanline',
  component: Scanline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scanline>;

export const Static: Story = {
  render: () => (
    <div className="relative h-40 w-72 overflow-hidden rounded-lg border border-border-hairline bg-surface-1">
      <Scanline variant="static" />
      <p className="relative z-10 p-5 text-sm text-fg-muted">
        Fixed scanline texture, applied deliberately as an overlay.
      </p>
    </div>
  ),
};

export const Sweep: Story = {
  render: () => (
    <div className="relative h-40 w-72 overflow-hidden rounded-lg border border-border-hairline bg-surface-1">
      <Scanline variant="sweep" />
      <p className="relative z-10 p-5 text-sm text-fg-muted">
        A single beam sweeps down the surface on a loop.
      </p>
    </div>
  ),
};
