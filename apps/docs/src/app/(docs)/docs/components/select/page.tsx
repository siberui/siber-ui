'use client';

import * as React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  Select,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Globe } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Option Sets', level: 2 },
  { id: 'grouped-options', text: 'Categorized Option Groups', level: 2 },
  { id: 'visual-variants', text: 'Visual Variants (Neon, Glass, Ghost)', level: 2 },
  { id: 'validation-feedback', text: 'Validation States (Error & Success)', level: 2 },
  { id: 'sizes', text: 'Scale & Density (sm, md, lg)', level: 2 },
  { id: 'frosted-glass-node-selector', text: 'Frosted Cyber-Glass Cluster Target Selector', level: 2 },
  { id: 'tactical-hud-console', text: 'Tactical HUD Defense Dispatch Console', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function SelectDocsPage() {
  const basicOptions = [
    { value: 'us-east', label: 'US East (Virginia Hub)' },
    { value: 'us-west', label: 'US West (Oregon Node)' },
    { value: 'eu-central', label: 'EU Central (Frankfurt Nexus)' },
    { value: 'ap-east', label: 'AP East (Hong Kong Uplink)' },
  ];

  const groupedOptions = [
    {
      label: 'NORTH AMERICA REGION',
      options: [
        { value: 'us-east-1', label: 'IAD-01 (Virginia Core)' },
        { value: 'us-west-2', label: 'PDX-02 (Oregon Edge)' },
      ],
    },
    {
      label: 'EUROPEAN UNION REGION',
      options: [
        { value: 'eu-west-1', label: 'DUB-01 (Dublin Satellite)' },
        { value: 'eu-central-1', label: 'FRA-03 (Frankfurt Core)' },
      ],
    },
    {
      label: 'ASIA PACIFIC REGION',
      options: [
        { value: 'ap-northeast-1', label: 'NRT-02 (Tokyo Nexus)' },
        { value: 'ap-southeast-1', label: 'SIN-01 (Singapore Gateway)' },
      ],
    },
  ];

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Select"
        description="High-density dropdown select menus featuring custom chevron animations, cyber-glow perimeters, and optgroup categorization."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Select } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Option Sets" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass an array of <code className="text-cyan-400">options</code> with value-label objects and configure descriptive helper text.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <Select
    label="PRIMARY REPLICATION GATEWAY"
    placeholder="Choose egress region..."
    helperText="Select target region for realtime commit sync"
    options={[
      { value: 'us-east', label: 'US East (Virginia Hub)' },
      { value: 'us-west', label: 'US West (Oregon Node)' },
      { value: 'eu-central', label: 'EU Central (Frankfurt Nexus)' },
      { value: 'ap-east', label: 'AP East (Hong Kong Uplink)' },
    ]}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-sm w-full">
                <Select
                  label="PRIMARY REPLICATION GATEWAY"
                  placeholder="Choose egress region..."
                  helperText="Select target region for realtime commit sync"
                  options={basicOptions}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Grouped Options ── */}
      <ContentSection title="Categorized Option Groups" id="grouped-options">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Organize complex multi-tier lists into formatted categories using <code className="text-cyan-400">optgroup</code> structures.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <Select
    label="ORBITAL CLUSTER REGION"
    placeholder="Select planetary node..."
    options={groupedOptions}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-sm w-full">
                <Select
                  label="ORBITAL CLUSTER REGION"
                  placeholder="Select planetary node..."
                  options={groupedOptions}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Visual Variants ── */}
      <ContentSection title="Visual Variants (Neon, Glass, Ghost)" id="visual-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select between glowing monospace <code className="text-cyan-400">neon</code>, translucent acrylic <code className="text-cyan-400">glass</code>, minimal <code className="text-cyan-400">ghost</code>, or clean solid <code className="text-cyan-400">default</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  <Select
    variant="neon"
    label="AI INFERENCE MODEL"
    options={[
      { value: 'gpt-siber-v4', label: 'Cyber-LLM v4 (Quantum)' },
      { value: 'neural-mesh-v2', label: 'Neural Mesh v2 (Lattice)' },
    ]}
  />

  <Select
    variant="glass"
    label="ENCRYPTION PROTOCOL"
    options={[
      { value: 'lattice', label: 'Kyber-1024 (Post-Quantum)' },
      { value: 'curve', label: 'Curve25519 (Elliptic)' },
    ]}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <Select
                  variant="neon"
                  label="AI INFERENCE MODEL"
                  options={[
                    { value: 'gpt-siber-v4', label: 'Cyber-LLM v4 (Quantum)' },
                    { value: 'neural-mesh-v2', label: 'Neural Mesh v2 (Lattice)' },
                  ]}
                />

                <Select
                  variant="glass"
                  label="ENCRYPTION PROTOCOL"
                  options={[
                    { value: 'lattice', label: 'Kyber-1024 (Post-Quantum)' },
                    { value: 'curve', label: 'Curve25519 (Elliptic)' },
                  ]}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Validation Feedback ── */}
      <ContentSection title="Validation States (Error & Success)" id="validation-feedback">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Display contextual validation perimeters and chevron colors using <code className="text-rose-400">error</code> or <code className="text-emerald-400">success</code> props.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  <Select
    label="DECOMMISSIONED SUBNET"
    error="GATEWAY_OFFLINE: Destination port 443 is quarantined"
    options={basicOptions}
    defaultValue="us-west"
  />

  <Select
    label="VERIFIED UPLINK ROUTE"
    success
    helperText="Latency 0.38ms within permissible bounds"
    options={basicOptions}
    defaultValue="eu-central"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <Select
                  label="DECOMMISSIONED SUBNET"
                  error="GATEWAY_OFFLINE: Destination port 443 is quarantined"
                  options={basicOptions}
                  defaultValue="us-west"
                />

                <Select
                  label="VERIFIED UPLINK ROUTE"
                  success
                  helperText="Latency 0.38ms within permissible bounds"
                  options={basicOptions}
                  defaultValue="eu-central"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Scale & Density (sm, md, lg)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Calibrate menu button heights across <code className="text-cyan-400">sm (32px)</code>, <code className="text-cyan-400">md (40px)</code>, and <code className="text-cyan-400">lg (48px)</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4 max-w-sm w-full">
  <Select selectSize="sm" options={basicOptions} placeholder="Compact menu (sm - 32px)..." />
  <Select selectSize="md" options={basicOptions} placeholder="Standard menu (md - 40px)..." />
  <Select selectSize="lg" options={basicOptions} placeholder="Hero menu (lg - 48px)..." />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-4 max-w-sm w-full">
                <Select selectSize="sm" options={basicOptions} placeholder="Compact menu (sm - 32px)..." />
                <Select selectSize="md" options={basicOptions} placeholder="Standard menu (md - 40px)..." />
                <Select selectSize="lg" options={basicOptions} placeholder="Hero menu (lg - 48px)..." />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Cluster Target Selector ── */}
      <ContentSection title="Frosted Cyber-Glass Cluster Target Selector" id="frosted-glass-node-selector">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Compose acrylic select dialogs nested on circuit textures with animated boundary beams.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-6">
    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">ROUTING GATEWAY TARGET</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">BGP-4</Badge>
    </div>

    <div className="space-y-4">
      <Select
        variant="glass"
        label="PRIMARY EGRESS CLUSTER"
        options={groupedOptions}
        defaultValue="fra-03"
      />
      <Select
        variant="glass"
        label="FAILOVER PEER"
        options={groupedOptions}
        defaultValue="dub-01"
      />
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        ESTABLISH BGP PEER
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">ROUTING GATEWAY TARGET</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">BGP-4</Badge>
                  </div>

                  <div className="space-y-4">
                    <Select
                      variant="glass"
                      label="PRIMARY EGRESS CLUSTER"
                      options={groupedOptions}
                      defaultValue="fra-03"
                    />
                    <Select
                      variant="glass"
                      label="FAILOVER PEER"
                      options={groupedOptions}
                      defaultValue="dub-01"
                    />
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      ESTABLISH BGP PEER
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Defense Dispatch Console ── */}
      <ContentSection title="Tactical HUD Defense Dispatch Console" id="tactical-hud-console">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite defense dispatch dropdown card with live threat status metadata.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SENTINEL DISPATCH MATRIX</CardTitle>
      <Badge variant="neon" size="sm">READY</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Route incoming sector alerts to active defense agents.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <Select
      variant="neon"
      label="ASSIGNED TACTICAL SENTINEL"
      options={[
        { value: 's-01', label: 'SENTINEL_ALPHA (Kinetic Rail)' },
        { value: 's-02', label: 'SENTINEL_BETA (EMP Wave)' },
        { value: 's-03', label: 'SENTINEL_GAMMA (Laser Intercept)' },
      ]}
      defaultValue="s-01"
    />

    <Select
      variant="neon"
      label="INTERCEPTION ESCALATION LEVEL"
      options={[
        { value: 'def-1', label: 'DEFCON 1 — Immediate Kinetic Strike' },
        { value: 'def-2', label: 'DEFCON 2 — Lock Target & Await Ack' },
        { value: 'def-3', label: 'DEFCON 3 — Passive Surveillance' },
      ]}
      defaultValue="def-2"
    />

    <div className="pt-2 flex justify-end gap-3">
      <Button variant="secondary" size="sm">STAND DOWN</Button>
      <Button variant="neon" size="sm" glow>DEPLOY ORDERS</Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">SENTINEL DISPATCH MATRIX</CardTitle>
                    <Badge variant="neon" size="sm">READY</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Route incoming sector alerts to active defense agents.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <Select
                    variant="neon"
                    label="ASSIGNED TACTICAL SENTINEL"
                    options={[
                      { value: 's-01', label: 'SENTINEL_ALPHA (Kinetic Rail)' },
                      { value: 's-02', label: 'SENTINEL_BETA (EMP Wave)' },
                      { value: 's-03', label: 'SENTINEL_GAMMA (Laser Intercept)' },
                    ]}
                    defaultValue="s-01"
                  />

                  <Select
                    variant="neon"
                    label="INTERCEPTION ESCALATION LEVEL"
                    options={[
                      { value: 'def-1', label: 'DEFCON 1 — Immediate Kinetic Strike' },
                      { value: 'def-2', label: 'DEFCON 2 — Lock Target & Await Ack' },
                      { value: 'def-3', label: 'DEFCON 3 — Passive Surveillance' },
                    ]}
                    defaultValue="def-2"
                  />

                  <div className="pt-2 flex justify-end gap-3">
                    <Button variant="secondary" size="sm">STAND DOWN</Button>
                    <Button variant="neon" size="sm" glow>DEPLOY ORDERS</Button>
                  </div>
                </CardContent>
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
              property: 'options',
              description: 'Array of flat SelectOption objects or categorized SelectOptionGroup records.',
              type: '(SelectOption | SelectOptionGroup)[]',
              defaultValue: '[]',
            },
            {
              property: 'variant',
              description: 'Visual surface styling and laser glow preset.',
              type: '"default" | "neon" | "glass" | "ghost" | "primary" | "primary-subtle" | "primary-outline"',
              defaultValue: '"default"',
            },
            {
              property: 'selectSize',
              description: 'Physical touch target height and text density.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'label',
              description: 'Monospace label linked above the select trigger.',
              type: 'string',
            },
            {
              property: 'helperText',
              description: 'Instructional subtext beneath the input field.',
              type: 'string',
            },
            {
              property: 'placeholder',
              description: 'Initial disabled placeholder string shown when no value is chosen.',
              type: 'string',
            },
            {
              property: 'error',
              description: 'Displays a high-priority warning message and activates danger state ring.',
              type: 'string | boolean',
            },
            {
              property: 'success',
              description: 'Activates emerald verified perimeter styling.',
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
            <strong>Native HTML Select:</strong> Uses native HTML <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;select&gt;</code> elements for zero-overhead performance, automatic mobile OS picker wheel integration, and complete keyboard accessibility.
          </li>
          <li>
            <strong>Focus Visibility:</strong> Features high-contrast <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">focus-visible:ring-2</code> halos.
          </li>
          <li>
            <strong>Label Association:</strong> The <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">label</code> prop automatically pairs with the select element via unique ID matching.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Option Counts:</strong> Select is best suited for 5 to 50 options. For fewer than 5 options, consider using <code className="text-cyan-400">RadioGroup</code>; for over 50 options or searchable items, use <code className="text-cyan-400">Combobox</code>.
          </li>
          <li>
            <strong>Group Labels:</strong> Always use uppercase headers for <code className="text-cyan-400">optgroup</code> items to match the cyber aesthetic.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
