import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  Marquee,
  Badge,
  Card,
  CardContent,
  Row,
} from '@siberui/react';
import {
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  Radio,
  Lock,
  Terminal,
  Server,
  Network,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'neon-variant', text: 'Neon Cyberpunk Marquee', level: 2 },
  { id: 'glass-variant', text: 'Glass Variant', level: 2 },
  { id: 'fade-edges', text: 'Edge Fading Gradient Mask', level: 2 },
  { id: 'reverse-and-speed', text: 'Speeds & Reverse Flow', level: 2 },
  { id: 'vertical-streams', text: 'Vertical Telemetry Feed', level: 2 },
  { id: 'card-ticker', text: 'Interactive Node Cards Marquee', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

const telemetryFeeds = [
  { code: '0x9A', label: 'NEURAL SYNC', value: '100% OPTIMAL', icon: Zap, status: 'green' },
  { code: '0x4F', label: 'QUANTUM HANDSHAKE', value: 'LOCKED', icon: Lock, status: 'cyan' },
  { code: '0xC2', label: 'NODE LATENCY', value: '0.38 MS', icon: Activity, status: 'green' },
  { code: '0x71', label: 'FIREWALL MATRIX', value: 'ACTIVE DEFENSE', icon: ShieldCheck, status: 'cyan' },
  { code: '0x1B', label: 'CORE OVERCLOCK', value: '4.82 GHZ', icon: Cpu, status: 'amber' },
  { code: '0x88', label: 'ENCRYPTED UPLINK', value: 'STABLE', icon: Radio, status: 'cyan' },
];

const nodeCards = [
  { id: 'NODE-ALPHA', region: 'EU-WEST-1', load: '18%', ping: '4ms', status: 'Online' },
  { id: 'NODE-BETA', region: 'US-EAST-2', load: '42%', ping: '12ms', status: 'Online' },
  { id: 'NODE-GAMMA', region: 'AP-SOUTH-1', load: '74%', ping: '28ms', status: 'Optimizing' },
  { id: 'NODE-DELTA', region: 'SA-EAST-1', load: '12%', ping: '6ms', status: 'Online' },
  { id: 'NODE-EPSILON', region: 'EU-CENTRAL-1', load: '89%', ping: '34ms', status: 'Rerouting' },
];

export default function MarqueeDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Marquee"
        description="An infinitely scrolling kinetic component built for real-time telemetry tickers, partner showcases, and cyberpunk status streams."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Marquee } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Neon Cyberpunk Marquee ── */}
      <ContentSection title="Neon Cyberpunk Marquee" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;neon&quot;</code> preset adds glowing cyan border boundaries, a subtle atmospheric back-glow, and an electric cyber aesthetic.
          </p>

          <Playground
            code={`<Marquee variant="neon" speed="normal" pauseOnHover fade className="py-3">
  {telemetryFeeds.map((feed, i) => (
    <div key={i} className="flex items-center gap-2.5 px-4 font-mono text-xs">
      <span className="text-cyan-400/60">[{feed.code}]</span>
      <feed.icon className="h-3.5 w-3.5 text-cyan-400" />
      <span className="text-slate-300 font-semibold tracking-wider">{feed.label}:</span>
      <span className="text-cyan-300">{feed.value}</span>
      <span className="text-cyan-500/40 ml-2">///</span>
    </div>
  ))}
</Marquee>`}
          >
            <div className="w-full py-4 bg-[#050811] rounded-2xl overflow-hidden">
              <Marquee variant="neon" speed="normal" pauseOnHover fade className="py-3">
                {telemetryFeeds.map((feed, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-4 font-mono text-xs">
                    <span className="text-cyan-400/60">[{feed.code}]</span>
                    <feed.icon className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="text-slate-300 font-semibold tracking-wider">{feed.label}:</span>
                    <span className="text-cyan-300">{feed.value}</span>
                    <span className="text-cyan-500/40 ml-2">{'///'}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Glass Variant ── */}
      <ContentSection title="Glass Variant" id="glass-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Using <code className="text-cyan-400">variant=&quot;glass&quot;</code> creates a frosted translucent backdrop blur that floats seamlessly across complex geometric textures.
          </p>

          <Playground
            code={`<div className="relative p-8 rounded-2xl border border-white/10 bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat">
  <Marquee variant="glass" speed="normal" pauseOnHover fade className="py-3">
    {/* Floating glass telemetry items */}
  </Marquee>
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <Marquee variant="glass" speed="normal" pauseOnHover fade className="py-3.5">
                  {telemetryFeeds.map((feed, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-4 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-md font-mono text-xs shadow-lg">
                      <feed.icon className="h-3.5 w-3.5 text-cyan-300" />
                      <span className="text-slate-200 font-semibold">{feed.label}</span>
                      <Badge variant="primary-subtle" size="sm">{feed.value}</Badge>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Edge Fading Gradient Mask ── */}
      <ContentSection title="Edge Fading Gradient Mask" id="fade-edges">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            By setting <code className="text-cyan-400">fade={'{true}'}</code>, a smooth alpha-gradient mask is automatically applied to both scroll boundaries, preventing hard clipping.
          </p>

          <Playground
            code={`<div className="space-y-4">
  {/* With edge fading enabled (recommended) */}
  <Marquee fade variant="bordered" speed="fast">
    {words.map((w, i) => <Badge key={i} variant="neon">{w}</Badge>)}
  </Marquee>

  {/* Without edge fading */}
  <Marquee fade={false} variant="bordered" speed="fast">
    {words.map((w, i) => <Badge key={i} variant="outline">{w}</Badge>)}
  </Marquee>
</div>`}
          >
            <div className="w-full space-y-4 p-4 bg-surface-1/40 rounded-xl">
              <div>
                <span className="text-xs font-mono text-cyan-400 mb-2 block">fade=true (Smooth Edge Fade)</span>
                <Marquee fade variant="bordered" speed="fast" className="py-2">
                  {['QUANTUM', 'NEURAL', 'SECURITY', 'ENCRYPTION', 'DEFENSE', 'MAINFRAME', 'OVERRIDE'].map((w, i) => (
                    <Badge key={i} variant="neon" className="mx-2">{w}</Badge>
                  ))}
                </Marquee>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 mb-2 block">fade=false (Hard Edge Boundaries)</span>
                <Marquee fade={false} variant="bordered" speed="fast" className="py-2">
                  {['QUANTUM', 'NEURAL', 'SECURITY', 'ENCRYPTION', 'DEFENSE', 'MAINFRAME', 'OVERRIDE'].map((w, i) => (
                    <Badge key={i} variant="outline" className="mx-2">{w}</Badge>
                  ))}
                </Marquee>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Speeds & Reverse Flow ── */}
      <ContentSection title="Speeds & Reverse Flow" id="reverse-and-speed">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Control the kinetic pacing via <code className="text-cyan-400">speed=&quot;slow&quot; | &quot;normal&quot; | &quot;fast&quot;</code> and set <code className="text-cyan-400">reverse={'{true}'}</code> to invert the scroll trajectory.
          </p>

          <Playground
            code={`<div className="space-y-3">
  {/* Forward Stream (Leftwards) */}
  <Marquee speed="fast" fade>
    {['SYS_01', 'SYS_02', 'SYS_03', 'SYS_04'].map((s) => <span key={s}>{s}</span>)}
  </Marquee>

  {/* Inverted Stream (Rightwards) */}
  <Marquee speed="fast" reverse fade>
    {['NET_01', 'NET_02', 'NET_03', 'NET_04'].map((s) => <span key={s}>{s}</span>)}
  </Marquee>
</div>`}
          >
            <div className="w-full space-y-3 p-4 bg-[#050811] rounded-xl border border-white/[0.06]">
              <Marquee speed="fast" fade className="py-1">
                {['QUANTUM_CORE_A', 'QUANTUM_CORE_B', 'QUANTUM_CORE_C', 'QUANTUM_CORE_D'].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded">
                    <Server className="h-3 w-3 text-cyan-400" />
                    <span>{s}</span>
                  </div>
                ))}
              </Marquee>

              <Marquee speed="fast" reverse fade className="py-1">
                {['UPLINK_EAST', 'UPLINK_WEST', 'UPLINK_NORTH', 'UPLINK_SOUTH'].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-violet-300 bg-violet-950/40 border border-violet-500/20 px-3 py-1 rounded">
                    <Network className="h-3 w-3 text-violet-400" />
                    <span>{s}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Vertical Telemetry Feed ── */}
      <ContentSection title="Vertical Telemetry Feed" id="vertical-streams">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            By setting <code className="text-cyan-400">direction=&quot;up&quot;</code> or <code className="text-cyan-400">direction=&quot;down&quot;</code>, Marquee transforms into a vertical matrix log stream.
          </p>

          <Playground
            code={`<div className="h-56 w-72 rounded-xl border border-cyan-500/30 bg-[#050811] overflow-hidden">
  <Marquee direction="up" speed="fast" pauseOnHover fade className="h-full py-2">
    {telemetryFeeds.map((feed, i) => (
      <div key={i} className="font-mono text-xs text-cyan-300 p-2 bg-cyan-950/30 border border-cyan-500/20 rounded">
        {feed.label} -> {feed.value}
      </div>
    ))}
  </Marquee>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <div className="h-60 w-80 rounded-xl border border-cyan-500/30 bg-[#070b14] overflow-hidden shadow-[0_0_24px_rgba(0,217,232,0.12)] p-2">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 px-2">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-400">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>LIVE_KERNEL_LOGS</span>
                  </div>
                  <Badge variant="neon" size="sm" dot dotColor="green">STREAMING</Badge>
                </div>
                <div className="h-44 overflow-hidden relative">
                  <Marquee direction="up" speed="normal" pauseOnHover fade className="h-full">
                    {telemetryFeeds.map((feed, i) => (
                      <div key={i} className="flex items-center justify-between px-3 py-2 bg-cyan-950/20 border border-cyan-500/20 rounded font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <feed.icon className="h-3 w-3 text-cyan-400" />
                          <span className="text-slate-300">{feed.label}</span>
                        </div>
                        <span className="text-cyan-300 font-semibold">{feed.value}</span>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Interactive Node Cards Marquee ── */}
      <ContentSection title="Interactive Node Cards Marquee" id="card-ticker">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Marquee seamlessly accepts complex interactive components, cards, and telemetry blocks. Hovering pauses the kinetic animation for user inspection.
          </p>

          <Playground
            code={`<Marquee speed="normal" pauseOnHover fade className="py-4">
  {nodeCards.map((node) => (
    <Card key={node.id} className="w-64 shrink-0 hover:border-cyan-500/50 transition-colors">
      <CardContent className="p-4 space-y-2">
        <Row justify="between">
          <span className="font-mono text-xs text-cyan-400 font-bold">{node.id}</span>
          <Badge variant="neon">{node.status}</Badge>
        </Row>
        <div className="text-xs text-slate-400">Region: {node.region}</div>
        <div className="text-xs text-slate-400">Load: {node.load} | Ping: {node.ping}</div>
      </CardContent>
    </Card>
  ))}
</Marquee>`}
          >
            <div className="w-full py-6 bg-[#050811] rounded-2xl border border-white/[0.06] overflow-hidden">
              <Marquee speed="normal" pauseOnHover fade className="py-2">
                {nodeCards.map((node, i) => (
                  <Card key={i} className="w-64 shrink-0 border-white/10 bg-white/[0.02] hover:border-cyan-500/40 hover:shadow-[0_0_16px_rgba(0,217,232,0.15)] transition-all cursor-pointer">
                    <CardContent className="p-4 space-y-2 font-mono text-xs">
                      <Row justify="between" align="center">
                        <span className="text-cyan-400 font-bold tracking-wider">{node.id}</span>
                        <Badge variant="neon" size="sm">{node.status}</Badge>
                      </Row>
                      <div className="text-slate-400 flex justify-between">
                        <span>Region:</span>
                        <span className="text-slate-200">{node.region}</span>
                      </div>
                      <div className="text-slate-400 flex justify-between">
                        <span>Load / Latency:</span>
                        <span className="text-cyan-300">{node.load} / {node.ping}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </Marquee>
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
              description: 'Visual preset theme styling.',
              type: '"default" | "neon" | "glass" | "bordered"',
              defaultValue: '"default"',
            },
            {
              property: 'direction',
              description: 'Kinetic scrolling axis and direction.',
              type: '"left" | "right" | "up" | "down"',
              defaultValue: '"left"',
            },
            {
              property: 'speed',
              description: 'Animation duration preset (slow: 60s, normal: 30s, fast: 15s).',
              type: '"slow" | "normal" | "fast"',
              defaultValue: '"normal"',
            },
            {
              property: 'pauseOnHover',
              description: 'Pauses kinetic motion when the user hovers over any child item.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'fade',
              description: 'Applies automated alpha gradient mask at the start and end edges.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'reverse',
              description: 'Inverts the default movement vector of the chosen direction.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'repeat',
              description: 'Number of duplicated child sets to ensure continuous loop without gaps.',
              type: 'number',
              defaultValue: '2',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            Respects <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">prefers-reduced-motion</code>: Continuous animation automatically pauses or halts for sensitive users.
          </li>
          <li>
            Duplicate sets render with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-hidden=&quot;true&quot;</code> to prevent screen readers from reading duplicated text multiple times.
          </li>
          <li>
            Always enable <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">pauseOnHover</code> when scrolling through clickable links or rich interactive cards.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Edge Fading:</strong> Enable <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">fade={'{true}'}</code> in hero sections to blend tickers seamlessly into the background.
          </li>
          <li>
            <strong>Speed Selection:</strong> Use <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">speed=&quot;slow&quot;</code> for text-heavy content or telemetry that users need to read, and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">speed=&quot;fast&quot;</code> for ambient badges or decorative ticker strips.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
