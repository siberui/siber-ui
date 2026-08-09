import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Select } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SelectDocsPage() {
  const basicOptions = [
    { value: 'us-east', label: 'US East (N. Virginia)' },
    { value: 'us-west', label: 'US West (Oregon)' },
    { value: 'eu-central', label: 'EU Central (Frankfurt)' },
  ];

  const groupedOptions = [
    {
      label: 'North America',
      options: [
        { value: 'us-east', label: 'US East' },
        { value: 'us-west', label: 'US West' },
      ]
    },
    {
      label: 'Europe',
      options: [
        { value: 'eu-central', label: 'EU Central' },
        { value: 'eu-west', label: 'EU West' },
      ]
    }
  ];

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Select"
        description="Displays a list of options for the user to pick from, triggered by a button."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Select 
  label="Region" 
  placeholder="Select a region" 
  options={[
    { value: 'us-east', label: 'US East' },
    { value: 'eu-central', label: 'EU Central' }
  ]} 
/>`}>
              <div className="flex items-center justify-center p-8 w-full max-w-sm mx-auto">
                <Select 
                  label="Region" 
                  placeholder="Select a region" 
                  options={basicOptions} 
                />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Grouped Options</h3>
            <Playground code={`<Select 
  label="Server Location" 
  options={[
    { label: 'North America', options: [...] },
    { label: 'Europe', options: [...] }
  ]} 
/>`}>
              <div className="flex items-center justify-center p-8 w-full max-w-sm mx-auto">
                <Select 
                  label="Server Location" 
                  options={groupedOptions} 
                />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Select variant="neon" label="Model" options={...} />`}>
              <div className="flex items-center justify-center p-8 w-full max-w-sm mx-auto bg-slate-900/40 rounded-xl border border-border-hairline">
                <Select 
                  variant="neon"
                  label="AI Model" 
                  placeholder="Select model..."
                  options={[
                    { value: 'v1', label: 'Cyber-GPT v1' },
                    { value: 'v2', label: 'Cyber-GPT v2' },
                  ]} 
                />
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">States</h3>
            <Playground code={`<div className="flex flex-col gap-4">
  <Select error="Invalid selection." options={...} />
  <Select success options={...} />
</div>`}>
              <div className="flex flex-col gap-6 items-center justify-center p-8 w-full max-w-sm mx-auto">
                <Select error="Service is currently down." placeholder="US East" options={basicOptions} />
                <Select success placeholder="EU Central" options={basicOptions} />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'options', description: 'Array of SelectOption or SelectOptionGroup.', type: '(SelectOption | SelectOptionGroup)[]' },
            { property: 'variant', description: 'Visual style.', type: '"default" | "neon" | "ghost"' },
            { property: 'label', description: 'Text rendered above the select.', type: 'string' },
            { property: 'error', description: 'Error state and message.', type: 'string | boolean' },
            { property: 'success', description: 'Success outline state.', type: 'boolean' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
