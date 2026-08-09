import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Scanline } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ScanlineDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Scanline"
        description="A signature SiberUI effect: either a static repeating scanline texture, or a single sweeping beam. Applied deliberately as an overlay, never baked into every surface."
      />

      <ContentSection
        title="Examples"
        id="examples"
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Static</h3>
            <Playground
              code={`<div className="relative h-32 w-72 overflow-hidden rounded-lg border border-border-hairline bg-surface-1">
  <Scanline variant="static" />
  <p className="relative z-10 p-5 text-sm text-fg-muted">Fixed scanline texture.</p>
</div>`}
            >
              <div className="relative h-32 w-72 overflow-hidden rounded-lg border border-border-hairline bg-surface-1">
                <Scanline variant="static" />
                <p className="relative z-10 p-5 text-sm text-fg-muted">
                  Fixed scanline texture.
                </p>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Sweep</h3>
            <Playground
              code={`<div className="relative h-32 w-72 overflow-hidden rounded-lg border border-border-hairline bg-surface-1">
  <Scanline variant="sweep" />
  <p className="relative z-10 p-5 text-sm text-fg-muted">A single beam sweeps on a loop.</p>
</div>`}
            >
              <div className="relative h-32 w-72 overflow-hidden rounded-lg border border-border-hairline bg-surface-1">
                <Scanline variant="sweep" />
                <p className="relative z-10 p-5 text-sm text-fg-muted">
                  A single beam sweeps on a loop.
                </p>
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
              property: 'variant',
              description:
                "'static' renders a fixed scanline texture; 'sweep' animates a single beam.",
              type: '"static" | "sweep"',
              defaultValue: '"static"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
