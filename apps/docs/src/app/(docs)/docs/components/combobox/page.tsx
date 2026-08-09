import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { ComboboxDemo, ComboboxNeonDemo } from './demo';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ComboboxDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Combobox"
        description="Autocomplete input and command palette with a list of suggestions."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`export function ComboboxDemo() {
  const [value, setValue] = React.useState("");
  
  return (
    <Combobox
      label="Framework"
      placeholder="Select framework..."
      searchPlaceholder="Search frameworks..."
      options={frameworks}
      value={value}
      onChange={setValue}
    />
  );
}`}>
              <div className="flex items-center justify-center p-8 h-[300px]">
                <div className="w-full max-w-sm flex items-start h-full pt-8">
                  <ComboboxDemo />
                </div>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <p className="text-sm text-slate-400 mb-4">Combobox uses the Command palette under the hood, so it automatically inherits the Neon styling for both the trigger and the popup.</p>
            <Playground code={`<Combobox variant="neon" label="Command" />`}>
              <div className="flex items-center justify-center p-8 h-[300px] bg-slate-900/50 rounded-xl border border-border-hairline">
                <div className="w-full max-w-sm flex items-start h-full pt-8">
                  <ComboboxNeonDemo />
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'options', description: 'Array of { value: string, label: string } objects.', type: 'ComboboxOption[]' },
            { property: 'value', description: 'The controlled value.', type: 'string' },
            { property: 'onChange', description: 'Event handler called when value changes.', type: '(value: string) => void' },
            { property: 'variant', description: 'Visual style for trigger and dropdown.', type: '"default" | "neon" | "glass"' },
            { property: 'searchPlaceholder', description: 'Placeholder for the internal search input.', type: 'string' },
            { property: 'emptyText', description: 'Text to display when no results are found.', type: 'string' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
