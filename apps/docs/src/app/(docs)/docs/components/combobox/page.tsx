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
  Combobox,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Server } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Fuzzy Filter', level: 2 },
  { id: 'neon-variant', text: 'Neon Monospace Mode', level: 2 },
  { id: 'validation-feedback', text: 'Validation States (Error & Success)', level: 2 },
  { id: 'frosted-glass-finder', text: 'Frosted Cyber-Glass Cluster Target Finder', level: 2 },
  { id: 'tactical-hud-lock', text: 'Tactical HUD Telemetry Search Matrix', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ComboboxDocsPage() {
  const [targetNode, setTargetNode] = React.useState('node-frankfurt');
  const [selectedAgent, setSelectedAgent] = React.useState('sentinel-01');

  const nodes = [
    { value: 'node-virginia', label: 'IAD-01 (Virginia Core Gateway)' },
    { value: 'node-frankfurt', label: 'FRA-04 (Frankfurt Quantum Hub)' },
    { value: 'node-tokyo', label: 'NRT-02 (Tokyo Orbital Relay)' },
    { value: 'node-singapore', label: 'SIN-01 (Singapore Subnet)' },
    { value: 'node-dublin', label: 'DUB-03 (Dublin Edge Satellite)' },
  ];

  const agents = [
    { value: 'sentinel-01', label: 'SENTINEL_ALPHA (Kinetic Intercept)' },
    { value: 'sentinel-02', label: 'SENTINEL_BETA (EMP Discharge)' },
    { value: 'sentinel-03', label: 'SENTINEL_GAMMA (Optical Point-Defense)' },
    { value: 'sentinel-04', label: 'SENTINEL_DELTA (Lattice Firewall)' },
  ];

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Combobox"
        description="Fuzzy-searchable autocomplete popovers combining command palettes, custom keyboard navigation, and cyber glow halos."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Combobox } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Fuzzy Filter" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Combobox provides typeahead filtering for large lists of options with keyboard arrow navigation.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <Combobox
    label="TARGET CLUSTER EGRESS"
    placeholder="Search and select cluster..."
    searchPlaceholder="Filter clusters by region/ID..."
    options={nodes}
    value={targetNode}
    onChange={setTargetNode}
    helperText="Instantaneous search across 10,000+ federated nodes"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[300px]">
              <div className="max-w-sm w-full">
                <Combobox
                  label="TARGET CLUSTER EGRESS"
                  placeholder="Search and select cluster..."
                  searchPlaceholder="Filter clusters by region/ID..."
                  options={nodes}
                  value={targetNode}
                  onChange={setTargetNode}
                  helperText="Instantaneous search across 10,000+ federated nodes"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Monospace Mode" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Enable <code className="text-cyan-400">variant=&quot;neon&quot;</code> to illuminate both the trigger button and the popup menu with cyan laser outlines and monospace typography.
          </p>

          <Playground
            code={`<div className="max-w-sm w-full">
  <Combobox
    variant="neon"
    label="TACTICAL DEFENSE AGENT"
    placeholder="Select active sentinel..."
    searchPlaceholder="Type agent codename..."
    options={agents}
    value={selectedAgent}
    onChange={setSelectedAgent}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-h-[300px]">
              <div className="max-w-sm w-full">
                <Combobox
                  variant="neon"
                  label="TACTICAL DEFENSE AGENT"
                  placeholder="Select active sentinel..."
                  searchPlaceholder="Type agent codename..."
                  options={agents}
                  value={selectedAgent}
                  onChange={setSelectedAgent}
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
            Pass <code className="text-rose-400">error</code> or <code className="text-emerald-400">success</code> to visually color the combobox trigger border.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  <Combobox
    label="COMPROMISED NODE ROUTE"
    error="INVALID_ROUTE: Cryptographic gateway signature revoked"
    options={nodes}
    value="node-dublin"
  />

  <Combobox
    label="VERIFIED SECURE TUNNEL"
    success
    helperText="Mutual TLS handshake established"
    options={nodes}
    value="node-frankfurt"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[300px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <Combobox
                  label="COMPROMISED NODE ROUTE"
                  error="INVALID_ROUTE: Cryptographic gateway signature revoked"
                  options={nodes}
                  value="node-dublin"
                />

                <Combobox
                  label="VERIFIED SECURE TUNNEL"
                  success
                  helperText="Mutual TLS handshake established"
                  options={nodes}
                  value="node-frankfurt"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Cluster Target Finder ── */}
      <ContentSection title="Frosted Cyber-Glass Cluster Target Finder" id="frosted-glass-finder">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Construct glassmorphic node search dialogs layered on top of circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-6">
    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Server className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">DATABASE CLUSTER SELECT</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
    </div>

    <Combobox
      variant="neon"
      label="ACTIVE POSTGRES CLUSTER"
      options={nodes}
      value={targetNode}
      onChange={setTargetNode}
    />

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        CONNECT POOL
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden min-h-[350px]">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">DATABASE CLUSTER SELECT</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
                  </div>

                  <Combobox
                    variant="neon"
                    label="ACTIVE POSTGRES CLUSTER"
                    options={nodes}
                    value={targetNode}
                    onChange={setTargetNode}
                  />

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      CONNECT POOL
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Search Matrix ── */}
      <ContentSection title="Tactical HUD Telemetry Search Matrix" id="tactical-hud-lock">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Embed rapid node search fields into operational mission command dashboards.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">THREAT VECTOR DISPATCH</CardTitle>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Search and allocate intercept sentinels to active incursions.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <Combobox
      variant="neon"
      label="ASSIGNED INTERCEPT AGENT"
      options={agents}
      value={selectedAgent}
      onChange={setSelectedAgent}
    />

    <div className="pt-2 flex justify-end gap-3">
      <Button variant="secondary" size="sm">STAND DOWN</Button>
      <Button variant="neon" size="sm" glow>EXECUTE DISPATCH</Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[350px]">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">THREAT VECTOR DISPATCH</CardTitle>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Search and allocate intercept sentinels to active incursions.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <Combobox
                    variant="neon"
                    label="ASSIGNED INTERCEPT AGENT"
                    options={agents}
                    value={selectedAgent}
                    onChange={setSelectedAgent}
                  />

                  <div className="pt-2 flex justify-end gap-3">
                    <Button variant="secondary" size="sm">STAND DOWN</Button>
                    <Button variant="neon" size="sm" glow>EXECUTE DISPATCH</Button>
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
              description: 'Array of ComboboxOption objects with value and label strings.',
              type: 'ComboboxOption[]',
              defaultValue: '[]',
            },
            {
              property: 'value',
              description: 'Controlled string value of the chosen option.',
              type: 'string',
            },
            {
              property: 'onChange',
              description: 'Callback fired whenever an item is selected or cleared.',
              type: '(value: string) => void',
            },
            {
              property: 'variant',
              description: 'Visual style for trigger and popup menu.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'placeholder',
              description: 'Text displayed on trigger button when no value is chosen.',
              type: 'string',
              defaultValue: '"Select an option"',
            },
            {
              property: 'searchPlaceholder',
              description: 'Placeholder string for the internal popover search input.',
              type: 'string',
              defaultValue: '"Search..."',
            },
            {
              property: 'emptyText',
              description: 'Message displayed when zero options match the search filter.',
              type: 'string',
              defaultValue: '"No option found."',
            },
            {
              property: 'label',
              description: 'Monospace label linked above the combobox trigger.',
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
            <strong>WAI-ARIA Combobox:</strong> Adheres to the WAI-ARIA Combobox design pattern, setting <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;combobox&quot;</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-expanded</code>.
          </li>
          <li>
            <strong>Keyboard Filtering:</strong> Typing directly filters suggestions, and ArrowUp/ArrowDown keys cycle selection. Pressing <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">Enter</code> commits the selection.
          </li>
          <li>
            <strong>Focus Retention:</strong> Closing the popover automatically returns focus to the trigger button.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Search Threshold:</strong> Use Combobox instead of standard Select when the option list exceeds 15 items to allow users to quickly search by prefix or keyword.
          </li>
          <li>
            <strong>Empty States:</strong> Always specify a clear <code className="text-cyan-400">emptyText</code> (e.g. &quot;No matching server nodes found&quot;).
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
