import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { FormField, Input } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function FormFieldDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Form Field"
        description="A wrapper component for managing form labels, validation errors, and helper text."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <p className="text-sm text-slate-400 mb-4">Note: SiberUI components like <code>Input</code> and <code>Select</code> already have this built-in via the <code>label</code> and <code>error</code> props. Use <code>FormField</code> when you need to wrap custom components.</p>
            <Playground code={`<FormField label="Custom Component" helperText="Wraps any child element.">
  <div className="h-10 w-full rounded border border-white/10 bg-white/5 p-2 text-sm text-slate-300">
    Custom Input Area
  </div>
</FormField>`}>
              <div className="flex items-center justify-center p-8 w-full max-w-sm mx-auto">
                <FormField label="Custom Component" helperText="Wraps any child element.">
                  <div className="h-10 w-full rounded border border-white/10 bg-white/5 p-2 text-sm text-slate-300 flex items-center">
                    Custom Input Area
                  </div>
                </FormField>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Required & Error States</h3>
            <Playground code={`<FormField label="Email" required error="Email is already in use.">
  <Input defaultValue="hacker@matrix.com" error />
</FormField>`}>
              <div className="flex items-center justify-center p-8 w-full max-w-sm mx-auto">
                <FormField label="Email" required error="Email is already in use.">
                  <Input defaultValue="hacker@matrix.com" error />
                </FormField>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'label', description: 'Text rendered above the child.', type: 'string' },
            { property: 'error', description: 'Error state and message. Replaces helperText if present.', type: 'string | boolean' },
            { property: 'helperText', description: 'Helper text rendered below the child.', type: 'string' },
            { property: 'required', description: 'Adds a cyan dot indicator next to the label.', type: 'boolean' },
            { property: 'disabled', description: 'Dims the entire form field wrapper.', type: 'boolean' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
