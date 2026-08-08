import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { RadarProgress } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function RadarProgressDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Radar Progress"
        description="A circular progress indicator styled like a high-tech scanning radar."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Default (Animated)</h3>
            <Playground code={`<RadarProgress size="md" />`}>
              <div className="flex items-center justify-center">
                <RadarProgress size="md" />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Variants</h3>
            <Playground code={`<div className="flex gap-8">
  <RadarProgress color="cyan" size="lg" />
  <RadarProgress color="rose" size="lg" />
</div>`}>
              <div className="flex items-center justify-center gap-8">
                <RadarProgress color="cyan" size="lg" />
                <RadarProgress color="rose" size="lg" />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'scanning',
              description: 'Whether the radar sweep animation is active.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'color',
              description: 'Visual color variant.',
              type: '"cyan" | "green" | "rose"',
              defaultValue: '"cyan"',
            },
            {
              property: 'size',
              description: 'Preset size dimensions.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
