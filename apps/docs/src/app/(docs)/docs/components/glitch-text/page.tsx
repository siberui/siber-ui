import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { GlitchText } from '@siberui/react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function GlitchTextDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Glitch Text"
        description="A stylized text component with a cyberpunk scramble glitch effect."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<GlitchText as="h1" color="cyan" className="text-4xl">SYSTEM BREACH DETECTED</GlitchText>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900 rounded-xl h-48 border border-white/5">
                <GlitchText as="h1" color="cyan" className="text-3xl md:text-4xl text-center">
                  SYSTEM BREACH DETECTED
                </GlitchText>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Colors</h3>
            <Playground code={`<div className="flex flex-col gap-4 text-2xl">
  <GlitchText color="cyan">CYAN_GLITCH_TEXT</GlitchText>
  <GlitchText color="white">WHITE_GLITCH_TEXT</GlitchText>
  <GlitchText color="rose">ROSE_GLITCH_TEXT</GlitchText>
</div>`}>
              <div className="flex flex-col items-center justify-center gap-6 p-8 bg-slate-950 rounded-xl h-64 border border-white/5">
                <GlitchText color="cyan" className="text-xl md:text-2xl">CYAN_GLITCH_TEXT</GlitchText>
                <GlitchText color="white" className="text-xl md:text-2xl">WHITE_GLITCH_TEXT</GlitchText>
                <GlitchText color="rose" className="text-xl md:text-2xl">ROSE_GLITCH_TEXT</GlitchText>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'text', description: 'The original text to display (or pass as children).', type: 'string' },
            { property: 'as', description: 'The HTML element to render as.', type: '"h1" | "h2" | "p" | "span" | "div" | ...', defaultValue: '"span"' },
            { property: 'active', description: 'Whether the glitch effect is currently running.', type: 'boolean', defaultValue: 'true' },
            { property: 'color', description: 'The neon color theme.', type: '"cyan" | "white" | "rose"', defaultValue: '"white"' },
            { property: 'speed', description: 'Interval speed in ms.', type: 'number', defaultValue: '120' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
