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
  Alert,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import {
  Terminal,
  Zap,
  Radio,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Accent Bars', level: 2 },
  { id: 'semantic-signals', text: 'Semantic Intent Signals (Neon, Info, Success, Warning, Rose)', level: 2 },
  { id: 'dismissible-alerts', text: 'Dismissible Banners (closable)', level: 2 },
  { id: 'frosted-glass-alert', text: 'Frosted Cyber-Glass Anomaly Callout', level: 2 },
  { id: 'tactical-hud-stream', text: 'Tactical HUD Incident Dispatch Log', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function AlertDocsPage() {
  const [dismissed, setDismissed] = React.useState(false);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Alert"
        description="High-priority status callouts featuring glowing gradient top accent wires, integrated semantic iconography, and dismiss actions."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Alert } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Accent Bars" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Alerts render with an illuminated top hairline accent gradient and automated icon placement.
          </p>

          <Playground
            code={`<div className="max-w-xl w-full">
  <Alert
    variant="neon"
    title="AUTONOMOUS DEFENSE ACTIVE"
    icon={<Terminal className="h-4.5 w-4.5 text-cyan-400" />}
  >
    All perimeter sentinels are operating within nominal telemetry thresholds. Subnet 10.240.0.0/16 secured.
  </Alert>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-xl w-full">
                <Alert
                  variant="neon"
                  title="AUTONOMOUS DEFENSE ACTIVE"
                  icon={<Terminal className="h-4.5 w-4.5 text-cyan-400" />}
                >
                  All perimeter sentinels are operating within nominal telemetry thresholds. Subnet 10.240.0.0/16 secured.
                </Alert>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Semantic Signals ── */}
      <ContentSection title="Semantic Intent Signals (Neon, Info, Success, Warning, Rose)" id="semantic-signals">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Communicate status urgency through semantic variants: <code className="text-cyan-400">neon</code>, <code className="text-emerald-400">success</code>, <code className="text-amber-400">warning</code>, <code className="text-rose-400">destructive</code>, or frosted <code className="text-cyan-400">glass</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4 max-w-xl w-full">
  <Alert variant="neon" title="NEURAL SYNC (CYAN)">
    Primary quantum handshake established with orbital station.
  </Alert>

  <Alert variant="success" title="SECURITY VERIFIED (EMERALD)">
    Cryptographic signature verified against root certificate authority.
  </Alert>

  <Alert variant="warning" title="CORE OVERCLOCK (AMBER)">
    Thermal junction temperature reaching 82°C. Dynamic throttling enabled.
  </Alert>

  <Alert variant="destructive" title="CRITICAL BREACH (ROSE)">
    Unauthorized packet injection detected on ingress interface eth0.
  </Alert>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-4 max-w-xl w-full">
                <Alert variant="neon" title="NEURAL SYNC (CYAN)">
                  Primary quantum handshake established with orbital station.
                </Alert>

                <Alert variant="success" title="SECURITY VERIFIED (EMERALD)">
                  Cryptographic signature verified against root certificate authority.
                </Alert>

                <Alert variant="warning" title="CORE OVERCLOCK (AMBER)">
                  Thermal junction temperature reaching 82°C. Dynamic throttling enabled.
                </Alert>

                <Alert variant="destructive" title="CRITICAL BREACH (ROSE)">
                  Unauthorized packet injection detected on ingress interface eth0.
                </Alert>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Dismissible Alerts ── */}
      <ContentSection title="Dismissible Banners (closable)" id="dismissible-alerts">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Set <code className="text-cyan-400">closable</code> and bind <code className="text-cyan-400">onClose</code> to render interactive dismiss buttons.
          </p>

          <Playground
            code={`<div className="max-w-xl w-full">
  {!dismissed ? (
    <Alert
      variant="neon"
      closable
      onClose={() => setDismissed(true)}
      title="SYSTEM MAINTENANCE SCHEDULED"
    >
      Orbital gateway firmware upgrade scheduled at 04:00 UTC. Zero downtime expected.
    </Alert>
  ) : (
    <Button variant="secondary" size="sm" onClick={() => setDismissed(false)}>
      Restore Alert Banner
    </Button>
  )}
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-xl w-full flex justify-center">
                {!dismissed ? (
                  <Alert
                    variant="neon"
                    closable
                    onClose={() => setDismissed(true)}
                    title="SYSTEM MAINTENANCE SCHEDULED"
                  >
                    Orbital gateway firmware upgrade scheduled at 04:00 UTC. Zero downtime expected.
                  </Alert>
                ) : (
                  <Button variant="secondary" size="sm" onClick={() => setDismissed(false)}>
                    Restore Alert Banner
                  </Button>
                )}
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Anomaly Callout ── */}
      <ContentSection title="Frosted Cyber-Glass Anomaly Callout" id="frosted-glass-alert">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Nest frosted glass alerts over circuit substrate boards with active perimeter beam sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-lg p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Radio className="h-4 w-4 text-cyan-400 animate-pulse" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">LIVE TELEMETRY MONITOR</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">MONITORING</Badge>
    </div>

    <Alert
      variant="glass"
      title="DYNAMIC ROUTE OPTIMIZATION"
      icon={<Zap className="h-4.5 w-4.5 text-cyan-400" />}
    >
      Traffic diverted away from Frankfurt hub due to upstream fiber attenuation. Latency stabilized to 14ms.
    </Alert>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-lg p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Radio className="h-4 w-4 text-cyan-400 animate-pulse" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">LIVE TELEMETRY MONITOR</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">MONITORING</Badge>
                  </div>

                  <Alert
                    variant="glass"
                    title="DYNAMIC ROUTE OPTIMIZATION"
                    icon={<Zap className="h-4.5 w-4.5 text-cyan-400" />}
                  >
                    Traffic diverted away from Frankfurt hub due to upstream fiber attenuation. Latency stabilized to 14ms.
                  </Alert>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Incident Dispatch Log ── */}
      <ContentSection title="Tactical HUD Incident Dispatch Log" id="tactical-hud-stream">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission incident dispatch card with active threat alerts.
          </p>

          <Playground
            code={`<Card className="max-w-lg mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SECTOR INCIDENT LOG</CardTitle>
      <Badge variant="neon" size="sm">3 EVENTS</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Realtime incident streams from active sentinels.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <Alert variant="destructive" title="INCURSION DETECTED">
      High-velocity kinetic projectile signature detected in Sector 04-A.
    </Alert>

    <Alert variant="warning" title="CAPACITOR DRAIN">
      EMP battery charge at 42%. Solar recharge in progress.
    </Alert>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-lg w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SECTOR INCIDENT LOG</CardTitle>
                    <Badge variant="neon" size="sm">3 EVENTS</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Realtime incident streams from active sentinels.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <Alert variant="destructive" title="INCURSION DETECTED">
                    High-velocity kinetic projectile signature detected in Sector 04-A.
                  </Alert>

                  <Alert variant="warning" title="CAPACITOR DRAIN">
                    EMP battery charge at 42%. Solar recharge in progress.
                  </Alert>
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
              description: 'Visual urgency style and gradient wire preset.',
              type: '"primary" | "primary-subtle" | "primary-outline" | "neon" | "info" | "success" | "warning" | "destructive" | "glass"',
              defaultValue: '"primary-subtle"',
            },
            {
              property: 'title',
              description: 'Bold title displayed at the top of the callout.',
              type: 'string',
            },
            {
              property: 'icon',
              description: 'Custom leading icon element. Replaces the default semantic variant icon.',
              type: 'React.ReactNode',
            },
            {
              property: 'closable',
              description: 'Displays an interactive dismiss button in the top-right corner.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'onClose',
              description: 'Callback fired when the user clicks the dismiss button.',
              type: '() => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Role Alert:</strong> Automatically applies <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;alert&quot;</code> to immediately announce important status updates to assistive technologies.
          </li>
          <li>
            <strong>Focusable Dismiss:</strong> The dismiss button is keyboard-focusable with clear focus halos and an explicit <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label=&quot;Dismiss alert&quot;</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Alert Placement:</strong> Position global system alerts near the top of the viewport and form-level alerts directly above the relevant fields.
          </li>
          <li>
            <strong>Concise Content:</strong> Keep alert messages to 1–2 sentences with clear remediation instructions.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
