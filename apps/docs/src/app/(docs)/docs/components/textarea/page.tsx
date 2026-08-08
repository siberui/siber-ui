import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Textarea } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TextareaDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Textarea"
        description="A multi-line text input for long-form content."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Textarea label="Message" placeholder="Type your message here." />`}>
              <div className="flex items-center justify-center p-8 w-full max-w-md mx-auto">
                <Textarea label="Message" placeholder="Type your message here." />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Character Counter & Auto Resize</h3>
            <Playground code={`<Textarea 
  label="Bio" 
  placeholder="Tell us about yourself..." 
  maxCharacters={150} 
  autoResize 
/>`}>
              <div className="flex items-center justify-center p-8 w-full max-w-md mx-auto">
                <Textarea 
                  label="Bio" 
                  placeholder="Tell us about yourself..." 
                  maxCharacters={150} 
                  autoResize 
                />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Textarea 
  variant="neon" 
  label="Custom Script" 
  placeholder="function init() { ... }" 
/>`}>
              <div className="flex items-center justify-center p-8 w-full max-w-md mx-auto bg-slate-900/30 rounded-xl">
                <Textarea 
                  variant="neon" 
                  label="Custom Script" 
                  placeholder="function init() { ... }" 
                />
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">States</h3>
            <Playground code={`<div className="flex flex-col gap-4">
  <Textarea error="Invalid JSON syntax." placeholder="Config..." />
  <Textarea success placeholder="Valid config." />
</div>`}>
              <div className="flex flex-col gap-6 items-center justify-center p-8 w-full max-w-md mx-auto">
                <Textarea error="Invalid JSON syntax." placeholder="Config..." />
                <Textarea success placeholder="Valid config." />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style.', type: '"default" | "neon" | "ghost"' },
            { property: 'label', description: 'Text rendered above the textarea.', type: 'string' },
            { property: 'helperText', description: 'Text rendered below the textarea.', type: 'string' },
            { property: 'error', description: 'Displays an error state and optional error message.', type: 'string | boolean' },
            { property: 'maxCharacters', description: 'Shows a character counter and restricts max length.', type: 'number' },
            { property: 'autoResize', description: 'Automatically adjusts height based on content.', type: 'boolean' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
