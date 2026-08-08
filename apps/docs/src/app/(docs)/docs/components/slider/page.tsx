import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Slider } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SliderDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Slider"
        description="An input where the user selects a value from within a given range."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Default</h3>
            <Playground code={`<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />`}>
              <div className="flex w-full items-center justify-center">
                <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Slider variant="neon" defaultValue={[75]} max={100} step={1} className="w-[60%]" />`}>
              <div className="flex w-full items-center justify-center">
                <Slider variant="neon" defaultValue={[75]} max={100} step={1} className="w-[60%]" />
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
              description: 'The visual style variant.',
              type: '"default" | "neon"',
              defaultValue: '"default"',
            },
            {
              property: 'defaultValue',
              description: 'The value of the slider when initially rendered.',
              type: 'number[]',
            },
            {
              property: 'value',
              description: 'The controlled value of the slider.',
              type: 'number[]',
            },
            {
              property: 'onValueChange',
              description: 'Event handler called when the value changes.',
              type: '(value: number[]) => void',
            },
            {
              property: 'max',
              description: 'The maximum value for the range.',
              type: 'number',
              defaultValue: '100',
            },
            {
              property: 'step',
              description: 'The stepping interval.',
              type: 'number',
              defaultValue: '1',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
