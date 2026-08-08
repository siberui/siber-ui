import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverFooter, Button, Input, FormField } from '@siberui/react';
import { Settings2 } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function PopoverDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Popover"
        description="Displays rich content in a portal, triggered by a button."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline"><Settings2 className="mr-2 h-4 w-4"/> Adjust</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <h4 className="font-medium leading-none text-white">Dimensions</h4>
      <p className="text-sm text-slate-400">Set the dimensions for the layer.</p>
    </PopoverHeader>
    <div className="grid gap-4 p-4">
      <FormField label="Width"><Input defaultValue="100%" className="h-8" /></FormField>
      <FormField label="Height"><Input defaultValue="25px" className="h-8" /></FormField>
    </div>
  </PopoverContent>
</Popover>`}>
              <div className="flex items-center justify-center p-8 h-80">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline"><Settings2 className="mr-2 h-4 w-4"/> Adjust</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader>
                      <h4 className="font-medium leading-none text-white">Dimensions</h4>
                      <p className="text-sm text-slate-400">Set the dimensions for the layer.</p>
                    </PopoverHeader>
                    <div className="grid gap-4 p-4">
                      <FormField label="Width"><Input defaultValue="100%" className="h-8" /></FormField>
                      <FormField label="Height"><Input defaultValue="25px" className="h-8" /></FormField>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Popover variant="neon">
  <PopoverTrigger asChild><Button variant="neon">Terminal Config</Button></PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <h4 className="font-mono text-cyan-300">CFG_WIDGET</h4>
    </PopoverHeader>
    <div className="p-4 text-xs font-mono text-cyan-400/70">
      Options loaded.
    </div>
    <PopoverFooter>
      <Button size="sm" variant="neon">Apply</Button>
    </PopoverFooter>
  </PopoverContent>
</Popover>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl h-80">
                <Popover variant="neon">
                  <PopoverTrigger asChild>
                    <Button variant="neon">Terminal Config</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader>
                      <h4 className="font-mono text-cyan-300">CFG_WIDGET</h4>
                    </PopoverHeader>
                    <div className="p-4 text-xs font-mono text-cyan-400/70 h-20">
                      {'>'} Loading options...<br/>
                      {'>'} Ready.
                    </div>
                    <PopoverFooter>
                      <Button size="sm" variant="neon">Apply</Button>
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style for the popover content.', type: '"default" | "neon" | "glass"' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
