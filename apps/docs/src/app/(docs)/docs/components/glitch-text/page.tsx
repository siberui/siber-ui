import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { GlitchText, Badge, Card, CardContent, Row, Button, BorderBeam } from '@siberui/react';
import { ShieldAlert, Zap } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Telemetry Header', level: 2 },
  { id: 'hud-variants', text: 'HUD Variants (Scramble, RGB Slice, Both)', level: 2 },
  { id: 'signal-colors', text: 'Signal & Semantic Color Presets', level: 2 },
  { id: 'frosted-glass-hud', text: 'Frosted Cyber-Glass HUD Matrix', level: 2 },
  { id: 'interactive-tactical-card', text: 'Tactical Breach Monitor Composition', level: 2 },
  { id: 'reduced-motion', text: 'Reduced Motion & Accessibility', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function GlitchTextDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Glitch Text"
        description="A stylized kinetic typography component with restrained character-noise scrambling and periodic HUD chromatic-split slice bursts."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { GlitchText } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Telemetry Header" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <code className="text-cyan-400">GlitchText</code> scrambles non-space characters with random cyber glyphs while maintaining overall sentence readability and semantic DOM output.
          </p>

          <Playground
            code={`<div className="flex flex-col items-center gap-3 text-center">
  <GlitchText as="h1" color="cyan" className="text-3xl md:text-4xl font-bold tracking-widest">
    SYSTEM_BREACH_DETECTED
  </GlitchText>
  <span className="font-mono text-xs text-slate-400">SECTOR 07 // NODE ENCRYPTION COMPROMISED</span>
</div>`}
          >
            <div className="flex flex-col items-center justify-center p-10 bg-[#050811] rounded-2xl border border-white/[0.06] shadow-xl min-h-48">
              <div className="flex flex-col items-center gap-3 text-center">
                <GlitchText as="h1" color="cyan" className="text-2xl md:text-4xl font-bold tracking-widest">
                  SYSTEM_BREACH_DETECTED
                </GlitchText>
                <span className="font-mono text-xs text-slate-400 tracking-wider">SECTOR 07 // NODE ENCRYPTION COMPROMISED</span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── HUD Variants ── */}
      <ContentSection title="HUD Variants (Scramble, RGB Slice, Both)" id="hud-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Choose between character scrambling (<code className="text-cyan-400">variant=&quot;scramble&quot;</code>), chromatic aberration RGB slices (<code className="text-cyan-400">variant=&quot;rgb&quot;</code>), or combined dual-mode (<code className="text-cyan-400">variant=&quot;both&quot;</code>).
          </p>

          <Playground
            code={`<div className="flex flex-col gap-6 items-center">
  <div className="flex items-center gap-3">
    <Badge variant="primary-subtle" size="sm">SCRAMBLE</Badge>
    <GlitchText variant="scramble" color="white" className="text-lg md:text-xl">
      NEURAL_INTERFACE_INITIALIZED
    </GlitchText>
  </div>

  <div className="flex items-center gap-3">
    <Badge variant="neon" size="sm">RGB SLICE</Badge>
    <GlitchText variant="rgb" color="cyan" className="text-lg md:text-xl">
      CHROMATIC_ABERRATION_ACTIVE
    </GlitchText>
  </div>

  <div className="flex items-center gap-3">
    <Badge variant="danger" size="sm">DUAL MODE</Badge>
    <GlitchText variant="both" color="rose" className="text-lg md:text-xl">
      CRITICAL_CORE_OVERLOAD
    </GlitchText>
  </div>
</div>`}
          >
            <div className="flex flex-col items-center justify-center gap-6 p-8 bg-[#050811] rounded-2xl border border-white/[0.06] shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-3 text-center">
                <Badge variant="primary-subtle" size="sm">SCRAMBLE</Badge>
                <GlitchText variant="scramble" color="white" className="text-lg md:text-xl">
                  NEURAL_INTERFACE_INITIALIZED
                </GlitchText>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3 text-center">
                <Badge variant="neon" size="sm">RGB SLICE</Badge>
                <GlitchText variant="rgb" color="cyan" className="text-lg md:text-xl">
                  CHROMATIC_ABERRATION_ACTIVE
                </GlitchText>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3 text-center">
                <Badge variant="danger" size="sm">DUAL MODE</Badge>
                <GlitchText variant="both" color="rose" className="text-lg md:text-xl">
                  CRITICAL_CORE_OVERLOAD
                </GlitchText>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Colors ── */}
      <ContentSection title="Signal & Semantic Color Presets" id="signal-colors">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            GlitchText matches the design system&apos;s signal tokens: <code className="text-cyan-400">cyan</code>, <code className="text-violet-400">violet</code>, <code className="text-emerald-400">emerald</code>, <code className="text-amber-400">amber</code>, <code className="text-rose-400">rose</code>, and <code className="text-white">white</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] flex flex-col items-center gap-1.5">
    <GlitchText color="cyan" className="text-sm md:text-base">SIGNAL_CYAN</GlitchText>
    <span className="text-[10px] font-mono text-slate-500">primary / interactive</span>
  </div>
  <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] flex flex-col items-center gap-1.5">
    <GlitchText color="violet" className="text-sm md:text-base">SIGNAL_VIOLET</GlitchText>
    <span className="text-[10px] font-mono text-slate-500">system / core</span>
  </div>
  <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] flex flex-col items-center gap-1.5">
    <GlitchText color="emerald" className="text-sm md:text-base">SIGNAL_EMERALD</GlitchText>
    <span className="text-[10px] font-mono text-slate-500">verified / operational</span>
  </div>
  <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] flex flex-col items-center gap-1.5">
    <GlitchText color="amber" className="text-sm md:text-base">SIGNAL_AMBER</GlitchText>
    <span className="text-[10px] font-mono text-slate-500">warning / telemetry</span>
  </div>
  <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] flex flex-col items-center gap-1.5">
    <GlitchText color="rose" className="text-sm md:text-base">SIGNAL_ROSE</GlitchText>
    <span className="text-[10px] font-mono text-slate-500">breach / critical</span>
  </div>
  <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] flex flex-col items-center gap-1.5">
    <GlitchText color="white" className="text-sm md:text-base">SIGNAL_WHITE</GlitchText>
    <span className="text-[10px] font-mono text-slate-500">neutral / standard</span>
  </div>
