'use client';

import * as React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  Tag,
  TagGroup,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import {
  Terminal,
  Shield,
  Network,
  Cpu,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Interactive Badges', level: 2 },
  { id: 'visual-variants', text: 'Visual Variants (Neon, Purple, Green, Outline)', level: 2 },
  { id: 'removable-tags', text: 'Dismissible & Removable Tags', level: 2 },
  { id: 'tag-group', text: 'TagGroup Multi-Select Filter Sets', level: 2 },
  { id: 'sizes', text: 'Scale & Density (sm, md, lg)', level: 2 },
  { id: 'frosted-glass-tags', text: 'Frosted Cyber-Glass Subnet Filter Matrix', level: 2 },
  { id: 'tactical-hud-deck', text: 'Tactical HUD Threat Taxonomy Deck', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function TagDocsPage() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>(['firewall', 'lattice']);
  const [tagsList, setTagsList] = React.useState(['ORBITAL_01', 'FRA_GATEWAY', 'KYBER_1024', 'SAT_RELAY']);

  const filterOptions = [
    { label: 'Firewall Filter', value: 'firewall', icon: <Shield className="w-3 h-3" /> },
    { label: 'Lattice Crypto', value: 'lattice', icon: <Cpu className="w-3 h-3" /> },
    { label: 'Network Mesh', value: 'network', icon: <Network className="w-3 h-3" /> },
    { label: 'Command Shell', value: 'terminal', icon: <Terminal className="w-3 h-3" /> },
  ];

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tag"
        description="Compact monospace categorization tokens supporting interactive toggling, dismissible close glyphs, multi-select tag groups, and cybernetic neon halos."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Tag, TagGroup } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Interactive Badges" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Tags render compact monospace labels with optional leading icons, interactive click states, and glowing active outlines.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-3">
  <Tag icon={<Terminal className="w-3 h-3" />} variant="neon">BASH_SHELL</Tag>
  <Tag icon={<Shield className="w-3 h-3" />} variant="neonGreen">TLS_1.3</Tag>
  <Tag icon={<Cpu className="w-3 h-3" />} variant="neonPurple">QUANTUM_CORE</Tag>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-wrap gap-3">
                <Tag icon={<Terminal className="w-3 h-3" />} variant="neon">BASH_SHELL</Tag>
                <Tag icon={<Shield className="w-3 h-3" />} variant="neonGreen">TLS_1.3</Tag>
                <Tag icon={<Cpu className="w-3 h-3" />} variant="neonPurple">QUANTUM_CORE</Tag>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Visual Variants ── */}
      <ContentSection title="Visual Variants (Neon, Purple, Green, Outline)" id="visual-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select between glowing <code className="text-cyan-400">neon</code>, <code className="text-purple-400">neonPurple</code>, <code className="text-emerald-400">neonGreen</code>, solid <code className="text-slate-300">default</code>, or transparent <code className="text-slate-400">outline</code>.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-3">
  <Tag variant="default">DEFAULT_TAG</Tag>
  <Tag variant="neon">NEON_CYAN</Tag>
  <Tag variant="neonPurple">NEON_PURPLE</Tag>
  <Tag variant="neonGreen">NEON_GREEN</Tag>
  <Tag variant="outline">OUTLINE_TAG</Tag>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-wrap gap-3">
                <Tag variant="default">DEFAULT_TAG</Tag>
                <Tag variant="neon">NEON_CYAN</Tag>
                <Tag variant="neonPurple">NEON_PURPLE</Tag>
                <Tag variant="neonGreen">NEON_GREEN</Tag>
                <Tag variant="outline">OUTLINE_TAG</Tag>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Removable Tags ── */}
      <ContentSection title="Dismissible & Removable Tags" id="removable-tags">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">removable</code> and bind <code className="text-cyan-400">onRemove</code> to display an interactive dismissal button.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-3">
  {tagsList.map((tag) => (
    <Tag
      key={tag}
      variant="neon"
      removable
      onRemove={() => setTagsList(tagsList.filter((t) => t !== tag))}
    >
      {tag}
    </Tag>
  ))}
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-wrap gap-3">
                {tagsList.map((tag) => (
                  <Tag
                    key={tag}
                    variant="neon"
                    removable
                    onRemove={() => setTagsList(tagsList.filter((t) => t !== tag))}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── TagGroup ── */}
      <ContentSection title="TagGroup Multi-Select Filter Sets" id="tag-group">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">TagGroup</code> for controlled multi-tag filtering arrays with built-in toggle mechanics.
          </p>

          <Playground
            code={`const [selectedTags, setSelectedTags] = React.useState<string[]>(['firewall', 'lattice']);

<TagGroup
  variant="neon"
  selected={selectedTags}
  onSelectionChange={setSelectedTags}
  tags={filterOptions}
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col items-center gap-4">
                <TagGroup
                  variant="neon"
                  selected={selectedTags}
                  onSelectionChange={setSelectedTags}
                  tags={filterOptions}
                />
                <span className="text-[11px] font-mono text-slate-500">
                  Active Filters: [{selectedTags.join(', ')}]
                </span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Scale & Density (sm, md, lg)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Adjust badge heights across <code className="text-cyan-400">sm (20px)</code>, <code className="text-cyan-400">md (24px)</code>, and <code className="text-cyan-400">lg (28px)</code>.
          </p>

          <Playground
            code={`<div className="flex items-end justify-center gap-4">
  <Tag size="sm" variant="neon">SM (20PX)</Tag>
  <Tag size="md" variant="neon">MD (24PX)</Tag>
  <Tag size="lg" variant="neon">LG (28PX)</Tag>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex items-end justify-center gap-4">
                <Tag size="sm" variant="neon">SM (20PX)</Tag>
                <Tag size="md" variant="neon">MD (24PX)</Tag>
                <Tag size="lg" variant="neon">LG (28PX)</Tag>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Subnet Filter Matrix ── */}
      <ContentSection title="Frosted Cyber-Glass Subnet Filter Matrix" id="frosted-glass-tags">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Compose tag filter dialogs layered on top of circuit substrate textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <span className="font-mono text-xs font-bold text-white tracking-wider">CLUSTER FILTER MATRIX</span>
      <Badge variant="glass" dot dotColor="cyan">LIVE QUERY</Badge>
    </div>

    <TagGroup
      variant="neon"
      selected={selectedTags}
      onSelectionChange={setSelectedTags}
      tags={filterOptions}
    />

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        APPLY CLUSTER FILTER
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="font-mono text-xs font-bold text-white tracking-wider">CLUSTER FILTER MATRIX</span>
                    <Badge variant="glass" dot dotColor="cyan">LIVE QUERY</Badge>
                  </div>

                  <TagGroup
                    variant="neon"
                    selected={selectedTags}
                    onSelectionChange={setSelectedTags}
                    tags={filterOptions}
                  />

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      APPLY CLUSTER FILTER
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Threat Taxonomy Deck ── */}
      <ContentSection title="Tactical HUD Threat Taxonomy Deck" id="tactical-hud-deck">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission taxonomy card with active attack vector tags.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ATTACK VECTOR TAXONOMY</CardTitle>
      <Badge variant="neon" size="sm">ELEVATED</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Identified intrusion vectors in current operational sector.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-3">
    <div className="flex flex-wrap gap-2">
      <Tag variant="neon" selected>SYN_FLOOD</Tag>
      <Tag variant="neonPurple" selected>LATTICE_INJECTION</Tag>
      <Tag variant="neonGreen">ZERO_DAY_QUARANTINED</Tag>
      <Tag variant="outline">PORT_8443</Tag>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ATTACK VECTOR TAXONOMY</CardTitle>
                    <Badge variant="neon" size="sm">ELEVATED</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Identified intrusion vectors in current operational sector.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="neon" selected>SYN_FLOOD</Tag>
                    <Tag variant="neonPurple" selected>LATTICE_INJECTION</Tag>
                    <Tag variant="neonGreen">ZERO_DAY_QUARANTINED</Tag>
                    <Tag variant="outline">PORT_8443</Tag>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'variant',
              description: 'Visual color fill and glowing laser perimeter style.',
              type: '"default" | "neon" | "neonPurple" | "neonGreen" | "outline"',
              defaultValue: '"default"',
            },
            {
              property: 'size',
              description: 'Physical badge height ("sm" = 20px, "md" = 24px, "lg" = 28px).',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'selected',
              description: 'Applies active filled background and illuminated glow shadow.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'removable',
              description: 'Renders an interactive "X" dismiss button on the right edge.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'onRemove',
              description: 'Callback fired when the user clicks the dismiss button.',
              type: '() => void',
            },
            {
              property: 'icon',
              description: 'Optional ReactNode icon element preceding the label.',
              type: 'React.ReactNode',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Interactive Roles:</strong> When an <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">onClick</code> handler is bound, the tag automatically receives <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;button&quot;</code>, keyboard Space/Enter listeners, and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-pressed</code>.
          </li>
          <li>
            <strong>Dismiss Button:</strong> The remove icon contains an explicit <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label=&quot;Remove tag&quot;</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Tags vs Badges:</strong> Use <code className="text-cyan-400">Tag</code> when items are selectable, removable, or represent interactive metadata filters; use <code className="text-cyan-400">Badge</code> for static status pills.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
