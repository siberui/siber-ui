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
  Switch,
  TerminalBlock,
  ThreatIndicator,
  useToast,
  CypherText,
  ArcGauge,
  BiometricScanner,
  KillSwitch,
  HexViewer,
  ChamferCard,
  ChamferCardHeader,
  ChamferCardTitle,
  ChamferCardDescription,
  ChamferCardContent,
  ChamferCardFooter,
  SignalBorder,
  Scanline,
  StatCard,
  SkillMatrix,
  SkillItem,
  useCyberAudio,
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
  Radio,
  Cpu,
  HelpCircle,
  Terminal,
  Binary,
  GitBranch,
  Volume2,
  VolumeX,
  Flame,
  Activity,
  Server,
  Fingerprint,
  Menu,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DocSearchModal } from '@/components/docs/DocSearchModal';
import { DocMobileNav } from '@/components/docs/layout/DocMobileNav';
import { usePackageVersion } from '@/hooks/usePackageVersion';

function NpmIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className || 'h-4 w-4'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="currentColor" />
      <path d="M5 5v14h7V9.5h4.5V19H19V5H5z" fill="#03060d" />
    </svg>
  );
}

const showcaseTabs = [
  { id: 'all', label: 'All Components' },
  { id: 'flagship', label: 'Cyber Flagships' },
  { id: 'controls', label: 'Interactive Controls' },
  { id: 'telemetry', label: 'Telemetry & Gauges' },
  { id: 'security', label: 'Security & Dossier' },
] as const;

type ShowcaseTab = (typeof showcaseTabs)[number]['id'];

const sampleHexDump =
  'SIBER_UI_CORE_v2.0_QUANTUM_LATTICE_CIPHER_INITIALIZED_KEY=0x7F4A9E2198D6B881_SECURITY_OVERRIDE_ENABLED';

