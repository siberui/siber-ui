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
  SignalBorder,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
// No extra lucide icons needed in signal-border page

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Gradient Edge Primitive', level: 2 },
  { id: 'signal-spectrum', text: 'Signal Spectrum (Cyan, Violet, Green, Amber, Rose)', level: 2 },
  { id: 'frosted-glass-border', text: 'Frosted Cyber-Glass Laser Perimeter Card', level: 2 },
  { id: 'tactical-hud-instrument', text: 'Tactical HUD Telemetry Instrument Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

const signalList = ['cyan', 'violet', 'green', 'amber', 'rose'] as const;

export default function SignalBorderDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Signal Border"
        description="Instrumented surface boundary primitive featuring a precise 1px gradient edge that seamlessly transitions from active signal colors to transparent glass."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { SignalBorder } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Gradient Edge Primitive" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            SignalBorder projects a delicate 1px directional laser gradient across container boundaries without heavy box-shadow halos.
          </p>

          <Playground
            code={`<SignalBorder signal="cyan" className="max-w-md w-full rounded-2xl bg-[#070b14] p-6 space-y-2">
  <div className="flex items-center justify-between">
    <span className="font-mono text-xs font-bold text-cyan-400">INSTRUMENTED CORE</span>
    <Badge variant="neon" size="sm">ACTIVE</Badge>
  </div>
  <p className="text-xs text-slate-400 leading-relaxed">
    Clean 1px laser gradient fade providing high-tech surface instrumentation.
  </p>
</SignalBorder>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <SignalBorder signal="cyan" className="max-w-md w-full rounded-2xl bg-[#070b14] p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-cyan-400">INSTRUMENTED CORE</span>
                  <Badge variant="neon" size="sm">ACTIVE</Badge>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clean 1px laser gradient fade providing high-tech surface instrumentation.
                </p>
              </SignalBorder>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Spectrum ── */}
      <ContentSection title="Signal Spectrum (Cyan, Violet, Green, Amber, Rose)" id="signal-spectrum">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Available across all Siber UI semantic signal tokens: <code className="text-cyan-400">cyan</code>, <code className="text-purple-400">violet</code>, <code className="text-emerald-400">green</code>, <code className="text-amber-400">amber</code>, and <code className="text-rose-400">rose</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
  {(['cyan', 'violet', 'green', 'amber', 'rose'] as const).map((sig) => (
    <SignalBorder
      key={sig}
      signal={sig}
      className="p-5 rounded-xl bg-[#070b14] flex flex-col items-center justify-center min-h-[90px]"
    >
      <span className="font-mono text-xs uppercase text-slate-300">
        SIGNAL: {sig}
      </span>
    </SignalBorder>
  ))}
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
                {signalList.map((sig) => (
                  <SignalBorder
                    key={sig}
                    signal={sig}
                    className="p-5 rounded-xl bg-[#070b14] flex flex-col items-center justify-center min-h-[90px]"
                  >
                    <span className="font-mono text-xs uppercase text-slate-300">
                      SIGNAL: {sig}
                    </span>
                  </SignalBorder>
                ))}
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Laser Perimeter Card ── */}
      <ContentSection title="Frosted Cyber-Glass Laser Perimeter Card" id="frosted-glass-border">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Combine SignalBorder with acrylic backdrops on circuit textures and dynamic border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <SignalBorder signal="cyan" className="relative z-10 p-6 rounded-xl bg-black/40 space-y-4">
    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
      <span className="font-mono text-xs font-bold text-white">QUANTUM OPTICAL LINK</span>
      <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
    </div>
    <p className="text-xs text-slate-300 leading-relaxed font-mono">
      Photonic packet carrier modulation: 100 THz
    </p>
  </SignalBorder>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <SignalBorder signal="cyan" className="relative z-10 p-6 rounded-xl bg-black/40 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <span className="font-mono text-xs font-bold text-white">QUANTUM OPTICAL LINK</span>
                    <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    Photonic packet carrier modulation: 100 THz
                  </p>
                </SignalBorder>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Instrument Card ── */}
      <ContentSection title="Tactical HUD Telemetry Instrument Card" id="tactical-hud-instrument">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded signal borders.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DEFENSE FIREWALL ENCLAVE</CardTitle>
      <Badge variant="neon" size="sm">NOMINAL</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Zero-trust perimeter telemetry container.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <SignalBorder signal="cyan" className="p-5 rounded-xl bg-[#040711] space-y-3">
      <span className="font-mono text-xs text-cyan-300 block font-bold">STATE: ISOLATED_SUBGRAPH</span>
      <p className="text-xs text-slate-400 font-mono">Quarantine tunnel active on port 8443</p>
      <Button variant="neon" size="sm" glow className="w-full">PURGE QUARANTINE</Button>
    </SignalBorder>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DEFENSE FIREWALL ENCLAVE</CardTitle>
                    <Badge variant="neon" size="sm">NOMINAL</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Zero-trust perimeter telemetry container.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <SignalBorder signal="cyan" className="p-5 rounded-xl bg-[#040711] space-y-3">
                    <span className="font-mono text-xs text-cyan-300 block font-bold">STATE: ISOLATED_SUBGRAPH</span>
                    <p className="text-xs text-slate-400 font-mono">Quarantine tunnel active on port 8443</p>
                    <Button variant="neon" size="sm" glow className="w-full">PURGE QUARANTINE</Button>
                  </SignalBorder>
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
              property: 'signal',
              description: 'Semantic token determining the edge accent color.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose"',
              defaultValue: '"cyan"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Zero Layout Disruption:</strong> SignalBorder provides an unobtrusive visual edge without shifting interior child elements.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Use Cases:</strong> Use SignalBorder on interactive cards and status callouts to impart a sleek, high-precision instrument look.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
