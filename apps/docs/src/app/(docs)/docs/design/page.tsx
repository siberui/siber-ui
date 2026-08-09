import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';

const headings = [
  { id: 'philosophy', text: 'Philosophy', level: 2 },
  { id: 'colors', text: 'Colors', level: 2 },
  { id: 'typography', text: 'Typography', level: 2 },
];

export default function DesignDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Design Guidelines"
        description="The core principles, typography, and color palette of the SiberUI design system."
      />

      <ContentSection title="Philosophy" id="philosophy">
        <p className="text-slate-400 leading-relaxed">
          SiberUI is built on the concept of <strong>Cyber-Minimalism</strong>. It strips away unnecessary visual noise while retaining the high-tech, data-dense feel of cyberpunk interfaces. We prioritize deep blacks, high-contrast cyan and neon accents, and sharp geometries to create UIs suitable for cybersecurity dashboards, telemetry monitors, and developer tools.
        </p>
      </ContentSection>

      <ContentSection title="Colors" id="colors">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-xl bg-cyan-500 shadow-[0_0_24px_rgba(34,211,238,0.5)]"></div>
            <div>
              <h4 className="text-slate-200 font-medium">Primary Accent (Cyan)</h4>
              <p className="text-slate-400 text-sm">Used for primary actions, selections, and active states.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <div className="w-16 h-16 rounded-xl bg-slate-950 border border-border-subtle"></div>
            <div>
              <h4 className="text-slate-200 font-medium">Background (Void)</h4>
              <p className="text-slate-400 text-sm">Deep slate-950 for backgrounds to ensure neon colors pop.</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </ComponentPage>
  );
}
