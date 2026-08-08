import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { TerminalBlock } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TerminalBlockDocsPage() {
  const codeString = `#!/bin/bash
echo "Initializing secure connection..."
ssh -i ~/.ssh/id_rsa user@secure.server.com
echo "Connected successfully."`;

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Terminal Block"
        description="A stylized terminal window for displaying code snippets with a copy button."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<TerminalBlock 
  title="deploy.sh" 
  code={\`#!/bin/bash
echo "Initializing secure connection..."
ssh -i ~/.ssh/id_rsa user@secure.server.com
echo "Connected successfully."\`} 
/>`}>
              <div className="flex items-center justify-center p-8 w-full max-w-lg mx-auto">
                <TerminalBlock 
                  title="deploy.sh" 
                  code={codeString} 
                  className="w-full"
                />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'code', description: 'The source code or command to display.', type: 'string' },
            { property: 'title', description: 'Optional filename or title in the header.', type: 'string' },
            { property: 'language', description: 'Language of the code (currently for semantics).', type: 'string', defaultValue: '"bash"' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
