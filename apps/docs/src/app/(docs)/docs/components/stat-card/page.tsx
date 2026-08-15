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
  StatCard,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import {
  Activity,
  Zap,
  ShieldCheck,
  Server,
  Globe,
  Database,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Monospace Metrics', level: 2 },
  { id: 'color-spectrum', text: 'Accent Spectrum (Cyan, Purple, Emerald, Amber)', level: 2 },
  { id: 'grid-composition', text: 'Multi-Metric Cluster Dashboard Grid', level: 2 },
  { id: 'frosted-glass-stat', text: 'Frosted Cyber-Glass Satellite Egress Card', level: 2 },
  { id: 'tactical-hud-telemetry', text: 'Tactical HUD Mission Telemetry Deck', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function StatCardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Stat Card"
        description="High-contrast statistical metric cards featuring bracketed uppercase monospace headers, oversized numerical readouts, and accent color glows."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { StatCard } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Monospace Metrics" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            StatCard arranges numerical data into a scannable, bracketed layout with leading metric icons.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <StatCard
    label="REALTIME THROUGHPUT"
    value="14.2 GB/s"
    subtext="+28% vs previous epoch"
    icon={<Zap className="w-4 h-4" />}
    color="cyan"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-sm w-full">
                <StatCard
                  label="REALTIME THROUGHPUT"
                  value="14.2 GB/s"
                  subtext="+28% vs previous epoch"
                  icon={<Zap className="w-4 h-4" />}
                  color="cyan"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Accent Spectrum ── */}
      <ContentSection title="Accent Spectrum (Cyan, Purple, Emerald, Amber)" id="color-spectrum">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Configure chromatic highlights via the <code className="text-cyan-400">color</code> prop.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
  <StatCard
    label="ACTIVE PEERS"
    value="4,892"
    subtext="Connected across 18 subnets"
    icon={<Globe className="w-4 h-4" />}
    color="cyan"
  />

  <StatCard
    label="LATTICE MEMORY"
    value="128 GB"
    subtext="42.8% capacity utilized"
    icon={<Database className="w-4 h-4" />}
    color="purple"
  />

  <StatCard
    label="SYSTEM UPTIME"
    value="99.99%"
    subtext="Zero unexpected failovers"
    icon={<ShieldCheck className="w-4 h-4" />}
    color="emerald"
  />

  <StatCard
    label="REPLICATION LAG"
    value="14 ms"
    subtext="Warning: Upstream congestion"
    icon={<Activity className="w-4 h-4" />}
    color="amber"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                <StatCard
                  label="ACTIVE PEERS"
                  value="4,892"
                  subtext="Connected across 18 subnets"
                  icon={<Globe className="w-4 h-4" />}
                  color="cyan"
                />

                <StatCard
                  label="LATTICE MEMORY"
                  value="128 GB"
                  subtext="42.8% capacity utilized"
                  icon={<Database className="w-4 h-4" />}
                  color="purple"
                />

                <StatCard
                  label="SYSTEM UPTIME"
                  value="99.99%"
                  subtext="Zero unexpected failovers"
                  icon={<ShieldCheck className="w-4 h-4" />}
                  color="emerald"
                />

                <StatCard
                  label="REPLICATION LAG"
                  value="14 ms"
                  subtext="Warning: Upstream congestion"
                  icon={<Activity className="w-4 h-4" />}
                  color="amber"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Grid Composition ── */}
      <ContentSection title="Multi-Metric Cluster Dashboard Grid" id="grid-composition">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Assemble multi-metric telemetry rows for operational monitoring views.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
  <StatCard label="ENCRYPTED FRAMES" value="2.4M" subtext="AES-256-GCM / Kyber-1024" color="cyan" />
  <StatCard label="COMPUTE QUORUM" value="32/32" subtext="100% consensus reached" color="emerald" />
  <StatCard label="BUFFER CAPACITY" value="84.2%" subtext="Flush journal in 180s" color="amber" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <StatCard label="ENCRYPTED FRAMES" value="2.4M" subtext="AES-256-GCM / Kyber-1024" color="cyan" />
                <StatCard label="COMPUTE QUORUM" value="32/32" subtext="100% consensus reached" color="emerald" />
                <StatCard label="BUFFER CAPACITY" value="84.2%" subtext="Flush journal in 180s" color="amber" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Satellite Egress Card ── */}
      <ContentSection title="Frosted Cyber-Glass Satellite Egress Card" id="frosted-glass-stat">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite acrylic stats card layered over circuit boards with active border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Server className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">ORBITAL EGRESS LINK</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">ONLINE</Badge>
    </div>

    <StatCard
      label="SATELLITE BANDWIDTH"
      value="840 Gbps"
      subtext="Peak carrier frequency: 28 GHz Ka-Band"
      icon={<Zap className="w-4 h-4 text-cyan-400" />}
      color="cyan"
      className="bg-transparent border-0 p-0"
    />
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">ORBITAL EGRESS LINK</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">ONLINE</Badge>
                  </div>

                  <StatCard
                    label="SATELLITE BANDWIDTH"
                    value="840 Gbps"
                    subtext="Peak carrier frequency: 28 GHz Ka-Band"
                    icon={<Zap className="w-4 h-4 text-cyan-400" />}
                    color="cyan"
                    className="bg-transparent border-0 p-0"
                  />
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Mission Telemetry Deck ── */}
      <ContentSection title="Tactical HUD Mission Telemetry Deck" id="tactical-hud-telemetry">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission telemetry dashboard deck.
          </p>

          <Playground
            code={`<Card className="max-w-2xl mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">PLANETARY INGESTION DECK</CardTitle>
      <Badge variant="neon" size="sm">STREAMING</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Aggregated frame ingestion telemetry across all global relay points.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <StatCard label="INGESTED EVENTS" value="1.84B" subtext="Past 24 hours" color="cyan" />
      <StatCard label="DROPPED PACKETS" value="0.00%" subtext="Lossless pipe active" color="emerald" />
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-2xl w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">PLANETARY INGESTION DECK</CardTitle>
                    <Badge variant="neon" size="sm">STREAMING</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Aggregated frame ingestion telemetry across all global relay points.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StatCard label="INGESTED EVENTS" value="1.84B" subtext="Past 24 hours" color="cyan" />
                    <StatCard label="DROPPED PACKETS" value="0.00%" subtext="Lossless pipe active" color="emerald" />
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
              property: 'label',
              description: 'Bracketed uppercase title displayed at the top of the stat card.',
              type: 'string',
            },
            {
              property: 'value',
              description: 'Oversized bold metric readout.',
              type: 'string | number',
            },
            {
              property: 'subtext',
              description: 'Secondary descriptive or trend text rendered beneath the metric value.',
              type: 'string',
            },
            {
              property: 'icon',
              description: 'Optional leading icon badge displayed on the right edge.',
              type: 'React.ReactNode',
            },
            {
              property: 'color',
              description: 'Accent glow color applied to the numerical metric and icon.',
              type: '"cyan" | "purple" | "emerald" | "amber"',
              defaultValue: '"cyan"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Scannable Headings:</strong> Uses high contrast ratios and monospace typography for crisp numerical legibility.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Labels:</strong> Always keep <code className="text-cyan-400">label</code> concise and formatted in uppercase with square brackets (e.g. &quot;CPU LOAD&quot; or &quot;TOTAL IOPS&quot;).
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
