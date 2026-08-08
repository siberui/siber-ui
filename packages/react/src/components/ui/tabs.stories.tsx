import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';
import { Input } from './input';

const meta: Meta<typeof Tabs> = {
  title: 'Components/UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// ─────────────────────────────────────────────────────────────────────────────
// Default — sliding pill on dark surface
// ─────────────────────────────────────────────────────────────────────────────
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[420px]">
      <TabsList>
        <TabsTrigger variant="default" value="account">Account</TabsTrigger>
        <TabsTrigger variant="default" value="password">Password</TabsTrigger>
        <TabsTrigger variant="default" value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card variant="ghost" className="mt-3 border border-white/[0.08]">
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your agent profile here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400">CODENAME</label>
              <Input defaultValue="ShadowBroker" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400">NETWORK ALIAS</label>
              <Input defaultValue="@shadow_net" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card variant="ghost" className="mt-3 border border-white/[0.08]">
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Update your encryption keys. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400">CURRENT KEY</label>
              <Input type="password" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400">NEW KEY</label>
              <Input type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive">Update key</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <div className="mt-3 p-4 border border-white/[0.08] rounded-xl text-sm text-slate-300">
          Settings panel — configure system-wide defaults.
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon — glowing border pill that slides between tabs
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: Story = {
  render: () => (
    <Tabs variant="neon" defaultValue="overview" className="w-[520px]">
      <TabsList variant="neon" className="grid w-full grid-cols-3">
        <TabsTrigger variant="neon" value="overview">Overview</TabsTrigger>
        <TabsTrigger variant="neon" value="network">Network</TabsTrigger>
        <TabsTrigger variant="neon" value="logs">Logs</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 border border-cyan-500/20 rounded-xl mt-3 bg-cyan-950/10">
        <h4 className="text-cyan-400 font-mono mb-2 text-sm">// SYSTEM_OVERVIEW</h4>
        <p className="text-sm text-slate-300">All neural nodes are operating within optimal parameters. Shield harmonics at 98%.</p>
      </TabsContent>
      <TabsContent value="network" className="p-4 border border-cyan-500/20 rounded-xl mt-3 bg-cyan-950/10">
        <h4 className="text-cyan-400 font-mono mb-2 text-sm">// NETWORK_TOPOLOGY</h4>
        <p className="text-sm text-slate-300">Connected to Grid-Prime. 4 active relays, 2 stealth proxies.</p>
      </TabsContent>
      <TabsContent value="logs" className="p-4 border border-cyan-500/20 rounded-xl mt-3 bg-cyan-950/10">
        <h4 className="text-cyan-400 font-mono mb-2 text-sm">// ACTIVITY_LOGS</h4>
        <div className="space-y-1 text-xs font-mono text-slate-400">
          <p>[14:32:01] AUTH_SUCCESS: User established connection.</p>
          <p>[14:35:12] DATA_SYNC: Node cluster synchronized.</p>
          <p className="text-rose-400">[14:41:09] WARN: Minor packet loss detected on sector 7.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Underline — no static base border, only the glowing line slides
// ─────────────────────────────────────────────────────────────────────────────
export const Underline: Story = {
  render: () => (
    <Tabs variant="underline" defaultValue="mission" className="w-[420px]">
      <TabsList variant="underline">
        <TabsTrigger variant="underline" value="mission">Mission</TabsTrigger>
        <TabsTrigger variant="underline" value="intel">Intel</TabsTrigger>
        <TabsTrigger variant="underline" value="gear">Loadout</TabsTrigger>
      </TabsList>
      <TabsContent value="mission" className="pt-4 text-sm text-slate-300">
        Infiltrate the mega-corp server farm and extract the encrypted ledger.
      </TabsContent>
      <TabsContent value="intel" className="pt-4 text-sm text-slate-300">
        Heavy security presence. Automated turrets in sector 4.
      </TabsContent>
      <TabsContent value="gear" className="pt-4 text-sm text-slate-300">
        Neural deck, stealth camo, EMP grenades.
      </TabsContent>
    </Tabs>
  ),
};
