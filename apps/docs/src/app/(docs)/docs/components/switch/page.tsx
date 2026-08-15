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
  Switch,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Cpu } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Subtext Descriptions', level: 2 },
  { id: 'signal-variants', text: 'Signal & Semantic Glow Presets', level: 2 },
  { id: 'label-positioning', text: 'Label Positioning (Left vs Right)', level: 2 },
  { id: 'sizes', text: 'Scale & Density (sm, md, lg)', level: 2 },
  { id: 'frosted-glass-overclock', text: 'Frosted Cyber-Glass Overclock Panel', level: 2 },
  { id: 'tactical-hud-matrix', text: 'Tactical HUD Defense Subsystem Grid', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function SwitchDocsPage() {
  const [overclock, setOverclock] = React.useState(true);
  const [cooling, setCooling] = React.useState(true);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Switch"
        description="Instantaneous binary toggle switches engineered with glowing cyan/violet laser thumbs, fluid spring animations, and monospace telemetry labels."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Switch } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Subtext Descriptions" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Switches include built-in <code className="text-cyan-400">label</code> and <code className="text-cyan-400">description</code> props for complete, accessible toggle rows.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-5 max-w-md w-full">
  <Switch
    label="Active Shield Matrix"
    description="Reflects kinetic energy and laser pulses"
    defaultChecked
  />
  <Switch
    label="Quantum Telemetry Sync"
    description="Streams realtime core metrics to orbital node"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-5 max-w-md w-full">
                <Switch
                  label="Active Shield Matrix"
                  description="Reflects kinetic energy and laser pulses"
                  defaultChecked
                />
                <Switch
                  label="Quantum Telemetry Sync"
                  description="Streams realtime core metrics to orbital node"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Variants ── */}
      <ContentSection title="Signal & Semantic Glow Presets" id="signal-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Choose between electric <code className="text-cyan-400">neon (Cyan)</code>, <code className="text-violet-400">neonPurple</code>, <code className="text-emerald-400">neonGreen</code>, and minimal <code className="text-slate-400">default</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
  <Switch variant="neon" label="Neon Cyan" description="Tactical default" defaultChecked />
  <Switch variant="neonPurple" label="Neon Violet" description="Neural synapse" defaultChecked />
  <Switch variant="neonGreen" label="Neon Emerald" description="Bio-lock stable" defaultChecked />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
                <Switch variant="neon" label="Neon Cyan" description="Tactical default" defaultChecked />
                <Switch variant="neonPurple" label="Neon Violet" description="Neural synapse" defaultChecked />
                <Switch variant="neonGreen" label="Neon Emerald" description="Bio-lock stable" defaultChecked />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Label Positioning ── */}
      <ContentSection title="Label Positioning (Left vs Right)" id="label-positioning">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">labelPosition=&quot;left&quot;</code> to position titles on the left for standard settings list layouts.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4 p-5 rounded-xl bg-[#050811] border border-white/[0.06] max-w-md w-full">
  <div className="flex items-center justify-between">
    <Switch
      labelPosition="left"
      variant="neon"
      label="Subnet Proxy Bridging"
      description="Route all local packets via encrypted egress"
      defaultChecked
    />
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="p-5 rounded-xl bg-[#050811] border border-white/[0.06] max-w-md w-full shadow-xl">
                <Switch
                  labelPosition="left"
                  variant="neon"
                  label="Subnet Proxy Bridging"
                  description="Route all local packets via encrypted egress"
                  defaultChecked
                  className="w-full justify-between"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Scale & Density (sm, md, lg)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Switch tracks are calibrated in three standardized densities: <code className="text-cyan-400">sm (16x28px)</code>, <code className="text-cyan-400">md (20x36px)</code>, and <code className="text-cyan-400">lg (24x44px)</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-5 max-w-md w-full">
  <Switch switchSize="sm" label="Compact scale (sm - 16px)" defaultChecked />
  <Switch switchSize="md" label="Standard scale (md - 20px)" defaultChecked />
  <Switch switchSize="lg" label="High-touch hero scale (lg - 24px)" defaultChecked />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-5 max-w-md w-full">
                <Switch switchSize="sm" label="Compact scale (sm - 16px)" defaultChecked />
                <Switch switchSize="md" label="Standard scale (md - 20px)" defaultChecked />
                <Switch switchSize="lg" label="High-touch hero scale (lg - 24px)" defaultChecked />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Overclock Panel ── */}
      <ContentSection title="Frosted Cyber-Glass Overclock Panel" id="frosted-glass-overclock">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Construct glassmorphic hardware tuning widgets layered atop circuit substrate boards.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-6">
    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Cpu className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">HARDWARE OVERCLOCK</span>
      </div>
      <Badge variant="glass" dot dotColor={overclock ? 'cyan' : 'slate'}>
        {overclock ? 'BOOST ACTIVE' : 'NOMINAL'}
      </Badge>
    </div>

    <div className="space-y-4">
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
        <Switch
          variant="neon"
          label="Supercharge Core Frequency"
          description="Boost clock speed to 5.4 GHz (+35%)"
          checked={overclock}
          onCheckedChange={setOverclock}
        />
      </div>

      <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
        <Switch
          variant="neonGreen"
          label="Cryogenic Liquid Cooling"
          description="Maintain sub-zero junction thermal levels"
          checked={cooling}
          onCheckedChange={setCooling}
        />
      </div>
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        COMMIT PROFILE
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
                      <Cpu className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">HARDWARE OVERCLOCK</span>
                    </div>
                    <Badge variant="glass" dot dotColor={overclock ? 'cyan' : 'slate'}>
                      {overclock ? 'BOOST ACTIVE' : 'NOMINAL'}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <Switch
                        variant="neon"
                        label="Supercharge Core Frequency"
                        description="Boost clock speed to 5.4 GHz (+35%)"
                        checked={overclock}
                        onCheckedChange={setOverclock}
                      />
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <Switch
                        variant="neonGreen"
                        label="Cryogenic Liquid Cooling"
                        description="Maintain sub-zero junction thermal levels"
                        checked={cooling}
                        onCheckedChange={setCooling}
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      COMMIT PROFILE
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Defense Subsystem Grid ── */}
      <ContentSection title="Tactical HUD Defense Subsystem Grid" id="tactical-hud-matrix">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission control switches embedded into tactical HUD consoles.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SUBSYSTEM INTERCEPT MATRIX</CardTitle>
      <Badge variant="neon" size="sm">ONLINE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Configure real-time automation interceptors.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
      <Switch
        variant="neon"
        label="Kinetic Defense Shield"
        description="Deflects 95% incoming macro-debris"
        defaultChecked
      />
    </div>
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
      <Switch
        variant="neonPurple"
        label="Automated Counter-EMP"
        description="Discharges capacitor banks on pulse detection"
        defaultChecked
      />
    </div>
    <div className="flex items-center justify-between">
      <Switch
        variant="neonGreen"
        label="Orbital Optical Comm Laser"
        description="Establish direct line-of-sight laser uplink"
      />
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SUBSYSTEM INTERCEPT MATRIX</CardTitle>
                    <Badge variant="neon" size="sm">ONLINE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Configure real-time automation interceptors.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <Switch
                      variant="neon"
                      label="Kinetic Defense Shield"
                      description="Deflects 95% incoming macro-debris"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <Switch
                      variant="neonPurple"
                      label="Automated Counter-EMP"
                      description="Discharges capacitor banks on pulse detection"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Switch
                      variant="neonGreen"
                      label="Orbital Optical Comm Laser"
                      description="Establish direct line-of-sight laser uplink"
                    />
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
              description: 'Color theme and laser glow styling preset.',
              type: '"default" | "neon" | "neonPurple" | "neonGreen" | "primary" | "primary-subtle" | "primary-outline"',
              defaultValue: '"default"',
            },
            {
              property: 'switchSize',
              description: 'Physical dimension of the pill track.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'label',
              description: 'Primary text label displayed alongside the switch.',
              type: 'string',
            },
            {
              property: 'description',
              description: 'Monospace secondary description beneath the label.',
              type: 'string',
            },
            {
              property: 'labelPosition',
              description: 'Renders the label content to the left or right of the track.',
              type: '"left" | "right"',
              defaultValue: '"right"',
            },
            {
              property: 'checked',
              description: 'Controlled active boolean state.',
              type: 'boolean',
            },
            {
              property: 'defaultChecked',
              description: 'Initial toggle state in uncontrolled mode.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'onCheckedChange',
              description: 'Callback fired whenever the switch toggles state.',
              type: '(checked: boolean) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Switch Role:</strong> Implements <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;switch&quot;</code> and synchronizes <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-checked</code>.
          </li>
          <li>
            <strong>Keyboard Operation:</strong> Pressing <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">Space</code> or <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">Enter</code> toggles the switch seamlessly.
          </li>
          <li>
            <strong>Focus Visibility:</strong> Features high-contrast <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">peer-focus-visible:ring-2</code> halos.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Immediate Effect:</strong> Switches should take effect immediately upon toggle without requiring a separate &quot;Save&quot; submit step.
          </li>
          <li>
            <strong>Label Clarity:</strong> State labels should reflect what feature is enabled rather than changing text on toggle (e.g. &quot;Liquid Cooling&quot; rather than &quot;Turn On&quot;).
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
