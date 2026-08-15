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
  SimpleTooltip,
  Button,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@siberui/react';
import {
  Shield,
  Zap,
  Cpu,
  Radio,
  Lock,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & SimpleTooltip Convenience', level: 2 },
  { id: 'variants', text: 'Visual Variants (Neon Cyan, Neon Purple, Destructive)', level: 2 },
  { id: 'directions', text: 'Directional Placements (Top, Bottom, Left, Right)', level: 2 },
  { id: 'frosted-glass-tooltip', text: 'Frosted Cyber-Glass Tooltip Trigger', level: 2 },
  { id: 'tactical-hud-deck', text: 'Tactical HUD Telemetry Icon Deck', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function TooltipDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tooltip"
        description="Radix UI floating micro-callouts providing immediate contextual telemetry, hotkey hints, and security notes upon keyboard focus or cursor hover."
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
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider, 
  SimpleTooltip 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & SimpleTooltip Convenience" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">SimpleTooltip</code> for instantaneous one-line wrapping, or compose multi-element triggers with <code className="text-cyan-400">Tooltip</code> primitives.
          </p>

          <Playground
            code={`<div className="flex items-center justify-center gap-4">
  <SimpleTooltip label="Inspect quantum node details">
    <Button variant="secondary">HOVER OVER NODE</Button>
  </SimpleTooltip>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[140px]">
              <SimpleTooltip label="Inspect quantum node details">
                <Button variant="secondary">HOVER OVER NODE</Button>
              </SimpleTooltip>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Variants ── */}
      <ContentSection title="Visual Variants (Neon Cyan, Neon Purple, Destructive)" id="variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Choose between <code className="text-cyan-400">neon</code> (Cyan), <code className="text-purple-400">neonPurple</code> (Purple), <code className="text-rose-400">destructive</code> (Rose), or <code className="text-slate-300">default</code>.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-6 items-center justify-center">
  <SimpleTooltip variant="neon" label="SYSLOG STREAM ACTIVE">
    <Button variant="neon" size="icon">
      <Zap className="h-4 w-4" />
    </Button>
  </SimpleTooltip>

  <SimpleTooltip variant="neonPurple" label="QUANTUM LATTICE READY">
    <Button variant="outline" size="icon" className="border-purple-500/30 text-purple-400">
      <Cpu className="h-4 w-4" />
    </Button>
  </SimpleTooltip>

  <SimpleTooltip variant="destructive" label="RESTRICTED: AIRGAP ENCLAVE">
    <Button variant="destructive" size="icon">
      <Lock className="h-4 w-4" />
    </Button>
  </SimpleTooltip>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-h-[140px]">
              <div className="flex flex-wrap gap-6 items-center justify-center">
                <SimpleTooltip variant="neon" label="SYSLOG STREAM ACTIVE">
                  <Button variant="neon" size="icon">
                    <Zap className="h-4 w-4" />
                  </Button>
                </SimpleTooltip>

                <SimpleTooltip variant="neonPurple" label="QUANTUM LATTICE READY">
                  <Button variant="outline" size="icon" className="border-purple-500/30 text-purple-400">
                    <Cpu className="h-4 w-4" />
                  </Button>
                </SimpleTooltip>

                <SimpleTooltip variant="destructive" label="RESTRICTED: AIRGAP ENCLAVE">
                  <Button variant="destructive" size="icon">
                    <Lock className="h-4 w-4" />
                  </Button>
                </SimpleTooltip>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Directions ── */}
      <ContentSection title="Directional Placements (Top, Bottom, Left, Right)" id="directions">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Position tooltips along any cardinal orientation using the <code className="text-cyan-400">side</code> prop.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center justify-center">
  <SimpleTooltip side="top" variant="neon" label="TOP CALLOUT">
    <Button variant="secondary" size="sm">TOP</Button>
  </SimpleTooltip>
  <SimpleTooltip side="bottom" variant="neon" label="BOTTOM CALLOUT">
    <Button variant="secondary" size="sm">BOTTOM</Button>
  </SimpleTooltip>
  <SimpleTooltip side="left" variant="neon" label="LEFT CALLOUT">
    <Button variant="secondary" size="sm">LEFT</Button>
  </SimpleTooltip>
  <SimpleTooltip side="right" variant="neon" label="RIGHT CALLOUT">
    <Button variant="secondary" size="sm">RIGHT</Button>
  </SimpleTooltip>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[140px]">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <SimpleTooltip side="top" variant="neon" label="TOP CALLOUT">
                  <Button variant="secondary" size="sm">TOP</Button>
                </SimpleTooltip>
                <SimpleTooltip side="bottom" variant="neon" label="BOTTOM CALLOUT">
                  <Button variant="secondary" size="sm">BOTTOM</Button>
                </SimpleTooltip>
                <SimpleTooltip side="left" variant="neon" label="LEFT CALLOUT">
                  <Button variant="secondary" size="sm">LEFT</Button>
                </SimpleTooltip>
                <SimpleTooltip side="right" variant="neon" label="RIGHT CALLOUT">
                  <Button variant="secondary" size="sm">RIGHT</Button>
                </SimpleTooltip>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Tooltip Trigger ── */}
      <ContentSection title="Frosted Cyber-Glass Tooltip Trigger" id="frosted-glass-tooltip">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layer tooltips over frosted acrylic glass substrates with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
  <SimpleTooltip variant="neon" label="CIRCUIT MESH: 100% NOMINAL">
    <Button variant="glass" leftIcon={<Radio className="h-4 w-4 text-cyan-400" />}>
      INSPECT CIRCUIT SUBSTRATE
    </Button>
  </SimpleTooltip>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full min-h-[160px]">
              <div className="relative z-10">
                <SimpleTooltip variant="neon" label="CIRCUIT MESH: 100% NOMINAL">
                  <Button variant="glass" leftIcon={<Radio className="h-4 w-4 text-cyan-400" />}>
                    INSPECT CIRCUIT SUBSTRATE
                  </Button>
                </SimpleTooltip>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Icon Deck ── */}
      <ContentSection title="Tactical HUD Telemetry Icon Deck" id="tactical-hud-deck">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with icon toolbars.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SENSOR SUITE CONTROL</CardTitle>
      <Badge variant="neon" size="sm">ONLINE</Badge>
    </div>
  </CardHeader>

  <CardContent className="p-6 flex justify-around">
    <SimpleTooltip variant="neon" label="OPTICAL SENSOR [ACTIVE]">
      <Button variant="ghost" size="icon"><Radio className="h-4 w-4 text-cyan-400" /></Button>
    </SimpleTooltip>
    <SimpleTooltip variant="neon" label="QUANTUM ENCLAVE [ARMED]">
      <Button variant="ghost" size="icon"><Shield className="h-4 w-4 text-emerald-400" /></Button>
    </SimpleTooltip>
    <SimpleTooltip variant="destructive" label="TERMINATE LINK [CAUTION]">
      <Button variant="ghost" size="icon"><Lock className="h-4 w-4 text-rose-400" /></Button>
    </SimpleTooltip>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[160px]">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SENSOR SUITE CONTROL</CardTitle>
                    <Badge variant="neon" size="sm">ONLINE</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex justify-around">
                  <SimpleTooltip variant="neon" label="OPTICAL SENSOR [ACTIVE]">
                    <Button variant="ghost" size="icon"><Radio className="h-4 w-4 text-cyan-400" /></Button>
                  </SimpleTooltip>
                  <SimpleTooltip variant="neon" label="QUANTUM ENCLAVE [ARMED]">
                    <Button variant="ghost" size="icon"><Shield className="h-4 w-4 text-emerald-400" /></Button>
                  </SimpleTooltip>
                  <SimpleTooltip variant="destructive" label="TERMINATE LINK [CAUTION]">
                    <Button variant="ghost" size="icon"><Lock className="h-4 w-4 text-rose-400" /></Button>
                  </SimpleTooltip>
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
              property: 'label',
              description: 'Text string or ReactNode to display within the tooltip callout.',
              type: 'React.ReactNode',
            },
            {
              property: 'variant',
              description: 'Visual color styling and glow theme.',
              type: '"default" | "neon" | "neonPurple" | "destructive"',
              defaultValue: '"default"',
            },
            {
              property: 'side',
              description: 'Preferred orientation relative to trigger anchor.',
              type: '"top" | "right" | "bottom" | "left"',
              defaultValue: '"top"',
            },
            {
              property: 'showArrow',
              description: 'Whether to render the pointing directional arrow glyph.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'delayDuration',
              description: 'Delay in milliseconds before the tooltip appears.',
              type: 'number',
              defaultValue: '400',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Tooltip:</strong> Triggers receive <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-describedby</code> pointing automatically to the generated tooltip identifier.
          </li>
          <li>
            <strong>Focus & Hover:</strong> Displays on both mouse hover and keyboard Tab focus.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Icon Buttons:</strong> Always provide tooltips on icon-only buttons to convey their action to sighted and assistive users.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
