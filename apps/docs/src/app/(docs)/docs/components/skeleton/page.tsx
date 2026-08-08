import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Skeleton, SkeletonCard, SkeletonText } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SkeletonDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Skeleton"
        description="Placeholder components to show while content is loading, featuring advanced shimmer animations."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Base Skeleton</h3>
            <Playground code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}>
              <div className="flex items-center justify-center p-8">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Complex Placeholders</h3>
            <p className="text-sm text-slate-400 mb-4">Use <code className="text-cyan-400">SkeletonCard</code> and <code className="text-cyan-400">SkeletonText</code> for rapid UI mocking.</p>
            <Playground code={`<div className="grid grid-cols-2 gap-4">
  <SkeletonCard variant="default" />
  <SkeletonCard variant="neon" />
  <SkeletonCard variant="glass" hasImage={false} />
</div>`}>
              <div className="flex items-center justify-center p-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  <SkeletonCard variant="default" />
                  <SkeletonCard variant="neon" />
                  <div className="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-slate-900 rounded-xl">
                    <SkeletonCard variant="glass" hasImage={false} />
                  </div>
                </div>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Animation Types</h3>
            <Playground code={`<div className="space-y-4">
  <SkeletonText animation="shimmer" lines={2} />
  <SkeletonText animation="pulse" lines={2} />
  <SkeletonText animation="none" lines={2} />
</div>`}>
              <div className="flex flex-col gap-8 w-full max-w-sm mx-auto p-8 border border-white/5 rounded-xl bg-slate-900/20">
                <div>
                  <div className="text-xs text-slate-500 mb-2">Shimmer (Default)</div>
                  <SkeletonText animation="shimmer" lines={2} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-2">Pulse</div>
                  <SkeletonText animation="pulse" lines={2} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-2">None</div>
                  <SkeletonText animation="none" lines={2} />
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style for the skeleton.', type: '"default" | "neon" | "glass"', defaultValue: '"default"' },
            { property: 'animation', description: 'Animation style.', type: '"shimmer" | "pulse" | "none"', defaultValue: '"shimmer"' },
            { property: 'lines', description: 'For SkeletonText: number of lines to render.', type: 'number', defaultValue: '3' },
            { property: 'hasImage', description: 'For SkeletonCard: render image block.', type: 'boolean', defaultValue: 'true' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
