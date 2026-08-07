import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'neon', 'ghost'],
    },
    textareaSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter mission briefing...',
    label: 'MISSION LOG',
    helperText: 'Provide detailed operation notes.',
  },
};

export const Neon: Story = {
  args: {
    variant: 'neon',
    placeholder: '> ENTER SYSTEM OVERRIDE COMMAND...',
    label: 'TERMINAL_INPUT',
  },
};

export const WithCharacterCounter: Story = {
  args: {
    placeholder: 'Describe the anomaly...',
    label: 'INCIDENT REPORT',
    maxCharacters: 200,
    helperText: 'Maximum 200 characters allowed.',
  },
};

export const AutoResize: Story = {
  args: {
    placeholder: 'Type to auto-expand...',
    label: 'DYNAMIC FIELD',
    autoResize: true,
    helperText: 'This field expands as you type.',
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Enter encrypted payload...',
    label: 'PAYLOAD DATA',
    error: 'Decryption failed. Invalid key.',
    defaultValue: 'aGVsbG8gd29ybGQ=...',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    placeholder: 'Notes...',
    label: 'GHOST FIELD',
  },
};

export const AllTextareas: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// TEXTAREA SPECTRUM</h3>
        <p className="text-xs text-slate-500 mt-1.5">Multi-line Cyber Text Fields</p>
      </div>

      <Textarea label="STANDARD TEXTAREA" placeholder="Enter mission log data..." />
      <Textarea variant="neon" label="NEON CYBER TEXTAREA" placeholder="> SYS.LOG.APPEND()" />
      <Textarea label="WITH COUNTER" placeholder="Describe..." maxCharacters={150} />
      <Textarea label="AUTO-RESIZE" placeholder="Expands dynamically..." autoResize />
      <Textarea label="ERROR STATE" error="Buffer overflow detected." defaultValue="0xDEADBEEF..." />
    </div>
  ),
};
