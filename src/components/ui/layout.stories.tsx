import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container, Grid, Col, Stack, Row, LayoutDivider } from './layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Avatar, AvatarGroup } from './avatar';
import { Alert } from './alert';
import { Tag } from './tag';
import { Heading, Text, Code, Kbd, Divider } from './typography';
import {
  Activity, Cpu, Globe, HardDrive, Layers, Lock, Server,
  ShieldCheck, Terminal, Wifi, Zap, ArrowRight, Bell,
} from 'lucide-react';

const meta: Meta = {
  title: 'Layout/Grid System',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────────────────────
   Anatomy — visual grid overlay to understand the system
───────────────────────────────────────────────────────── */

/** Renders a labeled cell with visible border for anatomy stories */
function Cell({
  label,
  className = '',
  accent = 'cyan',
}: {
  label: string;
  className?: string;
  accent?: 'cyan' | 'purple' | 'green';
}) {
  const colors = {
    cyan: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300 font-semibold',
    purple: 'border-purple-500/50 bg-purple-500/10 text-purple-300 font-semibold',
    green: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300 font-semibold',
  };
  return (
    <div
      className={`flex items-center justify-center min-h-[44px] px-2 rounded-lg border border-dashed ${colors[accent]} font-mono text-[11px] tracking-wider uppercase whitespace-nowrap overflow-hidden text-ellipsis ${className}`}
    >
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   1. Anatomy — Grid Primitives
───────────────────────────────────────────────────────── */

export const GridAnatomy: Story = {
  name: '01 — Grid Anatomy',
  render: () => (
    <div className="min-h-screen bg-[#06090e] p-8 space-y-16">
      <Stack gap="xs">
        <Heading size="h1" gradient="cyan">Layout Grid System</Heading>
        <Text variant="muted">
          A 12-column CSS Grid with responsive breakpoints, flexible gaps, and fluid auto-fill mode.
        </Text>
      </Stack>

      <LayoutDivider />

      {/* Container */}
      <section className="space-y-4">
        <Stack gap="xs">
          <Row gap="sm" align="center">
            <Code>{'<Container>'}</Code>
            <Badge variant="secondary" size="sm">Layout</Badge>
          </Row>
          <Text variant="subtle" size="sm">
            Centers content within a max-width bound. Five size presets: sm / md / lg / xl / 2xl / full.
          </Text>
        </Stack>
        {(['sm','md','lg','xl','2xl'] as const).map((s) => (
          <Container key={s} size={s} className="border border-dashed border-cyan-500/20 rounded-lg py-2 flex items-center justify-between px-4">
            <span className="font-mono text-[11px] text-cyan-500/50 uppercase tracking-wider">size="{s}"</span>
            <span className="font-mono text-[11px] text-slate-600 uppercase tracking-wider">
              {s === 'sm' ? '640px' : s === 'md' ? '768px' : s === 'lg' ? '1024px' : s === 'xl' ? '1280px' : '1536px'}
            </span>
          </Container>
        ))}
      </section>

      <LayoutDivider />

      {/* 12-col grid */}
      <section className="space-y-4">
        <Stack gap="xs">
          <Row gap="sm" align="center">
            <Code>{'<Grid cols={12}>'}</Code>
            <Badge variant="neon" size="sm">12 cols</Badge>
          </Row>
          <Text variant="subtle" size="sm">
            The base 12-column grid. Use <Code>{'<Col span={N}>'}</Code> to occupy N columns.
          </Text>
        </Stack>
        <Grid cols={12} gap="sm">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map((n) => (
            <Cell key={n} label={`${n}`} />
          ))}
        </Grid>
        <Grid cols={12} gap="sm">
          <Col span={6}><Cell label="span 6" /></Col>
          <Col span={6}><Cell label="span 6" accent="purple" /></Col>
        </Grid>
        <Grid cols={12} gap="sm">
          <Col span={4}><Cell label="span 4" /></Col>
          <Col span={4}><Cell label="span 4" accent="purple" /></Col>
          <Col span={4}><Cell label="span 4" accent="green" /></Col>
        </Grid>
        <Grid cols={12} gap="sm">
          <Col span={3}><Cell label="3" /></Col>
          <Col span={9}><Cell label="9" accent="purple" /></Col>
        </Grid>
        <Grid cols={12} gap="sm">
          <Col span={8}><Cell label="8" /></Col>
          <Col span={4}><Cell label="4" accent="green" /></Col>
        </Grid>
        <Grid cols={12} gap="sm">
          <Col span={2}><Cell label="2" /></Col>
          <Col span={8}><Cell label="8" accent="purple" /></Col>
          <Col span={2}><Cell label="2" /></Col>
        </Grid>
      </section>

      <LayoutDivider />

      {/* Responsive */}
      <section className="space-y-4">
        <Stack gap="xs">
          <Row gap="sm" align="center">
            <Code>{'smCols / mdCols / lgCols'}</Code>
            <Badge variant="neonPurple" size="sm">Responsive</Badge>
          </Row>
          <Text variant="subtle" size="sm">
            Mobile-first. Defaults to 1 column, expands as viewport grows.
            Resize the window to see the change.
          </Text>
        </Stack>
        <Grid cols={1} smCols={2} mdCols={3} lgCols={4} gap="sm">
          {['NODE_01','NODE_02','NODE_03','NODE_04'].map((n, i) => (
            <Cell key={n} label={n} accent={(['cyan','purple','green','cyan'] as const)[i]} />
          ))}
        </Grid>
        <div className="flex gap-3 flex-wrap">
          {[
            { label: 'mobile', desc: '1 col' },
            { label: 'sm (640px+)', desc: '2 cols' },
            { label: 'md (768px+)', desc: '3 cols' },
            { label: 'lg (1024px+)', desc: '4 cols' },
          ].map(({ label, desc }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500">{label}:</span>
              <Code>{desc}</Code>
            </div>
          ))}
        </div>
      </section>

      <LayoutDivider />

      {/* Auto-fill */}
      <section className="space-y-4">
        <Stack gap="xs">
          <Row gap="sm" align="center">
            <Code>{'cols="auto"'}</Code>
            <Badge variant="neonGreen" size="sm">Fluid</Badge>
          </Row>
          <Text variant="subtle" size="sm">
            Auto-fill mode. Cells fill available space with a minimum width — no breakpoints needed.
          </Text>
        </Stack>
        <Grid cols="auto" minCellWidth="160px" gap="sm">
          {['Alpha','Beta','Gamma','Delta','Epsilon','Zeta'].map((n,i) => (
            <Cell key={n} label={n} accent={(['cyan','purple','green'] as const)[i % 3]} />
          ))}
        </Grid>
      </section>

      <LayoutDivider />

      {/* Stack & Row */}
      <section className="space-y-6">
        <Stack gap="xs">
          <Row gap="sm" align="center">
            <Code>{'<Stack>'}</Code>
            <Code>{'<Row>'}</Code>
            <Badge variant="secondary" size="sm">Flex primitives</Badge>
          </Row>
          <Text variant="subtle" size="sm">
            Stack defaults to vertical (column) flex. Row is a horizontal Stack alias.
            Both share the same gap, align, and justify props.
          </Text>
        </Stack>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Text variant="muted" size="sm" as="span" className="font-mono uppercase tracking-widest block">Stack (vertical)</Text>
            <Stack gap="sm" className="p-4 border border-dashed border-cyan-500/20 rounded-lg">
              <Cell label="Item A" />
              <Cell label="Item B" accent="purple" />
              <Cell label="Item C" accent="green" />
            </Stack>
          </div>
          <div className="space-y-3">
            <Text variant="muted" size="sm" as="span" className="font-mono uppercase tracking-widest block">Row (horizontal)</Text>
            <Row gap="sm" className="p-4 border border-dashed border-purple-500/20 rounded-lg">
              <Cell label="A" className="flex-1" accent="purple" />
              <Cell label="B" className="flex-1" />
              <Cell label="C" className="flex-1" accent="green" />
            </Row>
          </div>
        </div>
      </section>
    </div>
  ),
};

/* ─────────────────────────────────────────────────────────
   2. Gap Scale
───────────────────────────────────────────────────────── */

export const GapScale: Story = {
  name: '02 — Gap Scale',
  render: () => (
    <div className="min-h-screen bg-[#06090e] p-8 space-y-8">
      <Stack gap="xs">
        <Heading size="h2">Gap Scale</Heading>
        <Text variant="muted" size="sm">
          Shared across Grid, Stack, and Row. Maps to Tailwind spacing tokens.
        </Text>
      </Stack>
      <LayoutDivider />
      {(['none','xs','sm','md','lg','xl','2xl'] as const).map((g) => (
        <div key={g} className="space-y-2">
          <Row gap="sm" align="center">
            <Code>gap="{g}"</Code>
            <Text variant="muted" size="sm" as="span">
              {g === 'none' ? '0' : g === 'xs' ? '4px' : g === 'sm' ? '8px' : g === 'md' ? '16px' : g === 'lg' ? '24px' : g === 'xl' ? '32px' : '48px'}
            </Text>
          </Row>
          <Grid cols={4} gap={g}>
            <Cell label="1" />
            <Cell label="2" accent="purple" />
            <Cell label="3" accent="green" />
            <Cell label="4" />
          </Grid>
        </div>
      ))}
    </div>
  ),
};

/* ─────────────────────────────────────────────────────────
   3. Stack & Row Alignment
───────────────────────────────────────────────────────── */

export const Alignment: Story = {
  name: '03 — Alignment',
  render: () => (
    <div className="min-h-screen bg-[#06090e] p-8 space-y-10">
      <Stack gap="xs">
        <Heading size="h2">Alignment</Heading>
        <Text variant="muted" size="sm">
          <Code>align</Code> controls cross-axis. <Code>justify</Code> controls main-axis.
          Both work on Stack and Row.
        </Text>
      </Stack>
      <LayoutDivider />

      {/* justify */}
      <Stack gap="md">
        <Text variant="subtle" size="sm" as="span" className="font-mono uppercase tracking-widest">justify variants</Text>
        {(['start','center','end','between','around','evenly'] as const).map((j) => (
          <div key={j} className="space-y-1">
            <Code>justify="{j}"</Code>
            <Row justify={j} gap="sm" className="p-3 border border-dashed border-white/[0.07] rounded-lg">
              <Cell label="A" className="w-16" />
              <Cell label="B" className="w-16" accent="purple" />
              <Cell label="C" className="w-16" accent="green" />
            </Row>
          </div>
        ))}
      </Stack>

      <LayoutDivider />

      {/* align */}
      <Stack gap="md">
        <Text variant="subtle" size="sm" as="span" className="font-mono uppercase tracking-widest">align variants</Text>
        {(['start','center','end','stretch'] as const).map((a) => (
          <div key={a} className="space-y-1">
            <Code>align="{a}"</Code>
            <Row align={a} gap="sm" className="p-3 border border-dashed border-white/[0.07] rounded-lg h-20">
              <Cell label="A" className="w-20" />
              <Cell label="B" className="w-20" accent="purple" />
              <Cell label="C" className="w-20" accent="green" />
            </Row>
          </div>
        ))}
      </Stack>
    </div>
  ),
};

/* ─────────────────────────────────────────────────────────
   4. Col Span Patterns — common layout recipes
───────────────────────────────────────────────────────── */

export const ColPatterns: Story = {
  name: '04 — Col Span Patterns',
  render: () => (
    <div className="min-h-screen bg-[#06090e] p-8 space-y-8">
      <Stack gap="xs">
        <Heading size="h2">Col Span Patterns</Heading>
        <Text variant="muted" size="sm">Common 12-col layout recipes. Keyboard shortcut: <Kbd>?</Kbd> opens docs.</Text>
      </Stack>
      <LayoutDivider />
      {[
        { label: '12 — Full width', spans: [12], accents: ['cyan'] },
        { label: '6 + 6 — Half + Half', spans: [6,6], accents: ['cyan','purple'] },
        { label: '4 + 4 + 4 — Thirds', spans: [4,4,4], accents: ['cyan','purple','green'] },
        { label: '3 + 3 + 3 + 3 — Quarters', spans: [3,3,3,3], accents: ['cyan','purple','green','cyan'] },
        { label: '8 + 4 — Main + Aside', spans: [8,4], accents: ['cyan','purple'] },
        { label: '3 + 9 — Sidebar + Main', spans: [3,9], accents: ['purple','cyan'] },
        { label: '2 + 8 + 2 — Centered', spans: [2,8,2], accents: ['purple','cyan','purple'] },
        { label: '2 + 4 + 4 + 2 — Padded halves', spans: [2,4,4,2], accents: ['purple','cyan','green','purple'] },
      ].map(({ label, spans, accents }) => (
        <div key={label} className="space-y-2">
          <Text variant="muted" size="sm" as="span" className="font-mono tracking-wide">{label}</Text>
          <Grid cols={12} gap="sm">
            {spans.map((s, i) => (
              <Col key={i} span={s as number}>
                <Cell label={`${s}`} accent={(accents[i] as 'cyan' | 'purple' | 'green')} />
              </Col>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};

/* ─────────────────────────────────────────────────────────
   5. Dashboard — real composition with all components
───────────────────────────────────────────────────────── */

const NODES = [
  { id: '0x9F41', name: 'Core Alpha', load: 42, mem: '128/256 GB', status: 'online' as const, badge: 'neon' as const },
  { id: '0xB3C2', name: 'Core Beta',  load: 78, mem: '200/256 GB', status: 'idle' as const,   badge: 'neonPurple' as const },
  { id: '0xD7E5', name: 'Core Gamma', load: 15, mem: '64/256 GB',  status: 'online' as const, badge: 'neonGreen' as const },
];

const TEAM = [
  { name: 'Kai Nakamura', status: 'online' as const },
  { name: 'Zara Patel',   status: 'idle' as const },
  { name: 'Leon Vance',   status: 'busy' as const },
  { name: 'Mira Osei',   status: 'online' as const },
  { name: 'Ryo Tanaka',  status: 'offline' as const },
];

function StatCard({ label, value, sub, icon, accent = 'cyan' }: {
  label: string; value: string; sub: string; icon: React.ReactNode;
  accent?: 'cyan' | 'purple' | 'green';
}) {
  const colors = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    green: 'text-emerald-400',
  };
  const accentLine = accent === 'cyan' ? 'cyan' : accent === 'purple' ? 'purple' : 'green';
  return (
    <Card accentLine={accentLine} className="h-full">
      <CardContent className="p-5">
        <Row align="start" justify="between" gap="md">
          <Stack gap="xs">
            <Text variant="muted" size="xs" as="span" className="font-mono uppercase tracking-widest">{label}</Text>
            <Text as="span" className={`text-2xl font-bold font-mono ${colors[accent]}`}>{value}</Text>
            <Text variant="muted" size="xs" as="span">{sub}</Text>
          </Stack>
          <div className={`p-2 rounded-lg bg-white/[0.04] ${colors[accent]}`}>{icon}</div>
        </Row>
      </CardContent>
    </Card>
  );
}

export const Dashboard: Story = {
  name: '05 — Dashboard Composition',
  render: () => (
    <div className="min-h-screen bg-[#06090e] text-slate-100 antialiased">
      <Container size="2xl" className="py-8 space-y-6">

        {/* ── Header ── */}
        <Row align="center" justify="between" gap="md">
          <Stack gap="xs">
            <Row align="center" gap="sm">
              <Terminal className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
              <Text as="span" className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Siber-UI / Grid Demo</Text>
            </Row>
            <Heading size="h2" gradient="cyan">Quantum Grid Dashboard</Heading>
            <Text variant="muted" size="sm">Live system telemetry — all layout primitives in action</Text>
          </Stack>
          <Row gap="sm" align="center">
            <AvatarGroup avatars={TEAM} max={4} size="sm" />
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" strokeWidth={1.5} />
            </Button>
            <Button variant="neon" size="sm" leftIcon={<Zap className="h-4 w-4" strokeWidth={1.5} />}>
              OVERDRIVE
            </Button>
          </Row>
        </Row>

        <LayoutDivider />

        {/* ── Alert ── */}
        <Alert variant="warning" title="LOAD THRESHOLD NEAR">
          Core Beta is operating at 78% capacity. Consider redistributing workload across available nodes.
        </Alert>

        {/* ── Stat Cards — 4-col grid ── */}
        <Grid cols={1} smCols={2} lgCols={4} gap="md" stretch>
          <StatCard label="Active Nodes" value="12" sub="of 16 online" icon={<Server className="h-5 w-5" strokeWidth={1.5} />} accent="cyan" />
          <StatCard label="Grid Load" value="42.8%" sub="+3.2% from baseline" icon={<Activity className="h-5 w-5" strokeWidth={1.5} />} accent="purple" />
          <StatCard label="Bandwidth" value="9.4 TB" sub="1.2 TB/h throughput" icon={<Wifi className="h-5 w-5" strokeWidth={1.5} />} accent="green" />
          <StatCard label="Threat Index" value="LOW" sub="0 active alerts" icon={<ShieldCheck className="h-5 w-5" strokeWidth={1.5} />} accent="green" />
        </Grid>

        {/* ── Main Content — 8+4 layout ── */}
        <Grid cols={12} gap="md" stretch>

          {/* Node Table — col 8 */}
          <Col span={12} lgSpan={8}>
            <Card accentLine="cyan" variant="neon" className="h-full">
              <CardHeader>
                <Row align="center" justify="between">
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-cyan-400" strokeWidth={1.5} />
                    Grid Nodes
                  </CardTitle>
                  <Row gap="sm" align="center">
                    <Badge variant="neon" dot dotColor="cyan" size="sm">3 Active</Badge>
                    <Button variant="ghost" size="sm">View All</Button>
                  </Row>
                </Row>
              </CardHeader>
              <CardContent className="space-y-3">
                {NODES.map((node) => (
                  <div
                    key={node.id}
                    className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <Avatar name={node.name} size="sm" status={node.status} />
                    <Stack gap="none" className="flex-1 min-w-0">
                      <Text as="span" size="sm" weight="semibold">{node.name}</Text>
                      <Text variant="muted" size="xs" as="span" className="font-mono">{node.id}</Text>
                    </Stack>
                    <Stack gap="none" className="text-right hidden sm:block">
                      <Text as="span" size="xs" className="font-mono text-cyan-400">{node.load}%</Text>
                      <Text variant="muted" size="xs" as="span" className="font-mono">{node.mem}</Text>
                    </Stack>
                    <Badge variant={node.badge} size="sm">{node.status}</Badge>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="justify-between">
                <Text variant="muted" size="xs" as="span" className="font-mono">Last sync: 0.3ms ago</Text>
                <Button variant="neon" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />}>
                  MANAGE NODES
                </Button>
              </CardFooter>
            </Card>
          </Col>

          {/* Sidebar — col 4 */}
          <Col span={12} lgSpan={4}>
            <Stack gap="md" className="h-full">

              {/* Team */}
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Globe className="h-4 w-4 text-purple-400" strokeWidth={1.5} />
                    Grid Operators
                  </CardTitle>
                  <CardDescription>Active session members</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {TEAM.map((member) => (
                    <Row key={member.name} align="center" justify="between" gap="sm">
                      <Row gap="sm" align="center">
                        <Avatar name={member.name} size="sm" status={member.status} />
                        <Text size="sm" as="span">{member.name}</Text>
                      </Row>
                      <Badge
                        variant={member.status === 'online' ? 'neonGreen' : member.status === 'idle' ? 'secondary' : member.status === 'busy' ? 'destructive' : 'outline'}
                        size="sm"
                        dot
                        dotColor={member.status === 'online' ? 'green' : member.status === 'busy' ? 'rose' : undefined}
                      >
                        {member.status}
                      </Badge>
                    </Row>
                  ))}
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Lock className="h-4 w-4 text-emerald-400" strokeWidth={1.5} />
                    Active Protocols
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Row gap="xs" wrap>
                    {['Quantum-TLS','AES-256','Zero-Trust','Mesh-VPN','Rate-Limit'].map((p, i) => (
                      <Tag key={p} variant={(['neon','neonPurple','neonGreen','neon','neonPurple'] as const)[i]} size="sm">
                        {p}
                      </Tag>
                    ))}
                  </Row>
                </CardContent>
              </Card>

            </Stack>
          </Col>
        </Grid>

        {/* ── Bottom Row — 3-col equal ── */}
        <Divider label="SYSTEM TELEMETRY" glow="cyan" />

        <Grid cols={1} smCols={3} gap="md">
          <Card>
            <CardContent className="p-5">
              <Stack gap="sm">
                <Row align="center" gap="sm">
                  <Cpu className="h-4 w-4 text-cyan-400" strokeWidth={1.5} />
                  <Text as="span" variant="muted" size="xs" className="font-mono uppercase tracking-widest">CPU Cores</Text>
                </Row>
                <Text as="span" className="text-3xl font-bold font-mono text-white">128</Text>
                <Text variant="muted" size="xs" as="span">Across 16 physical nodes</Text>
              </Stack>
            </CardContent>
          </Card>
          <Card accentLine="purple">
            <CardContent className="p-5">
              <Stack gap="sm">
                <Row align="center" gap="sm">
                  <HardDrive className="h-4 w-4 text-purple-400" strokeWidth={1.5} />
                  <Text as="span" variant="muted" size="xs" className="font-mono uppercase tracking-widest">Storage</Text>
                </Row>
                <Text as="span" className="text-3xl font-bold font-mono text-white">4.8 PB</Text>
                <Text variant="muted" size="xs" as="span">68% utilized · NVMe array</Text>
              </Stack>
            </CardContent>
          </Card>
          <Card accentLine="green">
            <CardContent className="p-5">
              <Stack gap="sm">
                <Row align="center" gap="sm">
                  <Activity className="h-4 w-4 text-emerald-400" strokeWidth={1.5} />
                  <Text as="span" variant="muted" size="xs" className="font-mono uppercase tracking-widest">Uptime</Text>
                </Row>
                <Text as="span" className="text-3xl font-bold font-mono text-white">99.97%</Text>
                <Text variant="muted" size="xs" as="span">340 days · 18:42:07</Text>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* ── API Snippet ── */}
        <Stack gap="sm">
          <Divider label="INTEGRATION" />
          <Grid cols={1} mdCols={2} gap="md">
            <Stack gap="sm">
              <Text variant="subtle" size="sm" as="span" className="font-mono uppercase tracking-widest">12-col Layout</Text>
              <Code block>{`<Grid cols={12} gap="md">
  <Col span={8}>
    <MainContent />
  </Col>
  <Col span={4}>
    <Sidebar />
  </Col>
</Grid>`}</Code>
            </Stack>
            <Stack gap="sm">
              <Text variant="subtle" size="sm" as="span" className="font-mono uppercase tracking-widest">Responsive</Text>
              <Code block>{`<Grid
  cols={1}
  smCols={2}
  lgCols={4}
  gap="md"
>
  {items.map(item => (
    <Col key={item.id}>
      <Card>{item.name}</Card>
    </Col>
  ))}
</Grid>`}</Code>
            </Stack>
          </Grid>
        </Stack>

      </Container>
    </div>
  ),
};
