import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Row,
  LayoutDivider,
} from '@siberui/react';
import {
  Zap,
  ShieldAlert,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Download,
  Trash2,
  Play,
  RotateCcw,
  Sparkles,
  Sliders,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'primary-tier', text: 'Primary Action Tier', level: 2 },
  { id: 'secondary-tier', text: 'Secondary & Neutral Tier', level: 2 },
  { id: 'semantic-tier', text: 'Semantic Intent Signals', level: 2 },
  { id: 'cyber-tier', text: 'Cyberpunk Specials (Neon & Terminal)', level: 2 },
  { id: 'glass-variant', text: 'Glassmorphism Variant', level: 2 },
  { id: 'sizes', text: 'Sizes & Icon Buttons', level: 2 },
  { id: 'glow-effect', text: 'Cyber Glow Aura', level: 2 },
  { id: 'icons-and-loading', text: 'Icons & Loading State', level: 2 },
  { id: 'toolbar-composition', text: 'Toolbar & Action Bar Composition', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ButtonDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Button"
        description="A specialized interactive trigger built with semantic hierarchy, cyber glow aura, responsive sizing, and async loading feedback."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Button } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Primary Action Tier ── */}
      <ContentSection title="Primary Action Tier" id="primary-tier">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The primary tier represents the principal user actions on any view. Siber-UI provides three weight gradations of the primary cyan signal color to establish clear visual hierarchy.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center">
  {/* Solid filled primary — highest weight */}
  <Button variant="primary">
    Deploy Cluster
  </Button>

  {/* Subtle cyan background — medium weight */}
  <Button variant="primary-subtle">
    Primary Subtle
  </Button>

  {/* Transparent outline — lightweight primary */}
  <Button variant="primary-outline">
    Primary Outline
  </Button>
</div>`}
          >
            <div className="flex flex-wrap gap-4 items-center justify-center p-6">
              <Button variant="primary">Deploy Cluster</Button>
              <Button variant="primary-subtle">Primary Subtle</Button>
              <Button variant="primary-outline">Primary Outline</Button>
            </div>
          </Playground>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-3 rounded-lg border border-cyan-500/20 bg-cyan-950/20 space-y-1">
              <span className="text-cyan-400 font-semibold uppercase">variant=&quot;primary&quot;</span>
              <p className="text-slate-400 font-sans text-xs">Solid cyan fill. Reserved for the single most important action on a page.</p>
            </div>
            <div className="p-3 rounded-lg border border-cyan-500/20 bg-cyan-950/20 space-y-1">
              <span className="text-cyan-400 font-semibold uppercase">variant=&quot;primary-subtle&quot;</span>
              <p className="text-slate-400 font-sans text-xs">12% tint background with cyan border. Great for prominent secondary CTA.</p>
            </div>
            <div className="p-3 rounded-lg border border-cyan-500/20 bg-cyan-950/20 space-y-1">
              <span className="text-cyan-400 font-semibold uppercase">variant=&quot;primary-outline&quot;</span>
              <p className="text-slate-400 font-sans text-xs">Transparent background that illuminates cyan on hover with glow feedback.</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ── Secondary & Neutral Tier ── */}
      <ContentSection title="Secondary & Neutral Tier" id="secondary-tier">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Neutral actions provide quiet supporting interactions (cancel, configure, dismiss) without competing with primary call-to-actions.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center">
  <Button variant="secondary">Secondary (Surface)</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost (Flat)</Button>
</div>`}
          >
            <div className="flex flex-wrap gap-4 items-center justify-center p-6">
              <Button variant="secondary">Secondary (Surface)</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost (Flat)</Button>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Semantic Intent Signals ── */}
      <ContentSection title="Semantic Intent Signals" id="semantic-tier">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Semantic buttons convey instant meaning through color psychology. <code className="text-emerald-400">success</code> confirms safe operations, while <code className="text-rose-400">danger</code> highlights irreversible or destructive commands.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center">
  {/* Success: Safe operational confirmations */}
  <Button variant="success" leftIcon={<CheckCircle2 className="h-4 w-4" />}>
    Approve Access
  </Button>

  {/* Danger: Destructive / Critical operations */}
  <Button variant="danger" leftIcon={<Trash2 className="h-4 w-4" />}>
    Purge Node
  </Button>
