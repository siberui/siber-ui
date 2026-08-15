import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  ScrollArea,
  ScrollBar,
  Badge,
  Card,
  CardContent,
  Row,
  BorderBeam,
} from '@siberui/react';
import { Terminal, Shield, Radio } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'terminal-audit-log', text: 'Vertical Terminal Audit Stream', level: 2 },
  { id: 'horizontal-telemetry', text: 'Horizontal Node Telemetry Feed', level: 2 },
  { id: 'frosted-glass-feed', text: 'Frosted Cyber-Glass Telemetry Monitor', level: 2 },
  { id: 'threat-matrix-card', text: 'Tactical Threat Intel Stream', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ScrollAreaDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Scroll Area"
        description="A customized hi-tech scrolling viewport featuring glowing cyan scrollbars, smooth trackpad physics, and cross-browser acrylic styling."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { ScrollArea, ScrollBar } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Vertical Terminal Audit Stream ── */}
      <ContentSection title="Vertical Terminal Audit Stream" id="terminal-audit-log">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Standard vertical scroll area featuring cyber styled scrollbars that illuminate on hover with radiant cyan signals.
          </p>

          <Playground
            code={`<ScrollArea className="h-64 w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[#050811] p-5 shadow-2xl">
  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
    <Terminal className="h-4 w-4 text-cyan-400" />
    <span className="font-mono text-xs font-bold text-slate-200">SYSTEM_AUDIT_LOG.LOG</span>
    <Badge variant="neon" size="sm" className="ml-auto">LIVE</Badge>
  </div>
  <div className="space-y-3 font-mono text-xs text-slate-400">
    <p><span className="text-cyan-400">[00:14:02]</span> SYSTEM INITIALIZATION COMPLETE</p>
    <p><span className="text-cyan-400">[00:14:03]</span> KERNEL MODULES LOADED [HASH: 0x9AF2]</p>
    <p><span className="text-emerald-400">[00:14:05]</span> QUANTUM BUS SYNC ESTABLISHED: 10.4 GB/s</p>
    <p><span className="text-cyan-400">[00:14:08]</span> MOUNTING CRYPTOGRAPHIC VAULT: /dev/siber-sec</p>
    <p><span className="text-amber-400">[00:14:12]</span> HEURISTIC FIREWALL SCAN: NO ANOMALIES</p>
    <p><span className="text-cyan-400">[00:14:15]</span> NEURAL PROXY LISTENING ON PORT 9090</p>
    <p><span className="text-emerald-400">[00:14:19]</span> OPERATOR AUTHENTICATED: CLEARANCE_LEVEL_5</p>
    <p><span className="text-cyan-400">[00:14:22]</span> ALL SUB-SYSTEMS NOMINAL. READY FOR INPUT.</p>
  </div>
</ScrollArea>`}
          >
            <div className="flex items-center justify-center p-6 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <ScrollArea className="h-64 w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[#050811] p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-slate-200">SYSTEM_AUDIT_LOG.LOG</span>
                  <Badge variant="neon" size="sm" className="ml-auto">LIVE</Badge>
                </div>
                <div className="space-y-3 font-mono text-xs text-slate-400">
                  <p><span className="text-cyan-400">[00:14:02]</span> SYSTEM INITIALIZATION COMPLETE</p>
                  <p><span className="text-cyan-400">[00:14:03]</span> KERNEL MODULES LOADED [HASH: 0x9AF2]</p>
                  <p><span className="text-emerald-400">[00:14:05]</span> QUANTUM BUS SYNC ESTABLISHED: 10.4 GB/s</p>
                  <p><span className="text-cyan-400">[00:14:08]</span> MOUNTING CRYPTOGRAPHIC VAULT: /dev/siber-sec</p>
                  <p><span className="text-amber-400">[00:14:12]</span> HEURISTIC FIREWALL SCAN: NO ANOMALIES</p>
                  <p><span className="text-cyan-400">[00:14:15]</span> NEURAL PROXY LISTENING ON PORT 9090</p>
                  <p><span className="text-emerald-400">[00:14:19]</span> OPERATOR AUTHENTICATED: CLEARANCE_LEVEL_5</p>
                  <p><span className="text-cyan-400">[00:14:22]</span> ALL SUB-SYSTEMS NOMINAL. READY FOR INPUT.</p>
                </div>
              </ScrollArea>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Horizontal Node Telemetry Feed ── */}
      <ContentSection title="Horizontal Node Telemetry Feed" id="horizontal-telemetry">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Attach <code className="text-cyan-400">&lt;ScrollBar orientation=&quot;horizontal&quot; /&gt;</code> for horizontal carousel-style metric streams.
          </p>

          <Playground
            code={`<ScrollArea className="w-full whitespace-nowrap rounded-2xl border border-white/[0.08] bg-[#050811] p-4 shadow-xl">
  <div className="flex w-max space-x-4">
    {[
      { id: 'ALPHA-01', status: 'ACTIVE', load: '32%', color: 'cyan' },
      { id: 'BETA-02', status: 'SYNCING', load: '78%', color: 'amber' },
      { id: 'GAMMA-03', status: 'OPTIMAL', load: '14%', color: 'emerald' },
      { id: 'DELTA-04', status: 'OFFLINE', load: '0%', color: 'rose' },
      { id: 'EPSILON-05', status: 'ACTIVE', load: '56%', color: 'cyan' },
      { id: 'ZETA-06', status: 'OPTIMAL', load: '22%', color: 'emerald' },
    ].map((node) => (
      <div key={node.id} className="w-48 p-4 rounded-xl bg-[#080d1a] border border-white/[0.06] flex flex-col gap-2">
        <Row justify="between" align="center">
          <span className="font-mono text-xs font-bold text-slate-200">{node.id}</span>
          <Badge variant="primary-subtle" size="sm">{node.status}</Badge>
        </Row>
        <span className="text-[11px] font-mono text-slate-400">Load: {node.load}</span>
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
          >
            <div className="flex items-center justify-center p-6 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <ScrollArea className="w-full whitespace-nowrap rounded-2xl border border-white/[0.08] bg-[#050811] p-4 shadow-xl">
                <div className="flex w-max space-x-4">
                  {[
                    { id: 'ALPHA-01', status: 'ACTIVE', load: '32%' },
                    { id: 'BETA-02', status: 'SYNCING', load: '78%' },
                    { id: 'GAMMA-03', status: 'OPTIMAL', load: '14%' },
                    { id: 'DELTA-04', status: 'STANDBY', load: '4%' },
                    { id: 'EPSILON-05', status: 'ACTIVE', load: '56%' },
                    { id: 'ZETA-06', status: 'OPTIMAL', load: '22%' },
                  ].map((node) => (
                    <div key={node.id} className="w-48 p-4 rounded-xl bg-[#080d1a] border border-white/[0.06] flex flex-col gap-2">
                      <Row justify="between" align="center">
                        <span className="font-mono text-xs font-bold text-slate-200">{node.id}</span>
                        <Badge variant="primary-subtle" size="sm">{node.status}</Badge>
                      </Row>
                      <span className="text-[11px] font-mono text-slate-400">Memory Load: {node.load}</span>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Telemetry Monitor ── */}
      <ContentSection title="Frosted Cyber-Glass Telemetry Monitor" id="frosted-glass-feed">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            ScrollArea embeds seamlessly into frosted acrylic panels over circuit textures with illuminated BorderBeam borders.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-xl p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-3">
    <Row justify="between" align="center">
      <div className="flex items-center gap-2">
        <Radio className="h-4 w-4 text-cyan-400 animate-pulse" />
        <span className="font-mono text-sm font-bold text-white">QUANTUM_TELEMETRY_FEED</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">MONITORED</Badge>
    </Row>
    <ScrollArea className="h-48 w-full rounded-xl bg-black/40 border border-white/[0.06] p-4">
      <div className="space-y-2 font-mono text-xs text-slate-300">
        <p className="text-cyan-300">&gt; NODE_01: Quantum state coherency at 99.98%</p>
        <p className="text-slate-400">&gt; NODE_02: Entanglement pair verified (Qubit 482)</p>
        <p className="text-cyan-300">&gt; NODE_03: Synaptic clock rate synced with satellite GPS</p>
        <p className="text-violet-300">&gt; NODE_04: Encryption cipher rotation initiated</p>
        <p className="text-slate-400">&gt; NODE_05: Telemetry buffer flushed: 0 dropped packets</p>
        <p className="text-emerald-300">&gt; NODE_06: Zero anomalies across all active sectors</p>
      </div>
    </ScrollArea>
  </div>
  <BorderBeam variant="neon" size={120} duration={7} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-xl p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <Row justify="between" align="center">
                    <div className="flex items-center gap-2">
                      <Radio className="h-4 w-4 text-cyan-400 animate-pulse" />
                      <span className="font-mono text-sm font-bold text-white">QUANTUM_TELEMETRY_FEED</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">MONITORED</Badge>
                  </Row>
                  <ScrollArea className="h-48 w-full rounded-xl bg-black/40 border border-white/[0.06] p-4">
                    <div className="space-y-2 font-mono text-xs text-slate-300">
                      <p className="text-cyan-300">&gt; NODE_01: Quantum state coherency at 99.98%</p>
                      <p className="text-slate-400">&gt; NODE_02: Entanglement pair verified (Qubit 482)</p>
                      <p className="text-cyan-300">&gt; NODE_03: Synaptic clock rate synced with satellite GPS</p>
                      <p className="text-violet-300">&gt; NODE_04: Encryption cipher rotation initiated</p>
                      <p className="text-slate-400">&gt; NODE_05: Telemetry buffer flushed: 0 dropped packets</p>
                      <p className="text-emerald-300">&gt; NODE_06: Zero anomalies across all active sectors</p>
                    </div>
                  </ScrollArea>
                </div>
                <BorderBeam variant="neon" size={120} duration={7} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical Threat Intel Stream ── */}
      <ContentSection title="Tactical Threat Intel Stream" id="threat-matrix-card">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Combine ScrollArea with HUD cards and threat indicators for defense and telemetry consoles.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-2xl">
  <CardContent className="p-6 space-y-4">
    <Row justify="between" align="center">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-cyan-400" />
        <span className="font-mono text-sm font-bold text-slate-100">DEFENSE_MATRIX_INTEL</span>
      </div>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </Row>
    <ScrollArea className="h-36 rounded-lg bg-[#040711] border border-white/[0.04] p-3">
      <div className="space-y-2 text-xs font-mono text-slate-400">
        <p className="text-emerald-400">[SEC-01] Firewall state: Optimal</p>
        <p className="text-slate-400">[SEC-02] Inbound packets analyzed: 42,900</p>
        <p className="text-amber-400">[SEC-03] Port scan suppressed from 192.168.1.99</p>
        <p className="text-slate-400">[SEC-04] Cryptographic key rotation cycle: 12h</p>
      </div>
    </ScrollArea>
  </CardContent>
</Card>`}
          >
            <div className="w-full p-4">
              <Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-[0_0_30px_rgba(0,217,232,0.1)]">
                <CardContent className="p-6 space-y-4">
                  <Row justify="between" align="center">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-cyan-400" />
                      <span className="font-mono text-sm font-bold text-slate-100">DEFENSE_MATRIX_INTEL</span>
                    </div>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </Row>
                  <ScrollArea className="h-36 rounded-lg bg-[#040711] border border-white/[0.04] p-3">
                    <div className="space-y-2 text-xs font-mono text-slate-400">
                      <p className="text-emerald-400">[SEC-01] Firewall state: Optimal</p>
                      <p className="text-slate-400">[SEC-02] Inbound packets analyzed: 42,900</p>
                      <p className="text-amber-400">[SEC-03] Port scan suppressed from 192.168.1.99</p>
                      <p className="text-slate-400">[SEC-04] Cryptographic key rotation cycle: 12h</p>
                    </div>
                  </ScrollArea>
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
              property: 'type',
              description: 'Describes the scrollbar visibility behavior.',
              type: '"auto" | "always" | "scroll" | "hover"',
              defaultValue: '"hover"',
            },
            {
              property: 'scrollHideDelay',
              description: 'Delay in milliseconds before the scrollbar hides after scrolling stops.',
              type: 'number',
              defaultValue: '600',
            },
            {
              property: 'orientation',
              description: 'Direction orientation of the scrollbar (applied to ScrollBar).',
              type: '"vertical" | "horizontal"',
              defaultValue: '"vertical"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Keyboard Navigation:</strong> The scroll viewport is focusable via keyboard tab navigation, allowing arrow keys and page up / down to scroll seamlessly.
          </li>
          <li>
            <strong>Touch & Mouse Wheel:</strong> Supports full momentum scrolling on touchpads and mobile devices without intercepting standard browser gestures.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Explicit Constraints:</strong> Always specify a fixed height (e.g. <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">h-64</code>) or max-height on the <code className="text-cyan-400">ScrollArea</code> container so the viewport correctly measures overflow.
          </li>
          <li>
            <strong>Horizontal Layouts:</strong> When using <code className="text-cyan-400">ScrollBar orientation=&quot;horizontal&quot;</code>, wrap inner items in <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">w-max flex</code> with whitespace-nowrap.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
