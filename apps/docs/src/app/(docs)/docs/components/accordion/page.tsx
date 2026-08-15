import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function AccordionDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Default Variant</h3>
            <Playground code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>Yes. It comes with default styles that matches the other components' aesthetic.</AccordionContent>
  </AccordionItem>
</Accordion>`}>
              <div className="w-full max-w-lg mx-auto p-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>Yes. It comes with default styles that match the other components&apos; aesthetic.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Accordion variant="neon" type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>System Override</AccordionTrigger>
    <AccordionContent>Executing root commands...</AccordionContent>
  </AccordionItem>
</Accordion>`}>
              <div className="w-full max-w-lg mx-auto p-4">
                <Accordion variant="neon" type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>System Override</AccordionTrigger>
                    <AccordionContent>Executing root commands...</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Firewall Status</AccordionTrigger>
                    <AccordionContent>Active. No incoming threats detected.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Bordered Variant</h3>
            <Playground code={`<Accordion variant="bordered" type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Security Clearance</AccordionTrigger>
    <AccordionContent>Level 4 authorized access verified.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Encryption Protocols</AccordionTrigger>
    <AccordionContent>AES-256-GCM + Post-Quantum Lattice Key Exchange.</AccordionContent>
  </AccordionItem>
</Accordion>`}>
              <div className="w-full max-w-lg mx-auto p-4">
                <Accordion variant="bordered" type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Security Clearance</AccordionTrigger>
                    <AccordionContent>Level 4 authorized access verified.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Encryption Protocols</AccordionTrigger>
                    <AccordionContent>AES-256-GCM + Post-Quantum Lattice Key Exchange.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Glass Variant</h3>
            <Playground code={`<div className="p-6 rounded-2xl border border-white/10 bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat">
  <Accordion variant="glass" type="multiple" className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Encrypted Data Stream</AccordionTrigger>
      <AccordionContent>Decryption in progress... Quantum handshake completed.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Network Telemetry Logs</AccordionTrigger>
      <AccordionContent>Accessing secure node history. 0 anomalies detected.</AccordionContent>
    </AccordionItem>
  </Accordion>
</div>`}>
              <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <Accordion variant="glass" type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Encrypted Data Stream</AccordionTrigger>
                      <AccordionContent>Decryption in progress... Quantum handshake completed.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Network Telemetry Logs</AccordionTrigger>
                      <AccordionContent>Accessing secure node history. 0 anomalies detected.</AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
              property: 'variant',
              description: 'The visual style variant applied to all child items.',
              type: '"default" | "neon" | "bordered" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'type',
              description: 'Determines whether one or multiple items can be opened.',
              type: '"single" | "multiple"',
            },
            {
              property: 'collapsible',
              description: 'When type is "single", allows closing content when clicking trigger for an open item.',
              type: 'boolean',
              defaultValue: 'false',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
