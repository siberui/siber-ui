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
  Spinner,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
// No extra lucide icons needed in spinner page

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Status Labels', level: 2 },
  { id: 'cyberpunk-variants', text: 'Cyberpunk Signal Variants (Neon, Purple, Rose)', level: 2 },
  { id: 'sizes', text: 'Scale & Dimensions (sm, md, lg, xl)', level: 2 },
  { id: 'frosted-glass-loader', text: 'Frosted Cyber-Glass Decryption Panel', level: 2 },
  { id: 'tactical-hud-sync', text: 'Tactical HUD Telemetry Sync Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function SpinnerDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Spinner"
        description="High-velocity orbital loading spinners featuring concentric halo pulses, scanner heads, and uppercase monospace status labels."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Spinner } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Status Labels" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pair with <code className="text-cyan-400">showLabel</code> and <code className="text-cyan-400">label</code> to provide real-time textual feedback alongside the spinning loader.
          </p>

          <Playground
            code={`<div className="flex items-center justify-center gap-12">
  <Spinner variant="neon" size="lg" showLabel label="INITIALIZING QUANTUM CORE..." />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Spinner variant="neon" size="lg" showLabel label="INITIALIZING QUANTUM CORE..." />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Cyberpunk Variants ── */}
      <ContentSection title="Cyberpunk Signal Variants (Neon, Purple, Rose)" id="cyberpunk-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Neon variants feature an animated concentric expanding radar ping that pulses outward with the spinner head.
          </p>

          <Playground
            code={`<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
  <div className="flex flex-col items-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <Spinner variant="default" size="lg" showLabel label="IDLE STREAM" />
  </div>

  <div className="flex flex-col items-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <Spinner variant="neon" size="lg" showLabel label="DECRYPTING" />
  </div>

  <div className="flex flex-col items-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <Spinner variant="neonPurple" size="lg" showLabel label="LATTICE SYNC" />
  </div>

  <div className="flex flex-col items-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <Spinner variant="destructive" size="lg" showLabel label="PURGING LOGS" />
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl">
                <div className="flex flex-col items-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <Spinner variant="default" size="lg" showLabel label="IDLE STREAM" />
                </div>

                <div className="flex flex-col items-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <Spinner variant="neon" size="lg" showLabel label="DECRYPTING" />
                </div>

                <div className="flex flex-col items-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <Spinner variant="neonPurple" size="lg" showLabel label="LATTICE SYNC" />
                </div>

                <div className="flex flex-col items-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <Spinner variant="destructive" size="lg" showLabel label="PURGING LOGS" />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Scale & Dimensions (sm, md, lg, xl)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Scale dimensions across <code className="text-cyan-400">sm (16px)</code>, <code className="text-cyan-400">md (24px)</code>, <code className="text-cyan-400">lg (32px)</code>, and <code className="text-cyan-400">xl (48px)</code>.
          </p>

          <Playground
            code={`<div className="flex items-end justify-center gap-10">
  <div className="flex flex-col items-center gap-2">
    <Spinner size="sm" variant="neon" />
    <span className="text-[10px] font-mono text-slate-500">SM (16px)</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner size="md" variant="neon" />
    <span className="text-[10px] font-mono text-slate-500">MD (24px)</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner size="lg" variant="neon" />
    <span className="text-[10px] font-mono text-slate-500">LG (32px)</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner size="xl" variant="neon" />
    <span className="text-[10px] font-mono text-slate-500">XL (48px)</span>
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex items-end justify-center gap-10">
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="sm" variant="neon" />
                  <span className="text-[10px] font-mono text-slate-500">SM (16px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="md" variant="neon" />
                  <span className="text-[10px] font-mono text-slate-500">MD (24px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="lg" variant="neon" />
                  <span className="text-[10px] font-mono text-slate-500">LG (32px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="xl" variant="neon" />
                  <span className="text-[10px] font-mono text-slate-500">XL (48px)</span>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Decryption Panel ── */}
      <ContentSection title="Frosted Cyber-Glass Decryption Panel" id="frosted-glass-loader">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Embed pulsing loaders inside acrylic cards overlaid on circuit substrate grids.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center min-h-[260px] text-center">
  <div className="relative z-10 space-y-4 flex flex-col items-center">
    <Spinner size="xl" variant="neon" />
    <div className="space-y-1">
      <h4 className="text-sm font-mono font-bold text-white tracking-wider">RESOLVING SATELLITE HANDSHAKE</h4>
      <p className="text-xs text-slate-400">Authenticating orbital transponder signature...</p>
    </div>
    <Badge variant="glass" dot dotColor="cyan">CONNECTING</Badge>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center min-h-[260px] text-center">
                <div className="relative z-10 space-y-4 flex flex-col items-center">
                  <Spinner size="xl" variant="neon" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-mono font-bold text-white tracking-wider">RESOLVING SATELLITE HANDSHAKE</h4>
                    <p className="text-xs text-slate-400">Authenticating orbital transponder signature...</p>
                  </div>
                  <Badge variant="glass" dot dotColor="cyan">CONNECTING</Badge>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Sync Card ── */}
      <ContentSection title="Tactical HUD Telemetry Sync Card" id="tactical-hud-sync">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite dashboard card featuring inline button spinners and state sync indicators.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">CLUSTER SYNCHRONIZATION</CardTitle>
      <Badge variant="neon" size="sm">SYNCING</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Replicating distributed database journals to edge replicas.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 flex flex-col items-center gap-6">
    <Spinner size="lg" variant="neon" showLabel label="REPLICATING WAL LOGS (84/100)..." />

    <div className="flex w-full justify-end gap-3 pt-2">
      <Button variant="secondary" size="sm">ABORT</Button>
      <Button variant="neon" size="sm" glow disabled className="gap-2">
        <Spinner size="sm" variant="neon" />
        SYNCING
      </Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">CLUSTER SYNCHRONIZATION</CardTitle>
                    <Badge variant="neon" size="sm">SYNCING</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Replicating distributed database journals to edge replicas.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 flex flex-col items-center gap-6">
                  <Spinner size="lg" variant="neon" showLabel label="REPLICATING WAL LOGS (84/100)..." />

                  <div className="flex w-full justify-end gap-3 pt-2">
                    <Button variant="secondary" size="sm">ABORT</Button>
                    <Button variant="neon" size="sm" glow disabled className="gap-2">
                      <Spinner size="sm" variant="neon" />
                      SYNCING
                    </Button>
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
              property: 'size',
              description: 'Physical dimension of the spinner glyph.',
              type: '"sm" | "md" | "lg" | "xl"',
              defaultValue: '"md"',
            },
            {
              property: 'variant',
              description: 'Color theme and radar halo ping style.',
              type: '"default" | "neon" | "neonPurple" | "destructive"',
              defaultValue: '"default"',
            },
            {
              property: 'label',
              description: 'Screen reader announcement text and visible label string.',
              type: 'string',
              defaultValue: '"Loading..."',
            },
            {
              property: 'showLabel',
              description: 'When true, renders the label text beneath the spinner glyph in monospace uppercase.',
              type: 'boolean',
              defaultValue: 'false',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Role Status:</strong> The spinner wrapper attaches <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;status&quot;</code> with an accessible <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;span className=&quot;sr-only&quot;&gt;</code> containing the <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">label</code> text.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Inline Actions:</strong> For buttons during async submit, use <code className="text-cyan-400">size=&quot;sm&quot;</code> placed directly to the left of the button label.
          </li>
          <li>
            <strong>Page-Level Loading:</strong> For full screen or card view loaders, use <code className="text-cyan-400">size=&quot;xl&quot;</code> combined with <code className="text-cyan-400">showLabel</code>.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
