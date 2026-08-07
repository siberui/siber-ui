import type { Meta, StoryObj } from '@storybook/react';
import { TerminalBlock } from './terminal-block';

const meta = {
  title: 'UI/TerminalBlock',
  component: TerminalBlock,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TerminalBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { code: '' },
  render: () => (
    <div className="w-full max-w-2xl p-4">
      <TerminalBlock
        title="Execute Remediation Script"
        code={`#!/bin/bash
# Isolate the infected node
ufw deny from 192.168.1.105
ufw reload

# Terminate suspicious processes
kill -9 $(lsof -t -i:4444)

echo "Node isolated successfully."`}
      />
    </div>
  ),
};
