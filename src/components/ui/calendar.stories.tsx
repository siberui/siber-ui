import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Calendar } from './calendar';

const meta: Meta = {
  title: 'Components/Forms/Calendar',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
};
export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Interactive Wrapper
// ─────────────────────────────────────────────────────────────────────────────
function CalendarDemo({ variant }: { variant: 'default' | 'neon' | 'glass' }) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      variant={variant}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => <CalendarDemo variant="default" />,
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <div className="bg-[#050d14] p-8 rounded-2xl">
      <CalendarDemo variant="neon" />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => (
    <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-8 rounded-2xl">
      <CalendarDemo variant="glass" />
    </div>
  ),
};
