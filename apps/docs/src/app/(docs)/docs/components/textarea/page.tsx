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
import {
  FileCode,
  ShieldAlert,
  Send,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Placeholders', level: 2 },
  { id: 'visual-variants', text: 'Visual Variants (Neon, Glass, Ghost)', level: 2 },
  { id: 'auto-resize-and-limits', text: 'Auto-Resize & Dynamic Character Limits', level: 2 },
  { id: 'validation-states', text: 'Validation States (Error & Success)', level: 2 },
  { id: 'frosted-glass-editor', text: 'Frosted Cyber-Glass Audit Editor', level: 2 },
  { id: 'tactical-hud-report', text: 'Tactical HUD Incident Dispatch Mock', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function TextareaDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Textarea"
        description="High-density multi-line input fields engineered with automatic vertical expansion, real-time telemetry character meters, and cyber glow accents."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Textarea } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Placeholders" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Multi-line text control providing monospace headers and automatic telemetry labeling.
          </p>

          <Playground
            code={`<div className="max-w-md w-full">
  <Textarea
    label="TRANSMISSION PAYLOAD"
    placeholder="Write your encrypted quantum payload here..."
    helperText="UTF-8 encrypted buffer up to 4KB"
    rows={4}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-md w-full">
                <Textarea
                  label="TRANSMISSION PAYLOAD"
                  placeholder="Write your encrypted quantum payload here..."
                  helperText="UTF-8 encrypted buffer up to 4KB"
                  rows={4}
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
  <Textarea
    variant="neon"
    label="NEON TERMINAL SCRIPT"
    defaultValue="function executeBreachProtocol(nodeId) {\n  return syncNeuralUplink(nodeId, { force: true });\n}"
    rows={4}
  />

  <Textarea
    variant="glass"
    label="FROSTED GLASS BUFFER"
    placeholder="Enter runtime inspection notes..."
    rows={4}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <Textarea
                  variant="neon"
                  label="NEON TERMINAL SCRIPT"
                  defaultValue={`function executeBreachProtocol(nodeId) {\n  return syncNeuralUplink(nodeId, { force: true });\n}`}
                  rows={4}
                />

                <Textarea
                  variant="glass"
                  label="FROSTED GLASS BUFFER"
                  placeholder="Enter runtime inspection notes..."
                  rows={4}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Auto-Resize & Dynamic Character Limits ── */}
      <ContentSection title="Auto-Resize & Dynamic Character Limits" id="auto-resize-and-limits">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Enable <code className="text-cyan-400">autoResize</code> for dynamic height expansion matching the entered text lines, and <code className="text-cyan-400">maxCharacters</code> for real-time visual capacity meters.
          </p>

          <Playground
            code={`<div className="max-w-md w-full">
  <Textarea
    label="ENCRYPTED DISPATCH DISCLOSURE"
    placeholder="Type multiple paragraphs to observe automatic vertical expansion..."
    maxCharacters={240}
    autoResize
    defaultValue="Incident Report: Rogue agent handshake intercepted at subnet 10.240.11.2. Packet analysis indicates attempt to bypass multi-factor biometric gateway."
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-md w-full">
                <Textarea
                  label="ENCRYPTED DISPATCH DISCLOSURE"
                  placeholder="Type multiple paragraphs to observe automatic vertical expansion..."
                  maxCharacters={240}
                  autoResize
                  defaultValue="Incident Report: Rogue agent handshake intercepted at subnet 10.240.11.2. Packet analysis indicates attempt to bypass multi-factor biometric gateway."
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Validation States ── */}
      <ContentSection title="Validation States (Error & Success)" id="validation-states">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Provide real-time feedback with <code className="text-rose-400">error</code> notifications or <code className="text-emerald-400">success</code> verification halos.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  <Textarea
    label="PARSER SCHEMA (YAML)"
    error="SYNTAX_ERROR: Malformed indentation on line 3"
    defaultValue="services:\n  gateway:\n proxy_pass: 0.0.0.0"
    rows={3}
  />

  <Textarea
    label="VERIFIED SIGNATURE"
    success
    helperText="Cryptographic signature verified against root authority"
    defaultValue="-----BEGIN ED25519 PUBLIC KEY-----\nMCowBQYDK2VwAyEANk1L61...\n-----END PUBLIC KEY-----"
    rows={3}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <Textarea
                  label="PARSER SCHEMA (YAML)"
                  error="SYNTAX_ERROR: Malformed indentation on line 3"
                  defaultValue={`services:\n  gateway:\n proxy_pass: 0.0.0.0`}
                  rows={3}
                />

                <Textarea
                  label="VERIFIED SIGNATURE"
                  success
                  helperText="Cryptographic signature verified against root authority"
                  defaultValue={`-----BEGIN ED25519 PUBLIC KEY-----\nMCowBQYDK2VwAyEANk1L61...\n-----END PUBLIC KEY-----`}
                  rows={3}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Audit Editor ── */}
      <ContentSection title="Frosted Cyber-Glass Audit Editor" id="frosted-glass-editor">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Combine acrylic frosted textareas with circuit board textured substrates and glowing action perimeters.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-lg p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-5">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <FileCode className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">NEURAL COMPILER BUFFER</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">READY</Badge>
    </div>

    <Textarea
      variant="glass"
      placeholder="Paste smart contract assembly bytecode..."
      rows={5}
      defaultValue="pragma siber 0.8.20;\n\ncontract DefenseMatrix {\n  address public immutable sentinel;\n}"
    />

    <div className="flex items-center justify-between pt-2">
      <span className="text-[11px] font-mono text-slate-400">STATUS: COMPILED_OK</span>
      <Button variant="neon" size="sm" glow>
        DEPLOY CODE
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-lg p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <FileCode className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">NEURAL COMPILER BUFFER</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">READY</Badge>
                  </div>

                  <Textarea
                    variant="glass"
                    placeholder="Paste smart contract assembly bytecode..."
                    rows={5}
                    defaultValue={`pragma siber 0.8.20;\n\ncontract DefenseMatrix {\n  address public immutable sentinel;\n}`}
                  />

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] font-mono text-slate-400">STATUS: COMPILED_OK</span>
                    <Button variant="neon" size="sm" glow>
                      DEPLOY CODE
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Incident Dispatch Mock ── */}
      <ContentSection title="Tactical HUD Incident Dispatch Mock" id="tactical-hud-report">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            A complete incident report submission console in an operational defense setting.
          </p>

          <Playground
            code={`<Card className="max-w-lg mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ShieldAlert className="h-4 w-4 text-rose-400 animate-pulse" />
        <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">CRITICAL INCIDENT LOG</CardTitle>
      </div>
      <Badge variant="neon" size="sm">SEV-1 ALERT</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Broadcast incident summary to all active orbital defense sentinels.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <Textarea
      variant="neon"
      label="INCIDENT DESCRIPTION"
      placeholder="Detail anomaly patterns, affected nodes, and quarantine steps..."
      rows={4}
      maxCharacters={300}
    />

    <div className="flex justify-end gap-3 pt-2">
      <Button variant="secondary" size="sm">SAVE DRAFT</Button>
      <Button variant="neon" size="sm" glow className="gap-2">
        <Send className="w-3.5 h-3.5" />
        BROADCAST LOG
      </Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-lg w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-rose-400 animate-pulse" />
                      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">CRITICAL INCIDENT LOG</CardTitle>
                    </div>
                    <Badge variant="neon" size="sm">SEV-1 ALERT</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Broadcast incident summary to all active orbital defense sentinels.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <Textarea
                    variant="neon"
                    label="INCIDENT DESCRIPTION"
                    placeholder="Detail anomaly patterns, affected nodes, and quarantine steps..."
                    rows={4}
                    maxCharacters={300}
                  />

                  <div className="flex justify-end gap-3 pt-2">
                    <Button variant="secondary" size="sm">SAVE DRAFT</Button>
                    <Button variant="neon" size="sm" glow className="gap-2">
                      <Send className="w-3.5 h-3.5" />
                      BROADCAST LOG
                    </Button>
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
              description: 'Surface aesthetics and cyber glow preset.',
              type: '"default" | "neon" | "glass" | "ghost"',
              defaultValue: '"default"',
            },
            {
              property: 'textareaSize',
              description: 'Padding and text scale preset.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'label',
              description: 'Monospace top label linked automatically for accessibility.',
              type: 'string',
            },
            {
              property: 'helperText',
              description: 'Helpful guidance text below the textarea.',
              type: 'string',
            },
            {
              property: 'error',
              description: 'Displays a danger state perimeter and error message.',
              type: 'string | boolean',
            },
            {
              property: 'success',
              description: 'Activates emerald verified perimeter styling.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'maxCharacters',
              description: 'Enables real-time tabular number counter meter and character limit enforcement.',
              type: 'number',
            },
            {
              property: 'autoResize',
              description: 'Dynamically increases textarea height as users enter new lines.',
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
            <strong>HTML Labeling:</strong> The <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">label</code> prop creates a semantic label bound to the textarea ID.
          </li>
          <li>
            <strong>Character Counter Updates:</strong> Dynamic character tallies are rendered with tabular figures to prevent layout jitter during fast typing.
          </li>
          <li>
            <strong>Focus Rings:</strong> Uses high-contrast, glow-accented focus rings for keyboard navigation.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Auto-Resize with Modals:</strong> When using <code className="text-cyan-400">autoResize</code> inside fixed-height dialogs or drawers, pair it with <code className="text-cyan-400">max-h-[300px] overflow-y-auto</code> to prevent dialog clipping.
          </li>
          <li>
            <strong>Monospace for Code:</strong> Use <code className="text-cyan-400">variant=&quot;neon&quot;</code> when inputting cryptographic payloads, shell scripts, or JSON configs.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
