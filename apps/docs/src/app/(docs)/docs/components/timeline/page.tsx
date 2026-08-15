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
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineSubtitle,
  TimelinePeriod,
  TimelineContent,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';
import {
  Terminal,
  Shield,
  Zap,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Career & Incident Timeline', level: 2 },
  { id: 'connecting-lines', text: 'Connecting Laser Variants (Neon, Cyan, Emerald, Rose)', level: 2 },
  { id: 'node-statuses', text: 'Status Node Modes (Active, Completed, Future, Archived)', level: 2 },
  { id: 'frosted-glass-timeline', text: 'Frosted Cyber-Glass Event Chronicle', level: 2 },
  { id: 'tactical-hud-timeline', text: 'Tactical HUD Mission Milestone Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function TimelineDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Timeline"
        description="Chronological event vertical rail with illuminated node points, status badges, neon connecting laser wires, and expandable event dossiers."
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
  Timeline, 
  TimelineItem, 
  TimelineHeader, 
  TimelineTitle, 
  TimelineSubtitle, 
  TimelinePeriod, 
  TimelineContent 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Career & Incident Timeline" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The timeline connects sequential milestones through illuminated status indicators and chronological cards.
          </p>

          <Playground
            code={`<Timeline>
  <TimelineItem status="active" icon={<Terminal className="h-3 w-3" />}>
    <TimelineHeader>
      <TimelineTitle>Principal Sentinel Architect</TimelineTitle>
      <TimelinePeriod>2024 - PRESENT</TimelinePeriod>
    </TimelineHeader>
    <TimelineSubtitle>ORBITAL DEFENSE COMMAND</TimelineSubtitle>
    <TimelineContent>
      Architecting zero-trust distributed mesh networks and automated intrusion countermeasures across 12 planetary satellite clusters.
    </TimelineContent>
  </TimelineItem>

  <TimelineItem status="completed" icon={<Shield className="h-3 w-3" />}>
    <TimelineHeader>
      <TimelineTitle>Cyber Warfare Analyst</TimelineTitle>
      <TimelinePeriod>2021 - 2024</TimelinePeriod>
    </TimelineHeader>
    <TimelineSubtitle>NEO MATRIX LABS</TimelineSubtitle>
    <TimelineContent>
      Conducted automated red-team simulations and validated Post-Quantum lattice cryptography protocols.
    </TimelineContent>
  </TimelineItem>
</Timeline>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="w-full max-w-xl">
                <Timeline>
                  <TimelineItem status="active" icon={<Terminal className="h-3 w-3" />}>
                    <TimelineHeader>
                      <TimelineTitle>Principal Sentinel Architect</TimelineTitle>
                      <TimelinePeriod>2024 - PRESENT</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineSubtitle>ORBITAL DEFENSE COMMAND</TimelineSubtitle>
                    <TimelineContent>
                      Architecting zero-trust distributed mesh networks and automated intrusion countermeasures across 12 planetary satellite clusters.
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem status="completed" icon={<Shield className="h-3 w-3" />}>
                    <TimelineHeader>
                      <TimelineTitle>Cyber Warfare Analyst</TimelineTitle>
                      <TimelinePeriod>2021 - 2024</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineSubtitle>NEO MATRIX LABS</TimelineSubtitle>
                    <TimelineContent>
                      Conducted automated red-team simulations and validated Post-Quantum lattice cryptography protocols.
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Connecting Laser Variants ── */}
      <ContentSection title="Connecting Laser Variants (Neon, Cyan, Emerald, Rose)" id="connecting-lines">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Customize the vertical connecting spine with <code className="text-cyan-400">variant=&quot;neon&quot; | &quot;cyan&quot; | &quot;emerald&quot; | &quot;rose&quot; | &quot;mono&quot;</code>.
          </p>

          <Playground
            code={`<Timeline variant="emerald">
  <TimelineItem status="completed" icon={<CheckCircle2 className="h-3 w-3" />}>
    <TimelineHeader>
      <TimelineTitle>STAGE 01: LATTICE COMPILATION</TimelineTitle>
      <TimelinePeriod>COMPLETED</TimelinePeriod>
    </TimelineHeader>
    <TimelineContent>Binary hashes generated and verified.</TimelineContent>
  </TimelineItem>
  <TimelineItem status="active" icon={<Zap className="h-3 w-3" />}>
    <TimelineHeader>
      <TimelineTitle>STAGE 02: ORBITAL BROADCAST</TimelineTitle>
      <TimelinePeriod>IN PROGRESS</TimelinePeriod>
    </TimelineHeader>
    <TimelineContent>Streaming firmware to fleet transponders.</TimelineContent>
  </TimelineItem>
</Timeline>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="w-full max-w-xl">
                <Timeline variant="emerald">
                  <TimelineItem status="completed" icon={<CheckCircle2 className="h-3 w-3" />}>
                    <TimelineHeader>
                      <TimelineTitle>STAGE 01: LATTICE COMPILATION</TimelineTitle>
                      <TimelinePeriod>COMPLETED</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineContent>Binary hashes generated and verified.</TimelineContent>
                  </TimelineItem>
                  <TimelineItem status="active" icon={<Zap className="h-3 w-3" />}>
                    <TimelineHeader>
                      <TimelineTitle>STAGE 02: ORBITAL BROADCAST</TimelineTitle>
                      <TimelinePeriod>IN PROGRESS</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineContent>Streaming firmware to fleet transponders.</TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Status Node Modes ── */}
      <ContentSection title="Status Node Modes (Active, Completed, Future, Archived)" id="node-statuses">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Each <code className="text-cyan-400">TimelineItem</code> accepts a <code className="text-cyan-400">status</code> prop that determines its indicator ring glow and border tone.
          </p>

          <Playground
            code={`<Timeline variant="cyan">
  <TimelineItem status="active">
    <TimelineHeader><TimelineTitle>ACTIVE NODE</TimelineTitle></TimelineHeader>
    <TimelineContent>Currently executing process thread.</TimelineContent>
  </TimelineItem>
  <TimelineItem status="completed">
    <TimelineHeader><TimelineTitle>COMPLETED NODE</TimelineTitle></TimelineHeader>
    <TimelineContent>Past verified milestone.</TimelineContent>
  </TimelineItem>
  <TimelineItem status="future">
    <TimelineHeader><TimelineTitle>FUTURE STAGE</TimelineTitle></TimelineHeader>
    <TimelineContent>Pending execution pipeline.</TimelineContent>
  </TimelineItem>
  <TimelineItem status="archived">
    <TimelineHeader><TimelineTitle>ARCHIVED RECORD</TimelineTitle></TimelineHeader>
    <TimelineContent>Historical reference log.</TimelineContent>
  </TimelineItem>
</Timeline>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="w-full max-w-xl">
                <Timeline variant="cyan">
                  <TimelineItem status="active">
                    <TimelineHeader><TimelineTitle>ACTIVE NODE</TimelineTitle></TimelineHeader>
                    <TimelineContent>Currently executing process thread.</TimelineContent>
                  </TimelineItem>
                  <TimelineItem status="completed">
                    <TimelineHeader><TimelineTitle>COMPLETED NODE</TimelineTitle></TimelineHeader>
                    <TimelineContent>Past verified milestone.</TimelineContent>
                  </TimelineItem>
                  <TimelineItem status="future">
                    <TimelineHeader><TimelineTitle>FUTURE STAGE</TimelineTitle></TimelineHeader>
                    <TimelineContent>Pending execution pipeline.</TimelineContent>
                  </TimelineItem>
                  <TimelineItem status="archived">
                    <TimelineHeader><TimelineTitle>ARCHIVED RECORD</TimelineTitle></TimelineHeader>
                    <TimelineContent>Historical reference log.</TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Event Chronicle ── */}
      <ContentSection title="Frosted Cyber-Glass Event Chronicle" id="frosted-glass-timeline">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite timeline layered over circuit board textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-xl p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <Timeline variant="neon">
    <TimelineItem status="active" icon={<Activity className="h-3 w-3" />}>
      <TimelineHeader>
        <TimelineTitle>QUANTUM DECOHERENCE DETECTED</TimelineTitle>
        <TimelinePeriod>T-00:12:44</TimelinePeriod>
      </TimelineHeader>
      <TimelineSubtitle>SECTOR 04 SENSOR ARRAY</TimelineSubtitle>
      <TimelineContent>Automated self-healing realignment engaged.</TimelineContent>
    </TimelineItem>
  </Timeline>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <div className="relative z-10 w-full max-w-xl">
                <Timeline variant="neon">
                  <TimelineItem status="active" icon={<Activity className="h-3 w-3" />}>
                    <TimelineHeader>
                      <TimelineTitle>QUANTUM DECOHERENCE DETECTED</TimelineTitle>
                      <TimelinePeriod>T-00:12:44</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineSubtitle>SECTOR 04 SENSOR ARRAY</TimelineSubtitle>
                    <TimelineContent>Automated self-healing realignment engaged.</TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Mission Milestone Card ── */}
      <ContentSection title="Tactical HUD Mission Milestone Card" id="tactical-hud-timeline">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with milestone chronicle.
          </p>

          <Playground
            code={`<Card className="max-w-xl mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">INCIDENT ESCALATION TRAIL</CardTitle>
      <Badge variant="neon" size="sm">RESOLVING</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Chronological audit log for Sector 09 anomaly.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <Timeline variant="neon">
      <TimelineItem status="completed">
        <TimelineHeader>
          <TimelineTitle>Inbound Packet Spike</TimelineTitle>
          <TimelinePeriod>14:02:18</TimelinePeriod>
        </TimelineHeader>
        <TimelineContent>Rate limiter throttled 4.8M anomalous SYN packets.</TimelineContent>
      </TimelineItem>
      <TimelineItem status="active">
        <TimelineHeader>
          <TimelineTitle>Firewall Rule Deployed</TimelineTitle>
          <TimelinePeriod>14:04:02</TimelinePeriod>
        </TimelineHeader>
        <TimelineContent>Air-gap isolation verified across all perimeter relays.</TimelineContent>
      </TimelineItem>
    </Timeline>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-xl w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">INCIDENT ESCALATION TRAIL</CardTitle>
                    <Badge variant="neon" size="sm">RESOLVING</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Chronological audit log for Sector 09 anomaly.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <Timeline variant="neon">
                    <TimelineItem status="completed">
                      <TimelineHeader>
                        <TimelineTitle>Inbound Packet Spike</TimelineTitle>
                        <TimelinePeriod>14:02:18</TimelinePeriod>
                      </TimelineHeader>
                      <TimelineContent>Rate limiter throttled 4.8M anomalous SYN packets.</TimelineContent>
                    </TimelineItem>
                    <TimelineItem status="active">
                      <TimelineHeader>
                        <TimelineTitle>Firewall Rule Deployed</TimelineTitle>
                        <TimelinePeriod>14:04:02</TimelinePeriod>
                      </TimelineHeader>
                      <TimelineContent>Air-gap isolation verified across all perimeter relays.</TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-base font-semibold text-slate-200 mb-3">Timeline Props</h3>
        <ApiTable
          props={[
            {
              property: 'variant',
              description: 'Color theme and gradient styling of the vertical connecting laser wire.',
              type: '"neon" | "cyan" | "emerald" | "rose" | "red" | "mono"',
              defaultValue: '"neon"',
            },
          ]}
        />

        <h3 className="text-base font-semibold text-slate-200 mb-3 mt-8">TimelineItem Props</h3>
        <ApiTable
          props={[
            {
              property: 'status',
              description: 'Visual status mode determining node ring color and glow.',
              type: '"active" | "completed" | "archived" | "future"',
              defaultValue: '"completed"',
            },
            {
              property: 'icon',
              description: 'Optional ReactNode icon glyph rendered inside the node ring.',
              type: 'React.ReactNode',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Semantic Order:</strong> Timeline entries render in chronological DOM order for clear screen reader traversal.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Timestamp Pills:</strong> Use <code className="text-cyan-400">TimelinePeriod</code> on every milestone item to clearly distinguish past logs from active operations.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
