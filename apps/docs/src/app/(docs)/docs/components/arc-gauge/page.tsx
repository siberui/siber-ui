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
  ArcGauge,
  Slider,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
} from '@siberui/react';
import { Cpu } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & 240° Cockpit Telemetry', level: 2 },
  { id: 'sweep-angles', text: 'Arc Sweep Angles (180°, 240°, 270°)', level: 2 },
  { id: 'auto-thresholds', text: 'Auto Severity Threshold Color Transition', level: 2 },
  { id: 'sizes', text: 'Dimension Scales (sm, md, lg, xl)', level: 2 },
  { id: 'interactive-tuning', text: 'Interactive Gauge Calibration', level: 2 },
  { id: 'telemetry-cluster', text: 'Composite Cyber Telemetry Cluster', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function ArcGaugeDocsPage() {
  const [gaugeValue, setGaugeValue] = React.useState(72);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Arc Gauge"
        description="Precision SVG telemetry gauge with radial tick marks, neon arc glow, dynamic auto threshold coloring, and cockpit sweep angles."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { ArcGauge } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & 240° Cockpit Telemetry" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Standard 240° cockpit radial dial with tick marks, glow filter, and numerical telemetry readout.
          </p>

          <Playground
            code={`<ArcGauge
  value={78}
  min={0}
  max={100}
  unit="%"
  label="CORE COMPUTE LOAD"
  color="cyan"
  glow
  showTicks
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <ArcGauge
                value={78}
                min={0}
                max={100}
                unit="%"
                label="CORE COMPUTE LOAD"
                color="cyan"
                glow
                showTicks
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sweep Angles ── */}
      <ContentSection title="Arc Sweep Angles (180°, 240°, 270°)" id="sweep-angles">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">angle</code> prop configures the dial sweep: <code className="text-cyan-400">180</code> (Semi-circle), <code className="text-cyan-400">240</code> (Standard Cockpit), or <code className="text-cyan-400">270</code> (Deep Arch).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  <div className="flex justify-center p-4 bg-[#050914] rounded-xl border border-white/[0.06]">
    <ArcGauge value={60} angle={180} label="180° SEMI-ARC" color="cyan" />
  </div>
  <div className="flex justify-center p-4 bg-[#050914] rounded-xl border border-white/[0.06]">
    <ArcGauge value={75} angle={240} label="240° COCKPIT" color="violet" />
  </div>
  <div className="flex justify-center p-4 bg-[#050914] rounded-xl border border-white/[0.06]">
    <ArcGauge value={90} angle={270} label="270° DEEP ARCH" color="emerald" />
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="flex justify-center p-4 bg-[#050914] rounded-xl border border-white/[0.06]">
                <ArcGauge value={60} angle={180} label="180° SEMI-ARC" color="cyan" />
              </div>
              <div className="flex justify-center p-4 bg-[#050914] rounded-xl border border-white/[0.06]">
                <ArcGauge value={75} angle={240} label="240° COCKPIT" color="violet" />
              </div>
              <div className="flex justify-center p-4 bg-[#050914] rounded-xl border border-white/[0.06]">
                <ArcGauge value={90} angle={270} label="270° DEEP ARCH" color="emerald" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Auto Thresholds ── */}
      <ContentSection title="Auto Severity Threshold Color Transition" id="auto-thresholds">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            With <code className="text-cyan-400">color=&quot;auto&quot;</code> enabled, the arc color automatically transitions from Green (&lt;60%) to Amber (60-85%) and Rose (&gt;85%).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  <ArcGauge value={42} color="auto" label="NOMINAL (<60%)" />
  <ArcGauge value={74} color="auto" label="WARNING (60-85%)" />
  <ArcGauge value={94} color="auto" label="CRITICAL (>85%)" />
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex justify-center">
                <ArcGauge value={42} color="auto" label="NOMINAL (<60%)" />
              </div>
              <div className="flex justify-center">
                <ArcGauge value={74} color="auto" label="WARNING (60-85%)" />
              </div>
              <div className="flex justify-center">
                <ArcGauge value={94} color="auto" label="CRITICAL (>85%)" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Dimension Scales ── */}
      <ContentSection title="Dimension Scales (sm, md, lg, xl)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select a gauge scale via <code className="text-cyan-400">size</code>: <code className="text-cyan-400">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;</code>.
          </p>

          <Playground
            code={`<div className="flex flex-wrap items-center justify-center gap-6 w-full">
  <ArcGauge size="sm" value={80} color="cyan" label="SM (112px)" />
  <ArcGauge size="md" value={80} color="violet" label="MD (176px)" />
  <ArcGauge size="lg" value={80} color="emerald" label="LG (224px)" />
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <ArcGauge size="sm" value={80} color="cyan" label="SM (112px)" />
              <ArcGauge size="md" value={80} color="violet" label="MD (176px)" />
              <ArcGauge size="lg" value={80} color="emerald" label="LG (224px)" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Interactive Tuning ── */}
      <ContentSection title="Interactive Gauge Calibration" id="interactive-tuning">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Drag the slider to test realtime dynamic SVG path transitions and automatic threshold shifts.
          </p>

          <Playground
            code={`const [val, setVal] = useState(72);

<div className="space-y-6">
  <ArcGauge value={val} color="auto" unit="°C" label="REACTOR TEMPERATURE" glow />
  <Slider value={[val]} max={100} onValueChange={(v) => setVal(v[0])} />
</div>`}
          >
            <div className="flex flex-col items-center gap-6 p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full max-w-md mx-auto">
              <ArcGauge value={gaugeValue} color="auto" unit="°C" label="REACTOR TEMPERATURE" glow />
              <div className="w-full space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>SET LEVEL</span>
                  <span>{gaugeValue}°C</span>
                </div>
                <Slider
                  value={[gaugeValue]}
                  max={100}
                  step={1}
                  onValueChange={(val) => {
                    const next = Array.isArray(val) ? val[0] : val;
                    setGaugeValue(next);
                  }}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Telemetry Cluster ── */}
      <ContentSection title="Composite Cyber Telemetry Cluster" id="telemetry-cluster">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission telemetry dashboard card with multiple arc gauges.
          </p>

          <Playground
            code={`<Card className="max-w-2xl mx-auto border-cyan-500/30 bg-[#070b14] shadow-2xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Cpu className="h-4 w-4 text-cyan-400" />
        <CardTitle className="text-sm font-mono text-cyan-400">ORBITAL PROPULSION TELEMETRY</CardTitle>
      </div>
      <Badge variant="glass" dot dotColor="cyan">ONLINE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Realtime plasma injector and magnetic field diagnostics.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
    <ArcGauge size="sm" value={84} unit="PSI" label="CHAMBER PRESSURE" color="cyan" />
    <ArcGauge size="sm" value={92} unit="%" label="PLASMA OUTPUT" color="rose" />
    <ArcGauge size="sm" value={48} unit="A" label="COIL CURRENT" color="emerald" />
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-2xl w-full border-cyan-500/25 bg-[#070b14] shadow-2xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-cyan-400" />
                      <CardTitle className="text-sm font-mono text-cyan-400">ORBITAL PROPULSION TELEMETRY</CardTitle>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">ONLINE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Realtime plasma injector and magnetic field diagnostics.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex justify-center">
                    <ArcGauge size="sm" value={84} unit="PSI" label="CHAMBER PRESSURE" color="cyan" />
                  </div>
                  <div className="flex justify-center">
                    <ArcGauge size="sm" value={92} unit="%" label="PLASMA OUTPUT" color="rose" />
                  </div>
                  <div className="flex justify-center">
                    <ArcGauge size="sm" value={48} unit="A" label="COIL CURRENT" color="emerald" />
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
              property: 'value',
              description: 'Current numerical metric reading value.',
              type: 'number',
              defaultValue: '0',
            },
            {
              property: 'min',
              description: 'Lower bound value limit.',
              type: 'number',
              defaultValue: '0',
            },
            {
              property: 'max',
              description: 'Upper bound value limit.',
              type: 'number',
              defaultValue: '100',
            },
            {
              property: 'unit',
              description: 'Unit of measurement string displayed beside value.',
              type: 'string',
              defaultValue: '"%"',
            },
            {
              property: 'label',
              description: 'Descriptive title text displayed beneath the gauge value.',
              type: 'string',
            },
            {
              property: 'color',
              description: 'Active neon color accent or "auto" threshold.',
              type: '"cyan" | "violet" | "emerald" | "green" | "amber" | "rose" | "auto"',
              defaultValue: '"cyan"',
            },
            {
              property: 'angle',
              description: 'Arc sweep angle in degrees (180, 240, or 270).',
              type: '180 | 240 | 270',
              defaultValue: '240',
            },
            {
              property: 'size',
              description: 'Dimension scale tier.',
              type: '"sm" | "md" | "lg" | "xl"',
              defaultValue: '"md"',
            },
            {
              property: 'showTicks',
              description: 'Renders precision radial tick marks around the arc rim.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'glow',
              description: 'Applies an SVG Gaussian blur glow filter to the stroke.',
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
            <strong>ARIA Meter Semantics:</strong> ArcGauge declares <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;meter&quot;</code>, <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-valuenow</code>, <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-valuemin</code>, and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-valuemax</code>.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
