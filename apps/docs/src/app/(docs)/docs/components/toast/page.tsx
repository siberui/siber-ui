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
  ToastProvider,
  useToast,
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
  Bell,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  Info,
  Zap,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import & Provider Setup', level: 2 },
  { id: 'interactive-triggers', text: 'Interactive Toast Dispatcher', level: 2 },
  { id: 'variant-anatomy', text: 'Variant Anatomy & Countdown Bars', level: 2 },
  { id: 'positions', text: 'Viewport Placement Matrix', level: 2 },
  { id: 'frosted-glass-dispatch', text: 'Frosted Cyber-Glass Telemetry Event Banner', level: 2 },
  { id: 'tactical-hud-trigger', text: 'Tactical HUD Alert Dispatch Console', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

function InteractiveToastDemos() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button
        variant="neon"
        onClick={() =>
          toast({
            title: 'Neural Link Synchronized',
            description: 'Quantum handshake established with node FRA-04.',
            variant: 'info',
          })
        }
      >
        Trigger Cyan Info
      </Button>

      <Button
        variant="secondary"
        className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/20"
        onClick={() =>
          toast({
            title: 'Subnet Verified',
            description: 'Mutual TLS certificate validated successfully.',
            variant: 'success',
          })
        }
      >
        Trigger Emerald Success
      </Button>

      <Button
        variant="secondary"
        className="border-amber-500/30 text-amber-400 hover:bg-amber-950/20"
        onClick={() =>
          toast({
            title: 'Capacitor Depleted',
            description: 'EMP capacitor charge under 20%. Solar charging active.',
            variant: 'warning',
          })
        }
      >
        Trigger Amber Warning
      </Button>

      <Button
        variant="destructive"
        onClick={() =>
          toast({
            title: 'Critical Incursion',
            description: 'Hostile packet signature intercepted on port 443.',
            variant: 'destructive',
          })
        }
      >
        Trigger Rose Threat
      </Button>
    </div>
  );
}

