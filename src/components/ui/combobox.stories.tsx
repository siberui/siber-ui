import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Combobox } from './combobox';

const meta: Meta = {
  title: 'Components/Forms/Combobox',
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

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Interactive Wrapper
// ─────────────────────────────────────────────────────────────────────────────
function ComboboxDemo(props: any) {
  const [value, setValue] = React.useState('');
  return (
    <Combobox
      options={frameworks}
      value={value}
      onChange={setValue}
      {...props}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => <ComboboxDemo label="Framework" helperText="Select your favorite framework." />,
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <div className="bg-[#050d14] p-8 rounded-2xl w-[400px]">
      <ComboboxDemo
        variant="neon"
        label="TECH_STACK"
        helperText="// RUNTIME_ENVIRONMENT"
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
      <ComboboxDemo
        variant="glass"
        label="Stack"
        placeholder="Select framework..."
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
      <ComboboxDemo
        variant="neon"
        label="TECH_STACK"
        error="Framework selection is required for deployment."
      />
    </div>
  ),
};
