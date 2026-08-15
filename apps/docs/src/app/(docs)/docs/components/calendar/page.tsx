'use client';

import * as React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  Calendar,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';

interface DateRange {
  from: Date | undefined;
  to?: Date;
}

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Single Date Selection', level: 2 },
  { id: 'date-range', text: 'Date Range Window Selection', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Chrono-Calendar', level: 2 },
  { id: 'frosted-glass-calendar', text: 'Frosted Cyber-Glass Epoch Scheduler', level: 2 },
  { id: 'tactical-hud-scheduler', text: 'Tactical HUD Mission Epoch Scheduler Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function CalendarDocsPage() {
  const [singleDate, setSingleDate] = React.useState<Date | undefined>(() => new Date(2025, 5, 15));
  const [rangeDate, setRangeDate] = React.useState<DateRange | undefined>(() => ({
    from: new Date(2025, 5, 10),
    to: new Date(2025, 5, 18),
  }));
  const [neonDate, setNeonDate] = React.useState<Date | undefined>(() => new Date(2025, 5, 15));
  const [glassDate, setGlassDate] = React.useState<Date | undefined>(() => new Date(2025, 5, 15));

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Calendar"
        description="Date picker grid component built on react-day-picker, featuring single date or range selection, illuminated cybernetic neon cells, and acrylic glass themes."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock
          code={`import { Calendar } from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Single Date Selection" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">mode=&quot;single&quot;</code> to bind a single selected <code className="text-cyan-400">Date</code> object.
          </p>

          <Playground
            code={`const [date, setDate] = React.useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`}
          >
            <div className="flex flex-col items-center gap-4 p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Calendar
                mode="single"
                selected={singleDate}
                onSelect={setSingleDate}
              />
              <span className="text-xs font-mono text-cyan-400">
                Selected Epoch: {singleDate ? singleDate.toLocaleDateString() : 'None'}
              </span>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Date Range ── */}
      <ContentSection title="Date Range Window Selection" id="date-range">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Set <code className="text-cyan-400">mode=&quot;range&quot;</code> to select telemetry acquisition intervals across multiple calendar days.
          </p>

          <Playground
            code={`const [range, setRange] = React.useState<DateRange | undefined>({
  from: new Date(),
  to: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
});

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
/>`}
          >
            <div className="flex flex-col items-center gap-4 p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Calendar
                mode="range"
                selected={rangeDate}
                onSelect={setRangeDate}
              />
              <span className="text-xs font-mono text-slate-400">
                Window: {rangeDate?.from?.toLocaleDateString()} &rarr; {rangeDate?.to?.toLocaleDateString() ?? '...'}
              </span>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Chrono-Calendar" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser cell highlights, glowing active rings, and monospace day numbers.
          </p>

          <Playground
            code={`<Calendar
  variant="neon"
  mode="single"
  selected={neonDate}
  onSelect={setNeonDate}
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Calendar
                variant="neon"
                mode="single"
                selected={neonDate}
                onSelect={setNeonDate}
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Epoch Scheduler ── */}
      <ContentSection title="Frosted Cyber-Glass Epoch Scheduler" id="frosted-glass-calendar">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite calendar layered over circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center">
  <Calendar
    variant="glass"
    mode="single"
    selected={glassDate}
    onSelect={setGlassDate}
  />
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <div className="relative z-10">
                <Calendar
                  variant="glass"
                  mode="single"
                  selected={glassDate}
                  onSelect={setGlassDate}
                />
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Mission Epoch Scheduler Card ── */}
      <ContentSection title="Tactical HUD Mission Epoch Scheduler Card" id="tactical-hud-scheduler">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card embedding the chrono-scheduler.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">MISSION ORBITAL EPOCH</CardTitle>
      <Badge variant="neon" size="sm">CALIBRATED</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Set target satellite flyby and ingestion window.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 flex justify-center">
    <Calendar
      variant="neon"
      mode="single"
      selected={neonDate}
      onSelect={setNeonDate}
    />
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">MISSION ORBITAL EPOCH</CardTitle>
                    <Badge variant="neon" size="sm">CALIBRATED</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Set target satellite flyby and ingestion window.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 flex justify-center">
                  <Calendar
                    variant="neon"
                    mode="single"
                    selected={neonDate}
                    onSelect={setNeonDate}
                  />
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'mode',
              description: 'Selection mode ("single", "range", or "multiple").',
              type: '"single" | "range" | "multiple"',
              defaultValue: '"single"',
            },
            {
              property: 'selected',
              description: 'The selected date or date range.',
              type: 'Date | DateRange | Date[]',
            },
            {
              property: 'onSelect',
              description: 'Callback fired when a date cell is clicked.',
              type: '(date: any) => void',
            },
            {
              property: 'variant',
              description: 'Visual theme for the calendar surface and cell highlights.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'showOutsideDays',
              description: 'Whether days from adjacent months are displayed.',
              type: 'boolean',
              defaultValue: 'true',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>WAI-ARIA Date Picker:</strong> Utilizes React DayPicker with full keyboard arrow navigation across days, weeks, and month captions with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-selected</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Popover Pairing:</strong> For compact form fields, combine <code className="text-cyan-400">Calendar</code> with <code className="text-cyan-400">Popover</code> or use the integrated <code className="text-cyan-400">DatePicker</code> component.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
