import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { TechLabel, SystemBadge, VERSION } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TechLabelDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tech Label"
        description="Small monospace metadata text — IDs, timestamps, technical values. Uppercase tracking is used here deliberately, as metadata, not as the default voice of the whole UI."
      />

      <ContentSection
        title="Examples"
        id="examples"
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Tones</h3>
            <Playground
              code={`<TechLabel tone="cyan">NODE_042 / LAST_SYNC 12:04:33Z</TechLabel>`}
            >
              <div className="flex flex-col gap-2 items-start">
                {(['neutral', 'cyan', 'violet', 'green', 'amber', 'rose'] as const).map(
                  (tone) => (
                    <TechLabel
                      key={tone}
                      tone={tone}
                    >
                      {tone.toUpperCase()} / METADATA_LABEL
                    </TechLabel>
                  ),
                )}
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">
              System Badge
            </h3>
            <Playground code={`<SystemBadge tone="cyan">BETA</SystemBadge>`}>
              <div className="flex flex-wrap gap-2 items-center justify-center">
                <SystemBadge tone="neutral">v{VERSION}</SystemBadge>
                <SystemBadge tone="cyan">BETA</SystemBadge>
                <SystemBadge tone="green">STABLE</SystemBadge>
                <SystemBadge tone="amber">DEPRECATED</SystemBadge>
                <SystemBadge tone="rose">BREAKING</SystemBadge>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="API Reference"
        id="api-reference"
      >
        <ApiTable
          props={[
            {
              property: 'tone',
              description: 'The color of the label text.',
              type: '"neutral" | "cyan" | "violet" | "green" | "amber" | "rose"',
              defaultValue: '"neutral"',
            },
            {
              property: 'as',
              description: 'The rendered element for TechLabel.',
              type: '"span" | "div" | "label"',
              defaultValue: '"span"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