</div>`}
          >
            <div className="p-6 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] hover:border-cyan-500/30 transition-colors flex flex-col items-center justify-center gap-1.5 text-center">
                  <GlitchText color="cyan" className="text-sm md:text-base">SIGNAL_CYAN</GlitchText>
                  <span className="text-[10px] font-mono text-slate-500">primary / interactive</span>
                </div>
                <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] hover:border-violet-500/30 transition-colors flex flex-col items-center justify-center gap-1.5 text-center">
                  <GlitchText color="violet" className="text-sm md:text-base">SIGNAL_VIOLET</GlitchText>
                  <span className="text-[10px] font-mono text-slate-500">system / core</span>
                </div>
                <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] hover:border-emerald-500/30 transition-colors flex flex-col items-center justify-center gap-1.5 text-center">
                  <GlitchText color="emerald" className="text-sm md:text-base">SIGNAL_EMERALD</GlitchText>
                  <span className="text-[10px] font-mono text-slate-500">verified / operational</span>
                </div>
                <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] hover:border-amber-500/30 transition-colors flex flex-col items-center justify-center gap-1.5 text-center">
                  <GlitchText color="amber" className="text-sm md:text-base">SIGNAL_AMBER</GlitchText>
                  <span className="text-[10px] font-mono text-slate-500">warning / telemetry</span>
                </div>
                <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] hover:border-rose-500/30 transition-colors flex flex-col items-center justify-center gap-1.5 text-center">
                  <GlitchText color="rose" className="text-sm md:text-base">SIGNAL_ROSE</GlitchText>
                  <span className="text-[10px] font-mono text-slate-500">breach / critical</span>
                </div>
                <div className="p-5 rounded-xl bg-[#060913] border border-white/[0.06] hover:border-white/[0.15] transition-colors flex flex-col items-center justify-center gap-1.5 text-center">
                  <GlitchText color="white" className="text-sm md:text-base">SIGNAL_WHITE</GlitchText>
                  <span className="text-[10px] font-mono text-slate-500">neutral / standard</span>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass HUD Matrix ── */}
      <ContentSection title="Frosted Cyber-Glass HUD Matrix" id="frosted-glass-hud">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layer GlitchText inside frosted acrylic glass cards and kinetic BorderBeam outlines for high-impact HUD security alerts and operator briefings.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-lg p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="space-y-3 relative z-10">
    <Row justify="between" align="center">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-cyan-400 animate-pulse" />
        <GlitchText as="h3" color="cyan" className="text-sm font-bold tracking-wider">
          TELEMETRY_LINK_09
        </GlitchText>
      </div>
      <Badge variant="glass" dot dotColor="cyan">ONLINE</Badge>
    </Row>
    <p className="text-xs text-slate-300 leading-relaxed font-mono">
      Synaptic frequency: 4.89 GHz | Error rate: 0.002% | Memory matrix isolated.
    </p>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-lg p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="space-y-3 relative z-10">
                  <Row justify="between" align="center">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-cyan-400 animate-pulse" />
                      <GlitchText as="h3" color="cyan" className="text-sm font-bold tracking-wider">
                        TELEMETRY_LINK_09
                      </GlitchText>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">ONLINE</Badge>
                  </Row>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    Synaptic frequency: 4.89 GHz | Error rate: 0.002% | Memory matrix isolated.
                  </p>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical Breach Monitor Composition ── */}
      <ContentSection title="Tactical Breach Monitor Composition" id="interactive-tactical-card">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Integrate GlitchText into defense monitoring surfaces, firewall alert dialogs, and active anomaly scanners.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-rose-500/30 bg-[#070b14] shadow-xl overflow-hidden">
  <CardContent className="p-6 space-y-4">
    <Row justify="between" align="center">
      <div className="flex items-center gap-2">
        <ShieldAlert className="h-5 w-5 text-rose-400 animate-pulse" />
        <GlitchText as="span" color="rose" className="text-sm font-bold">
          ANOMALY_LEVEL_4
        </GlitchText>
      </div>
      <Badge variant="danger" dot dotColor="rose">CRITICAL</Badge>
    </Row>
    <p className="text-xs text-slate-400 font-mono leading-relaxed">
      Unauthorized neural injection attempt detected in quantum subsystem #12. Perimeter lockdown recommended.
    </p>
    <Row justify="between" align="center">
      <span className="font-mono text-xs text-rose-300/80">THREAT ID: #TX-9042</span>
      <Button variant="destructive" size="sm">Initiate Purge</Button>
    </Row>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-rose-500/30 bg-[#070b14] shadow-xl overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <Row justify="between" align="center">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5 text-rose-400 animate-pulse" />
                      <GlitchText as="span" color="rose" className="text-sm font-bold">
                        ANOMALY_LEVEL_4
                      </GlitchText>
                    </div>
                    <Badge variant="danger" dot dotColor="rose">CRITICAL</Badge>
                  </Row>
                  <p className="text-xs text-slate-400 font-mono leading-relaxed">
                    Unauthorized neural injection attempt detected in quantum subsystem #12. Perimeter lockdown recommended.
                  </p>
                  <Row justify="between" align="center">
                    <span className="font-mono text-xs text-rose-300/80">THREAT ID: #TX-9042</span>
                    <Button variant="destructive" size="sm">Initiate Purge</Button>
                  </Row>
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Reduced Motion ── */}
      <ContentSection title="Reduced Motion & Accessibility" id="reduced-motion">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Set <code className="text-cyan-400">active={'{false}'}</code> or rely on OS-level <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">prefers-reduced-motion</code> to halt character cycling while keeping the stable text readable.
          </p>

          <Playground
            code={`<GlitchText active={false} color="white" className="text-2xl font-bold">
  STATIC_ACCESSIBILITY_MODE_ONLINE
