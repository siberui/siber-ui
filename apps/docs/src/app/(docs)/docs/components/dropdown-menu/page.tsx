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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
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
  User,
  LogOut,
  Terminal,
  SlidersHorizontal,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Keyboard Shortcuts', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Menu & Submenus', level: 2 },
  { id: 'checkbox-radio-items', text: 'Checkbox & Radio Selection Items', level: 2 },
  { id: 'frosted-glass-menu', text: 'Frosted Cyber-Glass Action Menu', level: 2 },
  { id: 'tactical-hud-dropdown', text: 'Tactical HUD Mission Command Menu Card', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function DropdownMenuDocsPage() {
  const [showTelemetry, setShowTelemetry] = React.useState(true);
  const [showAirgap, setShowAirgap] = React.useState(false);
  const [cipherCurve, setCipherCurve] = React.useState('kyber');

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Dropdown Menu"
        description="Radix UI-backed action menus supporting keyboard arrow navigation, nested submenus, stateful checkboxes, and cybernetic neon/glass themes."
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
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuGroup, 
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Keyboard Shortcuts" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            DropdownMenu anchors to the trigger button and provides keyboard navigation with arrow keys and shortcut glyphs.
          </p>

          <Playground
            code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">OPERATOR ACCOUNT</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Operator Dossier</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile Details</span>
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Subsystem Config</span>
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-rose-400 focus:text-rose-300 focus:bg-rose-500/10">
      <LogOut className="mr-2 h-4 w-4" />
      <span>Terminate Session</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[220px]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary">OPERATOR ACCOUNT</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Operator Dossier</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile Details</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Subsystem Config</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-rose-400 focus:text-rose-300 focus:bg-rose-500/10">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Terminate Session</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Menu & Submenus" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser outlines and nesting submenus.
          </p>

          <Playground
            code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="neon" glow leftIcon={<Terminal className="mr-2 w-4 h-4" />}>
      CLUSTER COMMANDS
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent variant="neon" className="w-52">
    <DropdownMenuLabel variant="neon">CORE_ROUTINES</DropdownMenuLabel>
    <DropdownMenuSeparator variant="neon" />
    <DropdownMenuItem variant="neon">INITIATE_PING</DropdownMenuItem>
    <DropdownMenuItem variant="neon">PURGE_BUFFER</DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger variant="neon">ORBITAL_PODS</DropdownMenuSubTrigger>
      <DropdownMenuSubContent variant="neon">
        <DropdownMenuItem variant="neon">POD_ALPHA_01</DropdownMenuItem>
        <DropdownMenuItem variant="neon">POD_BETA_02</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full min-h-[220px]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="neon" glow leftIcon={<Terminal className="mr-2 w-4 h-4" />}>
                    CLUSTER COMMANDS
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent variant="neon" className="w-52">
                  <DropdownMenuLabel variant="neon">CORE_ROUTINES</DropdownMenuLabel>
                  <DropdownMenuSeparator variant="neon" />
                  <DropdownMenuItem variant="neon">INITIATE_PING</DropdownMenuItem>
                  <DropdownMenuItem variant="neon">PURGE_BUFFER</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger variant="neon">ORBITAL_PODS</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent variant="neon">
                      <DropdownMenuItem variant="neon">POD_ALPHA_01</DropdownMenuItem>
                      <DropdownMenuItem variant="neon">POD_BETA_02</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Checkbox & Radio Items ── */}
      <ContentSection title="Checkbox & Radio Selection Items" id="checkbox-radio-items">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Support toggles and mutual exclusions via <code className="text-cyan-400">DropdownMenuCheckboxItem</code> and <code className="text-cyan-400">DropdownMenuRadioGroup</code>.
          </p>

          <Playground
            code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>
      TELEMETRY PREFERENCES
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-60">
    <DropdownMenuLabel>ACTIVE SENSORS</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem checked={showTelemetry} onCheckedChange={setShowTelemetry}>
      Realtime Packet Feed
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked={showAirgap} onCheckedChange={setShowAirgap}>
      Air-Gapped Proxy Tunnel
    </DropdownMenuCheckboxItem>
    <DropdownMenuSeparator />
    <DropdownMenuLabel>POST-QUANTUM CIPHER</DropdownMenuLabel>
    <DropdownMenuRadioGroup value={cipherCurve} onValueChange={setCipherCurve}>
      <DropdownMenuRadioItem value="kyber">Kyber-1024</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="dilithium">Dilithium-5</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[220px]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>
                    TELEMETRY PREFERENCES
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60">
                  <DropdownMenuLabel>ACTIVE SENSORS</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked={showTelemetry} onCheckedChange={setShowTelemetry}>
                    Realtime Packet Feed
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked={showAirgap} onCheckedChange={setShowAirgap}>
                    Air-Gapped Proxy Tunnel
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>POST-QUANTUM CIPHER</DropdownMenuLabel>
                  <DropdownMenuRadioGroup value={cipherCurve} onValueChange={setCipherCurve}>
                    <DropdownMenuRadioItem value="kyber">Kyber-1024</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dilithium">Dilithium-5</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Action Menu ── */}
      <ContentSection title="Frosted Cyber-Glass Action Menu" id="frosted-glass-menu">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite dropdown menus with translucent acrylic blur over circuit substrate grids.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="glass">OPEN GLASS ACTIONS</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent variant="glass" className="w-52">
      <DropdownMenuLabel>QUICK TELEMETRY</DropdownMenuLabel>
      <DropdownMenuSeparator variant="glass" />
      <DropdownMenuItem>Carrier Frequency</DropdownMenuItem>
      <DropdownMenuItem>Laser Pulse Rate</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full min-h-[220px]">
              <div className="relative z-10">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="glass">OPEN GLASS ACTIONS</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent variant="glass" className="w-52">
                    <DropdownMenuLabel>QUICK TELEMETRY</DropdownMenuLabel>
                    <DropdownMenuSeparator variant="glass" />
                    <DropdownMenuItem>Carrier Frequency</DropdownMenuItem>
                    <DropdownMenuItem>Laser Pulse Rate</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Mission Command Menu Card ── */}
      <ContentSection title="Tactical HUD Mission Command Menu Card" id="tactical-hud-dropdown">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with action triggers.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">MISSION DISPATCH ACTIONS</CardTitle>
      <Badge variant="neon" size="sm">READY</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Trigger remote automated routines on deployed orbital sentinels.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="neon" glow className="w-full">
          SELECT SATELLITE ACTION
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent variant="neon" className="w-64">
        <DropdownMenuLabel variant="neon">ROUTINE DISPATCH</DropdownMenuLabel>
        <DropdownMenuSeparator variant="neon" />
        <DropdownMenuItem variant="neon">CALIBRATE_OPTICAL_GRID</DropdownMenuItem>
        <DropdownMenuItem variant="neon">REORIENT_ARRAY_30_DEG</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full min-h-[220px]">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">MISSION DISPATCH ACTIONS</CardTitle>
                    <Badge variant="neon" size="sm">READY</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Trigger remote automated routines on deployed orbital sentinels.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="neon" glow className="w-full">
                        SELECT SATELLITE ACTION
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent variant="neon" className="w-64">
                      <DropdownMenuLabel variant="neon">ROUTINE DISPATCH</DropdownMenuLabel>
                      <DropdownMenuSeparator variant="neon" />
                      <DropdownMenuItem variant="neon">CALIBRATE_OPTICAL_GRID</DropdownMenuItem>
                      <DropdownMenuItem variant="neon">REORIENT_ARRAY_30_DEG</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
              description: 'Visual theme for Content, Items, Separators, and SubContent.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'sideOffset',
              description: 'Distance in pixels from the anchor element.',
              type: 'number',
              defaultValue: '4',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>W3C WAI-ARIA Menu:</strong> Conforms to Radix UI Dropdown Menu specifications, supporting full keyboard navigation (Up/Down arrows, Home/End, Enter, and typeahead character searching).
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Separators & Labels:</strong> Group related action items with <code className="text-cyan-400">DropdownMenuLabel</code> and <code className="text-cyan-400">DropdownMenuSeparator</code> to maintain clean visual rhythm.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
