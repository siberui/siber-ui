import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarItem, SidebarSeparator, SidebarCollapseButton } from '@siberui/react';
import { Home, Settings, Shield, User, LogOut } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SidebarDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Sidebar"
        description="A collapsible navigation sidebar with support for groupings, badges, and various visual styles."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Sidebar className="h-full">
  <SidebarHeader>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-white/10 rounded" />
      <span className="font-bold text-white">SiberUI</span>
    </div>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarItem icon={<Home className="w-4 h-4" />} label="Dashboard" isActive />
      <SidebarItem icon={<Shield className="w-4 h-4" />} label="Security" badge={<span className="bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded">3</span>} />
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
    <SidebarItem icon={<LogOut className="w-4 h-4" />} label="Log out" />
  </SidebarFooter>
</Sidebar>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900 rounded-xl h-[500px]">
                <div className="h-full border border-white/10 overflow-hidden flex shadow-2xl">
                  <Sidebar>
                    <SidebarHeader>
                      <div className="flex items-center gap-2 px-2">
                        <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white font-bold text-xs">SU</div>
                        <span className="font-bold text-white">SiberUI</span>
                      </div>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarItem icon={<Home className="w-4 h-4" />} label="Dashboard" isActive />
                        <SidebarItem icon={<Shield className="w-4 h-4" />} label="Security" badge={<span className="bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded">3</span>} />
                        <SidebarItem icon={<User className="w-4 h-4" />} label="Users" />
                      </SidebarGroup>
                      <SidebarSeparator />
                      <SidebarGroup>
                        <SidebarGroupLabel>System</SidebarGroupLabel>
                        <SidebarItem icon={<Settings className="w-4 h-4" />} label="Settings" />
                      </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                      <SidebarCollapseButton className="mb-2 mx-2" />
                      <SidebarItem icon={<LogOut className="w-4 h-4" />} label="Log out" />
                    </SidebarFooter>
                  </Sidebar>
                  <div className="flex-1 w-64 bg-slate-950 flex flex-col items-center justify-center text-slate-500 text-sm">Main Content</div>
                </div>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Sidebar variant="neon">...</Sidebar>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl h-[500px]">
                <div className="h-full border border-cyan-500/20 overflow-hidden flex shadow-[0_0_30px_rgba(0,240,255,0.05)]">
                  <Sidebar variant="neon" defaultCollapsed>
                    <SidebarHeader>
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 border border-cyan-400 bg-cyan-950 rounded shadow-[0_0_10px_rgba(0,240,255,0.3)] flex items-center justify-center text-cyan-300 font-bold text-xs">SYS</div>
                      </div>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarItem icon={<Home className="w-4 h-4" />} label="Core" isActive />
                        <SidebarItem icon={<Shield className="w-4 h-4" />} label="Firewall" />
                        <SidebarItem icon={<Settings className="w-4 h-4" />} label="Config" />
                      </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                      <SidebarCollapseButton className="mx-auto" />
                    </SidebarFooter>
                  </Sidebar>
                  <div className="flex-1 w-64 bg-[#020810] flex flex-col items-center justify-center font-mono text-cyan-500/50 text-xs text-center p-4">SYSTEM OK<br/>NO THREATS DETECTED</div>
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style for the sidebar.', type: '"default" | "neon" | "glass"' },
            { property: 'size', description: 'Width sizing variant.', type: '"sm" | "md" | "lg"' },
            { property: 'defaultCollapsed', description: 'Initial collapse state.', type: 'boolean' },
            { property: 'isActive', description: 'Whether the item is currently active (SidebarItem prop).', type: 'boolean' },
            { property: 'badge', description: 'Optional badge to display on the right (SidebarItem prop).', type: 'ReactNode' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
