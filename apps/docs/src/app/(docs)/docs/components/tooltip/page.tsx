import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { SimpleTooltip, Button } from '@siberui/react';
import { Info } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TooltipDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tooltip"
        description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<SimpleTooltip label="Add to library">
  <Button variant="outline">Hover</Button>
</SimpleTooltip>`}>
              <div className="flex items-center justify-center p-8 h-32">
                <SimpleTooltip label="Add to library">
                  <Button variant="outline">Hover</Button>
                </SimpleTooltip>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Cyber Variants</h3>
            <Playground code={`<div className="flex gap-4">
  <SimpleTooltip variant="neon" label="SYSLOG ACTIVE">
    <Button variant="neon"><Info className="w-4 h-4" /></Button>
  </SimpleTooltip>
  <SimpleTooltip variant="destructive" label="DANGER">
    <Button variant="destructive"><Info className="w-4 h-4" /></Button>
  </SimpleTooltip>
</div>`}>
              <div className="flex items-center justify-center gap-8 p-8 h-32 bg-slate-900/30 rounded-xl">
                <SimpleTooltip variant="neon" label="SYSLOG ACTIVE">
                  <Button variant="neon" size="icon"><Info className="w-4 h-4" /></Button>
                </SimpleTooltip>
                <SimpleTooltip variant="destructive" label="DANGER - WIPE CORE">
                  <Button variant="destructive" size="icon"><Info className="w-4 h-4" /></Button>
                </SimpleTooltip>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'label', description: 'The text or React Node to display in the tooltip.', type: 'ReactNode' },
            { property: 'variant', description: 'Visual style.', type: '"default" | "neon" | "neonPurple" | "destructive"' },
            { property: 'side', description: 'Preferred position.', type: '"top" | "right" | "bottom" | "left"' },
            { property: 'showArrow', description: 'Whether to show the pointing arrow.', type: 'boolean', defaultValue: 'true' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
