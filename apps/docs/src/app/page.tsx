'use client';

import { useState } from 'react';
import {
  GlitchText,
  TerminalBlock,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  BorderBeam,
  RadarProgress,
  ThreatIndicator,
  Alert,
  Badge,
  Input,
  Switch,
  Slider,
  Progress,
  useToast,
} from '@siberui/react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code,
  Layers,
  ShieldAlert,
  Sparkles,
  Zap,
  Search,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Cpu,
  Lock,
} from 'lucide-react';
import Link from 'next/link';

const featureCards = [
  {
    title: 'Elevated motion',
    description:
      'Subtle transitions and live states that feel premium without losing clarity.',
    icon: Zap,
  },
  {
    title: 'Minimal surfaces',
    description:
      'Clean spacing, refined borders, and reduced noise for a modern product look.',
    icon: Layers,
  },
  {
    title: 'Cyber-ready UI',
    description:
      'Built for dashboards, launch pages, and interfaces that need instant personality.',
    icon: Sparkles,
  },
];

export default function Home() {
  const installCode = `pnpm add @siberui/react`;

  // Interactive component demo states
  const [btnSize, setBtnSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);
  const [sliderVal, setSliderVal] = useState<number[]>([74]);
  const [activeTab, setActiveTab] = useState<'all' | 'controls' | 'telemetry' | 'alerts'>('all');
  const [overclock, setOverclock] = useState(true);
  const [shieldDefense, setShieldDefense] = useState(true);
  const [threatLevel, setThreatLevel] = useState<number>(14);
  const { toast } = useToast();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06090e] text-slate-100">
      {/* Background ambient radial glows: top-left Cyan, bottom-right Subtle Red (Crimson) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.14),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.05)_0%,transparent_45%,rgba(255,255,255,0.03)_100%)] opacity-80" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/25 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2 group cursor-default">
            <img src="/logo.svg" alt="Siber UI" className="h-8 w-8 rounded-sm border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500/50" />
            <span className="text-lg font-semibold tracking-[0.25em] text-slate-100 transition-colors duration-300 group-hover:text-cyan-400">
              SIBER UI
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://github.com/siberui/siber-ui" target="_blank">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Code className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs/installation">
              <Button variant="secondary" className="group border-cyan-500/20 hover:border-cyan-500/40 text-cyan-50" rightIcon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-cyan-400" />}>
                Documentation
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-mono tracking-[0.2em] text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              v1.0.0 is now live
            </div>

            <GlitchText
              as="h1"
              text="BUILD THE FUTURE. TODAY."
              color="cyan"
              speed={140}
              className="max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl"
            />

            <p className="mt-6 max-w-xl text-lg text-slate-400 md:text-xl">
              A polished cyberpunk UI kit for modern teams that want minimalism,
              clarity, and a premium digital edge.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/docs/installation">
                <Button variant="neon" size="lg" className="group gap-2 px-8 text-lg">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/docs/components/accordion">
                <Button variant="ghost" size="lg" className="border-white/10 px-8 text-base text-slate-300">
                  Explore components
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: '40+', label: 'components' },
                { value: '100%', label: 'tailwind-ready' },
                { value: '⚡', label: 'fast to ship' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur"
                >
                  <p className="text-xl font-semibold text-slate-100">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card
              variant="neon"
              className="relative overflow-hidden border-white/10"
            >
              <BorderBeam
                variant="neon"
                size={170}
                duration={10}
              />
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    Quick start
                  </span>
                  <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-mono text-cyan-200">
                    npm
                  </div>
                </div>
                <CardTitle className="text-2xl">
                  Install and build in seconds
                </CardTitle>
                <CardDescription>
                  The kit is designed to feel premium from day one, with modern
                  primitives and refined utility patterns.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <TerminalBlock
                  code={installCode}
                  language="bash"
                  title="Install"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">
                      Signal
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Clean primitives for launch pages, dashboards, and product
                      stories.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-rose-300">
                      Tone
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Minimal, sharp, and unmistakably futuristic without
                      becoming noisy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* MODERN INTERACTIVE COMPONENT SHOWCASE SECTION */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono tracking-[0.2em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            LIVE COMPONENT SHOWCASE
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Production-ready cyber primitives
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 md:text-lg">
            Interact with live components in real time. Crafted with fluid micro-interactions, dark aesthetic controls, and zero boilerplate.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Components' },
              { id: 'controls', label: 'Interactive Controls' },
              { id: 'telemetry', label: 'Status & Telemetry' },
              { id: 'alerts', label: 'Feedback & Alerts' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:border-white/20 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Interactive Button Matrix & Size Controller */}
          {(activeTab === 'all' || activeTab === 'controls') && (
            <Card variant="interactive" className="relative flex flex-col justify-between overflow-hidden">
              <BorderBeam variant="neon" size={140} duration={8} />
              <div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="h-5 w-5 text-cyan-400" />
                      Button Matrix
                    </CardTitle>
                    {/* Size Selector */}
                    <div className="flex rounded-md border border-white/10 bg-black/40 p-0.5">
                      {(['sm', 'md', 'lg'] as const).map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setBtnSize(sz)}
                          className={`px-2 py-0.5 text-[10px] font-mono uppercase transition-colors rounded ${
                            btnSize === sz
                              ? 'bg-cyan-500/30 text-cyan-200'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                  <CardDescription>
                    Multiple variants, sizes, icon slots, and animated loading states.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-2.5">
                    <Button variant="neon" size={btnSize} leftIcon={<Zap className="h-4 w-4" />}>
                      Cyber Neon
                    </Button>
                    <Button variant="primary" size={btnSize}>
                      Primary Node
                    </Button>
                    <Button variant="secondary" size={btnSize}>
                      Secondary
                    </Button>
                    <Button variant="outline" size={btnSize}>
                      Outlined
                    </Button>
                    <Button variant="destructive" size={btnSize} leftIcon={<ShieldAlert className="h-4 w-4" />}>
                      Purge Data
                    </Button>
                    <Button variant="ghost" size={btnSize}>
                      Ghost Trigger
                    </Button>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="neon"
                      size="sm"
                      isLoading={isLoadingDemo}
                      onClick={() => {
                        setIsLoadingDemo(true);
                        setTimeout(() => setIsLoadingDemo(false), 2000);
                      }}
                      className="w-full border-cyan-500/40"
                    >
                      {isLoadingDemo ? 'Synchronizing Node...' : 'Test Async Action'}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Card 2: Interactive Form & Switches */}
          {(activeTab === 'all' || activeTab === 'controls') && (
            <Card variant="interactive" className="relative flex flex-col justify-between overflow-hidden">
              <BorderBeam variant="neon" size={140} duration={10} delay={2} />
              <div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sliders className="h-5 w-5 text-cyan-400" />
                    Input & Toggle Controls
                  </CardTitle>
                  <CardDescription>
                    Futuristic inputs, live switches, and pulsing status badges.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-2">
                  <Input
                    placeholder="Search node protocol..."
                    leftIcon={<Search className="h-4 w-4 text-cyan-400" />}
                    variant="neon"
                  />

                  <div className="space-y-3 rounded-xl border border-white/10 bg-black/30 p-3.5">
                    <Switch
                      label="Overclock Engine"
                      description="Boost clock speed to 4.8 GHz"
                      variant="neon"
                      checked={overclock}
                      onCheckedChange={setOverclock}
                    />
                    <div className="h-px bg-white/10" />
                    <Switch
                      label="Shield Defense Matrix"
                      description="Auto-isolate unauthorized traffic"
                      variant="neonGreen"
                      checked={shieldDefense}
                      onCheckedChange={setShieldDefense}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <Badge variant="neon" dot dotColor="cyan">
                      SYSTEM OK
                    </Badge>
                    <Badge variant="destructive" dot dotColor="rose">
                      CRITICAL BREACH
                    </Badge>
                    <Badge variant="neonGreen" dot dotColor="green">
                      42 NODES
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Card 3: Status & Cyber Telemetry */}
          {(activeTab === 'all' || activeTab === 'telemetry') && (
            <Card variant="interactive" className="relative flex flex-col justify-between overflow-hidden">
              <BorderBeam variant="destructive" size={150} duration={12} delay={1} />
              <div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Radio className="h-5 w-5 text-rose-400" />
                    Security Telemetry
                  </CardTitle>
                  <CardDescription>
                    Real-time radar scanning and threat assessment indicators.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-2">
                  <div className="flex items-center justify-around rounded-xl border border-white/10 bg-black/30 p-4">
                    <ThreatIndicator
                      value={threatLevel}
                      level={threatLevel > 70 ? 'critical' : threatLevel > 40 ? 'high' : 'low'}
                      label={threatLevel > 70 ? 'CRITICAL BREACH' : threatLevel > 40 ? 'HIGH RISK' : 'NOMINAL'}
                    />
                    <div className="flex flex-col items-center gap-1.5">
                      <RadarProgress size="sm" color={threatLevel > 70 ? 'rose' : threatLevel > 40 ? 'green' : 'cyan'} />
                      <span className="font-mono text-[10px] text-slate-400">SCANNING</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs">
                    <span className="font-mono text-slate-400">Threat Simulation:</span>
                    <div className="flex gap-1">
                      {[
                        { lvl: 14, label: 'Low', color: 'text-cyan-400' },
                        { lvl: 55, label: 'Mid', color: 'text-amber-400' },
                        { lvl: 88, label: 'High', color: 'text-rose-400' },
                      ].map((t) => (
                        <button
                          key={t.label}
                          onClick={() => setThreatLevel(t.lvl)}
                          className={`rounded px-2 py-1 font-mono text-[10px] uppercase border transition ${
                            threatLevel === t.lvl
                              ? `border-cyan-400 bg-cyan-500/20 ${t.color}`
                              : 'border-white/10 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Card 4: Interactive Feedback & Alerts */}
          {(activeTab === 'all' || activeTab === 'alerts') && (
            <Card variant="interactive" className="relative flex flex-col justify-between overflow-hidden">
              <BorderBeam variant="neon" size={140} duration={11} />
              <div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertTriangle className="h-5 w-5 text-cyan-400" />
                    Feedback & Alerts
                  </CardTitle>
                  <CardDescription>
                    Contextual alerts for info, success, warnings, and destructive errors.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2.5 pt-1">
                  <Alert variant="info" title="Node Connection Online" closable>
                    Latency: 1.2ms across 4 datacenters.
                  </Alert>
                  <Alert variant="success" title="Security Token Generated">
                    RSA-4096 key pair stored securely.
                  </Alert>
                  <Alert variant="destructive" title="Unrecognized Node Breach" closable>
                    IP 192.168.1.100 isolated by firewall.
                  </Alert>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Card 5: Cyber Metrics & Dynamic Slider */}
          {(activeTab === 'all' || activeTab === 'controls' || activeTab === 'telemetry') && (
            <Card variant="interactive" className="relative flex flex-col justify-between overflow-hidden">
              <BorderBeam variant="neon" size={140} duration={9} delay={3} />
              <div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Cpu className="h-5 w-5 text-cyan-400" />
                    Metrics & Sliders
                  </CardTitle>
                  <CardDescription>
                    Responsive sliders and dynamic glowing progress bars.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5 pt-2">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Power Allocation</span>
                      <span className="text-cyan-300 font-bold">{sliderVal[0]}%</span>
                    </div>
                    <Slider
                      value={sliderVal}
                      onValueChange={setSliderVal}
                      max={100}
                      variant="neon"
                    />
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Telemetry Stream</span>
                      <span className={sliderVal[0] > 80 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                        {sliderVal[0] > 80 ? 'HIGH LOAD' : 'OPTIMAL'}
                      </span>
                    </div>
                    <Progress
                      value={sliderVal[0]}
                      variant={sliderVal[0] > 80 ? 'destructive' : 'neon'}
                      size="md"
                    />
                  </div>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Card 6: Live Code Integration */}
          {(activeTab === 'all' || activeTab === 'alerts' || activeTab === 'telemetry') && (
            <Card variant="interactive" className="relative flex flex-col justify-between overflow-hidden">
              <BorderBeam variant="neon" size={150} duration={13} />
              <div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code className="h-5 w-5 text-cyan-400" />
                    Developer DX
                  </CardTitle>
                  <CardDescription>
                    Type-safe, fully customizable React components.
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-1">
                  <TerminalBlock
                    code={`import { Button, ThreatIndicator } from '@siberui/react';\n\nexport function NodeCard() {\n  return (\n    <Card variant="neon">\n      <ThreatIndicator value={14} />\n      <Button variant="neon">Deploy</Button>\n    </Card>\n  );\n}`}
                    language="tsx"
                    title="ComponentUsage.tsx"
                  />
                </CardContent>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Feature set
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Designed for modern product teams
            </h2>
          </div>
          <Link href="/docs/components/accordion">
            <Button variant="outline" className="w-fit border-white/10 text-slate-300">
              Browse library
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                variant="interactive"
                className="relative overflow-hidden"
              >
                <BorderBeam
                  variant="neon"
                  size={130}
                  duration={9}
                />
                <CardHeader>
                  <Icon className="mb-3 h-6 w-6 text-cyan-400" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-400">
                    Refined patterns that keep interfaces looking intentional
                    and lightweight.
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA / Highlight Section (UPDATED: Bottom Right accent changed to subtle Crimson Red) */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card
            variant="neon"
            className="relative overflow-hidden"
          >
            <BorderBeam
              variant="destructive"
              size={180}
              duration={12}
              delay={1}
            />
            <CardHeader>
              <ShieldAlert className="mb-2 h-6 w-6 text-rose-500" />
              <CardTitle>Live system feedback</CardTitle>
              <CardDescription>
                Make status, health, and confidence signals feel as elegant as
                the rest of the experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 py-6 sm:flex-row sm:justify-center">
              <ThreatIndicator
                value={15}
                level="low"
                label="System Nominal"
              />
              <ThreatIndicator
                value={98}
                level="critical"
                label="Breach Detected"
              />
            </CardContent>
          </Card>

          {/* Bottom Right Card: Updated from Purple to Crimson Red */}
          <Card
            variant="interactive"
            className="relative overflow-hidden border-rose-500/20"
          >
            <BorderBeam
              variant="destructive"
              size={220}
              duration={14}
              reverse
            />
            <CardHeader className="text-center">
              <Layers className="mx-auto mb-4 h-8 w-8 text-rose-400" />
              <CardTitle className="text-2xl">
                Minimal by default, expressive when needed
              </CardTitle>
              <CardDescription className="mx-auto max-w-xl">
                The visual system balances restrained geometry and subtle crimson glow
                so your products feel modern without becoming overwhelming.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-4 py-8">
              <Button variant="primary" onClick={() => toast({ title: 'Node Selected', description: 'Primary proxy cluster connected.' })}>Default Node</Button>
              <Button variant="destructive" onClick={() => toast({ variant: 'destructive', title: 'Data Purged', description: 'System memory wiped successfully.' })}>Purge Data</Button>
              <Button variant="outline" onClick={() => toast({ title: 'Scan Initiated', description: 'Running deep sector diagnostics.' })}>Scan Sector</Button>
              <Button variant="ghost" onClick={() => toast({ title: 'Bypassed', description: 'Security firewall routed.' })}>Bypass Proxy</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="mt-10 w-full border-t border-white/10 py-10 text-center text-sm text-slate-500">
        <p>It was designed and built by volkanozbek.</p>
        <p className="mt-2">MIT License &copy; 2026 Siber UI.</p>
      </footer>
    </main>
  );
}
