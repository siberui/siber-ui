import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Input } from '@siberui/react';
import { Terminal, Lock } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function InputDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Input"
        description="Form controls for capturing user text data with a high-tech aesthetic."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Default Input</h3>
            <Playground code={`<Input placeholder="Enter access code..." />`}>
              <div className="w-full max-w-sm">
                <Input placeholder="Enter access code..." />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Input variant="neon" placeholder="Search logs..." />`}>
              <div className="w-full max-w-sm">
                <Input variant="neon" placeholder="Search logs..." />
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">With Icons</h3>
            <Playground code={`<div className="flex flex-col gap-4">
  <Input leftIcon={<Terminal className="w-4 h-4" />} placeholder="Command..." />
  <Input rightIcon={<Lock className="w-4 h-4 text-slate-500" />} type="password" placeholder="Password" />
</div>`}>
              <div className="w-full max-w-sm flex flex-col gap-4">
                <Input leftIcon={<Terminal className="w-4 h-4 text-cyan-500" />} placeholder="Command..." />
                <Input rightIcon={<Lock className="w-4 h-4 text-slate-500" />} type="password" placeholder="Password" />
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
              description: 'The visual style variant.',
              type: '"default" | "neon" | "glass" | "ghost"',
              defaultValue: '"default"',
            },
            {
              property: 'leftIcon',
              description: 'Icon to render inside the left of the input.',
              type: 'React.ReactNode',
            },
            {
              property: 'rightIcon',
              description: 'Icon to render inside the right of the input.',
              type: 'React.ReactNode',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
