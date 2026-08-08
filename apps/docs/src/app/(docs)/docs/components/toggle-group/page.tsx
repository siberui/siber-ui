import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { ToggleGroup, ToggleGroupItem } from '@siberui/react';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ToggleGroupDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Toggle Group"
        description="A set of two-state buttons that can be toggled on or off."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Single Selection</h3>
            <Playground code={`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
  <ToggleGroupItem value="center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
  <ToggleGroupItem value="right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
</ToggleGroup>`}>
              <div className="flex items-center justify-center p-8">
                <ToggleGroup type="single" defaultValue="center">
                  <ToggleGroupItem value="left" aria-label="Left aligned"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Center aligned"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Right aligned"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
                </ToggleGroup>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Multiple Selection</h3>
            <Playground code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}>
              <div className="flex items-center justify-center p-8">
                <ToggleGroup type="multiple">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Outline Variant</h3>
            <Playground code={`<ToggleGroup variant="outline" type="single" defaultValue="a">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>`}>
              <div className="flex items-center justify-center p-8">
                <ToggleGroup variant="outline" type="single" defaultValue="a">
                  <ToggleGroupItem value="a">Option A</ToggleGroupItem>
                  <ToggleGroupItem value="b">Option B</ToggleGroupItem>
                  <ToggleGroupItem value="c">Option C</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'type', description: 'Determines if single or multiple items can be selected.', type: '"single" | "multiple"' },
            { property: 'variant', description: 'Visual style for the toggle group.', type: '"default" | "outline"' },
            { property: 'size', description: 'Size of the toggle items.', type: '"sm" | "md" | "lg"' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
