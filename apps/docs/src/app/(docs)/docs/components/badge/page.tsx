import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Badge, Card, CardContent, Row } from '@siberui/react';
import { Activity } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'primary-tier', text: 'Primary Signal Tier', level: 2 },
  { id: 'semantic-intent', text: 'Semantic Intent Badges', level: 2 },
  { id: 'neon-cyberpunk', text: 'Neon Cyberpunk Badges', level: 2 },
  { id: 'frosted-glass', text: 'Frosted Glassmorphism Variant', level: 2 },
  { id: 'pulsing-status-dots', text: 'Pulsing Status Dots', level: 2 },
  { id: 'shapes-and-sizes', text: 'Shapes & Scaling', level: 2 },
  { id: 'hud-telemetry-card', text: 'HUD Telemetry Header Composition', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function BadgeDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Badge"
        description="A specialized status indicator crafted with cyberpunk neon auras, frosted glassmorphism, and live radar-ping status dots."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Badge } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Primary Signal Tier ── */}
      <ContentSection title="Primary Signal Tier" id="primary-tier">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Primary badges represent system state and primary metadata with three intensity tiers (<code className="text-cyan-400">primary</code>, <code className="text-cyan-400">primary-subtle</code>, <code className="text-cyan-400">primary-outline</code>).
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="primary">Primary Solid</Badge>
  <Badge variant="primary-subtle">Primary Subtle</Badge>
  <Badge variant="primary-outline">Primary Outline</Badge>
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Badge variant="primary">Primary Solid</Badge>
              <Badge variant="primary-subtle">Primary Subtle</Badge>
              <Badge variant="primary-outline">Primary Outline</Badge>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Semantic Intent Badges ── */}
      <ContentSection title="Semantic Intent Badges" id="semantic-intent">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Communicate security status, warnings, and alerts with semantically styled badges.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="success" dot dotColor="green">System Online</Badge>
  <Badge variant="warning" dot dotColor="amber">High Memory Load</Badge>
  <Badge variant="danger" dot dotColor="rose">Firewall Breach</Badge>
  <Badge variant="secondary">Muted Cache</Badge>
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Badge variant="success" dot dotColor="green">System Online</Badge>
              <Badge variant="warning" dot dotColor="amber">High Memory Load</Badge>
              <Badge variant="danger" dot dotColor="rose">Firewall Breach</Badge>
              <Badge variant="secondary">Muted Cache</Badge>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Cyberpunk Badges ── */}
      <ContentSection title="Neon Cyberpunk Badges" id="neon-cyberpunk">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;neon&quot;</code> preset renders monospace uppercase badges illuminated by a cyan aura shadow.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-6 items-center">
  <Badge variant="neon" dot dotColor="cyan">QUANTUM_LOCKED</Badge>
  <Badge variant="neon" glow>OVERDRIVE: ACTIVE</Badge>
  <Badge variant="neon" shape="square">SECTOR_09</Badge>
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Badge variant="neon" dot dotColor="cyan">QUANTUM_LOCKED</Badge>
              <Badge variant="neon" glow>OVERDRIVE: ACTIVE</Badge>
              <Badge variant="neon" shape="square">SECTOR_09</Badge>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Glassmorphism ── */}
      <ContentSection title="Frosted Glassmorphism Variant" id="frosted-glass">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;glass&quot;</code> style creates frosted translucent capsules that float seamlessly across textured surfaces.
          </p>

          <Playground
            code={`<div className="p-8 rounded-2xl border border-white/10 bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat flex flex-wrap gap-4 items-center justify-center">
  <Badge variant="glass">Zero-Trust Verified</Badge>
  <Badge variant="glass" dot dotColor="cyan">Neural Stream</Badge>
  <Badge variant="glass" shape="rounded">AES-256 GCM</Badge>
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl">
              <div className="relative z-10 flex flex-wrap gap-6 items-center justify-center">
                <Badge variant="glass">Zero-Trust Verified</Badge>
                <Badge variant="glass" dot dotColor="cyan">Neural Stream</Badge>
                <Badge variant="glass" shape="rounded">AES-256 GCM</Badge>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Pulsing Status Dots ── */}
      <ContentSection title="Pulsing Status Dots" id="pulsing-status-dots">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">{'dot={true}'}</code> to render a dual-layer live radar ping indicator.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="outline" dot dotColor="green">Active Node</Badge>
  <Badge variant="outline" dot dotColor="cyan">Streaming Logs</Badge>
  <Badge variant="outline" dot dotColor="amber">Sync Pending</Badge>
  <Badge variant="outline" dot dotColor="rose">Service Degraded</Badge>
  <Badge variant="outline" dot dotColor="purple">AI Co-pilot Active</Badge>
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Badge variant="outline" dot dotColor="green">Active Node</Badge>
              <Badge variant="outline" dot dotColor="cyan">Streaming Logs</Badge>
              <Badge variant="outline" dot dotColor="amber">Sync Pending</Badge>
              <Badge variant="outline" dot dotColor="rose">Service Degraded</Badge>
              <Badge variant="outline" dot dotColor="purple">AI Co-pilot Active</Badge>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Shapes & Scaling ── */}
      <ContentSection title="Shapes & Scaling" id="shapes-and-sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Badges support <code className="text-cyan-400">pill</code> (default), <code className="text-cyan-400">rounded</code>, and <code className="text-cyan-400">square</code> corner geometries across <code className="text-cyan-400">sm</code>, <code className="text-cyan-400">md</code>, and <code className="text-cyan-400">lg</code> dimensions.
          </p>

          <Playground
            code={`<div className="flex flex-wrap items-center gap-4">
  <Badge size="sm" shape="pill">Small Pill (10px)</Badge>
  <Badge size="md" shape="rounded">Medium Rounded (12px)</Badge>
  <Badge size="lg" shape="square">Large Square (14px)</Badge>
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Badge size="sm" shape="pill">Small Pill (10px)</Badge>
              <Badge size="md" shape="rounded">Medium Rounded (12px)</Badge>
              <Badge size="lg" shape="square">Large Square (14px)</Badge>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── HUD Telemetry Header Composition ── */}
      <ContentSection title="HUD Telemetry Header Composition" id="hud-telemetry-card">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            An example of combining various badge tiers inside a real-time cluster telemetry banner.
          </p>

          <Playground
            code={`<Card className="max-w-xl mx-auto border-cyan-500/30 bg-[#070b14] shadow-2xl">
  <CardContent className="p-6 space-y-4">
    <Row justify="between" align="center">
      <div className="flex items-center gap-2">
        <Activity className="h-4 w-4 text-cyan-400" />
        <span className="font-mono font-bold text-sm text-slate-100">KUBERNETES_CLUSTER_01</span>
      </div>
      <Badge variant="neon" dot dotColor="green">HEALTHY</Badge>
    </Row>
    <Row gap="sm" className="flex-wrap">
      <Badge variant="glass" size="sm">REGION: EU-WEST</Badge>
      <Badge variant="glass" size="sm">NODES: 12/12</Badge>
      <Badge variant="primary-subtle" size="sm">UPTIME: 99.99%</Badge>
    </Row>
  </CardContent>
</Card>`}
          >
            <div className="w-full p-4">
              <Card className="max-w-xl mx-auto border-cyan-500/30 bg-[#070b14] shadow-[0_0_24px_rgba(0,217,232,0.1)]">
                <CardContent className="p-6 space-y-4">
                  <Row justify="between" align="center">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono font-bold text-sm text-slate-100 tracking-wider">KUBERNETES_CLUSTER_01</span>
                    </div>
                    <Badge variant="neon" dot dotColor="green">HEALTHY</Badge>
                  </Row>
                  <Row gap="sm" className="flex-wrap">
                    <Badge variant="glass" size="sm">REGION: EU-WEST</Badge>
                    <Badge variant="glass" size="sm">NODES: 12/12</Badge>
                    <Badge variant="primary-subtle" size="sm">UPTIME: 99.99%</Badge>
                  </Row>
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
              description: 'Visual theme preset.',
              type: '"primary" | "primary-subtle" | "primary-outline" | "secondary" | "outline" | "neon" | "glass" | "success" | "warning" | "danger"',
              defaultValue: '"primary"',
            },
            {
              property: 'shape',
              description: 'Corner radius styling.',
              type: '"pill" | "rounded" | "square"',
              defaultValue: '"pill"',
            },
            {
              property: 'size',
              description: 'Typography and padding scale.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'dot',
              description: 'Displays a live radar ping animated status dot.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'dotColor',
              description: 'Color theme for the status dot.',
              type: '"cyan" | "purple" | "green" | "rose" | "amber" | "slate"',
            },
            {
              property: 'glow',
              description: 'Adds an exterior cyan neon atmospheric shadow.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'pulse',
              description: 'Applies continuous opacity pulse animation across the entire badge.',
              type: 'boolean',
              defaultValue: 'false',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            Badges are rendered as semantic inline indicators. Ensure text content provides standalone meaning without relying solely on color.
          </li>
          <li>
            When used as interactive filters or tags, pair with accessible keyboard focus indicators.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Telemetry Labels:</strong> Use <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">variant=&quot;neon&quot;</code> for critical uppercase status alerts.
          </li>
          <li>
            <strong>Frosted Surfaces:</strong> Use <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">variant=&quot;glass&quot;</code> over rich backgrounds and circuit board textures.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
