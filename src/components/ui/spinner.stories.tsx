import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';
import { Card } from './card';
import { Button } from './button';

const meta: Meta = {
  title: 'Components/UI/Spinner',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => <Spinner />,
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => <Spinner variant="neon" size="lg" />,
};

// ─────────────────────────────────────────────────────────────────────────────
// Sizes
// ─────────────────────────────────────────────────────────────────────────────
export const Sizes: StoryObj = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" variant="neon" />
      <Spinner size="md" variant="neon" />
      <Spinner size="lg" variant="neon" />
      <Spinner size="xl" variant="neon" />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────────────
export const Variants: StoryObj = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner variant="default" size="lg" />
      <Spinner variant="neon" size="lg" />
      <Spinner variant="neonPurple" size="lg" />
      <Spinner variant="destructive" size="lg" />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// With Label
// ─────────────────────────────────────────────────────────────────────────────
export const WithLabel: StoryObj = {
  render: () => (
    <div className="flex items-end gap-12">
      <Spinner variant="default" showLabel label="Loading Data..." />
      <Spinner variant="neon" showLabel label="// SYNCING_NODES" />
      <Spinner variant="destructive" showLabel label="PURGING..." />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Context Usage
// ─────────────────────────────────────────────────────────────────────────────
export const ContextUsage: StoryObj = {
  render: () => (
    <div className="flex gap-6">
      {/* Inside a Button */}
      <Button variant="outline" disabled>
        <Spinner size="sm" className="mr-2" />
        Processing...
      </Button>

      <Button variant="neon" disabled>
        <Spinner size="sm" variant="neon" className="mr-2" />
        Connecting...
      </Button>

      {/* Inside a Card */}
      <Card className="w-64 h-40 flex flex-col items-center justify-center border-cyan-500/20 bg-cyan-950/10">
        <Spinner variant="neon" size="lg" showLabel label="Decrypting File" />
      </Card>
    </div>
  ),
};
