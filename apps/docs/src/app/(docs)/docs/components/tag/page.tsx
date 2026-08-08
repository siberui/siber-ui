import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Tag } from '@siberui/react';
import { Terminal } from 'lucide-react';
import { TagGroupDemo } from './demo';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TagDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tag"
        description="Compact elements for categorization, filtering, and selection."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Variants</h3>
            <Playground code={`<div className="flex gap-2">
  <Tag variant="default">Base</Tag>
  <Tag variant="neon">System</Tag>
  <Tag variant="neonPurple">AI Core</Tag>
  <Tag variant="neonGreen">Secure</Tag>
  <Tag variant="outline">Draft</Tag>
</div>`}>
              <div className="flex items-center justify-center gap-4 p-8">
                <Tag variant="default">Base</Tag>
                <Tag variant="neon">System</Tag>
                <Tag variant="neonPurple">AI Core</Tag>
                <Tag variant="neonGreen">Secure</Tag>
                <Tag variant="outline">Draft</Tag>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Features</h3>
            <Playground code={`<div className="flex gap-2">
  <Tag icon={<Terminal className="w-3 h-3" />}>With Icon</Tag>
  <Tag removable onRemove={() => {}}>Removable</Tag>
  <Tag interactive selected={true}>Selected State</Tag>
</div>`}>
              <div className="flex items-center justify-center gap-4 p-8">
                <Tag icon={<Terminal className="w-3 h-3" />} variant="neon">Command</Tag>
                {/* Notice: since onRemove expects a function, we pass undefined in SSR for the static preview,
                    or we can omit it if it doesn't matter for visual. Here we omit onRemove so it renders visually */}
                <Tag removable variant="neonPurple">Delete Me</Tag>
                <Tag interactive selected={true} variant="neonGreen">Active Filter</Tag>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Tag Group (Multi-select)</h3>
            <Playground code={`export function FilterTags() {
  const [selected, setSelected] = React.useState<string[]>(['firewall']);
  
  return (
    <TagGroup
      variant="neon"
      selected={selected}
      onSelectionChange={setSelected}
      tags={[
        { label: 'Firewall', value: 'firewall', icon: <Shield className="w-3 h-3" /> },
        { label: 'Network', value: 'network', icon: <Network className="w-3 h-3" /> },
        { label: 'Terminal', value: 'terminal', icon: <Terminal className="w-3 h-3" /> },
      ]}
    />
  );
}`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl border border-white/5">
                <TagGroupDemo />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style.', type: '"default" | "neon" | "neonPurple" | "neonGreen" | "outline"' },
            { property: 'size', description: 'Size of the tag.', type: '"sm" | "md" | "lg"' },
            { property: 'interactive', description: 'Makes the tag focusable and hoverable.', type: 'boolean' },
            { property: 'selected', description: 'Applies active/selected styling.', type: 'boolean' },
            { property: 'removable', description: 'Shows an "X" button.', type: 'boolean' },
            { property: 'icon', description: 'React node rendered before the label.', type: 'ReactNode' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
