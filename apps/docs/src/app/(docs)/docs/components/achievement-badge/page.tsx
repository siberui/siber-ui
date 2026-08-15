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
  AchievementBadge,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import {
  Shield,
  Award,
  Book,
  Terminal,
  Lock,
  Key,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Security Badges', level: 2 },
  { id: 'verification-states', text: 'Verification Status Dots (Verified & Pending)', level: 2 },
  { id: 'clickable-links', text: 'Interactive Hyperlinks & External Proofs', level: 2 },
  { id: 'frosted-glass-showcase', text: 'Frosted Cyber-Glass Certification Showcase', level: 2 },
  { id: 'tactical-hud-clearance', text: 'Tactical HUD Operator Clearance Dossier', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function AchievementBadgeDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Achievement Badge"
        description="Stylized cyberpunk credentials cards featuring monospace metadata ribbons, verified cryptographic status dots, and external link anchors."
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
      <ContentSection title="Basic Usage & Security Badges" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">title</code>, <code className="text-cyan-400">issuer</code>, and an optional <code className="text-cyan-400">icon</code>.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <AchievementBadge
    title="AWS Certified Security Specialist"
    issuer="AMAZON WEB SERVICES"
    date="2024"
    icon={<Shield className="w-5 h-5" />}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-sm w-full">
                <AchievementBadge
                  title="AWS Certified Security Specialist"
                  issuer="AMAZON WEB SERVICES"
                  date="2024"
                  icon={<Shield className="w-5 h-5" />}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Verification States ── */}
      <ContentSection title="Verification Status Dots (Verified & Pending)" id="verification-states">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Toggle between verified cryptographic attestations (<code className="text-emerald-400">status=&quot;verified&quot;</code>) and pending evaluations (<code className="text-amber-400">status=&quot;pending&quot;</code>).
          </p>

          <Playground
            code={`<div className="flex flex-col gap-3 w-full max-w-sm">
  <AchievementBadge
    title="Offensive Security Certified Professional (OSCP)"
    issuer="OFFSEC GLOBAL"
    date="2023"
    status="verified"
    icon={<Terminal className="w-5 h-5" />}
  />

  <AchievementBadge
    title="Post-Quantum Cryptography Auditor"
    issuer="NIST STANDARDS LAB"
    date="2025"
    status="pending"
    icon={<Lock className="w-5 h-5" />}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-3 w-full max-w-sm">
                <AchievementBadge
                  title="Offensive Security Certified Professional (OSCP)"
                  issuer="OFFSEC GLOBAL"
                  date="2023"
                  status="verified"
                  icon={<Terminal className="w-5 h-5" />}
                />

                <AchievementBadge
                  title="Post-Quantum Cryptography Auditor"
                  issuer="NIST STANDARDS LAB"
                  date="2025"
                  status="pending"
                  icon={<Lock className="w-5 h-5" />}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Clickable Links ── */}
      <ContentSection title="Interactive Hyperlinks & External Proofs" id="clickable-links">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Provide <code className="text-cyan-400">href</code> to automatically wrap the badge in an accessible external link opening with <code className="text-cyan-400 font-mono text-xs">target=&quot;_blank&quot;</code>.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <AchievementBadge
    title="Defcon CTF Global Finalist"
    issuer="DEFCON ORG"
    date="2024"
    icon={<Award className="w-5 h-5" />}
    href="https://defcon.org"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-sm w-full">
                <AchievementBadge
                  title="Defcon CTF Global Finalist"
                  issuer="DEFCON ORG"
                  date="2024"
                  icon={<Award className="w-5 h-5" />}
                  href="https://defcon.org"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Certification Showcase ── */}
      <ContentSection title="Frosted Cyber-Glass Certification Showcase" id="frosted-glass-showcase">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Embed verified cryptographic credential badges inside frosted glass panels layered on circuit substrates.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Award className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">VERIFIED ATTESTATIONS</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">2 VERIFIED</Badge>
    </div>

    <div className="space-y-3">
      <AchievementBadge
        title="CISSP – Information Systems Security"
        issuer="(ISC)² GLOBAL"
        date="2023"
        status="verified"
        icon={<Shield className="w-5 h-5" />}
      />

      <AchievementBadge
        title="Cloud Security Architecture"
        issuer="CNCF FOUNDATION"
        date="2024"
        status="verified"
        icon={<Book className="w-5 h-5" />}
      />
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
                      <Award className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">VERIFIED ATTESTATIONS</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">2 VERIFIED</Badge>
                  </div>

                  <div className="space-y-3">
                    <AchievementBadge
                      title="CISSP – Information Systems Security"
                      issuer="(ISC)² GLOBAL"
                      date="2023"
                      status="verified"
                      icon={<Shield className="w-5 h-5" />}
                    />

                    <AchievementBadge
                      title="Cloud Security Architecture"
                      issuer="CNCF FOUNDATION"
                      date="2024"
                      status="verified"
                      icon={<Book className="w-5 h-5" />}
                    />
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Operator Clearance Dossier ── */}
      <ContentSection title="Tactical HUD Operator Clearance Dossier" id="tactical-hud-clearance">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission dossier card showcasing operator qualifications and security credentials.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">OPERATOR CLEARANCES</CardTitle>
      <Badge variant="neon" size="sm">LEVEL 4</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Cryptographic badges linked to operator hardware key.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-3">
    <AchievementBadge
      title="Root Cryptographic Keyholder"
      issuer="QUANTUM SECURITY COUNCIL"
      date="2024"
      status="verified"
      icon={<Key className="w-5 h-5" />}
    />

    <AchievementBadge
      title="Air-Gapped HSM Operator"
      issuer="DEFENSE TELEMETRY AGENCY"
      date="2025"
      status="verified"
      icon={<Lock className="w-5 h-5" />}
    />
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">OPERATOR CLEARANCES</CardTitle>
                    <Badge variant="neon" size="sm">LEVEL 4</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Cryptographic badges linked to operator hardware key.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-3">
                  <AchievementBadge
                    title="Root Cryptographic Keyholder"
                    issuer="QUANTUM SECURITY COUNCIL"
                    date="2024"
                    status="verified"
                    icon={<Key className="w-5 h-5" />}
                  />

                  <AchievementBadge
                    title="Air-Gapped HSM Operator"
                    issuer="DEFENSE TELEMETRY AGENCY"
                    date="2025"
                    status="verified"
                    icon={<Lock className="w-5 h-5" />}
                  />
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
              description: 'Primary title or credential name.',
              type: 'string',
            },
            {
              property: 'issuer',
              description: 'Issuing organization or authority string.',
              type: 'string',
            },
            {
              property: 'date',
              description: 'Optional date string (e.g. "2024").',
              type: 'string',
            },
            {
              property: 'icon',
              description: 'Custom ReactNode icon rendered inside the glowing badge frame.',
              type: 'React.ReactNode',
              defaultValue: '"🏆"',
            },
            {
              property: 'href',
              description: 'When passed, wraps the badge in a clickable link.',
              type: 'string',
            },
            {
              property: 'status',
              description: 'Determines the verification dot color.',
              type: '"verified" | "pending"',
              defaultValue: '"verified"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Link Semantics:</strong> When <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">href</code> is specified, the badge uses semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;a&gt;</code> anchors with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">rel=&quot;noopener noreferrer&quot;</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Metadata Consistency:</strong> Use uppercase abbreviations for issuer names (e.g. &quot;AMAZON WEB SERVICES&quot; or &quot;OFFSEC&quot;) to maintain design rhythm.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
