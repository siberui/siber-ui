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
  CornerFrame,
  CornerMarker,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Crosshair } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Technical Framing', level: 2 },
  { id: 'signal-spectrum', text: 'Semantic Signal Spectrum (Cyan, Violet, Green, Amber, Rose)', level: 2 },
  { id: 'custom-corners', text: 'Custom Corner Arrangements (corners prop)', level: 2 },
  { id: 'corner-marker', text: 'Standalone CornerMarker Primitives', level: 2 },
  { id: 'frosted-glass-frame', text: 'Frosted Cyber-Glass Instrument Reticle', level: 2 },
  { id: 'tactical-hud-viewfinder', text: 'Tactical HUD Surveillance Viewfinder', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function CornerFrameDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Corner Frame"
        description="Non-destructive tactical corner brackets that instrument surfaces with technical HUD framing without altering underlying layout boundaries or clipping content."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { CornerFrame, CornerMarker } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Technical Framing" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Wrap any card, terminal, or widget inside <code className="text-cyan-400">CornerFrame</code> to project glowing hairline corner brackets over its perimeter.
          </p>

          <Playground
            code={`<CornerFrame signal="cyan" className="max-w-md w-full p-6 rounded-xl bg-[#070b14] border border-white/[0.06]">
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-cyan-400">INSTRUMENTED TELEMETRY TARGET</span>
      <Badge variant="neon" size="sm">LOCKED</Badge>
    </div>
    <p className="text-xs text-slate-400">
      Corner brackets automatically scale and hug the outer perimeter.
    </p>
  </div>
</CornerFrame>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <CornerFrame signal="cyan" className="max-w-md w-full p-6 rounded-xl bg-[#070b14] border border-white/[0.06]">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400">INSTRUMENTED TELEMETRY TARGET</span>
                    <Badge variant="neon" size="sm">LOCKED</Badge>
                  </div>
                  <p className="text-xs text-slate-400">
                    Corner brackets automatically scale and hug the outer perimeter.
                  </p>
                </div>
              </CornerFrame>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Spectrum ── */}
      <ContentSection title="Semantic Signal Spectrum (Cyan, Violet, Green, Amber, Rose)" id="signal-spectrum">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select among Siber UI&apos;s curated cybernetic signal tokens: <code className="text-cyan-400">cyan</code>, <code className="text-purple-400">violet</code>, <code className="text-emerald-400">green</code>, <code className="text-amber-400">amber</code>, <code className="text-rose-400">rose</code>, and <code className="text-slate-400">neutral</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
  {(['cyan', 'violet', 'green', 'amber', 'rose', 'neutral'] as const).map((sig) => (
    <CornerFrame
      key={sig}
      signal={sig}
      className="p-4 rounded-xl bg-[#050811] border border-white/[0.06] flex flex-col items-center justify-center min-h-[90px]"
    >
      <span className="font-mono text-xs uppercase text-slate-300">
        SIGNAL: {sig}
      </span>
    </CornerFrame>
  ))}
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
                {(['cyan', 'violet', 'green', 'amber', 'rose', 'neutral'] as const).map((sig) => (
                  <CornerFrame
                    key={sig}
                    signal={sig}
                    className="p-4 rounded-xl bg-[#050811] border border-white/[0.06] flex flex-col items-center justify-center min-h-[90px]"
                  >
                    <span className="font-mono text-xs uppercase text-slate-300">
                      SIGNAL: {sig}
                    </span>
                  </CornerFrame>
                ))}
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Custom Corners ── */}
      <ContentSection title="Custom Corner Arrangements (corners prop)" id="custom-corners">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Render specific corner pairs via the <code className="text-cyan-400">corners</code> array (e.g. diagonal <code className="text-cyan-400">[&apos;tl&apos;, &apos;br&apos;]</code> or top brackets <code className="text-cyan-400">[&apos;tl&apos;, &apos;tr&apos;]</code>).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  <CornerFrame
    signal="cyan"
    corners={['tl', 'br']}
    className="p-6 rounded-xl bg-[#050811] border border-white/[0.06]"
  >
    <p className="font-mono text-xs text-cyan-300 font-bold mb-1">DIAGONAL CORNERS</p>
    <p className="text-xs text-slate-400">Top-left and bottom-right brackets only.</p>
  </CornerFrame>

  <CornerFrame
    signal="green"
    corners={['tl', 'tr']}
    className="p-6 rounded-xl bg-[#050811] border border-white/[0.06]"
  >
    <p className="font-mono text-xs text-emerald-300 font-bold mb-1">TOP BRACKETS</p>
    <p className="text-xs text-slate-400">Top-left and top-right brackets only.</p>
  </CornerFrame>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <CornerFrame
                  signal="cyan"
                  corners={['tl', 'br']}
                  className="p-6 rounded-xl bg-[#050811] border border-white/[0.06]"
                >
                  <p className="font-mono text-xs text-cyan-300 font-bold mb-1">DIAGONAL CORNERS</p>
                  <p className="text-xs text-slate-400">Top-left and bottom-right brackets only.</p>
                </CornerFrame>

                <CornerFrame
                  signal="green"
                  corners={['tl', 'tr']}
                  className="p-6 rounded-xl bg-[#050811] border border-white/[0.06]"
                >
                  <p className="font-mono text-xs text-emerald-300 font-bold mb-1">TOP BRACKETS</p>
                  <p className="text-xs text-slate-400">Top-left and top-right brackets only.</p>
                </CornerFrame>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Standalone CornerMarker ── */}
      <ContentSection title="Standalone CornerMarker Primitives" id="corner-marker">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">CornerMarker</code> for granular positioning inside bespoke SVG compositions or custom dialog overlays.
          </p>

          <Playground
            code={`<div className="relative p-8 rounded-xl bg-[#070b14] border border-white/[0.06] w-full max-w-md">
  <CornerMarker position="tl" signal="cyan" size={12} />
  <CornerMarker position="tr" signal="cyan" size={12} />
  <CornerMarker position="bl" signal="cyan" size={12} />
  <CornerMarker position="br" signal="cyan" size={12} />
  <p className="text-center font-mono text-xs text-slate-300">
    Individually composed 12px corner markers
  </p>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="relative p-8 rounded-xl bg-[#070b14] border border-white/[0.06] w-full max-w-md">
                <CornerMarker position="tl" signal="cyan" size={12} />
                <CornerMarker position="tr" signal="cyan" size={12} />
                <CornerMarker position="bl" signal="cyan" size={12} />
                <CornerMarker position="br" signal="cyan" size={12} />
                <p className="text-center font-mono text-xs text-slate-300">
                  Individually composed 12px corner markers
                </p>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Instrument Reticle ── */}
      <ContentSection title="Frosted Cyber-Glass Instrument Reticle" id="frosted-glass-frame">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Nest corner frames on top of acrylic glass panels with circuit textures and active border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <CornerFrame signal="cyan" size="md" className="relative z-10 p-6 rounded-xl bg-black/40 border border-white/[0.08] space-y-4">
    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
      <span className="font-mono text-xs font-bold text-white">ORBITAL TARGETING POD</span>
      <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
    </div>
    <p className="text-xs text-slate-300 leading-relaxed font-mono">
      Azimuth: 142.84° • Elevation: +38.12° • Range: 840 km
    </p>
  </CornerFrame>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <CornerFrame signal="cyan" size="md" className="relative z-10 p-6 rounded-xl bg-black/40 border border-white/[0.08] space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <span className="font-mono text-xs font-bold text-white">ORBITAL TARGETING POD</span>
                    <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    Azimuth: 142.84° • Elevation: +38.12° • Range: 840 km
                  </p>
                </CornerFrame>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Surveillance Viewfinder ── */}
      <ContentSection title="Tactical HUD Surveillance Viewfinder" id="tactical-hud-viewfinder">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission viewfinder card with tactical reticles.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">TARGET VIEWPORT</CardTitle>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Optical surveillance sensor feed from Sector 04.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <CornerFrame signal="cyan" className="p-6 rounded-xl bg-[#040711] border border-cyan-500/20 text-center space-y-3">
      <Crosshair className="h-8 w-8 text-cyan-400 mx-auto animate-pulse" />
      <span className="font-mono text-xs text-cyan-300 block">OPTICAL TRACKING LOCK</span>
      <Button variant="neon" size="sm" glow className="w-full">ENGAGE SENSOR</Button>
    </CornerFrame>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">TARGET VIEWPORT</CardTitle>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Optical surveillance sensor feed from Sector 04.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <CornerFrame signal="cyan" className="p-6 rounded-xl bg-[#040711] border border-cyan-500/20 text-center space-y-3">
                    <Crosshair className="h-8 w-8 text-cyan-400 mx-auto animate-pulse" />
                    <span className="font-mono text-xs text-cyan-300 block">OPTICAL TRACKING LOCK</span>
                    <Button variant="neon" size="sm" glow className="w-full">ENGAGE SENSOR</Button>
                  </CornerFrame>
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
              description: 'Accent glow color of the hairline corner marks.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose" | "neutral"',
              defaultValue: '"cyan"',
            },
            {
              property: 'size',
              description: 'Physical dimension of corner mark brackets ("sm" = 8px, "md" = 10px).',
              type: '"sm" | "md"',
              defaultValue: '"md"',
            },
            {
              property: 'corners',
              description: 'Array of corner positions to render.',
              type: "Array<'tl' | 'tr' | 'bl' | 'br'>",
              defaultValue: "['tl', 'tr', 'bl', 'br']",
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Decorative Framing:</strong> CornerFrame marks are purely decorative and carry zero intrusive ARIA requirements, leaving inner content completely accessible.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Judicious Usage:</strong> Use CornerFrame on selected items, focused targeting modules, or primary dashboard heroes to accentuate them without visual clutter.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
