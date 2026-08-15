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
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  Button,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';
import {
  Settings,
  Terminal,
  Cpu,
  Shield,
  Zap,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic In-Page Command Menu', level: 2 },
  { id: 'modal-dialog', text: 'Modal Command Palette (CommandDialog & ⌘K)', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Terminal Palette', level: 2 },
  { id: 'frosted-glass-command', text: 'Frosted Cyber-Glass Quick Dispatch Palette', level: 2 },
  { id: 'tactical-hud-command', text: 'Tactical HUD Mission Control Palette Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function CommandDocsPage() {
  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenModal((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Command"
        description="High-speed fuzzy-filtering command palette powered by cmdk, supporting global ⌘K keyboard shortcuts, nested item categories, and cybernetic neon/glass themes."
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
  Command, 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandShortcut, 
  CommandSeparator 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic In-Page Command Menu" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The command container renders a search input with instantaneous item filtering, grouping, and empty state fallbacks.
          </p>

          <Playground
            code={`<Command className="rounded-xl border border-white/[0.06] bg-[#050811] shadow-2xl max-w-md w-full h-[320px]">
  <CommandInput placeholder="Search routines or modules..." />
  <CommandList>
    <CommandEmpty>No matching protocol found.</CommandEmpty>
    <CommandGroup heading="TELEMETRY PROTOCOLS">
      <CommandItem>
        <Zap className="mr-2 h-4 w-4 text-cyan-400" />
        <span>Deploy Satellite Transponder</span>
        <CommandShortcut>⌘T</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Shield className="mr-2 h-4 w-4 text-emerald-400" />
        <span>Rotate Air-Gap Cryptographic Keys</span>
        <CommandShortcut>⌘K</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="SUBSYSTEM SETTINGS">
      <CommandItem>
        <Settings className="mr-2 h-4 w-4 text-slate-400" />
        <span>Egress Proxy Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Command className="rounded-xl border border-white/[0.06] bg-[#050811] shadow-2xl max-w-md w-full h-[320px]">
                <CommandInput placeholder="Search routines or modules..." />
                <CommandList>
                  <CommandEmpty>No matching protocol found.</CommandEmpty>
                  <CommandGroup heading="TELEMETRY PROTOCOLS">
                    <CommandItem>
                      <Zap className="mr-2 h-4 w-4 text-cyan-400" />
                      <span>Deploy Satellite Transponder</span>
                      <CommandShortcut>⌘T</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Shield className="mr-2 h-4 w-4 text-emerald-400" />
                      <span>Rotate Air-Gap Cryptographic Keys</span>
                      <CommandShortcut>⌘K</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="SUBSYSTEM SETTINGS">
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4 text-slate-400" />
                      <span>Egress Proxy Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Modal Command Dialog ── */}
      <ContentSection title="Modal Command Palette (CommandDialog & ⌘K)" id="modal-dialog">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">CommandDialog</code> to render a full-screen floating HUD palette triggered via global hotkeys like <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-xs font-mono text-cyan-300">⌘K</kbd>.
          </p>

          <Playground
            code={`const [openModal, setOpenModal] = React.useState(false);

<Button variant="neon" glow onClick={() => setOpenModal(true)}>
  PRESS ⌘K OR CLICK TO OPEN PALETTE
</Button>

<CommandDialog open={openModal} onOpenChange={setOpenModal} variant="neon">
  <CommandInput placeholder="Type command..." />
  <CommandList>
    <CommandEmpty>No matches.</CommandEmpty>
    <CommandGroup heading="SYSTEM COMMANDS">
      <CommandItem onSelect={() => setOpenModal(false)}>
        <Terminal className="mr-2 h-4 w-4 text-cyan-400" />
        <span>RESTART_QUANTUM_CORE</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Button variant="neon" glow onClick={() => setOpenModal(true)}>
                PRESS ⌘K OR CLICK TO OPEN PALETTE
              </Button>

              <CommandDialog open={openModal} onOpenChange={setOpenModal} variant="neon">
                <CommandInput placeholder="Type command..." />
                <CommandList>
                  <CommandEmpty>No matches found in active cluster.</CommandEmpty>
                  <CommandGroup heading="SYSTEM COMMANDS">
                    <CommandItem onSelect={() => setOpenModal(false)}>
                      <Terminal className="mr-2 h-4 w-4 text-cyan-400" />
                      <span>RESTART_QUANTUM_CORE</span>
                      <CommandShortcut>RUN</CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={() => setOpenModal(false)}>
                      <Cpu className="mr-2 h-4 w-4 text-purple-400" />
                      <span>OVERCLOCK_ASIC_ARRAY</span>
                      <CommandShortcut>BOOST</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Terminal Palette" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser wire frames and monospace command labels.
          </p>

          <Playground
            code={`<Command variant="neon" className="rounded-xl shadow-2xl max-w-md w-full h-[300px]">
  <CommandInput placeholder="Query active sentinels..." />
  <CommandList>
    <CommandEmpty>Zero sentinels matched query.</CommandEmpty>
    <CommandGroup heading="ACTIVE SATELLITE NODES">
      <CommandItem>
        <Zap className="mr-2 h-4 w-4 text-cyan-400" />
        <span>SAT_SENTINEL_01 [ORBIT]</span>
        <CommandShortcut>99.9%</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Zap className="mr-2 h-4 w-4 text-cyan-400" />
        <span>SAT_SENTINEL_02 [INGEST]</span>
        <CommandShortcut>98.4%</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Command variant="neon" className="rounded-xl shadow-2xl max-w-md w-full h-[300px]">
                <CommandInput placeholder="Query active sentinels..." />
                <CommandList>
                  <CommandEmpty>Zero sentinels matched query.</CommandEmpty>
                  <CommandGroup heading="ACTIVE SATELLITE NODES">
                    <CommandItem>
                      <Zap className="mr-2 h-4 w-4 text-cyan-400" />
                      <span>SAT_SENTINEL_01 [ORBIT]</span>
                      <CommandShortcut>99.9%</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Zap className="mr-2 h-4 w-4 text-cyan-400" />
                      <span>SAT_SENTINEL_02 [INGEST]</span>
                      <CommandShortcut>98.4%</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Quick Dispatch Palette ── */}
      <ContentSection title="Frosted Cyber-Glass Quick Dispatch Palette" id="frosted-glass-command">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite command search palette nested on circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <Command variant="glass" className="h-[280px]">
    <CommandInput placeholder="Filter cryptographic keys..." />
    <CommandList>
      <CommandEmpty>No keys found.</CommandEmpty>
      <CommandGroup heading="KYBER KEYS">
        <CommandItem>
          <Shield className="mr-2 h-4 w-4 text-cyan-400" />
          <span>KEY_LATTICE_0x4B21</span>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <Command variant="glass" className="h-[280px]">
                  <CommandInput placeholder="Filter cryptographic keys..." />
                  <CommandList>
                    <CommandEmpty>No keys found.</CommandEmpty>
                    <CommandGroup heading="KYBER KEYS">
                      <CommandItem>
                        <Shield className="mr-2 h-4 w-4 text-cyan-400" />
                        <span>KEY_LATTICE_0x4B21</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Mission Control Palette Card ── */}
      <ContentSection title="Tactical HUD Mission Control Palette Card" id="tactical-hud-command">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with integrated command dispatch.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">COMMAND DISPATCH TERMINAL</CardTitle>
      <Badge variant="neon" size="sm">ONLINE</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Direct command bus to orbital mission sentinels.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <Command variant="neon" className="h-[220px]">
      <CommandInput placeholder="Dispatch instruction..." />
      <CommandList>
        <CommandGroup heading="DISPATCH PROTOCOLS">
          <CommandItem>
            <Terminal className="mr-2 h-4 w-4 text-cyan-400" />
            <span>ALIGN_LASER_CARRIER</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">COMMAND DISPATCH TERMINAL</CardTitle>
                    <Badge variant="neon" size="sm">ONLINE</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Direct command bus to orbital mission sentinels.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <Command variant="neon" className="h-[220px]">
                    <CommandInput placeholder="Dispatch instruction..." />
                    <CommandList>
                      <CommandGroup heading="DISPATCH PROTOCOLS">
                        <CommandItem>
                          <Terminal className="mr-2 h-4 w-4 text-cyan-400" />
                          <span>ALIGN_LASER_CARRIER</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
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
              description: 'Visual style for Command and CommandDialog.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'open',
              description: 'For CommandDialog: Controlled modal open state.',
              type: 'boolean',
            },
            {
              property: 'onOpenChange',
              description: 'For CommandDialog: State change callback.',
              type: '(open: boolean) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Combobox:</strong> Built on cmdk, providing ARIA combobox and listbox attributes with automated active-descendant focus tracking.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Shortcut Badges:</strong> Include <code className="text-cyan-400">CommandShortcut</code> on frequent commands so operators learn quick keyboard triggers.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
