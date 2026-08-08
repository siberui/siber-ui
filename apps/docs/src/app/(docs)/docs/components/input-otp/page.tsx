import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function InputOTPDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Input OTP"
        description="Accessible one-time password component with copy-paste functionality."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<InputOTP maxLength={6} label="Verification Code">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}>
              <div className="flex items-center justify-center p-8">
                <InputOTP maxLength={6} label="Verification Code">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<InputOTP variant="neon" maxLength={4} label="Access Pin">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl">
                <InputOTP variant="neon" maxLength={4} label="Access Pin">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">States</h3>
            <Playground code={`<div className="flex flex-col gap-6">
  <InputOTP error="Invalid code." maxLength={3}>...</InputOTP>
  <InputOTP success maxLength={3}>...</InputOTP>
</div>`}>
              <div className="flex flex-col gap-8 items-center justify-center p-8">
                <InputOTP error="Invalid code." maxLength={3}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                </InputOTP>
                <InputOTP success maxLength={3}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style propagated to slots.', type: '"default" | "neon" | "glass"' },
            { property: 'maxLength', description: 'Maximum number of characters.', type: 'number' },
            { property: 'label', description: 'Form field label.', type: 'string' },
            { property: 'error', description: 'Error state and message.', type: 'string | boolean' },
            { property: 'success', description: 'Success state styling.', type: 'boolean' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
