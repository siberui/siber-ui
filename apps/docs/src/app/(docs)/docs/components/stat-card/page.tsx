import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { StatCard } from '@siberui/react';
import { Users, Activity, Code, Bug } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function StatCardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Stat Card"
        description="A minimal data display card for key metrics and telemetry."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <StatCard 
    label="Contributions" 
    value="1,204" 
    subtext="+12% this month" 
    icon={<Code className="w-4 h-4" />} 
    color="cyan"
  />
  <StatCard 
    label="Total Users" 
    value="12.4K" 
    subtext="Active in last 24h" 
    icon={<Users className="w-4 h-4" />} 
    color="purple"
  />
  <StatCard 
    label="System Uptime" 
    value="99.9%" 
    subtext="All systems operational" 
    icon={<Activity className="w-4 h-4" />} 
    color="emerald"
  />
  <StatCard 
    label="Open Issues" 
    value="14" 
    subtext="3 critical bugs" 
    icon={<Bug className="w-4 h-4" />} 
    color="amber"
  />
</div>`}>
              <div className="flex items-center justify-center p-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <StatCard 
                    label="Contributions" 
                    value="1,204" 
                    subtext="+12% this month" 
                    icon={<Code className="w-4 h-4" />} 
                    color="cyan"
                  />
                  <StatCard 
                    label="Total Users" 
                    value="12.4K" 
                    subtext="Active in last 24h" 
                    icon={<Users className="w-4 h-4" />} 
                    color="purple"
                  />
                  <StatCard 
                    label="System Uptime" 
                    value="99.9%" 
                    subtext="All systems operational" 
                    icon={<Activity className="w-4 h-4" />} 
                    color="emerald"
                  />
                  <StatCard 
                    label="Open Issues" 
                    value="14" 
                    subtext="3 critical bugs" 
                    icon={<Bug className="w-4 h-4" />} 
                    color="amber"
                  />
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-lg font-medium text-slate-200 mb-4">StatCard</h3>
        <ApiTable
          props={[
            {
              property: 'label',
              description: 'The title/label of the statistic.',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'value',
              description: 'The main metric value.',
              type: 'string | number',
              defaultValue: 'undefined',
            },
            {
              property: 'subtext',
              description: 'Optional descriptive text below the value.',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'icon',
              description: 'Optional React node for the icon.',
              type: 'React.ReactNode',
              defaultValue: 'undefined',
            },
            {
              property: 'color',
              description: 'The accent color for the value and icon.',
              type: '"cyan" | "purple" | "emerald" | "amber"',
              defaultValue: '"cyan"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
