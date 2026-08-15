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
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
  Input,
  BorderBeam,
} from '@siberui/react';
import {
  Cpu,
  Gauge,
  HardDrive,
  Wifi,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Anatomy & Card Layout', level: 2 },
  { id: 'surface-variants', text: 'Surface Variants (Elevated, Signal, Terminal, Glass)', level: 2 },
  { id: 'accent-lines', text: 'Laser Accent Wires (Cyan, Purple, Green)', level: 2 },
  { id: 'interactive-cards', text: 'Interactive Hover Responses', level: 2 },
  { id: 'frosted-glass-card', text: 'Frosted Cyber-Glass Quantum Nexus Card', level: 2 },
  { id: 'tactical-hud-card', text: 'Tactical HUD Core Compute Telemetry Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function CardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Card"
        description="Fundamental cybernetic container primitive supporting multi-tier background elevations, illuminated top laser accent wires, and composable header/content/footer slots."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock
          code={`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Anatomy & Card Layout" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Cards provide a structural container divided into <code className="text-cyan-400">CardHeader</code>, <code className="text-cyan-400">CardTitle</code>, <code className="text-cyan-400">CardDescription</code>, <code className="text-cyan-400">CardContent</code>, and <code className="text-cyan-400">CardFooter</code>.
          </p>

          <Playground
            code={`<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>System Configuration</CardTitle>
    <CardDescription>Configure node egress gateway parameters.</CardDescription>
  </CardHeader>
  <CardContent>
    <Input placeholder="Enter gateway IP (e.g. 10.240.0.1)..." />
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="secondary" size="sm">RESET</Button>
    <Button variant="neon" size="sm" glow>DEPLOY CONFIG</Button>
  </CardFooter>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>System Configuration</CardTitle>
                  <CardDescription>Configure node egress gateway parameters.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Input placeholder="Enter gateway IP (e.g. 10.240.0.1)..." />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="secondary" size="sm">RESET</Button>
                  <Button variant="neon" size="sm" glow>DEPLOY CONFIG</Button>
                </CardFooter>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Surface Variants ── */}
      <ContentSection title="Surface Variants (Elevated, Signal, Terminal, Glass)" id="surface-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Choose from distinct background surfaces: <code className="text-cyan-400">default</code>, <code className="text-cyan-400">elevated</code>, <code className="text-cyan-400">signal</code>, <code className="text-cyan-400">terminal</code>, <code className="text-cyan-400">glass</code>, and <code className="text-cyan-400">outlined</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
  <Card variant="default">
    <CardHeader>
      <CardTitle>Default Level 1 Surface</CardTitle>
      <CardDescription>Solid surface with subtle hairline borders</CardDescription>
    </CardHeader>
    <CardContent className="text-xs text-slate-400">
      Optimized for high-density everyday application interfaces.
    </CardContent>
  </Card>

  <Card variant="signal">
    <CardHeader>
      <CardTitle className="text-cyan-400">Signal Surface</CardTitle>
      <CardDescription>Cyan perimeter laser illumination</CardDescription>
    </CardHeader>
    <CardContent className="text-xs text-slate-400">
      Subtle ambient glow aura around card boundaries.
    </CardContent>
  </Card>

  <Card variant="terminal">
    <CardHeader>
      <CardTitle className="font-mono text-emerald-400">TERMINAL SURFACE</CardTitle>
      <CardDescription>Monospace code container</CardDescription>
    </CardHeader>
    <CardContent className="text-xs font-mono text-slate-400">
      &gt; echo &quot;Kernel log trace active&quot;
    </CardContent>
  </Card>

  <Card variant="glass">
    <CardHeader>
      <CardTitle>Frosted Glass Surface</CardTitle>
      <CardDescription>Translucent backdrop blur</CardDescription>
    </CardHeader>
    <CardContent className="text-xs text-slate-400">
      Light refractions layered atop circuit substrates.
    </CardContent>
  </Card>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                <Card variant="default">
                  <CardHeader>
                    <CardTitle>Default Level 1 Surface</CardTitle>
                    <CardDescription>Solid surface with subtle hairline borders</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-slate-400">
                    Optimized for high-density everyday application interfaces.
                  </CardContent>
                </Card>

                <Card variant="signal">
                  <CardHeader>
                    <CardTitle className="text-cyan-400">Signal Surface</CardTitle>
                    <CardDescription>Cyan perimeter laser illumination</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-slate-400">
                    Subtle ambient glow aura around card boundaries.
                  </CardContent>
                </Card>

                <Card variant="terminal">
                  <CardHeader>
                    <CardTitle className="font-mono text-emerald-400">TERMINAL SURFACE</CardTitle>
                    <CardDescription>Monospace code container</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs font-mono text-slate-400">
                    &gt; echo &quot;Kernel log trace active&quot;
                  </CardContent>
                </Card>

                <Card variant="glass">
                  <CardHeader>
                    <CardTitle>Frosted Glass Surface</CardTitle>
                    <CardDescription>Translucent backdrop blur</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-slate-400">
                    Light refractions layered atop circuit substrates.
                  </CardContent>
                </Card>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Accent Lines ── */}
      <ContentSection title="Laser Accent Wires (Cyan, Purple, Green)" id="accent-lines">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Attach a glowing 1px horizontal laser gradient to the top edge using the <code className="text-cyan-400">accentLine</code> prop.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
  <Card accentLine="cyan">
    <CardHeader>
      <CardTitle className="text-sm text-cyan-300">Cyan Laser Wire</CardTitle>
      <CardDescription>Primary telemetry node</CardDescription>
    </CardHeader>
  </Card>

  <Card accentLine="purple">
    <CardHeader>
      <CardTitle className="text-sm text-purple-300">Purple Laser Wire</CardTitle>
      <CardDescription>Cryptographic lattice</CardDescription>
    </CardHeader>
  </Card>

  <Card accentLine="green">
    <CardHeader>
      <CardTitle className="text-sm text-emerald-300">Green Laser Wire</CardTitle>
      <CardDescription>Verified defense enclave</CardDescription>
    </CardHeader>
  </Card>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                <Card accentLine="cyan">
                  <CardHeader>
                    <CardTitle className="text-sm text-cyan-300">Cyan Laser Wire</CardTitle>
                    <CardDescription>Primary telemetry node</CardDescription>
                  </CardHeader>
                </Card>

                <Card accentLine="purple">
                  <CardHeader>
                    <CardTitle className="text-sm text-purple-300">Purple Laser Wire</CardTitle>
                    <CardDescription>Cryptographic lattice</CardDescription>
                  </CardHeader>
                </Card>

                <Card accentLine="green">
                  <CardHeader>
                    <CardTitle className="text-sm text-emerald-300">Green Laser Wire</CardTitle>
                    <CardDescription>Verified defense enclave</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Interactive Cards ── */}
      <ContentSection title="Interactive Hover Responses" id="interactive-cards">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">variant=&quot;interactive&quot;</code> to apply hover lifts, border brightening, and click feedback.
          </p>

          <Playground
            code={`<Card variant="interactive" accentLine="cyan" className="max-w-md w-full">
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm">Interactive Cluster Card</CardTitle>
      <ArrowRight className="h-4 w-4 text-cyan-400" />
    </div>
    <CardDescription>Hover over this card to observe subtle scale and border highlights.</CardDescription>
  </CardHeader>
  <CardContent className="text-xs text-slate-400">
    Ideal for dashboard link tiles, module launchers, and clickable catalog entries.
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Card variant="interactive" accentLine="cyan" className="max-w-md w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">Interactive Cluster Card</CardTitle>
                    <ArrowRight className="h-4 w-4 text-cyan-400" />
                  </div>
                  <CardDescription>Hover over this card to observe subtle scale and border highlights.</CardDescription>
                </CardHeader>
                <CardContent className="text-xs text-slate-400">
                  Ideal for dashboard link tiles, module launchers, and clickable catalog entries.
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Quantum Nexus Card ── */}
      <ContentSection title="Frosted Cyber-Glass Quantum Nexus Card" id="frosted-glass-card">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite card nested over circuit substrate grids with continuous perimeter beam sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-5">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Cpu className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">QUANTUM COMPUTE MODULE</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">ONLINE</Badge>
    </div>

    <div className="space-y-3 font-mono text-xs">
      <div className="flex justify-between py-2 border-b border-white/[0.06]">
        <span className="text-slate-400">Clock Frequency</span>
        <span className="text-cyan-400 font-bold">5.8 GHz</span>
      </div>
      <div className="flex justify-between py-2 border-b border-white/[0.06]">
        <span className="text-slate-400">Memory Bandwidth</span>
        <span className="text-white">1.2 TB/s</span>
      </div>
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        ACCESS CORE TERMINAL
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">QUANTUM COMPUTE MODULE</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">ONLINE</Badge>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between py-2 border-b border-white/[0.06]">
                      <span className="text-slate-400">Clock Frequency</span>
                      <span className="text-cyan-400 font-bold">5.8 GHz</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/[0.06]">
                      <span className="text-slate-400">Memory Bandwidth</span>
                      <span className="text-white">1.2 TB/s</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      ACCESS CORE TERMINAL
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Core Compute Telemetry Card ── */}
      <ContentSection title="Tactical HUD Core Compute Telemetry Card" id="tactical-hud-card">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with live subsystem indicators.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl" accentLine="cyan">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ORBITAL NODE ALPHA</CardTitle>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      High throughput compute cluster telemetry.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-3 font-mono text-xs">
    <div className="flex justify-between py-2 border-b border-white/[0.06]">
      <span className="text-slate-400 flex items-center gap-2">
        <Gauge className="h-3.5 w-3.5 text-cyan-400" />
        Processing Load
      </span>
      <span className="text-cyan-400 font-bold">42.8%</span>
    </div>

    <div className="flex justify-between py-2 border-b border-white/[0.06]">
      <span className="text-slate-400 flex items-center gap-2">
        <HardDrive className="h-3.5 w-3.5 text-purple-400" />
        ECC Memory
      </span>
      <span className="text-white">128 GB / 256 GB</span>
    </div>

    <div className="flex justify-between py-2 border-b border-white/[0.06]">
      <span className="text-slate-400 flex items-center gap-2">
        <Wifi className="h-3.5 w-3.5 text-emerald-400" />
        Inter-Node Latency
      </span>
      <span className="text-emerald-400">0.32 ms</span>
    </div>

    <div className="flex justify-between py-2">
      <span className="text-slate-400 flex items-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
        Cryptographic Enclave
      </span>
      <span className="text-cyan-400 font-bold">VERIFIED</span>
    </div>
  </CardContent>

  <CardFooter className="justify-between">
    <Button variant="secondary" size="sm">DIAGNOSTICS</Button>
    <Button variant="neon" size="sm" glow rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>CONNECT NODE</Button>
  </CardFooter>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl" accentLine="cyan">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ORBITAL NODE ALPHA</CardTitle>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    High throughput compute cluster telemetry.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Gauge className="h-3.5 w-3.5 text-cyan-400" />
                      Processing Load
                    </span>
                    <span className="text-cyan-400 font-bold">42.8%</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="text-slate-400 flex items-center gap-2">
                      <HardDrive className="h-3.5 w-3.5 text-purple-400" />
                      ECC Memory
                    </span>
                    <span className="text-white">128 GB / 256 GB</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Wifi className="h-3.5 w-3.5 text-emerald-400" />
                      Inter-Node Latency
                    </span>
                    <span className="text-emerald-400">0.32 ms</span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                      Cryptographic Enclave
                    </span>
                    <span className="text-cyan-400 font-bold">VERIFIED</span>
                  </div>
                </CardContent>

                <CardFooter className="justify-between">
                  <Button variant="secondary" size="sm">DIAGNOSTICS</Button>
                  <Button variant="neon" size="sm" glow rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>CONNECT NODE</Button>
                </CardFooter>
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
              description: 'Surface styling and visual depth tier.',
              type: '"default" | "elevated" | "outlined" | "interactive" | "terminal" | "signal" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'accentLine',
              description: 'Illuminated 1px horizontal laser gradient applied across the top edge.',
              type: '"none" | "cyan" | "purple" | "green"',
              defaultValue: '"none"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Semantic Headings:</strong> CardTitle renders semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;h3&gt;</code> elements ensuring proper document outline nesting.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Accent Line Rhythm:</strong> Use <code className="text-cyan-400">accentLine</code> on key showcase cards or primary focus cards rather than repeating it on every card in a uniform grid.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
