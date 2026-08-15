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
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';
import {
  PanelBottom,
  PanelRight,
  PanelLeft,
  Sliders,
  Cpu,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Edge Directions (Left, Right, Bottom, Top)', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Telemetry Drawer', level: 2 },
  { id: 'frosted-glass-drawer', text: 'Frosted Cyber-Glass Bottom Tray', level: 2 },
  { id: 'tactical-hud-tray', text: 'Tactical HUD Diagnostics Drawer Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function DrawerDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Drawer"
        description="Touch-friendly, gesture-driven slideout tray powered by Vaul, supporting left/right/bottom/top trajectories, neon cyber borders, and acrylic glassmorphic sheets."
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
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription, 
  DrawerFooter, 
  DrawerClose 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Edge Directions (Left, Right, Bottom, Top)" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">direction</code> prop controls screen entry edge: <code className="text-cyan-400">right</code>, <code className="text-cyan-400">left</code>, <code className="text-cyan-400">bottom</code>, or <code className="text-cyan-400">top</code>.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center justify-center">
  {/* Right Drawer */}
  <Drawer direction="right">
    <DrawerTrigger asChild>
      <Button variant="secondary" leftIcon={<PanelRight className="h-4 w-4" />}>
        SLIDE RIGHT
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Cluster Settings</DrawerTitle>
        <DrawerDescription>Configure active node egress policies.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 flex-1 space-y-3 font-mono text-xs text-slate-300">
        <p>&gt; Egress Gateway: 10.240.0.1</p>
        <p>&gt; MTU Payload: 9000 Jumbo Frames</p>
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="ghost">CLOSE</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>

  {/* Left Drawer */}
  <Drawer direction="left">
    <DrawerTrigger asChild>
      <Button variant="secondary" leftIcon={<PanelLeft className="h-4 w-4" />}>
        SLIDE LEFT
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Subnet Navigation</DrawerTitle>
      </DrawerHeader>
      <div className="p-4 flex-1 space-y-2 font-mono text-xs text-slate-300">
        <p className="text-cyan-400 font-bold">[01] ORBITAL CLUSTER</p>
        <p>[02] GROUND RELAY ARRAY</p>
        <p>[03] CRYPTOGRAPHIC HSM</p>
      </div>
    </DrawerContent>
  </Drawer>

  {/* Bottom Sheet */}
  <Drawer direction="bottom">
    <DrawerTrigger asChild>
      <Button variant="secondary" leftIcon={<PanelBottom className="h-4 w-4" />}>
        SLIDE BOTTOM
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Diagnostics Console</DrawerTitle>
        <DrawerDescription>Real-time packet capture stream.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 max-w-xl mx-auto w-full font-mono text-xs text-emerald-400 space-y-1">
        <p>&gt; [14:02:48] CRC32 CHECKSUM VERIFIED</p>
        <p>&gt; [14:02:49] INGESTING FRAME 0x4B21... OK</p>
      </div>
    </DrawerContent>
  </Drawer>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button variant="secondary" leftIcon={<PanelRight className="h-4 w-4" />}>
                      SLIDE RIGHT
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Cluster Settings</DrawerTitle>
                      <DrawerDescription>Configure active node egress policies.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 flex-1 space-y-3 font-mono text-xs text-slate-300">
                      <p>&gt; Egress Gateway: 10.240.0.1</p>
                      <p>&gt; MTU Payload: 9000 Jumbo Frames</p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="ghost">CLOSE</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="left">
                  <DrawerTrigger asChild>
                    <Button variant="secondary" leftIcon={<PanelLeft className="h-4 w-4" />}>
                      SLIDE LEFT
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Subnet Navigation</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 flex-1 space-y-2 font-mono text-xs text-slate-300">
                      <p className="text-cyan-400 font-bold">[01] ORBITAL CLUSTER</p>
                      <p>[02] GROUND RELAY ARRAY</p>
                      <p>[03] CRYPTOGRAPHIC HSM</p>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="bottom">
                  <DrawerTrigger asChild>
                    <Button variant="secondary" leftIcon={<PanelBottom className="h-4 w-4" />}>
                      SLIDE BOTTOM
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Diagnostics Console</DrawerTitle>
                      <DrawerDescription>Real-time packet capture stream.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 max-w-xl mx-auto w-full font-mono text-xs text-emerald-400 space-y-1">
                      <p>&gt; [14:02:48] CRC32 CHECKSUM VERIFIED</p>
                      <p>&gt; [14:02:49] INGESTING FRAME 0x4B21... OK</p>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Telemetry Drawer" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser perimeter lighting, illuminated grab bars, and monospace headers.
          </p>

          <Playground
            code={`<Drawer variant="neon" direction="right">
  <DrawerTrigger asChild>
    <Button variant="neon" glow leftIcon={<Cpu className="h-4 w-4" />}>
      INSPECT NODE TELEMETRY
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>NODE_ALPHA_DATA</DrawerTitle>
      <DrawerDescription>High-frequency telemetry stream.</DrawerDescription>
    </DrawerHeader>
    <div className="p-4 flex-1 space-y-3 font-mono text-xs text-cyan-400/80">
      <div className="p-3 rounded-lg bg-black/40 border border-cyan-500/30 space-y-1">
        <p className="text-slate-400">CLOCK SPEED: 5.8 GHz</p>
        <p className="text-cyan-300 font-bold">CORE TEMP: 48.2°C [NOMINAL]</p>
      </div>
    </div>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="neon" glow className="w-full">DISMISS</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Drawer variant="neon" direction="right">
                <DrawerTrigger asChild>
                  <Button variant="neon" glow leftIcon={<Cpu className="h-4 w-4" />}>
                    INSPECT NODE TELEMETRY
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>NODE_ALPHA_DATA</DrawerTitle>
                    <DrawerDescription>High-frequency telemetry stream.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 flex-1 space-y-3 font-mono text-xs text-cyan-400/80">
                    <div className="p-3 rounded-lg bg-black/40 border border-cyan-500/30 space-y-1">
                      <p className="text-slate-400">CLOCK SPEED: 5.8 GHz</p>
                      <p className="text-cyan-300 font-bold">CORE TEMP: 48.2°C [NOMINAL]</p>
                    </div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="neon" glow className="w-full">DISMISS</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Bottom Tray ── */}
      <ContentSection title="Frosted Cyber-Glass Bottom Tray" id="frosted-glass-drawer">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layered acrylic drawer with circuit texture substrates and laser sweeps.
          </p>

          <Playground
            code={`<Drawer variant="glass" direction="bottom">
  <DrawerTrigger asChild>
    <Button variant="glass" leftIcon={<Sliders className="h-4 w-4 text-cyan-400" />}>
      OPEN GLASS TRAY
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle className="flex items-center gap-2">
        <Sliders className="h-4 w-4 text-cyan-400" />
        Subsystem Matrix Control
      </DrawerTitle>
      <DrawerDescription>Quick actions and sensor sensitivity calibration.</DrawerDescription>
    </DrawerHeader>
    <div className="p-6 max-w-xl mx-auto w-full space-y-3 font-mono text-xs">
      <div className="p-3 rounded-lg border border-white/10 bg-white/[0.03] flex justify-between items-center">
        <span className="text-slate-300">Optical Laser Sync</span>
        <Badge variant="glass" dot dotColor="cyan">ACTIVE</Badge>
      </div>
      <div className="p-3 rounded-lg border border-white/10 bg-white/[0.03] flex justify-between items-center">
        <span className="text-slate-300">Carrier Bandwidth</span>
        <span className="text-cyan-400 font-bold">4.8 GB/s</span>
      </div>
    </div>
  </DrawerContent>
</Drawer>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <Drawer variant="glass" direction="bottom">
                <DrawerTrigger asChild>
                  <Button variant="glass" leftIcon={<Sliders className="h-4 w-4 text-cyan-400" />}>
                    OPEN GLASS TRAY
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="flex items-center gap-2">
                      <Sliders className="h-4 w-4 text-cyan-400" />
                      Subsystem Matrix Control
                    </DrawerTitle>
                    <DrawerDescription>Quick actions and sensor sensitivity calibration.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-6 max-w-xl mx-auto w-full space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg border border-white/10 bg-white/[0.03] flex justify-between items-center">
                      <span className="text-slate-300">Optical Laser Sync</span>
                      <Badge variant="glass" dot dotColor="cyan">ACTIVE</Badge>
                    </div>
                    <div className="p-3 rounded-lg border border-white/10 bg-white/[0.03] flex justify-between items-center">
                      <span className="text-slate-300">Carrier Bandwidth</span>
                      <span className="text-cyan-400 font-bold">4.8 GB/s</span>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Diagnostics Drawer Card ── */}
      <ContentSection title="Tactical HUD Diagnostics Drawer Card" id="tactical-hud-tray">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with integrated slideout drawer actions.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">HARDWARE DIAGNOSTICS</CardTitle>
      <Badge variant="neon" size="sm">READY</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Slide out comprehensive telemetry diagnostics.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <Drawer variant="neon" direction="right">
      <DrawerTrigger asChild>
        <Button variant="neon" glow className="w-full">
          OPEN DIAGNOSTICS TRAY
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>TACTICAL_DIAGNOSTICS</DrawerTitle>
          <DrawerDescription>Full telemetry dump of Sector 09.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 flex-1 space-y-2 font-mono text-xs text-slate-300">
          <p>&gt; VOLTAGE RAIL 12V: 12.04V [OK]</p>
          <p>&gt; PACKET LOSS: 0.00%</p>
          <p className="text-emerald-400">&gt; ALL SUBSYSTEMS NOMINAL</p>
        </div>
      </DrawerContent>
    </Drawer>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">HARDWARE DIAGNOSTICS</CardTitle>
                    <Badge variant="neon" size="sm">READY</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Slide out comprehensive telemetry diagnostics.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <Drawer variant="neon" direction="right">
                    <DrawerTrigger asChild>
                      <Button variant="neon" glow className="w-full">
                        OPEN DIAGNOSTICS TRAY
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>TACTICAL_DIAGNOSTICS</DrawerTitle>
                        <DrawerDescription>Full telemetry dump of Sector 09.</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 flex-1 space-y-2 font-mono text-xs text-slate-300">
                        <p>&gt; VOLTAGE RAIL 12V: 12.04V [OK]</p>
                        <p>&gt; PACKET LOSS: 0.00%</p>
                        <p className="text-emerald-400">&gt; ALL SUBSYSTEMS NOMINAL</p>
                      </div>
                    </DrawerContent>
                  </Drawer>
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
              property: 'direction',
              description: 'Edge of the viewport the drawer slides from.',
              type: '"top" | "bottom" | "left" | "right"',
              defaultValue: '"right"',
            },
            {
              property: 'variant',
              description: 'Visual style propagated across drawer content and grab handles.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'shouldScaleBackground',
              description: 'Whether background surface scales down when drawer opens on mobile.',
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
            <strong>Touch Gestures:</strong> Supports touch swipe gestures to dismiss on mobile and tablet touchscreens.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Direction Context:</strong> Use <code className="text-cyan-400">direction=&quot;bottom&quot;</code> on mobile interfaces for bottom sheets and <code className="text-cyan-400">direction=&quot;right&quot;</code> for desktop detail inspect panels.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
