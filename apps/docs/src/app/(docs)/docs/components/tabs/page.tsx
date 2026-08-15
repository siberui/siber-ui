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
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  BorderBeam,
} from '@siberui/react';
import {
  Terminal,
  Activity,
  Shield,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Sliding Indicator Pill', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Tabs & Glowing Active Pill', level: 2 },
  { id: 'underline-variant', text: 'Underline Sliding Laser Bar Variant', level: 2 },
  { id: 'frosted-glass-tabs', text: 'Frosted Cyber-Glass Multiview Module', level: 2 },
  { id: 'tactical-hud-deck', text: 'Tactical HUD Multichannel Telemetry Deck', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function TabsDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tabs"
        description="Radix UI-backed tab navigation primitives with animated smooth sliding indicator pills, glowing laser underline sweeps, and accessible keyboard arrow selection."
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
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Sliding Indicator Pill" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The tabs component automatically animates a smooth sliding indicator behind the active trigger as selection changes.
          </p>

          <Playground
            code={`<Tabs defaultValue="account" className="w-full max-w-md">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">ACCOUNT</TabsTrigger>
    <TabsTrigger value="security">SECURITY</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Operator Account</CardTitle>
        <CardDescription>Configure personal identity and access keys.</CardDescription>
      </CardHeader>
      <CardContent className="text-xs text-slate-400">
        Active clearance ID: 0x9F41 // Sentinel Operator Level 4
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="security">
    <Card>
      <CardHeader>
        <CardTitle>Security Enclave</CardTitle>
        <CardDescription>Manage air-gapped cryptographic tokens.</CardDescription>
      </CardHeader>
      <CardContent className="text-xs text-slate-400">
        Hardware HSM Key: Kyber-1024 Curve Verified
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Tabs defaultValue="account" className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">ACCOUNT</TabsTrigger>
                  <TabsTrigger value="security">SECURITY</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Operator Account</CardTitle>
                      <CardDescription>Configure personal identity and access keys.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-slate-400">
                      Active clearance ID: 0x9F41 // Sentinel Operator Level 4
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Enclave</CardTitle>
                      <CardDescription>Manage air-gapped cryptographic tokens.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-slate-400">
                      Hardware HSM Key: Kyber-1024 Curve Verified
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Tabs & Glowing Active Pill" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Set <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser pill glow halos and uppercase monospace triggers.
          </p>

          <Playground
            code={`<Tabs variant="neon" defaultValue="system" className="w-full max-w-lg">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="system">
      <Terminal className="w-3.5 h-3.5 mr-2" />
      SYSTEM
    </TabsTrigger>
    <TabsTrigger value="network">
      <Activity className="w-3.5 h-3.5 mr-2" />
      NETWORK
    </TabsTrigger>
    <TabsTrigger value="security">
      <Shield className="w-3.5 h-3.5 mr-2" />
      SECURITY
    </TabsTrigger>
  </TabsList>
  <TabsContent value="system">
    <Card variant="signal" accentLine="cyan">
      <CardHeader>
        <CardTitle className="text-cyan-400">System Kernel Alpha</CardTitle>
        <CardDescription>Clock Frequency: 5.8 GHz // Status: ACTIVE</CardDescription>
      </CardHeader>
    </Card>
  </TabsContent>
  <TabsContent value="network">
    <Card variant="signal" accentLine="cyan">
      <CardHeader>
        <CardTitle className="text-cyan-400">Mesh Routing Network</CardTitle>
        <CardDescription>Throughput: 14.8 GB/s // Latency: 0.32 ms</CardDescription>
      </CardHeader>
    </Card>
  </TabsContent>
  <TabsContent value="security">
    <Card variant="signal" accentLine="cyan">
      <CardHeader>
        <CardTitle className="text-cyan-400">Cryptographic Firewall</CardTitle>
        <CardDescription>Zero Packet Drops // Airgap: SECURE</CardDescription>
      </CardHeader>
    </Card>
  </TabsContent>
</Tabs>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Tabs variant="neon" defaultValue="system" className="w-full max-w-lg">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="system">
                    <Terminal className="w-3.5 h-3.5 mr-2" />
                    SYSTEM
                  </TabsTrigger>
                  <TabsTrigger value="network">
                    <Activity className="w-3.5 h-3.5 mr-2" />
                    NETWORK
                  </TabsTrigger>
                  <TabsTrigger value="security">
                    <Shield className="w-3.5 h-3.5 mr-2" />
                    SECURITY
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="system">
                  <Card variant="signal" accentLine="cyan">
                    <CardHeader>
                      <CardTitle className="text-cyan-400">System Kernel Alpha</CardTitle>
                      <CardDescription>Clock Frequency: 5.8 GHz // Status: ACTIVE</CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
                <TabsContent value="network">
                  <Card variant="signal" accentLine="cyan">
                    <CardHeader>
                      <CardTitle className="text-cyan-400">Mesh Routing Network</CardTitle>
                      <CardDescription>Throughput: 14.8 GB/s // Latency: 0.32 ms</CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
                <TabsContent value="security">
                  <Card variant="signal" accentLine="cyan">
                    <CardHeader>
                      <CardTitle className="text-cyan-400">Cryptographic Firewall</CardTitle>
                      <CardDescription>Zero Packet Drops // Airgap: SECURE</CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Underline Variant ── */}
      <ContentSection title="Underline Sliding Laser Bar Variant" id="underline-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">variant=&quot;underline&quot;</code> to display a glowing horizontal bottom laser indicator that slides smoothly between triggers.
          </p>

          <Playground
            code={`<Tabs variant="underline" defaultValue="overview" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="overview">OVERVIEW</TabsTrigger>
    <TabsTrigger value="analytics">ANALYTICS</TabsTrigger>
    <TabsTrigger value="logs">SYSTEM LOGS</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <div className="p-5 rounded-xl border border-white/[0.06] bg-[#050811] text-xs font-mono text-slate-300">
      &gt; Planetary Egress Cluster: 100% OPERATIONAL
    </div>
  </TabsContent>
  <TabsContent value="analytics">
    <div className="p-5 rounded-xl border border-white/[0.06] bg-[#050811] text-xs font-mono text-slate-300">
      &gt; Frame Ingestion: 2.84B packets / 24hr window
    </div>
  </TabsContent>
  <TabsContent value="logs">
    <div className="p-5 rounded-xl border border-white/[0.06] bg-[#050811] text-xs font-mono text-slate-300">
      &gt; Zero kernel panics detected.
    </div>
  </TabsContent>
</Tabs>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Tabs variant="underline" defaultValue="overview" className="w-full max-w-md">
                <TabsList>
                  <TabsTrigger value="overview">OVERVIEW</TabsTrigger>
                  <TabsTrigger value="analytics">ANALYTICS</TabsTrigger>
                  <TabsTrigger value="logs">SYSTEM LOGS</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <div className="p-5 rounded-xl border border-white/[0.06] bg-[#050811] text-xs font-mono text-slate-300">
                    &gt; Planetary Egress Cluster: 100% OPERATIONAL
                  </div>
                </TabsContent>
                <TabsContent value="analytics">
                  <div className="p-5 rounded-xl border border-white/[0.06] bg-[#050811] text-xs font-mono text-slate-300">
                    &gt; Frame Ingestion: 2.84B packets / 24hr window
                  </div>
                </TabsContent>
                <TabsContent value="logs">
                  <div className="p-5 rounded-xl border border-white/[0.06] bg-[#050811] text-xs font-mono text-slate-300">
                    &gt; Zero kernel panics detected.
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Multiview Module ── */}
      <ContentSection title="Frosted Cyber-Glass Multiview Module" id="frosted-glass-tabs">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite tabs nestled within acrylic glass modules layered over circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
      <span className="font-mono text-xs font-bold text-white tracking-wider">ORBITAL MULTIVIEW</span>
      <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
    </div>

    <Tabs variant="neon" defaultValue="feed1">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="feed1">OPTICAL</TabsTrigger>
        <TabsTrigger value="feed2">RADAR</TabsTrigger>
      </TabsList>
      <TabsContent value="feed1" className="p-4 rounded-xl bg-black/40 font-mono text-xs text-cyan-300">
        Live optical telescope feed active.
      </TabsContent>
      <TabsContent value="feed2" className="p-4 rounded-xl bg-black/40 font-mono text-xs text-emerald-300">
        360-degree radar perimeter sweep active.
      </TabsContent>
    </Tabs>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <span className="font-mono text-xs font-bold text-white tracking-wider">ORBITAL MULTIVIEW</span>
                    <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
                  </div>

                  <Tabs variant="neon" defaultValue="feed1">
                    <TabsList className="grid grid-cols-2">
                      <TabsTrigger value="feed1">OPTICAL</TabsTrigger>
                      <TabsTrigger value="feed2">RADAR</TabsTrigger>
                    </TabsList>
                    <TabsContent value="feed1" className="p-4 rounded-xl bg-black/40 font-mono text-xs text-cyan-300">
                      Live optical telescope feed active.
                    </TabsContent>
                    <TabsContent value="feed2" className="p-4 rounded-xl bg-black/40 font-mono text-xs text-emerald-300">
                      360-degree radar perimeter sweep active.
                    </TabsContent>
                  </Tabs>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Multichannel Telemetry Deck ── */}
      <ContentSection title="Tactical HUD Multichannel Telemetry Deck" id="tactical-hud-deck">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded tab navigation.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">TELEMETRY CHANNELS</CardTitle>
      <Badge variant="neon" size="sm">LIVE</Badge>
    </div>
  </CardHeader>

  <CardContent className="p-6">
    <Tabs variant="neon" defaultValue="ch1">
      <TabsList className="grid grid-cols-2 mb-4">
        <TabsTrigger value="ch1">CH-01 [FRA]</TabsTrigger>
        <TabsTrigger value="ch2">CH-02 [SGP]</TabsTrigger>
      </TabsList>
      <TabsContent value="ch1" className="space-y-2 font-mono text-xs text-slate-300">
        <p>Egress Gateway: Frankfurt-01</p>
        <p>Consensus Latency: 0.18 ms</p>
      </TabsContent>
      <TabsContent value="ch2" className="space-y-2 font-mono text-xs text-slate-300">
        <p>Egress Gateway: Singapore-02</p>
        <p>Consensus Latency: 0.42 ms</p>
      </TabsContent>
    </Tabs>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">TELEMETRY CHANNELS</CardTitle>
                    <Badge variant="neon" size="sm">LIVE</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <Tabs variant="neon" defaultValue="ch1">
                    <TabsList className="grid grid-cols-2 mb-4">
                      <TabsTrigger value="ch1">CH-01 [FRA]</TabsTrigger>
                      <TabsTrigger value="ch2">CH-02 [SGP]</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ch1" className="space-y-2 font-mono text-xs text-slate-300">
                      <p>Egress Gateway: Frankfurt-01</p>
                      <p>Consensus Latency: 0.18 ms</p>
                    </TabsContent>
                    <TabsContent value="ch2" className="space-y-2 font-mono text-xs text-slate-300">
                      <p>Egress Gateway: Singapore-02</p>
                      <p>Consensus Latency: 0.42 ms</p>
                    </TabsContent>
                  </Tabs>
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
              description: 'Visual indicator style ("default", "neon", "underline", "ghost").',
              type: '"default" | "neon" | "underline" | "ghost"',
              defaultValue: '"default"',
            },
            {
              property: 'defaultValue',
              description: 'Initial tab value for uncontrolled usage.',
              type: 'string',
            },
            {
              property: 'value',
              description: 'Controlled active tab value.',
              type: 'string',
            },
            {
              property: 'onValueChange',
              description: 'Callback fired when active tab changes.',
              type: '(value: string) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>W3C WAI-ARIA Tabs:</strong> Conforms strictly to Radix UI Tabs pattern with automated arrow key navigation (Left/Right arrows change tabs, Home/End jump to ends).
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Grid Columns:</strong> Use CSS grid utilities like <code className="text-cyan-400">grid grid-cols-3</code> on <code className="text-cyan-400">TabsList</code> to distribute tab triggers equally.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
