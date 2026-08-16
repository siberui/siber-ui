'use client';

import * as React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { AchievementBadge } from '@siberui/react';
import {
  Shield,
  Award,
  Terminal,
  Lock,
  Key,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Achievement & Credential Badge', level: 2 },
  { id: 'rarity-spectrum', text: 'Rarity Spectrum (Common, Rare, Epic, Legendary)', level: 2 },
  { id: 'progression-bar', text: 'Segmented Multi-Tier Progress Array', level: 2 },
  { id: 'cryptographic-proof', text: 'Cryptographic Proof Hash & Verification', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function AchievementBadgeDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Achievement Badge"
        description="Futuristic certification, CTF accomplishment, and clearance badge featuring neon rarity auras, a 45° chamfered icon vessel, cryptographic proof hashes, and segmented progress bars."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { AchievementBadge } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Achievement & Credential Badge" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Cybersecurity achievement and certification card housing an icon inside a 45° geometric vessel alongside issuer and date metadata.
          </p>

          <Playground
            code={`<div className="max-w-md w-full">
  <AchievementBadge
    title="AWS Certified Security Specialist"
    issuer="AMAZON WEB SERVICES"
    date="2024"
    rarity="rare"
    icon={<Shield className="w-5 h-5" />}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="max-w-md w-full min-w-0">
                <AchievementBadge
                  title="AWS Certified Security Specialist"
                  issuer="AMAZON WEB SERVICES"
                  date="2024"
                  rarity="rare"
                  icon={<Shield className="w-5 h-5" />}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Rarity Spectrum ── */}
      <ContentSection title="Rarity Spectrum (Common, Rare, Epic, Legendary)" id="rarity-spectrum">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">rarity</code> prop grades the accomplishment: <code className="text-cyan-400">&quot;common&quot; | &quot;rare&quot; | &quot;epic&quot; | &quot;legendary&quot;</code> with distinctive neon aura glows.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
  <AchievementBadge
    title="Junior Penetration Tester"
    issuer="TRYHACKME ACADEMY"
    rarity="common"
    icon={<Terminal className="w-5 h-5" />}
  />

  <AchievementBadge
    title="Offensive Security Certified Professional (OSCP)"
    issuer="OFFSEC GLOBAL"
    rarity="rare"
    icon={<Shield className="w-5 h-5" />}
  />

  <AchievementBadge
    title="Zero-Day Vulnerability Researcher"
    issuer="SECURITY ALLIANCE"
    rarity="epic"
    icon={<Award className="w-5 h-5" />}
  />

  <AchievementBadge
    title="Defcon CTF World Finalist"
    issuer="DEFCON ORG"
    rarity="legendary"
    icon={<Key className="w-5 h-5" />}
  />
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <AchievementBadge
                title="Junior Penetration Tester"
                issuer="TRYHACKME ACADEMY"
                rarity="common"
                icon={<Terminal className="w-5 h-5" />}
              />

              <AchievementBadge
                title="Offensive Security Certified Professional (OSCP)"
                issuer="OFFSEC GLOBAL"
                rarity="rare"
                icon={<Shield className="w-5 h-5" />}
              />

              <AchievementBadge
                title="Zero-Day Vulnerability Researcher"
                issuer="SECURITY ALLIANCE"
                rarity="epic"
                icon={<Award className="w-5 h-5" />}
              />

              <AchievementBadge
                title="Defcon CTF World Finalist"
                issuer="DEFCON ORG"
                rarity="legendary"
                icon={<Key className="w-5 h-5" />}
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Progression Bar ── */}
      <ContentSection title="Segmented Multi-Tier Progress Array" id="progression-bar">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">progress</code> prop renders a 10-step segmented power bar for tiered objectives.
          </p>

          <Playground
            code={`<div className="max-w-md w-full">
  <AchievementBadge
    title="Bug Bounty Grandmaster – Tier 4"
    issuer="HACKERONE PLATFORM"
    date="2025"
    rarity="legendary"
    progress={80}
    icon={<Award className="w-5 h-5" />}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="max-w-md w-full min-w-0">
                <AchievementBadge
                  title="Bug Bounty Grandmaster – Tier 4"
                  issuer="HACKERONE PLATFORM"
                  date="2025"
                  rarity="legendary"
                  progress={80}
                  icon={<Award className="w-5 h-5" />}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Cryptographic Proof ── */}
      <ContentSection title="Cryptographic Proof Hash & Verification" id="cryptographic-proof">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Display blockchain, certificate authority, or HSM signature verification proofs using <code className="text-cyan-400">hash</code>.
          </p>

          <Playground
            code={`<div className="max-w-md w-full">
  <AchievementBadge
    title="Quantum Encryption Keyholder"
    issuer="GLOBAL HSM COUNCIL"
    date="2025"
    hash="0x7E3A9F...B881"
    status="verified"
    rarity="epic"
    icon={<Lock className="w-5 h-5" />}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="max-w-md w-full min-w-0">
                <AchievementBadge
                  title="Quantum Encryption Keyholder"
                  issuer="GLOBAL HSM COUNCIL"
                  date="2025"
                  hash="0x7E3A9F...B881"
                  status="verified"
                  rarity="epic"
                  icon={<Lock className="w-5 h-5" />}
                />
              </div>
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
              description: 'Achievement or credential name.',
              type: 'string',
            },
            {
              property: 'issuer',
              description: 'Issuing organization or authority.',
              type: 'string',
            },
            {
              property: 'rarity',
              description: 'Accomplishment rarity grading tier.',
              type: '"common" | "rare" | "epic" | "legendary"',
              defaultValue: '"rare"',
            },
            {
              property: 'progress',
              description: 'Completion progress percentage (0 - 100).',
              type: 'number',
            },
            {
              property: 'hash',
              description: 'Cryptographic proof hash string.',
              type: 'string',
            },
            {
              property: 'status',
              description: 'Verification status indicator.',
              type: '"verified" | "pending" | "locked"',
              defaultValue: '"verified"',
            },
            {
              property: 'href',
              description: 'External credential verification URL.',
              type: 'string',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Link Semantics:</strong> When <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">href</code> is provided, it renders a semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;a&gt;</code> element with secure <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">rel=&quot;noopener noreferrer&quot;</code> attributes.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