</GlitchText>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#050811] rounded-2xl border border-white/[0.06] shadow-xl">
              <GlitchText active={false} color="white" className="text-xl md:text-2xl font-bold text-center">
                STATIC_ACCESSIBILITY_MODE_ONLINE
              </GlitchText>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'text',
              description: 'The source text string to display (or pass as children).',
              type: 'string',
            },
            {
              property: 'as',
              description: 'HTML semantic tag to render as.',
              type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"',
              defaultValue: '"span"',
            },
            {
              property: 'variant',
              description: '"scramble" for glyph noise only, "rgb" for chromatic aberration only, "both" to combine.',
              type: '"scramble" | "rgb" | "both"',
              defaultValue: '"both"',
            },
            {
              property: 'color',
              description: 'Semantic signal glow theme.',
              type: '"cyan" | "violet" | "emerald" | "amber" | "rose" | "white"',
              defaultValue: '"white"',
            },
            {
              property: 'speed',
              description: 'Interval speed in milliseconds (values below 100ms clamped for readability).',
              type: 'number',
              defaultValue: '140',
            },
            {
              property: 'active',
              description: 'Whether the glitch animation is actively running.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'aria-label',
              description: 'Provides a stable accessible name for screen readers during visual scrambling.',
              type: 'string',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Screen Readers:</strong> GlitchText automatically stamps the original unchanging text into the DOM and accessibility tree so assistive technologies read words cleanly without character noise.
          </li>
          <li>
            <strong>Vestibular Safeguards:</strong> Fully respects <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">prefers-reduced-motion</code>: Chromatic slice animations and neon flickers are immediately suppressed.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Hierarchy:</strong> Use GlitchText sparingly for hero headers, threat warnings, or telemetry status headers rather than long body paragraphs.
          </li>
          <li>
            <strong>Contrast:</strong> Always pair bright signal colors (<code className="text-cyan-400">cyan</code>, <code className="text-rose-400">rose</code>) with deep surface backgrounds (<code className="text-cyan-400">bg-[#050811]</code>) for maximum laser legibility.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
