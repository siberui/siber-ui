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
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
} from '@siberui/react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic CRT Raster Usage', level: 2 },
  { id: 'variants', text: 'Visual Modes (CRT, Laser Sweep, Grid Scan, Glitch)', level: 2 },
  { id: 'speeds-and-densities', text: 'Speed & Raster Density Calibration', level: 2 },
  { id: 'terminal-emulation', text: 'Retro CRT Terminal Emulation', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function ScanlineDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Scanline"
        description="Atmospheric CRT and HUD overlay layer: phosphor raster lines, traveling laser sweep beam, digital grid scanner, and CRT phosphor flicker."
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
      <ContentSection title="Basic CRT Raster Usage" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Non-intrusive, pointer-safe (<code className="text-cyan-400">pointer-events-none</code>) CRT screen texture overlay for retro-futuristic displays.
          </p>

          <Playground
            code={`<div className="relative p-8 rounded-2xl bg-[#040812] border border-white/[0.08] overflow-hidden max-w-md w-full">
  <Scanline variant="crt" density="medium" intensity="medium" />
  <div className="relative z-10 space-y-2">
    <span className="text-xs font-mono text-cyan-400 font-bold">CRT PHOSPHOR LAYER</span>
    <p className="text-xs text-slate-300">Tactile retro-futuristic CRT screen raster overlay.</p>
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="relative p-8 rounded-2xl bg-[#040812] border border-white/[0.08] overflow-hidden max-w-md w-full">
                <Scanline variant="crt" density="medium" intensity="medium" />
                <div className="relative z-10 space-y-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">CRT PHOSPHOR LAYER</span>
                  <p className="text-xs text-slate-300">Tactile retro-futuristic CRT screen raster overlay.</p>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Visual Modes ── */}
      <ContentSection title="Visual Modes (CRT, Laser Sweep, Grid Scan, Glitch)" id="variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Configure visual modes via <code className="text-cyan-400">variant</code>: static raster lines (<code className="text-cyan-400">crt</code>), laser beam (<code className="text-cyan-400">sweep</code>), or digital matrix (<code className="text-cyan-400">grid</code>).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
    <Scanline variant="crt" signal="cyan" intensity="medium" />
    <span className="relative z-10 text-xs font-mono text-cyan-400 font-bold">MODE: CRT</span>
  </div>

  <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
    <Scanline variant="sweep" signal="violet" speed="normal" intensity="high" />
    <span className="relative z-10 text-xs font-mono text-violet-400 font-bold">MODE: LASER SWEEP</span>
  </div>

  <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
    <Scanline variant="grid" signal="emerald" speed="normal" intensity="high" />
    <span className="relative z-10 text-xs font-mono text-emerald-400 font-bold">MODE: GRID SCAN</span>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
                <Scanline variant="crt" signal="cyan" intensity="medium" />
                <span className="relative z-10 text-xs font-mono text-cyan-400 font-bold">MODE: CRT</span>
              </div>

              <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
                <Scanline variant="sweep" signal="violet" speed="normal" intensity="high" />
                <span className="relative z-10 text-xs font-mono text-violet-400 font-bold">MODE: LASER SWEEP</span>
              </div>

              <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
                <Scanline variant="grid" signal="green" speed="normal" intensity="high" />
                <span className="relative z-10 text-xs font-mono text-emerald-400 font-bold">MODE: GRID SCAN</span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Speed & Density Calibration ── */}
      <ContentSection title="Speed & Raster Density Calibration" id="speeds-and-densities">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Calibrate grid frequency using <code className="text-cyan-400">density</code> (<code className="text-cyan-400">&quot;fine&quot; | &quot;medium&quot; | &quot;coarse&quot;</code>) and animation rate via <code className="text-cyan-400">speed</code> (<code className="text-cyan-400">&quot;slow&quot; | &quot;normal&quot; | &quot;fast&quot;</code>).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
    <Scanline variant="sweep" speed="fast" signal="cyan" intensity="high" />
    <span className="relative z-10 text-xs font-mono text-cyan-400 font-bold">FAST SWEEP (1.2s)</span>
  </div>

  <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
    <Scanline variant="sweep" speed="slow" signal="amber" intensity="high" />
    <span className="relative z-10 text-xs font-mono text-amber-400 font-bold">SLOW SWEEP (5.0s)</span>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
                <Scanline variant="sweep" speed="fast" signal="cyan" intensity="high" />
                <span className="relative z-10 text-xs font-mono text-cyan-400 font-bold">FAST SWEEP (1.2s)</span>
              </div>

              <div className="relative p-6 rounded-xl bg-[#050914] border border-white/[0.08] overflow-hidden">
                <Scanline variant="sweep" speed="slow" signal="amber" intensity="high" />
                <span className="relative z-10 text-xs font-mono text-amber-400 font-bold">SLOW SWEEP (5.0s)</span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Retro CRT Terminal Emulation ── */}
      <ContentSection title="Retro CRT Terminal Emulation" id="terminal-emulation">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite CRT mainframe panel combining phosphor flicker (<code className="text-cyan-400">flicker</code>) and grid scanlines.
          </p>

          <Playground
            code={`<Card className="relative overflow-hidden border-emerald-500/40 bg-[#03060a] max-w-lg mx-auto shadow-2xl">
  <Scanline variant="grid" signal="green" speed="normal" intensity="high" flicker />
  <CardHeader className="relative z-10 border-b border-emerald-500/20">
    <div className="flex items-center justify-between">
      <CardTitle className="text-emerald-400 text-xs font-mono">// MAINFRAME_UPLINK</CardTitle>
      <Badge variant="glass" dot dotColor="green">LIVE_FEED</Badge>
    </div>
  </CardHeader>
  <CardContent className="relative z-10 p-6 font-mono text-xs text-emerald-300/90 space-y-1">
    <p>&gt; SEC_NODE: ESTABLISHED</p>
    <p>&gt; ENCRYPTION: 4096-BIT QUANTUM LATTICE</p>
    <p>&gt; STATUS: ALL VECTORS NOMINAL</p>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Card className="relative overflow-hidden border-emerald-500/40 bg-[#03060a] max-w-md w-full shadow-2xl">
                <Scanline variant="grid" signal="green" speed="normal" intensity="high" flicker />
                <CardHeader className="relative z-10 border-b border-emerald-500/20">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-emerald-400 text-xs font-mono">{'// MAINFRAME_UPLINK'}</CardTitle>
                    <Badge variant="glass" dot dotColor="green">LIVE_FEED</Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 p-6 font-mono text-xs text-emerald-300/90 space-y-1">
                  <p>&gt; SEC_NODE: ESTABLISHED</p>
                  <p>&gt; ENCRYPTION: 4096-BIT QUANTUM LATTICE</p>
                  <p>&gt; STATUS: ALL VECTORS NOMINAL</p>
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
              description: 'Visual texture and scan animation mode.',
              type: '"crt" | "sweep" | "grid" | "glitch"',
              defaultValue: '"crt"',
            },
            {
              property: 'signal',
              description: 'Laser beam and grid accent color.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose" | "white"',
              defaultValue: '"cyan"',
            },
            {
              property: 'speed',
              description: 'Laser sweep speed multiplier.',
              type: '"slow" | "normal" | "fast"',
              defaultValue: '"normal"',
            },
            {
              property: 'density',
              description: 'Pixel frequency and raster density of scanlines.',
              type: '"fine" | "medium" | "coarse"',
              defaultValue: '"medium"',
            },
            {
              property: 'intensity',
              description: 'Overall visual opacity and prominence.',
              type: '"subtle" | "medium" | "high"',
              defaultValue: '"medium"',
            },
            {
              property: 'direction',
              description: 'Laser sweep axis.',
              type: '"vertical" | "horizontal"',
              defaultValue: '"vertical"',
            },
            {
              property: 'flicker',
              description: 'Enables CRT phosphor luminance shimmer.',
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
            <strong>Decorative Element:</strong> Scanline has <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-hidden=&quot;true&quot;</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">pointer-events-none</code>, completely ignoring pointer events.
          </li>
          <li>
            <strong>Reduced Motion:</strong> Sweep and flicker animations automatically halt when <code className="text-cyan-400 font-mono text-xs">prefers-reduced-motion: reduce</code> is enabled.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
