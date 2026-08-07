import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tag, TagGroup } from './tag';
import { Cpu, Globe, Lock, ShieldCheck, Wifi } from 'lucide-react';

const meta: Meta<typeof Tag> = {
  title: 'Components/UI/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
      <div className="border-b border-white/[0.06] pb-4">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// TAG VARIANTS</h3>
        <p className="text-xs text-slate-500 mt-1.5">Static & removable tech tags</p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <Tag variant="default">typescript</Tag>
        <Tag variant="neon" icon={<Cpu className="h-3 w-3" strokeWidth={1.5} />}>core-alpha</Tag>
        <Tag variant="neonPurple" icon={<Lock className="h-3 w-3" strokeWidth={1.5} />}>encrypted</Tag>
        <Tag variant="neonGreen" icon={<ShieldCheck className="h-3 w-3" strokeWidth={1.5} />}>verified</Tag>
        <Tag variant="outline">metadata</Tag>
      </div>

      <div className="border-t border-white/[0.06] pt-5 space-y-2">
        <span className="text-[11px] font-mono text-slate-600 uppercase tracking-widest">// Removable</span>
        <div className="flex flex-wrap gap-2.5">
          <Tag variant="neon" onRemove={() => {}}>react</Tag>
          <Tag variant="neonPurple" onRemove={() => {}}>tailwindcss</Tag>
          <Tag variant="neonGreen" onRemove={() => {}}>vite</Tag>
          <Tag variant="default" onRemove={() => {}}>storybook</Tag>
        </div>
      </div>

      <div className="border-t border-white/[0.06] pt-5 space-y-2">
        <span className="text-[11px] font-mono text-slate-600 uppercase tracking-widest">// Sizes</span>
        <div className="flex flex-wrap gap-2 items-center">
          <Tag size="sm" variant="neon">small</Tag>
          <Tag size="md" variant="neon">medium</Tag>
          <Tag size="lg" variant="neon">large</Tag>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [selectedTags, setSelectedTags] = useState<string[]>(['react', 'typescript']);

    return (
      <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
        <div className="border-b border-white/[0.06] pb-4">
          <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// INTERACTIVE TAGS</h3>
          <p className="text-xs text-slate-500 mt-1.5">Toggle selection — selected tags emit neon glow</p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {['react', 'typescript', 'vite', 'tailwind', 'storybook', 'radix-ui'].map((tech) => (
            <Tag
              key={tech}
              variant="neon"
              interactive
              selected={selectedTags.includes(tech)}
              onClick={() =>
                setSelectedTags((prev) =>
                  prev.includes(tech)
                    ? prev.filter((t) => t !== tech)
                    : [...prev, tech]
                )
              }
            >
              {tech}
            </Tag>
          ))}
        </div>

        <div className="text-[11px] font-mono text-slate-500">
          SELECTED:{' '}
          <span className="text-cyan-400">
            {selectedTags.length ? selectedTags.join(', ') : 'none'}
          </span>
        </div>
      </div>
    );
  },
};

export const TagGroupDemo: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['realtime', 'encrypted']);

    const tags = [
      { value: 'realtime', label: 'Realtime', icon: <Wifi className="h-3 w-3" strokeWidth={1.5} /> },
      { value: 'encrypted', label: 'Encrypted', icon: <Lock className="h-3 w-3" strokeWidth={1.5} /> },
      { value: 'distributed', label: 'Distributed', icon: <Globe className="h-3 w-3" strokeWidth={1.5} /> },
      { value: 'verified', label: 'Verified', icon: <ShieldCheck className="h-3 w-3" strokeWidth={1.5} /> },
      { value: 'quantum', label: 'Quantum', icon: <Cpu className="h-3 w-3" strokeWidth={1.5} /> },
    ];

    return (
      <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-xl w-full">
        <div className="border-b border-white/[0.06] pb-4">
          <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// TAG GROUP — FILTER</h3>
          <p className="text-xs text-slate-500 mt-1.5">Controlled multi-select filter group with icons</p>
        </div>

        <TagGroup
          tags={tags}
          selected={selected}
          onSelectionChange={setSelected}
          variant="neonPurple"
        />

        <div className="border-t border-white/[0.06] pt-4">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-2">Active Filters</div>
          <div className="flex flex-wrap gap-1.5 min-h-[28px]">
            {selected.length === 0 && (
              <span className="text-xs text-slate-600 font-mono italic">none selected</span>
            )}
            {selected.map((v) => (
              <Tag
                key={v}
                size="sm"
                variant="neonPurple"
                selected
                onRemove={() => setSelected((p) => p.filter((s) => s !== v))}
              >
                {v}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