export default function Home() {
  const packageVersion = usePackageVersion();
  const [accentColor, setAccentColor] = useState<
    'cyan' | 'purple' | 'emerald' | 'rose'
  >('cyan');
  const [pkgManager, setPkgManager] = useState<'pnpm' | 'npm' | 'yarn' | 'bun'>(
    'pnpm',
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scenarioTab, setScenarioTab] = useState<
    'dashboard' | 'security' | 'admin'
  >('dashboard');

  // Audio synthesizer hook
  const { play, isMuted, toggleMute } = useCyberAudio({ volume: 0.25 });

  // Interactive component demo states
  const [btnSize, setBtnSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('all');
  const [overclock, setOverclock] = useState(true);
  const [shieldDefense, setShieldDefense] = useState(true);
  const [threatLevel, setThreatLevel] = useState<number>(18);
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
      components: ['Card', 'StatCard', 'ArcGauge'],
      outcomeLabel: 'Assembly Time',
      outcomeValue: 'Under 10 min',
      outcomeTone: 'text-emerald-300',
      link: '/docs/components/stat-card',
      templateCode: `import { ChamferCard, StatCard, ArcGauge } from '@siberui/react';

export function DashboardStarter() {
  return (
    <ChamferCard signal="cyan" tag="TELEMETRY // OPS_01" glow>
      <StatCard
        indexTag="[SYS.CORE_01]"
        label="REALTIME THROUGHPUT"
        value="14.2 GB/s"
        trend={{ value: '+28.4%', direction: 'up', label: 'nominal' }}
        signal="cyan"
      />
    </ChamferCard>
  );
}`,
    },
    security: {
      title: 'Security Ops Center',
      summary:
        'Critical alerts, biometric verification, and threat telemetry for high-pressure response flows.',
      components: ['BiometricScanner', 'ThreatIndicator', 'KillSwitch'],
      outcomeLabel: 'Incident Visibility',
      outcomeValue: 'Real-time',
      outcomeTone: 'text-rose-300',
      link: '/docs/components/biometric-scanner',
      templateCode: `import { BiometricScanner, ThreatIndicator, KillSwitch } from '@siberui/react';

export function SecurityOpsStarter() {
  return (
    <div className="space-y-4">
      <BiometricScanner mode="retina" signal="cyan" label="AUTHENTICATION NODE" />
      <ThreatIndicator value={82} level="high" label="Escalated" />
    </div>
  );
}`,
    },
    admin: {
      title: 'Admin Console',
      summary:
        'Command-driven controls with raw byte inspection and safe confirmations.',
      components: ['HexViewer', 'CypherText', 'TerminalBlock'],
      outcomeLabel: 'Operator Friction',
      outcomeValue: 'Reduced',
      outcomeTone: 'text-cyan-300',
      link: '/docs/components/hex-viewer',
      templateCode: `import { HexViewer, CypherText } from '@siberui/react';

export function AdminConsoleStarter() {
  return (
    <div className="space-y-4">
      <CypherText text="KERNEL_AUTHENTICATION_READY" color="cyan" glow />
      <HexViewer data="SYSTEM_PAYLOAD_0x7F" signal="cyan" maxHeight="240px" />
    </div>
  );
}`,
    },
  } as const;

  const activeScenario = scenarioConfig[scenarioTab];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03060d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Grid and Ambient Textures */}
      <div className="system-grid" />
      <div className="system-noise" />
      <div className="system-vignette" />

      {/* Background ambient radial glows */}
      <div
        className={`pointer-events-none absolute inset-0 transition-all duration-500 ${getAccentGradient()}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.04)_0%,transparent_45%,rgba(255,255,255,0.02)_100%)] opacity-80" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#03060d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-4 sm:px-8 lg:px-16 py-3">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                play('click');
                setMobileNavOpen(true);
              }}
              className="md:hidden text-slate-400 hover:text-white h-9 w-9 -ml-1 border border-white/[0.08] hover:border-cyan-500/40"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-cyan-400" />
            </Button>

            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="relative p-1 rounded border border-cyan-500/30 bg-cyan-950/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,217,232,0.4)] transition-all">
                <Image
                  src="/logo.svg"
                  alt="Siber UI"
                  width={28}
                  height={28}
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-cyan-400 font-mono">
                  SIBER UI
                </span>
                <span className="hidden xs:inline text-[9px] font-mono text-slate-500 tracking-wider">
                  CYBER-MINIMALIST KIT
                </span>
              </div>
            </Link>
          </div>

          {/* Interactive Audio & Accent Switcher */}
          <div className="hidden items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 backdrop-blur-md md:flex">
            <button
              onClick={() => {
                toggleMute();
                if (isMuted) play('blip');
              }}
              className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              title="Toggle sound effects"
            >
              {isMuted ? (
                <VolumeX className="h-3.5 w-3.5 text-slate-500" />
              ) : (
                <Volume2 className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              )}
              <span>{isMuted ? 'AUDIO OFF' : 'AUDIO ON'}</span>
            </button>

            <span className="h-3 w-px bg-white/10" />

            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
              ACCENT:
            </span>
            {(['cyan', 'purple', 'emerald', 'rose'] as const).map((color) => (
              <button
                key={color}
                onClick={() => {
                  setAccentColor(color);
                  play('blip');
                  toast({
                    title: `Accent Set: ${color.toUpperCase()}`,
                    description: `Theme preset updated to ${color}.`,
                  });
                }}
                className={`h-3.5 w-3.5 rounded-full transition-all duration-200 cursor-pointer ${
                  color === 'cyan'
                    ? 'bg-cyan-400 shadow-[0_0_8px_rgba(0,217,232,0.8)]'
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

          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Quick Search Button (Mobile Icon / Desktop Bar) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                play('click');
                setSearchOpen(true);
              }}
              className="sm:hidden text-slate-400 hover:text-white h-9 w-9"
              aria-label="Search documentation"
            >
              <Search className="h-4 w-4 text-cyan-400" />
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                play('click');
                setSearchOpen(true);
              }}
              className="hidden justify-start text-slate-400 border-white/[0.08] bg-white/[0.03] h-9 hover:border-cyan-500/40 hover:text-slate-200 cursor-pointer sm:inline-flex"
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
              rel="noreferrer"
              title="GitHub Repository"
              className="hidden sm:inline-flex"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => play('click')}
                className="text-slate-400 hover:text-white h-9 w-9"
              >
                <GitBranch className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <Link
              href="https://www.npmjs.com/package/@siberui/react"
              target="_blank"
              rel="noreferrer"
              title="NPM Package"
              className="hidden sm:inline-flex"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => play('click')}
                className="text-slate-400 hover:text-white h-9 w-9"
              >
                <NpmIcon className="h-4 w-4" />
                <span className="sr-only">NPM</span>
              </Button>
            </Link>
            <Link href="/docs/installation">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => play('click')}
                className="group border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white h-9 px-3 sm:px-4 text-xs sm:text-sm"
                rightIcon={
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
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
        <DocMobileNav
          isOpen={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
          onOpenSearch={() => setSearchOpen(true)}
          accentColor={accentColor}
          onAccentColorChange={setAccentColor}
        />
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex w-full max-w-[1360px] flex-col px-4 sm:px-8 lg:px-16 py-12 md:py-24">
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
              v{packageVersion} is now live
            </div>

            <GlitchText
              as="h1"
              text="BUILD THE FUTURE. TODAY."
              color="cyan"
              speed={140}
              className="max-w-3xl text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-mono"
            />

            <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base text-slate-400 md:text-lg leading-relaxed font-mono">
              A polished cyberpunk UI kit for modern teams that want minimalism,
              clarity, and a premium digital edge.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <Link href="/docs/installation" className="w-full sm:w-auto">
                <Button
                  variant="neon"
                  size="lg"
                  onClick={() => play('granted')}
                  className="group gap-2 px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/docs/components/accordion" className="w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => play('click')}
                  className="border-white/[0.08] px-6 sm:px-8 text-sm sm:text-base text-slate-300 hover:border-cyan-500/40 w-full sm:w-auto"
                >
                  View Components
                </Button>
              </Link>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { value: '45+', label: 'components' },
                { value: '100%', label: 'tailwind v4' },
                { value: '⚡ 0ms', label: 'runtime delay' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/5 p-2.5 sm:p-4 text-center backdrop-blur"
                >
                  <p className="text-base sm:text-xl font-bold text-slate-100 font-mono">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-slate-400 truncate">{item.label}</p>
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
              className="chrome relative overflow-hidden border-white/[0.08]"
              data-chrome-label="INSTALL / 01"
            >
              <BorderBeam
                variant="neon"
                size={170}
                duration={10}
                className="motion-reduce:hidden"
              />
              <CardHeader className="space-y-3 p-4 sm:p-6">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-cyan-400" />
                    <CardTitle className="font-mono text-xs sm:text-sm tracking-wider uppercase text-slate-300">
                      Quick Installation
                    </CardTitle>
                  </div>
                  {/* Package Manager Selector Tabs */}
                  <div className="flex self-start xs:self-auto rounded-md border border-white/[0.08] bg-black/40 p-0.5 font-mono text-[10px]">
                    {(['pnpm', 'npm', 'yarn', 'bun'] as const).map((pm) => (
                      <button
                        key={pm}
                        onClick={() => {
                          play('click');
                          setPkgManager(pm);
                        }}
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
                <CardDescription className="text-xs sm:text-sm">
                  Import design tokens and start building immediately.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
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

      {/* SIGNATURE CYBER PRIMITIVES SHOWCASE (NEW FLAGSHIP SUITE) */}
      <section className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-16 py-12 md:py-16">
        <div className="relative mb-10 sm:mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono tracking-[0.2em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            SIGNATURE CYBER SUITE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-5xl font-sans">
            Engineered for high-stakes digital experiences
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
            Every primitive is built from scratch with hardware-inspired styling, WAI-ARIA keyboard navigation, zero external asset dependencies, and strict TypeScript definitions.
          </p>
        </div>

        {/* 6 Flagship Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Flagship 1: HexViewer */}
          <ChamferCard
            signal="cyan"
            glow
            tag="FORENSICS // 0x40"
            statusDot="cyan"
            className="flex flex-col justify-between"
          >
            <ChamferCardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Binary className="h-4 w-4 text-cyan-400 shrink-0" />
                  <ChamferCardTitle className="text-xs sm:text-sm truncate">Hex &amp; Memory Viewer</ChamferCardTitle>
                </div>
                <Link href="/docs/components/hex-viewer">
                  <Badge variant="outline" className="text-[9px] sm:text-[10px] hover:border-cyan-400 cursor-pointer shrink-0">
                    DOCS &rarr;
                  </Badge>
                </Link>
              </div>
              <ChamferCardDescription className="text-[11px] sm:text-xs text-slate-400">
                Synchronized memory address dump with live ASCII hover linking and search.
              </ChamferCardDescription>
            </ChamferCardHeader>

            <ChamferCardContent className="pt-2 p-2 sm:p-6 overflow-hidden">
              <HexViewer
                data={sampleHexDump}
                baseOffset={0x00400000}
                bytesPerRow={8}
                signal="cyan"
                maxHeight="180px"
                showToolbar={false}
                title="RAM // DUMP_SNAPSHOT"
              />
            </ChamferCardContent>
            <ChamferCardFooter className="pt-2 flex flex-wrap justify-between items-center gap-1 text-[9px] sm:text-[10px] font-mono text-slate-500">
              <span>8/16/32 BYTE COLUMNS</span>
              <span className="text-cyan-400">0x00400000</span>
            </ChamferCardFooter>
          </ChamferCard>

          {/* Flagship 2: Biometric Scanner */}
          <ChamferCard
            signal="green"
            glow
            tag="BIOMETRICS // AUTH"
            statusDot="green"
            className="flex flex-col justify-between"
          >
            <ChamferCardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Fingerprint className="h-4 w-4 text-emerald-400 shrink-0" />
                  <ChamferCardTitle className="text-xs sm:text-sm truncate">Biometric Interlock</ChamferCardTitle>
                </div>
                <Link href="/docs/components/biometric-scanner">
                  <Badge variant="outline" className="text-[9px] sm:text-[10px] hover:border-emerald-400 cursor-pointer shrink-0">
                    DOCS &rarr;
                  </Badge>
                </Link>
              </div>
              <ChamferCardDescription className="text-[11px] sm:text-xs text-slate-400">
                Optical laser beam sweep with retina, fingerprint, facial, and DNA models.
              </ChamferCardDescription>
            </ChamferCardHeader>

            <ChamferCardContent className="flex flex-col items-center justify-center py-4 px-2 sm:px-6">
              <BiometricScanner
                mode="retina"
                signal="green"
                label="OCULAR RETINA SENSOR"
                onScanComplete={(success) => play(success ? 'granted' : 'denied')}
                className="mx-auto"
              />
            </ChamferCardContent>
            <ChamferCardFooter className="pt-2 flex flex-wrap justify-between items-center gap-1 text-[9px] sm:text-[10px] font-mono text-slate-500">
              <span>4 VECTOR MODES</span>
              <span className="text-emerald-400">CLICK TO TRIGGER</span>
            </ChamferCardFooter>
          </ChamferCard>

          {/* Flagship 3: Kill Switch */}
          <ChamferCard
            signal="rose"
            glow
            tag="SAFETY // INTERLOCK"
            statusDot="rose"
            className="flex flex-col justify-between"
          >
            <ChamferCardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Flame className="h-4 w-4 text-rose-400 shrink-0" />
                  <ChamferCardTitle className="text-xs sm:text-sm truncate">Two-Stage Kill Switch</ChamferCardTitle>
                </div>
                <Link href="/docs/components/kill-switch">
                  <Badge variant="outline" className="text-[9px] sm:text-[10px] hover:border-rose-400 cursor-pointer shrink-0">
                    DOCS &rarr;
                  </Badge>
                </Link>
              </div>
              <ChamferCardDescription className="text-[11px] sm:text-xs text-slate-400">
                3D translucent protective flip-cover guard with emergency ESC key fail-safe.
              </ChamferCardDescription>
            </ChamferCardHeader>

            <ChamferCardContent className="flex flex-col items-center justify-center py-4 px-2 sm:px-6">
              <KillSwitch
                size="md"
                hazard="rose"
                label="EMERGENCY OVERRIDE"
                onCoverOpenChange={() => play('arm')}
                onArmChange={(armed) => play(armed ? 'alarm' : 'click')}
                className="mx-auto"
              />
            </ChamferCardContent>
            <ChamferCardFooter className="pt-2 flex flex-wrap justify-between items-center gap-1 text-[9px] sm:text-[10px] font-mono text-slate-500">
              <span>TWO-STAGE INTERLOCK</span>
              <span className="text-rose-400">ESC DISARMS</span>
            </ChamferCardFooter>
          </ChamferCard>

          {/* Flagship 4: ArcGauge */}
          <ChamferCard
            signal="amber"
            glow
            tag="TELEMETRY // DIAL"
            statusDot="amber"
            className="flex flex-col justify-between"
          >
            <ChamferCardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Activity className="h-4 w-4 text-amber-400 shrink-0" />
                  <ChamferCardTitle className="text-xs sm:text-sm truncate">Cockpit Arc Gauge</ChamferCardTitle>
                </div>
                <Link href="/docs/components/arc-gauge">
                  <Badge variant="outline" className="text-[9px] sm:text-[10px] hover:border-amber-400 cursor-pointer shrink-0">
                    DOCS &rarr;
                  </Badge>
                </Link>
              </div>
              <ChamferCardDescription className="text-[11px] sm:text-xs text-slate-400">
                Precision SVG radial telemetry dial with auto severity threshold shifting.
              </ChamferCardDescription>
            </ChamferCardHeader>

            <ChamferCardContent className="flex flex-col items-center justify-center py-2 sm:py-3">
              <ArcGauge
                size="sm"
                value={78}
                color="auto"
                label="CORE FLUX LOAD"
                glow
                className="mx-auto"
              />
            </ChamferCardContent>
            <ChamferCardFooter className="pt-2 flex flex-wrap justify-between items-center gap-1 text-[9px] sm:text-[10px] font-mono text-slate-500">
              <span>180° / 240° / 270° ANGLES</span>
              <span className="text-amber-400">AUTO-THRESHOLD</span>
            </ChamferCardFooter>
          </ChamferCard>

          {/* Flagship 5: CypherText & Sound Synthesizer */}
          <ChamferCard
            signal="violet"
            glow
            tag="SYNTH // ACOUSTICS"
            statusDot="violet"
            className="flex flex-col justify-between"
          >
            <ChamferCardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Volume2 className="h-4 w-4 text-violet-400 shrink-0" />
                  <ChamferCardTitle className="text-xs sm:text-sm truncate">Audio Engine &amp; Cypher</ChamferCardTitle>
                </div>
                <Link href="/docs/components/cyber-audio">
                  <Badge variant="outline" className="text-[9px] sm:text-[10px] hover:border-violet-400 cursor-pointer shrink-0">
                    DOCS &rarr;
                  </Badge>
                </Link>
              </div>
              <ChamferCardDescription className="text-[11px] sm:text-xs text-slate-400">
                Zero-asset Web Audio API oscillator synthesis with live scramble decryption.
              </ChamferCardDescription>
            </ChamferCardHeader>

            <ChamferCardContent className="space-y-3 sm:space-y-4 pt-2 p-3 sm:p-6">
              <div className="p-2 sm:p-3 rounded-lg bg-black/40 border border-white/[0.06] text-center min-h-[44px] sm:min-h-[50px] flex items-center justify-center overflow-hidden">
                <CypherText
                  text="QUANTUM_TELEMETRY_SYNCED"
                  color="violet"
                  glow
                  trigger="mount"
                  speed={20}
                  className="font-mono text-[10px] xs:text-xs font-bold truncate max-w-full"
                />
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                <Button size="sm" variant="outline" onClick={() => play('click')} className="text-[9px] sm:text-[10px] font-mono px-1 sm:px-3 h-8">
                  CLICK
                </Button>
                <Button size="sm" variant="outline" onClick={() => play('scan')} className="text-[9px] sm:text-[10px] font-mono text-cyan-300 px-1 sm:px-3 h-8">
                  SCAN
                </Button>
                <Button size="sm" variant="outline" onClick={() => play('granted')} className="text-[9px] sm:text-[10px] font-mono text-emerald-300 px-1 sm:px-3 h-8">
                  CHIME
                </Button>
              </div>
            </ChamferCardContent>
            <ChamferCardFooter className="pt-2 flex flex-wrap justify-between items-center gap-1 text-[9px] sm:text-[10px] font-mono text-slate-500">
              <span>0 EXTERNAL AUDIO FILES</span>
              <span className="text-violet-400">WEB AUDIO API</span>
            </ChamferCardFooter>
          </ChamferCard>

          {/* Flagship 6: Stat & Metric Telemetry */}
          <ChamferCard
            signal="cyan"
            glow
            tag="ARSENAL // METRICS"
            statusDot="cyan"
            className="flex flex-col justify-between"
          >
            <ChamferCardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Server className="h-4 w-4 text-cyan-400 shrink-0" />
                  <ChamferCardTitle className="text-xs sm:text-sm truncate">Telemetry Stat Cards</ChamferCardTitle>
                </div>
                <Link href="/docs/components/stat-card">
                  <Badge variant="outline" className="text-[9px] sm:text-[10px] hover:border-cyan-400 cursor-pointer shrink-0">
                    DOCS &rarr;
                  </Badge>
                </Link>
              </div>
              <ChamferCardDescription className="text-[11px] sm:text-xs text-slate-400">
                Tactical index tags, trend delta chips, and micro activity gauges.
              </ChamferCardDescription>
            </ChamferCardHeader>

            <ChamferCardContent className="space-y-3 pt-2 p-3 sm:p-6">
              <StatCard
                indexTag="[NODE.NET_01]"
                label="ORBITAL EGRESS LINK"
                value="840 Gbps"
                trend={{ value: '+24.8%', direction: 'up', label: 'nominal' }}
                activity={[30, 45, 60, 40, 80, 95, 70]}
                icon={<Zap className="w-4 h-4" />}
                signal="cyan"
                cornerTicks
                className="bg-transparent border-0 p-0"
              />
            </ChamferCardContent>
            <ChamferCardFooter className="pt-2 flex flex-wrap justify-between items-center gap-1 text-[9px] sm:text-[10px] font-mono text-slate-500">
              <span>MICRO ACTIVITY SPARKS</span>
              <span className="text-cyan-400">[SYS.01]</span>
            </ChamferCardFooter>
          </ChamferCard>
        </div>
      </section>

      {/* FULL COMPONENT MATRIX FILTER SECTION */}
      <section className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-16 py-12 md:py-16">
        <div className="relative mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl font-sans">
            Complete Cyber Library Matrix
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-400 text-sm">
            Filter and test our responsive interactive primitives.
          </p>

          {/* Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {showcaseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  play('click');
                  setActiveTab(tab.id);
                }}
                aria-pressed={activeTab === tab.id}
                className={`rounded-full px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,217,232,0.2)] font-semibold'
                    : 'bg-white/5 text-slate-400 border border-white/[0.08] hover:border-white/20 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Interactive Button Matrix */}
          {(activeTab === 'all' || activeTab === 'controls') && (
            <Card
              variant="interactive"
              className="chrome relative flex flex-col justify-between overflow-hidden"
              data-chrome-label="BUTTON_MATRIX / 01"
            >
              <div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="h-5 w-5 text-cyan-400" />
                      Button Matrix
                    </CardTitle>
                    <div className="flex rounded-md border border-white/[0.08] bg-black/40 p-0.5">
                      {(['sm', 'md', 'lg'] as const).map((sz) => (
                        <button
                          key={sz}
                          onClick={() => {
                            play('click');
                            setBtnSize(sz);
                          }}
                          className={`px-2 py-0.5 text-[10px] font-mono uppercase transition-colors rounded cursor-pointer ${
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
                    <Button variant="neon" size={btnSize} onClick={() => play('click')} leftIcon={<Zap className="h-4 w-4" />}>
                      Cyber Neon
                    </Button>
                    <Button variant="primary" size={btnSize} onClick={() => play('granted')}>
                      Primary Node
                    </Button>
                    <Button variant="secondary" size={btnSize} onClick={() => play('click')}>
                      Secondary
                    </Button>
                    <Button variant="outline" size={btnSize} onClick={() => play('click')}>
                      Outlined
                    </Button>
                    <Button variant="destructive" size={btnSize} onClick={() => play('denied')} leftIcon={<ShieldAlert className="h-4 w-4" />}>
                      Purge Data
                    </Button>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="neon"
                      size="sm"
                      isLoading={isLoadingDemo}
                      onClick={() => {
                        play('scan');
                        setIsLoadingDemo(true);
                        setTimeout(() => {
                          play('granted');
                          setIsLoadingDemo(false);
                        }, 1800);
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
            <Card
              variant="interactive"
              className="relative flex flex-col justify-between overflow-hidden"
            >
              <div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sliders className="h-5 w-5 text-cyan-400" />
                    Input &amp; Toggle Controls
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

                  <div className="space-y-3 rounded-xl border border-white/[0.08] bg-black/30 p-3.5">
                    <Switch
                      label="Overclock Engine"
                      description="Boost clock speed to 4.8 GHz"
                      variant="neon"
                      checked={overclock}
                      onCheckedChange={(v) => {
                        play(v ? 'arm' : 'click');
                        setOverclock(v);
                      }}
                    />
                    <div className="h-px bg-white/10" />
                    <Switch
                      label="Shield Defense Matrix"
                      description="Auto-isolate unauthorized traffic"
                      variant="neonGreen"
                      checked={shieldDefense}
                      onCheckedChange={(v) => {
                        play(v ? 'granted' : 'denied');
                        setShieldDefense(v);
                      }}
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

          {/* Card 3: Security Telemetry & Radar */}
          {(activeTab === 'all' || activeTab === 'telemetry' || activeTab === 'security') && (
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
                  <div className="flex items-center justify-around rounded-xl border border-white/[0.08] bg-black/30 p-4">
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

                  <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/5 px-3 py-2 text-xs">
                    <span className="font-mono text-slate-400">
                      Threat Simulation:
                    </span>
                    <div className="flex gap-1">
                      {[
                        { lvl: 18, label: 'Low', color: 'text-cyan-400' },
                        { lvl: 55, label: 'Mid', color: 'text-amber-400' },
                        { lvl: 88, label: 'High', color: 'text-rose-400' },
                      ].map((t) => (
                        <button
                          key={t.label}
                          onClick={() => {
                            play(t.lvl > 70 ? 'alarm' : 'click');
                            setThreatLevel(t.lvl);
                          }}
                          className={`rounded px-2 py-1 font-mono text-[10px] uppercase border transition cursor-pointer ${
                            threatLevel === t.lvl
                              ? `border-cyan-400 bg-cyan-500/20 ${t.color}`
                              : 'border-white/[0.08] text-slate-400 hover:border-white/20'
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

          {/* Card 4: Skill Matrix */}
          {(activeTab === 'all' || activeTab === 'security' || activeTab === 'telemetry') && (
            <Card
              variant="interactive"
              className="relative flex flex-col justify-between overflow-hidden"
            >
              <div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Cpu className="h-5 w-5 text-cyan-400" />
                    Skill &amp; Capability Matrix
                  </CardTitle>
                  <CardDescription>
                    Segmented LED power bars with tactical rank calculation.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 pt-1">
                  <SkillMatrix cols={1}>
                    <SkillItem
                      name="Next.js 15 / React 19"
                      level={95}
                      category="CORE"
                      signal="cyan"
                    />
                    <SkillItem
                      name="Rust / WebAssembly"
                      level={82}
                      category="SYSTEMS"
                      signal="violet"
                    />
                    <SkillItem
                      name="Post-Quantum Lattice"
                      level={88}
                      category="SECURITY"
                      signal="amber"
                    />
                  </SkillMatrix>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Card 5: Signal Border & Scanline Preview */}
          {(activeTab === 'all' || activeTab === 'flagship' || activeTab === 'security') && (
            <div className="relative rounded-2xl bg-[#040711] p-6 h-full flex flex-col justify-between border border-white/[0.08] shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">
                <Scanline variant="crt" speed="slow" density="fine" intensity="medium" />
              </div>
              <SignalBorder signal="cyan" glow techNotch notchLabel="CRT_RASTER" notchAlign="right" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-cyan-400" />
                  <h3 className="font-mono text-sm font-bold text-white tracking-wider">
                    Signal Border &amp; Scanline
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Zero-bleed 1px laser hairline border with customizable HUD notches, CRT raster lines, and travelling laser sweeps.
                </p>
              </div>
              <div className="relative z-10 pt-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>PHOSPHOR GLOW</span>
                <Link href="/docs/components/signal-border" className="text-cyan-400 hover:underline">
                  VIEW DOCS &rarr;
                </Link>
              </div>
            </div>
          )}

          {/* Card 6: Developer DX */}
          {(activeTab === 'all' || activeTab === 'flagship' || activeTab === 'controls') && (
            <Card
              variant="interactive"
              className="relative flex flex-col justify-between overflow-hidden"
            >
              <div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code className="h-5 w-5 text-cyan-400" />
                    Developer Experience
                  </CardTitle>
                  <CardDescription>
                    Type-safe, fully accessible primitives with 0 runtime friction.
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-1">
                  <TerminalBlock
                    code={`import { ChamferCard, ArcGauge, BiometricScanner } from '@siberui/react';

export function DefenseNode() {
  return (
    <ChamferCard signal="cyan" tag="HUD // SEC_01">
      <ArcGauge value={84} color="auto" />
      <BiometricScanner mode="retina" />
    </ChamferCard>
  );
}`}
                    language="tsx"
                    title="DefenseNode.tsx"
                  />
                </CardContent>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Architecture & Philosophy Section */}
      <section className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-16 py-12 md:py-16">
        <div className="mb-12 flex flex-col gap-4 border-b border-white/[0.08] pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              {'// Architecture & Philosophy'}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl font-sans">
              Built for Speed. Styled for Impact.
            </h2>
          </div>
          <Link href="/docs/installation">
            <Button
              variant="outline"
              onClick={() => play('click')}
              className="w-fit border-white/[0.08] text-slate-300"
            >
              View Docs &rarr;
            </Button>
          </Link>
        </div>

        <div className="numbered-list grid gap-8 sm:gap-10 md:grid-cols-3">
          <div className="numbered-row group relative border-l-2 border-white/[0.08] pl-5 sm:pl-8 transition-colors duration-300 hover:border-cyan-400/80">
            <div className="mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-bold text-white font-sans">Elevated Motion</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-sans">
              Subtle 60fps transitions, laser beam sweeps, and synthesized acoustic feedback that feel premium without cluttering your DOM trees.
            </p>
          </div>

          <div className="numbered-row group relative border-l-2 border-white/[0.08] pl-5 sm:pl-8 transition-colors duration-300 hover:border-cyan-400/80">
            <div className="mb-3 flex items-center gap-2">
              <Layers className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-bold text-white font-sans">Dual-Polygon Chamfers</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-sans">
              Crisp 45-degree angled corner cuts with continuous 360° 1px hairline perimeter borders and zero background color bleed.
            </p>
          </div>

          <div className="numbered-row group relative border-l-2 border-white/[0.08] pl-5 sm:pl-8 transition-colors duration-300 hover:border-cyan-400/80">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-bold text-white font-sans">
                Zero-Asset Audio Synthesis
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-sans">
              Browser-native Web Audio API synthesizer hook that generates clicks, chirps, and telemetry alarms on the fly without downloading MP3s.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Scenario Composer */}
      <section className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-16 pb-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card
            variant="neon"
            className="relative overflow-hidden border-cyan-500/25 bg-gradient-to-b from-cyan-950/10 via-black/40 to-black/60"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,217,232,0.05)_1px,transparent_1px)] [background-size:100%_12px] opacity-40"
            />
            <CardHeader className="relative z-10 space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-cyan-300" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-200">
                    Hologram Telemetry Control
                  </span>
                </div>
                <Badge variant="neon" dot dotColor="cyan">
                  LIVE FEED
                </Badge>
              </div>
              <div>
                <CardTitle className="text-cyan-100">
                  <span className="font-mono text-2xl font-semibold uppercase tracking-[0.12em]">
                    Holographic System Feedback
                  </span>
                </CardTitle>
                <CardDescription className="mt-2 max-w-xl text-slate-300">
                  Immersive HUD telemetry with restrained glow, fast threat context, and operator-safe readability.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4 py-2">
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="rounded-md border border-cyan-500/20 bg-black/30 px-3 py-2 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-500">Latency</p>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">0.42ms</p>
                </div>
                <div className="rounded-md border border-cyan-500/20 bg-black/30 px-3 py-2 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-500">Nodes</p>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">48 Active</p>
                </div>
                <div className="rounded-md border border-cyan-500/20 bg-black/30 px-3 py-2 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-500">Confidence</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-300">99.98%</p>
                </div>
              </div>

              <div className="rounded-xl border border-cyan-500/25 bg-[radial-gradient(circle_at_center,rgba(0,217,232,0.14),rgba(2,6,23,0.85)_58%)] p-4">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">Node Uplink</p>
                    <ThreatIndicator value={18} level="low" label="Nominal" />
                  </div>
                  <div className="flex justify-center">
                    <RadarProgress size="md" color="cyan" />
                  </div>
                  <div className="space-y-1.5 sm:text-right">
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">Breach Watch</p>
                    <ThreatIndicator value={72} level="high" label="Elevated" />
                  </div>
                </div>
              </div>

              <TerminalBlock
                title="hud.sync"
                language="bash"
                code="siber.hud --mode=adaptive --scan=continuous"
              />
            </CardContent>
          </Card>

          {/* Scenario Composer */}
          <Card
            variant="interactive"
            className="relative overflow-hidden border-rose-500/20"
          >
            <CardHeader className="text-center">
              <Layers className="mx-auto mb-4 h-8 w-8 text-rose-300" />
              <CardTitle className="text-2xl font-sans">Scenario Composer</CardTitle>
              <CardDescription className="mx-auto max-w-xl">
                Build full product contexts, not isolated widgets. Choose a scenario and inspect all three layers.
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
                    onClick={() => {
                      play('click');
                      setScenarioTab(item.key);
                    }}
                    aria-pressed={scenarioTab === item.key}
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      scenarioTab === item.key
                        ? 'border-rose-400/60 bg-rose-500/15 text-rose-200'
                        : 'border-white/[0.08] bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-black/25 p-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
                  Layer 1 · Live Composition
                </p>
                <div className="mt-3">
                  {scenarioTab === 'dashboard' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/5 px-3 py-2">
                        <span className="text-xs text-slate-400">Traffic Health</span>
                        <Badge variant="neon" dot dotColor="cyan">Stable</Badge>
                      </div>
                      <Progress value={78} variant="neon" size="sm" />
                    </div>
                  )}
                  {scenarioTab === 'security' && (
                    <div className="space-y-3">
                      <Alert variant="destructive" title="Threat Signature Detected">
                        Auto-isolation protocol ready.
                      </Alert>
                      <div className="flex justify-center">
                        <ThreatIndicator value={82} level="high" label="Escalated" />
                      </div>
                    </div>
                  )}
                  {scenarioTab === 'admin' && (
                    <div className="space-y-3">
                      <TerminalBlock
                        title="ops.sh"
                        language="bash"
                        code="pnpm deploy --filter=@siberui/react"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-black/20 p-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
                  Layer 2 · Component Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeScenario.components.map((componentName) => (
                    <Badge key={componentName} variant="outline">
                      {componentName}
                    </Badge>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  {activeScenario.summary}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
                <Link href={activeScenario.link} className="w-full sm:w-auto">
                  <Button variant="primary" onClick={() => play('click')} className="w-full sm:w-auto">View Full Example</Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    play('granted');
                    if (navigator?.clipboard?.writeText) {
                      navigator.clipboard.writeText(activeScenario.templateCode);
                    }
                    toast({
                      title: 'Starter Template Copied',
                      description: `${activeScenario.title} starter blueprint copied to clipboard.`,
                    });
                  }}
                >
                  Copy Blueprint
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-16 pb-16 sm:pb-20">
        <div className="mb-8 sm:mb-10 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <HelpCircle className="h-3.5 w-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl font-sans">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400">
            Everything you need to know about integrating Siber UI into your workflow.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card
            variant="default"
            className="p-4 sm:p-6 border-white/[0.08] bg-[#050811]"
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
                  generic libraries, Siber UI comes out-of-the-box with 45° chamfered cards,
                  zero-bleed signal borders, synthesized Web Audio oscillators, binary hex inspectors,
                  biometric scanners, kill switches, and radar progress meters.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is Siber UI compatible with Next.js App Router and Tailwind CSS v4?
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
                  Tooltips, Tabs, Kill Switches, Hex Viewers) are built on top of WAI-ARIA
                  compliant Radix UI primitives and semantic roles. Full keyboard navigation and
                  screen-reader compatibility are baked into every component.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I customize the neon accent colors?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Every component accepts signal themes such as `cyan`,
                  `violet`, `emerald`, `amber`, and `rose`. You can also
                  override any Tailwind CSS class using standard `className`
                  prop overrides powered by `tailwind-merge`.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 w-full border-t border-white/[0.08] py-8 bg-[#020409]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-between gap-4 md:flex-row text-xs font-mono text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse motion-reduce:animate-none shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="uppercase tracking-widest text-[10px] text-emerald-400 font-bold">
                sys.status: online
              </span>
            </div>
            <span className="hidden xs:inline text-white/10">|</span>
            <span>
              Designed &amp; built by{' '}
              <a
                href="https://siber.dev"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                @volkanozbek
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
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
