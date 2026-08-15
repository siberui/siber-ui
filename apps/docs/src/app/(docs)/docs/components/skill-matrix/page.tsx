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
  SkillMatrix,
  SkillItem,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';
import {
  Database,
  Layout,
  Shield,
  Cpu,
  Zap,
  Terminal,
  Radio,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Segmented Energy Cells', level: 2 },
  { id: 'color-spectrum', text: 'Color Spectrum & Categorical Tones', level: 2 },
  { id: 'grid-columns', text: 'Grid Column Layouts (1, 2, and 3 Columns)', level: 2 },
  { id: 'frosted-glass-matrix', text: 'Frosted Cyber-Glass Capability Deck', level: 2 },
  { id: 'tactical-hud-deck', text: 'Tactical HUD Operative Competency Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function SkillMatrixDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Skill Matrix"
        description="Tactical proficiency grid with 10-step segmented LED power bars, customizable status tags, and categorized technical capability metrics."
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
  SkillMatrix, 
  SkillItem 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Segmented Energy Cells" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The matrix renders a grid of discrete 10-step energy cells showing percentage mastery or custom status labels.
          </p>

          <Playground
            code={`<SkillMatrix cols={2}>
  <SkillItem
    name="Next.js / React 19"
    level={95}
    category="FRONTEND"
    icon={<Layout className="w-3.5 h-3.5" />}
    color="cyan"
    statusLabel="EXPERT"
  />
  <SkillItem
    name="Rust / WebAssembly"
    level={80}
    category="SYSTEMS"
    icon={<Cpu className="w-3.5 h-3.5" />}
    color="purple"
    statusLabel="ADVANCED"
  />
  <SkillItem
    name="PostgreSQL / Redis"
    level={70}
    category="STORAGE"
    icon={<Database className="w-3.5 h-3.5" />}
    color="emerald"
  />
  <SkillItem
    name="Post-Quantum Lattice"
    level={85}
    category="SECURITY"
    icon={<Shield className="w-3.5 h-3.5" />}
    color="amber"
  />
</SkillMatrix>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <SkillMatrix cols={2} className="w-full max-w-2xl">
                <SkillItem
                  name="Next.js / React 19"
                  level={95}
                  category="FRONTEND"
                  icon={<Layout className="w-3.5 h-3.5" />}
                  color="cyan"
                  statusLabel="EXPERT"
                />
                <SkillItem
                  name="Rust / WebAssembly"
                  level={80}
                  category="SYSTEMS"
                  icon={<Cpu className="w-3.5 h-3.5" />}
                  color="purple"
                  statusLabel="ADVANCED"
                />
                <SkillItem
                  name="PostgreSQL / Redis"
                  level={70}
                  category="STORAGE"
                  icon={<Database className="w-3.5 h-3.5" />}
                  color="emerald"
                />
                <SkillItem
                  name="Post-Quantum Lattice"
                  level={85}
                  category="SECURITY"
                  icon={<Shield className="w-3.5 h-3.5" />}
                  color="amber"
                />
              </SkillMatrix>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Color Spectrum ── */}
      <ContentSection title="Color Spectrum & Categorical Tones" id="color-spectrum">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Assign semantic color accents using <code className="text-cyan-400">color=&quot;cyan&quot; | &quot;purple&quot; | &quot;emerald&quot; | &quot;amber&quot;</code>.
          </p>

          <Playground
            code={`<SkillMatrix cols={2}>
  <SkillItem name="Cyan Energy" level={100} color="cyan" icon={<Zap className="w-3.5 h-3.5" />} />
  <SkillItem name="Purple Psionic" level={80} color="purple" icon={<Terminal className="w-3.5 h-3.5" />} />
  <SkillItem name="Emerald Biometric" level={60} color="emerald" icon={<Shield className="w-3.5 h-3.5" />} />
  <SkillItem name="Amber Telemetry" level={90} color="amber" icon={<Radio className="w-3.5 h-3.5" />} />
</SkillMatrix>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <SkillMatrix cols={2} className="w-full max-w-2xl">
                <SkillItem name="Cyan Energy" level={100} color="cyan" icon={<Zap className="w-3.5 h-3.5" />} />
                <SkillItem name="Purple Psionic" level={80} color="purple" icon={<Terminal className="w-3.5 h-3.5" />} />
                <SkillItem name="Emerald Biometric" level={60} color="emerald" icon={<Shield className="w-3.5 h-3.5" />} />
                <SkillItem name="Amber Telemetry" level={90} color="amber" icon={<Radio className="w-3.5 h-3.5" />} />
              </SkillMatrix>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Grid Columns ── */}
      <ContentSection title="Grid Column Layouts (1, 2, and 3 Columns)" id="grid-columns">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Organize rows via <code className="text-cyan-400">cols={1 | 2 | 3}</code>.
          </p>

          <Playground
            code={`<SkillMatrix cols={3}>
  <SkillItem name="KERNEL" level={90} color="cyan" />
  <SkillItem name="MESH" level={70} color="purple" />
  <SkillItem name="AIRGAP" level={100} color="emerald" />
</SkillMatrix>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <SkillMatrix cols={3} className="w-full max-w-2xl">
                <SkillItem name="KERNEL" level={90} color="cyan" />
                <SkillItem name="MESH" level={70} color="purple" />
                <SkillItem name="AIRGAP" level={100} color="emerald" />
              </SkillMatrix>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Capability Deck ── */}
      <ContentSection title="Frosted Cyber-Glass Capability Deck" id="frosted-glass-matrix">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite skill matrix nested over circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-2xl p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <span className="font-mono text-xs font-bold text-white tracking-wider">OPERATIVE SYSTEM MASTERY</span>
    <SkillMatrix cols={2}>
      <SkillItem name="Quantum Routing" level={90} color="cyan" category="CORE" />
      <SkillItem name="Threat Mitigation" level={95} color="emerald" category="DEFENSE" />
    </SkillMatrix>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <div className="relative z-10 w-full max-w-2xl space-y-4">
                <span className="font-mono text-xs font-bold text-white tracking-wider">OPERATIVE SYSTEM MASTERY</span>
                <SkillMatrix cols={2}>
                  <SkillItem name="Quantum Routing" level={90} color="cyan" category="CORE" />
                  <SkillItem name="Threat Mitigation" level={95} color="emerald" category="DEFENSE" />
                </SkillMatrix>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Operative Competency Card ── */}
      <ContentSection title="Tactical HUD Operative Competency Card" id="tactical-hud-deck">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with skill proficiency bars.
          </p>

          <Playground
            code={`<Card className="max-w-xl mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">OPERATOR CLEARANCE & APTITUDE</CardTitle>
      <Badge variant="neon" size="sm">TIER 1</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Verified cryptographic capability metrics.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <SkillMatrix cols={2}>
      <SkillItem name="Cipher Inversion" level={85} color="cyan" statusLabel="MASTER" />
      <SkillItem name="Zero-Day Triage" level={100} color="emerald" statusLabel="FLAWLESS" />
    </SkillMatrix>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-xl w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">OPERATOR CLEARANCE & APTITUDE</CardTitle>
                    <Badge variant="neon" size="sm">TIER 1</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Verified cryptographic capability metrics.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <SkillMatrix cols={2}>
                    <SkillItem name="Cipher Inversion" level={85} color="cyan" statusLabel="MASTER" />
                    <SkillItem name="Zero-Day Triage" level={100} color="emerald" statusLabel="FLAWLESS" />
                  </SkillMatrix>
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-base font-semibold text-slate-200 mb-3">SkillMatrix Props</h3>
        <ApiTable
          props={[
            {
              property: 'cols',
              description: 'Grid column count layout (1, 2, or 3 columns).',
              type: '1 | 2 | 3',
              defaultValue: '2',
            },
          ]}
        />

        <h3 className="text-base font-semibold text-slate-200 mb-3 mt-8">SkillItem Props</h3>
        <ApiTable
          props={[
            {
              property: 'name',
              description: 'Primary title or skill name string.',
              type: 'string',
            },
            {
              property: 'level',
              description: 'Numeric percentage value between 0 and 100.',
              type: 'number',
            },
            {
              property: 'category',
              description: 'Optional uppercase badge label next to title.',
              type: 'string',
            },
            {
              property: 'color',
              description: 'Accent highlight color for the LED bars and icon.',
              type: '"cyan" | "purple" | "emerald" | "amber"',
              defaultValue: '"cyan"',
            },
            {
              property: 'statusLabel',
              description: 'Custom textual readout replacing default percentage.',
              type: 'string',
            },
            {
              property: 'icon',
              description: 'Optional ReactNode leading icon glyph.',
              type: 'React.ReactNode',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Text Fallbacks:</strong> The numeric percentage or status text is explicitly included in the DOM for screen reader text reading.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Visual Clamping:</strong> Skill levels are automatically clamped between 0% and 100% across the 10-step LED power segments.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
