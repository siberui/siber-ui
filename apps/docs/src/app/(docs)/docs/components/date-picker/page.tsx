import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { DatePickerDemo, DatePickerNeonDemo } from './demo';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function DatePickerDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Date Picker"
        description="A field component that allows users to pick a date from a calendar popover."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`import { DatePicker } from "@siberui/react"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <DatePicker
      label="Date of Birth"
      value={date}
      onChange={setDate}
    />
  )
}`}>
              <div className="flex items-center justify-center p-8 h-80">
                <div className="w-full max-w-sm flex items-start h-full pt-8">
                  <DatePickerDemo />
                </div>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<DatePicker variant="neon" label="Execution Date" />`}>
              <div className="flex items-center justify-center p-8 h-80 bg-slate-900/30 rounded-xl">
                <div className="w-full max-w-sm flex items-start h-full pt-8">
                  <DatePickerNeonDemo />
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'value', description: 'The controlled date value.', type: 'Date' },
            { property: 'onChange', description: 'Event handler called when date changes.', type: '(date?: Date) => void' },
            { property: 'variant', description: 'Visual style for trigger and calendar.', type: '"default" | "neon" | "glass"' },
            { property: 'label', description: 'Label text.', type: 'string' },
            { property: 'error', description: 'Error state message.', type: 'string | boolean' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
