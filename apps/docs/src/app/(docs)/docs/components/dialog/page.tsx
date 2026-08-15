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
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button,
  Input,
  FormField,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@siberui/react';
import {
  Terminal,
  ShieldAlert,
  Settings,
  Cpu,
  Trash2,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Modal Anatomy & Focus Trapping', level: 2 },
  { id: 'variants', text: 'Visual Variants (Neon, Glass, Destructive, Default)', level: 2 },
  { id: 'form-modal', text: 'Modal Form Interactions', level: 2 },
  { id: 'frosted-glass-dialog', text: 'Frosted Cyber-Glass Authentication Dialog', level: 2 },
  { id: 'tactical-hud-protocol', text: 'Tactical HUD Node Termination Protocol', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function DialogDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Dialog"
        description="Radix UI modal window overlay that captures focus, prevents background scrolling, and presents high-priority confirmations or interactive cybernetic consoles."
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
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter, 
  DialogClose 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Modal Anatomy & Focus Trapping" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The dialog renders a backdrop blur overlay (<code className="text-cyan-400">DialogOverlay</code>) and centers content smoothly with entry transitions.
          </p>

          <Playground
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">OPEN SETTINGS</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Subsystem Preferences</DialogTitle>
      <DialogDescription>
        Configure distributed node routing and encryption curves.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4 space-y-4">
      <FormField label="Node Identifier">
        <Input defaultValue="SAT_ORBIT_ALPHA_09" />
      </FormField>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">CANCEL</Button>
      </DialogClose>
      <Button variant="neon" glow>SAVE CHANGES</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary">OPEN SETTINGS</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Subsystem Preferences</DialogTitle>
                    <DialogDescription>
                      Configure distributed node routing and encryption curves.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 space-y-4">
                    <FormField label="Node Identifier">
                      <Input defaultValue="SAT_ORBIT_ALPHA_09" />
                    </FormField>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="ghost">CANCEL</Button>
                    </DialogClose>
                    <Button variant="neon" glow>SAVE CHANGES</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Variants ── */}
      <ContentSection title="Visual Variants (Neon, Glass, Destructive, Default)" id="variants">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Configure visual styling on <code className="text-cyan-400">DialogContent</code> via the <code className="text-cyan-400">variant</code> prop: <code className="text-cyan-400">neon</code>, <code className="text-cyan-300">glass</code>, <code className="text-rose-400">destructive</code>, or <code className="text-slate-300">default</code>.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center justify-center">
  {/* Neon Variant */}
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="neon" glow>NEON CONSOLE</Button>
    </DialogTrigger>
    <DialogContent variant="neon">
      <DialogHeader>
        <DialogTitle className="font-mono text-cyan-400 flex items-center gap-2">
          <Cpu className="h-4 w-4" />
          SYS_CONFIG_OVERRIDE
        </DialogTitle>
        <DialogDescription>
          Execute hardware clock frequency modifications.
        </DialogDescription>
      </DialogHeader>
      <p className="text-xs font-mono text-cyan-500/70 py-3">
        [WARN] Modifying multiplier may elevate core junction temperature.
      </p>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="ghost">ABORT</Button>
        </DialogClose>
        <Button variant="neon" glow>APPLY OVERCLOCK</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  {/* Glass Variant */}
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="glass">GLASS DIALOG</Button>
    </DialogTrigger>
    <DialogContent variant="glass">
      <DialogHeader>
        <DialogTitle className="text-white">Translucent Glass Dialog</DialogTitle>
        <DialogDescription>
          Backdrop blurred acrylic surface with subtle perimeter light.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary">CLOSE</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  {/* Destructive Variant */}
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="destructive">DESTRUCTIVE DIALOG</Button>
    </DialogTrigger>
    <DialogContent variant="destructive">
      <DialogHeader>
        <DialogTitle className="text-rose-400 flex items-center gap-2">
          <ShieldAlert className="h-4 w-4" />
          PURGE CLUSTER MEMORY?
        </DialogTitle>
        <DialogDescription>
          This action will permanently invalidate all in-flight cryptographic sessions.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="ghost">CANCEL</Button>
        </DialogClose>
        <Button variant="destructive">CONFIRM PURGE</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="neon" glow>NEON CONSOLE</Button>
                  </DialogTrigger>
                  <DialogContent variant="neon">
                    <DialogHeader>
                      <DialogTitle className="font-mono text-cyan-400 flex items-center gap-2">
                        <Cpu className="h-4 w-4" />
                        SYS_CONFIG_OVERRIDE
                      </DialogTitle>
                      <DialogDescription>
                        Execute hardware clock frequency modifications.
                      </DialogDescription>
                    </DialogHeader>
                    <p className="text-xs font-mono text-cyan-500/70 py-3">
                      [WARN] Modifying multiplier may elevate core junction temperature.
                    </p>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="ghost">ABORT</Button>
                      </DialogClose>
                      <Button variant="neon" glow>APPLY OVERCLOCK</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="glass">GLASS DIALOG</Button>
                  </DialogTrigger>
                  <DialogContent variant="glass">
                    <DialogHeader>
                      <DialogTitle className="text-white">Translucent Glass Dialog</DialogTitle>
                      <DialogDescription>
                        Backdrop blurred acrylic surface with subtle perimeter light.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="secondary">CLOSE</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">DESTRUCTIVE DIALOG</Button>
                  </DialogTrigger>
                  <DialogContent variant="destructive">
                    <DialogHeader>
                      <DialogTitle className="text-rose-400 flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4" />
                        PURGE CLUSTER MEMORY?
                      </DialogTitle>
                      <DialogDescription>
                        This action will permanently invalidate all in-flight cryptographic sessions.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="ghost">CANCEL</Button>
                      </DialogClose>
                      <Button variant="destructive">CONFIRM PURGE</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Form Modal ── */}
      <ContentSection title="Modal Form Interactions" id="form-modal">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Combine dialogs with <code className="text-cyan-400">FormField</code> and <code className="text-cyan-400">Input</code> for modal editing flows.
          </p>

          <Playground
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary" leftIcon={<Settings className="h-4 w-4" />}>
      API ACCESS CREDENTIALS
    </Button>
  </DialogTrigger>
  <DialogContent variant="neon">
    <DialogHeader>
      <DialogTitle>Generate Access Token</DialogTitle>
      <DialogDescription>
        Create a scoped token for automated CI/CD pipeline triggers.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4 space-y-4">
      <FormField label="Token Name">
        <Input placeholder="e.g. github-actions-deploy" />
      </FormField>
      <FormField label="Expiration">
        <Input defaultValue="90 days" />
      </FormField>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">CANCEL</Button>
      </DialogClose>
      <Button variant="neon" glow>GENERATE TOKEN</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" leftIcon={<Settings className="h-4 w-4" />}>
                    API ACCESS CREDENTIALS
                  </Button>
                </DialogTrigger>
                <DialogContent variant="neon">
                  <DialogHeader>
                    <DialogTitle>Generate Access Token</DialogTitle>
                    <DialogDescription>
                      Create a scoped token for automated CI/CD pipeline triggers.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 space-y-4">
                    <FormField label="Token Name">
                      <Input placeholder="e.g. github-actions-deploy" />
                    </FormField>
                    <FormField label="Expiration">
                      <Input defaultValue="90 days" />
                    </FormField>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="ghost">CANCEL</Button>
                    </DialogClose>
                    <Button variant="neon" glow>GENERATE TOKEN</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Authentication Dialog ── */}
      <ContentSection title="Frosted Cyber-Glass Authentication Dialog" id="frosted-glass-dialog">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite cyber glass modal nested on top of circuit textures with continuous perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Terminal className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">BIOMETRIC VAULT ENCLAVE</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
    </div>

    <p className="text-xs text-slate-300 leading-relaxed font-mono">
      Hardware key challenge presented: Insert physical security token into USB port 0x01.
    </p>

    <div className="pt-2 flex justify-end gap-3">
      <Button variant="ghost" size="sm">ABORT</Button>
      <Button variant="neon" size="sm" glow>AUTHENTICATE KEY</Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">BIOMETRIC VAULT ENCLAVE</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">STANDBY</Badge>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    Hardware key challenge presented: Insert physical security token into USB port 0x01.
                  </p>

                  <div className="pt-2 flex justify-end gap-3">
                    <Button variant="ghost" size="sm">ABORT</Button>
                    <Button variant="neon" size="sm" glow>AUTHENTICATE KEY</Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Node Termination Protocol ── */}
      <ContentSection title="Tactical HUD Node Termination Protocol" id="tactical-hud-protocol">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with embedded dialog triggers.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">NODE LIFECYCLE MANAGEMENT</CardTitle>
      <Badge variant="neon" size="sm">MANAGED</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Safely drain, cordon, or decommission physical blade servers.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" leftIcon={<Trash2 className="h-4 w-4" />} className="w-full">
          INITIATE NODE DECOMMISSION
        </Button>
      </DialogTrigger>
      <DialogContent variant="destructive">
        <DialogHeader>
          <DialogTitle className="text-rose-400 font-mono">CONFIRM NODE REMOVAL</DialogTitle>
          <DialogDescription>
            Are you sure you want to drain traffic and purge BLADE_SERVER_04 from cluster FRA-01?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">CANCEL</Button>
          </DialogClose>
          <Button variant="destructive">CONFIRM TERMINATION</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">NODE LIFECYCLE MANAGEMENT</CardTitle>
                    <Badge variant="neon" size="sm">MANAGED</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Safely drain, cordon, or decommission physical blade servers.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" leftIcon={<Trash2 className="h-4 w-4" />} className="w-full">
                        INITIATE NODE DECOMMISSION
                      </Button>
                    </DialogTrigger>
                    <DialogContent variant="destructive">
                      <DialogHeader>
                        <DialogTitle className="text-rose-400 font-mono">CONFIRM NODE REMOVAL</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to drain traffic and purge BLADE_SERVER_04 from cluster FRA-01?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="ghost">CANCEL</Button>
                        </DialogClose>
                        <Button variant="destructive">CONFIRM TERMINATION</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
              description: 'For DialogContent: Visual theme style.',
              type: '"default" | "neon" | "glass" | "destructive"',
              defaultValue: '"default"',
            },
            {
              property: 'open',
              description: 'Controlled open state for the dialog.',
              type: 'boolean',
            },
            {
              property: 'onOpenChange',
              description: 'Callback fired when open state changes.',
              type: '(open: boolean) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>W3C WAI-ARIA Modal:</strong> Conforms strictly to Radix UI Dialog primitive with automated focus trapping and restoration upon closing.
          </li>
          <li>
            <strong>Escape Key:</strong> Pressing the <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-xs font-mono text-slate-300">Escape</kbd> key immediately closes the dialog.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Descriptions:</strong> Always provide a <code className="text-cyan-400">DialogDescription</code> for screen reader context when opening modal windows.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
