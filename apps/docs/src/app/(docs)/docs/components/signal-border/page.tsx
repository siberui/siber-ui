import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { SignalBorder } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SignalBorderDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Signal Border"
        description="A thin 1px gradient edge that fades from a signal color to transparent — SiberUI's primary instrumented-surface border primitive, used instead of ad-hoc glow shadows."
      />

      <ContentSection
        title="Examples"
        id="examples"
      >
        <Playground
          code={`<SignalBorder signal="cyan" className="w-64 rounded-lg bg-surface-1 p-5">
  <p className="text-sm text-fg-muted">Fades from cyan to transparent.</p>
</SignalBorder>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {(['cyan', 'violet', 'green', 'amber', 'rose'] as const).map((signal) => (
              <SignalBorder
                key={signal}
                signal={signal}
                className="w-40 rounded-lg bg-surface-1 p-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
                  {signal}
                </p>
              </SignalBorder>
            ))}
          </div>
        </Playground>
      </ContentSection>

      <ContentSection
        title="API Reference"
        id="api-reference"
      >
        <ApiTable
          props={[
            {
              property: 'signal',
              description: 'The accent color of the gradient edge.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose"',
              defaultValue: '"cyan"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
