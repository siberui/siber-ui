import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { ToastDemoApp } from './demo';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ToastDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Toast"
        description="A succinct message that is displayed temporarily. Includes progress bars and cyberpunk styling."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Usage</h3>
            <Playground code={`import { ToastProvider, useToast, Button } from '@siberui/react';

function App() {
  return (
    <ToastProvider position="bottom-right">
      <MyComponent />
    </ToastProvider>
  )
}

function MyComponent() {
  const { toast } = useToast();

  return (
    <Button onClick={() => toast({ 
      title: 'Threat Detected', 
      description: 'Unauthorized access attempt blocked.',
      variant: 'destructive'
    })}>
      Show Toast
    </Button>
  )
}`}>
              <div className="flex items-center justify-center p-8">
                <ToastDemoApp />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'title', description: 'The title of the toast.', type: 'string' },
            { property: 'description', description: 'The description of the toast.', type: 'string' },
            { property: 'variant', description: 'The visual style of the toast.', type: '"info" | "success" | "warning" | "destructive"' },
            { property: 'duration', description: 'Duration in ms before auto-dismissing.', type: 'number', defaultValue: '4000' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
