import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Progress, Button } from '@siberui/react';
import { ProgressDemo } from './demo';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ProgressDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Progress"
        description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Progress value={66} />`}>
              <div className="flex items-center justify-center p-8 w-full max-w-md mx-auto">
                <ProgressDemo />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variants</h3>
            <Playground code={`<div className="space-y-4">
  <Progress value={60} variant="neon" />
  <Progress value={45} variant="neonPurple" />
  <Progress value={80} variant="neonGreen" />
  <Progress value={30} variant="destructive" />
</div>`}>
              <div className="flex flex-col gap-6 items-center justify-center p-8 w-full max-w-md mx-auto">
                <Progress value={60} variant="neon" />
                <Progress value={45} variant="neonPurple" />
                <Progress value={80} variant="neonGreen" />
                <Progress value={30} variant="destructive" />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Indeterminate State</h3>
            <Playground code={`<Progress isIndeterminate variant="neon" />`}>
              <div className="flex items-center justify-center p-8 w-full max-w-md mx-auto">
                <Progress isIndeterminate variant="neon" />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'value', description: 'The progress value.', type: 'number' },
            { property: 'variant', description: 'Visual style.', type: '"default" | "neon" | "neonPurple" | "neonGreen" | "destructive"' },
            { property: 'size', description: 'Thickness of the bar.', type: '"sm" | "md" | "lg"' },
            { property: 'isIndeterminate', description: 'Shows an animated infinite loading state.', type: 'boolean' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
