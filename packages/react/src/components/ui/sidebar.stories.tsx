'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
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
} from './sidebar';
import { Badge } from './badge';
import {
  LayoutDashboard,
  Terminal,
  Database,
  Shield,
  Settings,
  Users,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Activity,
  Wifi,
  Lock,
} from 'lucide-react';

const meta: Meta = {
  title: 'Components/Navigation/Sidebar',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
    <div className="flex h-screen bg-slate-950">
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2">
            <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-white font-bold text-sm shrink-0">S</div>
            <span className="font-semibold text-white text-sm truncate">Siber Dashboard</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarItem icon={<LayoutDashboard className="w-4 h-4" />} label="Dashboard" isActive href="#" />
            <SidebarItem icon={<Terminal className="w-4 h-4" />} label="Terminal" href="#" />
            <SidebarItem icon={<Database className="w-4 h-4" />} label="Database" href="#" />
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Security</SidebarGroupLabel>
            <SidebarItem icon={<Shield className="w-4 h-4" />} label="Firewall" href="#" />
            <SidebarItem
              icon={<Bell className="w-4 h-4" />}
              label="Alerts"
              href="#"
              badge={<Badge variant="destructive" className="text-[10px] px-1.5 py-0">3</Badge>}
            />
            <SidebarItem icon={<Users className="w-4 h-4" />} label="Access Control" href="#" />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem icon={<Settings className="w-4 h-4" />} label="Settings" href="#" />
          <SidebarItem icon={<LogOut className="w-4 h-4" />} label="Sign Out" href="#" />
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-8">
        <p className="text-slate-500 text-sm">Main content area</p>
      </main>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => {
    const [active, setActive] = React.useState('dashboard');
    const [collapsed, setCollapsed] = React.useState(false);

    const navItems = [
      { id: 'dashboard', icon: <LayoutDashboard className="w-4 h-4" />, label: 'DASHBOARD' },
      { id: 'terminal', icon: <Terminal className="w-4 h-4" />, label: 'TERMINAL' },
      { id: 'cpu', icon: <Cpu className="w-4 h-4" />, label: 'PROCESSOR' },
      { id: 'network', icon: <Wifi className="w-4 h-4" />, label: 'NETWORK' },
      { id: 'activity', icon: <Activity className="w-4 h-4" />, label: 'ACTIVITY' },
    ];

    return (
      <div className="flex h-screen bg-[#050d14]">
        <Sidebar
          variant="neon"
          defaultCollapsed={collapsed}
          onCollapsedChange={setCollapsed}
        >
          <SidebarHeader>
            <div className="flex items-center justify-between">
              {!collapsed && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest">SIBER_OS</span>
                </div>
              )}
              <SidebarCollapseButton>
                {collapsed
                  ? <ChevronRight className="w-4 h-4" />
                  : <ChevronLeft className="w-4 h-4" />}
              </SidebarCollapseButton>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>// SYSTEM</SidebarGroupLabel>
              {navItems.map((item) => (
                <SidebarItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  isActive={active === item.id}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setActive(item.id); }}
                />
              ))}
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>// SECURITY</SidebarGroupLabel>
              <SidebarItem
                icon={<Shield className="w-4 h-4" />}
                label="FIREWALL"
                isActive={active === 'firewall'}
                href="#"
                onClick={(e) => { e.preventDefault(); setActive('firewall'); }}
                badge={!collapsed && <span className="text-[10px] text-emerald-400 font-mono">ACTIVE</span>}
              />
              <SidebarItem
                icon={<Bell className="w-4 h-4" />}
                label="ALERTS"
                isActive={active === 'alerts'}
                href="#"
                onClick={(e) => { e.preventDefault(); setActive('alerts'); }}
                badge={!collapsed && <Badge variant="destructive" className="text-[10px] px-1.5 py-0">3</Badge>}
              />
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarItem icon={<Settings className="w-4 h-4" />} label="CONFIG" href="#" />
            <SidebarItem icon={<LogOut className="w-4 h-4" />} label="DISCONNECT" href="#" />
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 p-8">
          <p className="text-cyan-500/40 font-mono text-xs">// CONTENT AREA</p>
        </main>
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => (
    <div className="flex h-screen bg-gradient-to-br from-cyan-950/40 via-slate-950 to-purple-950/40">
      <Sidebar variant="glass">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white text-sm">Glass Panel</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarItem icon={<LayoutDashboard className="w-4 h-4" />} label="Dashboard" isActive href="#" />
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="Analytics" href="#" />
            <SidebarItem icon={<Users className="w-4 h-4" />} label="Team" href="#" />
            <SidebarItem icon={<Database className="w-4 h-4" />} label="Storage" href="#" />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem icon={<Settings className="w-4 h-4" />} label="Settings" href="#" />
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-8">
        <p className="text-slate-400 text-sm">Main content area behind blur</p>
      </main>
    </div>
  ),
};
