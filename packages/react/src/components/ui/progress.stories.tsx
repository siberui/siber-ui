'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';
import { useState, useEffect } from 'react';

const meta: Meta<typeof Progress> = {
  title: 'Components/UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'neon', 'neonPurple', 'neonGreen', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 65,
    className: 'w-[60%]',
  },
};

export const Neon: Story = {
  args: {
    variant: 'neon',
    value: 80,
    className: 'w-[60%]',
  },
};

export const NeonPurple: Story = {
  args: {
    variant: 'neonPurple',
    value: 45,
    className: 'w-[60%]',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[60%]">
      <Progress size="sm" variant="neon" value={30} />
      <Progress size="md" variant="neon" value={50} />
      <Progress size="lg" variant="neon" value={70} />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    variant: 'neonGreen',
    className: 'w-[60%]',
    isIndeterminate: true,
  },
};

export const AnimatedDemo = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    const timer2 = setTimeout(() => setProgress(100), 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-[60%] flex flex-col gap-2">
      <div className="flex justify-between text-xs font-mono text-cyan-400">
        <span>UPLOADING PAYLOAD...</span>
        <span>{progress}%</span>
      </div>
      <Progress variant="neon" value={progress} />
    </div>
  );
};
