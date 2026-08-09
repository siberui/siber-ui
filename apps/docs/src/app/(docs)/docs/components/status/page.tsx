import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Status, StatusDot, StatusBadge, StatusIndicator, SystemState } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

const allStates = [
  'online',
  'offline',
  'idle',
  'loading',
  'warning',
  'critical',
  'unknown',
] as const;

export default function StatusDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Status"
        description="A single source of truth for state → color → label mapping across the whole library. Animation (pulse) is opt-in and only meaningful for live states."
      />

      <ContentSection
        title="Examples"
        id="examples"
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">StatusDot</h3>
            <Playground code={`<StatusDot state="online" />`}>
              <div className="flex items-center gap-4 justify-center">
                {allStates.map((state) => (
                  <StatusDot
                    key={state}
                    state={state}
                  />
                ))}
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">
              StatusBadge
            </h3>
            <Playground code={`<StatusBadge state="online" />`}>
              <div className="flex flex-wrap gap-3 justify-center">
                {allStates.map((state) => (
                  <StatusBadge
                    key={state}
                    state={state}
                  />
                ))}
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">
              StatusIndicator
            </h3>
            <Playground code={`<StatusIndicator state="loading" />`}>
              <div className="flex flex-col gap-3 items-start">
                {allStates.map((state) => (
                  <StatusIndicator
                    key={state}
                    state={state}
                  />
                ))}
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">
              Status with description
            </h3>
            <Playground
              code={`<Status state="critical" label="Node unreachable" description="Last heartbeat 4 minutes ago." />`}
            >
              <div className="flex justify-center">
                <Status
                  state="critical"
                  label="Node unreachable"
                  description="Last heartbeat 4 minutes ago — check network partition."
                  className="max-w-xs"
                />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">
              SystemState rows
            </h3>
            <Playground
              code={`<SystemState label="Uptime" value="14d 06h" state="online" />`}
            >
              <div className="flex justify-center">
                <div className="w-80 rounded-lg border border-border-hairline bg-surface-1 px-4">
                  <SystemState
                    label="Uptime"
                    value="14d 06h"
                    state="online"
                  />
                  <SystemState
                    label="Region"
                    value="eu-central-1"
                  />
                  <SystemState
                    label="Latency"
                    value="212ms"
                    state="warning"
                  />
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="API Reference"
        id="api-reference"
      >
        <ApiTable
          props={[
            {
              property: 'state',
              description: 'The semantic state to render.',
              type: '"online" | "offline" | "idle" | "loading" | "warning" | "critical" | "unknown"',
              defaultValue: '"unknown"',
            },
            {
              property: 'pulse',
              description:
                'Animate the dot. Defaults to true for online/loading/critical.',
              type: 'boolean',
              defaultValue: 'undefined',
            },
            {
              property: 'label',
              description: 'Override the default state label.',
              type: 'React.ReactNode',
              defaultValue: 'undefined',
            },
            {
              property: 'description',
              description: '(Status only) Secondary supporting text.',
              type: 'React.ReactNode',
              defaultValue: 'undefined',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
