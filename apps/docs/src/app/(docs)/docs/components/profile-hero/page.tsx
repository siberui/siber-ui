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
  ProfileHero,
  ProfileAvatar,
  ProfileInfo,
  ProfileTitle,
  ProfileSubtitle,
  ProfileMeta,
  ProfileActions,
  Button,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@siberui/react';
import {
  MapPin,
  Terminal,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Operative Bio Anatomy', level: 2 },
  { id: 'accent-colors', text: 'Laser Accent Wires (Cyan, Purple, Emerald)', level: 2 },
  { id: 'avatar-statuses', text: 'Avatar Online & Air-Gap Status Rings', level: 2 },
  { id: 'frosted-glass-hero', text: 'Frosted Cyber-Glass Dossier Header', level: 2 },
  { id: 'tactical-hud-dossier', text: 'Tactical HUD Sentinel Command Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ProfileHeroDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Profile Hero"
        description="Comprehensive developer bio, agent clearance dossier, and operative header unit with glowing avatar status rings, metadata tags, and action triggers."
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
  ProfileHero, 
  ProfileAvatar, 
  ProfileInfo, 
  ProfileTitle, 
  ProfileSubtitle, 
  ProfileMeta, 
  ProfileActions 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Operative Bio Anatomy" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The profile hero combines high-impact typography, metadata pills, avatar status rings, and tactical call-to-action buttons.
          </p>

          <Playground
            code={`<ProfileHero className="w-full max-w-2xl">
  <ProfileAvatar fallback="0x42" status="online" />
  <ProfileInfo>
    <ProfileTitle>Alex Vance</ProfileTitle>
    <ProfileSubtitle>LEAD ZERO-DAY RESEARCHER</ProfileSubtitle>
    <ProfileMeta>
      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Sector 09 // Orbital</span>
      <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-emerald-400" /> 8 YOE</span>
    </ProfileMeta>
    <ProfileActions>
      <Button variant="neon" size="sm" glow>DEPLOY AGENT</Button>
      <Button variant="secondary" size="sm">VIEW DOSSIER</Button>
    </ProfileActions>
  </ProfileInfo>
</ProfileHero>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <ProfileHero className="w-full max-w-2xl">
                <ProfileAvatar fallback="0x42" status="online" />
                <ProfileInfo>
                  <ProfileTitle>Alex Vance</ProfileTitle>
                  <ProfileSubtitle>LEAD ZERO-DAY RESEARCHER</ProfileSubtitle>
                  <ProfileMeta>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Sector 09 // Orbital</span>
                    <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-emerald-400" /> 8 YOE</span>
                  </ProfileMeta>
                  <ProfileActions>
                    <Button variant="neon" size="sm" glow>DEPLOY AGENT</Button>
                    <Button variant="secondary" size="sm">VIEW DOSSIER</Button>
                  </ProfileActions>
                </ProfileInfo>
              </ProfileHero>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Accent Colors ── */}
      <ContentSection title="Laser Accent Wires (Cyan, Purple, Emerald)" id="accent-colors">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Specify the top laser gradient accent wire via <code className="text-cyan-400">accent=&quot;cyan&quot; | &quot;purple&quot; | &quot;emerald&quot;</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4 w-full max-w-2xl">
  <ProfileHero accent="purple">
    <ProfileAvatar fallback="SYS" status="busy" />
    <ProfileInfo>
      <ProfileTitle>Network Core Sentinel</ProfileTitle>
      <ProfileSubtitle>INFRASTRUCTURE ARCHITECT</ProfileSubtitle>
    </ProfileInfo>
  </ProfileHero>

  <ProfileHero accent="emerald">
    <ProfileAvatar fallback="SEC" status="online" />
    <ProfileInfo>
      <ProfileTitle>Kyber HSM Operator</ProfileTitle>
      <ProfileSubtitle>POST-QUANTUM SECURITY</ProfileSubtitle>
    </ProfileInfo>
  </ProfileHero>
</div>`}
          >
            <div className="flex flex-col gap-4 p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <ProfileHero accent="purple" className="w-full max-w-2xl">
                <ProfileAvatar fallback="SYS" status="busy" />
                <ProfileInfo>
                  <ProfileTitle>Network Core Sentinel</ProfileTitle>
                  <ProfileSubtitle>INFRASTRUCTURE ARCHITECT</ProfileSubtitle>
                </ProfileInfo>
              </ProfileHero>

              <ProfileHero accent="emerald" className="w-full max-w-2xl">
                <ProfileAvatar fallback="SEC" status="online" />
                <ProfileInfo>
                  <ProfileTitle>Kyber HSM Operator</ProfileTitle>
                  <ProfileSubtitle>POST-QUANTUM SECURITY</ProfileSubtitle>
                </ProfileInfo>
              </ProfileHero>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Avatar Statuses ── */}
      <ContentSection title="Avatar Online & Air-Gap Status Rings" id="avatar-statuses">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Indicate live telemetry availability with <code className="text-cyan-400">status=&quot;online&quot; | &quot;busy&quot; | &quot;offline&quot;</code>.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-8 items-center justify-center">
  <ProfileAvatar fallback="ON" status="online" />
  <ProfileAvatar fallback="BSY" status="busy" />
  <ProfileAvatar fallback="OFF" status="offline" />
</div>`}
          >
            <div className="flex flex-wrap gap-8 items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <ProfileAvatar fallback="ON" status="online" />
              <ProfileAvatar fallback="BSY" status="busy" />
              <ProfileAvatar fallback="OFF" status="offline" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Dossier Header ── */}
      <ContentSection title="Frosted Cyber-Glass Dossier Header" id="frosted-glass-hero">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite profile hero over circuit substrate textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-2xl p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <ProfileHero className="bg-transparent border-0 p-0">
    <ProfileAvatar fallback="AGT" status="online" />
    <ProfileInfo>
      <ProfileTitle>Sentinel Envoy</ProfileTitle>
      <ProfileSubtitle>ORBITAL ENCLAVE LIAISON</ProfileSubtitle>
      <ProfileMeta>
        <span>Clearance: Level 5 Cryptographic</span>
      </ProfileMeta>
    </ProfileInfo>
  </ProfileHero>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <div className="relative z-10 w-full max-w-2xl">
                <ProfileHero className="bg-transparent border-0 p-0">
                  <ProfileAvatar fallback="AGT" status="online" />
                  <ProfileInfo>
                    <ProfileTitle>Sentinel Envoy</ProfileTitle>
                    <ProfileSubtitle>ORBITAL ENCLAVE LIAISON</ProfileSubtitle>
                    <ProfileMeta>
                      <span>Clearance: Level 5 Cryptographic</span>
                    </ProfileMeta>
                  </ProfileInfo>
                </ProfileHero>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Sentinel Command Card ── */}
      <ContentSection title="Tactical HUD Sentinel Command Card" id="tactical-hud-dossier">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded profile header.
          </p>

          <Playground
            code={`<Card className="max-w-2xl mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">COMMANDER DOSSIER</CardTitle>
      <Badge variant="neon" size="sm">ACTIVE ON-STATION</Badge>
    </div>
  </CardHeader>

  <CardContent className="p-6">
    <ProfileHero className="bg-black/30 border-cyan-500/20">
      <ProfileAvatar fallback="CMD" status="online" />
      <ProfileInfo>
        <ProfileTitle>Marshal Thorne</ProfileTitle>
        <ProfileSubtitle>SECTOR DEFENSE COMMANDER</ProfileSubtitle>
        <ProfileMeta>
          <span>Flagship: SSV-VALIANT</span>
          <span>Consensus: 100%</span>
        </ProfileMeta>
      </ProfileInfo>
    </ProfileHero>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-2xl w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">COMMANDER DOSSIER</CardTitle>
                    <Badge variant="neon" size="sm">ACTIVE ON-STATION</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <ProfileHero className="bg-black/30 border-cyan-500/20">
                    <ProfileAvatar fallback="CMD" status="online" />
                    <ProfileInfo>
                      <ProfileTitle>Marshal Thorne</ProfileTitle>
                      <ProfileSubtitle>SECTOR DEFENSE COMMANDER</ProfileSubtitle>
                      <ProfileMeta>
                        <span>Flagship: SSV-VALIANT</span>
                        <span>Consensus: 100%</span>
                      </ProfileMeta>
                    </ProfileInfo>
                  </ProfileHero>
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-base font-semibold text-slate-200 mb-3">ProfileHero Props</h3>
        <ApiTable
          props={[
            {
              property: 'accent',
              description: 'Top laser gradient wire accent color ("cyan", "purple", "emerald").',
              type: '"cyan" | "purple" | "emerald"',
              defaultValue: '"cyan"',
            },
          ]}
        />

        <h3 className="text-base font-semibold text-slate-200 mb-3 mt-8">ProfileAvatar Props</h3>
        <ApiTable
          props={[
            {
              property: 'src',
              description: 'URL of the operative avatar image.',
              type: 'string',
            },
            {
              property: 'fallback',
              description: 'Monospace initials rendered when no image is supplied.',
              type: 'string',
              defaultValue: '"USER"',
            },
            {
              property: 'status',
              description: 'Online telemetry availability badge dot.',
              type: '"online" | "busy" | "offline"',
              defaultValue: '"online"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Semantic Hierarchy:</strong> <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">ProfileTitle</code> outputs a primary <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;h1&gt;</code> element with accessible image fallbacks on <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">ProfileAvatar</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Responsive Layout:</strong> ProfileHero automatically adapts from a centered column on mobile to a side-by-side flex row on desktop viewports.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
