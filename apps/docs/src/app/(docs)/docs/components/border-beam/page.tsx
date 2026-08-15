import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { BorderBeam, Badge, Card, CardContent, Row, Button } from '@siberui/react';
import { Zap, Radio } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'neon-cyberpunk', text: 'Cyberpunk Neon Beam', level: 2 },
  { id: 'color-variants', text: 'Color & Theme Presets', level: 2 },
  { id: 'luminous-glow', text: 'Luminous Halo Glow', level: 2 },
  { id: 'glass-circuit-card', text: 'Frosted Cyber-Glass Panel', level: 2 },
  { id: 'dual-scanner', text: 'Dual Counter-Rotating Beams', level: 2 },
  { id: 'threat-scanner-hud', text: 'Threat Scanner Card Composition', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function BorderBeamDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Border Beam"
        description="A kinetic rotating border gradient beam that casts illuminated laser highlights around cards, dialogs, and active scanner widgets."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { BorderBeam } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Neon Cyberpunk Beam ── */}
      <ContentSection title="Cyberpunk Neon Beam" id="neon-cyberpunk">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;neon&quot;</code> preset generates a high-velocity electric cyan laser beam tracing the edge of any container.
          </p>

          <Playground
            code={`<div className="relative flex min-h-52 w-full max-w-md flex-col items-center justify-center p-8 rounded-2xl bg-[#050811] border border-cyan-500/20 shadow-2xl overflow-hidden">
  <div className="flex flex-col items-center gap-2.5 z-10 px-4 text-center">
    <Zap className="h-6 w-6 text-cyan-400 animate-pulse" />
    <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider uppercase">QUANTUM_RADAR_ACTIVE</span>
  </div>
  
  {/* Rotating Neon Laser Beam */}
  <BorderBeam variant="neon" size={140} duration={5} borderWidth={2} glow />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <div className="relative flex min-h-52 w-full max-w-md flex-col items-center justify-center p-8 rounded-2xl bg-[#050811] border border-cyan-500/20 shadow-2xl overflow-hidden">
                <div className="flex flex-col items-center gap-2.5 z-10 px-4 text-center">
                  <Zap className="h-6 w-6 text-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider uppercase">QUANTUM_RADAR_ACTIVE</span>
                </div>
                <BorderBeam variant="neon" size={140} duration={5} borderWidth={2} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Color & Theme Presets ── */}
      <ContentSection title="Color & Theme Presets" id="color-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pre-calibrated cyberpunk and semantic color presets: <code className="text-cyan-400">neon</code>, <code className="text-violet-400">purple</code>, <code className="text-emerald-400">green</code>, <code className="text-rose-400">destructive</code>, <code className="text-amber-400">amber</code>, and <code className="text-white">glass</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
    <span className="text-cyan-400 font-mono text-xs font-bold tracking-wider">neon</span>
    <BorderBeam variant="neon" size={100} duration={6} />
  </div>
  <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
    <span className="text-violet-400 font-mono text-xs font-bold tracking-wider">purple</span>
    <BorderBeam variant="purple" size={100} duration={6} />
  </div>
  <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
    <span className="text-emerald-400 font-mono text-xs font-bold tracking-wider">green</span>
    <BorderBeam variant="green" size={100} duration={6} />
  </div>
  <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
    <span className="text-rose-400 font-mono text-xs font-bold tracking-wider">destructive</span>
    <BorderBeam variant="destructive" size={100} duration={6} />
  </div>
  <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
    <span className="text-amber-400 font-mono text-xs font-bold tracking-wider">amber</span>
    <BorderBeam variant="amber" size={100} duration={6} />
  </div>
  <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
    <span className="text-white font-mono text-xs font-bold tracking-wider">glass</span>
    <BorderBeam variant="glass" size={100} duration={6} />
  </div>
</div>`}
          >
            <div className="p-6 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
                  <span className="text-cyan-400 font-mono text-xs font-bold tracking-wider">neon</span>
                  <BorderBeam variant="neon" size={100} duration={6} borderWidth={1.5} />
                </div>
                <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
                  <span className="text-violet-400 font-mono text-xs font-bold tracking-wider">purple</span>
                  <BorderBeam variant="purple" size={100} duration={6} borderWidth={1.5} />
                </div>
                <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
                  <span className="text-emerald-400 font-mono text-xs font-bold tracking-wider">green</span>
                  <BorderBeam variant="green" size={100} duration={6} borderWidth={1.5} />
                </div>
                <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
                  <span className="text-rose-400 font-mono text-xs font-bold tracking-wider">destructive</span>
                  <BorderBeam variant="destructive" size={100} duration={6} borderWidth={1.5} />
                </div>
                <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
                  <span className="text-amber-400 font-mono text-xs font-bold tracking-wider">amber</span>
                  <BorderBeam variant="amber" size={100} duration={6} borderWidth={1.5} />
                </div>
                <div className="relative h-32 p-6 rounded-xl bg-[#070b14] flex items-center justify-center overflow-hidden">
                  <span className="text-white font-mono text-xs font-bold tracking-wider">glass</span>
                  <BorderBeam variant="glass" size={100} duration={6} borderWidth={1.5} />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Panel ── */}
      <ContentSection title="Frosted Cyber-Glass Panel" id="glass-circuit-card">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Superimposing a glowing BorderBeam on top of a frosted glass container with a circuit grid texture creates an illuminated tactical cyber-deck surface.
          </p>

          <Playground
            code={`<div className="p-8 rounded-2xl border border-white/10 bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat flex justify-center">
  <div className="relative w-full max-w-md p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
    <div className="space-y-2 z-10 relative">
      <Row justify="between" align="center">
        <span className="font-mono text-xs text-cyan-300 font-bold">ENCRYPTED_VAULT</span>
        <Badge variant="glass" dot dotColor="green">SECURE</Badge>
      </Row>
      <p className="text-xs text-slate-300">Biometric handshake verified. Memory matrix isolated.</p>
    </div>
    
    <BorderBeam variant="neon" size={160} duration={7} borderWidth={1.5} glow />
  </div>
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="space-y-2 z-10 relative">
                  <Row justify="between" align="center">
                    <span className="font-mono text-xs text-cyan-300 font-bold tracking-wider">ENCRYPTED_VAULT</span>
                    <Badge variant="glass" dot dotColor="green">SECURE</Badge>
                  </Row>
                  <p className="text-xs text-slate-300">Biometric handshake verified. Memory matrix isolated.</p>
                </div>
                <BorderBeam variant="neon" size={160} duration={7} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Dual Counter-Rotating Beams ── */}
      <ContentSection title="Dual Counter-Rotating Beams" id="dual-scanner">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layer multiple <code className="text-cyan-400">BorderBeam</code> components with complementary colors and inverted directions (<code className="text-cyan-400">{'reverse={true}'}</code>) to build radar and dual-cycle scanning visuals.
          </p>

          <Playground
            code={`<div className="relative flex h-40 w-full max-w-md items-center justify-center rounded-2xl bg-[#050811] border border-white/10 overflow-hidden">
  <span className="font-mono text-xs text-slate-300">DUAL_CORE_INTERSECT</span>
  
  {/* Forward Cyan Beam */}
  <BorderBeam variant="neon" size={120} duration={6} />
  
  {/* Reverse Violet Beam */}
  <BorderBeam variant="purple" size={120} duration={6} reverse delay={3} />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <div className="relative flex h-40 w-full max-w-md items-center justify-center rounded-2xl bg-[#050811] border border-white/10 overflow-hidden">
                <span className="font-mono text-xs text-slate-300 z-10 font-semibold tracking-wider">DUAL_CORE_INTERSECT</span>
                <BorderBeam variant="neon" size={120} duration={6} borderWidth={1.5} />
                <BorderBeam variant="purple" size={120} duration={6} reverse delay={3} borderWidth={1.5} />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Threat Scanner Card Composition ── */}
      <ContentSection title="Threat Scanner Card Composition" id="threat-scanner-hud">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Integrate BorderBeam into security widgets, active deployment progress cards, and live anomaly monitors.
          </p>

          <Playground
            code={`<Card className="relative max-w-md mx-auto border-cyan-500/30 bg-[#070b14] overflow-hidden shadow-2xl">
  <CardContent className="p-6 space-y-4 relative z-10">
    <Row justify="between" align="center">
      <div className="flex items-center gap-2">
        <Radio className="h-4 w-4 text-cyan-400 animate-pulse" />
        <span className="font-mono font-bold text-sm text-slate-100">DEFENSE_FIREWALL_RADAR</span>
      </div>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </Row>
    <p className="text-xs text-slate-400 leading-relaxed">
      Continuous perimeter sweep in progress. 0 quantum signature anomalies detected in sector 4.
    </p>
    <Row justify="between" align="center">
      <span className="font-mono text-xs text-cyan-300">SWEEP FREQ: 2.4 GHz</span>
      <Button variant="glass" size="sm">Re-calibrate</Button>
    </Row>
  </CardContent>

  <BorderBeam variant="neon" size={150} duration={6} borderWidth={2} glow />
</Card>`}
          >
            <div className="w-full p-4">
              <Card className="relative max-w-md mx-auto border-cyan-500/30 bg-[#070b14] overflow-hidden shadow-[0_0_30px_rgba(0,217,232,0.12)]">
                <CardContent className="p-6 space-y-4 relative z-10">
                  <Row justify="between" align="center">
                    <div className="flex items-center gap-2">
                      <Radio className="h-4 w-4 text-cyan-400 animate-pulse" />
                      <span className="font-mono font-bold text-sm text-slate-100 tracking-wider">DEFENSE_FIREWALL_RADAR</span>
                    </div>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </Row>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Continuous perimeter sweep in progress. 0 quantum signature anomalies detected in sector 4.
                  </p>
                  <Row justify="between" align="center">
                    <span className="font-mono text-xs text-cyan-300">SWEEP FREQ: 2.4 GHz</span>
                    <Button variant="glass" size="sm">Re-calibrate</Button>
                  </Row>
                </CardContent>

                <BorderBeam variant="neon" size={150} duration={6} borderWidth={2} glow />
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
              description: 'Pre-calibrated gradient color pair preset.',
              type: '"neon" | "purple" | "destructive" | "green" | "amber" | "glass"',
              defaultValue: '"neon"',
            },
            {
              property: 'size',
              description: 'Size / length of the traveling laser beam in pixels.',
              type: 'number',
              defaultValue: '140',
            },
            {
              property: 'duration',
              description: 'Full 360-degree rotation cycle duration in seconds.',
              type: 'number',
              defaultValue: '6',
            },
            {
              property: 'delay',
              description: 'Initial animation delay offset in seconds.',
              type: 'number',
              defaultValue: '0',
            },
            {
              property: 'borderWidth',
              description: 'Stroke thickness of the perimeter beam in pixels.',
              type: 'number',
              defaultValue: '1.5',
            },
            {
              property: 'reverse',
              description: 'Inverts rotation direction from clockwise to counter-clockwise.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'glow',
              description: 'Casts an atmospheric exterior laser halo blur.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'colorFrom',
              description: 'Custom gradient head starting color (hex, rgb, or hsl).',
              type: 'string',
              defaultValue: '"#ffffff"',
            },
            {
              property: 'colorTo',
              description: 'Custom gradient tail ending color.',
              type: 'string',
              defaultValue: '"transparent"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            BorderBeam is purely decorative and automatically marked with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">pointer-events-none</code> so it never intercepts clicks or touch events.
          </li>
          <li>
            Respects <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">prefers-reduced-motion</code>: Continuous spinning rotation halts gracefully for users with vestibular sensitivities.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Overflow Clipping:</strong> Always ensure the parent container includes <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">relative overflow-hidden</code> and inherits border radius.
          </li>
          <li>
            <strong>Visual Weight:</strong> Avoid placing more than one active BorderBeam in the same viewport section to keep user attention focused on primary highlighted cards.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
