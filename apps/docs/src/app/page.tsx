'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Alert,
  Badge,
  BorderBeam,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  GlitchText,
  Input,
  Progress,
  RadarProgress,
  Slider,
  Switch,
  TerminalBlock,
  ThreatIndicator,
  useToast,
} from '@siberui/react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Code,
  Layers,
  ShieldAlert,
  Sparkles,
  Zap,
  Search,
  Sliders,
  AlertTriangle,
  Radio,
  Cpu,
  HelpCircle,
  Terminal,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DocSearchModal } from '@/components/docs/DocSearchModal';

const showcaseTabs = [
  { id: 'all', label: 'All Components' },
  { id: 'controls', label: 'Interactive Controls' },
  { id: 'telemetry', label: 'Status & Telemetry' },
  { id: 'alerts', label: 'Feedback & Alerts' },
] as const;

type ShowcaseTab = (typeof showcaseTabs)[number]['id'];

export default function Home() {
  const [accentColor, setAccentColor] = useState<
    'cyan' | 'purple' | 'emerald' | 'rose'
  >('cyan');
  const [pkgManager, setPkgManager] = useState<'pnpm' | 'npm' | 'yarn' | 'bun'>(
    'pnpm',
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const [scenarioTab, setScenarioTab] = useState<
    'dashboard' | 'security' | 'admin'
  >('dashboard');

  // Interactive component demo states
  const [btnSize, setBtnSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);
  const [sliderVal, setSliderVal] = useState<number[]>([74]);
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('all');
  const [overclock, setOverclock] = useState(true);
  const [shieldDefense, setShieldDefense] = useState(true);
  const [threatLevel, setThreatLevel] = useState<number>(14);
  const prefersReducedMotion = useReducedMotion();
  const { toast } = useToast();

  const getInstallCmd = (pkg: string) => {
    switch (pkg) {
      case 'npm':
        return 'npm i @siberui/react';
      case 'yarn':
        return 'yarn add @siberui/react';
      case 'bun':
        return 'bun add @siberui/react';
      case 'pnpm':
      default:
        return 'pnpm add @siberui/react';
    }
  };

  const getAccentGradient = () => {
    switch (accentColor) {
      case 'purple':
        return 'bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.14),transparent_35%)]';
      case 'emerald':
        return 'bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_35%)]';
      case 'rose':
        return 'bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_35%)]';
      case 'cyan':
      default:
        return 'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.14),transparent_35%)]';
    }
  };

  const scenarioConfig = {
    dashboard: {
      title: 'Dashboard Workspace',
      summary:
        'Analytics-focused surfaces with fast scanning and clear progress cues.',
      components: ['Card', 'Badge', 'Progress'],
      outcomeLabel: 'Assembly Time',
      outcomeValue: 'Under 10 min',
      outcomeTone: 'text-emerald-300',
    },
    security: {
      title: 'Security Ops Center',
      summary:
        'Critical alerts and threat telemetry for high-pressure response flows.',
      components: ['Alert', 'ThreatIndicator', 'RadarProgress'],
      outcomeLabel: 'Incident Visibility',
      outcomeValue: 'Real-time',
      outcomeTone: 'text-rose-300',
    },
    admin: {
      title: 'Admin Console',
      summary:
        'Command-driven controls with predictable forms and safe confirmations.',
      components: ['Command', 'Dialog', 'Input'],
      outcomeLabel: 'Operator Friction',
      outcomeValue: 'Reduced',
      outcomeTone: 'text-cyan-300',
    },
  } as const;

  const activeScenario = scenarioConfig[scenarioTab];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06090e] text-slate-100">
      {/* Background ambient radial glows */}
      <div
        className={`pointer-events-none absolute inset-0 transition-all duration-500 ${getAccentGradient()}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.05)_0%,transparent_45%,rgba(255,255,255,0.03)_100%)] opacity-80" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/25 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 group cursor-default">
              <Image
                src="/logo.svg"
                alt="Siber UI"
                width={32}
                height={32}
                className="h-8 w-8 rounded-sm border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500/50"
              />
              <span className="text-lg font-semibold tracking-[0.25em] text-slate-100 transition-colors duration-300 group-hover:text-cyan-400">
                SIBER UI
              </span>
            </div>
          </div>

          {/* Interactive Accent Switcher */}
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-md sm:flex">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              ACCENT:
            </span>
            {(['cyan', 'purple', 'emerald', 'rose'] as const).map((color) => (
              <button
                key={color}
                onClick={() => {
                  setAccentColor(color);
                  toast({
                    title: `Accent Set: ${color.toUpperCase()}`,
                    description: `Theme preset updated to ${color}.`,
                  });
                }}
                className={`h-4 w-4 rounded-full transition-all duration-200 cursor-pointer ${
                  color === 'cyan'
                    ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                    : color === 'purple'
                      ? 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]'
                      : color === 'emerald'
                        ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                        : 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]'
                } ${accentColor === color ? 'scale-125 ring-2 ring-white/80' : 'opacity-50 hover:opacity-100 hover:scale-110'}`}
                title={`Set accent color to ${color}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Search Button */}
            <Button
              variant="outline"
              onClick={() => setSearchOpen(true)}
              className="hidden justify-start text-slate-400 border-white/10 bg-white/5 h-9 hover:border-cyan-500/40 hover:text-slate-200 cursor-pointer sm:inline-flex"
              leftIcon={<Search className="h-4 w-4 text-cyan-400" />}
            >
              Search...
              <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-slate-400">
                ⌘K
              </kbd>
            </Button>

            <Link
              href="https://github.com/siberui/siber-ui"
              target="_blank"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-white"
              >
                <Code className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs/installation">
              <Button
                variant="secondary"
                className="group border-cyan-500/20 hover:border-cyan-500/40 text-cyan-50"
                rightIcon={
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
                }
              >
                View Docs
              </Button>
            </Link>
          </div>
        </div>
        <DocSearchModal
          open={searchOpen}
          onOpenChange={setSearchOpen}
        />
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion ? { duration: 0 } : { duration: 0.55 }
            }
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-mono tracking-[0.2em] text-cyan-300">
              <span className="h-2 w-2 motion-safe:animate-pulse motion-reduce:animate-none rounded-full bg-cyan-400" />
              v1.0.2 is now live
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
                <Button
                  variant="neon"
                  size="lg"
                  className="group gap-2 px-8 text-lg"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/docs/components/accordion">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-white/10 px-8 text-base text-slate-300"
                >
                  View Components
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
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, delay: 0.1 }
            }
          >
            <Card
              variant="neon"
              className="relative overflow-hidden border-white/10"
            >
              <BorderBeam
                variant="neon"
                size={170}
                duration={10}
                className="motion-reduce:hidden"
              />
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-cyan-400" />
                    <CardTitle className="font-mono text-sm tracking-wider uppercase text-slate-300">
                      Quick Installation
                    </CardTitle>
                  </div>
                  {/* Package Manager Selector Tabs */}
                  <div className="flex rounded-md border border-white/10 bg-black/40 p-0.5 font-mono text-[10px]">
                    {(['pnpm', 'npm', 'yarn', 'bun'] as const).map((pm) => (
                      <button
                        key={pm}
                        onClick={() => setPkgManager(pm)}
                        className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                          pkgManager === pm
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {pm}
                      </button>
                    ))}
                  </div>
                </div>
                <CardDescription>
                  Import design tokens and start building immediately.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TerminalBlock
                  title={`install.${pkgManager}`}
                  code={getInstallCmd(pkgManager)}
                  language="bash"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* MODERN INTERACTIVE COMPONENT SHOWCASE SECTION */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-16">
        {/* HUD Cyber Grid Sub-layer background */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5 bg-gradient-to-b from-cyan-950/[0.04] via-transparent to-rose-950/[0.03] backdrop-blur-3xl" />
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

        <div className="relative mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono tracking-[0.2em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            LIVE COMPONENT SHOWCASE
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Production-ready cyber primitives
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 md:text-lg">
            Interact with live components in real time. Crafted with fluid
            micro-interactions, dark aesthetic controls, and zero boilerplate.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {showcaseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,240,255,0.2)] font-semibold'
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
            <Card
              variant="interactive"
              className="relative flex flex-col justify-between overflow-hidden"
            >
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
                    Multiple variants, sizes, icon slots, and animated loading
                    states.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-2.5">
                    <Button
                      variant="neon"
                      size={btnSize}
                      leftIcon={<Zap className="h-4 w-4" />}
                    >
                      Cyber Neon
                    </Button>
                    <Button
                      variant="primary"
                      size={btnSize}
                    >
                      Primary Node
                    </Button>
                    <Button
                      variant="secondary"
                      size={btnSize}
                    >
                      Secondary
                    </Button>
                    <Button
                      variant="outline"
                      size={btnSize}
                    >
                      Outlined
                    </Button>
                    <Button
                      variant="destructive"
                      size={btnSize}
                      leftIcon={<ShieldAlert className="h-4 w-4" />}
                    >
                      Purge Data
                    </Button>
                    <Button
                      variant="ghost"
                      size={btnSize}
                    >
                      Ghost Trigger
                    </Button>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="neon"
                      size="sm"
                      isLoading={isLoadingDemo}
                      onClick={() => {
                        console.log(
                          'Async Button Clicked! Current state:',
                          isLoadingDemo,
                        );
                        setIsLoadingDemo(true);
                        setTimeout(() => {
                          console.log('Timeout fired! Resetting state.');
                          setIsLoadingDemo(false);
                        }, 2000);
                      }}
                      className="w-full border-cyan-500/40"
                    >
                      {isLoadingDemo
                        ? 'Synchronizing Node...'
                        : 'Test Async Action'}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Card 2: Interactive Form & Switches */}
          {(activeTab === 'all' || activeTab === 'controls') && (
            <Card
              variant="interactive"
              className="relative flex flex-col justify-between overflow-hidden"
            >
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
                    <Badge
                      variant="neon"
                      dot
                      dotColor="cyan"
                    >
                      SYSTEM OK
                    </Badge>
                    <Badge
                      variant="destructive"
                      dot
                      dotColor="rose"
                    >
                      CRITICAL BREACH
                    </Badge>
                    <Badge
                      variant="neonGreen"
                      dot
                      dotColor="green"
                    >
                      42 NODES
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Card 3: Status & Cyber Telemetry */}
          {(activeTab === 'all' || activeTab === 'telemetry') && (
            <Card
              variant="interactive"
              className="relative flex flex-col justify-between overflow-hidden"
            >
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
                      level={
                        threatLevel > 70
                          ? 'critical'
                          : threatLevel > 40
                            ? 'high'
                            : 'low'
                      }
                      label={
                        threatLevel > 70
                          ? 'CRITICAL BREACH'
                          : threatLevel > 40
                            ? 'HIGH RISK'
                            : 'NOMINAL'
                      }
                    />
                    <div className="flex flex-col items-center gap-1.5">
                      <RadarProgress
                        size="sm"
                        color={
                          threatLevel > 70
                            ? 'rose'
                            : threatLevel > 40
                              ? 'green'
                              : 'cyan'
                        }
                      />
                      <span className="font-mono text-[10px] text-slate-400">
                        SCANNING
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs">
                    <span className="font-mono text-slate-400">
                      Threat Simulation:
                    </span>
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
            <Card
              variant="interactive"
              className="relative flex flex-col justify-between overflow-hidden"
            >
              <div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertTriangle className="h-5 w-5 text-cyan-400" />
                    Feedback & Alerts
                  </CardTitle>
                  <CardDescription>
                    Contextual alerts for info, success, warnings, and
                    destructive errors.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2.5 pt-1">
                  <Alert
                    variant="info"
                    title="Node Connection Online"
                    closable
                  >
                    Latency: 1.2ms across 4 datacenters.
                  </Alert>
                  <Alert
                    variant="success"
                    title="Security Token Generated"
                  >
                    RSA-4096 key pair stored securely.
                  </Alert>
                  <Alert
                    variant="destructive"
                    title="Unrecognized Node Breach"
                    closable
                  >
                    IP 192.168.1.100 isolated by firewall.
                  </Alert>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Card 5: Cyber Metrics & Dynamic Slider */}
          {(activeTab === 'all' ||
            activeTab === 'controls' ||
            activeTab === 'telemetry') && (
            <Card
              variant="interactive"
              className="relative flex flex-col justify-between overflow-hidden"
            >
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
                      <span className="text-cyan-300 font-bold">
                        {sliderVal[0]}%
                      </span>
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
                      <span
                        className={
                          sliderVal[0] > 80
                            ? 'text-rose-400 font-bold'
                            : 'text-emerald-400 font-bold'
                        }
                      >
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
          {(activeTab === 'all' ||
            activeTab === 'alerts' ||
            activeTab === 'telemetry') && (
            <Card
              variant="interactive"
              className="relative flex flex-col justify-between overflow-hidden"
            >
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

      {/* Architecture & Philosophy Section (Card-less Modern Layout) */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20">
        <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              {'// Architecture & Philosophy'}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Built for Speed. Styled for Impact.
            </h2>
          </div>
          <Link href="/docs/installation">
            <Button
              variant="outline"
              className="w-fit border-white/10 text-slate-300"
            >
              View Docs &rarr;
            </Button>
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="group relative border-l-2 border-cyan-500/40 pl-6 transition-all duration-300 hover:border-cyan-400">
            <Zap className="mb-3 h-6 w-6 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-lg font-bold text-white">Elevated Motion</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 font-sans">
              Subtle 60fps transitions and live state feedback that feel premium
              without cluttering your DOM trees.
            </p>
          </div>

          <div className="group relative border-l-2 border-purple-500/40 pl-6 transition-all duration-300 hover:border-purple-400">
            <Layers className="mb-3 h-6 w-6 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-lg font-bold text-white">Minimal Surfaces</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 font-sans">
              Restrained geometry, refined borders, and reduced noise designed
              for high-contrast product dashboards.
            </p>
          </div>

          <div className="group relative border-l-2 border-rose-500/40 pl-6 transition-all duration-300 hover:border-rose-400">
            <Sparkles className="mb-3 h-6 w-6 text-rose-400 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-lg font-bold text-white">
              Cyber-ready Primitives
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 font-sans">
              Built-in neon presets, animated border beams, radar meters, and
              glitch text ready for immediate production use.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA / Highlight Section (UPDATED: Bottom Right accent changed to subtle Crimson Red) */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card
            variant="neon"
            className="relative overflow-hidden border-cyan-500/25 bg-gradient-to-b from-cyan-950/10 via-black/40 to-black/60"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] [background-size:100%_12px] opacity-40"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,0.12),transparent_42%)]"
            />
            <CardHeader className="relative z-10 space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-cyan-300" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-200">
                    Hologram Control
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-cyan-300/80">
                    Sync 60Hz
                  </span>
                  <Badge
                    variant="neon"
                    dot
                    dotColor="cyan"
                  >
                    LIVE
                  </Badge>
                </div>
              </div>
              <div>
                <CardTitle className="text-cyan-100">
                  <span className="font-mono text-2xl font-semibold uppercase tracking-[0.12em]">
                    Holographic System Feedback
                  </span>
                </CardTitle>
                <CardDescription className="mt-2 max-w-xl text-slate-300">
                  Immersive HUD telemetry with restrained glow, fast threat
                  context, and operator-safe readability.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4 py-2">
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="rounded-md border border-cyan-500/20 bg-black/30 px-3 py-2 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-500">
                    Latency
                  </p>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">
                    1.2ms
                  </p>
                </div>
                <div className="rounded-md border border-cyan-500/20 bg-black/30 px-3 py-2 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-500">
                    Nodes
                  </p>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">42</p>
                </div>
                <div className="rounded-md border border-cyan-500/20 bg-black/30 px-3 py-2 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-500">
                    Confidence
                  </p>
                  <p className="mt-1 text-sm font-semibold text-emerald-300">
                    99.2%
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-cyan-500/25 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),rgba(2,6,23,0.85)_58%)] p-4">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
                      Node Uplink
                    </p>
                    <ThreatIndicator
                      value={18}
                      level="low"
                      label="Nominal"
                    />
                  </div>
                  <div className="flex justify-center">
                    <RadarProgress
                      size="md"
                      color="cyan"
                    />
                  </div>
                  <div className="space-y-1.5 sm:text-right">
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
                      Breach Watch
                    </p>
                    <ThreatIndicator
                      value={72}
                      level="high"
                      label="Elevated"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="space-y-3">
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.12em]">
                      <span className="text-slate-400">Signal Coherence</span>
                      <span className="text-cyan-300">94%</span>
                    </div>
                    <Progress
                      value={94}
                      variant="neon"
                      size="sm"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.12em]">
                      <span className="text-slate-400">Defense Readiness</span>
                      <span className="text-rose-300">72%</span>
                    </div>
                    <Progress
                      value={72}
                      variant="destructive"
                      size="sm"
                    />
                  </div>
                </div>
              </div>

              <TerminalBlock
                title="hud.sync"
                language="bash"
                code="telemetry.hud --mode=adaptive --scan=continuous"
              />
            </CardContent>
          </Card>

          {/* Bottom Right Card: Scenario Composer */}
          <Card
            variant="interactive"
            className="relative overflow-hidden border-rose-500/20"
          >
            <CardHeader className="text-center">
              <Layers className="mx-auto mb-4 h-8 w-8 text-rose-300" />
              <CardTitle className="text-2xl">Scenario Composer</CardTitle>
              <CardDescription className="mx-auto max-w-xl">
                Build full product contexts, not isolated widgets. Choose a
                scenario and inspect all three layers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 py-6">
              <div className="flex flex-wrap justify-center gap-2">
                {(
                  [
                    { key: 'dashboard', label: 'Dashboard' },
                    { key: 'security', label: 'Security Ops' },
                    { key: 'admin', label: 'Admin Console' },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setScenarioTab(item.key)}
                    aria-pressed={scenarioTab === item.key}
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors ${
                      scenarioTab === item.key
                        ? 'border-rose-400/60 bg-rose-500/15 text-rose-200'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
                  Layer 1 · Mini Screen Preview
                </p>
                <div className="mt-3">
                  {scenarioTab === 'dashboard' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <span className="text-xs text-slate-400">
                          Traffic Health
                        </span>
                        <Badge
                          variant="neon"
                          dot
                          dotColor="cyan"
                        >
                          Stable
                        </Badge>
                      </div>
                      <Progress
                        value={72}
                        variant="neon"
                        size="sm"
                      />
                    </div>
                  )}
                  {scenarioTab === 'security' && (
                    <div className="space-y-3">
                      <Alert
                        variant="destructive"
                        title="Threat Signature Detected"
                      >
                        Auto-isolation protocol ready.
                      </Alert>
                      <div className="flex justify-center">
                        <ThreatIndicator
                          value={82}
                          level="high"
                          label="Escalated"
                        />
                      </div>
                    </div>
                  )}
                  {scenarioTab === 'admin' && (
                    <div className="space-y-3">
                      <TerminalBlock
                        title="ops.sh"
                        language="bash"
                        code="pnpm deploy --filter=dashboard"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
                  Layer 2 · Component Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeScenario.components.map((componentName) => (
                    <Badge
                      key={componentName}
                      variant="outline"
                    >
                      {componentName}
                    </Badge>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  {activeScenario.summary}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
                  Layer 3 · Outcome Metric
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    {activeScenario.outcomeLabel}
                  </span>
                  <span
                    className={`text-sm font-semibold ${activeScenario.outcomeTone}`}
                  >
                    {activeScenario.outcomeValue}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-1">
                <Link href="/docs/components">
                  <Button variant="primary">View Full Example</Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() =>
                    toast({
                      title: 'Starter Template Copied',
                      description: `${activeScenario.title} starter blueprint is ready.`,
                    })
                  }
                >
                  Copy Starter Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cyberpunk FAQ Section (Showcasing Siber UI Accordion Component) */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <HelpCircle className="h-3.5 w-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-400">
            Everything you need to know about integrating Siber UI into your
            workflow.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card
            variant="default"
            className="p-6 border-white/10"
          >
            <Accordion
              type="single"
              collapsible
              variant="neon"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What makes Siber UI different from standard UI libraries?
                </AccordionTrigger>
                <AccordionContent>
                  Siber UI is purpose-built for dark-mode interfaces requiring
                  an uncompromising, high-tech cyberpunk aesthetic. Unlike
                  generic libraries, Siber UI comes out-of-the-box with neon
                  glow presets, animated border beams, radar progress meters,
                  glitch text, and terminal elements—all designed for
                  zero-config visual impact.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is Siber UI compatible with Next.js App Router and Tailwind
                  CSS v4?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Siber UI is built on top of Tailwind CSS v4 and fully
                  supports Next.js 14/15/16 App Router, React Server Components
                  (RSC), and Vite. You simply import
                  `@siberui/react/globals.css` into your root layout and start
                  using components.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is Siber UI accessible and screen-reader friendly?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. All interactive primitives (Accordions, Dialogs,
                  Tooltips, Tabs, Toggles) are built on top of WAI-ARIA
                  compliant Radix UI primitives. Full keyboard navigation and
                  screen-reader compatibility are baked into every component.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I customize the neon accent colors?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Every component accepts variant props such as `cyan`,
                  `purple`, `emerald`, and `rose/destructive`. You can also
                  override any Tailwind CSS class using standard `className`
                  prop overrides powered by `tailwind-merge`.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      <footer className="mt-20 w-full border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 md:flex-row text-xs font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse motion-reduce:animate-none" />
              <span className="uppercase tracking-widest text-[10px] text-emerald-500/80 font-bold">
                sys.status: online
              </span>
            </div>
            <span className="text-white/10">|</span>
            <span>
              Designed &amp; built by{' '}
              <a
                href="https://github.com/volkanozbek"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                @volkanozbek
              </a>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>MIT License &copy; 2026 Siber UI</span>
            <span className="text-white/10">|</span>
            <a
              href="https://github.com/siberui/siber-ui"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@siberui/react"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              NPM
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
