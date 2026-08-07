import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'neon', 'neonPurple', 'neonGreen'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
};

export const Neon: Story = {
  args: {
    variant: 'neon',
    defaultValue: [75],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
};

export const NeonPurple: Story = {
  args: {
    variant: 'neonPurple',
    defaultValue: [30],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
};

export const MultipleThumbs: Story = {
  render: () => (
    <div className="w-[60%] flex flex-col gap-8">
      <div>
        <label className="text-xs font-mono text-cyan-400 mb-2 block">// FREQUENCY BAND</label>
        <Slider variant="neon" defaultValue={[25, 75]} max={100} step={1} />
      </div>
    </div>
  ),
};
