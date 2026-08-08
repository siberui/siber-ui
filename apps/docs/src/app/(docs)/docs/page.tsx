import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import Link from 'next/link';
import { ShieldAlert, Zap, Layers } from 'lucide-react';

const headings = [
  { id: 'introduction', text: 'Introduction', level: 2 },
  { id: 'quick-start', text: 'Quick Start', level: 2 },
  { id: 'architecture', text: 'Architecture', level: 2 },
];

export default function DocsIntroductionPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Introduction"
        description="Welcome to SiberUI. A highly specialized React UI kit engineered for cybersecurity, defense, and high-density data applications."
      />

      <ContentSection title="Introduction" id="introduction">
        <p>
          SiberUI is not a general-purpose UI library. It is purpose-built for applications that require a futuristic, high-contrast, and data-dense aesthetic. Think SIEM dashboards, network monitoring tools, threat intelligence platforms, and command center interfaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
            <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-100">Cyber-First Design</h3>
            <p className="text-sm text-slate-400">Dark mode only. High contrast. Optimized for low-light environments.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-100">Performance Tuned</h3>
            <p className="text-sm text-slate-400">Built on React 19 and Tailwind CSS. Minimal runtime overhead.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
            <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-100">Accessible</h3>
            <p className="text-sm text-slate-400">Strict adherence to WCAG 2.2 AA standards for keyboard navigation.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Quick Start" id="quick-start">
        <p className="mb-4">
          Install the core React package.
        </p>
        <InstallCommand />
        <p className="mt-8 mb-4">
          Once installed, you can start importing components:
        </p>
        <div className="p-4 rounded-lg border border-white/10 bg-black/50 text-sm font-mono text-cyan-300">
          import {'{'} Button {'}'} from '@siberui/react';
        </div>
        <div className="mt-6 flex gap-4">
          <Link href="/docs/components/button" className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-cyan-400">
            View Button Docs
          </Link>
          <Link href="/docs/installation" className="inline-flex h-10 items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
            Full Installation Guide
          </Link>
        </div>
      </ContentSection>

      <ContentSection title="Architecture" id="architecture">
        <p>
          SiberUI uses a combination of Tailwind CSS for styling and Framer Motion for complex animations. 
          The components are fully unstyled by default, meaning they rely entirely on the provided Tailwind preset for their appearance.
        </p>
      </ContentSection>
    </ComponentPage>
  );
}