export default function ToastDocsPage() {
  return (
    <ToastProvider position="bottom-right">
      <ComponentPage headings={headings}>
        <ComponentHeader
          title="Toast"
          description="Transient telemetry notifications featuring animated laser countdown progress meters, acrylic frosted backdrops, and semantic urgency tokens."
          status="Stable"
        />

        {/* ── Installation ── */}
        <ContentSection title="Installation" id="installation">
          <InstallCommand />
        </ContentSection>

        {/* ── Import & Provider Setup ── */}
        <ContentSection title="Import & Provider Setup" id="import">
          <div className="flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              Wrap your root layout or application tree with <code className="text-cyan-400">ToastProvider</code>, then consume the <code className="text-cyan-400">useToast()</code> hook in any interactive component.
            </p>
            <CodeBlock
              code={`// 1. In your layout or root provider:
import { ToastProvider } from '@siberui/react';

export default function RootLayout({ children }) {
  return (
    <ToastProvider position="bottom-right" maxToasts={5}>
      {children}
    </ToastProvider>
  );
}

// 2. In any child component:
import { useToast, Button } from '@siberui/react';

export function DispatchButton() {
  const { toast } = useToast();

  return (
    <Button onClick={() => toast({
      title: 'Neural Link Synchronized',
      description: 'Quantum handshake established with node FRA-04.',
      variant: 'info'
    })}>
      Transmit Notification
    </Button>
  );
}`}
            />
          </div>
        </ContentSection>

        {/* ── Interactive Toast Dispatcher ── */}
        <ContentSection title="Interactive Toast Dispatcher" id="interactive-triggers">
          <div className="flex flex-col gap-6">
            <p className="text-slate-300 text-sm leading-relaxed">
              Click the triggers below to spawn active live notifications in the bottom-right corner of the viewport.
            </p>

            <Playground
              code={`const { toast } = useToast();

<Button onClick={() => toast({
  title: 'Neural Link Synchronized',
  description: 'Quantum handshake established with node FRA-04.',
  variant: 'info'
})}>
  Trigger Cyan Info
</Button>`}
            >
              <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
                <InteractiveToastDemos />
              </div>
            </Playground>
          </div>
        </ContentSection>

        {/* ── Variant Anatomy & Countdown Bars ── */}
        <ContentSection title="Variant Anatomy & Countdown Bars" id="variant-anatomy">
          <div className="flex flex-col gap-6">
            <p className="text-slate-300 text-sm leading-relaxed">
              Each toast renders a top hairline laser wire and a bottom real-time countdown progress indicator.
            </p>

            <Playground
              code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
  {/* Cyan Info Notification */}
  <div className="relative flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-cyan-500/20 backdrop-blur-xl shadow-xl overflow-hidden">
    <Info className="h-[18px] w-[18px] text-cyan-400 shrink-0" />
    <div className="flex-1 space-y-0.5">
      <p className="text-sm font-semibold text-cyan-200">Neural Link Active</p>
      <p className="text-xs text-slate-400">Quantum synchronization confirmed.</p>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400/30" />
  </div>

  {/* Emerald Success Notification */}
  <div className="relative flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-emerald-500/20 backdrop-blur-xl shadow-xl overflow-hidden">
    <CheckCircle2 className="h-[18px] w-[18px] text-emerald-400 shrink-0" />
    <div className="flex-1 space-y-0.5">
      <p className="text-sm font-semibold text-emerald-200">Packet Verified</p>
      <p className="text-xs text-slate-400">Zero checksum errors in frame buffer.</p>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400/30" />
  </div>
</div>`}
            >
              <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                  {/* Cyan Info */}
                  <div className="relative flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-cyan-500/20 backdrop-blur-xl shadow-xl overflow-hidden">
                    <Info className="h-[18px] w-[18px] text-cyan-400 shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-0.5">
                      <p className="text-sm font-semibold text-cyan-200">Neural Link Active</p>
                      <p className="text-xs text-slate-400">Quantum synchronization confirmed.</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-3/4 h-[2px] bg-gradient-to-r from-cyan-500 to-cyan-400/30" />
                  </div>

                  {/* Emerald Success */}
                  <div className="relative flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-emerald-500/20 backdrop-blur-xl shadow-xl overflow-hidden">
                    <CheckCircle2 className="h-[18px] w-[18px] text-emerald-400 shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-0.5">
                      <p className="text-sm font-semibold text-emerald-200">Packet Verified</p>
                      <p className="text-xs text-slate-400">Zero checksum errors in frame buffer.</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-2/3 h-[2px] bg-gradient-to-r from-emerald-500 to-emerald-400/30" />
                  </div>

                  {/* Amber Warning */}
                  <div className="relative flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-amber-500/25 backdrop-blur-xl shadow-xl overflow-hidden">
                    <AlertCircle className="h-[18px] w-[18px] text-amber-400 shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-0.5">
                      <p className="text-sm font-semibold text-amber-200">Thermal Throttling</p>
                      <p className="text-xs text-slate-400">Junction temperature reached 84°C.</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-amber-500 to-amber-400/30" />
                  </div>

                  {/* Rose Threat */}
                  <div className="relative flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-rose-500/20 backdrop-blur-xl shadow-xl overflow-hidden">
                    <ShieldAlert className="h-[18px] w-[18px] text-rose-400 shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-0.5">
                      <p className="text-sm font-semibold text-rose-200">Perimeter Breach</p>
                      <p className="text-xs text-slate-400">Unauthorized root handshake blocked.</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-4/5 h-[2px] bg-gradient-to-r from-rose-500 to-rose-400/30" />
                  </div>
                </div>
              </div>
            </Playground>
          </div>
        </ContentSection>

        {/* ── Positions ── */}
        <ContentSection title="Viewport Placement Matrix" id="positions">
          <div className="flex flex-col gap-6">
            <p className="text-slate-300 text-sm leading-relaxed">
              Configure notification anchor anchors across 6 discrete screen coordinates:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xl">
              {['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].map((pos) => (
                <div key={pos} className="p-3.5 rounded-xl bg-[#050811] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>{pos}</span>
                  <Badge variant="neon" size="sm">SUPPORTED</Badge>
                </div>
              ))}
            </div>
          </div>
        </ContentSection>

        {/* ── Frosted Cyber-Glass Telemetry Event Banner ── */}
        <ContentSection title="Frosted Cyber-Glass Telemetry Event Banner" id="frosted-glass-dispatch">
          <div className="flex flex-col gap-6">
            <p className="text-slate-300 text-sm leading-relaxed">
              Combine frosted glass toast feeds with circuit substrate textures and border sweeps.
            </p>

            <Playground
              code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Bell className="h-4 w-4 text-cyan-400 animate-pulse" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">EVENT FEED EMITTER</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
    </div>

    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-cyan-400" />
        <span className="text-xs font-mono font-bold text-cyan-200">AUTOMATIC PACKET ROTATION</span>
      </div>
      <p className="text-xs text-slate-300">
        Dispatched 480 encrypted frames across secondary orbital transponder.
      </p>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
            >
              <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
                <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-cyan-400 animate-pulse" />
                        <span className="font-mono text-xs font-bold text-white tracking-wider">EVENT FEED EMITTER</span>
                      </div>
                      <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-cyan-400" />
                        <span className="text-xs font-mono font-bold text-cyan-200">AUTOMATIC PACKET ROTATION</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Dispatched 480 encrypted frames across secondary orbital transponder.
                      </p>
                    </div>
                  </div>
                  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
                </div>
              </div>
            </Playground>
          </div>
        </ContentSection>

        {/* ── Tactical HUD Alert Dispatch Console ── */}
        <ContentSection title="Tactical HUD Alert Dispatch Console" id="tactical-hud-trigger">
          <div className="flex flex-col gap-6">
            <p className="text-slate-300 text-sm leading-relaxed">
              Composite mission control card with live toast dispatch actions.
            </p>

            <Playground
              code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DISPATCH TELEMETRY BANNER</CardTitle>
      <Badge variant="neon" size="sm">READY</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Broadcast toast alerts across active operator workstations.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <InteractiveToastDemos />
  </CardContent>
</Card>`}
            >
              <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
                <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                  <CardHeader className="pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DISPATCH TELEMETRY BANNER</CardTitle>
                      <Badge variant="neon" size="sm">READY</Badge>
                    </div>
                    <CardDescription className="text-xs text-slate-400">
                      Broadcast toast alerts across active operator workstations.
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6">
                    <InteractiveToastDemos />
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
                property: 'title',
                description: 'Bold title displayed at the top of the toast banner.',
                type: 'string',
              },
              {
                property: 'description',
                description: 'Secondary guidance or status explanation text.',
                type: 'string',
              },
              {
                property: 'variant',
                description: 'Visual urgency and laser countdown bar theme.',
                type: '"info" | "success" | "warning" | "destructive"',
                defaultValue: '"info"',
              },
              {
                property: 'duration',
                description: 'Lifespan in milliseconds before auto-dismissal kicks in.',
                type: 'number',
                defaultValue: '4000',
              },
              {
                property: 'icon',
                description: 'Optional custom icon element to override semantic defaults.',
                type: 'React.ReactNode',
              },
              {
                property: 'position',
                description: 'For ToastProvider: Screen anchor corner.',
                type: '"top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center"',
                defaultValue: '"bottom-right"',
              },
              {
                property: 'maxToasts',
                description: 'For ToastProvider: Maximum concurrent visible banners.',
                type: 'number',
                defaultValue: '5',
              },
            ]}
          />
        </ContentSection>

        {/* ── Accessibility ── */}
        <ContentSection title="Accessibility" id="accessibility">
          <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
            <li>
              <strong>ARIA Status Role:</strong> Each toast applies <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;status&quot;</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-live=&quot;polite&quot;</code> to notify screen reader users without interrupting ongoing tasks.
            </li>
            <li>
              <strong>Accessible Dismiss:</strong> The close button contains an explicit <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label=&quot;Dismiss notification&quot;</code>.
            </li>
          </ul>
        </ContentSection>

        {/* ── Best Practices ── */}
        <ContentSection title="Best Practices" id="best-practices">
          <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
            <li>
              <strong>Toast Frequency:</strong> Do not spam toasts for mundane actions. Reserve toasts for asynchronous responses, save confirmations, or background errors.
            </li>
            <li>
              <strong>Duration:</strong> Critical errors should use higher durations (e.g. <code className="text-cyan-400">duration=&#123;8000&#125;</code>) so users have sufficient time to read the instructions.
            </li>
          </ul>
        </ContentSection>
      </ComponentPage>
    </ToastProvider>
  );
}
