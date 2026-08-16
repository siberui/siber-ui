'use client';

import * as React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { StatCard } from '@siberui/react';
import {
  Activity,
  Zap,
  ShieldCheck,
  Globe,
  Database,
  Lock,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Tactical HUD Metric Telemetry', level: 2 },
  { id: 'trend-deltas', text: 'Trend Deltas & Comparison Badges', level: 2 },
  { id: 'activity-sparklines', text: 'Integrated Micro Activity Gauges', level: 2 },
  { id: 'signal-spectrum', text: 'Signal Accents (Cyan, Violet, Emerald, Amber, Rose)', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function StatCardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Stat Card"
        description="Tactical statistical metric card featuring system index tags ([SYS.METRIC_01]), trend delta chips (+24.8% ▲), and integrated micro activity sparklines."
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
      <ContentSection title="Tactical HUD Metric Telemetry" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            High-contrast statistical metric card displaying system index tags, oversized numerical data readouts, and corner hardware brackets.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <StatCard
    indexTag="[SYS.METRIC_01]"
    label="REALTIME THROUGHPUT"
    value="14.2 GB/s"
    trend={{ value: '+28.4%', direction: 'up', label: 'vs previous cycle' }}
    icon={<Zap className="w-4 h-4" />}
    signal="cyan"
    cornerTicks
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="max-w-sm w-full min-w-0">
                <StatCard
                  indexTag="[SYS.METRIC_01]"
                  label="REALTIME THROUGHPUT"
                  value="14.2 GB/s"
                  trend={{ value: '+28.4%', direction: 'up', label: 'vs previous cycle' }}
                  icon={<Zap className="w-4 h-4" />}
                  signal="cyan"
                  cornerTicks
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Trend Deltas ── */}
      <ContentSection title="Trend Deltas & Comparison Badges" id="trend-deltas">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">trend</code> prop renders positive (<code className="text-emerald-400">up</code>), negative (<code className="text-rose-400">down</code>), or neutral telemetry deltas.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
  <StatCard
    indexTag="[NODE_AUTH]"
    label="SUCCESSFUL AUTH"
    value="99.98%"
    trend={{ value: '+0.12%', direction: 'up', label: 'nominal' }}
    icon={<ShieldCheck className="w-4 h-4" />}
    signal="emerald"
  />

  <StatCard
    indexTag="[LATENCY_SPIKE]"
    label="EGRESS LAG"
    value="142 ms"
    trend={{ value: '+42ms', direction: 'down', label: 'congestion detected' }}
    icon={<Activity className="w-4 h-4" />}
    signal="rose"
  />
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <StatCard
                indexTag="[NODE_AUTH]"
                label="SUCCESSFUL AUTH"
                value="99.98%"
                trend={{ value: '+0.12%', direction: 'up', label: 'nominal' }}
                icon={<ShieldCheck className="w-4 h-4" />}
                signal="emerald"
              />

              <StatCard
                indexTag="[LATENCY_SPIKE]"
                label="EGRESS LAG"
                value="142 ms"
                trend={{ value: '+42ms', direction: 'down', label: 'congestion detected' }}
                icon={<Activity className="w-4 h-4" />}
                signal="rose"
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Activity Sparklines ── */}
      <ContentSection title="Integrated Micro Activity Gauges" id="activity-sparklines">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Supplying an <code className="text-cyan-400">activity</code> array displays a 7-step micro activity sparkline along the bottom edge of the card.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <StatCard
    indexTag="[CORE_BUFFER]"
    label="ORBITAL PACKET FLOW"
    value="8.4M PKT/s"
    subtext="Dynamic packet routing active"
    activity={[30, 45, 60, 40, 80, 95, 70]}
    icon={<Globe className="w-4 h-4" />}
    signal="cyan"
    cornerTicks
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="max-w-sm w-full min-w-0">
                <StatCard
                  indexTag="[CORE_BUFFER]"
                  label="ORBITAL PACKET FLOW"
                  value="8.4M PKT/s"
                  subtext="Dynamic packet routing active"
                  activity={[30, 45, 60, 40, 80, 95, 70]}
                  icon={<Globe className="w-4 h-4" />}
                  signal="cyan"
                  cornerTicks
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Spectrum ── */}
      <ContentSection title="Signal Accents (Cyan, Violet, Emerald, Amber, Rose)" id="signal-spectrum">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">signal</code> prop selects the numerical metric and icon highlight color.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
  <StatCard label="QUANTUM OPS" value="1.2" unit="PFLOPS" signal="cyan" icon={<Zap className="w-4 h-4" />} />
  <StatCard label="LATTICE BYTES" value="128" unit="GB" signal="violet" icon={<Database className="w-4 h-4" />} />
  <StatCard label="ENCLAVE INTEGRITY" value="100%" signal="emerald" icon={<ShieldCheck className="w-4 h-4" />} />
  <StatCard label="ZERO-DAY ISOLATION" value="14" unit="VEC" signal="amber" icon={<Lock className="w-4 h-4" />} />
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <StatCard label="QUANTUM OPS" value="1.2" unit="PFLOPS" signal="cyan" icon={<Zap className="w-4 h-4" />} />
              <StatCard label="LATTICE BYTES" value="128" unit="GB" signal="violet" icon={<Database className="w-4 h-4" />} />
              <StatCard label="ENCLAVE INTEGRITY" value="100%" signal="emerald" icon={<ShieldCheck className="w-4 h-4" />} />
              <StatCard label="ZERO-DAY ISOLATION" value="14" unit="VEC" signal="amber" icon={<Lock className="w-4 h-4" />} />
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
              description: 'Telemetry metric label text.',
              type: 'string',
            },
            {
              property: 'value',
              description: 'Oversized numerical or text telemetry reading value.',
              type: 'string | number',
            },
            {
              property: 'unit',
              description: 'Measurement unit symbol (e.g. "GB/s", "PFlops", "ms").',
              type: 'string',
            },
            {
              property: 'subtext',
              description: 'Additional contextual subtext displayed below value.',
              type: 'string',
            },
            {
              property: 'indexTag',
              description: 'Top-left system telemetry index tag (e.g. "[SYS.01]").',
              type: 'string',
            },
            {
              property: 'trend',
              description: 'Telemetry trend delta object ({ value, direction, label }).',
              type: 'StatCardTrend',
            },
            {
              property: 'activity',
              description: 'Recent activity cycle values array (0 - 100).',
              type: 'number[]',
            },
            {
              property: 'signal',
              description: 'Accent highlight color.',
              type: '"cyan" | "violet" | "emerald" | "amber" | "rose"',
              defaultValue: '"cyan"',
            },
            {
              property: 'cornerTicks',
              description: 'Renders tactical corner bracket marks.',
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
            <strong>High Contrast:</strong> Numerical readings and labels use high contrast monospace fonts for maximum clarity.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
