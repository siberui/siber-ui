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
  TimelineTags,
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
  { id: 'basic-usage', text: 'Chronological Timeline with Laser Spine', level: 2 },
  { id: 'connecting-lines', text: 'Connecting Laser Spine Variants', level: 2 },
  { id: 'node-statuses', text: 'Tactical Node Statuses (Active Ping, Completed, Future)', level: 2 },
  { id: 'mission-tags', text: 'Integrated Tech Stack & Mission Tags', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function TimelineDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Timeline"
        description="Chronological event vertical rail featuring illuminated neon connecting laser spines, active radar pulsing node indicators, and integrated mission / technology tags."
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
  TimelineContent,
  TimelineTags 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Chronological Timeline with Laser Spine" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Connects sequential milestones through an illuminated laser data spine and animated radar ping indicators for active nodes.
          </p>

          <Playground
            code={`<Timeline variant="neon">
  <TimelineItem status="active" icon={<Terminal className="h-3 w-3" />}>
    <TimelineHeader>
      <TimelineTitle>Principal Sentinel Architect</TimelineTitle>
      <TimelinePeriod>2024 - PRESENT</TimelinePeriod>
    </TimelineHeader>
    <TimelineSubtitle>ORBITAL DEFENSE COMMAND</TimelineSubtitle>
    <TimelineContent>
      Architecting zero-trust distributed mesh networks and automated intrusion countermeasures across 12 planetary satellite clusters.
    </TimelineContent>
    <TimelineTags tags={['RUST', 'EBPF', 'ZERO-TRUST', 'POST-QUANTUM']} />
  </TimelineItem>

  <TimelineItem status="completed" icon={<Shield className="h-3 w-3" />}>
    <TimelineHeader>
      <TimelineTitle>Lead Cyber Warfare Analyst</TimelineTitle>
      <TimelinePeriod>2021 - 2024</TimelinePeriod>
    </TimelineHeader>
    <TimelineSubtitle>NEO MATRIX LABS</TimelineSubtitle>
    <TimelineContent>
      Conducted automated red-team simulations and validated Post-Quantum lattice cryptography protocols.
    </TimelineContent>
    <TimelineTags tags={['C++', 'REVERSE-ENG', 'CRYPTO']} />
  </TimelineItem>
</Timeline>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="w-full max-w-xl min-w-0">
                <Timeline variant="neon">
                  <TimelineItem status="active" icon={<Terminal className="h-3 w-3" />}>
                    <TimelineHeader>
                      <TimelineTitle>Principal Sentinel Architect</TimelineTitle>
                      <TimelinePeriod>2024 - PRESENT</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineSubtitle>ORBITAL DEFENSE COMMAND</TimelineSubtitle>
                    <TimelineContent>
                      Architecting zero-trust distributed mesh networks and automated intrusion countermeasures across 12 planetary satellite clusters.
                    </TimelineContent>
                    <TimelineTags tags={['RUST', 'EBPF', 'ZERO-TRUST', 'POST-QUANTUM']} />
                  </TimelineItem>

                  <TimelineItem status="completed" icon={<Shield className="h-3 w-3" />}>
                    <TimelineHeader>
                      <TimelineTitle>Lead Cyber Warfare Analyst</TimelineTitle>
                      <TimelinePeriod>2021 - 2024</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineSubtitle>NEO MATRIX LABS</TimelineSubtitle>
                    <TimelineContent>
                      Conducted automated red-team simulations and validated Post-Quantum lattice cryptography protocols.
                    </TimelineContent>
                    <TimelineTags tags={['C++', 'REVERSE-ENG', 'CRYPTO']} />
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Connecting Laser Spine Variants ── */}
      <ContentSection title="Connecting Laser Spine Variants" id="connecting-lines">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant</code> prop selects the laser gradient wire style (<code className="text-cyan-400">&quot;neon&quot; | &quot;cyan&quot; | &quot;violet&quot; | &quot;emerald&quot; | &quot;amber&quot; | &quot;rose&quot; | &quot;mono&quot;</code>).
          </p>

          <Playground
            code={`<Timeline variant="emerald">
  <TimelineItem status="completed" icon={<CheckCircle2 className="h-3 w-3" />}>
    <TimelineHeader>
      <TimelineTitle>STAGE 01: LATTICE COMPILATION</TimelineTitle>
      <TimelinePeriod>COMPLETED</TimelinePeriod>
    </TimelineHeader>
    <TimelineContent>Binary hashes generated and verified against HSM master root.</TimelineContent>
  </TimelineItem>

  <TimelineItem status="active" icon={<Zap className="h-3 w-3" />}>
    <TimelineHeader>
      <TimelineTitle>STAGE 02: ORBITAL BROADCAST</TimelineTitle>
      <TimelinePeriod>IN PROGRESS</TimelinePeriod>
    </TimelineHeader>
    <TimelineContent>Streaming firmware payload to orbital fleet transponders.</TimelineContent>
  </TimelineItem>
</Timeline>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="w-full max-w-xl min-w-0">
                <Timeline variant="emerald">
                  <TimelineItem status="completed" icon={<CheckCircle2 className="h-3 w-3" />}>
                    <TimelineHeader>
                      <TimelineTitle>STAGE 01: LATTICE COMPILATION</TimelineTitle>
                      <TimelinePeriod>COMPLETED</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineContent>Binary hashes generated and verified against HSM master root.</TimelineContent>
                  </TimelineItem>

                  <TimelineItem status="active" icon={<Zap className="h-3 w-3" />}>
                    <TimelineHeader>
                      <TimelineTitle>STAGE 02: ORBITAL BROADCAST</TimelineTitle>
                      <TimelinePeriod>IN PROGRESS</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineContent>Streaming firmware payload to orbital fleet transponders.</TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Status Node Modes ── */}
      <ContentSection title="Tactical Node Statuses (Active Ping, Completed, Future)" id="node-statuses">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">status</code> prop controls node ring glow: <code className="text-cyan-400">active</code> (animated radar ping), <code className="text-emerald-400">completed</code>, <code className="text-rose-400">future</code>, or <code className="text-slate-400">archived</code>.
          </p>

          <Playground
            code={`<Timeline variant="cyan">
  <TimelineItem status="active" icon={<Activity className="h-3 w-3" />}>
    <TimelineHeader><TimelineTitle>ACTIVE EXPLOIT ANALYSIS</TimelineTitle></TimelineHeader>
    <TimelineContent>Realtime sandbox instrumentation running.</TimelineContent>
  </TimelineItem>
  <TimelineItem status="completed">
    <TimelineHeader><TimelineTitle>FIREWALL ISOLATION</TimelineTitle></TimelineHeader>
    <TimelineContent>Perimeter quarantine completed.</TimelineContent>
  </TimelineItem>
</Timeline>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="w-full max-w-xl min-w-0">
                <Timeline variant="cyan">
                  <TimelineItem status="active" icon={<Activity className="h-3 w-3" />}>
                    <TimelineHeader><TimelineTitle>ACTIVE EXPLOIT ANALYSIS</TimelineTitle></TimelineHeader>
                    <TimelineContent>Realtime sandbox instrumentation running.</TimelineContent>
                  </TimelineItem>
                  <TimelineItem status="completed">
                    <TimelineHeader><TimelineTitle>FIREWALL ISOLATION</TimelineTitle></TimelineHeader>
                    <TimelineContent>Perimeter quarantine completed.</TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
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
              description: 'Vertical connecting laser spine gradient color.',
              type: '"neon" | "cyan" | "violet" | "emerald" | "amber" | "rose" | "mono"',
              defaultValue: '"neon"',
            },
          ]}
        />

        <h3 className="text-base font-semibold text-slate-200 mb-3 mt-8">TimelineItem Props</h3>
        <ApiTable
          props={[
            {
              property: 'status',
              description: 'Node activation state.',
              type: '"active" | "completed" | "archived" | "future"',
              defaultValue: '"completed"',
            },
            {
              property: 'icon',
              description: 'Icon glyph rendered inside the node ring.',
              type: 'React.ReactNode',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Chronological Hierarchy:</strong> Events render in strict DOM sequence for sequential screen reader traversal.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
