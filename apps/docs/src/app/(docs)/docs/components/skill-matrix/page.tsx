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
} from '@siberui/react';
import {
  Database,
  Layout,
  Shield,
  Cpu,
  Zap,
  Terminal,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Segmented LED Power Array & Ranks', level: 2 },
  { id: 'signal-spectrum', text: 'Signal Spectrum (Cyan, Violet, Emerald, Amber, Rose)', level: 2 },
  { id: 'custom-segments', text: 'High-Resolution Custom Segment Counts', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function SkillMatrixDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Skill Matrix"
        description="Tactical proficiency and telemetry power array featuring multi-step segmented LED bars, auto tactical rank badges ([MASTER], [SPECIALIST]), and categorized domain tags."
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
      <ContentSection title="Segmented LED Power Array & Ranks" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Renders discrete segmented LED power bars with automatic tactical rank calculation (<code className="text-cyan-400">showRank</code>) based on mastery percentages.
          </p>

          <Playground
            code={`<SkillMatrix cols={2}>
  <SkillItem
    name="Next.js 15 / React 19"
    level={95}
    category="CORE"
    icon={<Layout className="w-3.5 h-3.5" />}
    signal="cyan"
  />
  <SkillItem
    name="Rust / WebAssembly"
    level={82}
    category="SYSTEMS"
    icon={<Cpu className="w-3.5 h-3.5" />}
    signal="violet"
  />
  <SkillItem
    name="PostgreSQL / Redis"
    level={70}
    category="DATA"
    icon={<Database className="w-3.5 h-3.5" />}
    signal="emerald"
  />
  <SkillItem
    name="Post-Quantum Lattice"
    level={88}
    category="SECURITY"
    icon={<Shield className="w-3.5 h-3.5" />}
    signal="amber"
  />
</SkillMatrix>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="w-full max-w-2xl min-w-0">
                <SkillMatrix cols={2} className="w-full max-w-2xl min-w-0">
                  <SkillItem
                    name="Next.js 15 / React 19"
                    level={95}
                    category="CORE"
                    icon={<Layout className="w-3.5 h-3.5" />}
                    signal="cyan"
                  />
                  <SkillItem
                    name="Rust / WebAssembly"
                    level={82}
                    category="SYSTEMS"
                    icon={<Cpu className="w-3.5 h-3.5" />}
                    signal="violet"
                  />
                  <SkillItem
                    name="PostgreSQL / Redis"
                    level={70}
                    category="DATA"
                    icon={<Database className="w-3.5 h-3.5" />}
                    signal="emerald"
                  />
                  <SkillItem
                    name="Post-Quantum Lattice"
                    level={88}
                    category="SECURITY"
                    icon={<Shield className="w-3.5 h-3.5" />}
                    signal="amber"
                  />
                </SkillMatrix>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Spectrum ── */}
      <ContentSection title="Signal Spectrum (Cyan, Violet, Emerald, Amber, Rose)" id="signal-spectrum">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">signal</code> prop selects the LED cell and text accent highlight color.
          </p>

          <Playground
            code={`<SkillMatrix cols={2}>
  <SkillItem name="Cyan Laser Matrix" level={100} signal="cyan" icon={<Zap className="w-3.5 h-3.5" />} />
  <SkillItem name="Violet Psionic Node" level={80} signal="violet" icon={<Terminal className="w-3.5 h-3.5" />} />
  <SkillItem name="Emerald Bio Sentinel" level={65} signal="emerald" icon={<Shield className="w-3.5 h-3.5" />} />
  <SkillItem name="Rose Breach Vector" level={92} signal="rose" icon={<Cpu className="w-3.5 h-3.5" />} />
</SkillMatrix>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <SkillMatrix cols={2} className="w-full max-w-2xl min-w-0">
                <SkillItem name="Cyan Laser Matrix" level={100} signal="cyan" icon={<Zap className="w-3.5 h-3.5" />} />
                <SkillItem name="Violet Psionic Node" level={80} signal="violet" icon={<Terminal className="w-3.5 h-3.5" />} />
                <SkillItem name="Emerald Bio Sentinel" level={65} signal="emerald" icon={<Shield className="w-3.5 h-3.5" />} />
                <SkillItem name="Rose Breach Vector" level={92} signal="rose" icon={<Cpu className="w-3.5 h-3.5" />} />
              </SkillMatrix>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Custom Segments ── */}
      <ContentSection title="High-Resolution Custom Segment Counts" id="custom-segments">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">segments</code> to define high-resolution power arrays (e.g. 8, 12, 16, or 20 discrete energy cells).
          </p>

          <Playground
            code={`<div className="space-y-3 w-full max-w-xl">
  <SkillItem name="Ultra Precision Array (20 Segments)" level={85} segments={20} signal="cyan" />
  <SkillItem name="Standard Tactical Array (12 Segments)" level={75} segments={12} signal="amber" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-w-0">
              <div className="space-y-3 w-full max-w-xl min-w-0">
                <SkillItem name="Ultra Precision Array (20 Segments)" level={85} segments={20} signal="cyan" />
                <SkillItem name="Standard Tactical Array (12 Segments)" level={75} segments={12} signal="amber" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-base font-semibold text-slate-200 mb-3">SkillItem Props</h3>
        <ApiTable
          props={[
            {
              property: 'name',
              description: 'Skill or proficiency name.',
              type: 'string',
            },
            {
              property: 'level',
              description: 'Proficiency mastery value between 0 and 100.',
              type: 'number',
            },
            {
              property: 'signal',
              description: 'LED bar and text accent color.',
              type: '"cyan" | "violet" | "emerald" | "amber" | "rose"',
              defaultValue: '"cyan"',
            },
            {
              property: 'segments',
              description: 'Total number of discrete LED power segments.',
              type: 'number',
              defaultValue: '12',
            },
            {
              property: 'showRank',
              description: 'Displays the tactical rank badge based on percentage.',
              type: 'boolean',
              defaultValue: 'true',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Readable Text Fallbacks:</strong> Exact percentages and rank classifications are rendered in the DOM for screen reader discovery.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
