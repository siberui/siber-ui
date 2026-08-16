'use client';

import * as React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { SignalBorder } from '@siberui/react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Instrumented Hairline Edge', level: 2 },
  { id: 'signal-spectrum', text: 'Signal Spectrum (Cyan, Violet, Green, Amber, Rose)', level: 2 },
  { id: 'placements', text: 'Edge Placements (All, Top, Bottom, Sides)', level: 2 },
  { id: 'effects', text: 'Border Effects (Static, Pulse, Dashed)', level: 2 },
  { id: 'tech-notch', text: 'Technical HUD Notch Badge', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

const signalList = ['cyan', 'violet', 'green', 'amber', 'rose'] as const;

export default function SignalBorderDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Signal Border"
        description="Instrumented surface boundary primitive featuring a crisp 1px optical laser hairline, ambient top gradient illumination, and integrated technical HUD status badges with zero background wash."
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
      <ContentSection title="Basic Instrumented Hairline Edge" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Positioned as a non-intrusive overlay inside a <code className="text-cyan-400">relative</code> container, rendering an ambient 1px neon hairline perimeter while maintaining 100% dark background contrast.
          </p>

          <Playground
            code={`<div className="relative p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-white/[0.06] max-w-md w-full">
  <SignalBorder signal="cyan" glow />
  <div className="relative z-10 space-y-2">
    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
      INSTRUMENTED CORE
    </span>
    <p className="text-xs text-slate-300">
      Clean 1px laser gradient hairline edge with high-contrast text readability.
    </p>
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-6 sm:p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-white/[0.06] max-w-md w-full">
                <SignalBorder signal="cyan" glow />
                <div className="relative z-10 space-y-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                    INSTRUMENTED CORE
                  </span>
                  <p className="text-xs text-slate-300">
                    Clean 1px laser gradient hairline edge with high-contrast text readability.
                  </p>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Spectrum ── */}
      <ContentSection title="Signal Spectrum (Cyan, Violet, Green, Amber, Rose)" id="signal-spectrum">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Five core neon signal color spectrum options in the SiberUI design system.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
  {['cyan', 'violet', 'green', 'amber', 'rose'].map((sig) => (
    <div key={sig} className="relative p-5 rounded-xl bg-[#060a12] border border-white/[0.06] text-center">
      <SignalBorder signal={sig} glow />
      <span className="text-xs font-mono uppercase font-bold tracking-wider">{sig}</span>
    </div>
  ))}
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full min-w-0 p-4 bg-[#040711] rounded-2xl border border-white/[0.06]">
              {signalList.map((sig) => (
                <div key={sig} className="relative p-5 rounded-xl bg-[#060a12] border border-white/[0.06] text-center min-w-0">
                  <SignalBorder signal={sig} glow />
                  <span className="text-xs font-mono uppercase font-bold tracking-wider">{sig}</span>
                </div>
              ))}
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Placements ── */}
      <ContentSection title="Edge Placements (All, Top, Bottom, Sides)" id="placements">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">placement</code> prop controls which edges receive the hairline laser stroke: <code className="text-cyan-400">&quot;all&quot; | &quot;top&quot; | &quot;bottom&quot; | &quot;sides&quot;</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
  <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.04]">
    <SignalBorder signal="cyan" placement="top" glow />
    <span className="text-xs font-mono text-slate-300">TOP ONLY</span>
  </div>

  <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.04]">
    <SignalBorder signal="green" placement="bottom" glow />
    <span className="text-xs font-mono text-slate-300">BOTTOM ONLY</span>
  </div>

  <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.04]">
    <SignalBorder signal="amber" placement="sides" glow />
    <span className="text-xs font-mono text-slate-300">SIDES ONLY</span>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full min-w-0 p-4 sm:p-6 bg-[#040711] rounded-2xl border border-white/[0.06]">
              <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.04] min-w-0">
                <SignalBorder signal="cyan" placement="top" glow />
                <span className="text-xs font-mono text-slate-300">TOP ONLY</span>
              </div>

              <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.04] min-w-0">
                <SignalBorder signal="green" placement="bottom" glow />
                <span className="text-xs font-mono text-slate-300">BOTTOM ONLY</span>
              </div>

              <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.04] min-w-0">
                <SignalBorder signal="amber" placement="sides" glow />
                <span className="text-xs font-mono text-slate-300">SIDES ONLY</span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Effects ── */}
      <ContentSection title="Border Effects (Static, Pulse, Dashed)" id="effects">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">effect</code> to configure border animation styles: <code className="text-cyan-400">&quot;static&quot;</code>, <code className="text-cyan-400">&quot;pulse&quot;</code> (breathing signal), or <code className="text-cyan-400">&quot;dashed&quot;</code> (technical segmented stroke).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
  <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.06] min-w-0">
    <SignalBorder signal="cyan" effect="pulse" glow />
    <span className="text-xs font-mono text-cyan-400 font-bold">EFFECT: PULSE (BREATHING)</span>
  </div>

  <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.06] min-w-0">
    <SignalBorder signal="violet" effect="dashed" />
    <span className="text-xs font-mono text-violet-400 font-bold">EFFECT: DASHED (TECHNICAL)</span>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full min-w-0 p-4 sm:p-6 bg-[#040711] rounded-2xl border border-white/[0.06]">
              <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.06] min-w-0">
                <SignalBorder signal="cyan" effect="pulse" glow />
                <span className="text-xs font-mono text-cyan-400 font-bold">EFFECT: PULSE (BREATHING)</span>
              </div>

              <div className="relative p-6 rounded-xl bg-[#060912] border border-white/[0.06] min-w-0">
                <SignalBorder signal="violet" effect="dashed" />
                <span className="text-xs font-mono text-violet-400 font-bold">EFFECT: DASHED (TECHNICAL)</span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Technical HUD Notch Badge ── */}
      <ContentSection title="Technical HUD Notch Badge" id="tech-notch">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Attach an embedded status indicator tag flush with the top border using <code className="text-cyan-400">techNotch</code> and <code className="text-cyan-400">notchLabel</code>.
          </p>

          <Playground
            code={`<div className="relative p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-white/[0.06] max-w-md w-full">
  <SignalBorder signal="cyan" techNotch notchLabel="// NODE.01" notchAlign="left" glow />
  <div className="relative z-10 space-y-2 text-center pt-2">
    <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-widest">TACTICAL TELEMETRY HUD</h4>
    <p className="text-xs text-slate-300">Embedded status badge sitting cleanly on the hairline border.</p>
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-6 sm:p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-white/[0.06] max-w-md w-full">
                <SignalBorder signal="cyan" techNotch notchLabel="// NODE.01" notchAlign="left" glow />
                <div className="relative z-10 space-y-2 text-center pt-2">
                  <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-widest">TACTICAL TELEMETRY HUD</h4>
                  <p className="text-xs text-slate-300">Embedded status badge sitting cleanly on the hairline border.</p>
                </div>
              </div>
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
              description: 'Active neon signal accent color theme.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose" | "white"',
              defaultValue: '"cyan"',
            },
            {
              property: 'placement',
              description: 'Border edge placements.',
              type: '"all" | "top" | "bottom" | "sides"',
              defaultValue: '"all"',
            },
            {
              property: 'effect',
              description: 'Visual animation and stroke pattern.',
              type: '"static" | "pulse" | "dashed"',
              defaultValue: '"static"',
            },
            {
              property: 'techNotch',
              description: 'Embeds a technical HUD status tag badge on the top border.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'notchLabel',
              description: 'Custom textual content for the HUD notch badge.',
              type: 'string',
              defaultValue: '"// SYS.01"',
            },
            {
              property: 'notchAlign',
              description: 'Horizontal alignment of the notch badge.',
              type: '"left" | "center" | "right"',
              defaultValue: '"left"',
            },
            {
              property: 'glow',
              description: 'Casts a subtle neon drop-shadow aura around the 1px stroke.',
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
            <strong>Decorative Element:</strong> SignalBorder has <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-hidden=&quot;true&quot;</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">pointer-events-none</code>, ensuring no interference with focus or accessibility tree traversal.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
