import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Switch } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SwitchDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Default</h3>
            <Playground code={`<div className="flex items-center space-x-2">
  <Switch id="defense-mode" />
  <label htmlFor="defense-mode" className="text-sm font-medium text-slate-200">
    Active Defense System
  </label>
</div>`}>
              <div className="flex items-center space-x-2">
                <Switch id="defense-mode" />
                <label htmlFor="defense-mode" className="text-sm font-medium text-slate-200 cursor-pointer">
                  Active Defense System
                </label>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Switch variant="neon" defaultChecked />`}>
              <div className="flex items-center space-x-2">
                <Switch variant="neon" id="neon-mode" defaultChecked />
                <label htmlFor="neon-mode" className="text-sm font-medium text-slate-200 cursor-pointer">
                  Overclock
                </label>
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
              property: 'checked',
              description: 'The controlled checked state.',
              type: 'boolean',
            },
            {
              property: 'onCheckedChange',
              description: 'Event handler called when the state changes.',
              type: '(checked: boolean) => void',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
