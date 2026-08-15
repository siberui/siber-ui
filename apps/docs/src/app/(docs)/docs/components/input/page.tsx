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
  Input,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import {
  Terminal,
  Lock,
  Search,
  Key,
  ShieldCheck,
  Zap,
  Globe,
  Hash,
  Eye,
  CheckCircle,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Placeholders', level: 2 },
  { id: 'visual-variants', text: 'Visual Variants (Neon, Glass, Ghost)', level: 2 },
  { id: 'icons-and-addons', text: 'Icons, Addons & Clearable Controls', level: 2 },
  { id: 'validation-states', text: 'Validation States (Error, Success, Loading)', level: 2 },
  { id: 'sizes', text: 'Scale & Density (sm, md, lg)', level: 2 },
  { id: 'frosted-glass-console', text: 'Frosted Cyber-Glass Auth Terminal', level: 2 },
  { id: 'tactical-hud-login', text: 'Tactical HUD Node Uplink Composition', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function InputDocsPage() {
  const [query, setQuery] = React.useState('SYS_NODE_09');

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Input"
        description="Precision-engineered interactive form fields featuring cyber-glow halos, micro-addons, validation feedback, and frosted glass backdrops."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Input } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Placeholders" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Inputs accept standard HTML attributes along with integrated <code className="text-cyan-400">label</code> and <code className="text-cyan-400">helperText</code> properties for seamless layout composition.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-5 max-w-sm w-full">
  <Input
    label="OPERATOR IDENTIFIER"
    placeholder="e.g. AGENT-404"
    helperText="Assigned system credentials required for neural sync"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-5 max-w-sm w-full">
                <Input
                  label="OPERATOR IDENTIFIER"
                  placeholder="e.g. AGENT-404"
                  helperText="Assigned system credentials required for neural sync"
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
            Select between high-contrast <code className="text-cyan-400">neon</code> glow halos, translucent acrylic <code className="text-cyan-400">glass</code>, minimal <code className="text-cyan-400">ghost</code>, or clean solid <code className="text-cyan-400">default</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  <Input variant="neon" label="Neon Cyber Glow" placeholder="Listening on 0.0.0.0:8080..." leftIcon={<Terminal className="w-4 h-4 text-cyan-400" />} />
  <Input variant="glass" label="Frosted Glass" placeholder="Encrypted string..." leftIcon={<Lock className="w-4 h-4 text-slate-400" />} />
  <Input variant="default" label="Standard Neutral" placeholder="User alias..." />
  <Input variant="ghost" label="Ghost Minimal" placeholder="Search telemetry records..." leftIcon={<Search className="w-4 h-4 text-slate-400" />} />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <Input
                  variant="neon"
                  label="Neon Cyber Glow"
                  placeholder="Listening on 0.0.0.0:8080..."
                  leftIcon={<Terminal className="w-4 h-4 text-cyan-400" />}
                />
                <Input
                  variant="glass"
                  label="Frosted Glass"
                  placeholder="Encrypted string..."
                  leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
                />
                <Input
                  variant="default"
                  label="Standard Neutral"
                  placeholder="User alias..."
                />
                <Input
                  variant="ghost"
                  label="Ghost Minimal"
                  placeholder="Search telemetry records..."
                  leftIcon={<Search className="w-4 h-4 text-slate-400" />}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Icons, Addons & Clearable Controls ── */}
      <ContentSection title="Icons, Addons & Clearable Controls" id="icons-and-addons">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Attach contextual protocol prefixes with <code className="text-cyan-400">leftAddon</code> / <code className="text-cyan-400">rightAddon</code>, lead icons, and interactive <code className="text-cyan-400">clearable</code> action triggers.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-5 max-w-lg w-full">
  <Input
    leftAddon="https://"
    rightAddon=".cyber.io"
    placeholder="quantum-gateway"
    label="Node Endpoint URL"
  />

  <Input
    leftIcon={<Search className="w-4 h-4 text-cyan-400" />}
    clearable
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onClear={() => setQuery('')}
    label="Clearable Query Filter"
    placeholder="Search active clusters..."
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-5 max-w-lg w-full">
                <Input
                  leftAddon="https://"
                  rightAddon=".cyber.io"
                  placeholder="quantum-gateway"
                  label="Node Endpoint URL"
                />

                <Input
                  leftIcon={<Search className="w-4 h-4 text-cyan-400" />}
                  clearable
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onClear={() => setQuery('')}
                  label="Clearable Query Filter"
                  placeholder="Search active clusters..."
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Validation States ── */}
      <ContentSection title="Validation States (Error, Success, Loading)" id="validation-states">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">error</code>, <code className="text-emerald-400">success</code>, or <code className="text-cyan-400">isLoading</code> to display automatic state rings, spinner slots, and semantic warning messages.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  <Input
    label="Firewall Access Key"
    error="INVALID_HASH: Cryptographic checksum mismatch"
    defaultValue="0x9481FA_UNVERIFIED"
    leftIcon={<Key className="w-4 h-4 text-rose-400" />}
  />

  <Input
    label="Subnet Whitelist"
    success
    defaultValue="192.168.1.0/24"
    helperText="Verified subnet route established"
    leftIcon={<ShieldCheck className="w-4 h-4 text-emerald-400" />}
    rightIcon={<CheckCircle className="w-4 h-4 text-emerald-400" />}
  />

  <Input
    label="Quantum Key Handshake"
    isLoading
    defaultValue="Negotiating Diffie-Hellman entropy..."
  />

  <Input
    label="Decommissioned Port"
    disabled
    defaultValue="PORT_443_OFFLINE"
    helperText="Device currently quarantined"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <Input
                  label="Firewall Access Key"
                  error="INVALID_HASH: Cryptographic checksum mismatch"
                  defaultValue="0x9481FA_UNVERIFIED"
                  leftIcon={<Key className="w-4 h-4 text-rose-400" />}
                />

                <Input
                  label="Subnet Whitelist"
                  success
                  defaultValue="192.168.1.0/24"
                  helperText="Verified subnet route established"
                  leftIcon={<ShieldCheck className="w-4 h-4 text-emerald-400" />}
                  rightIcon={<CheckCircle className="w-4 h-4 text-emerald-400" />}
                />

                <Input
                  label="Quantum Key Handshake"
                  isLoading
                  defaultValue="Negotiating Diffie-Hellman entropy..."
                />

                <Input
                  label="Decommissioned Port"
                  disabled
                  defaultValue="PORT_443_OFFLINE"
                  helperText="Device currently quarantined"
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
            Tune control height across three standardized scale metrics: <code className="text-cyan-400">sm (32px)</code>, <code className="text-cyan-400">md (40px)</code>, and <code className="text-cyan-400">lg (48px)</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4 max-w-md w-full">
  <Input inputSize="sm" placeholder="Compact input (sm - 32px)..." leftIcon={<Search className="w-3.5 h-3.5" />} />
  <Input inputSize="md" placeholder="Standard input (md - 40px)..." leftIcon={<Search className="w-4 h-4" />} />
  <Input inputSize="lg" placeholder="Hero input (lg - 48px)..." leftIcon={<Search className="w-5 h-5 text-cyan-400" />} />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-4 max-w-md w-full">
                <Input inputSize="sm" placeholder="Compact input (sm - 32px)..." leftIcon={<Search className="w-3.5 h-3.5" />} />
                <Input inputSize="md" placeholder="Standard input (md - 40px)..." leftIcon={<Search className="w-4 h-4" />} />
                <Input inputSize="lg" placeholder="Hero input (lg - 48px)..." leftIcon={<Search className="w-5 h-5 text-cyan-400" />} />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Auth Terminal ── */}
      <ContentSection title="Frosted Cyber-Glass Auth Terminal" id="frosted-glass-console">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Compose high-security authentication consoles using frosted acrylic <code className="text-cyan-400">variant=&quot;glass&quot;</code> fields nested on circuit textures with perimeter <code className="text-cyan-400">BorderBeam</code> sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-6">
    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-cyan-400 animate-pulse" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">NEURAL UPLINK GATE</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
    </div>

    <div className="space-y-4">
      <Input
        variant="glass"
        label="Cyber Identity"
        placeholder="operator@siber.corp"
        leftIcon={<Globe className="w-4 h-4 text-slate-400" />}
      />

      <Input
        variant="glass"
        type="password"
        label="Quantum Passcode"
        placeholder="••••••••••••"
        leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
        rightIcon={<Eye className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white" />}
      />
    </div>

    <Button variant="neon" glow className="w-full">
      AUTHENTICATE NODE
    </Button>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-cyan-400 animate-pulse" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">NEURAL UPLINK GATE</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
                  </div>

                  <div className="space-y-4">
                    <Input
                      variant="glass"
                      label="Cyber Identity"
                      placeholder="operator@siber.corp"
                      leftIcon={<Globe className="w-4 h-4 text-slate-400" />}
                    />

                    <Input
                      variant="glass"
                      type="password"
                      label="Quantum Passcode"
                      placeholder="••••••••••••"
                      leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
                      rightIcon={<Eye className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white" />}
                    />
                  </div>

                  <Button variant="neon" glow className="w-full">
                    AUTHENTICATE NODE
                  </Button>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Node Uplink Composition ── */}
      <ContentSection title="Tactical HUD Node Uplink Composition" id="tactical-hud-login">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Integrate high-density form fields into defense matrix dashboards with telemetry metadata and monospace status badges.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">TARGET NODE ROUTER</CardTitle>
      <Badge variant="neon" size="sm">ROUTING ACTIVE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Configure proxy tunnel credentials for secure cluster transport.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <Input
      variant="neon"
      label="Cluster Host IP"
      defaultValue="10.240.88.192"
      leftIcon={<Hash className="w-4 h-4 text-cyan-400" />}
    />

    <Input
      variant="neon"
      label="Tunnel Port"
      defaultValue="9443"
      leftIcon={<Terminal className="w-4 h-4 text-cyan-400" />}
    />

    <div className="pt-2 flex justify-end gap-3">
      <Button variant="secondary" size="sm">RESET</Button>
      <Button variant="neon" size="sm" glow>DEPLOY TUNNEL</Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">TARGET NODE ROUTER</CardTitle>
                    <Badge variant="neon" size="sm">ROUTING ACTIVE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Configure proxy tunnel credentials for secure cluster transport.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <Input
                    variant="neon"
                    label="Cluster Host IP"
                    defaultValue="10.240.88.192"
                    leftIcon={<Hash className="w-4 h-4 text-cyan-400" />}
                  />

                  <Input
                    variant="neon"
                    label="Tunnel Port"
                    defaultValue="9443"
                    leftIcon={<Terminal className="w-4 h-4 text-cyan-400" />}
                  />

                  <div className="pt-2 flex justify-end gap-3">
                    <Button variant="secondary" size="sm">RESET</Button>
                    <Button variant="neon" size="sm" glow>DEPLOY TUNNEL</Button>
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
              property: 'variant',
              description: 'Surface aesthetics and glow styling preset.',
              type: '"default" | "neon" | "glass" | "ghost" | "primary" | "primary-subtle" | "primary-outline"',
              defaultValue: '"default"',
            },
            {
              property: 'inputSize',
              description: 'Scale and vertical touch target density.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'label',
              description: 'Accessible top label rendered with proper htmlFor linkage.',
              type: 'string',
            },
            {
              property: 'helperText',
              description: 'Descriptive subtext beneath the input field.',
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
            {
              property: 'isLoading',
              description: 'Displays a spinning loading indicator and disables user input.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'clearable',
              description: 'Renders an interactive clear (×) button when content is present.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'onClear',
              description: 'Callback fired when the user clicks the clear action trigger.',
              type: '() => void',
            },
            {
              property: 'leftIcon',
              description: 'Icon element pinned inside the left margin.',
              type: 'React.ReactNode',
            },
            {
              property: 'rightIcon',
              description: 'Icon element pinned inside the right margin.',
              type: 'React.ReactNode',
            },
            {
              property: 'leftAddon',
              description: 'Fixed prefix badge/button adjoining the input.',
              type: 'React.ReactNode',
            },
            {
              property: 'rightAddon',
              description: 'Fixed suffix badge/button adjoining the input.',
              type: 'React.ReactNode',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Label Association:</strong> When <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">label</code> is provided, it automatically pairs with the input via an internal unique ID for assistive technologies.
          </li>
          <li>
            <strong>ARIA Invalid:</strong> Supplying <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">error</code> automatically flags <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-invalid=&quot;true&quot;</code>.
          </li>
          <li>
            <strong>Focus Visibility:</strong> All input variants implement high-contrast <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">focus-visible:ring-2</code> keyboard focus rings.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Clear Signifiers:</strong> Always provide explicit placeholder formats or helper instructions for cryptographic keys or masked values.
          </li>
          <li>
            <strong>Glass Theming:</strong> Reserve <code className="text-cyan-400">variant=&quot;glass&quot;</code> for dark or textured acrylic cards to ensure high text contrast.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
