import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const TEAM = [
  { name: 'Kai Nakamura', src: undefined, status: 'online' as const },
  { name: 'Zara Patel', src: undefined, status: 'idle' as const },
  { name: 'Leon Vance', src: undefined, status: 'busy' as const },
  { name: 'Mira Osei', src: undefined, status: 'offline' as const },
  { name: 'Ryo Tanaka', src: undefined, status: 'online' as const },
  { name: 'Aria Chen', src: undefined },
];

export const WithStatus: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// AVATAR — STATUS DOTS</h3>
        <p className="text-xs text-slate-500 mt-1.5">Online / Idle / Busy / Offline with glow indicators</p>
      </div>

      <div className="flex flex-wrap gap-6 items-center">
        {TEAM.slice(0, 4).map((user) => (
          <div key={user.name} className="flex flex-col items-center gap-2">
            <Avatar name={user.name} status={user.status} size="lg" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const SizeScale: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// AVATAR — SIZE SCALE</h3>
        <p className="text-xs text-slate-500 mt-1.5">xs / sm / md / lg / xl / 2xl</p>
      </div>

      <div className="flex items-end gap-4">
        {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <Avatar name="Kai Nakamura" size={s} status="online" />
            <span className="text-[9px] font-mono text-slate-600 uppercase">{s}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const WithRing: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// AVATAR — RING VARIANTS</h3>
        <p className="text-xs text-slate-500 mt-1.5">Neon ring accents for selection or emphasis</p>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <Avatar name="Zara Patel" size="xl" ring="cyan" />
          <span className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-wider">cyan</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Avatar name="Leon Vance" size="xl" ring="purple" />
          <span className="text-[10px] font-mono text-purple-500/60 uppercase tracking-wider">purple</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Avatar name="Mira Osei" size="xl" ring="green" />
          <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-wider">green</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Avatar name="Aria Chen" size="xl" ring="white" />
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">white</span>
        </div>
      </div>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// AVATAR GROUP</h3>
        <p className="text-xs text-slate-500 mt-1.5">Stacked overlap layout with overflow counter</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <AvatarGroup avatars={TEAM} max={4} size="md" />
          <span className="text-xs font-mono text-slate-500">{TEAM.length} grid operators online</span>
        </div>

        <div className="flex items-center gap-4">
          <AvatarGroup avatars={TEAM} max={3} size="lg" ring="cyan" />
          <span className="text-xs font-mono text-slate-500">Active session — cyan ring</span>
        </div>

        <div className="flex items-center gap-4">
          <AvatarGroup avatars={TEAM} max={5} size="sm" />
          <span className="text-xs font-mono text-slate-500">Compact mode</span>
        </div>
      </div>
    </div>
  ),
};
