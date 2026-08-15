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
  Terminal,
  TerminalHeader,
  TerminalPrompt,
  TerminalCommand,
  TerminalOutput,
  TerminalBlock,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { Terminal as TerminalIcon } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & One-Line Convenience Block', level: 2 },
  { id: 'composable-terminal', text: 'Composable Terminal Architecture', level: 2 },
  { id: 'interactive-prompt', text: 'Interactive Command Prompt & Blinking Caret', level: 2 },
  { id: 'scanline-integration', text: 'Phosphor Scanline Overlay Mode', level: 2 },
  { id: 'frosted-glass-shell', text: 'Frosted Cyber-Glass Terminal Enclave', level: 2 },
  { id: 'tactical-hud-console', text: 'Tactical HUD Telemetry Shell Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function TerminalBlockDocsPage() {
  const codeString = `#!/bin/bash
echo "Initializing quantum mesh link..."
ssh -i ~/.ssh/orbital_rsa operator@fra-gateway.siber.net
echo "Quorum authenticated. 32 nodes synchronized."`;

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Terminal Block"
        description="Authentic cybernetic shell console primitives featuring Mac-style indicator buttons, interactive blinking carets, copy-to-clipboard actions, and phosphor scanlines."
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
  Terminal, 
  TerminalHeader, 
  TerminalPrompt, 
  TerminalCommand, 
  TerminalOutput, 
  TerminalBlock 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & One-Line Convenience Block" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">TerminalBlock</code> for immediate drop-in code snippet rendering with built-in clipboard copying.
          </p>

          <Playground
            code={`<div className="max-w-lg w-full">
  <TerminalBlock
    title="deploy_gateway.sh"
    code={\`#!/bin/bash
echo "Initializing quantum mesh link..."
ssh -i ~/.ssh/orbital_rsa operator@fra-gateway.siber.net
echo "Quorum authenticated. 32 nodes synchronized."\`}
  />
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="max-w-lg w-full">
                <TerminalBlock
                  title="deploy_gateway.sh"
                  code={codeString}
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Composable Terminal ── */}
      <ContentSection title="Composable Terminal Architecture" id="composable-terminal">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Compose rich multi-tier interactive session logs by combining <code className="text-cyan-400">Terminal</code>, <code className="text-cyan-400">TerminalHeader</code>, <code className="text-cyan-400">TerminalCommand</code>, and <code className="text-cyan-400">TerminalOutput</code>.
          </p>

          <Playground
            code={`<Terminal className="max-w-lg w-full">
  <TerminalHeader title="operator@siber-orbital: ~" state="online" />
  <TerminalOutput>
    <TerminalCommand command="siber-cli cluster status" timestamp="14:02:48 UTC" />
    <p className="text-xs text-emerald-400">&gt; Cluster FRA-04: ONLINE (32/32 nodes verified)</p>
    <p className="text-xs text-slate-400">&gt; Average cluster latency: 0.32 ms</p>
    <TerminalCommand command="siber-cli keygen --curve kyber-1024" timestamp="14:03:01 UTC" />
    <p className="text-xs text-cyan-400">&gt; Public key generated: 0x7F9A...4B21</p>
  </TerminalOutput>
</Terminal>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Terminal className="max-w-lg w-full">
                <TerminalHeader title="operator@siber-orbital: ~" state="online" />
                <TerminalOutput>
                  <TerminalCommand command="siber-cli cluster status" timestamp="14:02:48 UTC" />
                  <p className="text-xs text-emerald-400">&gt; Cluster FRA-04: ONLINE (32/32 nodes verified)</p>
                  <p className="text-xs text-slate-400">&gt; Average cluster latency: 0.32 ms</p>
                  <TerminalCommand command="siber-cli keygen --curve kyber-1024" timestamp="14:03:01 UTC" />
                  <p className="text-xs text-cyan-400">&gt; Public key generated: 0x7F9A...4B21</p>
                </TerminalOutput>
              </Terminal>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Interactive Prompt ── */}
      <ContentSection title="Interactive Command Prompt & Blinking Caret" id="interactive-prompt">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Render live shell input prompts with <code className="text-cyan-400">TerminalPrompt</code> and animated cursor carets (<code className="text-cyan-400">showCaret</code>).
          </p>

          <Playground
            code={`<Terminal className="max-w-lg w-full">
  <TerminalHeader title="root@airgap-hsm: /sec" state="critical" />
  <TerminalOutput>
    <TerminalPrompt showCaret>
      sudo vault unlock --sig 0x48FA_KEY
    </TerminalPrompt>
  </TerminalOutput>
</Terminal>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Terminal className="max-w-lg w-full">
                <TerminalHeader title="root@airgap-hsm: /sec" state="critical" />
                <TerminalOutput>
                  <TerminalPrompt showCaret>
                    sudo vault unlock --sig 0x48FA_KEY
                  </TerminalPrompt>
                </TerminalOutput>
              </Terminal>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Scanline Integration ── */}
      <ContentSection title="Phosphor Scanline Overlay Mode" id="scanline-integration">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">scanline=&#123;true&#125;</code> to overlay a CRT phosphor raster texture across the entire terminal viewport.
          </p>

          <Playground
            code={`<Terminal scanline className="max-w-lg w-full">
  <TerminalHeader title="TELEMETRY SCANLINE FEED" state="loading" />
  <TerminalOutput>
    <p className="text-xs text-cyan-300">&gt; STREAMING RAW SATELLITE TELEMETRY...</p>
    <p className="text-xs text-slate-400">&gt; PACKET COUNT: 148,920 FRAMES</p>
    <p className="text-xs text-emerald-400">&gt; CHECKSUM CRC32: VALID</p>
  </TerminalOutput>
</Terminal>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Terminal scanline className="max-w-lg w-full">
                <TerminalHeader title="TELEMETRY SCANLINE FEED" state="loading" />
                <TerminalOutput>
                  <p className="text-xs text-cyan-300">&gt; STREAMING RAW SATELLITE TELEMETRY...</p>
                  <p className="text-xs text-slate-400">&gt; PACKET COUNT: 148,920 FRAMES</p>
                  <p className="text-xs text-emerald-400">&gt; CHECKSUM CRC32: VALID</p>
                </TerminalOutput>
              </Terminal>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Terminal Enclave ── */}
      <ContentSection title="Frosted Cyber-Glass Terminal Enclave" id="frosted-glass-shell">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Nest terminal consoles inside acrylic glass modules layered over circuit textures and border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-lg p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <TerminalIcon className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">SECURE SHELL GATEWAY</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">256-BIT TLS</Badge>
    </div>

    <Terminal className="bg-black/60 border-white/[0.08]">
      <TerminalHeader title="auth@satellite-edge" state="online" />
      <TerminalOutput copyText="curl -sSL https://siberui.com/install.sh | bash">
        <TerminalPrompt showCaret>
          curl -sSL https://siberui.com/install.sh | bash
        </TerminalPrompt>
      </TerminalOutput>
    </Terminal>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-lg p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <TerminalIcon className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">SECURE SHELL GATEWAY</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">256-BIT TLS</Badge>
                  </div>

                  <Terminal className="bg-black/60 border-white/[0.08]">
                    <TerminalHeader title="auth@satellite-edge" state="online" />
                    <TerminalOutput copyText="curl -sSL https://siberui.com/install.sh | bash">
                      <TerminalPrompt showCaret>
                        curl -sSL https://siberui.com/install.sh | bash
                      </TerminalPrompt>
                    </TerminalOutput>
                  </Terminal>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Shell Card ── */}
      <ContentSection title="Tactical HUD Telemetry Shell Card" id="tactical-hud-console">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with interactive command execution.
          </p>

          <Playground
            code={`<Card className="max-w-lg mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ORBITAL DISPATCH CONSOLE</CardTitle>
      <Badge variant="neon" size="sm">ONLINE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Direct command bus connection to aerospace sentinels.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <Terminal className="bg-[#040711] border-cyan-500/20">
      <TerminalHeader title="root@sentinel-alpha" state="online" />
      <TerminalOutput copyText="sentinel execute --target VECTOR_04">
        <TerminalPrompt showCaret>
          sentinel execute --target VECTOR_04
        </TerminalPrompt>
      </TerminalOutput>
    </Terminal>

    <div className="flex justify-end gap-3">
      <Button variant="secondary" size="sm">CLEAR BUFFER</Button>
      <Button variant="neon" size="sm" glow>EXECUTE COMMAND</Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-lg w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">ORBITAL DISPATCH CONSOLE</CardTitle>
                    <Badge variant="neon" size="sm">ONLINE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Direct command bus connection to aerospace sentinels.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <Terminal className="bg-[#040711] border-cyan-500/20">
                    <TerminalHeader title="root@sentinel-alpha" state="online" />
                    <TerminalOutput copyText="sentinel execute --target VECTOR_04">
                      <TerminalPrompt showCaret>
                        sentinel execute --target VECTOR_04
                      </TerminalPrompt>
                    </TerminalOutput>
                  </Terminal>

                  <div className="flex justify-end gap-3">
                    <Button variant="secondary" size="sm">CLEAR BUFFER</Button>
                    <Button variant="neon" size="sm" glow>EXECUTE COMMAND</Button>
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
              property: 'code',
              description: 'For TerminalBlock: Raw source code string.',
              type: 'string',
            },
            {
              property: 'title',
              description: 'Filename or window title in the terminal chrome header.',
              type: 'React.ReactNode',
            },
            {
              property: 'scanline',
              description: 'For Terminal: Overlays a phosphor scanline texture.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'state',
              description: 'For TerminalHeader: StatusDot semantic state ("online", "loading", etc.).',
              type: 'StatusState',
            },
            {
              property: 'copyText',
              description: 'For TerminalOutput: Enables the copy-to-clipboard icon button.',
              type: 'string',
            },
            {
              property: 'showCaret',
              description: 'For TerminalPrompt: Displays the animated blinking cursor.',
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
            <strong>Accessible Copy:</strong> The copy button in TerminalOutput has an explicit <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label=&quot;Copy output&quot;</code> and provides immediate visual checkmark confirmation.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Copyable Commands:</strong> Always provide <code className="text-cyan-400">copyText</code> on terminal output blocks containing copyable installation or CLI commands.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
