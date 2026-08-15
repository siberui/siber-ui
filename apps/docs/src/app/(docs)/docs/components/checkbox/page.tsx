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
  Checkbox,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Lock } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Descriptions', level: 2 },
  { id: 'signal-variants', text: 'Signal & Semantic Color Halos', level: 2 },
  { id: 'indeterminate-group', text: 'Indeterminate State & Batch Selection', level: 2 },
  { id: 'sizes', text: 'Scale & Density (sm, md, lg)', level: 2 },
  { id: 'frosted-glass-permissions', text: 'Frosted Cyber-Glass Permission Matrix', level: 2 },
  { id: 'tactical-hud-telemetry', text: 'Tactical HUD Defense Module Selector', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function CheckboxDocsPage() {
  const [items, setItems] = React.useState({
    firewall: true,
    telemetry: true,
    quarantine: false,
  });

  const allChecked = items.firewall && items.telemetry && items.quarantine;
  const isIndeterminate =
    (items.firewall || items.telemetry || items.quarantine) && !allChecked;

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Checkbox"
        description="High-precision binary and tri-state selection triggers featuring animated laser checks, cyber glow aura halos, and micro-description subtext."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Checkbox } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Descriptions" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Checkboxes integrate primary labels and optional monospace telemetry descriptions.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4 max-w-md w-full">
  <Checkbox
    label="Enable Quantum Encrypted Handshake"
    description="Encrypt all TLS payloads with lattice cryptography"
    defaultChecked
  />
  <Checkbox
    label="Permit Autonomous Route Optimization"
    description="Allow BGP re-routing based on live ping telemetry"
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-5 max-w-md w-full">
                <Checkbox
                  label="Enable Quantum Encrypted Handshake"
                  description="Encrypt all TLS payloads with lattice cryptography"
                  defaultChecked
                />
                <Checkbox
                  label="Permit Autonomous Route Optimization"
                  description="Allow BGP re-routing based on live ping telemetry"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Variants ── */}
      <ContentSection title="Signal & Semantic Color Halos" id="signal-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select between vibrant cyber aura signals: <code className="text-cyan-400">neon (Cyan)</code>, <code className="text-violet-400">neonPurple</code>, <code className="text-emerald-400">neonGreen</code>, and minimal <code className="text-slate-400">default</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
  <Checkbox variant="neon" label="Cyan Sentinel" description="Primary Defense" defaultChecked />
  <Checkbox variant="neonPurple" label="Violet Neural" description="Core Brain" defaultChecked />
  <Checkbox variant="neonGreen" label="Emerald Buffer" description="Verified Flow" defaultChecked />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
                <Checkbox variant="neon" label="Cyan Sentinel" description="Primary Defense" defaultChecked />
                <Checkbox variant="neonPurple" label="Violet Neural" description="Core Brain" defaultChecked />
                <Checkbox variant="neonGreen" label="Emerald Buffer" description="Verified Flow" defaultChecked />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Indeterminate State & Batch Selection ── */}
      <ContentSection title="Indeterminate State & Batch Selection" id="indeterminate-group">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">indeterminate</code> state displays a dash icon when a subset of sub-options is active.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-3 p-5 rounded-xl bg-[#050811] border border-white/[0.06] max-w-sm w-full">
  <Checkbox
    label="SELECT ALL PROTOCOLS"
    variant="neon"
    checked={allChecked}
    indeterminate={isIndeterminate}
    onCheckedChange={(checked) => {
      setItems({ firewall: checked, telemetry: checked, quarantine: checked });
    }}
  />

  <div className="flex flex-col gap-2.5 pl-6 pt-2 border-t border-white/[0.06]">
    <Checkbox
      label="Subnet Firewall Matrix"
      checked={items.firewall}
      onCheckedChange={(checked) => setItems((s) => ({ ...s, firewall: checked }))}
    />
    <Checkbox
      label="Realtime Threat Telemetry"
      checked={items.telemetry}
      onCheckedChange={(checked) => setItems((s) => ({ ...s, telemetry: checked }))}
    />
    <Checkbox
      label="Automated Node Quarantine"
      checked={items.quarantine}
      onCheckedChange={(checked) => setItems((s) => ({ ...s, quarantine: checked }))}
    />
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-3 p-5 rounded-xl bg-[#050811] border border-white/[0.06] max-w-sm w-full shadow-xl">
                <Checkbox
                  label="SELECT ALL PROTOCOLS"
                  variant="neon"
                  checked={allChecked}
                  indeterminate={isIndeterminate}
                  onCheckedChange={(checked) => {
                    setItems({ firewall: checked, telemetry: checked, quarantine: checked });
                  }}
                />

                <div className="flex flex-col gap-2.5 pl-6 pt-2 border-t border-white/[0.06]">
                  <Checkbox
                    label="Subnet Firewall Matrix"
                    checked={items.firewall}
                    onCheckedChange={(checked) => setItems((s) => ({ ...s, firewall: checked }))}
                  />
                  <Checkbox
                    label="Realtime Threat Telemetry"
                    checked={items.telemetry}
                    onCheckedChange={(checked) => setItems((s) => ({ ...s, telemetry: checked }))}
                  />
                  <Checkbox
                    label="Automated Node Quarantine"
                    checked={items.quarantine}
                    onCheckedChange={(checked) => setItems((s) => ({ ...s, quarantine: checked }))}
                  />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Sizes ── */}
      <ContentSection title="Scale & Density (sm, md, lg)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Configure box dimensions across <code className="text-cyan-400">sm (14px)</code>, <code className="text-cyan-400">md (16px)</code>, and <code className="text-cyan-400">lg (20px)</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4 max-w-md w-full">
  <Checkbox checkboxSize="sm" label="Compact density (sm - 14px)" defaultChecked />
  <Checkbox checkboxSize="md" label="Standard density (md - 16px)" defaultChecked />
  <Checkbox checkboxSize="lg" label="High-touch density (lg - 20px)" defaultChecked />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-col gap-4 max-w-md w-full">
                <Checkbox checkboxSize="sm" label="Compact density (sm - 14px)" defaultChecked />
                <Checkbox checkboxSize="md" label="Standard density (md - 16px)" defaultChecked />
                <Checkbox checkboxSize="lg" label="High-touch density (lg - 20px)" defaultChecked />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Permission Matrix ── */}
      <ContentSection title="Frosted Cyber-Glass Permission Matrix" id="frosted-glass-permissions">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Compose high-security access control panels with translucent glassmorphic surfaces and active boundary sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-5">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Lock className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">ACL POLICY ASSIGNMENT</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">V2.4</Badge>
    </div>

    <div className="space-y-3.5">
      <Checkbox
        variant="neon"
        label="Root Shell Execution"
        description="Grants unmonitored tty terminal access"
        defaultChecked
      />
      <Checkbox
        variant="neon"
        label="Encrypted IPC Channels"
        description="Allow inter-process pipe creation"
        defaultChecked
      />
      <Checkbox
        variant="neon"
        label="Direct Memory Remap"
        description="Bypass DMA isolation filters"
      />
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        SAVE ACL PERMISSIONS
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
                      <Lock className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">ACL POLICY ASSIGNMENT</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">V2.4</Badge>
                  </div>

                  <div className="space-y-3.5">
                    <Checkbox
                      variant="neon"
                      label="Root Shell Execution"
                      description="Grants unmonitored tty terminal access"
                      defaultChecked
                    />
                    <Checkbox
                      variant="neon"
                      label="Encrypted IPC Channels"
                      description="Allow inter-process pipe creation"
                      defaultChecked
                    />
                    <Checkbox
                      variant="neon"
                      label="Direct Memory Remap"
                      description="Bypass DMA isolation filters"
                    />
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      SAVE ACL PERMISSIONS
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Defense Module Selector ── */}
      <ContentSection title="Tactical HUD Defense Module Selector" id="tactical-hud-telemetry">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Card-level module activation group with realtime status badges and monospace metadata.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ORBITAL DEFENSE MATRIX</CardTitle>
      <Badge variant="neon" size="sm">ACTIVE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Toggle autonomous sentinel interceptors across sector grids.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <Checkbox
      variant="neon"
      label="SENTINEL_ALPHA: Kinetic Rail"
      description="Sector 01-A • Ammo 98%"
      defaultChecked
    />
    <Checkbox
      variant="neonPurple"
      label="SENTINEL_BETA: EMP Wave"
      description="Sector 04-B • Capacitors charged"
      defaultChecked
    />
    <Checkbox
      variant="neonGreen"
      label="SENTINEL_GAMMA: Laser Point-Defense"
      description="Sector 09-D • Active tracking"
    />
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ORBITAL DEFENSE MATRIX</CardTitle>
                    <Badge variant="neon" size="sm">ACTIVE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Toggle autonomous sentinel interceptors across sector grids.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <Checkbox
                    variant="neon"
                    label="SENTINEL_ALPHA: Kinetic Rail"
                    description="Sector 01-A • Ammo 98%"
                    defaultChecked
                  />
                  <Checkbox
                    variant="neonPurple"
                    label="SENTINEL_BETA: EMP Wave"
                    description="Sector 04-B • Capacitors charged"
                    defaultChecked
                  />
                  <Checkbox
                    variant="neonGreen"
                    label="SENTINEL_GAMMA: Laser Point-Defense"
                    description="Sector 09-D • Active tracking"
                  />
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
              description: 'Color theme and laser glow preset.',
              type: '"default" | "neon" | "neonPurple" | "neonGreen" | "primary" | "primary-subtle" | "primary-outline"',
              defaultValue: '"default"',
            },
            {
              property: 'checkboxSize',
              description: 'Physical bounding box dimension.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'label',
              description: 'Primary text label displayed beside the checkbox.',
              type: 'string',
            },
            {
              property: 'description',
              description: 'Secondary monospace subtext rendered below the label.',
              type: 'string',
            },
            {
              property: 'checked',
              description: 'Controlled checked boolean state.',
              type: 'boolean',
            },
            {
              property: 'defaultChecked',
              description: 'Initial checked state in uncontrolled mode.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'indeterminate',
              description: 'Forces the tri-state minus dash icon.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'onCheckedChange',
              description: 'Callback executed whenever the checked state toggles.',
              type: '(checked: boolean) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Screen Reader Support:</strong> Checkbox utilizes a native, visually-hidden <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;input type=&quot;checkbox&quot; /&gt;</code> to guarantee full compatibility with screen readers and accessibility trees.
          </li>
          <li>
            <strong>Keyboard Interaction:</strong> Toggled cleanly via the <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">Space</code> key when focused.
          </li>
          <li>
            <strong>Focus Visibility:</strong> Styled with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">peer-focus-visible:ring-2</code> for high-visibility keyboard navigation.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Batch Selection:</strong> Always pair parent multi-select checkboxes with <code className="text-cyan-400">indeterminate</code> when only some child items are selected.
          </li>
          <li>
            <strong>Descriptions:</strong> Include <code className="text-cyan-400">description</code> when enabling high-impact security privileges or irreversible actions.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
