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
  Scanline,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Tv } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic CRT Overlay Usage', level: 2 },
  { id: 'variants', text: 'Texture Modes (Static Phosphor vs Animated Sweep)', level: 2 },
  { id: 'terminal-emulation', text: 'Retro CRT Terminal Emulation', level: 2 },
  { id: 'frosted-glass-scanline', text: 'Frosted Cyber-Glass Surveillance Monitor', level: 2 },
  { id: 'tactical-hud-terminal', text: 'Tactical HUD Telemetry Monitor Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ScanlineDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Scanline"
        description="Signature cybernetic CRT overlay primitive rendering static horizontal phosphor raster textures or continuously sweeping laser scanner beams."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Scanline } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic CRT Overlay Usage" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Positioned as an absolute overlay layer with pointer events disabled, Scanline adds tactile phosphor realism over any card, terminal, or video feed.
          </p>

          <Playground
            code={`<div className="relative h-40 max-w-md w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050811] p-6 flex flex-col justify-between">
  <Scanline variant="static" />
  <div className="relative z-10 flex items-center justify-between">
    <span className="font-mono text-xs font-bold text-cyan-400">CRT RASTER ACTIVE</span>
    <Badge variant="neon" size="sm">60 HZ</Badge>
  </div>
  <p className="relative z-10 text-xs font-mono text-slate-400">
    Phosphor raster lines simulate hardware CRT monitors without interfering with child element interaction.
  </p>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="relative h-40 max-w-md w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050811] p-6 flex flex-col justify-between">
                <Scanline variant="static" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-cyan-400">CRT RASTER ACTIVE</span>
                  <Badge variant="neon" size="sm">60 HZ</Badge>
                </div>
                <p className="relative z-10 text-xs font-mono text-slate-400">
                  Phosphor raster lines simulate hardware CRT monitors without interfering with child element interaction.
                </p>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Variants ── */}
      <ContentSection title="Texture Modes (Static Phosphor vs Animated Sweep)" id="variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Choose between fine static horizontal raster lines (<code className="text-cyan-400">variant=&quot;static&quot;</code>) or a continuous vertical cyan laser sweep (<code className="text-cyan-400">variant=&quot;sweep&quot;</code>).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  <div className="relative h-36 rounded-xl border border-white/[0.08] bg-[#050811] p-5 flex flex-col justify-between overflow-hidden">
    <Scanline variant="static" />
    <span className="relative z-10 font-mono text-xs text-cyan-300 font-bold">STATIC PHOSPHOR</span>
    <p className="relative z-10 text-xs text-slate-400">Fixed repeating scanlines.</p>
  </div>

  <div className="relative h-36 rounded-xl border border-white/[0.08] bg-[#050811] p-5 flex flex-col justify-between overflow-hidden">
    <Scanline variant="sweep" />
    <span className="relative z-10 font-mono text-xs text-cyan-300 font-bold">ACTIVE LASER SWEEP</span>
    <p className="relative z-10 text-xs text-slate-400">Animated sweeping scanner beam.</p>
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <div className="relative h-36 rounded-xl border border-white/[0.08] bg-[#050811] p-5 flex flex-col justify-between overflow-hidden">
                  <Scanline variant="static" />
                  <span className="relative z-10 font-mono text-xs text-cyan-300 font-bold">STATIC PHOSPHOR</span>
                  <p className="relative z-10 text-xs text-slate-400">Fixed repeating scanlines.</p>
                </div>

                <div className="relative h-36 rounded-xl border border-white/[0.08] bg-[#050811] p-5 flex flex-col justify-between overflow-hidden">
                  <Scanline variant="sweep" />
                  <span className="relative z-10 font-mono text-xs text-cyan-300 font-bold">ACTIVE LASER SWEEP</span>
                  <p className="relative z-10 text-xs text-slate-400">Animated sweeping scanner beam.</p>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Terminal Emulation ── */}
      <ContentSection title="Retro CRT Terminal Emulation" id="terminal-emulation">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite authentic retro console monitors by combining Scanline with monospace green code outputs.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-6 rounded-2xl bg-black border border-emerald-500/30 overflow-hidden font-mono text-xs text-emerald-400 space-y-2">
  <Scanline variant="sweep" />
  <div className="relative z-10 space-y-1">
    <p className="text-slate-500">// SIBER OS KERNEL BOOT [v4.19]</p>
    <p>&gt; MOUNTING ENCRYPTED PARTITION... [OK]</p>
    <p>&gt; INITIALIZING QUANTUM LATTICE... [OK]</p>
    <p>&gt; LISTENING ON PORT 0x7F... [CONNECTED]</p>
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="relative w-full max-w-md p-6 rounded-2xl bg-black border border-emerald-500/30 overflow-hidden font-mono text-xs text-emerald-400 space-y-2">
                <Scanline variant="sweep" />
                <div className="relative z-10 space-y-1">
                  <p className="text-slate-500">{`// SIBER OS KERNEL BOOT [v4.19]`}</p>
                  <p>&gt; MOUNTING ENCRYPTED PARTITION... [OK]</p>
                  <p>&gt; INITIALIZING QUANTUM LATTICE... [OK]</p>
                  <p>&gt; LISTENING ON PORT 0x7F... [CONNECTED]</p>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Surveillance Monitor ── */}
      <ContentSection title="Frosted Cyber-Glass Surveillance Monitor" id="frosted-glass-scanline">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Combine scanlines with acrylic glass surfaces layered over circuit textures and border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <Scanline variant="sweep" />
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Tv className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">LIVE OPTICAL FEED</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">FEED #04</Badge>
    </div>

    <div className="space-y-1 font-mono text-xs text-slate-300">
      <p>Target: ORBITAL DEFENSE NODE</p>
      <p>Resolution: 3840x2160 @ 120 FPS</p>
      <p>Laser Sweep Rate: 2.4 GHz</p>
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        LOCK SENSOR FOCUS
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <Scanline variant="sweep" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Tv className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">LIVE OPTICAL FEED</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">FEED #04</Badge>
                  </div>

                  <div className="space-y-1 font-mono text-xs text-slate-300">
                    <p>Target: ORBITAL DEFENSE NODE</p>
                    <p>Resolution: 3840x2160 @ 120 FPS</p>
                    <p>Laser Sweep Rate: 2.4 GHz</p>
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      LOCK SENSOR FOCUS
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Monitor Card ── */}
      <ContentSection title="Tactical HUD Telemetry Monitor Card" id="tactical-hud-terminal">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with integrated scanline beam layers.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl relative overflow-hidden">
  <Scanline variant="sweep" />
  <CardHeader className="pb-4 border-b border-white/[0.06] relative z-10">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">OPTICAL SURVEILLANCE FEED</CardTitle>
      <Badge variant="neon" size="sm">ONLINE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Active laser telemetry scan of planetary relay array.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 relative z-10 space-y-3 font-mono text-xs">
    <div className="flex justify-between py-2 border-b border-white/[0.06]">
      <span className="text-slate-400">Frame Lock Status</span>
      <span className="text-cyan-400 font-bold">100% NOMINAL</span>
    </div>
    <div className="flex justify-between py-2">
      <span className="text-slate-400">Signal Degradation</span>
      <span className="text-emerald-400 font-bold">0.00 dB</span>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl relative overflow-hidden">
                <Scanline variant="sweep" />
                <CardHeader className="pb-4 border-b border-white/[0.06] relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">OPTICAL SURVEILLANCE FEED</CardTitle>
                    <Badge variant="neon" size="sm">ONLINE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Active laser telemetry scan of planetary relay array.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 relative z-10 space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="text-slate-400">Frame Lock Status</span>
                    <span className="text-cyan-400 font-bold">100% NOMINAL</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Signal Degradation</span>
                    <span className="text-emerald-400 font-bold">0.00 dB</span>
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
              description: 'Texture rendering mode: "static" generates repeating phosphor raster lines; "sweep" animates a looping vertical laser beam.',
              type: '"static" | "sweep"',
              defaultValue: '"static"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Pointer Events:</strong> Scanline elements are styled with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">pointer-events-none</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-hidden=&quot;true&quot;</code> to prevent interaction capture or assistive screen reader pollution.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Container Positioning:</strong> The parent container must have <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">position: relative</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">overflow: hidden</code> so the scanline overlay is properly bounded.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
