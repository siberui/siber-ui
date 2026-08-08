import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Button, Input, FormField } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function DialogDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Dialog"
        description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <FormField label="Username"><Input defaultValue="@hacker" /></FormField>
    </div>
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}>
              <div className="flex items-center justify-center p-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <FormField label="Username"><Input defaultValue="@hacker" /></FormField>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
                      <Button>Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="neon">System Config</Button>
  </DialogTrigger>
  <DialogContent variant="neon">
    <DialogHeader>
      <DialogTitle className="font-mono text-cyan-400">SYS_CONFIG</DialogTitle>
      <DialogDescription>Override core firewall rules.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="neon">Execute</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="neon">System Config</Button>
                  </DialogTrigger>
                  <DialogContent variant="neon">
                    <DialogHeader>
                      <DialogTitle className="font-mono text-cyan-400">SYS_CONFIG</DialogTitle>
                      <DialogDescription>Override core firewall rules.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4 text-cyan-500/50 text-xs font-mono">
                      [WARN] Modifying these values may expose the network.
                    </div>
                    <DialogFooter>
                      <Button variant="neon">Execute</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Destructive Variant</h3>
            <Playground code={`<DialogContent variant="destructive">...</DialogContent>`}>
              <div className="flex items-center justify-center p-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Delete Node</Button>
                  </DialogTrigger>
                  <DialogContent variant="destructive">
                    <DialogHeader>
                      <DialogTitle className="text-rose-400">Are you sure?</DialogTitle>
                      <DialogDescription>This action cannot be undone. This will permanently delete the node from the cluster.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
                      <Button variant="destructive">Delete</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style for DialogContent.', type: '"default" | "neon" | "destructive"' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
