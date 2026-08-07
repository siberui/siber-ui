import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './input-otp';

const meta: Meta = {
  title: 'Components/Forms/InputOTP',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm mx-auto p-12">
        <Story />
      </div>
    ),
  ],
};
export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Interactive Wrapper
// ─────────────────────────────────────────────────────────────────────────────
function InputOTPDemo(props: any) {
  const [value, setValue] = React.useState('');
  return (
    <InputOTP maxLength={6} value={value} onChange={setValue} {...props}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => <InputOTPDemo label="Verification Code" helperText="Enter the 6-digit code sent to your email" />,
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <div className="bg-[#050d14] p-8 rounded-2xl">
      <InputOTPDemo
        variant="neon"
        label="AUTH_TOKEN"
        helperText="// 2FA REQUIRED FOR ACCESS"
      />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => (
    <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-8 rounded-2xl">
      <InputOTPDemo
        variant="glass"
        label="Secure Code"
      />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// With Error
// ─────────────────────────────────────────────────────────────────────────────
export const WithError: StoryObj = {
  render: () => (
    <div className="bg-[#050d14] p-8 rounded-2xl">
      <InputOTPDemo
        variant="neon"
        label="AUTH_TOKEN"
        error="Invalid token provided."
      />
    </div>
  ),
};
