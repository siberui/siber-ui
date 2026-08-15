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
  Status,
  StatusDot,
  StatusBadge,
  StatusIndicator,
  SystemState,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Server } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'status-dot', text: 'StatusDot & Pulse Rings', level: 2 },
  { id: 'status-badge', text: 'StatusBadge Pills', level: 2 },
  { id: 'status-indicator', text: 'StatusIndicator & Live Loaders', level: 2 },
  { id: 'status-composite', text: 'Status Composite with Descriptions', level: 2 },
  { id: 'system-state-rows', text: 'SystemState Key-Value Rows', level: 2 },
  { id: 'frosted-glass-monitor', text: 'Frosted Cyber-Glass Cluster Node Monitor', level: 2 },
  { id: 'tactical-hud-health', text: 'Tactical HUD Server Quorum Health Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

const allStates = [
  'online',
  'loading',
  'idle',
  'warning',
  'critical',
  'offline',
  'unknown',
] as const;

export default function StatusDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Status"
        description="Unified semantic state system mapping statuses to color rings, radar halos, animated pulse rings, and monospace metadata rows."
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
  Status, 
  StatusDot, 
  StatusBadge, 
  StatusIndicator, 
  SystemState 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── StatusDot ── */}
      <ContentSection title="StatusDot & Pulse Rings" id="status-dot">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The fundamental atom of the status system. Live states (<code className="text-cyan-400">online</code>, <code className="text-cyan-400">loading</code>, <code className="text-cyan-400">critical</code>) pulse automatically.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-8 items-center justify-center">
  <StatusDot state="online" size="lg" />
  <StatusDot state="loading" size="lg" />
  <StatusDot state="idle" size="lg" />
  <StatusDot state="warning" size="lg" />
  <StatusDot state="critical" size="lg" />
  <StatusDot state="offline" size="lg" />
  <StatusDot state="unknown" size="lg" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-wrap gap-8 items-center justify-center">
                {allStates.map((state) => (
                  <div key={state} className="flex flex-col items-center gap-2">
                    <StatusDot state={state} size="lg" />
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{state}</span>
                  </div>
                ))}
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── StatusBadge ── */}
      <ContentSection title="StatusBadge Pills" id="status-badge">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Compact rounded status pills combining the indicator dot and capitalized status text.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-3 justify-center">
  <StatusBadge state="online" />
  <StatusBadge state="loading" />
  <StatusBadge state="idle" />
  <StatusBadge state="warning" />
  <StatusBadge state="critical" />
  <StatusBadge state="offline" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-wrap gap-3 justify-center">
                {allStates.map((state) => (
                  <StatusBadge key={state} state={state} />
                ))}
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── StatusIndicator ── */}
      <ContentSection title="StatusIndicator & Live Loaders" id="status-indicator">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Designed for navigation headers and toolbars. Automatically renders a spinning loader when state is <code className="text-cyan-400">loading</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
  <StatusIndicator state="online" label="SAT_ORBIT_ONLINE" />
  <StatusIndicator state="loading" label="RECALIBRATING..." />
  <StatusIndicator state="warning" label="DEGRADED_PERF" />
  <StatusIndicator state="critical" label="FIREWALL_BREACH" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl">
                <StatusIndicator state="online" label="SAT_ORBIT_ONLINE" />
                <StatusIndicator state="loading" label="RECALIBRATING..." />
                <StatusIndicator state="warning" label="DEGRADED_PERF" />
                <StatusIndicator state="critical" label="FIREWALL_BREACH" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Status Composite ── */}
      <ContentSection title="Status Composite with Descriptions" id="status-composite">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite item combining indicator dot, primary label, and multi-line descriptive text.
          </p>

          <Playground
            code={`<div className="space-y-4 max-w-md w-full">
  <Status
    state="online"
    label="Mainframe Core (Frankfurt)"
    description="All 128 virtual clusters executing normally. 0 packet drops."
  />
  <Status
    state="critical"
    label="Orbital Uplink Relay (Tokyo)"
    description="Heartbeat timeout exceeded by 240 seconds. Automatic failover engaged."
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="space-y-4 max-w-md w-full">
                <Status
                  state="online"
                  label="Mainframe Core (Frankfurt)"
                  description="All 128 virtual clusters executing normally. 0 packet drops."
                />
                <Status
                  state="critical"
                  label="Orbital Uplink Relay (Tokyo)"
                  description="Heartbeat timeout exceeded by 240 seconds. Automatic failover engaged."
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── SystemState Rows ── */}
      <ContentSection title="SystemState Key-Value Rows" id="system-state-rows">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Monospace telemetry metadata table rows with integrated status dots.
          </p>

          <Playground
            code={`<div className="w-full max-w-md rounded-xl border border-white/[0.08] bg-[#070b14] p-4">
  <SystemState label="Cluster Uptime" value="142d 08h 12m" state="online" />
  <SystemState label="Active Gateway Region" value="eu-central-1 (Frankfurt)" />
  <SystemState label="Round-Trip Latency" value="14.2 ms" state="online" />
  <SystemState label="Lattice Memory Pressure" value="89.4%" state="warning" />
  <SystemState label="Air-Gapped HSM" value="DISCONNECTED" state="offline" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="w-full max-w-md rounded-xl border border-white/[0.08] bg-[#070b14] p-4">
                <SystemState label="Cluster Uptime" value="142d 08h 12m" state="online" />
                <SystemState label="Active Gateway Region" value="eu-central-1 (Frankfurt)" />
                <SystemState label="Round-Trip Latency" value="14.2 ms" state="online" />
                <SystemState label="Lattice Memory Pressure" value="89.4%" state="warning" />
                <SystemState label="Air-Gapped HSM" value="DISCONNECTED" state="offline" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Cluster Node Monitor ── */}
      <ContentSection title="Frosted Cyber-Glass Cluster Node Monitor" id="frosted-glass-monitor">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite health monitor card with circuit substrate textures and border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-5">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Server className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">CLUSTER SENTINEL NODE</span>
      </div>
      <StatusBadge state="online" label="NOMINAL" />
    </div>

    <div className="space-y-3">
      <SystemState label="BGP Autonomous System" value="AS64512" />
      <SystemState label="Consensus Protocol" value="Raft v2.4" state="online" />
      <SystemState label="Replication Lag" value="0.04 ms" state="online" />
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        PERFORM HEALTH CHECK
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
                      <Server className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">CLUSTER SENTINEL NODE</span>
                    </div>
                    <StatusBadge state="online" label="NOMINAL" />
                  </div>

                  <div className="space-y-3">
                    <SystemState label="BGP Autonomous System" value="AS64512" />
                    <SystemState label="Consensus Protocol" value="Raft v2.4" state="online" />
                    <SystemState label="Replication Lag" value="0.04 ms" state="online" />
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      PERFORM HEALTH CHECK
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Server Quorum Health Card ── */}
      <ContentSection title="Tactical HUD Server Quorum Health Card" id="tactical-hud-health">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Operational mission card displaying real-time quorum node telemetry.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">QUORUM REPLICATION MATRIX</CardTitle>
      <StatusBadge state="online" label="3/3 NODES" />
    </div>
    <CardDescription className="text-xs text-slate-400">
      Realtime consensus state across orbital validator nodes.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-3">
    <Status state="online" label="NODE_ALPHA (Virginia Hub)" description="Sync offset: 0 frames • 100% quorum vote" />
    <Status state="online" label="NODE_BETA (Frankfurt Hub)" description="Sync offset: 1 frame • 100% quorum vote" />
    <Status state="warning" label="NODE_GAMMA (Tokyo Hub)" description="Sync offset: 14 frames • Latency warning" />
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">QUORUM REPLICATION MATRIX</CardTitle>
                    <StatusBadge state="online" label="3/3 NODES" />
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Realtime consensus state across orbital validator nodes.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-3">
                  <Status state="online" label="NODE_ALPHA (Virginia Hub)" description="Sync offset: 0 frames • 100% quorum vote" />
                  <Status state="online" label="NODE_BETA (Frankfurt Hub)" description="Sync offset: 1 frame • 100% quorum vote" />
                  <Status state="warning" label="NODE_GAMMA (Tokyo Hub)" description="Sync offset: 14 frames • Latency warning" />
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
              property: 'state',
              description: 'Semantic state key driving colors, dot hues, and text colors.',
              type: '"online" | "offline" | "idle" | "loading" | "warning" | "critical" | "unknown"',
              defaultValue: '"unknown"',
            },
            {
              property: 'pulse',
              description: 'Forces or disables the animated radial pulsing radar glow ring. Defaults to true for online, loading, and critical states.',
              type: 'boolean',
            },
            {
              property: 'label',
              description: 'Custom textual label override.',
              type: 'React.ReactNode',
            },
            {
              property: 'description',
              description: 'For Status: Subtitle text displayed below the label.',
              type: 'React.ReactNode',
            },
            {
              property: 'value',
              description: 'For SystemState: Right-aligned metadata value.',
              type: 'React.ReactNode',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Role Status:</strong> StatusDot provides an automatic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label</code> communicating current status to assistive screen readers.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Consistency:</strong> Never hardcode arbitrary colors for status indicators; always consume the standardized <code className="text-cyan-400">StatusState</code> enum tokens.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
