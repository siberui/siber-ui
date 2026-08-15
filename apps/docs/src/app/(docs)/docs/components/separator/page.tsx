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
  Separator,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  BorderBeam,
} from '@siberui/react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Horizontal & Vertical Anatomy', level: 2 },
  { id: 'variants', text: 'Variants (Signal Laser, Neon Glow, Subtle Hairline)', level: 2 },
  { id: 'toolbar-dividers', text: 'Toolbar & Monospace Header Dividers', level: 2 },
  { id: 'frosted-glass-separator', text: 'Frosted Cyber-Glass Partition Card', level: 2 },
  { id: 'tactical-hud-divider', text: 'Tactical HUD Telemetry Partition Deck', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function SeparatorDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Separator"
        description="Radix UI-backed divider primitives featuring 1px laser signal wires, neon glow halos, and directional gradient fades in horizontal and vertical orientations."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Separator } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Horizontal & Vertical Anatomy" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Separators provide structural visual partitioning between distinct sections and metric groups.
          </p>

          <Playground
            code={`<div className="w-full max-w-sm p-6 rounded-2xl border border-white/[0.06] bg-[#050811] space-y-4">
  <div className="space-y-1">
    <h4 className="text-sm font-bold text-white">ORBITAL GATEWAY LOGS</h4>
    <p className="text-xs text-slate-400">Past 24 hours incident telemetry.</p>
  </div>
  <Separator />
  <div className="flex h-5 items-center justify-between text-xs font-mono text-slate-300">
    <span>AUTH</span>
    <Separator orientation="vertical" />
    <span>EGRESS</span>
    <Separator orientation="vertical" />
    <span>FIREWALL</span>
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="w-full max-w-sm p-6 rounded-2xl border border-white/[0.06] bg-[#050811] space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">ORBITAL GATEWAY LOGS</h4>
                  <p className="text-xs text-slate-400">Past 24 hours incident telemetry.</p>
                </div>
                <Separator />
                <div className="flex h-5 items-center justify-between text-xs font-mono text-slate-300">
                  <span>AUTH</span>
                  <Separator orientation="vertical" />
                  <span>EGRESS</span>
                  <Separator orientation="vertical" />
                  <span>FIREWALL</span>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Variants ── */}
      <ContentSection title="Variants (Signal Laser, Neon Glow, Subtle Hairline)" id="variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select between <code className="text-cyan-400">signal</code> (laser wire fade), <code className="text-cyan-400">glow</code> (illuminated neon beam), <code className="text-slate-300">gradient</code> (neutral glass gradient), <code className="text-slate-400">default</code>, or <code className="text-slate-500">subtle</code>.
          </p>

          <Playground
            code={`<div className="space-y-6 w-full max-w-md">
  <div>
    <span className="text-xs font-mono text-cyan-400 mb-2 block">SIGNAL LASER WIRE</span>
    <Separator variant="signal" />
  </div>

  <div>
    <span className="text-xs font-mono text-cyan-300 mb-2 block">NEON GLOW BEAM</span>
    <Separator variant="glow" />
  </div>

  <div>
    <span className="text-xs font-mono text-slate-400 mb-2 block">GRADIENT FADE</span>
    <Separator variant="gradient" />
  </div>

  <div>
    <span className="text-xs font-mono text-slate-500 mb-2 block">SUBTLE HAIRLINE</span>
    <Separator variant="subtle" />
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="space-y-6 w-full max-w-md">
                <div>
                  <span className="text-xs font-mono text-cyan-400 mb-2 block">SIGNAL LASER WIRE</span>
                  <Separator variant="signal" />
                </div>

                <div>
                  <span className="text-xs font-mono text-cyan-300 mb-2 block">NEON GLOW BEAM</span>
                  <Separator variant="glow" />
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 mb-2 block">GRADIENT FADE</span>
                  <Separator variant="gradient" />
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-500 mb-2 block">SUBTLE HAIRLINE</span>
                  <Separator variant="subtle" />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Toolbar Dividers ── */}
      <ContentSection title="Toolbar & Monospace Header Dividers" id="toolbar-dividers">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use vertical signal separators inside action bars and metric toolbars.
          </p>

          <Playground
            code={`<div className="flex items-center gap-4 p-4 rounded-xl bg-[#050811] border border-white/[0.06] w-full max-w-md">
  <span className="text-xs font-mono font-bold text-cyan-400">NODE_01</span>
  <Separator orientation="vertical" variant="signal" className="h-6" />
  <span className="text-xs font-mono text-slate-300">UPTIME: 99.98%</span>
  <Separator orientation="vertical" variant="signal" className="h-6" />
  <Badge variant="neon" size="sm">ACTIVE</Badge>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#050811] border border-white/[0.06] w-full max-w-md">
                <span className="text-xs font-mono font-bold text-cyan-400">NODE_01</span>
                <Separator orientation="vertical" variant="signal" className="h-6" />
                <span className="text-xs font-mono text-slate-300">UPTIME: 99.98%</span>
                <Separator orientation="vertical" variant="signal" className="h-6" />
                <Badge variant="neon" size="sm">ACTIVE</Badge>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Partition Card ── */}
      <ContentSection title="Frosted Cyber-Glass Partition Card" id="frosted-glass-separator">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layer glowing separators inside acrylic glass dialogs on circuit textures with perimeter beam sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden space-y-4">
  <div className="relative z-10 flex items-center justify-between">
    <span className="font-mono text-xs font-bold text-white tracking-wider">CYBER LATTICE PARTITION</span>
    <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
  </div>

  <Separator variant="signal" className="relative z-10" />

  <p className="relative z-10 text-xs font-mono text-slate-300">
    Partition 0x48: Isolated air-gapped cryptographic enclave active.
  </p>

  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden space-y-4">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white tracking-wider">CYBER LATTICE PARTITION</span>
                  <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
                </div>

                <Separator variant="signal" className="relative z-10" />

                <p className="relative z-10 text-xs font-mono text-slate-300">
                  Partition 0x48: Isolated air-gapped cryptographic enclave active.
                </p>

                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Partition Deck ── */}
      <ContentSection title="Tactical HUD Telemetry Partition Deck" id="tactical-hud-divider">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with segmented telemetry tiers.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DEFENSE TELEMETRY TIERS</CardTitle>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </div>
  </CardHeader>

  <Separator variant="signal" />

  <CardContent className="p-6 space-y-4 font-mono text-xs">
    <div className="flex justify-between">
      <span className="text-slate-400">TIER 01: SATELLITE ORBIT</span>
      <span className="text-cyan-400 font-bold">LOCKED</span>
    </div>
    <Separator variant="subtle" />
    <div className="flex justify-between">
      <span className="text-slate-400">TIER 02: GROUND RELAYS</span>
      <span className="text-emerald-400 font-bold">100% ONLINE</span>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DEFENSE TELEMETRY TIERS</CardTitle>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </div>
                </CardHeader>

                <Separator variant="signal" />

                <CardContent className="p-6 space-y-4 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">TIER 01: SATELLITE ORBIT</span>
                    <span className="text-cyan-400 font-bold">LOCKED</span>
                  </div>
                  <Separator variant="subtle" />
                  <div className="flex justify-between">
                    <span className="text-slate-400">TIER 02: GROUND RELAYS</span>
                    <span className="text-emerald-400 font-bold">100% ONLINE</span>
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
              description: 'Visual gradient or glow styling.',
              type: '"default" | "subtle" | "signal" | "glow" | "gradient"',
              defaultValue: '"default"',
            },
            {
              property: 'orientation',
              description: 'Physical layout direction.',
              type: '"horizontal" | "vertical"',
              defaultValue: '"horizontal"',
            },
            {
              property: 'decorative',
              description: 'Whether the element is purely visual (renders aria-hidden).',
              type: 'boolean',
              defaultValue: 'true',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>W3C WAI-ARIA Separator:</strong> Built on Radix UI Separator Primitive. Defaults to <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">decorative=&#123;true&#125;</code> for purely cosmetic dividers.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Signal Lines:</strong> Use <code className="text-cyan-400">variant=&quot;signal&quot;</code> to establish high-impact structural breaks between major section headers and card bodies.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
