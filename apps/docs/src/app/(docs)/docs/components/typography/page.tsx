import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Heading, Text, GlitchText } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'glitch', text: 'Glitch Effect', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TypographyDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Typography"
        description="Text components with standard sizing and special cyberpunk effects."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Headings</h3>
            <Playground
              code={`<div className="flex flex-col gap-4">
  <Heading as="h1">SYSTEM OVERRIDE</Heading>
  <Heading as="h2">Initialize Sequence</Heading>
  <Heading as="h3">Network Status</Heading>
</div>`}
            >
              <div className="flex flex-col gap-4">
                <Heading as="h1">SYSTEM OVERRIDE</Heading>
                <Heading as="h2">Initialize Sequence</Heading>
                <Heading as="h3">Network Status</Heading>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Paragraphs</h3>
            <Playground
              code={`<Text as="p">
  The system has detected an anomaly in sector 7G. 
  Please verify security protocols.
</Text>`}
            >
              <Text as="p">
                The system has detected an anomaly in sector 7G. 
                Please verify security protocols.
              </Text>
            </Playground>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Glitch Effect" id="glitch">
        <p className="mb-4 text-slate-400">Add a dynamic cyberpunk glitch effect to important text elements.</p>
        <Playground
          code={`<GlitchText text="CRITICAL FAILURE" />`}
        >
          <div className="text-3xl font-bold font-mono text-rose-500">
            <GlitchText text="CRITICAL FAILURE" />
          </div>
        </Playground>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'as',
              description: 'The heading level or text element.',
              type: '"h1" | "h2" | "h3" | "h4" | "p" | "span"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
