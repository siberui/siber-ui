'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { DatePicker } from './date-picker';

const meta: Meta = {
  title: 'Components/Forms/DatePicker',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm mx-auto pt-10 pb-40">
        <Story />
      </div>
    ),
  ],
};
export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Interactive Wrapper
// ─────────────────────────────────────────────────────────────────────────────
function DatePickerDemo(props: any) {
  const [date, setDate] = React.useState<Date | undefined>();
  return <DatePicker value={date} onChange={setDate} {...props} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => <DatePickerDemo label="Birth Date" helperText="Please select your date of birth" />,
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <div className="bg-[#050d14] p-8 rounded-2xl w-[400px]">
      <DatePickerDemo
        variant="neon"
        label="EXPIRATION_DATE"
        helperText="// SYS_ADMIN_ONLY"
      />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => (
    <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-8 rounded-2xl w-[400px]">
      <DatePickerDemo
        variant="glass"
        label="Event Date"
        placeholder="Select a date..."
      />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// With Error
// ─────────────────────────────────────────────────────────────────────────────
export const WithError: StoryObj = {
  render: () => (
    <div className="bg-[#050d14] p-8 rounded-2xl w-[400px]">
      <DatePickerDemo
        variant="neon"
        label="DEPLOYMENT_SCHEDULE"
        error="Date must be in the future"
      />
    </div>
  ),
};
