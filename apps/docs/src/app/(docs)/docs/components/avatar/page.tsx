import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Avatar, AvatarGroup } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function AvatarDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Avatar"
        description="An image element with a fallback for representing the user or entity."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Sizes & Images</h3>
            <Playground code={`<div className="flex items-end gap-4">
  <Avatar size="sm" src="https://i.pravatar.cc/150?u=1" />
  <Avatar size="md" src="https://i.pravatar.cc/150?u=2" />
  <Avatar size="lg" src="https://i.pravatar.cc/150?u=3" />
  <Avatar size="xl" src="https://i.pravatar.cc/150?u=4" />
</div>`}>
              <div className="flex items-end justify-center gap-6 p-8">
                <Avatar size="sm" src="https://i.pravatar.cc/150?u=1" />
                <Avatar size="md" src="https://i.pravatar.cc/150?u=2" />
                <Avatar size="lg" src="https://i.pravatar.cc/150?u=3" />
                <Avatar size="xl" src="https://i.pravatar.cc/150?u=4" />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Fallbacks & Rings</h3>
            <p className="text-sm text-slate-400 mb-4">When the image fails to load or isn't provided, initials are shown.</p>
            <Playground code={`<div className="flex gap-4">
  <Avatar name="Admin User" ring="cyan" />
  <Avatar name="Guest Account" ring="purple" />
  <Avatar name="System Node" ring="white" />
</div>`}>
              <div className="flex items-center justify-center gap-6 p-8">
                <Avatar name="Admin User" ring="cyan" />
                <Avatar name="Guest Account" ring="purple" />
                <Avatar name="System Node" ring="white" />
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Status Indicators</h3>
            <Playground code={`<div className="flex gap-4">
  <Avatar src="..." status="online" />
  <Avatar src="..." status="idle" />
  <Avatar src="..." status="busy" />
  <Avatar src="..." status="offline" />
</div>`}>
              <div className="flex items-center justify-center gap-8 p-8 bg-slate-900/50 rounded-xl">
                <Avatar src="https://i.pravatar.cc/150?u=5" status="online" />
                <Avatar src="https://i.pravatar.cc/150?u=6" status="idle" />
                <Avatar src="https://i.pravatar.cc/150?u=7" status="busy" />
                <Avatar src="https://i.pravatar.cc/150?u=8" status="offline" />
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Avatar Group</h3>
            <Playground code={`<AvatarGroup 
  max={3}
  size="lg"
  ring="cyan"
  avatars={[
    { src: '...', name: 'Alice' },
    { src: '...', name: 'Bob' },
    { src: '...', name: 'Charlie' },
    { name: 'Dave' },
    { name: 'Eve' }
  ]}
/>`}>
              <div className="flex items-center justify-center p-8">
                <AvatarGroup 
                  max={3}
                  size="lg"
                  ring="cyan"
                  avatars={[
                    { src: 'https://i.pravatar.cc/150?u=10', name: 'Alice' },
                    { src: 'https://i.pravatar.cc/150?u=11', name: 'Bob' },
                    { src: 'https://i.pravatar.cc/150?u=12', name: 'Charlie' },
                    { name: 'Dave' },
                    { name: 'Eve' }
                  ]}
                />
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'size',
              description: 'The dimensions of the avatar.',
              type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
              defaultValue: '"md"',
            },
            {
              property: 'ring',
              description: 'Outer ring glow color.',
              type: '"none" | "cyan" | "purple" | "green" | "white"',
              defaultValue: '"none"',
            },
            {
              property: 'status',
              description: 'A status dot to render on the bottom right.',
              type: '"online" | "idle" | "busy" | "offline"',
            },
            {
              property: 'name',
              description: 'Used to calculate fallback initials when src is missing.',
              type: 'string',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
