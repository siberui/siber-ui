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
  Progress,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { HardDrive } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Value Binding', level: 2 },
  { id: 'neon-variants', text: 'Neon Glow Presets (Cyan, Purple, Green, Rose)', level: 2 },
  { id: 'sizes', text: 'Thickness & Scale (sm, md, lg)', level: 2 },
  { id: 'indeterminate', text: 'Indeterminate Scanning Mode', level: 2 },
  { id: 'frosted-glass-meter', text: 'Frosted Cyber-Glass Storage Buffer Card', level: 2 },
  { id: 'tactical-hud-dashboard', text: 'Tactical HUD Hardware Telemetry Dashboard', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ProgressDocsPage() {
  const [val, setVal] = React.useState(68);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Progress"
        description="High-contrast progress bars featuring saturated neon fills, outer laser glow shadows, indeterminate infinite sweeps, and Radix UI accessibility."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Progress } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Value Binding" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass a numerical <code className="text-cyan-400">value</code> (0–100) to render a smoothly animated indicator fill.
          </p>

          <Playground
            code={`<div className="space-y-3 w-full max-w-md">
  <div className="flex justify-between items-center text-xs font-mono">
    <span className="text-slate-400">BUFFER UPLOAD PROGRESS</span>
    <span className="text-cyan-400 font-bold">{val}%</span>
  </div>
  <Progress value={val} variant="neon" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="space-y-3 w-full max-w-md">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">BUFFER UPLOAD PROGRESS</span>
                  <span className="text-cyan-400 font-bold">{val}%</span>
                </div>
                <Progress value={val} variant="neon" />
                <div className="flex gap-2 justify-end pt-2">
                  <Button variant="secondary" size="sm" onClick={() => setVal(Math.max(0, val - 15))}>-15%</Button>
                  <Button variant="neon" size="sm" glow onClick={() => setVal(Math.min(100, val + 15))}>+15%</Button>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variants ── */}
      <ContentSection title="Neon Glow Presets (Cyan, Purple, Green, Rose)" id="neon-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Choose from laser illuminated semantic fill colors with outer glow projection.
          </p>

          <Playground
            code={`<div className="space-y-6 w-full max-w-md">
  <div className="space-y-1.5">
    <div className="flex justify-between text-xs font-mono">
      <span className="text-cyan-400">NEURAL LINK (CYAN)</span>
      <span className="text-slate-400">92%</span>
    </div>
    <Progress value={92} variant="neon" />
  </div>

  <div className="space-y-1.5">
    <div className="flex justify-between text-xs font-mono">
      <span className="text-purple-400">LATTICE ENCRYPTION (PURPLE)</span>
      <span className="text-slate-400">74%</span>
    </div>
    <Progress value={74} variant="neonPurple" />
  </div>

  <div className="space-y-1.5">
    <div className="flex justify-between text-xs font-mono">
      <span className="text-emerald-400">INTEGRITY CHECK (GREEN)</span>
      <span className="text-slate-400">100%</span>
    </div>
    <Progress value={100} variant="neonGreen" />
  </div>

  <div className="space-y-1.5">
    <div className="flex justify-between text-xs font-mono">
      <span className="text-rose-400">REACTOR TEMPERATURE (ROSE)</span>
      <span className="text-rose-400 font-bold">88%</span>
    </div>
    <Progress value={88} variant="destructive" />
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="space-y-6 w-full max-w-md">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cyan-400">NEURAL LINK (CYAN)</span>
                    <span className="text-slate-400">92%</span>
                  </div>
                  <Progress value={92} variant="neon" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-purple-400">LATTICE ENCRYPTION (PURPLE)</span>
                    <span className="text-slate-400">74%</span>
                  </div>
                  <Progress value={74} variant="neonPurple" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-emerald-400">INTEGRITY CHECK (GREEN)</span>
                    <span className="text-slate-400">100%</span>
                  </div>
                  <Progress value={100} variant="neonGreen" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-rose-400">REACTOR TEMPERATURE (ROSE)</span>
                    <span className="text-rose-400 font-bold">88%</span>
                  </div>
                  <Progress value={88} variant="destructive" />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Thickness & Scale (sm, md, lg)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Adjust track height between hairline <code className="text-cyan-400">sm (6px)</code>, standard <code className="text-cyan-400">md (10px)</code>, and prominent <code className="text-cyan-400">lg (16px)</code>.
          </p>

          <Playground
            code={`<div className="space-y-6 w-full max-w-md">
  <div className="space-y-1.5">
    <span className="text-[11px] font-mono text-slate-500">SM (6PX HEIGHT)</span>
    <Progress value={65} size="sm" variant="neon" />
  </div>

  <div className="space-y-1.5">
    <span className="text-[11px] font-mono text-slate-500">MD (10PX HEIGHT)</span>
    <Progress value={65} size="md" variant="neon" />
  </div>

  <div className="space-y-1.5">
    <span className="text-[11px] font-mono text-slate-500">LG (16PX HEIGHT)</span>
    <Progress value={65} size="lg" variant="neon" />
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="space-y-6 w-full max-w-md">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-slate-500">SM (6PX HEIGHT)</span>
                  <Progress value={65} size="sm" variant="neon" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-slate-500">MD (10PX HEIGHT)</span>
                  <Progress value={65} size="md" variant="neon" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-slate-500">LG (16PX HEIGHT)</span>
                  <Progress value={65} size="lg" variant="neon" />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Indeterminate State ── */}
      <ContentSection title="Indeterminate Scanning Mode" id="indeterminate">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">isIndeterminate</code> or omit <code className="text-cyan-400">value</code> to trigger a continuous back-and-forth laser sweep animation.
          </p>

          <Playground
            code={`<div className="space-y-3 w-full max-w-md">
  <div className="flex justify-between items-center text-xs font-mono">
    <span className="text-cyan-400">SEARCHING SUBSPACE FREQUENCIES...</span>
    <Badge variant="neon" size="sm">SCANNING</Badge>
  </div>
  <Progress isIndeterminate variant="neon" size="md" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="space-y-3 w-full max-w-md">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-cyan-400">SEARCHING SUBSPACE FREQUENCIES...</span>
                  <Badge variant="neon" size="sm">SCANNING</Badge>
                </div>
                <Progress isIndeterminate variant="neon" size="md" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Storage Buffer Card ── */}
      <ContentSection title="Frosted Cyber-Glass Storage Buffer Card" id="frosted-glass-meter">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Embed progress meters inside acrylic glass panels with circuit textures and active border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-6">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <HardDrive className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">NVME STORAGE BUFFER</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">842 GB / 1 TB</Badge>
    </div>

    <div className="space-y-2">
      <div className="flex justify-between text-xs font-mono text-slate-300">
        <span>ENCRYPTED PARTITION</span>
        <span className="text-cyan-400 font-bold">84.2%</span>
      </div>
      <Progress value={84.2} variant="neon" size="md" />
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        FLUSH WRITE JOURNAL
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">NVME STORAGE BUFFER</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">842 GB / 1 TB</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>ENCRYPTED PARTITION</span>
                      <span className="text-cyan-400 font-bold">84.2%</span>
                    </div>
                    <Progress value={84.2} variant="neon" size="md" />
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      FLUSH WRITE JOURNAL
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Hardware Telemetry Dashboard ── */}
      <ContentSection title="Tactical HUD Hardware Telemetry Dashboard" id="tactical-hud-dashboard">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Multi-gauge cluster monitor dashboard card.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">NODE HARDWARE UTILIZATION</CardTitle>
      <Badge variant="neon" size="sm">OPTIMAL</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Realtime utilization across node compute subsystems.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs font-mono text-slate-300">
        <span>CPU CORE LOAD</span>
        <span className="text-cyan-400">42%</span>
      </div>
      <Progress value={42} variant="neon" size="sm" />
    </div>

    <div className="space-y-1.5">
      <div className="flex justify-between text-xs font-mono text-slate-300">
        <span>ECC RAM (64 GB)</span>
        <span className="text-purple-400">68%</span>
      </div>
      <Progress value={68} variant="neonPurple" size="sm" />
    </div>

    <div className="space-y-1.5">
      <div className="flex justify-between text-xs font-mono text-slate-300">
        <span>NETWORK TX BANDWIDTH</span>
        <span className="text-emerald-400">24%</span>
      </div>
      <Progress value={24} variant="neonGreen" size="sm" />
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">NODE HARDWARE UTILIZATION</CardTitle>
                    <Badge variant="neon" size="sm">OPTIMAL</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Realtime utilization across node compute subsystems.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>CPU CORE LOAD</span>
                      <span className="text-cyan-400">42%</span>
                    </div>
                    <Progress value={42} variant="neon" size="sm" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>ECC RAM (64 GB)</span>
                      <span className="text-purple-400">68%</span>
                    </div>
                    <Progress value={68} variant="neonPurple" size="sm" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>NETWORK TX BANDWIDTH</span>
                      <span className="text-emerald-400">24%</span>
                    </div>
                    <Progress value={24} variant="neonGreen" size="sm" />
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
              description: 'Current progress completion percentage (0–100).',
              type: 'number',
            },
            {
              property: 'variant',
              description: 'Visual color fill and glowing laser shadow theme.',
              type: '"default" | "neon" | "neonPurple" | "neonGreen" | "destructive"',
              defaultValue: '"default"',
            },
            {
              property: 'size',
              description: 'Physical track height thickness.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'isIndeterminate',
              description: 'Renders an endless back-and-forth scanning laser beam when duration/total cannot be calculated.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'indicatorClassName',
              description: 'Custom Tailwind class overrides passed directly to the inner fill bar.',
              type: 'string',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Radix UI Primitive:</strong> Built on Radix UI Progress primitive, adhering to W3C WAI-ARIA Progressbar specifications.
          </li>
          <li>
            <strong>ARIA Attributes:</strong> Automatically populates <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-valuenow</code>, <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-valuemin=&quot;0&quot;</code>, and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-valuemax=&quot;100&quot;</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Labels:</strong> Always accompany progress bars with textual numerical percentages (<code className="text-cyan-400">74%</code>) and task labels.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
