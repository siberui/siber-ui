import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Checkbox } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function CheckboxDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Checkbox label="Accept terms and conditions" />`}>
              <div className="flex items-center justify-center p-8">
                <Checkbox label="Accept terms and conditions" />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">With Description</h3>
            <Playground code={`<Checkbox
  label="Enable Notifications"
  description="Receive alerts about network anomalies."
/>`}>
              <div className="flex items-center justify-center p-8">
                <Checkbox
                  label="Enable Notifications"
                  description="Receive alerts about network anomalies."
                />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variants</h3>
            <Playground code={`<div className="flex flex-col gap-4">
  <Checkbox variant="neon" label="Cyan Mode" defaultChecked />
  <Checkbox variant="neonPurple" label="Purple Mode" defaultChecked />
  <Checkbox variant="neonGreen" label="Green Mode" defaultChecked />
</div>`}>
              <div className="flex flex-col gap-6 items-center justify-center p-8 bg-slate-900/40 rounded-xl">
                <Checkbox variant="neon" label="Cyan Mode" defaultChecked />
                <Checkbox variant="neonPurple" label="Purple Mode" defaultChecked />
                <Checkbox variant="neonGreen" label="Green Mode" defaultChecked />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Indeterminate State</h3>
            <Playground code={`<Checkbox indeterminate label="Select All Logs" />`}>
              <div className="flex items-center justify-center p-8">
                <Checkbox indeterminate label="Select All Logs" />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Color and glow styling.', type: '"default" | "neon" | "neonPurple" | "neonGreen"' },
            { property: 'checkboxSize', description: 'Size of the checkbox square.', type: '"sm" | "md" | "lg"' },
            { property: 'label', description: 'Text label rendered next to the checkbox.', type: 'string' },
            { property: 'description', description: 'Secondary text rendered below the label.', type: 'string' },
            { property: 'indeterminate', description: 'Forces the indeterminate (minus) icon state.', type: 'boolean' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
