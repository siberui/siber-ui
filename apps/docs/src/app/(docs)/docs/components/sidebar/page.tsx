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
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarSeparator,
  SidebarCollapseButton,
  Badge,
  BorderBeam,
} from '@siberui/react';
import {
  Home,
  Settings,
  Shield,
  User,
  LogOut,
  Terminal,
  Activity,
  Cpu,
  Radio,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Navigation Architecture', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Mission Control Sidebar', level: 2 },
  { id: 'frosted-glass-sidebar', text: 'Frosted Cyber-Glass Navigation Rail', level: 2 },
  { id: 'tactical-hud-sidebar', text: 'Tactical HUD Command Vessel Shell', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function SidebarDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Sidebar"
        description="Collapsible multi-level navigation rail and app sidebar supporting icon-only minimized states, neon active borders, notification badges, and glassmorphic panels."
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
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarItem, 
  SidebarSeparator, 
  SidebarCollapseButton,
  useSidebar 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Navigation Architecture" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The sidebar includes composable headers, scrollable groups, item badges, separators, and collapse triggers that automatically adjust widths and hide labels.
          </p>

          <Playground
            code={`<div className="h-[460px] flex border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl">
  <Sidebar>
    <SidebarHeader>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xs text-white">
          SU
        </div>
        <span className="font-bold text-white text-sm">Siber UI</span>
      </div>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>CORE APPLICATION</SidebarGroupLabel>
        <SidebarItem icon={<Home className="w-4 h-4" />} label="Dashboard" isActive />
        <SidebarItem
          icon={<Shield className="w-4 h-4" />}
          label="Defense Shield"
          badge={<Badge variant="destructive" size="sm">3</Badge>}
        />
        <SidebarItem icon={<User className="w-4 h-4" />} label="Personnel" />
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarGroupLabel>SYSTEM PREFERENCES</SidebarGroupLabel>
        <SidebarItem icon={<Settings className="w-4 h-4" />} label="Configurations" />
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter>
      <SidebarCollapseButton className="w-full justify-center mb-2" />
      <SidebarItem icon={<LogOut className="w-4 h-4 text-rose-400" />} label="Terminate Session" />
    </SidebarFooter>
  </Sidebar>

  <div className="flex-1 bg-[#050811] p-6 flex flex-col items-center justify-center text-slate-500 font-mono text-xs">
    MAIN VIEWPORT CANVAS
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-6 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="h-[460px] w-full max-w-2xl flex border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl">
                <Sidebar>
                  <SidebarHeader>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xs text-white">
                        SU
                      </div>
                      <span className="font-bold text-white text-sm">Siber UI</span>
                    </div>
                  </SidebarHeader>

                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupLabel>CORE APPLICATION</SidebarGroupLabel>
                      <SidebarItem icon={<Home className="w-4 h-4" />} label="Dashboard" isActive />
                      <SidebarItem
                        icon={<Shield className="w-4 h-4" />}
                        label="Defense Shield"
                        badge={<Badge variant="destructive" size="sm">3</Badge>}
                      />
                      <SidebarItem icon={<User className="w-4 h-4" />} label="Personnel" />
                    </SidebarGroup>
                    <SidebarSeparator />
                    <SidebarGroup>
                      <SidebarGroupLabel>SYSTEM PREFERENCES</SidebarGroupLabel>
                      <SidebarItem icon={<Settings className="w-4 h-4" />} label="Configurations" />
                    </SidebarGroup>
                  </SidebarContent>

                  <SidebarFooter>
                    <SidebarCollapseButton className="w-full justify-center mb-2" />
                    <SidebarItem icon={<LogOut className="w-4 h-4 text-rose-400" />} label="Terminate Session" />
                  </SidebarFooter>
                </Sidebar>

                <div className="flex-1 bg-[#050811] p-6 flex flex-col items-center justify-center text-slate-500 font-mono text-xs">
                  MAIN VIEWPORT CANVAS
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Mission Control Sidebar" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser borders, glowing active tabs with left accent bars, and monospace section labels.
          </p>

          <Playground
            code={`<div className="h-[460px] flex border border-cyan-500/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.05)]">
  <Sidebar variant="neon" defaultCollapsed>
    <SidebarHeader>
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
          SYS
        </div>
      </div>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarItem icon={<Terminal className="w-4 h-4" />} label="ROUTINES" isActive />
        <SidebarItem icon={<Activity className="w-4 h-4" />} label="TELEMETRY" />
        <SidebarItem icon={<Cpu className="w-4 h-4" />} label="HARDWARE" />
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter>
      <SidebarCollapseButton className="mx-auto" />
    </SidebarFooter>
  </Sidebar>

  <div className="flex-1 bg-[#03060d] p-6 flex flex-col items-center justify-center font-mono text-cyan-500/60 text-xs text-center">
    &gt; MISSION TELEMETRY LIVE&lt;br /&gt;ALL SYSTEMS NOMINAL
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <div className="h-[460px] w-full max-w-2xl flex border border-cyan-500/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.05)]">
                <Sidebar variant="neon" defaultCollapsed>
                  <SidebarHeader>
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                        SYS
                      </div>
                    </div>
                  </SidebarHeader>

                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarItem icon={<Terminal className="w-4 h-4" />} label="ROUTINES" isActive />
                      <SidebarItem icon={<Activity className="w-4 h-4" />} label="TELEMETRY" />
                      <SidebarItem icon={<Cpu className="w-4 h-4" />} label="HARDWARE" />
                    </SidebarGroup>
                  </SidebarContent>

                  <SidebarFooter>
                    <SidebarCollapseButton className="mx-auto" />
                  </SidebarFooter>
                </Sidebar>

                <div className="flex-1 bg-[#03060d] p-6 flex flex-col items-center justify-center font-mono text-cyan-500/60 text-xs text-center">
                  &gt; MISSION TELEMETRY LIVE<br />ALL SYSTEMS NOMINAL
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Navigation Rail ── */}
      <ContentSection title="Frosted Cyber-Glass Navigation Rail" id="frosted-glass-sidebar">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layered acrylic sidebar over circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-2xl h-[420px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex overflow-hidden shadow-2xl">
  <Sidebar variant="glass">
    <SidebarHeader>
      <span className="font-mono text-xs font-bold text-white tracking-wider">VESSEL ARRAY</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarItem icon={<Radio className="w-4 h-4 text-cyan-400" />} label="Transponder" isActive />
        <SidebarItem icon={<Activity className="w-4 h-4 text-emerald-400" />} label="Carrier Link" />
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <div className="flex-1 bg-black/40 p-6 flex items-center justify-center font-mono text-xs text-slate-400">
    ORBITAL SENSOR FEED
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <div className="relative z-10 w-full max-w-2xl h-[420px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex overflow-hidden shadow-2xl">
                <Sidebar variant="glass">
                  <SidebarHeader>
                    <span className="font-mono text-xs font-bold text-white tracking-wider">VESSEL ARRAY</span>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarItem icon={<Radio className="w-4 h-4 text-cyan-400" />} label="Transponder" isActive />
                      <SidebarItem icon={<Activity className="w-4 h-4 text-emerald-400" />} label="Carrier Link" />
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 bg-black/40 p-6 flex items-center justify-center font-mono text-xs text-slate-400">
                  ORBITAL SENSOR FEED
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Command Vessel Shell ── */}
      <ContentSection title="Tactical HUD Command Vessel Shell" id="tactical-hud-sidebar">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Full mission cockpit frame with compact telemetry sidebar.
          </p>

          <Playground
            code={`<div className="h-[440px] flex border border-cyan-500/30 rounded-2xl overflow-hidden bg-[#070b14] shadow-2xl">
  <Sidebar variant="neon">
    <SidebarHeader>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-cyan-400">SENTINEL-09</span>
        <Badge variant="neon" size="sm">ONLINE</Badge>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarItem icon={<Radio className="w-4 h-4" />} label="COMM ARRAY" isActive />
        <SidebarItem icon={<Cpu className="w-4 h-4" />} label="PROPULSION" />
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <div className="flex-1 p-6 flex items-center justify-center font-mono text-xs text-emerald-400">
    &gt; MISSION VECTOR VERIFIED
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-6 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="h-[440px] w-full max-w-2xl flex border border-cyan-500/25 rounded-2xl overflow-hidden bg-[#070b14] shadow-2xl">
                <Sidebar variant="neon">
                  <SidebarHeader>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-cyan-400">SENTINEL-09</span>
                      <Badge variant="neon" size="sm">ONLINE</Badge>
                    </div>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarItem icon={<Radio className="w-4 h-4" />} label="COMM ARRAY" isActive />
                      <SidebarItem icon={<Cpu className="w-4 h-4" />} label="PROPULSION" />
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 p-6 flex items-center justify-center font-mono text-xs text-emerald-400">
                  &gt; MISSION VECTOR VERIFIED
                </div>
              </div>
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
              description: 'Visual style for Sidebar, Items, and Group labels.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'size',
              description: 'Width scale when expanded and collapsed.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'defaultCollapsed',
              description: 'Initial minimized rail mode state.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'onCollapsedChange',
              description: 'Callback when collapse button is toggled.',
              type: '(collapsed: boolean) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Landmark & ARIA:</strong> Renders inside an HTML5 <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">&lt;aside&gt;</code> element with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-current=&quot;page&quot;</code> on active links.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Responsive Toggle:</strong> Use <code className="text-cyan-400">SidebarCollapseButton</code> or hook into <code className="text-cyan-400">useSidebar()</code> to toggle between expanded labels and compact icon rail views.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
