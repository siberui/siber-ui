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
  FormField,
  Input,
  Textarea,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Key } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Wrapper Composition', level: 2 },
  { id: 'required-and-error', text: 'Required Indicators & Error Bindings', level: 2 },
  { id: 'disabled-state', text: 'Disabled Container State', level: 2 },
  { id: 'frosted-glass-form', text: 'Frosted Cyber-Glass Security Form', level: 2 },
  { id: 'tactical-hud-config', text: 'Tactical HUD Telemetry Configuration Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function FormFieldDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Form Field"
        description="Universal accessible layout wrapper providing glowing required dots, error alerts, helper descriptions, and automatic ARIA bindings for any form control."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { FormField } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Wrapper Composition" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Wrap custom controls or third-party inputs in <code className="text-cyan-400">FormField</code> to automatically standardize label positioning and monospace helper descriptions.
          </p>

          <Playground
            code={`<div className="max-w-md w-full">
  <FormField
    label="CUSTOM QUANTUM BUFFER"
    helperText="Input accepts arbitrary byte stream payloads"
  >
    <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] text-sm text-slate-200">
      <span className="font-mono text-xs text-cyan-400">0x7F_BUFFER_READY</span>
      <span className="text-xs text-slate-500 font-mono">IDLE</span>
    </div>
  </FormField>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-md w-full">
                <FormField
                  label="CUSTOM QUANTUM BUFFER"
                  helperText="Input accepts arbitrary byte stream payloads"
                >
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] text-sm text-slate-200">
                    <span className="font-mono text-xs text-cyan-400">0x7F_BUFFER_READY</span>
                    <span className="text-xs text-slate-500 font-mono">IDLE</span>
                  </div>
                </FormField>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Required & Error States ── */}
      <ContentSection title="Required Indicators & Error Bindings" id="required-and-error">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Setting <code className="text-cyan-400">required</code> attaches a glowing cyan indicator dot, while <code className="text-cyan-400">error</code> renders right-aligned warning feedback.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  <FormField
    label="OPERATOR IDENTIFIER"
    required
    error="INVALID_ALIAS: Operator signature not found in ledger"
  >
    <Input variant="neon" defaultValue="agent_unregistered" error />
  </FormField>

  <FormField
    label="EGRESS SUBNET"
    required
    helperText="Required for routing packets outside perimeter"
  >
    <Input variant="neon" defaultValue="10.240.0.1/16" success />
  </FormField>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <FormField
                  label="OPERATOR IDENTIFIER"
                  required
                  error="INVALID_ALIAS: Operator signature not found in ledger"
                >
                  <Input variant="neon" defaultValue="agent_unregistered" error />
                </FormField>

                <FormField
                  label="EGRESS SUBNET"
                  required
                  helperText="Required for routing packets outside perimeter"
                >
                  <Input variant="neon" defaultValue="10.240.0.1/16" success />
                </FormField>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Disabled State ── */}
      <ContentSection title="Disabled Container State" id="disabled-state">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Passing <code className="text-cyan-400">disabled</code> dims the entire field structure and blocks pointer interaction.
          </p>

          <Playground
            code={`<div className="max-w-md w-full">
  <FormField
    label="QUARANTINED INTERFACE"
    disabled
    helperText="Interface deactivated by root security policy"
  >
    <Input defaultValue="ETH_04_LOCKED" disabled />
  </FormField>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-md w-full">
                <FormField
                  label="QUARANTINED INTERFACE"
                  disabled
                  helperText="Interface deactivated by root security policy"
                >
                  <Input defaultValue="ETH_04_LOCKED" disabled />
                </FormField>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Security Form ── */}
      <ContentSection title="Frosted Cyber-Glass Security Form" id="frosted-glass-form">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Construct glassmorphic identity creation modules with circuit substrate backgrounds and animated boundary sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-5">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Key className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">NEW NODE REGISTRATION</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">V3.1</Badge>
    </div>

    <div className="space-y-4">
      <FormField label="NODE CODENAME" required>
        <Input variant="glass" placeholder="e.g. SENTINEL-ORBIT-09" />
      </FormField>

      <FormField label="LATTICE PUBLIC KEY" required helperText="Base64 encoded Ed25519 or Kyber string">
        <Textarea variant="glass" placeholder="Paste cryptographic public key..." rows={3} />
      </FormField>
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        REGISTER NODE
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Key className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">NEW NODE REGISTRATION</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">V3.1</Badge>
                  </div>

                  <div className="space-y-4">
                    <FormField label="NODE CODENAME" required>
                      <Input variant="glass" placeholder="e.g. SENTINEL-ORBIT-09" />
                    </FormField>

                    <FormField label="LATTICE PUBLIC KEY" required helperText="Base64 encoded Ed25519 or Kyber string">
                      <Textarea variant="glass" placeholder="Paste cryptographic public key..." rows={3} />
                    </FormField>
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      REGISTER NODE
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Configuration Card ── */}
      <ContentSection title="Tactical HUD Telemetry Configuration Card" id="tactical-hud-config">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Multi-field operational dashboard card with validation bindings.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ROUTER CONFIGURATION</CardTitle>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Configure BGP neighbor and MTU limits.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <FormField label="BGP NEIGHBOR AS" required>
      <Input variant="neon" defaultValue="AS64512" />
    </FormField>

    <FormField label="MTU MAXIMUM PACKET SIZE" helperText="Default value is 1500, max jumbo frame 9000">
      <Input variant="neon" defaultValue="9000" />
    </FormField>

    <div className="pt-2 flex justify-end gap-3">
      <Button variant="secondary" size="sm">RESET</Button>
      <Button variant="neon" size="sm" glow>APPLY CONFIG</Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ROUTER CONFIGURATION</CardTitle>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Configure BGP neighbor and MTU limits.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <FormField label="BGP NEIGHBOR AS" required>
                    <Input variant="neon" defaultValue="AS64512" />
                  </FormField>

                  <FormField label="MTU MAXIMUM PACKET SIZE" helperText="Default value is 1500, max jumbo frame 9000">
                    <Input variant="neon" defaultValue="9000" />
                  </FormField>

                  <div className="pt-2 flex justify-end gap-3">
                    <Button variant="secondary" size="sm">RESET</Button>
                    <Button variant="neon" size="sm" glow>APPLY CONFIG</Button>
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
              property: 'label',
              description: 'Monospace label rendered above the wrapped form control.',
              type: 'string',
            },
            {
              property: 'htmlFor',
              description: 'Explicit ID matching target input. Automatically generated if omitted.',
              type: 'string',
            },
            {
              property: 'error',
              description: 'Error state string or boolean. String displays right-aligned warning text.',
              type: 'string | boolean',
            },
            {
              property: 'helperText',
              description: 'Instructional text rendered beneath the child component.',
              type: 'string',
            },
            {
              property: 'required',
              description: 'Adds an illuminated cyan dot indicator preceding the label text.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'disabled',
              description: 'Dims opacity and disables pointer interaction on child controls.',
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
            <strong>Automatic ID Association:</strong> FormField generates a unique ID via <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">React.useId()</code> to bind labels to controls.
          </li>
          <li>
            <strong>Screen Reader Alerts:</strong> When <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">error</code> is a string, it renders with high-contrast text and announces validation issues clearly.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>When to Use:</strong> Use FormField when composing custom interactive blocks, composite multi-input rows, or wrapping external components.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