</div>`}
          >
            <div className="flex flex-wrap gap-4 items-center justify-center p-6">
              <Button variant="success" leftIcon={<CheckCircle2 className="h-4 w-4" />}>
                Approve Access
              </Button>
              <Button variant="danger" leftIcon={<Trash2 className="h-4 w-4" />}>
                Purge Node
              </Button>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Cyberpunk Specials ── */}
      <ContentSection title="Cyberpunk Specials (Neon & Terminal)" id="cyber-tier">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Signature futuristic styling variants engineered for telemetry dashboards, terminal consoles, and hero cyber interfaces.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-6 items-center">
  {/* Neon: Cyan ambient aura & uppercase tracking */}
  <Button variant="neon" leftIcon={<Zap className="h-4 w-4" />}>
    QUANTUM OVERDRIVE
  </Button>

  {/* Terminal: Lowercase monospace developer console style */}
  <Button variant="terminal" leftIcon={<Terminal className="h-4 w-4" />}>
    $ execute-trace --all
  </Button>
</div>`}
          >
            <div className="flex flex-wrap gap-6 items-center justify-center p-8 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Button variant="neon" leftIcon={<Zap className="h-4 w-4" />}>
                QUANTUM OVERDRIVE
              </Button>
              <Button variant="terminal" leftIcon={<Terminal className="h-4 w-4" />}>
                $ execute-trace --all
              </Button>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Glassmorphism Variant ── */}
      <ContentSection title="Glassmorphism Variant" id="glass-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;glass&quot;</code> preset creates a frosted translucent button with a subtle white boundary that refracts ambient textures with cyan edge lighting on hover.
          </p>

          <Playground
            code={`<div className="p-8 rounded-2xl border border-white/10 bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat flex flex-wrap gap-4 items-center justify-center">
  <Button variant="glass">
    Glass Surface
  </Button>
  <Button variant="glass" leftIcon={<Sparkles className="h-4 w-4 text-cyan-300" />}>
    Frosted Matrix
  </Button>
  <Button variant="glass" size="icon" aria-label="Settings">
    <Sliders className="h-4 w-4 text-cyan-300" />
  </Button>
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl">
              <div className="relative z-10 flex flex-wrap gap-4 items-center justify-center">
                <Button variant="glass">
                  Glass Surface
                </Button>
                <Button variant="glass" leftIcon={<Sparkles className="h-4 w-4 text-cyan-300" />}>
                  Frosted Matrix
                </Button>
                <Button variant="glass" size="icon" aria-label="Settings">
                  <Sliders className="h-4 w-4 text-cyan-300" />
                </Button>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes & Icon Buttons ── */}
      <ContentSection title="Sizes & Icon Buttons" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Buttons are available in three standard proportional scales (<code className="text-cyan-400">sm</code>, <code className="text-cyan-400">md</code>, <code className="text-cyan-400">lg</code>) plus a dedicated square <code className="text-cyan-400">icon</code> size.
          </p>

          <Playground
            code={`<div className="flex flex-wrap items-center gap-4">
  <Button size="sm">Small (32px)</Button>
  <Button size="md">Medium (40px)</Button>
  <Button size="lg">Large (48px)</Button>
  <Button size="icon" variant="outline" aria-label="Quick Settings">
    <Sliders className="h-4 w-4" />
  </Button>
  <Button size="icon" variant="primary" aria-label="Initialize">
    <Play className="h-4 w-4" />
  </Button>
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 p-6">
              <Button size="sm">Small (32px)</Button>
              <Button size="md">Medium (40px)</Button>
              <Button size="lg">Large (48px)</Button>
              <Button size="icon" variant="outline" aria-label="Quick Settings">
                <Sliders className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="primary" aria-label="Initialize">
                <Play className="h-4 w-4" />
              </Button>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Cyber Glow Aura ── */}
      <ContentSection title="Cyber Glow Aura" id="glow-effect">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">{'glow={true}'}</code> to cast an atmospheric, multi-layered cyan aura around the button, creating intense cyberpunk visual emphasis.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-8 items-center">
  {/* Standard button without glow */}
  <Button variant="primary">
    Standard State
  </Button>

  {/* Button with active cyber glow aura */}
  <Button variant="primary" glow leftIcon={<Sparkles className="h-4 w-4" />}>
    Glow Aura Active
  </Button>
