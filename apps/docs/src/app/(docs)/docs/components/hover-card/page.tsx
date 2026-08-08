import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { HoverCard, HoverCardTrigger, HoverCardContent, Avatar } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function HoverCardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Hover Card"
        description="For sighted users to preview content available behind a link."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<HoverCard>
  <HoverCardTrigger asChild>
    <a href="#" className="font-medium text-cyan-400 hover:underline">@siberui</a>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar name="Siber UI" />
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-white">Siber UI</h4>
        <p className="text-sm text-slate-400">
          The minimalist cyberpunk UI library for React.
        </p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}>
              <div className="flex items-center justify-center p-8 h-48">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="#" className="font-medium text-cyan-400 hover:underline outline-none">@siberui</a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar name="Siber UI" ring="cyan" size="lg" />
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">Siber UI</h4>
                        <p className="text-sm text-slate-400">
                          The minimalist cyberpunk UI library for React.
                        </p>
                        <div className="flex items-center pt-2">
                          <span className="text-xs text-slate-500">Joined December 2024</span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'align', description: 'The preferred alignment against the trigger.', type: '"start" | "center" | "end"', defaultValue: '"center"' },
            { property: 'sideOffset', description: 'The distance in pixels from the trigger.', type: 'number', defaultValue: '4' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
