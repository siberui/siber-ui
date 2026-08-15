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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  Button,
  Input,
  FormField,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';
import {
  Settings2,
  Sliders,
  Cpu,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Dimensional Inputs', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Parameter Calibrator', level: 2 },
  { id: 'frosted-glass-popover', text: 'Frosted Cyber-Glass Subsystem Popover', level: 2 },
  { id: 'tactical-hud-popover', text: 'Tactical HUD Sensor Tuner Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function PopoverDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Popover"
        description="Radix UI-backed anchored floating overlay for rich micro-forms, dimensional parameter controls, and in-context cybernetic configurators."
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
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverHeader, 
  PopoverFooter 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Dimensional Inputs" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Popovers anchor directly to the trigger button with customizable alignment and offset parameters.
          </p>

          <Playground
            code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary" leftIcon={<Settings2 className="h-4 w-4" />}>
      ADJUST RESOLUTION
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <PopoverHeader>
      <h4 className="font-medium text-white text-sm">Display Buffer Dimensions</h4>
      <p className="text-xs text-slate-400">Set viewport canvas raster parameters.</p>
    </PopoverHeader>
    <div className="grid gap-3 p-4">
      <FormField label="Canvas Width">
        <Input defaultValue="3840 px" />
      </FormField>
      <FormField label="Canvas Height">
        <Input defaultValue="2160 px" />
      </FormField>
    </div>
    <PopoverFooter>
      <Button variant="neon" size="sm" glow className="w-full">APPLY DIMENSIONS</Button>
    </PopoverFooter>
  </PopoverContent>
</Popover>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[220px]">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary" leftIcon={<Settings2 className="h-4 w-4" />}>
                    ADJUST RESOLUTION
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <PopoverHeader>
                    <h4 className="font-medium text-white text-sm">Display Buffer Dimensions</h4>
                    <p className="text-xs text-slate-400">Set viewport canvas raster parameters.</p>
                  </PopoverHeader>
                  <div className="grid gap-3 p-4">
                    <FormField label="Canvas Width">
                      <Input defaultValue="3840 px" />
                    </FormField>
                    <FormField label="Canvas Height">
                      <Input defaultValue="2160 px" />
                    </FormField>
                  </div>
                  <PopoverFooter>
                    <Button variant="neon" size="sm" glow className="w-full">APPLY DIMENSIONS</Button>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Parameter Calibrator" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser halos, dark deep blues, and monospace headers.
          </p>

          <Playground
            code={`<Popover variant="neon">
  <PopoverTrigger asChild>
    <Button variant="neon" glow leftIcon={<Cpu className="h-4 w-4" />}>
      QUANTUM TUNER
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <PopoverHeader>
      <h4 className="font-mono text-cyan-400 font-bold text-xs">QUANTUM_LATTICE_CFG</h4>
      <p className="text-xs text-slate-400 font-mono">Micro-tune resonance frequency.</p>
    </PopoverHeader>
    <div className="p-4 space-y-3 font-mono text-xs text-cyan-300">
      <div className="flex justify-between py-1 border-b border-cyan-500/20">
        <span className="text-slate-400">Harmonic Bias</span>
        <span>+14.2 ppm</span>
      </div>
      <div className="flex justify-between py-1">
        <span className="text-slate-400">Phase Lock</span>
        <span className="text-emerald-400">LOCKED</span>
      </div>
    </div>
    <PopoverFooter>
      <Button size="sm" variant="neon" glow className="w-full">ENGAGE LOCK</Button>
    </PopoverFooter>
  </PopoverContent>
</Popover>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-h-[220px]">
              <Popover variant="neon">
                <PopoverTrigger asChild>
                  <Button variant="neon" glow leftIcon={<Cpu className="h-4 w-4" />}>
                    QUANTUM TUNER
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <PopoverHeader>
                    <h4 className="font-mono text-cyan-400 font-bold text-xs">QUANTUM_LATTICE_CFG</h4>
                    <p className="text-xs text-slate-400 font-mono">Micro-tune resonance frequency.</p>
                  </PopoverHeader>
                  <div className="p-4 space-y-3 font-mono text-xs text-cyan-300">
                    <div className="flex justify-between py-1 border-b border-cyan-500/20">
                      <span className="text-slate-400">Harmonic Bias</span>
                      <span>+14.2 ppm</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Phase Lock</span>
                      <span className="text-emerald-400">LOCKED</span>
                    </div>
                  </div>
                  <PopoverFooter>
                    <Button size="sm" variant="neon" glow className="w-full">ENGAGE LOCK</Button>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Subsystem Popover ── */}
      <ContentSection title="Frosted Cyber-Glass Subsystem Popover" id="frosted-glass-popover">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite popovers with translucent acrylic blur over circuit substrate grids.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
  <Popover variant="glass">
    <PopoverTrigger asChild>
      <Button variant="glass" leftIcon={<Sliders className="h-4 w-4 text-cyan-400" />}>
        OPEN GLASS TUNER
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-72">
      <PopoverHeader>
        <h4 className="font-mono text-xs font-bold text-white">SUBSYSTEM GAIN</h4>
      </PopoverHeader>
      <div className="p-4 font-mono text-xs text-slate-300">
        Gain: +6.0 dB • SNR: 48 dB
      </div>
    </PopoverContent>
  </Popover>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full min-h-[220px]">
              <div className="relative z-10">
                <Popover variant="glass">
                  <PopoverTrigger asChild>
                    <Button variant="glass" leftIcon={<Sliders className="h-4 w-4 text-cyan-400" />}>
                      OPEN GLASS TUNER
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-72">
                    <PopoverHeader>
                      <h4 className="font-mono text-xs font-bold text-white">SUBSYSTEM GAIN</h4>
                    </PopoverHeader>
                    <div className="p-4 font-mono text-xs text-slate-300">
                      Gain: +6.0 dB • SNR: 48 dB
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Sensor Tuner Card ── */}
      <ContentSection title="Tactical HUD Sensor Tuner Card" id="tactical-hud-popover">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded popover micro-calibrators.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SENSOR ARRAY TUNING</CardTitle>
      <Badge variant="neon" size="sm">ONLINE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Calibrate local tracking aperture and sensitivity.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <Popover variant="neon">
      <PopoverTrigger asChild>
        <Button variant="neon" glow className="w-full">
          CALIBRATE SENSOR APERTURE
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <h4 className="font-mono text-xs font-bold text-cyan-400">APERTURE_TUNER</h4>
        </PopoverHeader>
        <div className="p-4 font-mono text-xs text-slate-300 space-y-2">
          <p>Focal Length: 1200 mm</p>
          <p>Effective ISO: 6400</p>
        </div>
      </PopoverContent>
    </Popover>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[220px]">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SENSOR ARRAY TUNING</CardTitle>
                    <Badge variant="neon" size="sm">ONLINE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Calibrate local tracking aperture and sensitivity.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <Popover variant="neon">
                    <PopoverTrigger asChild>
                      <Button variant="neon" glow className="w-full">
                        CALIBRATE SENSOR APERTURE
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <PopoverHeader>
                        <h4 className="font-mono text-xs font-bold text-cyan-400">APERTURE_TUNER</h4>
                      </PopoverHeader>
                      <div className="p-4 font-mono text-xs text-slate-300 space-y-2">
                        <p>Focal Length: 1200 mm</p>
                        <p>Effective ISO: 6400</p>
                      </div>
                    </PopoverContent>
                  </Popover>
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
              description: 'Visual style for PopoverContent and its helper headers/footers.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'align',
              description: 'Alignment of the popover content relative to the trigger.',
              type: '"start" | "center" | "end"',
              defaultValue: '"center"',
            },
            {
              property: 'sideOffset',
              description: 'Distance in pixels between the anchor and the popover.',
              type: 'number',
              defaultValue: '4',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Radix UI Primitive:</strong> Built on W3C WAI-ARIA Popover pattern with automated focus trapping and keyboard Escape dismissal.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Lightweight Micro-Forms:</strong> Use Popover for transient 1-2 field adjusters rather than full multistep wizards (which belong in Dialog).
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
