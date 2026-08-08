import type { Meta, StoryObj } from '@storybook/react-vite';
import { BorderBeam } from './border-beam';
import { Card } from './card';

const meta: Meta = {
  title: 'Components/UI/BorderBeam',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
    <Card className="relative flex h-[300px] w-[300px] flex-col items-center justify-center overflow-hidden rounded-xl border-none bg-slate-950">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-white/40 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent">
        Border Beam
      </span>
      <BorderBeam />
    </Card>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <Card className="relative flex h-[300px] w-[300px] flex-col items-center justify-center overflow-hidden rounded-xl border-none bg-cyan-950/20 shadow-2xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-cyan-300 to-cyan-500/40 bg-clip-text text-center text-3xl font-mono uppercase tracking-widest text-transparent">
        System Active
      </span>
      <BorderBeam variant="neon" size={80} duration={4} borderWidth={2} borderColor="rgba(0,240,255,0.2)" />
    </Card>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Purple
// ─────────────────────────────────────────────────────────────────────────────
export const Purple: StoryObj = {
  render: () => (
    <Card className="relative flex h-[300px] w-[300px] flex-col items-center justify-center overflow-hidden rounded-xl border-none bg-purple-950/20">
      <span className="pointer-events-none whitespace-pre-wrap text-center text-3xl font-mono uppercase tracking-widest text-purple-300">
        AI Core
      </span>
      <BorderBeam variant="purple" size={60} duration={8} borderWidth={2} borderColor="rgba(168,85,247,0.2)" />
    </Card>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Multi-Beam (Two beams going opposite directions)
// ─────────────────────────────────────────────────────────────────────────────
export const MultiBeam: StoryObj = {
  render: () => (
    <Card className="relative flex h-[300px] w-[300px] flex-col items-center justify-center overflow-hidden rounded-xl border-none bg-slate-950">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-white/40 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent">
        Dual Core
      </span>
      {/* First beam moving clockwise */}
      <BorderBeam variant="neon" size={60} duration={5} />
      {/* Second beam moving counter-clockwise */}
      <BorderBeam variant="destructive" size={60} duration={5} reverse />
    </Card>
  ),
};
