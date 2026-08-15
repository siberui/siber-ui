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
  Slider,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Activity } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Live Readouts', level: 2 },
  { id: 'signal-variants', text: 'Signal & Semantic Color Halos', level: 2 },
  { id: 'dual-range', text: 'Multi-Thumb Dual Range Bounding', level: 2 },
  { id: 'frosted-glass-calibrator', text: 'Frosted Cyber-Glass Optical Tuner', level: 2 },
  { id: 'tactical-hud-equalizer', text: 'Tactical HUD Telemetry Calibrator Mock', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function SliderDocsPage() {
  const [gain, setGain] = React.useState([75]);
  const [bandwidth, setBandwidth] = React.useState([20, 80]);
  const [pulse, setPulse] = React.useState([64]);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Slider"
        description="High-precision analog control tracks featuring glowing laser fill bars, responsive thumb physics, and dual-point range bounding."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Slider } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Live Readouts" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Sliders bind directly to numerical array values and support custom min, max, and step intervals.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-3 max-w-md w-full">
  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
    <span className="text-cyan-400 font-bold">TRANSMITTER GAIN</span>
    <span className="tabular-nums">{gain[0]} dB</span>
  </div>
  <Slider value={gain} onValueChange={setGain} max={100} step={1} />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-3 max-w-md w-full">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-cyan-400 font-bold">TRANSMITTER GAIN</span>
                  <span className="tabular-nums">{gain[0]} dB</span>
                </div>
                <Slider value={gain} onValueChange={setGain} max={100} step={1} />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Variants ── */}
      <ContentSection title="Signal & Semantic Color Halos" id="signal-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select between vibrant laser fills: <code className="text-cyan-400">neon (Cyan)</code>, <code className="text-violet-400">neonPurple</code>, and <code className="text-emerald-400">neonGreen</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-6 max-w-md w-full">
  <div className="space-y-2">
    <span className="text-xs font-mono text-cyan-400 font-bold">CYAN LASER FREQUENCY</span>
    <Slider variant="neon" defaultValue={[85]} max={100} />
  </div>

  <div className="space-y-2">
    <span className="text-xs font-mono text-purple-400 font-bold">VIOLET NEURAL MATRIX</span>
    <Slider variant="neonPurple" defaultValue={[60]} max={100} />
  </div>

  <div className="space-y-2">
    <span className="text-xs font-mono text-emerald-400 font-bold">EMERALD BIO-METRIC STABILIZER</span>
    <Slider variant="neonGreen" defaultValue={[45]} max={100} />
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-6 max-w-md w-full">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">CYAN LASER FREQUENCY</span>
                  <Slider variant="neon" defaultValue={[85]} max={100} />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-purple-400 font-bold">VIOLET NEURAL MATRIX</span>
                  <Slider variant="neonPurple" defaultValue={[60]} max={100} />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold">EMERALD BIO-METRIC STABILIZER</span>
                  <Slider variant="neonGreen" defaultValue={[45]} max={100} />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Dual Range ── */}
      <ContentSection title="Multi-Thumb Dual Range Bounding" id="dual-range">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass a multi-element array (e.g. <code className="text-cyan-400">[20, 80]</code>) to create dual-point range limits for bandwidth filtering and min/max throttling.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-3 max-w-md w-full">
  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
    <span className="text-cyan-400 font-bold">FREQUENCY BANDWIDTH FILTER</span>
    <span className="tabular-nums">{bandwidth[0]} GHz – {bandwidth[1]} GHz</span>
  </div>
  <Slider
    variant="neon"
    value={bandwidth}
    onValueChange={setBandwidth}
    max={100}
    step={1}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-3 max-w-md w-full">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-cyan-400 font-bold">FREQUENCY BANDWIDTH FILTER</span>
                  <span className="tabular-nums">{bandwidth[0]} GHz – {bandwidth[1]} GHz</span>
                </div>
                <Slider
                  variant="neon"
                  value={bandwidth}
                  onValueChange={setBandwidth}
                  max={100}
                  step={1}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Optical Tuner ── */}
      <ContentSection title="Frosted Cyber-Glass Optical Tuner" id="frosted-glass-calibrator">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Compose acrylic optical calibrators with circuit board textures and boundary laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-6">
    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Activity className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">OPTICAL PULSE TUNER</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">CALIBRATING</Badge>
    </div>

    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
          <span>PULSE EMISSION POWER</span>
          <span className="text-cyan-400 font-bold">{pulse[0]}%</span>
        </div>
        <Slider variant="neon" value={pulse} onValueChange={setPulse} max={100} />
      </div>
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        LOCK LASER VECTOR
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">OPTICAL PULSE TUNER</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">CALIBRATING</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span>PULSE EMISSION POWER</span>
                        <span className="text-cyan-400 font-bold">{pulse[0]}%</span>
                      </div>
                      <Slider variant="neon" value={pulse} onValueChange={setPulse} max={100} />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      LOCK LASER VECTOR
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Calibrator Mock ── */}
      <ContentSection title="Tactical HUD Telemetry Calibrator Mock" id="tactical-hud-equalizer">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Multi-channel telemetry calibration array embedded into a mission command dashboard.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">QUANTUM FLUX EQUALIZER</CardTitle>
      <Badge variant="neon" size="sm">ONLINE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Calibrate core harmonics across sub-space carrier channels.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-5">
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-mono text-slate-300">
        <span>CH-01: CARRIER FREQ</span>
        <span className="text-cyan-400 font-bold">14.2 GHz</span>
      </div>
      <Slider variant="neon" defaultValue={[72]} max={100} />
    </div>

    <div className="space-y-2">
      <div className="flex justify-between text-xs font-mono text-slate-300">
        <span>CH-02: HARMONIC BIAS</span>
        <span className="text-purple-400 font-bold">-4.8 dB</span>
      </div>
      <Slider variant="neonPurple" defaultValue={[40]} max={100} />
    </div>

    <div className="space-y-2">
      <div className="flex justify-between text-xs font-mono text-slate-300">
        <span>CH-03: DAMPING FACTOR</span>
        <span className="text-emerald-400 font-bold">98.2%</span>
      </div>
      <Slider variant="neonGreen" defaultValue={[98]} max={100} />
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">QUANTUM FLUX EQUALIZER</CardTitle>
                    <Badge variant="neon" size="sm">ONLINE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Calibrate core harmonics across sub-space carrier channels.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>CH-01: CARRIER FREQ</span>
                      <span className="text-cyan-400 font-bold">14.2 GHz</span>
                    </div>
                    <Slider variant="neon" defaultValue={[72]} max={100} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>CH-02: HARMONIC BIAS</span>
                      <span className="text-purple-400 font-bold">-4.8 dB</span>
                    </div>
                    <Slider variant="neonPurple" defaultValue={[40]} max={100} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>CH-03: DAMPING FACTOR</span>
                      <span className="text-emerald-400 font-bold">98.2%</span>
                    </div>
                    <Slider variant="neonGreen" defaultValue={[98]} max={100} />
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
              description: 'Color theme and laser glow preset.',
              type: '"default" | "neon" | "neonPurple" | "neonGreen"',
              defaultValue: '"default"',
            },
            {
              property: 'value',
              description: 'Controlled numerical array value representing thumb positions.',
              type: 'number[]',
            },
            {
              property: 'defaultValue',
              description: 'Initial numerical array value in uncontrolled mode.',
              type: 'number[]',
            },
            {
              property: 'onValueChange',
              description: 'Callback fired continuously as the slider thumbs are dragged.',
              type: '(value: number[]) => void',
            },
            {
              property: 'min',
              description: 'The minimum permissible numerical value.',
              type: 'number',
              defaultValue: '0',
            },
            {
              property: 'max',
              description: 'The maximum permissible numerical value.',
              type: 'number',
              defaultValue: '100',
            },
            {
              property: 'step',
              description: 'Stepping resolution interval for thumb increments.',
              type: 'number',
              defaultValue: '1',
            },
            {
              property: 'disabled',
              description: 'Disables slider interaction and dims visual feedback.',
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
            <strong>Radix Slider Primitives:</strong> Built directly on top of Radix UI Slider primitive for rock-solid WAI-ARIA slider patterns and multi-thumb focus management.
          </li>
          <li>
            <strong>Keyboard Stepping:</strong> Use Left/Down arrow keys to decrement and Right/Up arrow keys to increment values. PageUp and PageDown perform larger step jumps.
          </li>
          <li>
            <strong>Touch Sensitivity:</strong> Fully responsive to touch drags with zero touch jitter on mobile and tablet glass interfaces.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Value Displays:</strong> Always accompany sliders with a live text readout so users know the precise numerical value selected.
          </li>
          <li>
            <strong>Step Precision:</strong> Set appropriate <code className="text-cyan-400">step</code> increments (e.g. <code className="text-cyan-400">step=&#123;5&#125;</code> or <code className="text-cyan-400">step=&#123;0.1&#125;</code>) matching your data domain.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
