import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose, Button } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function DrawerDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Drawer"
        description="A panel that slides in from the edge of the screen."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Directions</h3>
            <Playground code={`<Drawer direction="right">
  <DrawerTrigger asChild><Button>Open Right</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Settings</DrawerTitle>
      <DrawerDescription>Configure your workspace.</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`}>
              <div className="flex items-center justify-center gap-4 p-8 h-48">
                <Drawer direction="left">
                  <DrawerTrigger asChild><Button variant="outline">Left</Button></DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Navigation</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 flex-1">Menu items...</div>
                  </DrawerContent>
                </Drawer>
                
                <Drawer direction="right">
                  <DrawerTrigger asChild><Button variant="outline">Right</Button></DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Settings</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 flex-1">Config options...</div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="bottom">
                  <DrawerTrigger asChild><Button variant="outline">Bottom</Button></DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Console</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 flex-1 min-h-[200px]">Logs...</div>
                  </DrawerContent>
                </Drawer>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Drawer variant="neon" direction="right">...</Drawer>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl h-48">
                <Drawer variant="neon" direction="right">
                  <DrawerTrigger asChild><Button variant="neon">Inspect Node</Button></DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>NODE_DATA</DrawerTitle>
                      <DrawerDescription>Real-time metrics.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 flex-1 text-cyan-400/50 font-mono text-sm">
                      {'>'} Connection established.<br/>
                      {'>'} Receiving stream...
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Glass Variant</h3>
            <Playground code={`<Drawer variant="glass" direction="bottom">...</Drawer>`}>
              <div className="flex items-center justify-center p-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-slate-900 rounded-xl h-48 border border-white/5">
                <Drawer variant="glass" direction="bottom">
                  <DrawerTrigger asChild><Button variant="ghost">Open Drawer</Button></DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Quick Actions</DrawerTitle>
                      <DrawerDescription>Select a task.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 flex-1 min-h-[200px]">...</div>
                  </DrawerContent>
                </Drawer>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style propagated to DrawerContent.', type: '"default" | "neon" | "glass"' },
            { property: 'direction', description: 'Edge of the screen the drawer slides from.', type: '"top" | "bottom" | "left" | "right"', defaultValue: '"right"' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
