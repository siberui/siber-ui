import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { CornerFrame } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function CornerFrameDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Corner Frame"
        description="Four small corner marks that read as a technical instrument, without clipping or altering the surface underneath. Use sparingly to mark a surface as active, selected, or instrumented."
      />

      <ContentSection
        title="Examples"
        id="examples"
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Signals</h3>
            <Playground
              code={`<CornerFrame signal="cyan" className="w-56 rounded-lg border border-border-hairline bg-surface-1 p-5">
  <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">Instrumented surface</p>
</CornerFrame>`}
            >
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {(['cyan', 'violet', 'green', 'amber', 'rose'] as const).map((signal) => (
                  <CornerFrame
                    key={signal}
                    signal={signal}
                    className="w-40 rounded-lg border border-border-hairline bg-surface-1 p-4"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
                      {signal}
                    </p>
                  </CornerFrame>
                ))}
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">
              Partial corners
            </h3>
            <Playground
              code={`<CornerFrame signal="green" corners={['tl', 'br']} className="w-56 rounded-lg border border-border-hairline bg-surface-1 p-5">
  <p className="text-sm text-fg-muted">Only top-left and bottom-right marks.</p>
</CornerFrame>`}
            >
              <div className="flex items-center justify-center">
                <CornerFrame
                  signal="green"
                  corners={['tl', 'br']}
                  className="w-64 rounded-lg border border-border-hairline bg-surface-1 p-5"
                >
                  <p className="text-sm text-fg-muted">
                    Only top-left and bottom-right marks.
                  </p>
                </CornerFrame>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="API Reference"
        id="api-reference"
      >
        <ApiTable
          props={[
            {
              property: 'signal',
              description: 'The accent color of the corner marks.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose" | "neutral"',
              defaultValue: '"cyan"',
            },
            {
              property: 'size',
              description: 'The size of each corner mark.',
              type: '"sm" | "md"',
              defaultValue: '"md"',
            },
            {
              property: 'corners',
              description: 'Which corners render a mark.',
              type: "Array<'tl' | 'tr' | 'bl' | 'br'>",
              defaultValue: "['tl', 'tr', 'bl', 'br']",
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
