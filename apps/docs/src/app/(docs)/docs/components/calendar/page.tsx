import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { CalendarDemo, CalendarNeonDemo } from './demo';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function CalendarDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Calendar"
        description="A date field component that allows users to enter and edit date."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`import { Calendar } from "@siberui/react"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
}`}>
              <div className="flex items-center justify-center p-8">
                <CalendarDemo />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Calendar variant="neon" mode="single" selected={date} onSelect={setDate} />`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl">
                <CalendarNeonDemo />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style for the calendar.', type: '"default" | "neon" | "glass"' },
            { property: 'mode', description: 'Selection mode (from react-day-picker).', type: '"single" | "multiple" | "range"' },
            { property: 'selected', description: 'The selected date(s).', type: 'Date | Date[] | DateRange' },
            { property: 'onSelect', description: 'Event handler called when date is selected.', type: '(date: Date) => void' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
