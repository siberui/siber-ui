import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { ScrollArea, ScrollBar, Card, CardContent } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ScrollAreaDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Scroll Area"
        description="Augments native scroll functionality for custom, cross-browser styling."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Vertical Scrolling</h3>
            <Playground code={`<ScrollArea className="h-[200px] w-[350px] rounded-md border border-border-hairline p-4">
  <div className="text-sm text-slate-300">
    {/* Long content here */}
  </div>
</ScrollArea>`}>
              <div className="flex items-center justify-center p-8">
                <ScrollArea className="h-[200px] w-[350px] rounded-md border border-border-hairline bg-slate-950/50 p-4">
                  <h4 className="mb-4 font-mono text-sm font-bold text-cyan-400">Terminal Log</h4>
                  <div className="space-y-4 text-sm text-slate-400 font-mono leading-relaxed">
                    <p>SYSTEM INITIALIZATION [OK]</p>
                    <p>LOADING KERNEL MODULES... [OK]</p>
                    <p>MOUNTING VIRTUAL FILESYSTEM... [OK]</p>
                    <p>STARTING NETWORK INTERFACES... [OK]</p>
                    <p>ESTABLISHING SECURE CONNECTION TO NODE ALPHA...</p>
                    <p>HANDSHAKE SUCCESSFUL.</p>
                    <p>AUTHENTICATING USER CREDENTIALS...</p>
                    <p className="text-emerald-400">ACCESS GRANTED.</p>
                    <p>WELCOME TO SIBER-UI TERMINAL V2.4</p>
                    <p>TYPE &apos;help&apos; FOR A LIST OF COMMANDS.</p>
                  </div>
                </ScrollArea>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Horizontal Scrolling</h3>
            <Playground code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border border-border-hairline">
  <div className="flex w-max space-x-4 p-4">
    {/* Horizontal items here */}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}>
              <div className="flex items-center justify-center p-8">
                <ScrollArea className="w-96 whitespace-nowrap rounded-md border border-border-hairline bg-slate-950/50">
                  <div className="flex w-max space-x-4 p-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <Card key={item} variant="interactive" className="w-[150px] h-[100px] flex items-center justify-center">
                        <CardContent className="p-0 text-cyan-400 font-bold">Node {item}</CardContent>
                      </Card>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
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
              description: 'The orientation of the scrollbar (on ScrollBar component).',
              type: '"vertical" | "horizontal"',
              defaultValue: '"vertical"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
