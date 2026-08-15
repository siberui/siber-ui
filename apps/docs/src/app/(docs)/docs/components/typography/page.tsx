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
  Heading,
  Text,
  Code,
  Kbd,
  Label,
  Divider,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'headings-gradients', text: 'Headings & Laser Gradient Shimmers', level: 2 },
  { id: 'text-variants', text: 'Text Hierarchy & Cybernetic Signal Tones', level: 2 },
  { id: 'code-and-kbd', text: 'Inline Code & Keyboard Keycaps (Kbd)', level: 2 },
  { id: 'label-and-divider', text: 'Tactical Labels & Glowing Laser Dividers', level: 2 },
  { id: 'frosted-glass-typography', text: 'Frosted Cyber-Glass Typographic Deck', level: 2 },
  { id: 'tactical-hud-dossier', text: 'Tactical HUD Mission Briefing Dossier Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function TypographyDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Typography"
        description="Comprehensive typography suite with semantic Headings, Text hierarchy, laser gradient text clips, cybernetic inline code pills, and tactile keyboard keycaps."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock
          code={`import { 
  Heading, 
  Text, 
  Code, 
  Kbd, 
  Label, 
  Divider 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Headings & Gradients ── */}
      <ContentSection title="Headings & Laser Gradient Shimmers" id="headings-gradients">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <code className="text-cyan-400">Heading</code> provides semantic heading levels (<code className="text-cyan-400">h1</code> through <code className="text-cyan-400">h6</code>) with optional laser gradient clip effects.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4">
  <Heading as="h1" gradient="cyan">H1: QUANTUM KERNEL ACTIVATED</Heading>
  <Heading as="h2" gradient="purple">H2: Subsystem Orbital Telemetry</Heading>
  <Heading as="h3" gradient="mixed">H3: Distributed Cryptographic Fabric</Heading>
  <Heading as="h4">H4: Sensor Node Array Parameters</Heading>
</div>`}
          >
            <div className="flex flex-col gap-4 p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Heading as="h1" gradient="cyan">H1: QUANTUM KERNEL ACTIVATED</Heading>
              <Heading as="h2" gradient="purple">H2: Subsystem Orbital Telemetry</Heading>
              <Heading as="h3" gradient="mixed">H3: Distributed Cryptographic Fabric</Heading>
              <Heading as="h4">H4: Sensor Node Array Parameters</Heading>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Text Hierarchy & Tones ── */}
      <ContentSection title="Text Hierarchy & Cybernetic Signal Tones" id="text-variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <code className="text-cyan-400">Text</code> offers standardized body variants with dedicated cybernetic semantic colors.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-3">
  <Text variant="lead">Lead: Autonomous planetary defense mesh deployed across Sector 09.</Text>
  <Text variant="default">Default: Routine integrity check completed with 0 anomalous lattice deviations.</Text>
  <Text variant="neon">Neon Cyan: Telemetry transponder lock acquired.</Text>
  <Text variant="neonPurple">Neon Purple: Neural bridge matrix operating at peak frequency.</Text>
  <Text variant="neonGreen">Neon Green: Airgap firewall checksum 100% verified.</Text>
  <Text variant="destructive">Destructive: Critical power shunt detected in auxiliary capacitor.</Text>
  <Text variant="muted">Muted: Archived session log timestamp 2025.08.15 UTC.</Text>
