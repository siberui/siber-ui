import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { ThreatIndicator } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ThreatIndicatorDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Threat Indicator"
        description="A specialized component for displaying threat levels and security status."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Threat Levels</h3>
            <Playground code={`<div className="flex gap-4">
  <ThreatIndicator level="low" value={15} label="SEC-1" />
  <ThreatIndicator level="medium" value={45} label="SEC-2" />
  <ThreatIndicator level="high" value={82} label="SEC-3" />
  <ThreatIndicator level="critical" value={98} label="SEC-4" />
</div>`}>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <ThreatIndicator level="low" value={15} label="SEC-1" />
                <ThreatIndicator level="medium" value={45} label="SEC-2" />
                <ThreatIndicator level="high" value={82} label="SEC-3" />
                <ThreatIndicator level="critical" value={98} label="SEC-4" />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'value',
              description: 'The progress percentage (0-100).',
              type: 'number',
            },
            {
              property: 'level',
              description: 'The threat severity level which determines the color.',
              type: '"low" | "medium" | "high" | "critical"',
              defaultValue: '"low"',
            },
            {
              property: 'label',
              description: 'Optional label displayed below the percentage.',
              type: 'string',
            },
            {
              property: 'size',
              description: 'The size of the indicator.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
