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
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Avatar,
  Badge,
  Button,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';
import {
  Calendar,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Profile Preview', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Telemetry Hover Card', level: 2 },
  { id: 'frosted-glass-hover', text: 'Frosted Cyber-Glass Node Card', level: 2 },
  { id: 'tactical-hud-dossier', text: 'Tactical HUD Operator Dossier Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function HoverCardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Hover Card"
        description="Radix UI-backed preview card that expands rich metadata, avatar dossiers, or live server health cards upon mouse hover or focus."
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
  HoverCard, 
  HoverCardTrigger, 
  HoverCardContent 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Profile Preview" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            HoverCard activates after an intentional hover delay to preview supplementary information without leaving the page.
          </p>

          <Playground
            code={`<div className="flex items-center justify-center">
  <HoverCard>
    <HoverCardTrigger asChild>
      <a href="#profile" className="font-mono text-cyan-400 font-bold hover:underline cursor-pointer">
        @zero_day_operator
      </a>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex gap-4">
        <Avatar name="Operator 01" ring="cyan" size="md" />
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white">Lead Sentinel Officer</h4>
          <p className="text-xs text-slate-400">
            Automating zero-trust distributed defense clusters.
          </p>
          <div className="flex items-center gap-1.5 pt-2 text-[10px] font-mono text-slate-500">
            <Calendar className="h-3 w-3" />
            <span>Clearance issued Dec 2024</span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[160px]">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="#profile" className="font-mono text-cyan-400 font-bold hover:underline cursor-pointer">
                    @zero_day_operator
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar name="Operator 01" ring="cyan" size="md" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">Lead Sentinel Officer</h4>
                      <p className="text-xs text-slate-400">
                        Automating zero-trust distributed defense clusters.
                      </p>
                      <div className="flex items-center gap-1.5 pt-2 text-[10px] font-mono text-slate-500">
                        <Calendar className="h-3 w-3" />
                        <span>Clearance issued Dec 2024</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Telemetry Hover Card" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan perimeter lighting and monospace telemetry tables.
          </p>

          <Playground
            code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="neon" glow size="sm">
      NODE_ORBITAL_ALPHA
    </Button>
  </HoverCardTrigger>
  <HoverCardContent variant="neon" className="w-80 space-y-3 font-mono text-xs">
    <div className="flex justify-between items-center pb-2 border-b border-cyan-500/30">
      <span className="font-bold text-cyan-300">TELEMETRY PREVIEW</span>
      <Badge variant="neon" size="sm">ONLINE</Badge>
    </div>
    <div className="space-y-1.5 text-slate-300">
      <p>IP: 10.240.4.19</p>
      <p>Packet Throughput: 14.8 GB/s</p>
      <p>Lattice Consensus: 32/32</p>
    </div>
  </HoverCardContent>
</HoverCard>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-h-[160px]">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="neon" glow size="sm">
                    NODE_ORBITAL_ALPHA
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="neon" className="w-80 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-cyan-500/30">
                    <span className="font-bold text-cyan-300">TELEMETRY PREVIEW</span>
                    <Badge variant="neon" size="sm">ONLINE</Badge>
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <p>IP: 10.240.4.19</p>
                    <p>Packet Throughput: 14.8 GB/s</p>
                    <p>Lattice Consensus: 32/32</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Node Card ── */}
      <ContentSection title="Frosted Cyber-Glass Node Card" id="frosted-glass-hover">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Translucent acrylic hover cards floating over circuit substrate textures.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="glass">HOVER OVER SATELLITE</Button>
    </HoverCardTrigger>
    <HoverCardContent variant="glass" className="w-80 space-y-2">
      <span className="font-mono text-xs font-bold text-white">ORBITAL EGRESS LINK</span>
      <p className="text-xs text-slate-300 font-mono">Ka-band transponder nominal.</p>
    </HoverCardContent>
  </HoverCard>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full min-h-[180px]">
              <div className="relative z-10">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="glass">HOVER OVER SATELLITE</Button>
                  </HoverCardTrigger>
                  <HoverCardContent variant="glass" className="w-80 space-y-2">
                    <span className="font-mono text-xs font-bold text-white">ORBITAL EGRESS LINK</span>
                    <p className="text-xs text-slate-300 font-mono">Ka-band transponder nominal.</p>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Operator Dossier Card ── */}
      <ContentSection title="Tactical HUD Operator Dossier Card" id="tactical-hud-dossier">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded hover preview triggers.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">CLEARANCE ROSTER</CardTitle>
      <Badge variant="neon" size="sm">LEVEL 4</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Hover over personnel badges to inspect access tokens.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 flex justify-around">
    <HoverCard>
      <HoverCardTrigger asChild>
        <Badge variant="neon" className="cursor-pointer">AGENT_0x42</Badge>
      </HoverCardTrigger>
      <HoverCardContent variant="neon" className="w-72 font-mono text-xs space-y-2">
        <p className="font-bold text-cyan-300">KYBER KEY: 0x9F41</p>
        <p className="text-slate-400">Role: Primary Intercept Analyst</p>
      </HoverCardContent>
    </HoverCard>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[160px]">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">CLEARANCE ROSTER</CardTitle>
                    <Badge variant="neon" size="sm">LEVEL 4</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Hover over personnel badges to inspect access tokens.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 flex justify-around">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Badge variant="neon" className="cursor-pointer">AGENT_0x42</Badge>
                    </HoverCardTrigger>
                    <HoverCardContent variant="neon" className="w-72 font-mono text-xs space-y-2">
                      <p className="font-bold text-cyan-300">KYBER KEY: 0x9F41</p>
                      <p className="text-slate-400">Role: Primary Intercept Analyst</p>
                    </HoverCardContent>
                  </HoverCard>
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
              description: 'Visual theme for HoverCardContent.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'align',
              description: 'Alignment relative to the trigger element.',
              type: '"start" | "center" | "end"',
              defaultValue: '"center"',
            },
            {
              property: 'sideOffset',
              description: 'Distance in pixels from the anchor element.',
              type: 'number',
              defaultValue: '6',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Radix UI Hover Card:</strong> Provides accessible hover intent delays so unintentional pointer sweeps do not trigger flickering cards.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Preview vs Interaction:</strong> Hover cards are intended for passive supplementary preview information; for critical actionable buttons, use <code className="text-cyan-400">Popover</code> or <code className="text-cyan-400">Dialog</code>.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
