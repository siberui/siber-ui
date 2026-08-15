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
  RadioGroup,
  Radio,
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
  { id: 'basic-usage', text: 'Basic Usage & Descriptions', level: 2 },
  { id: 'neon-variant', text: 'Neon Glow Variant', level: 2 },
  { id: 'horizontal-layout', text: 'Horizontal & Multi-Column Flow', level: 2 },
  { id: 'sizes', text: 'Scale & Density (sm, md, lg)', level: 2 },
  { id: 'frosted-glass-selector', text: 'Frosted Cyber-Glass Cipher Suite Selector', level: 2 },
  { id: 'tactical-hud-router', text: 'Tactical HUD Cluster Routing Dashboard', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function RadioDocsPage() {
  const [selectedCipher, setSelectedCipher] = React.useState('lattice');

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Radio Group"
        description="Single-selection radio button controls featuring illuminated laser cores, cyber-glow focus halos, and contextual telemetry metadata."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { RadioGroup, Radio } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Descriptions" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Wrap radio options within a <code className="text-cyan-400">RadioGroup</code> to establish accessible keyboard navigation and single-value state management.
          </p>

          <Playground
            code={`<RadioGroup defaultValue="automated" label="ANOMALY RESPONSE POLICY">
  <Radio
    radioValue="automated"
    label="Autonomous Quarantine"
    description="Isolate compromised subnets immediately upon detection"
  />
  <Radio
    radioValue="manual"
    label="Manual Operator Signoff"
    description="Route alert telemetry to active tier-3 sentinels"
  />
  <Radio
    radioValue="passive"
    label="Passive Telemetry Only"
    description="Log signature payloads without network disruption"
  />
</RadioGroup>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-md w-full">
                <RadioGroup defaultValue="automated" label="ANOMALY RESPONSE POLICY">
                  <Radio
                    radioValue="automated"
                    label="Autonomous Quarantine"
                    description="Isolate compromised subnets immediately upon detection"
                  />
                  <Radio
                    radioValue="manual"
                    label="Manual Operator Signoff"
                    description="Route alert telemetry to active tier-3 sentinels"
                  />
                  <Radio
                    radioValue="passive"
                    label="Passive Telemetry Only"
                    description="Log signature payloads without network disruption"
                  />
                </RadioGroup>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Glow Variant ── */}
      <ContentSection title="Neon Glow Variant" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Activate <code className="text-cyan-400">variant=&quot;neon&quot;</code> to illuminate the active radio core with an electric cyan laser aura.
          </p>

          <Playground
            code={`<RadioGroup defaultValue="eu-central" label="PRIMARY QUANTUM NODE">
  <Radio
    variant="neon"
    radioValue="us-east"
    label="US-EAST-1 (Virginia)"
    description="Latency 12ms • 99.999% uptime"
  />
  <Radio
    variant="neon"
    radioValue="eu-central"
    label="EU-CENTRAL-1 (Frankfurt)"
    description="Latency 4ms • Primary orbital uplink"
  />
  <Radio
    variant="neon"
    radioValue="ap-east"
    label="AP-EAST-1 (Hong Kong)"
    description="Latency 48ms • Standby failover"
  />
</RadioGroup>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-md w-full">
                <RadioGroup defaultValue="eu-central" label="PRIMARY QUANTUM NODE">
                  <Radio
                    variant="neon"
                    radioValue="us-east"
                    label="US-EAST-1 (Virginia)"
                    description="Latency 12ms • 99.999% uptime"
                  />
                  <Radio
                    variant="neon"
                    radioValue="eu-central"
                    label="EU-CENTRAL-1 (Frankfurt)"
                    description="Latency 4ms • Primary orbital uplink"
                  />
                  <Radio
                    variant="neon"
                    radioValue="ap-east"
                    label="AP-EAST-1 (Hong Kong)"
                    description="Latency 48ms • Standby failover"
                  />
                </RadioGroup>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Horizontal Layout ── */}
      <ContentSection title="Horizontal & Multi-Column Flow" id="horizontal-layout">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Set <code className="text-cyan-400">orientation=&quot;horizontal&quot;</code> for inline option bars and segmented filter triggers.
          </p>

          <Playground
            code={`<RadioGroup orientation="horizontal" defaultValue="high" label="ENCRYPTION LEVEL">
  <Radio variant="neon" radioValue="standard" label="Standard (AES-256)" />
  <Radio variant="neon" radioValue="high" label="High (Lattice-512)" />
  <Radio variant="neon" radioValue="maximum" label="Maximum (Quantum Zero)" />
</RadioGroup>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <RadioGroup orientation="horizontal" defaultValue="high" label="ENCRYPTION LEVEL">
                <Radio variant="neon" radioValue="standard" label="Standard (AES-256)" />
                <Radio variant="neon" radioValue="high" label="High (Lattice-512)" />
                <Radio variant="neon" radioValue="maximum" label="Maximum (Quantum Zero)" />
              </RadioGroup>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Scale & Density (sm, md, lg)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Tune target circle scale across <code className="text-cyan-400">sm (14px)</code>, <code className="text-cyan-400">md (16px)</code>, and <code className="text-cyan-400">lg (20px)</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-5 max-w-md w-full">
  <RadioGroup defaultValue="a">
    <Radio radioSize="sm" radioValue="a" label="Compact radio (sm - 14px)" />
  </RadioGroup>
  <RadioGroup defaultValue="b">
    <Radio radioSize="md" radioValue="b" label="Standard radio (md - 16px)" />
  </RadioGroup>
  <RadioGroup defaultValue="c">
    <Radio radioSize="lg" radioValue="c" label="Hero density radio (lg - 20px)" />
  </RadioGroup>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-5 max-w-md w-full">
                <RadioGroup defaultValue="a">
                  <Radio radioSize="sm" radioValue="a" label="Compact radio (sm - 14px)" />
                </RadioGroup>
                <RadioGroup defaultValue="b">
                  <Radio radioSize="md" radioValue="b" label="Standard radio (md - 16px)" />
                </RadioGroup>
                <RadioGroup defaultValue="c">
                  <Radio radioSize="lg" radioValue="c" label="Hero density radio (lg - 20px)" />
                </RadioGroup>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Cipher Suite Selector ── */}
      <ContentSection title="Frosted Cyber-Glass Cipher Suite Selector" id="frosted-glass-selector">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Construct glassmorphic encryption selection panels layered on top of circuit substrate textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-5">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Key className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">CIPHER ENGINE SELECT</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">READY</Badge>
    </div>

    <RadioGroup
      value={selectedCipher}
      onValueChange={setSelectedCipher}
      label="ACTIVE CRYPTOGRAPHIC PRIMITIVE"
    >
      <Radio
        variant="neon"
        radioValue="lattice"
        label="Kyber-1024 Lattice Cryptography"
        description="NIST-standard post-quantum key exchange"
      />
      <Radio
        variant="neon"
        radioValue="ecc"
        label="Curve25519 Elliptic Curve"
        description="High-speed hardware-accelerated signature"
      />
      <Radio
        variant="neon"
        radioValue="rsa"
        label="RSA-4096 Legacy Fallback"
        description="Traditional PKI certificate compatibility"
      />
    </RadioGroup>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        APPLY CIPHER CONFIG
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
                      <span className="font-mono text-xs font-bold text-white tracking-wider">CIPHER ENGINE SELECT</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">READY</Badge>
                  </div>

                  <RadioGroup
                    value={selectedCipher}
                    onValueChange={setSelectedCipher}
                    label="ACTIVE CRYPTOGRAPHIC PRIMITIVE"
                  >
                    <Radio
                      variant="neon"
                      radioValue="lattice"
                      label="Kyber-1024 Lattice Cryptography"
                      description="NIST-standard post-quantum key exchange"
                    />
                    <Radio
                      variant="neon"
                      radioValue="ecc"
                      label="Curve25519 Elliptic Curve"
                      description="High-speed hardware-accelerated signature"
                    />
                    <Radio
                      variant="neon"
                      radioValue="rsa"
                      label="RSA-4096 Legacy Fallback"
                      description="Traditional PKI certificate compatibility"
                    />
                  </RadioGroup>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      APPLY CIPHER CONFIG
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Cluster Routing Dashboard ── */}
      <ContentSection title="Tactical HUD Cluster Routing Dashboard" id="tactical-hud-router">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite cluster routing console with live server node selections.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">EDGE REPLICATION HUB</CardTitle>
      <Badge variant="neon" size="sm">ROUTED</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Select master consensus node for cross-region state commit.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <RadioGroup defaultValue="tokyo">
      <Radio
        variant="neon"
        radioValue="tokyo"
        label="NRT-01 (Tokyo Nexus)"
        description="Active leader • 840 tx/s"
      />
      <Radio
        variant="neon"
        radioValue="frankfurt"
        label="FRA-04 (Frankfurt Hub)"
        description="Synchronized replica • 838 tx/s"
      />
      <Radio
        variant="neon"
        radioValue="virginia"
        label="IAD-02 (Virginia Gateway)"
        description="Synchronized replica • 835 tx/s"
      />
    </RadioGroup>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">EDGE REPLICATION HUB</CardTitle>
                    <Badge variant="neon" size="sm">ROUTED</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Select master consensus node for cross-region state commit.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <RadioGroup defaultValue="tokyo">
                    <Radio
                      variant="neon"
                      radioValue="tokyo"
                      label="NRT-01 (Tokyo Nexus)"
                      description="Active leader • 840 tx/s"
                    />
                    <Radio
                      variant="neon"
                      radioValue="frankfurt"
                      label="FRA-04 (Frankfurt Hub)"
                      description="Synchronized replica • 838 tx/s"
                    />
                    <Radio
                      variant="neon"
                      radioValue="virginia"
                      label="IAD-02 (Virginia Gateway)"
                      description="Synchronized replica • 835 tx/s"
                    />
                  </RadioGroup>
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
              property: 'orientation',
              description: 'RadioGroup: layout orientation axis.',
              type: '"horizontal" | "vertical"',
              defaultValue: '"vertical"',
            },
            {
              property: 'value',
              description: 'RadioGroup: Controlled active radio value.',
              type: 'string',
            },
            {
              property: 'defaultValue',
              description: 'RadioGroup: Initial active value in uncontrolled mode.',
              type: 'string',
            },
            {
              property: 'onValueChange',
              description: 'RadioGroup: Callback triggered when selection changes.',
              type: '(value: string) => void',
            },
            {
              property: 'variant',
              description: 'Radio: Cyber glow preset.',
              type: '"default" | "neon" | "primary" | "primary-subtle" | "primary-outline"',
              defaultValue: '"default"',
            },
            {
              property: 'radioValue',
              description: 'Radio: Unique string value identifying this radio option (required).',
              type: 'string',
            },
            {
              property: 'radioSize',
              description: 'Radio: Circle dimensions preset.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'label',
              description: 'Radio: Primary text displayed beside the radio button.',
              type: 'string',
            },
            {
              property: 'description',
              description: 'Radio: Monospace secondary telemetry description.',
              type: 'string',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>WAI-ARIA RadioGroup:</strong> Implements <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;radiogroup&quot;</code> and properly groups child radios under a shared HTML form name.
          </li>
          <li>
            <strong>Arrow Key Navigation:</strong> Users can smoothly navigate and cycle active options using the Up, Down, Left, and Right arrow keys.
          </li>
          <li>
            <strong>Label Association:</strong> The entire container is wrapped in a clickable label element with full touch and cursor hit areas.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Mutual Exclusivity:</strong> Use Radio Groups only when exactly one option can be chosen from a set of 2 to 7 mutually exclusive choices.
          </li>
          <li>
            <strong>Default Value:</strong> Always provide a sensible default selection to avoid ambiguous uncommitted states in operational dashboards.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
