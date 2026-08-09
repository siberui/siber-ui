import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';

const headings = [
  { id: 'quick-start', text: 'Quick Start', level: 2 },
  { id: 'framework-guides', text: 'Framework Guides', level: 2 },
];

export default function InstallationDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Installation"
        description="Learn how to install SiberUI and configure it in your project."
      />

      <ContentSection title="Quick Start" id="quick-start">
        <p className="mb-4 text-sm text-slate-400">Install the package and its peer dependencies via your preferred package manager.</p>
        <InstallCommand />
        
        <p className="mt-8 mb-4 text-sm text-slate-400">Add the Tailwind CSS preset to your <code className="text-cyan-400 font-mono text-sm bg-cyan-950/50 px-1 rounded">tailwind.config.ts</code> or app globals.</p>
        <CodeBlock code={`import '@siberui/react/globals.css';`} />
      </ContentSection>

      <ContentSection title="Framework Guides" id="framework-guides">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border-hairline bg-white/5 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
            <h3 className="text-lg font-medium text-slate-200 mb-2">Next.js (App Router)</h3>
            <p className="text-sm text-slate-400">Guide for setting up SiberUI with Next.js Server Components and Turbopack.</p>
          </div>
          <div className="border border-border-hairline bg-white/5 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
            <h3 className="text-lg font-medium text-slate-200 mb-2">Vite</h3>
            <p className="text-sm text-slate-400">Guide for Vite and standard React Single Page Applications.</p>
          </div>
        </div>
      </ContentSection>
    </ComponentPage>
  );
}
