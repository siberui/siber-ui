import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Spinner } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SpinnerDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Spinner"
        description="A glowing, animated loading indicator."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Spinner />`}>
              <div className="flex items-center justify-center p-8">
                <Spinner />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Variants & Labels</h3>
            <Playground code={`<div className="flex gap-8">
  <Spinner variant="default" showLabel label="Loading" />
  <Spinner variant="neon" showLabel label="Decrypting" />
  <Spinner variant="neonPurple" showLabel label="Syncing" />
  <Spinner variant="destructive" showLabel label="Purging" />
</div>`}>
              <div className="flex items-center justify-center gap-12 p-8">
                <Spinner variant="default" showLabel label="Loading" />
                <Spinner variant="neon" showLabel label="Decrypting" />
                <Spinner variant="neonPurple" showLabel label="Syncing" />
                <Spinner variant="destructive" showLabel label="Purging" />
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Sizes</h3>
            <Playground code={`<div className="flex gap-4 items-end">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
  <Spinner size="xl" />
</div>`}>
              <div className="flex items-end justify-center gap-8 p-8">
                <Spinner size="sm" variant="neon" />
                <Spinner size="md" variant="neon" />
                <Spinner size="lg" variant="neon" />
                <Spinner size="xl" variant="neon" />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'size', description: 'Size of the spinner.', type: '"sm" | "md" | "lg" | "xl"', defaultValue: '"md"' },
            { property: 'variant', description: 'Color and glow variant.', type: '"default" | "neon" | "neonPurple" | "destructive"', defaultValue: '"default"' },
            { property: 'label', description: 'Accessibility label text.', type: 'string', defaultValue: '"Loading..."' },
            { property: 'showLabel', description: 'Visually render the label text below the spinner.', type: 'boolean', defaultValue: 'false' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
