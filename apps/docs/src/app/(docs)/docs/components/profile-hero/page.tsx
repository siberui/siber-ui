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
  ProfileMetaItem,
  ProfileActions,
  Button,
} from '@siberui/react';
import {
  Shield,
  Send,
  Award,
  Terminal,
  MapPin,
  Building,
  Key,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Dossier Hero & Reticle Avatar', level: 2 },
  { id: 'status-modes', text: 'Operative Statuses (Online, Busy, Classified)', level: 2 },
  { id: 'copyable-meta', text: 'Copyable Cryptographic Metadata Chips', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function ProfileHeroDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Profile Hero"
        description="Tactical operative dossier banner featuring HUD telemetry header tags, biometric targeting reticles, copyable metadata chips, and animated status beacons."
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
  ProfileMetaItem,
  ProfileActions 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Dossier Hero & Reticle Avatar" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite hero banner featuring tactical clearance header, reticle corner brackets around avatar, and metadata badges.
          </p>

          <Playground
            code={`<ProfileHero
  tag="OPERATIVE // DOSSIER_09"
  clearance="CLEARANCE: LVL-5"
  status="online"
  signal="cyan"
  className="max-w-2xl w-full"
>
  <ProfileAvatar
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
    alt="Elena Vance"
    status="online"
    reticles
  />
  <ProfileInfo>
    <ProfileTitle>Elena Vance</ProfileTitle>
    <ProfileSubtitle>Principal Sentinel Architect // Zero-Trust Systems</ProfileSubtitle>
    <p className="text-xs text-slate-300 leading-relaxed">
      Architecting distributed zero-knowledge verification nodes and post-quantum lattice security mesh. Leading global cyber defense infrastructure.
    </p>
    <ProfileMeta>
      <ProfileMetaItem icon={<Building className="w-3.5 h-3.5" />}>ORBITAL DEFENSE CMD</ProfileMetaItem>
      <ProfileMetaItem icon={<MapPin className="w-3.5 h-3.5" />}>NEO-ZURICH (UTC+1)</ProfileMetaItem>
      <ProfileMetaItem icon={<Key className="w-3.5 h-3.5" />} copyable>0x7F4A...B881</ProfileMetaItem>
    </ProfileMeta>
    <ProfileActions>
      <Button variant="ghost" size="sm" leftIcon={<Terminal className="w-3.5 h-3.5" />}>
        VIEW AUDIT
      </Button>
      <Button variant="primary" size="sm" leftIcon={<Send className="w-3.5 h-3.5" />}>
        TRANSMIT PING
      </Button>
    </ProfileActions>
  </ProfileInfo>
</ProfileHero>`}
          >
            <div className="flex items-center justify-center p-6 sm:p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="max-w-2xl w-full min-w-0">
                <ProfileHero
                  tag="OPERATIVE // DOSSIER_09"
                  clearance="CLEARANCE: LVL-5"
                  status="online"
                  signal="cyan"
                >
                  <ProfileAvatar
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                    alt="Elena Vance"
                    status="online"
                    reticles
                  />
                  <ProfileInfo>
                    <ProfileTitle>Elena Vance</ProfileTitle>
                    <ProfileSubtitle>Principal Sentinel Architect // Zero-Trust Systems</ProfileSubtitle>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Architecting distributed zero-knowledge verification nodes and post-quantum lattice security mesh. Leading global cyber defense infrastructure.
                    </p>
                    <ProfileMeta>
                      <ProfileMetaItem icon={<Building className="w-3.5 h-3.5" />}>ORBITAL DEFENSE CMD</ProfileMetaItem>
                      <ProfileMetaItem icon={<MapPin className="w-3.5 h-3.5" />}>NEO-ZURICH (UTC+1)</ProfileMetaItem>
                      <ProfileMetaItem icon={<Key className="w-3.5 h-3.5" />} copyable>0x7F4A...B881</ProfileMetaItem>
                    </ProfileMeta>
                    <ProfileActions>
                      <Button variant="ghost" size="sm" leftIcon={<Terminal className="w-3.5 h-3.5" />}>
                        VIEW AUDIT
                      </Button>
                      <Button variant="primary" size="sm" leftIcon={<Send className="w-3.5 h-3.5" />}>
                        TRANSMIT PING
                      </Button>
                    </ProfileActions>
                  </ProfileInfo>
                </ProfileHero>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Status Modes ── */}
      <ContentSection title="Operative Statuses (Online, Busy, Classified)" id="status-modes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">status</code> prop governs the radar beacon tone: <code className="text-emerald-400">online</code> (Emerald), <code className="text-amber-400">busy</code> (Amber), <code className="text-violet-400">classified</code> (Violet), or <code className="text-slate-400">offline</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
  <ProfileHero tag="SYNTHETIC // ACTIVE" status="online" signal="emerald">
    <ProfileAvatar fallback="01" status="online" reticles />
    <ProfileInfo>
      <ProfileTitle className="text-xl">Unit Zero-One</ProfileTitle>
      <ProfileSubtitle>Autonomous Defense Node</ProfileSubtitle>
    </ProfileInfo>
  </ProfileHero>

  <ProfileHero tag="RESTRICTED // GHOST" clearance="TOP SECRET" status="classified" signal="rose">
    <ProfileAvatar fallback="G" status="classified" reticles />
    <ProfileInfo>
      <ProfileTitle className="text-xl">Ghost Operative</ProfileTitle>
      <ProfileSubtitle>Special Recon Vector</ProfileSubtitle>
    </ProfileInfo>
  </ProfileHero>
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <ProfileHero tag="SYNTHETIC // ACTIVE" status="online" signal="emerald">
                <ProfileAvatar fallback="01" status="online" reticles />
                <ProfileInfo>
                  <ProfileTitle className="text-xl">Unit Zero-One</ProfileTitle>
                  <ProfileSubtitle>Autonomous Defense Node</ProfileSubtitle>
                </ProfileInfo>
              </ProfileHero>

              <ProfileHero tag="RESTRICTED // GHOST" clearance="TOP SECRET" status="classified" signal="rose">
                <ProfileAvatar fallback="G" status="classified" reticles />
                <ProfileInfo>
                  <ProfileTitle className="text-xl">Ghost Operative</ProfileTitle>
                  <ProfileSubtitle>Special Recon Vector</ProfileSubtitle>
                </ProfileInfo>
              </ProfileHero>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Copyable Metadata ── */}
      <ContentSection title="Copyable Cryptographic Metadata Chips" id="copyable-meta">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Adding <code className="text-cyan-400">copyable</code> to <code className="text-cyan-400">ProfileMetaItem</code> enables single-click clipboard copying with visual confirmation.
          </p>

          <Playground
            code={`<ProfileMeta>
  <ProfileMetaItem icon={<Key className="w-3.5 h-3.5" />} copyable>0x3A9F419828C1D421</ProfileMetaItem>
  <ProfileMetaItem icon={<Shield className="w-3.5 h-3.5" />}>4096-BIT RSA KEY</ProfileMetaItem>
  <ProfileMetaItem icon={<Award className="w-3.5 h-3.5" />}>CTF RANK #4 GLOBAL</ProfileMetaItem>
</ProfileMeta>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <ProfileMeta>
                <ProfileMetaItem icon={<Key className="w-3.5 h-3.5" />} copyable>0x3A9F419828C1D421</ProfileMetaItem>
                <ProfileMetaItem icon={<Shield className="w-3.5 h-3.5" />}>4096-BIT RSA KEY</ProfileMetaItem>
                <ProfileMetaItem icon={<Award className="w-3.5 h-3.5" />}>CTF RANK #4 GLOBAL</ProfileMetaItem>
              </ProfileMeta>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'tag',
              description: 'Top-left tactical dossier tag string (e.g. "OPERATIVE // 09").',
              type: 'string',
              defaultValue: '"OPERATIVE // DOSSIER"',
            },
            {
              property: 'clearance',
              description: 'Security clearance badge label (e.g. "CLEARANCE: LVL-5").',
              type: 'string',
              defaultValue: '"CLEARANCE: LVL-5"',
            },
            {
              property: 'status',
              description: 'Live operational status mode.',
              type: '"online" | "busy" | "offline" | "classified"',
              defaultValue: '"online"',
            },
            {
              property: 'signal',
              description: 'Signal highlight and glow color.',
              type: '"cyan" | "violet" | "emerald" | "amber" | "rose"',
              defaultValue: '"cyan"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Heading Order:</strong> The operative name renders in semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;h1&gt;</code> for accessible screen reader document hierarchy.
          </li>
          <li>
            <strong>Copy Announcement:</strong> The copy feedback includes visual confirmation and native clipboard API handling.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
