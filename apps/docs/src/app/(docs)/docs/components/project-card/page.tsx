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
  ProjectCard,
  ProjectCardMedia,
  ProjectCardHeader,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardStack,
  ProjectCardFooter,
  Button,
  Badge,
} from '@siberui/react';
import {
  GitBranch,
  ExternalLink,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Chamfered Architecture & CRT Scanlines', level: 2 },
  { id: 'status-modes', text: 'Status Modes (Active, Deployed, Classified, Archived)', level: 2 },
  { id: 'tech-stack', text: 'Integrated Tech Stack Tags', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function ProjectCardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Project Card"
        description="Chamfered 45° polygon tactical showcase and repository card featuring CRT laser scanline hover overlays, monospace tech stack pills, and dynamic status glows."
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
  ProjectCard, 
  ProjectCardMedia, 
  ProjectCardHeader, 
  ProjectCardTitle, 
  ProjectCardDescription, 
  ProjectCardStack, 
  ProjectCardFooter 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Chamfered Architecture & CRT Scanlines" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            45-degree diagonal chamfered project card with interactive CRT raster scanlines that illuminate on hover over media containers.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <ProjectCard status="active">
    <ProjectCardMedia badge="LIVE V2.0" />
    <ProjectCardHeader>
      <div className="flex items-center justify-between mb-2">
        <Badge variant="neon" dot dotColor="cyan">ACTIVE DEPLOY</Badge>
        <span className="text-[10px] font-mono text-slate-500">PROD-01</span>
      </div>
      <ProjectCardTitle>Nexus Protocol v4</ProjectCardTitle>
      <ProjectCardDescription>
        High-throughput distributed consensus engine with zero-knowledge cryptographic proofs.
      </ProjectCardDescription>
      <ProjectCardStack tags={['NEXT.JS 15', 'RUST', 'TAILWIND 4', 'WASM']} />
    </ProjectCardHeader>
    <ProjectCardFooter>
      <Button variant="ghost" size="sm" leftIcon={<GitBranch className="w-3.5 h-3.5" />}>
        SOURCE
      </Button>
      <Button variant="primary" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
        VIEW APP
      </Button>
    </ProjectCardFooter>
  </ProjectCard>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="max-w-sm w-full min-w-0">
                <ProjectCard status="active">
                  <ProjectCardMedia badge="LIVE V2.0" />
                  <ProjectCardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="neon" dot dotColor="cyan">ACTIVE DEPLOY</Badge>
                      <span className="text-[10px] font-mono text-slate-500">PROD-01</span>
                    </div>
                    <ProjectCardTitle>Nexus Protocol v4</ProjectCardTitle>
                    <ProjectCardDescription>
                      High-throughput distributed consensus engine with zero-knowledge cryptographic proofs.
                    </ProjectCardDescription>
                    <ProjectCardStack tags={['NEXT.JS 15', 'RUST', 'TAILWIND 4', 'WASM']} />
                  </ProjectCardHeader>
                  <ProjectCardFooter>
                    <Button variant="ghost" size="sm" leftIcon={<GitBranch className="w-3.5 h-3.5" />}>
                      SOURCE
                    </Button>
                    <Button variant="primary" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                      VIEW APP
                    </Button>
                  </ProjectCardFooter>
                </ProjectCard>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Status Modes ── */}
      <ContentSection title="Status Modes (Active, Deployed, Classified, Archived)" id="status-modes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">status</code> prop governs the perimeter border glow tone: <code className="text-cyan-400">active</code> (Cyan), <code className="text-emerald-400">deployed</code> (Emerald), <code className="text-violet-400">classified</code> (Violet), or <code className="text-slate-400">archived</code> (Slate).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  <ProjectCard status="deployed">
    <ProjectCardHeader>
      <ProjectCardTitle>Orbital Firewall</ProjectCardTitle>
      <ProjectCardDescription>Emerald border glow for verified production systems.</ProjectCardDescription>
    </ProjectCardHeader>
  </ProjectCard>

  <ProjectCard status="classified">
    <ProjectCardHeader>
      <ProjectCardTitle>Quantum Vault</ProjectCardTitle>
      <ProjectCardDescription>Violet hover glow for restricted cryptographic research.</ProjectCardDescription>
    </ProjectCardHeader>
  </ProjectCard>

  <ProjectCard status="archived">
    <ProjectCardHeader>
      <ProjectCardTitle>Legacy Gateway</ProjectCardTitle>
      <ProjectCardDescription>Neutral hover state for decommissioned repositories.</ProjectCardDescription>
    </ProjectCardHeader>
  </ProjectCard>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl min-w-0">
                <ProjectCard status="deployed">
                  <ProjectCardHeader>
                    <ProjectCardTitle>Orbital Firewall</ProjectCardTitle>
                    <ProjectCardDescription>Emerald border glow for verified production systems.</ProjectCardDescription>
                  </ProjectCardHeader>
                </ProjectCard>

                <ProjectCard status="classified">
                  <ProjectCardHeader>
                    <ProjectCardTitle>Quantum Vault</ProjectCardTitle>
                    <ProjectCardDescription>Violet hover glow for restricted cryptographic research.</ProjectCardDescription>
                  </ProjectCardHeader>
                </ProjectCard>

                <ProjectCard status="archived">
                  <ProjectCardHeader>
                    <ProjectCardTitle>Legacy Gateway</ProjectCardTitle>
                    <ProjectCardDescription>Neutral hover state for decommissioned repositories.</ProjectCardDescription>
                  </ProjectCardHeader>
                </ProjectCard>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tech Stack ── */}
      <ContentSection title="Integrated Tech Stack Tags" id="tech-stack">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">ProjectCardStack</code> to render monospace framework and technology badges.
          </p>

          <Playground
            code={`<ProjectCardStack tags={['SOLANA', 'ANCHOR', 'TYPESCRIPT', 'REACT', 'GRAPHQL']} />`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <ProjectCardStack tags={['SOLANA', 'ANCHOR', 'TYPESCRIPT', 'REACT', 'GRAPHQL']} />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'status',
              description: 'Border highlight and hover glow color theme.',
              type: '"active" | "deployed" | "classified" | "archived"',
              defaultValue: '"active"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Semantic Headings:</strong> <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">ProjectCardTitle</code> renders a semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;h3&gt;</code> element for screen reader traversal.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
