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
  ToggleGroup,
  ToggleGroupItem,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@siberui/react';
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'single-selection', text: 'Single Selection (Mutually Exclusive)', level: 2 },
  { id: 'multiple-selection', text: 'Multiple Selection (Multi-Select Matrix)', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Toggle Group', level: 2 },
  { id: 'sizes', text: 'Size Spectrum (Small, Medium, Large)', level: 2 },
  { id: 'frosted-glass-toggle', text: 'Frosted Cyber-Glass Subnet Selector', level: 2 },
  { id: 'tactical-hud-deck', text: 'Tactical HUD Laser Frequency Selector Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ToggleGroupDocsPage() {
  const [selectedFeed, setSelectedFeed] = React.useState('sat1');

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Toggle Group"
        description="Radix UI-backed segmented controls and toggle button matrices supporting single mutually-exclusive or multi-select state models."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock
          code={`import { 
  ToggleGroup, 
  ToggleGroupItem 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Single Selection ── */}
      <ContentSection title="Single Selection (Mutually Exclusive)" id="single-selection">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            With <code className="text-cyan-400">type=&quot;single&quot;</code>, only one item can be active at a time, acting like an illuminated segmented radio pill.
          </p>

          <Playground
            code={`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Left align">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center align">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right align">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[140px]">
              <ToggleGroup type="single" defaultValue="center">
                <ToggleGroupItem value="left" aria-label="Left align">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Center align">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Right align">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Multiple Selection ── */}
      <ContentSection title="Multiple Selection (Multi-Select Matrix)" id="multiple-selection">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Set <code className="text-cyan-400">type=&quot;multiple&quot;</code> to allow simultaneous active toggles, ideal for sensor overlays and text styling.
          </p>

          <Playground
            code={`<ToggleGroup type="multiple" defaultValue={['bold', 'underline']}>
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[140px]">
              <ToggleGroup type="multiple" defaultValue={['bold', 'underline']}>
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Toggle Group" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> for cyan laser border halos, glowing active states, and monospace labels.
          </p>

          <Playground
            code={`<ToggleGroup variant="neon" type="single" value={selectedFeed} onValueChange={(val) => val && setSelectedFeed(val)}>
  <ToggleGroupItem value="sat1">SAT_01</ToggleGroupItem>
  <ToggleGroupItem value="sat2">SAT_02</ToggleGroupItem>
  <ToggleGroupItem value="sat3">SAT_03</ToggleGroupItem>
</ToggleGroup>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-h-[140px]">
              <ToggleGroup variant="neon" type="single" value={selectedFeed} onValueChange={(val) => val && setSelectedFeed(val)}>
                <ToggleGroupItem value="sat1">SAT_01</ToggleGroupItem>
                <ToggleGroupItem value="sat2">SAT_02</ToggleGroupItem>
                <ToggleGroupItem value="sat3">SAT_03</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Size Spectrum (Small, Medium, Large)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Configure button height and typography via <code className="text-cyan-400">size=&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4 items-center justify-center">
  {/* Small */}
  <ToggleGroup size="sm" variant="outline" type="single" defaultValue="1">
    <ToggleGroupItem value="1">SM 1</ToggleGroupItem>
    <ToggleGroupItem value="2">SM 2</ToggleGroupItem>
  </ToggleGroup>

  {/* Medium */}
  <ToggleGroup size="md" variant="outline" type="single" defaultValue="1">
    <ToggleGroupItem value="1">MD 1</ToggleGroupItem>
    <ToggleGroupItem value="2">MD 2</ToggleGroupItem>
  </ToggleGroup>

  {/* Large */}
  <ToggleGroup size="lg" variant="outline" type="single" defaultValue="1">
    <ToggleGroupItem value="1">LG 1</ToggleGroupItem>
    <ToggleGroupItem value="2">LG 2</ToggleGroupItem>
  </ToggleGroup>
</div>`}
          >
            <div className="flex flex-col gap-4 items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <ToggleGroup size="sm" variant="outline" type="single" defaultValue="1">
                <ToggleGroupItem value="1">SM 1</ToggleGroupItem>
                <ToggleGroupItem value="2">SM 2</ToggleGroupItem>
              </ToggleGroup>

              <ToggleGroup size="md" variant="outline" type="single" defaultValue="1">
                <ToggleGroupItem value="1">MD 1</ToggleGroupItem>
                <ToggleGroupItem value="2">MD 2</ToggleGroupItem>
              </ToggleGroup>

              <ToggleGroup size="lg" variant="outline" type="single" defaultValue="1">
                <ToggleGroupItem value="1">LG 1</ToggleGroupItem>
                <ToggleGroupItem value="2">LG 2</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Subnet Selector ── */}
      <ContentSection title="Frosted Cyber-Glass Subnet Selector" id="frosted-glass-toggle">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layer toggle button matrices over circuit substrates with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center space-y-4">
  <span className="font-mono text-xs font-bold text-white tracking-wider">ACTIVE TELEMETRY SENSORS</span>
  <ToggleGroup variant="glass" type="multiple" defaultValue={['opt', 'rf']}>
    <ToggleGroupItem value="opt">OPTICAL</ToggleGroupItem>
    <ToggleGroupItem value="rf">RADIO RF</ToggleGroupItem>
    <ToggleGroupItem value="mag">MAGNETIC</ToggleGroupItem>
  </ToggleGroup>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <span className="font-mono text-xs font-bold text-white tracking-wider">ACTIVE TELEMETRY SENSORS</span>
                <ToggleGroup variant="glass" type="multiple" defaultValue={['opt', 'rf']}>
                  <ToggleGroupItem value="opt">OPTICAL</ToggleGroupItem>
                  <ToggleGroupItem value="rf">RADIO RF</ToggleGroupItem>
                  <ToggleGroupItem value="mag">MAGNETIC</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Laser Frequency Selector Card ── */}
      <ContentSection title="Tactical HUD Laser Frequency Selector Card" id="tactical-hud-deck">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with integrated frequency channel toggles.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">CARRIER BAND CHANNEL</CardTitle>
      <Badge variant="neon" size="sm">LOCKED</Badge>
    </div>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <ToggleGroup variant="neon" type="single" defaultValue="ghz5">
      <ToggleGroupItem value="ghz2" className="flex-1">2.4 GHz</ToggleGroupItem>
      <ToggleGroupItem value="ghz5" className="flex-1">5.8 GHz</ToggleGroupItem>
      <ToggleGroupItem value="ghz60" className="flex-1">60 GHz</ToggleGroupItem>
    </ToggleGroup>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">CARRIER BAND CHANNEL</CardTitle>
                    <Badge variant="neon" size="sm">LOCKED</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <ToggleGroup variant="neon" type="single" defaultValue="ghz5" className="w-full flex">
                    <ToggleGroupItem value="ghz2" className="flex-1">2.4 GHz</ToggleGroupItem>
                    <ToggleGroupItem value="ghz5" className="flex-1">5.8 GHz</ToggleGroupItem>
                    <ToggleGroupItem value="ghz60" className="flex-1">60 GHz</ToggleGroupItem>
                  </ToggleGroup>
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
              property: 'type',
              description: 'Selection model ("single" or "multiple").',
              type: '"single" | "multiple"',
            },
            {
              property: 'variant',
              description: 'Visual styling theme ("default", "outline", "neon", "glass").',
              type: '"default" | "outline" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'size',
              description: 'Button size dimension ("sm", "md", "lg").',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'value',
              description: 'Controlled active value (string for single, string[] for multiple).',
              type: 'string | string[]',
            },
            {
              property: 'onValueChange',
              description: 'Callback when active value changes.',
              type: '(value: any) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>W3C WAI-ARIA Toggle Button:</strong> Single groups output <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;radiogroup&quot;</code>, multiple groups output <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;group&quot;</code> with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-pressed</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Icon Accessibility:</strong> When using icon-only items, always provide <code className="text-cyan-400">aria-label</code> on each <code className="text-cyan-400">ToggleGroupItem</code>.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