</div>`}
          >
            <div className="flex flex-col gap-3 p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Text variant="lead">Lead: Autonomous planetary defense mesh deployed across Sector 09.</Text>
              <Text variant="default">Default: Routine integrity check completed with 0 anomalous lattice deviations.</Text>
              <Text variant="neon">Neon Cyan: Telemetry transponder lock acquired.</Text>
              <Text variant="neonPurple">Neon Purple: Neural bridge matrix operating at peak frequency.</Text>
              <Text variant="neonGreen">Neon Green: Airgap firewall checksum 100% verified.</Text>
              <Text variant="destructive">Destructive: Critical power shunt detected in auxiliary capacitor.</Text>
              <Text variant="muted">Muted: Archived session log timestamp 2025.08.15 UTC.</Text>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Code & Kbd ── */}
      <ContentSection title="Inline Code & Keyboard Keycaps (Kbd)" id="code-and-kbd">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">Code</code> for inline monospace tokens or code blocks, and <code className="text-cyan-400">Kbd</code> for bevelled keyboard shortcut keycaps.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4">
  <Text>
    Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to activate the quantum command palette.
  </Text>
  <Text>
    Execute <Code>npx @siberui/react init</Code> to bootstrap security primitives.
  </Text>
  <Code block>
    {JSON.stringify({ status: "NOMINAL", cipher: "CRYSTALS-Kyber-1024", uptime: "99.999%" }, null, 2)}
  </Code>
</div>`}
          >
            <div className="flex flex-col gap-4 p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Text>
                Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to activate the quantum command palette.
              </Text>
              <Text>
                Execute <Code>npx @siberui/react init</Code> to bootstrap security primitives.
              </Text>
              <Code block>
                {JSON.stringify({ status: 'NOMINAL', cipher: 'CRYSTALS-Kyber-1024', uptime: '99.999%' }, null, 2)}
              </Code>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Labels & Dividers ── */}
      <ContentSection title="Tactical Labels & Glowing Laser Dividers" id="label-and-divider">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Structure complex readouts with monospace uppercase <code className="text-cyan-400">Label</code> components and gradient-illuminated <code className="text-cyan-400">Divider</code> laser beams.
          </p>

          <Playground
            code={`<div className="space-y-4">
  <Label required>ORBITAL_TRANSPONDER_ID</Label>
  <Divider glow="cyan" label="SYSTEM BOUNDARY" />
  <Divider glow="purple" label="ENCRYPTED CHANNEL" />
  <Divider glow="none" />
</div>`}
          >
            <div className="space-y-4 p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Label required>ORBITAL_TRANSPONDER_ID</Label>
              <Divider glow="cyan" label="SYSTEM BOUNDARY" />
              <Divider glow="purple" label="ENCRYPTED CHANNEL" />
              <Divider glow="none" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Typographic Deck ── */}
      <ContentSection title="Frosted Cyber-Glass Typographic Deck" id="frosted-glass-typography">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite typography stack layered over circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-2xl p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden space-y-4">
  <Heading as="h2" gradient="cyan">AUTONOMOUS ORBITAL DEFENSE</Heading>
  <Text variant="lead">
    Continuous real-time threat neutralization across decentralized micro-satellite swarms.
  </Text>
  <Divider glow="cyan" />
  <Text variant="muted" mono size="xs">
    AUTHORIZATION: LEVEL-5 CLEARANCE • PROTOCOL ENFORCED
  </Text>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <div className="relative z-10 w-full max-w-2xl space-y-4">
                <Heading as="h2" gradient="cyan">AUTONOMOUS ORBITAL DEFENSE</Heading>
                <Text variant="lead">
                  Continuous real-time threat neutralization across decentralized micro-satellite swarms.
                </Text>
                <Divider glow="cyan" />
                <Text variant="muted" mono size="xs">
                  AUTHORIZATION: LEVEL-5 CLEARANCE • PROTOCOL ENFORCED
                </Text>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Mission Briefing Dossier Card ── */}
      <ContentSection title="Tactical HUD Mission Briefing Dossier Card" id="tactical-hud-dossier">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense briefing card combining all typography primitives.
          </p>

          <Playground
            code={`<Card className="max-w-xl mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">MISSION BRIEFING // SECTOR 09</CardTitle>
      <Badge variant="neon" size="sm">TOP SECRET</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Tactical orbital rendezvous parameters.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <Heading as="h3" gradient="cyan">OPERATION ZERO-HORIZON</Heading>
    <Text size="sm">
      Maintain continuous sensor sweep along the geostationary perimeter. In the event of lattice deviation, execute <Code>kill -9</Code> on rogue satellite transponders.
    </Text>
    <Divider glow="cyan" label="KEYBOARD OVERRIDE" />
    <Text size="xs" mono className="text-slate-400">
      Press <Kbd>Ctrl</Kbd> + <Kbd>Alt</Kbd> + <Kbd>Del</Kbd> for emergency circuit airgap.
    </Text>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-xl w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">MISSION BRIEFING // SECTOR 09</CardTitle>
                    <Badge variant="neon" size="sm">TOP SECRET</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Tactical orbital rendezvous parameters.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <Heading as="h3" gradient="cyan">OPERATION ZERO-HORIZON</Heading>
                  <Text size="sm">
                    Maintain continuous sensor sweep along the geostationary perimeter. In the event of lattice deviation, execute <Code>kill -9</Code> on rogue satellite transponders.
                  </Text>
                  <Divider glow="cyan" label="KEYBOARD OVERRIDE" />
                  <Text size="xs" mono className="text-slate-400">
                    Press <Kbd>Ctrl</Kbd> + <Kbd>Alt</Kbd> + <Kbd>Del</Kbd> for emergency circuit airgap.
                  </Text>
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-base font-semibold text-slate-200 mb-3">Heading Props</h3>
        <ApiTable
          props={[
            {
              property: 'as',
              description: 'HTML heading tag level ("h1" | "h2" | "h3" | "h4" | "h5" | "h6").',
              type: 'HeadingLevel',
              defaultValue: '"h2"',
            },
            {
              property: 'gradient',
              description: 'Laser gradient clip effect ("none" | "cyan" | "purple" | "mixed").',
              type: '"none" | "cyan" | "purple" | "mixed"',
              defaultValue: '"none"',
            },
          ]}
        />

        <h3 className="text-base font-semibold text-slate-200 mb-3 mt-8">Text Props</h3>
        <ApiTable
          props={[
            {
              property: 'variant',
              description: 'Semantic text tone ("default" | "lead" | "muted" | "subtle" | "neon" | "neonPurple" | "neonGreen" | "destructive").',
              type: 'string',
              defaultValue: '"default"',
            },
            {
              property: 'size',
              description: 'Font size token ("xs" | "sm" | "md" | "lg" | "xl").',
              type: '"xs" | "sm" | "md" | "lg" | "xl"',
              defaultValue: '"md"',
            },
            {
              property: 'mono',
              description: 'Whether text renders in monospace cyber font.',
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
            <strong>Semantic HTML Tags:</strong> <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">Heading</code> renders native <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;h1&gt;</code> - <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;h6&gt;</code> for heading outlines. <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">Kbd</code> renders semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;kbd&gt;</code> elements.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Contrast Ratios:</strong> When using <code className="text-cyan-400">gradient</code> on headings, ensure the underlying background is dark (<code className="text-cyan-400">#040711</code> or darker) to maintain crisp readability.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
