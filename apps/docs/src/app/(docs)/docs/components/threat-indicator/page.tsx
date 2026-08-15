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
  ThreatIndicator,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
  Slider,
} from '@siberui/react';
import { ShieldAlert } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Circular SVG Meter', level: 2 },
  { id: 'threat-levels', text: 'Threat Severity Spectrum (Low, Medium, High, Critical)', level: 2 },
  { id: 'sizes', text: 'Scale & Scope Dimensions (sm, md, lg)', level: 2 },
  { id: 'dynamic-tuning', text: 'Interactive Gauge Calibration', level: 2 },
  { id: 'frosted-glass-sensor', text: 'Frosted Cyber-Glass Perimeter Threat Sensor', level: 2 },
  { id: 'tactical-hud-vector', text: 'Tactical HUD Threat Vector Analysis Console', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ThreatIndicatorDocsPage() {
  const [threatVal, setThreatVal] = React.useState(78);

  const getComputedLevel = (val: number) => {
    if (val < 30) return 'low';
    if (val < 65) return 'medium';
    if (val < 90) return 'high';
    return 'critical';
  };

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Threat Indicator"
        description="Circular SVG threat telemetry meters featuring square stroke ends, embedded numerical readouts, and severity-driven color pulsing."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { ThreatIndicator } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Circular SVG Meter" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Displays a 360-degree SVG radial gauge with central percentage readouts and uppercase subtext labels.
          </p>

          <Playground
            code={`<div className="flex items-center justify-center p-8">
  <ThreatIndicator level="low" value={24} label="DEFCON 5" size="md" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <ThreatIndicator level="low" value={24} label="DEFCON 5" size="md" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Threat Levels ── */}
      <ContentSection title="Threat Severity Spectrum (Low, Medium, High, Critical)" id="threat-levels">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Color shifts seamlessly from nominal <code className="text-cyan-400">low</code> (Cyan) to caution <code className="text-amber-400">medium</code> (Amber), threat <code className="text-rose-400">high</code> (Rose), and <code className="text-rose-500">critical</code> (Pulsing Rose).
          </p>

          <Playground
            code={`<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
  <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <ThreatIndicator level="low" value={18} label="SEC_LEVEL_1" size="md" />
    <span className="text-xs font-mono text-cyan-400">LOW (CYAN)</span>
  </div>

  <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <ThreatIndicator level="medium" value={48} label="SEC_LEVEL_2" size="md" />
    <span className="text-xs font-mono text-amber-400">MEDIUM (AMBER)</span>
  </div>

  <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <ThreatIndicator level="high" value={82} label="SEC_LEVEL_3" size="md" />
    <span className="text-xs font-mono text-rose-400">HIGH (ROSE)</span>
  </div>

  <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <ThreatIndicator level="critical" value={98} label="SEC_LEVEL_4" size="md" />
    <span className="text-xs font-mono text-rose-500">CRITICAL (PULSE)</span>
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl">
                <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <ThreatIndicator level="low" value={18} label="SEC_LEVEL_1" size="md" />
                  <span className="text-xs font-mono text-cyan-400">LOW (CYAN)</span>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <ThreatIndicator level="medium" value={48} label="SEC_LEVEL_2" size="md" />
                  <span className="text-xs font-mono text-amber-400">MEDIUM (AMBER)</span>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <ThreatIndicator level="high" value={82} label="SEC_LEVEL_3" size="md" />
                  <span className="text-xs font-mono text-rose-400">HIGH (ROSE)</span>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <ThreatIndicator level="critical" value={98} label="SEC_LEVEL_4" size="md" />
                  <span className="text-xs font-mono text-rose-500 font-bold">CRITICAL (PULSE)</span>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Scale & Scope Dimensions (sm, md, lg)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Scale dimensions across <code className="text-cyan-400">sm (64px)</code>, <code className="text-cyan-400">md (96px)</code>, and <code className="text-cyan-400">lg (128px)</code>.
          </p>

          <Playground
            code={`<div className="flex items-center justify-center gap-8">
  <ThreatIndicator size="sm" level="low" value={35} label="SM" />
  <ThreatIndicator size="md" level="medium" value={60} label="MD" />
  <ThreatIndicator size="lg" level="high" value={85} label="LG" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <ThreatIndicator size="sm" level="low" value={35} label="SM" />
                  <span className="text-[10px] font-mono text-slate-500">SM (64px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ThreatIndicator size="md" level="medium" value={60} label="MD" />
                  <span className="text-[10px] font-mono text-slate-500">MD (96px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ThreatIndicator size="lg" level="high" value={85} label="LG" />
                  <span className="text-[10px] font-mono text-slate-500">LG (128px)</span>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Dynamic Tuning ── */}
      <ContentSection title="Interactive Gauge Calibration" id="dynamic-tuning">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Drag the range slider to observe real-time color transitions and animated stroke offsets.
          </p>

          <Playground
            code={`const [threatVal, setThreatVal] = React.useState(78);

<div className="flex flex-col items-center gap-6 max-w-sm w-full">
  <ThreatIndicator
    size="lg"
    value={threatVal}
    level={getComputedLevel(threatVal)}
    label="INCURSION PROBABILITY"
  />
  <Slider
    value={[threatVal]}
    onValueChange={(val) => setThreatVal(val[0])}
    max={100}
    min={0}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col items-center gap-6 max-w-sm w-full">
                <ThreatIndicator
                  size="lg"
                  value={threatVal}
                  level={getComputedLevel(threatVal)}
                  label="INCURSION PROBABILITY"
                />
                <div className="w-full space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>ADJUST SIMULATED LOAD</span>
                    <span className="text-cyan-400">{threatVal}%</span>
                  </div>
                  <Slider
                    value={[threatVal]}
                    onValueChange={(val) => setThreatVal(val[0])}
                    max={100}
                    min={0}
                  />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Perimeter Threat Sensor ── */}
      <ContentSection title="Frosted Cyber-Glass Perimeter Threat Sensor" id="frosted-glass-sensor">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite acrylic sensor panel nested on circuit substrate backgrounds with active border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center">
  <div className="relative z-10 space-y-6 flex flex-col items-center w-full">
    <div className="flex items-center justify-between w-full pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <ShieldAlert className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">OPTICAL PERIMETER SENSOR</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">MONITORED</Badge>
    </div>

    <ThreatIndicator level="low" value={14} label="NOMINAL" size="lg" />

    <div className="w-full text-center space-y-1">
      <span className="text-xs font-mono text-cyan-300">ZERO ACTIVE INTRUSIONS</span>
      <p className="text-[11px] text-slate-400 font-mono">Last anomalous frame detected 42 hours ago</p>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center">
                <div className="relative z-10 space-y-6 flex flex-col items-center w-full">
                  <div className="flex items-center justify-between w-full pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">OPTICAL PERIMETER SENSOR</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">MONITORED</Badge>
                  </div>

                  <ThreatIndicator level="low" value={14} label="NOMINAL" size="lg" />

                  <div className="w-full text-center space-y-1">
                    <span className="text-xs font-mono text-cyan-300">ZERO ACTIVE INTRUSIONS</span>
                    <p className="text-[11px] text-slate-400 font-mono">Last anomalous frame detected 42 hours ago</p>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Threat Vector Analysis Console ── */}
      <ContentSection title="Tactical HUD Threat Vector Analysis Console" id="tactical-hud-vector">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded threat gauges.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DEFENSE FIREWALL MATRIX</CardTitle>
      <Badge variant="destructive" size="sm">ELEVATED</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Automated SYN flood packet filter telemetry.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 flex flex-col items-center gap-6">
    <ThreatIndicator level="high" value={84} label="PACKET DROPS" size="lg" />

    <div className="flex w-full justify-between gap-3 pt-2">
      <Button variant="secondary" size="sm" className="w-1/2">FLUSH TABLE</Button>
      <Button variant="destructive" size="sm" className="w-1/2">ENGAGE SHIELD</Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DEFENSE FIREWALL MATRIX</CardTitle>
                    <Badge variant="destructive" size="sm">ELEVATED</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Automated SYN flood packet filter telemetry.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 flex flex-col items-center gap-6">
                  <ThreatIndicator level="high" value={84} label="PACKET DROPS" size="lg" />

                  <div className="flex w-full justify-between gap-3 pt-2">
                    <Button variant="secondary" size="sm" className="w-1/2">FLUSH TABLE</Button>
                    <Button variant="destructive" size="sm" className="w-1/2">ENGAGE SHIELD</Button>
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
              description: 'Numerical percentage from 0 to 100.',
              type: 'number',
            },
            {
              property: 'level',
              description: 'Threat severity level governing stroke color and critical pulse animation.',
              type: '"low" | "medium" | "high" | "critical"',
              defaultValue: '"low"',
            },
            {
              property: 'label',
              description: 'Uppercase subtext label displayed beneath the percentage readout.',
              type: 'string',
            },
            {
              property: 'size',
              description: 'Physical dimension of the circular meter.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Role Meter:</strong> ThreatIndicator uses <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;meter&quot;</code> with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-valuenow</code>, <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-valuemin=&quot;0&quot;</code>, and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-valuemax=&quot;100&quot;</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Labels:</strong> Always provide a short uppercase <code className="text-cyan-400">label</code> such as &quot;SEVERITY&quot; or &quot;PACKET LOSS&quot; to clarify the measured metric.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
