import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Badge } from '@siberui/react';
import { Activity } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function BadgeDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Badge"
        description="Displays a small visual indicator for status, counts, or categories."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Variants</h3>
            <Playground
              code={`<div className="flex gap-4">
  <Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="neon">Neon</Badge>
  <Badge variant="destructive">Destructive</Badge>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="neon">Neon</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">With Icons</h3>
            <Playground
              code={`<Badge variant="neon"><Activity className="w-3 h-3 mr-1" /> Active</Badge>`}
            >
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Badge variant="neon"><Activity className="w-3 h-3 mr-1" /> Active</Badge>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'variant',
              description: 'The visual style of the badge.',
              type: '"primary" | "secondary" | "neon" | "destructive" | "outline"',
              defaultValue: '"primary"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
