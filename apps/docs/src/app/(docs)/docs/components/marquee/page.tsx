import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Marquee } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function MarqueeDocsPage() {
  const words = ["SECURITY", "ZERO-TRUST", "CYBER", "ENCRYPTION", "DEFENSE", "SHIELD"];

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Marquee"
        description="An infinitely scrolling component for text or elements."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Marquee speed="normal" pauseOnHover className="bg-slate-900 border-y border-white/10">
  {words.map((w, i) => (
    <span key={i} className="text-xl font-bold text-slate-400 mx-4">{w}</span>
  ))}
</Marquee>`}>
              <div className="flex items-center justify-center p-8 overflow-hidden w-full">
                <Marquee speed="normal" pauseOnHover className="bg-slate-900 border-y border-white/10 w-full py-4">
                  {words.map((w, i) => (
                    <span key={i} className="text-xl font-bold text-slate-400 mx-4">{w}</span>
                  ))}
                </Marquee>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Vertical Direction</h3>
            <Playground code={`<Marquee direction="up" speed="fast" className="h-64">...</Marquee>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl">
                <div className="h-48 overflow-hidden rounded-xl border border-cyan-500/20 bg-cyan-950/20 w-32 shadow-[0_0_15px_rgba(0,240,255,0.05)] flex items-center justify-center relative">
                  <Marquee direction="up" speed="fast" className="h-full absolute inset-0 py-2">
                    {words.map((w, i) => (
                      <div key={i} className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs px-2 py-1 rounded text-center mx-2 mb-2">
                        {w}
                      </div>
                    ))}
                  </Marquee>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-950/80 via-transparent to-cyan-950/80" />
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'direction', description: 'Scroll direction.', type: '"left" | "right" | "up" | "down"', defaultValue: '"left"' },
            { property: 'pauseOnHover', description: 'Pause the animation on hover.', type: 'boolean', defaultValue: 'false' },
            { property: 'speed', description: 'Speed of the animation.', type: '"slow" | "normal" | "fast"', defaultValue: '"normal"' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
