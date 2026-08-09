import type { Meta, StoryObj } from '@storybook/react';
import { GlitchText } from './glitch-text';

const meta = {
  title: 'Cyber/GlitchText',
  component: GlitchText,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['cyan', 'white', 'rose'],
    },
    variant: {
      control: 'select',
      options: ['scramble', 'rgb', 'both'],
    },
    active: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
  },
} satisfies Meta<typeof GlitchText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'SYSTEM COMPROMISED',
    color: 'rose',
    active: true,
  },
  render: (args) => (
    <div className="p-12 bg-slate-950 flex items-center justify-center rounded-lg border border-slate-800">
      <GlitchText {...args} as="h1" className="text-4xl" />
    </div>
  ),
};

export const Variants: Story = {
  args: {
    text: '',
  },
  render: () => (
    <div className="flex flex-col gap-8 p-12 bg-slate-950 rounded-lg border border-slate-800 w-fit">
      <div>
        <p className="text-xs text-slate-500 mb-2 font-mono">// color: white (default)</p>
        <GlitchText text="INITIALIZING PROTOCOL" as="h2" className="text-2xl" />
      </div>
      <div>
        <p className="text-xs text-slate-500 mb-2 font-mono">// color: cyan</p>
        <GlitchText text="UPLINK ESTABLISHED" as="h2" color="cyan" className="text-2xl" />
      </div>
      <div>
        <p className="text-xs text-slate-500 mb-2 font-mono">// color: rose</p>
        <GlitchText text="CRITICAL FAILURE" as="h2" color="rose" className="text-2xl" />
      </div>
      <div>
        <p className="text-xs text-slate-500 mb-2 font-mono">// active: false</p>
        <GlitchText text="STABLE CONNECTION" as="h2" active={false} color="cyan" className="text-2xl" />
      </div>
    </div>
  ),
};

export const HudVariants: Story = {
  args: {
    text: '',
  },
  render: () => (
    <div className="flex flex-col gap-8 p-12 bg-slate-950 rounded-lg border border-slate-800 w-fit">
      <div>
        <p className="text-xs text-slate-500 mb-2 font-mono">// variant: scramble</p>
        <GlitchText text="SCRAMBLE_ONLY" as="h2" variant="scramble" className="text-2xl" />
      </div>
      <div>
        <p className="text-xs text-slate-500 mb-2 font-mono">// variant: rgb</p>
        <GlitchText text="RGB_SLICE_ONLY" as="h2" variant="rgb" color="cyan" className="text-2xl" />
      </div>
      <div>
        <p className="text-xs text-slate-500 mb-2 font-mono">// variant: both (default)</p>
        <GlitchText text="BOTH_COMBINED" as="h2" variant="both" color="rose" className="text-2xl" />
      </div>
    </div>
  ),
};
