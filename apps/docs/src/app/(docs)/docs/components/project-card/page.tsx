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
  ProjectCardFooter,
  Button,
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
  ExternalLink,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Anatomy & Chamfered Angles', level: 2 },
  { id: 'status-modes', text: 'Status Modes (Active, Classified, Archived)', level: 2 },
  { id: 'grid-showcase', text: 'Portfolio & Arsenal Grid Deck', level: 2 },
  { id: 'frosted-glass-project', text: 'Frosted Cyber-Glass Classified Dossier', level: 2 },
  { id: 'tactical-hud-arsenal', text: 'Tactical HUD Defense Module Manifest', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ProjectCardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Project Card"
        description="Chamfered polygon card container engineered specifically for engineering portfolios, open-source repositories, and tactical project showcases."
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
  ProjectCardFooter 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Anatomy & Chamfered Angles" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            ProjectCard cuts precise 45-degree diagonal chamfers across opposite corners, exposing a 1px cyber glow stroke.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <ProjectCard status="active">
    <ProjectCardMedia />
    <ProjectCardHeader>
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant="neon" dot dotColor="cyan">ACTIVE</Badge>
        <Badge variant="outline" className="text-[10px]">TypeScript</Badge>
        <Badge variant="outline" className="text-[10px]">Rust</Badge>
      </div>
      <ProjectCardTitle>Nexus Protocol v4</ProjectCardTitle>
      <ProjectCardDescription>
        High-throughput distributed consensus engine with zero-knowledge cryptographic proofs.
      </ProjectCardDescription>
    </ProjectCardHeader>
    <ProjectCardFooter>
      <Button variant="ghost" size="sm" leftIcon={<Terminal className="w-3.5 h-3.5" />}>
        SOURCE
      </Button>
      <Button variant="neon" size="sm" glow rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
        LIVE DEMO
      </Button>
    </ProjectCardFooter>
  </ProjectCard>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-sm w-full">
                <ProjectCard status="active">
                  <ProjectCardMedia />
                  <ProjectCardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="neon" dot dotColor="cyan">ACTIVE</Badge>
                      <Badge variant="outline" className="text-[10px]">TypeScript</Badge>
                      <Badge variant="outline" className="text-[10px]">Rust</Badge>
                    </div>
                    <ProjectCardTitle>Nexus Protocol v4</ProjectCardTitle>
                    <ProjectCardDescription>
                      High-throughput distributed consensus engine with zero-knowledge cryptographic proofs.
                    </ProjectCardDescription>
                  </ProjectCardHeader>
                  <ProjectCardFooter>
                    <Button variant="ghost" size="sm" leftIcon={<Terminal className="w-3.5 h-3.5" />}>
                      SOURCE
                    </Button>
                    <Button variant="neon" size="sm" glow rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                      LIVE DEMO
                    </Button>
                  </ProjectCardFooter>
                </ProjectCard>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Status Modes ── */}
      <ContentSection title="Status Modes (Active, Classified, Archived)" id="status-modes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">status</code> prop governs the perimeter border glow tone on hover: <code className="text-cyan-400">active</code> (Cyan), <code className="text-purple-400">classified</code> (Purple), and <code className="text-slate-400">archived</code> (Slate).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  <ProjectCard status="active">
    <ProjectCardHeader>
      <ProjectCardTitle>Active Sentinel</ProjectCardTitle>
      <ProjectCardDescription>Cyan hover glow for active deploy targets.</ProjectCardDescription>
    </ProjectCardHeader>
  </ProjectCard>

  <ProjectCard status="classified">
    <ProjectCardHeader>
      <ProjectCardTitle>Classified Vault</ProjectCardTitle>
      <ProjectCardDescription>Purple hover glow for restricted cryptographic research.</ProjectCardDescription>
    </ProjectCardHeader>
  </ProjectCard>

  <ProjectCard status="archived">
    <ProjectCardHeader>
      <ProjectCardTitle>Legacy Protocol</ProjectCardTitle>
      <ProjectCardDescription>Neutral hover state for decommissioned systems.</ProjectCardDescription>
    </ProjectCardHeader>
  </ProjectCard>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <ProjectCard status="active">
                  <ProjectCardHeader>
                    <ProjectCardTitle>Active Sentinel</ProjectCardTitle>
                    <ProjectCardDescription>Cyan hover glow for active deploy targets.</ProjectCardDescription>
                  </ProjectCardHeader>
                </ProjectCard>

                <ProjectCard status="classified">
                  <ProjectCardHeader>
                    <ProjectCardTitle>Classified Vault</ProjectCardTitle>
                    <ProjectCardDescription>Purple hover glow for restricted cryptographic research.</ProjectCardDescription>
                  </ProjectCardHeader>
                </ProjectCard>

                <ProjectCard status="archived">
                  <ProjectCardHeader>
                    <ProjectCardTitle>Legacy Protocol</ProjectCardTitle>
                    <ProjectCardDescription>Neutral hover state for decommissioned systems.</ProjectCardDescription>
                  </ProjectCardHeader>
                </ProjectCard>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Grid Showcase ── */}
      <ContentSection title="Portfolio & Arsenal Grid Deck" id="grid-composition">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Construct multi-card repository catalogs with tech stack tags and links.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
  <ProjectCard status="active">
    <ProjectCardMedia />
    <ProjectCardHeader>
      <Badge variant="neon" size="sm" className="w-fit mb-2">PRODUCTION</Badge>
      <ProjectCardTitle>Lattice Quantum Gateway</ProjectCardTitle>
      <ProjectCardDescription>Post-quantum TLS termination proxy handling 100k req/sec.</ProjectCardDescription>
    </ProjectCardHeader>
    <ProjectCardFooter>
      <span className="text-xs font-mono text-slate-500">v2.1.0-STABLE</span>
      <Button variant="neon" size="sm">INSPECT</Button>
    </ProjectCardFooter>
  </ProjectCard>

  <ProjectCard status="classified">
    <ProjectCardMedia />
    <ProjectCardHeader>
      <Badge variant="outline" size="sm" className="w-fit mb-2 text-purple-400 border-purple-500/30">RESTRICTED</Badge>
      <ProjectCardTitle>Orbital Key Exchanger</ProjectCardTitle>
      <ProjectCardDescription>Inter-satellite optical laser synchronization network.</ProjectCardDescription>
    </ProjectCardHeader>
    <ProjectCardFooter>
      <span className="text-xs font-mono text-slate-500">v0.9.4-ALPHA</span>
      <Button variant="secondary" size="sm">REQUEST ACCESS</Button>
    </ProjectCardFooter>
  </ProjectCard>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                <ProjectCard status="active">
                  <ProjectCardMedia />
                  <ProjectCardHeader>
                    <Badge variant="neon" size="sm" className="w-fit mb-2">PRODUCTION</Badge>
                    <ProjectCardTitle>Lattice Quantum Gateway</ProjectCardTitle>
                    <ProjectCardDescription>Post-quantum TLS termination proxy handling 100k req/sec.</ProjectCardDescription>
                  </ProjectCardHeader>
                  <ProjectCardFooter>
                    <span className="text-xs font-mono text-slate-500">v2.1.0-STABLE</span>
                    <Button variant="neon" size="sm">INSPECT</Button>
                  </ProjectCardFooter>
                </ProjectCard>

                <ProjectCard status="classified">
                  <ProjectCardMedia />
                  <ProjectCardHeader>
                    <Badge variant="outline" size="sm" className="w-fit mb-2 text-purple-400 border-purple-500/30">RESTRICTED</Badge>
                    <ProjectCardTitle>Orbital Key Exchanger</ProjectCardTitle>
                    <ProjectCardDescription>Inter-satellite optical laser synchronization network.</ProjectCardDescription>
                  </ProjectCardHeader>
                  <ProjectCardFooter>
                    <span className="text-xs font-mono text-slate-500">v0.9.4-ALPHA</span>
                    <Button variant="secondary" size="sm">REQUEST ACCESS</Button>
                  </ProjectCardFooter>
                </ProjectCard>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Classified Dossier ── */}
      <ContentSection title="Frosted Cyber-Glass Classified Dossier" id="frosted-glass-project">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layer chamfered project cards inside acrylic glass dialogs on top of circuit boards.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <span className="font-mono text-xs font-bold text-white tracking-wider">CYBER ARSENAL MANIFEST</span>
      <Badge variant="glass" dot dotColor="cyan">CONFIDENTIAL</Badge>
    </div>

    <ProjectCard status="active">
      <ProjectCardMedia />
      <ProjectCardHeader>
        <ProjectCardTitle>Project Aegis Grid</ProjectCardTitle>
        <ProjectCardDescription>Autonomous decentralized packet firewall.</ProjectCardDescription>
      </ProjectCardHeader>
    </ProjectCard>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="font-mono text-xs font-bold text-white tracking-wider">CYBER ARSENAL MANIFEST</span>
                    <Badge variant="glass" dot dotColor="cyan">CONFIDENTIAL</Badge>
                  </div>

                  <ProjectCard status="active">
                    <ProjectCardMedia />
                    <ProjectCardHeader>
                      <ProjectCardTitle>Project Aegis Grid</ProjectCardTitle>
                      <ProjectCardDescription>Autonomous decentralized packet firewall.</ProjectCardDescription>
                    </ProjectCardHeader>
                  </ProjectCard>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Defense Module Manifest ── */}
      <ContentSection title="Tactical HUD Defense Module Manifest" id="tactical-hud-arsenal">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded project entries.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DEPLOYED DEFENSE SUITES</CardTitle>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Mission software payloads currently operating on orbital satellites.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <ProjectCard status="active">
      <ProjectCardHeader>
        <ProjectCardTitle>Kinetic Intercept Matrix</ProjectCardTitle>
        <ProjectCardDescription>Auto-targeting railgun guidance software suite.</ProjectCardDescription>
      </ProjectCardHeader>
      <ProjectCardFooter>
        <Button variant="secondary" size="sm" className="w-full">VIEW TELEMETRY</Button>
      </ProjectCardFooter>
    </ProjectCard>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">DEPLOYED DEFENSE SUITES</CardTitle>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Mission software payloads currently operating on orbital satellites.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <ProjectCard status="active">
                    <ProjectCardHeader>
                      <ProjectCardTitle>Kinetic Intercept Matrix</ProjectCardTitle>
                      <ProjectCardDescription>Auto-targeting railgun guidance software suite.</ProjectCardDescription>
                    </ProjectCardHeader>
                    <ProjectCardFooter>
                      <Button variant="secondary" size="sm" className="w-full">VIEW TELEMETRY</Button>
                    </ProjectCardFooter>
                  </ProjectCard>
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
              property: 'status',
              description: 'Changes the hover border glow and highlight color.',
              type: '"active" | "archived" | "classified"',
              defaultValue: '"active"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Semantic Heading:</strong> ProjectCardTitle renders a semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;h3&gt;</code> element for screen readers.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Chamfers:</strong> The 45-degree corner cuts are rendered with CSS clip-paths. Avoid placing essential clickable icons precisely in the top-right or bottom-left 14px corners.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
