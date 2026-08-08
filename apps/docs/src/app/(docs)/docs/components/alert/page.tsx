import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Alert } from '@siberui/react';
import { Terminal, ShieldAlert, AlertTriangle } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function AlertDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Alert"
        description="Displays a callout for user attention."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Default (Primary)</h3>
            <Playground code={`<Alert title="System Diagnostic" icon={<Terminal className="h-4.5 w-4.5 text-cyan-400" />}>
  All systems are functioning within normal parameters.
</Alert>`}>
              <div className="w-full max-w-lg">
                <Alert title="System Diagnostic" icon={<Terminal className="h-4.5 w-4.5 text-cyan-400" />}>
                  All systems are functioning within normal parameters.
                </Alert>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Destructive</h3>
            <Playground code={`<Alert variant="destructive" title="Security Breach">
  Unauthorized access detected in sector 4.
</Alert>`}>
              <div className="w-full max-w-lg">
                <Alert variant="destructive" title="Security Breach">
                  Unauthorized access detected in sector 4.
                </Alert>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Warning</h3>
            <Playground code={`<Alert variant="warning" title="High CPU Usage">
  Node 7 is experiencing 98% CPU load.
</Alert>`}>
              <div className="w-full max-w-lg">
                <Alert variant="warning" title="High CPU Usage">
                  Node 7 is experiencing 98% CPU load.
                </Alert>
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
              type: '"info" | "success" | "warning" | "destructive"',
              defaultValue: '"info"',
            },
            {
              property: 'title',
              description: 'The title of the alert.',
              type: 'string',
            },
            {
              property: 'icon',
              description: 'Custom icon element.',
              type: 'React.ReactNode',
            },
            {
              property: 'closable',
              description: 'Whether to show a close button.',
              type: 'boolean',
              defaultValue: 'false',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
