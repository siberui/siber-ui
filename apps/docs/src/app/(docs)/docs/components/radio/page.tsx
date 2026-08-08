import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { RadioGroup, Radio } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function RadioDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Radio Group"
        description="A set of checkable buttons where only one can be checked at a time."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<RadioGroup defaultValue="comfortable" label="Density">
  <Radio radioValue="default" label="Default" />
  <Radio radioValue="comfortable" label="Comfortable" />
  <Radio radioValue="compact" label="Compact" />
</RadioGroup>`}>
              <div className="flex items-center justify-center p-8">
                <RadioGroup defaultValue="comfortable" label="Density">
                  <Radio radioValue="default" label="Default" />
                  <Radio radioValue="comfortable" label="Comfortable" />
                  <Radio radioValue="compact" label="Compact" />
                </RadioGroup>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant & Descriptions</h3>
            <Playground code={`<RadioGroup defaultValue="server1" label="Select Node">
  <Radio variant="neon" radioValue="server1" label="US East" description="Low latency route." />
  <Radio variant="neon" radioValue="server2" label="EU West" description="Strict privacy laws." />
</RadioGroup>`}>
              <div className="flex flex-col items-center justify-center p-8 bg-slate-900/40 rounded-xl">
                <RadioGroup defaultValue="server1" label="Select Node">
                  <Radio variant="neon" radioValue="server1" label="US East" description="Low latency route." />
                  <Radio variant="neon" radioValue="server2" label="EU West" description="Strict privacy laws." />
                </RadioGroup>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Horizontal Orientation</h3>
            <Playground code={`<RadioGroup orientation="horizontal" defaultValue="a">
  <Radio radioValue="a" label="Option A" />
  <Radio radioValue="b" label="Option B" />
  <Radio radioValue="c" label="Option C" />
</RadioGroup>`}>
              <div className="flex items-center justify-center p-8">
                <RadioGroup orientation="horizontal" defaultValue="a">
                  <Radio radioValue="a" label="Option A" />
                  <Radio radioValue="b" label="Option B" />
                  <Radio radioValue="c" label="Option C" />
                </RadioGroup>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'orientation', description: 'RadioGroup: layout orientation.', type: '"horizontal" | "vertical"' },
            { property: 'variant', description: 'Radio: glow styling.', type: '"default" | "neon"' },
            { property: 'radioValue', description: 'Radio: The value of this specific radio item (required).', type: 'string' },
            { property: 'label', description: 'Radio/Group: Text label.', type: 'string' },
            { property: 'description', description: 'Radio: Secondary text.', type: 'string' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
