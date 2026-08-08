import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { BorderBeam } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function BorderBeamDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Border Beam"
        description="An animated rotating border gradient for highlighting elements."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<div className="relative flex h-[200px] w-full max-w-[32rem] items-center justify-center rounded-xl bg-slate-950/50">
  <span className="text-sm text-slate-400">Scanning sector...</span>
  <BorderBeam size={200} duration={8} />
</div>`}>
              <div className="flex items-center justify-center p-8">
                <div className="relative flex h-[200px] w-full max-w-[32rem] items-center justify-center rounded-xl bg-slate-950/50">
                  <span className="text-sm font-mono tracking-widest text-slate-400 uppercase">Scanning sector...</span>
                  <BorderBeam size={200} duration={8} />
                </div>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Cyberpunk Variants</h3>
            <p className="text-sm text-slate-400 mb-4">Predefined color variants: neon, purple, destructive, green.</p>
            <Playground code={`<div className="grid grid-cols-2 gap-4">
  <div className="relative rounded-lg p-6 bg-slate-900/50"><BorderBeam variant="neon" /></div>
  <div className="relative rounded-lg p-6 bg-slate-900/50"><BorderBeam variant="purple" /></div>
  <div className="relative rounded-lg p-6 bg-slate-900/50"><BorderBeam variant="destructive" /></div>
  <div className="relative rounded-lg p-6 bg-slate-900/50"><BorderBeam variant="green" reverse /></div>
</div>`}>
              <div className="flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
                  <div className="relative flex h-24 items-center justify-center rounded-lg bg-slate-900/50">
                    <span className="text-cyan-400 font-mono text-xs">Neon</span>
                    <BorderBeam variant="neon" borderWidth={2} />
                  </div>
                  <div className="relative flex h-24 items-center justify-center rounded-lg bg-slate-900/50">
                    <span className="text-purple-400 font-mono text-xs">Purple</span>
                    <BorderBeam variant="purple" borderWidth={2} />
                  </div>
                  <div className="relative flex h-24 items-center justify-center rounded-lg bg-slate-900/50">
                    <span className="text-rose-400 font-mono text-xs">Destructive</span>
                    <BorderBeam variant="destructive" borderWidth={2} />
                  </div>
                  <div className="relative flex h-24 items-center justify-center rounded-lg bg-slate-900/50">
                    <span className="text-emerald-400 font-mono text-xs">Green (Reverse)</span>
                    <BorderBeam variant="green" reverse borderWidth={2} />
                  </div>
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'size', description: 'Size / arc angle of the beam in degrees.', type: 'number', defaultValue: '90' },
            { property: 'duration', description: 'Duration of the animation in seconds.', type: 'number', defaultValue: '6' },
            { property: 'delay', description: 'Delay of the animation in seconds.', type: 'number', defaultValue: '0' },
            { property: 'borderWidth', description: 'Width of the border beam in pixels.', type: 'number', defaultValue: '1.5' },
            { property: 'variant', description: 'Predefined color gradient variants.', type: '"neon" | "purple" | "destructive" | "green"' },
            { property: 'reverse', description: 'Reverses the direction of the rotation.', type: 'boolean', defaultValue: 'false' },
            { property: 'colorFrom', description: 'Starting color of custom gradient.', type: 'string', defaultValue: '"#ffffff"' },
            { property: 'colorTo', description: 'Ending color of custom gradient.', type: 'string', defaultValue: '"transparent"' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
