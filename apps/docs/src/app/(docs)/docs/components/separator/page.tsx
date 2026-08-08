import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Separator } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SeparatorDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Separator"
        description="Visually or semantically separates content."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none text-slate-200">System Logs</h4>
    <p className="text-sm text-slate-400">View recent activities.</p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm text-slate-400">
    <div>Access</div>
    <Separator orientation="vertical" />
    <div>Firewall</div>
    <Separator orientation="vertical" />
    <div>Intrusion</div>
  </div>
</div>`}>
              <div className="flex items-center justify-center p-8 w-full">
                <div className="w-full max-w-sm rounded-lg border border-white/10 p-6 bg-slate-950/50">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none text-slate-200">System Logs</h4>
                    <p className="text-sm text-slate-400">View recent activities.</p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-sm text-slate-400">
                    <div>Access</div>
                    <Separator orientation="vertical" />
                    <div>Firewall</div>
                    <Separator orientation="vertical" />
                    <div>Intrusion</div>
                  </div>
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'orientation',
              description: 'The orientation of the separator.',
              type: '"horizontal" | "vertical"',
              defaultValue: '"horizontal"',
            },
            {
              property: 'decorative',
              description: 'Whether the separator is purely decorative (aria-hidden).',
              type: 'boolean',
              defaultValue: 'true',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
