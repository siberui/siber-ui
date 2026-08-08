import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard } from './skeleton';

const meta: Meta = {
  title: 'Components/UI/Skeleton',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default shimmer
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon shimmer
// ─────────────────────────────────────────────────────────────────────────────
export const NeonShimmer: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <Skeleton variant="neon" className="h-4 w-full" />
      <Skeleton variant="neon" className="h-4 w-5/6" />
      <Skeleton variant="neon" className="h-4 w-4/6" />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass shimmer
// ─────────────────────────────────────────────────────────────────────────────
export const GlassShimmer: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 w-80 p-6 rounded-2xl bg-cyan-900/10 border border-cyan-500/20 backdrop-blur-md">
      <Skeleton variant="glass" className="h-4 w-full" />
      <Skeleton variant="glass" className="h-4 w-5/6" />
      <Skeleton variant="glass" className="h-4 w-4/6" />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Pulse animation
// ─────────────────────────────────────────────────────────────────────────────
export const Pulse: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <Skeleton animation="pulse" className="h-4 w-full" />
      <Skeleton animation="pulse" className="h-4 w-5/6" />
      <Skeleton animation="pulse" className="h-4 w-4/6" />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonText
// ─────────────────────────────────────────────────────────────────────────────
export const TextBlock: StoryObj = {
  render: () => (
    <div className="space-y-8 w-80">
      <div>
        <p className="text-xs font-mono text-slate-500 mb-3">// DEFAULT</p>
        <SkeletonText lines={4} />
      </div>
      <div>
        <p className="text-xs font-mono text-slate-500 mb-3">// NEON</p>
        <SkeletonText variant="neon" lines={4} />
      </div>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonAvatar sizes
// ─────────────────────────────────────────────────────────────────────────────
export const Avatars: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-slate-500 mb-3">// DEFAULT</p>
        <div className="flex items-center gap-4">
          <SkeletonAvatar size="sm" />
          <SkeletonAvatar size="md" />
          <SkeletonAvatar size="lg" />
          <SkeletonAvatar size="xl" />
        </div>
      </div>
      <div>
        <p className="text-xs font-mono text-slate-500 mb-3">// NEON</p>
        <div className="flex items-center gap-4">
          <SkeletonAvatar size="sm" variant="neon" />
          <SkeletonAvatar size="md" variant="neon" />
          <SkeletonAvatar size="lg" variant="neon" />
          <SkeletonAvatar size="xl" variant="neon" />
        </div>
      </div>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonCard
// ─────────────────────────────────────────────────────────────────────────────
export const Cards: StoryObj = {
  render: () => (
    <div className="flex gap-6 flex-wrap">
      <div className="w-72">
        <p className="text-xs font-mono text-slate-500 mb-3">// DEFAULT</p>
        <SkeletonCard />
      </div>
      <div className="w-72">
        <p className="text-xs font-mono text-slate-500 mb-3">// NEON</p>
        <SkeletonCard variant="neon" />
      </div>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Feed / Profile loader — realistic usage example
// ─────────────────────────────────────────────────────────────────────────────
export const ProfileLoader: StoryObj = {
  render: () => (
    <div className="w-80 space-y-5">
      <p className="text-xs font-mono text-slate-500">// AGENT_PROFILE_LOADING...</p>

      {/* Avatar + name row */}
      <div className="flex items-center gap-4">
        <SkeletonAvatar size="xl" variant="neon" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="neon" className="h-4 w-1/2" />
          <Skeleton variant="neon" className="h-3 w-1/3" />
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 space-y-1">
            <Skeleton variant="neon" className="h-6 w-full rounded-lg" />
            <Skeleton variant="neon" className="h-2.5 w-2/3 mx-auto" />
          </div>
        ))}
      </div>

      {/* Bio text */}
      <SkeletonText variant="neon" lines={3} lastLineWidth="50%" />

      {/* Action bar */}
      <div className="flex gap-2">
        <Skeleton variant="neon" className="h-9 flex-1 rounded-lg" />
        <Skeleton variant="neon" className="h-9 w-9 rounded-lg" />
      </div>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Log / Table loader
// ─────────────────────────────────────────────────────────────────────────────
export const LogLoader: StoryObj = {
  render: () => (
    <div className="w-full max-w-lg space-y-2">
      <p className="text-xs font-mono text-slate-500 mb-3">// LOADING_LOGS...</p>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton
            variant="neon"
            className="h-3 w-20 shrink-0"
            style={{ opacity: 1 - i * 0.12 }}
          />
          <Skeleton
            variant="neon"
            className="h-3 flex-1"
            style={{ opacity: 1 - i * 0.12 }}
          />
          <Skeleton
            variant="neon"
            className="h-5 w-14 rounded-full shrink-0"
            style={{ opacity: 1 - i * 0.12 }}
          />
        </div>
      ))}
    </div>
  ),
};
