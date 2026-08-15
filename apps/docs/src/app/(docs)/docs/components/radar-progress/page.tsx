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
  RadarProgress,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Satellite } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Reticle Crosshairs', level: 2 },
  { id: 'color-signals', text: 'Signal Spectrum (Cyan, Green, Rose)', level: 2 },
  { id: 'sizes', text: 'Scale & Scope Dimensions (sm, md, lg)', level: 2 },
  { id: 'scanning-toggle', text: 'Scanning Sweep Toggle', level: 2 },
  { id: 'frosted-glass-radar', text: 'Frosted Cyber-Glass Long-Range Orbital Radar', level: 2 },
  { id: 'tactical-hud-tracker', text: 'Tactical HUD Target Acquisition Display', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function RadarProgressDocsPage() {
  const [isScanning, setIsScanning] = React.useState(true);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Radar Progress"
        description="Concentric targeting radar scopes featuring continuous 360-degree sweep beams, concentric range rings, and hairline reticle crosshairs."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { RadarProgress } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Reticle Crosshairs" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            RadarProgress displays concentric distance rings, crosshairs, and a sweeping gradient radar cone.
          </p>

          <Playground
            code={`<div className="flex items-center justify-center p-8">
  <RadarProgress size="md" color="cyan" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <RadarProgress size="md" color="cyan" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Color Signals ── */}
      <ContentSection title="Signal Spectrum (Cyan, Green, Rose)" id="color-signals">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Switch between tactical <code className="text-cyan-400">cyan</code>, biological sonar <code className="text-emerald-400">green</code>, and hostile incursion <code className="text-rose-400">rose</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
  <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <RadarProgress size="md" color="cyan" />
    <span className="text-xs font-mono text-cyan-400">TACTICAL SCAN (CYAN)</span>
  </div>

  <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <RadarProgress size="md" color="green" />
    <span className="text-xs font-mono text-emerald-400">SONAR SWEEP (GREEN)</span>
  </div>

  <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <RadarProgress size="md" color="rose" />
    <span className="text-xs font-mono text-rose-400">THREAT LOCK (ROSE)</span>
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl">
                <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <RadarProgress size="md" color="cyan" />
                  <span className="text-xs font-mono text-cyan-400">TACTICAL SCAN (CYAN)</span>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <RadarProgress size="md" color="green" />
                  <span className="text-xs font-mono text-emerald-400">SONAR SWEEP (GREEN)</span>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <RadarProgress size="md" color="rose" />
                  <span className="text-xs font-mono text-rose-400">THREAT LOCK (ROSE)</span>
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
            Scale dimensions across <code className="text-cyan-400">sm (64px)</code>, <code className="text-cyan-400">md (128px)</code>, and <code className="text-cyan-400">lg (192px)</code>.
          </p>

          <Playground
            code={`<div className="flex items-center justify-center gap-8">
  <RadarProgress size="sm" color="cyan" />
  <RadarProgress size="md" color="cyan" />
  <RadarProgress size="lg" color="cyan" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <RadarProgress size="sm" color="cyan" />
                  <span className="text-[10px] font-mono text-slate-500">SM (64px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <RadarProgress size="md" color="cyan" />
                  <span className="text-[10px] font-mono text-slate-500">MD (128px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <RadarProgress size="lg" color="cyan" />
                  <span className="text-[10px] font-mono text-slate-500">LG (192px)</span>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Scanning Toggle ── */}
      <ContentSection title="Scanning Sweep Toggle" id="scanning-toggle">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Control the animated sweep cone using the <code className="text-cyan-400">scanning</code> boolean prop.
          </p>

          <Playground
            code={`<div className="flex flex-col items-center gap-6">
  <RadarProgress size="md" color="cyan" scanning={isScanning} />
  <Button variant="secondary" size="sm" onClick={() => setIsScanning(!isScanning)}>
    {isScanning ? 'Pause Radar Sweep' : 'Resume Radar Sweep'}
  </Button>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col items-center gap-6">
                <RadarProgress size="md" color="cyan" scanning={isScanning} />
                <Button variant="secondary" size="sm" onClick={() => setIsScanning(!isScanning)}>
                  {isScanning ? 'Pause Radar Sweep' : 'Resume Radar Sweep'}
                </Button>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Long-Range Orbital Radar ── */}
      <ContentSection title="Frosted Cyber-Glass Long-Range Orbital Radar" id="frosted-glass-radar">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Embed radar scopes inside frosted glass cards with circuit backdrop textures and perimeter beam sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center">
  <div className="relative z-10 space-y-6 flex flex-col items-center w-full">
    <div className="flex items-center justify-between w-full pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Satellite className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">ORBITAL INTERCEPT RADAR</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">TRACKING</Badge>
    </div>

    <RadarProgress size="lg" color="cyan" />

    <div className="w-full text-center space-y-1">
      <span className="text-xs font-mono text-cyan-300">2 OBJECTS IN PROXIMITY</span>
      <p className="text-[11px] text-slate-400 font-mono">Telemetry lock active on Sector 09-Beta</p>
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
                      <Satellite className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">ORBITAL INTERCEPT RADAR</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">TRACKING</Badge>
                  </div>

                  <RadarProgress size="lg" color="cyan" />

                  <div className="w-full text-center space-y-1">
                    <span className="text-xs font-mono text-cyan-300">2 OBJECTS IN PROXIMITY</span>
                    <p className="text-[11px] text-slate-400 font-mono">Telemetry lock active on Sector 09-Beta</p>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Target Acquisition Display ── */}
      <ContentSection title="Tactical HUD Target Acquisition Display" id="tactical-hud-tracker">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded radar reticles.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SECTOR RADAR SCOPE</CardTitle>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Realtime positional sonar for aerospace defense grid.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 flex flex-col items-center gap-6">
    <RadarProgress size="md" color="green" />

    <div className="flex w-full justify-between gap-3 pt-2">
      <Button variant="secondary" size="sm" className="w-1/2">CALIBRATE</Button>
      <Button variant="neon" size="sm" glow className="w-1/2">LOCK TARGET</Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SECTOR RADAR SCOPE</CardTitle>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Realtime positional sonar for aerospace defense grid.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 flex flex-col items-center gap-6">
                  <RadarProgress size="md" color="green" />

                  <div className="flex w-full justify-between gap-3 pt-2">
                    <Button variant="secondary" size="sm" className="w-1/2">CALIBRATE</Button>
                    <Button variant="neon" size="sm" glow className="w-1/2">LOCK TARGET</Button>
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
              property: 'color',
              description: 'Radar scope color and glowing focal point tone.',
              type: '"cyan" | "green" | "rose"',
              defaultValue: '"cyan"',
            },
            {
              property: 'size',
              description: 'Diameter dimensions of the circular radar reticle.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'scanning',
              description: 'Toggles the 360-degree rotational conic gradient sweep animation.',
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
            <strong>Decorative Visualizer:</strong> RadarProgress is a visual telemetry decoration. Pair it with clear live text statistics for screen reader users.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Visual Balance:</strong> When embedding radar scopes inside dashboards, keep surrounding text strictly monospace to preserve the cybernetic aesthetic.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
