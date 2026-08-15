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
  DatePicker,
  Button,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Controlled Date State', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Date Picker', level: 2 },
  { id: 'validation-states', text: 'Validation States (Error & Success)', level: 2 },
  { id: 'sizes', text: 'Size Spectrum (Small, Medium, Large)', level: 2 },
  { id: 'frosted-glass-picker', text: 'Frosted Cyber-Glass Epoch Input', level: 2 },
  { id: 'tactical-hud-card', text: 'Tactical HUD Mission Launch Epoch Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function DatePickerDocsPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [neonDate, setNeonDate] = React.useState<Date | undefined>(new Date());
  const [glassDate, setGlassDate] = React.useState<Date | undefined>(new Date());

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Date Picker"
        description="Unified popover date field combining an accessible formatted text input trigger with an interactive Cyber Calendar overlay."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock
          code={`import { DatePicker } from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Controlled Date State" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            DatePicker renders a trigger button with human-readable date formatting that reveals an anchored calendar popover upon click.
          </p>

          <Playground
            code={`const [date, setDate] = React.useState<Date | undefined>(new Date());

<DatePicker
  label="DEPLOYMENT EPOCH"
  value={date}
  onChange={setDate}
  helperText="Select target deployment timeline."
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[160px]">
              <div className="w-full max-w-sm">
                <DatePicker
                  label="DEPLOYMENT EPOCH"
                  value={date}
                  onChange={setDate}
                  helperText="Select target deployment timeline."
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Date Picker" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser wire outlines, monospace font rendering, and coordinated calendar popover styles.
          </p>

          <Playground
            code={`<DatePicker
  variant="neon"
  label="ORBITAL_WINDOW_TIMESTAMP"
  value={neonDate}
  onChange={setNeonDate}
  helperText="Synchronized to UTC clock."
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-h-[160px]">
              <div className="w-full max-w-sm">
                <DatePicker
                  variant="neon"
                  label="ORBITAL_WINDOW_TIMESTAMP"
                  value={neonDate}
                  onChange={setNeonDate}
                  helperText="Synchronized to UTC clock."
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Validation States ── */}
      <ContentSection title="Validation States (Error & Success)" id="validation-states">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Communicate field validity with <code className="text-rose-400">error</code> or <code className="text-emerald-400">success</code> props.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
  <DatePicker
    label="MAINTENANCE EPOCH"
    error="Blackout window conflict"
    value={date}
  />
  <DatePicker
    label="VERIFIED TIME SLOT"
    success
    value={date}
    helperText="Telemetry window confirmed."
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
                <DatePicker
                  label="MAINTENANCE EPOCH"
                  error="Blackout window conflict"
                  value={date}
                />
                <DatePicker
                  label="VERIFIED TIME SLOT"
                  success
                  value={date}
                  helperText="Telemetry window confirmed."
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Size Spectrum (Small, Medium, Large)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Match surrounding form inputs with <code className="text-cyan-400">inputSize=&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code>.
          </p>

          <Playground
            code={`<div className="space-y-4 w-full max-w-sm">
  <DatePicker inputSize="sm" label="SMALL (SM)" />
  <DatePicker inputSize="md" label="MEDIUM (MD)" />
  <DatePicker inputSize="lg" label="LARGE (LG)" />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="space-y-4 w-full max-w-sm">
                <DatePicker inputSize="sm" label="SMALL (SM)" />
                <DatePicker inputSize="md" label="MEDIUM (MD)" />
                <DatePicker inputSize="lg" label="LARGE (LG)" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Epoch Input ── */}
      <ContentSection title="Frosted Cyber-Glass Epoch Input" id="frosted-glass-picker">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite date picker layered over circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <DatePicker
    variant="glass"
    label="SATELLITE INGEST EPOCH"
    value={glassDate}
    onChange={setGlassDate}
  />
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full min-h-[180px]">
              <div className="relative z-10 w-full max-w-sm">
                <DatePicker
                  variant="glass"
                  label="SATELLITE INGEST EPOCH"
                  value={glassDate}
                  onChange={setGlassDate}
                />
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Mission Launch Epoch Card ── */}
      <ContentSection title="Tactical HUD Mission Launch Epoch Card" id="tactical-hud-card">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with integrated date input.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">LAUNCH SCHEDULE MATRIX</CardTitle>
      <Badge variant="neon" size="sm">ARMED</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Configure zero-day mission countdown start date.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <DatePicker
      variant="neon"
      label="COUNTDOWN START DATE"
      value={neonDate}
      onChange={setNeonDate}
    />
    <Button variant="neon" glow className="w-full">
      LOCK MISSION SCHEDULE
    </Button>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">LAUNCH SCHEDULE MATRIX</CardTitle>
                    <Badge variant="neon" size="sm">ARMED</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Configure zero-day mission countdown start date.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <DatePicker
                    variant="neon"
                    label="COUNTDOWN START DATE"
                    value={neonDate}
                    onChange={setNeonDate}
                  />
                  <Button variant="neon" glow className="w-full">
                    LOCK MISSION SCHEDULE
                  </Button>
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
              property: 'value',
              description: 'Controlled Date object.',
              type: 'Date',
            },
            {
              property: 'onChange',
              description: 'Callback fired when date is selected in the popover calendar.',
              type: '(date?: Date) => void',
            },
            {
              property: 'variant',
              description: 'Visual theme for both input trigger and calendar popover.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'inputSize',
              description: 'Height and typography size of the trigger button.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'label',
              description: 'Uppercase label rendered above the date picker trigger.',
              type: 'string',
            },
            {
              property: 'helperText',
              description: 'Sub-label helper caption rendered beneath the trigger.',
              type: 'string',
            },
            {
              property: 'error',
              description: 'Error state boolean or error message string.',
              type: 'string | boolean',
            },
            {
              property: 'success',
              description: 'Success validation state boolean.',
              type: 'boolean',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>HTML Label Linking:</strong> When <code className="text-cyan-400">label</code> is supplied, it is automatically associated with the trigger button via <code className="text-cyan-400">htmlFor</code> and unique identifier generation.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Form Consistency:</strong> Use the same <code className="text-cyan-400">inputSize</code> as surrounding text inputs for aligned form rows.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