</div>`}
          >
            <div className="flex flex-wrap gap-8 items-center justify-center p-8 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Button variant="primary">
                Standard State
              </Button>
              <Button variant="primary" glow leftIcon={<Sparkles className="h-4 w-4" />}>
                Glow Aura Active
              </Button>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Icons & Loading State ── */}
      <ContentSection title="Icons & Loading State" id="icons-and-loading">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">leftIcon</code> and <code className="text-cyan-400">rightIcon</code> to enhance button context, or pass <code className="text-cyan-400">{'isLoading={true}'}</code> for async network operations.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center">
  <Button leftIcon={<Download className="h-4 w-4" />}>
    Export Telemetry
  </Button>
  <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
    Next Node
  </Button>
  <Button variant="primary" isLoading>
    Synchronizing...
  </Button>
  <Button variant="outline" disabled leftIcon={<RotateCcw className="h-4 w-4" />}>
    Disabled
  </Button>
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 p-6">
              <Button leftIcon={<Download className="h-4 w-4" />}>
                Export Telemetry
              </Button>
              <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Next Node
              </Button>
              <Button variant="primary" isLoading>
                Synchronizing...
              </Button>
              <Button variant="outline" disabled leftIcon={<RotateCcw className="h-4 w-4" />}>
                Disabled
              </Button>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Toolbar & Action Bar Composition ── */}
      <ContentSection title="Toolbar & Action Bar Composition" id="toolbar-composition">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Here is how different button tiers compose inside real application cards, modal footers, and telemetry control toolbars.
          </p>

          <Playground
            code={`<Card className="max-w-xl mx-auto">
  <CardHeader>
    <Row justify="between" align="center">
      <div>
        <CardTitle>Threat Containment Protocol</CardTitle>
        <CardDescription>Sector 09 anomaly isolation module</CardDescription>
      </div>
      <Badge variant="neon" dot dotColor="green">GUARD ACTIVE</Badge>
    </Row>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-slate-400 leading-relaxed">
      Executing emergency containment will isolate all external neural pathways and reroute power to the primary core.
    </p>
  </CardContent>
  <LayoutDivider />
  <CardFooter className="pt-4 flex justify-between items-center">
    {/* Destructive action on the left */}
    <Button variant="danger" size="sm" leftIcon={<ShieldAlert className="h-4 w-4" />}>
      Emergency Override
    </Button>

    {/* Standard actions grouped on the right */}
    <Row gap="sm">
      <Button variant="ghost" size="sm">
        Cancel
      </Button>
      <Button variant="primary" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
        Confirm Protocol
      </Button>
    </Row>
  </CardFooter>
</Card>`}
          >
            <div className="w-full p-4">
              <Card className="max-w-xl mx-auto">
                <CardHeader>
                  <Row justify="between" align="center">
                    <div>
                      <CardTitle>Threat Containment Protocol</CardTitle>
                      <CardDescription>Sector 09 anomaly isolation module</CardDescription>
                    </div>
                    <Badge variant="neon" dot dotColor="green">GUARD ACTIVE</Badge>
                  </Row>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Executing emergency containment will isolate all external neural pathways and reroute power to the primary core.
                  </p>
                </CardContent>
                <LayoutDivider />
                <CardFooter className="pt-4 flex justify-between items-center">
                  <Button variant="danger" size="sm" leftIcon={<ShieldAlert className="h-4 w-4" />}>
                    Emergency Override
                  </Button>

                  <Row gap="sm">
                    <Button variant="ghost" size="sm">
                      Cancel
                    </Button>
                    <Button variant="primary" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                      Confirm Protocol
                    </Button>
                  </Row>
                </CardFooter>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'variant',
              description: 'The visual style and semantic intent of the button.',
              type: '"primary" | "primary-subtle" | "primary-outline" | "secondary" | "outline" | "ghost" | "glass" | "success" | "danger" | "neon" | "terminal"',
              defaultValue: '"primary"',
            },
            {
              property: 'size',
              description: 'Proportional scale of the button padding, height, and typography.',
              type: '"sm" | "md" | "lg" | "icon"',
              defaultValue: '"md"',
            },
            {
              property: 'glow',
              description: 'Adds an intense multi-layered cyberpunk aura shadow.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'isLoading',
              description: 'Replaces left icon with animated spinner and disables user interaction.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'leftIcon',
              description: 'React icon element rendered before the text label.',
              type: 'React.ReactNode',
            },
            {
              property: 'rightIcon',
              description: 'React icon element rendered after the text label.',
              type: 'React.ReactNode',
            },
            {
              property: 'disabled',
              description: 'Disables button interactions and reduces opacity.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'asChild',
              description: 'Merges button props onto immediate child element (Radix Slot pattern).',
              type: 'boolean',
              defaultValue: 'false',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            Renders semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">{'<button>'}</code> elements with native keyboard activation via <kbd className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-white">Enter</kbd> and <kbd className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-white">Space</kbd>.
          </li>
          <li>
            Focus indicator conforms to WCAG 2.2 AA standards with high-contrast ring offsets.
          </li>
          <li>
            When <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">isLoading</code> is enabled, buttons set <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-disabled=&quot;true&quot;</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-busy=&quot;true&quot;</code>.
          </li>
          <li>
            Always provide descriptive <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label</code> on icon-only buttons (<code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">size=&quot;icon&quot;</code>) for screen reader accessibility.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Single Primary Rule:</strong> Limit <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">variant=&quot;primary&quot;</code> to one per card or form section to avoid cognitive dilution.
          </li>
          <li>
            <strong>Action-Oriented Verbs:</strong> Use active, unambiguous text labels like <em>&quot;Deploy Node&quot;</em> or <em>&quot;Synchronize Logs&quot;</em> instead of vague words like <em>&quot;Click Here&quot;</em>.
          </li>
          <li>
            <strong>Destructive Safety:</strong> Always apply <code className="text-rose-400 font-mono text-xs bg-rose-950/50 px-1.5 py-0.5 rounded">variant=&quot;danger&quot;</code> for permanent deletions or system terminations, ideally pairing them with confirmation modals or drawers.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
