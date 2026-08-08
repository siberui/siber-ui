import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Button } from '@siberui/react';
import { ShieldAlert, Zap } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ButtonDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Button"
        description="A specialized interactive element for triggering actions. Supports multiple variants, sizes, and states with cyberpunk-inspired styling and hover effects."
        status="Stable"
      />

      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Button } from '@siberui/react';`} />
      </ContentSection>

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          {/* Primary */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Primary</h3>
            <p className="mb-4 text-sm text-slate-400">The default button style used for primary actions.</p>
            <Playground
              code={`<Button variant="primary">Initialize System</Button>`}
            >
              <Button variant="primary">Initialize System</Button>
            </Playground>
          </div>

          {/* Variants */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Variants</h3>
            <p className="mb-4 text-sm text-slate-400">We offer multiple cyberpunk variants to establish visual hierarchy.</p>
            <Playground
              code={`<div className="flex gap-4">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="neon">Neon Cyan</Button>
  <Button variant="neonPurple">Neon Purple</Button>
  <Button variant="neonGreen">Neon Green</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="neon">Neon Cyan</Button>
                <Button variant="neonPurple">Neon Purple</Button>
                <Button variant="neonGreen">Neon Green</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </Playground>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Sizes</h3>
            <p className="mb-4 text-sm text-slate-400">Different sizes for varying contexts and layouts.</p>
            <Playground
              code={`<div className="flex items-center gap-4">
  <Button size="sm">Small (sm)</Button>
  <Button size="md">Medium (md)</Button>
  <Button size="lg">Large (lg)</Button>
  <Button size="icon"><Zap className="h-4 w-4" /></Button>
</div>`}
            >
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="sm">Small (sm)</Button>
                <Button size="md">Medium (md)</Button>
                <Button size="lg">Large (lg)</Button>
                <Button size="icon"><Zap className="h-4 w-4" /></Button>
              </div>
            </Playground>
          </div>

          {/* With Icons */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">With Icons</h3>
            <p className="mb-4 text-sm text-slate-400">Buttons can include icons for better visual context.</p>
            <Playground
              code={`<div className="flex gap-4">
  <Button leftIcon={<ShieldAlert className="h-4 w-4" />}>
    Scan Network
  </Button>
  <Button variant="outline" rightIcon={<Zap className="h-4 w-4" />}>
    Execute
  </Button>
</div>`}
            >
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button leftIcon={<ShieldAlert className="h-4 w-4" />}>
                  Scan Network
                </Button>
                <Button variant="outline" rightIcon={<Zap className="h-4 w-4" />}>
                  Execute
                </Button>
              </div>
            </Playground>
          </div>

          {/* States */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">States</h3>
            <p className="mb-4 text-sm text-slate-400">Disabled and loading states.</p>
            <Playground
              code={`<div className="flex gap-4">
  <Button disabled>Disabled</Button>
  <Button isLoading>Processing...</Button>
</div>`}
            >
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button disabled>Disabled</Button>
                <Button isLoading>Processing...</Button>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'variant',
              description: 'The visual style variant of the button.',
              type: '"primary" | "secondary" | "neon" | "neonPurple" | "neonGreen" | "ghost" | "destructive" | "outline"',
              defaultValue: '"primary"',
            },
            {
              property: 'size',
              description: 'The size of the button.',
              type: '"sm" | "md" | "lg" | "icon"',
              defaultValue: '"md"',
            },
            {
              property: 'glow',
              description: 'Adds an intense cyberpunk glow shadow effect.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'isLoading',
              description: 'Displays a loading spinner and disables the button.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'leftIcon',
              description: 'Icon element to display before the text.',
              type: 'React.ReactNode',
            },
            {
              property: 'rightIcon',
              description: 'Icon element to display after the text.',
              type: 'React.ReactNode',
            },
            {
              property: 'asChild',
              description: 'Change the underlying component to the passed child element.',
              type: 'boolean',
              defaultValue: 'false',
            },
          ]}
        />
      </ContentSection>

      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400">
          <li>Uses the native <code className="text-cyan-400 font-mono text-sm bg-cyan-950/50 px-1 rounded">{'<button>'}</code> element.</li>
          <li>Keyboard focus is clearly visible with an emerald ring to comply with WCAG 2.2 AA.</li>
          <li>When <code className="text-cyan-400 font-mono text-sm bg-cyan-950/50 px-1 rounded">isLoading</code> is true, the button adds <code className="text-cyan-400 font-mono text-sm bg-cyan-950/50 px-1 rounded">aria-disabled="true"</code> to prevent interaction while remaining readable.</li>
          <li>Icon-only buttons should always include an <code className="text-cyan-400 font-mono text-sm bg-cyan-950/50 px-1 rounded">aria-label</code> or <code className="text-cyan-400 font-mono text-sm bg-cyan-950/50 px-1 rounded">{'<span className="sr-only">'}</code> text for screen readers.</li>
        </ul>
      </ContentSection>

      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400">
          <li><strong>Hierarchy:</strong> Use only one primary button per screen or section to guide the user's primary action.</li>
          <li><strong>Clarity:</strong> Button text should be clear, concise, and action-oriented (e.g., "Deploy Protocol" instead of "Submit").</li>
          <li><strong>Destructive Actions:</strong> Always use the <code className="text-cyan-400 font-mono text-sm bg-cyan-950/50 px-1 rounded">destructive</code> variant for actions that cannot be undone (e.g., deleting data, terminating sessions). Consider pairing with a confirmation dialog.</li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
