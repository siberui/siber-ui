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
  TechLabel,
  SystemBadge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
  VERSION,
} from '@siberui/react';
// No extra lucide icons needed in tech-label page

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Monospace Metadata Labels', level: 2 },
  { id: 'tone-spectrum', text: 'Semantic Tone Spectrum (Neutral, Cyan, Violet, Green, Amber, Rose)', level: 2 },
  { id: 'system-badges', text: 'SystemBadge Bracketed Tags', level: 2 },
  { id: 'frosted-glass-meta', text: 'Frosted Cyber-Glass Sensor Metadata Header', level: 2 },
  { id: 'tactical-hud-meta', text: 'Tactical HUD Hardware Specification Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

const toneList = ['neutral', 'cyan', 'violet', 'green', 'amber', 'rose'] as const;

export default function TechLabelDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tech Label"
        description="High-precision monospace metadata primitives engineered for system timestamps, hexadecimal identifiers, server addresses, and bracketed version tags."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { TechLabel, SystemBadge } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Monospace Metadata Labels" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            TechLabel renders small, tracked monospace typography for metadata without making it the default voice of the primary interface.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-2">
  <TechLabel tone="cyan">NODE_042 // LAST_SYNC 14:02:48 UTC</TechLabel>
  <TechLabel tone="neutral">IP: 192.168.1.100 // MAC: 00:1A:2B:3C:4D:5E</TechLabel>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-2">
                <TechLabel tone="cyan">{'NODE_042 // LAST_SYNC 14:02:48 UTC'}</TechLabel>
                <TechLabel tone="neutral">{'IP: 192.168.1.100 // MAC: 00:1A:2B:3C:4D:5E'}</TechLabel>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tone Spectrum ── */}
      <ContentSection title="Semantic Tone Spectrum (Neutral, Cyan, Violet, Green, Amber, Rose)" id="tone-spectrum">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Choose from all 6 signal color tones: <code className="text-slate-400">neutral</code>, <code className="text-cyan-400">cyan</code>, <code className="text-purple-400">violet</code>, <code className="text-emerald-400">green</code>, <code className="text-amber-400">amber</code>, and <code className="text-rose-400">rose</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-xl">
  {toneList.map((tone) => (
    <div key={tone} className="p-3 rounded-lg bg-[#050811] border border-white/[0.06] flex items-center justify-between">
      <TechLabel tone={tone}>
        {tone.toUpperCase()} // STATUS_RECORD
      </TechLabel>
      <span className="text-[10px] font-mono text-slate-500">{tone}</span>
    </div>
  ))}
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-xl">
                {toneList.map((tone) => (
                  <div key={tone} className="p-3 rounded-lg bg-[#050811] border border-white/[0.06] flex items-center justify-between">
                    <TechLabel tone={tone}>
                      {`${tone.toUpperCase()} // STATUS_RECORD`}
                    </TechLabel>
                    <span className="text-[10px] font-mono text-slate-500">{tone}</span>
                  </div>
                ))}
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── System Badges ── */}
      <ContentSection title="SystemBadge Bracketed Tags" id="system-badges">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">SystemBadge</code> for technical version numbers, deployment tags, and protocol classifications.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-3 items-center justify-center">
  <SystemBadge tone="neutral">v{VERSION}</SystemBadge>
  <SystemBadge tone="cyan">BETA-BUILD</SystemBadge>
  <SystemBadge tone="green">STABLE-0.9</SystemBadge>
  <SystemBadge tone="amber">DEPRECATED</SystemBadge>
  <SystemBadge tone="rose">RESTRICTED</SystemBadge>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <SystemBadge tone="neutral">v{VERSION}</SystemBadge>
                <SystemBadge tone="cyan">BETA-BUILD</SystemBadge>
                <SystemBadge tone="green">STABLE-0.9</SystemBadge>
                <SystemBadge tone="amber">DEPRECATED</SystemBadge>
                <SystemBadge tone="rose">RESTRICTED</SystemBadge>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Sensor Metadata Header ── */}
      <ContentSection title="Frosted Cyber-Glass Sensor Metadata Header" id="frosted-glass-meta">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite metadata card on circuit substrate backgrounds with active border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <TechLabel tone="cyan">TRANSPONDER // ORBIT-09</TechLabel>
      <SystemBadge tone="cyan">ONLINE</SystemBadge>
    </div>

    <div className="space-y-2">
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-400">EPOCH SIGNATURE</span>
        <TechLabel tone="green">0x7F4A...B902</TechLabel>
      </div>
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-400">EGRESS LATENCY</span>
        <TechLabel tone="cyan">0.18 ms</TechLabel>
      </div>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <TechLabel tone="cyan">TRANSPONDER // ORBIT-09</TechLabel>
                    <SystemBadge tone="cyan">ONLINE</SystemBadge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">EPOCH SIGNATURE</span>
                      <TechLabel tone="green">0x7F4A...B902</TechLabel>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">EGRESS LATENCY</span>
                      <TechLabel tone="cyan">0.18 ms</TechLabel>
                    </div>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Hardware Specification Card ── */}
      <ContentSection title="Tactical HUD Hardware Specification Card" id="tactical-hud-meta">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded tech labels and status badges.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">HARDWARE REGISTRY</CardTitle>
      <SystemBadge tone="cyan">ACTIVE</SystemBadge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Hardware accelerator specifications.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-3 font-mono text-xs">
    <div className="flex justify-between py-2 border-b border-white/[0.06]">
      <span className="text-slate-400">PROCESSOR ASIC</span>
      <TechLabel tone="cyan">QUANTUM-TPU-V4</TechLabel>
    </div>
    <div className="flex justify-between py-2 border-b border-white/[0.06]">
      <span className="text-slate-400">FIRMWARE BUILD</span>
      <TechLabel tone="green">v4.19.82-LTS</TechLabel>
    </div>
    <div className="flex justify-between py-2">
      <span className="text-slate-400">SECURITY DOMAIN</span>
      <TechLabel tone="rose">AIRGAP_LEVEL_4</TechLabel>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">HARDWARE REGISTRY</CardTitle>
                    <SystemBadge tone="cyan">ACTIVE</SystemBadge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Hardware accelerator specifications.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="text-slate-400">PROCESSOR ASIC</span>
                    <TechLabel tone="cyan">QUANTUM-TPU-V4</TechLabel>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="text-slate-400">FIRMWARE BUILD</span>
                    <TechLabel tone="green">v4.19.82-LTS</TechLabel>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">SECURITY DOMAIN</span>
                    <TechLabel tone="rose">AIRGAP_LEVEL_4</TechLabel>
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
              property: 'tone',
              description: 'Color styling token for the label text or badge outline.',
              type: '"neutral" | "cyan" | "violet" | "green" | "amber" | "rose"',
              defaultValue: '"neutral"',
            },
            {
              property: 'as',
              description: 'For TechLabel: HTML element to render.',
              type: '"span" | "div" | "label"',
              defaultValue: '"span"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Polymorphic Element:</strong> Use <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">as=&quot;label&quot;</code> when binding metadata to form inputs.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Metadata Voice:</strong> Reserve TechLabel for secondary technical metadata (timestamps, versions, IDs) rather than primary UI body copy.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
