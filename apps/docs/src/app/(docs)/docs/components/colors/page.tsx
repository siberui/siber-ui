import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  surface,
  signal,
  text,
  status,
  glass,
  glow,
  motion,
} from '@siberui/react';
import { ShieldCheck } from 'lucide-react';
import { ColorPaletteBrowser } from './ColorPaletteBrowser';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import & Usage', level: 2 },
  { id: 'color-palette', text: 'Color Palette Browser', level: 2 },
  { id: 'signal-colors', text: 'Signal Colors', level: 2 },
  { id: 'surfaces', text: 'Surface Elevation System', level: 2 },
  { id: 'typography', text: 'Text & Foreground Tokens', level: 2 },
  { id: 'status-semantic', text: 'Status & Semantic Roles', level: 2 },
  { id: 'glass-glow', text: 'Glassmorphism & Glow Tokens', level: 2 },
  { id: 'motion-tokens', text: 'Motion & Easing Presets', level: 2 },
  { id: 'utility-cn', text: 'Utility Helper (cn)', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'wcag-accessibility', text: 'WCAG 2.2 Compliance', level: 2 },
];

export default function ColorsDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Colors & Design Tokens"
        description="A structured, semantic color system for the SiberUI design language. Organised into 50-950 color scale objects, Surfaces, Signal colors, Text, Borders, Status, Glassmorphism, Glow tokens, and Motion presets."
        status="Stable"
      />

      {/* Installation */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* Import & Usage */}
      <ContentSection title="Import & Usage" id="import">
        <p className="mb-4 text-sm text-slate-400">
          SiberUI exports individual color scales directly (e.g., <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1 py-0.5 rounded">red[500]</code>, <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1 py-0.5 rounded">cyan[500]</code>, <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1 py-0.5 rounded">blue[600]</code>) alongside semantic tokens:
        </p>
        <CodeBlock
          code={`import { red, blue, cyan, slate, colors, surface, signal } from '@siberui/react';

// 1. Direct Shade Scale Usage
const dangerButtonBg = red[500];   // '#ef4444'
const primaryAccent  = cyan[500];  // '#00d9e8'
const secondaryBlue  = blue[600];  // '#2563eb'
const surfaceDark    = slate[950]; // '#05070a'

// 2. Semantic Token Usage
<div style={{ background: surface.level1, color: signal.cyan }}>
  Cyber Core
</div>`}
        />
      </ContentSection>

      {/* Interactive Color Palette Browser */}
      <ContentSection title="Color Palette Browser" id="color-palette">
        <p className="mb-4 text-sm text-slate-400">
          Select a color family and copy any shade scale (50 - 950). Includes real-time WCAG 2.2 contrast ratio calculations against low-light background (<code className="text-cyan-400 font-mono text-xs">#05070a</code>).
        </p>

        <ColorPaletteBrowser />
      </ContentSection>

      {/* Signal Colors */}
      <ContentSection title="Signal Colors" id="signal-colors">
        <p className="mb-6 text-sm text-slate-400">
          Signal colors carry semantic meaning across SiberUI interfaces. They guide the user&apos;s focus during high-density operations and critical events.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cyan */}
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,217,232,0.2)]">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="h-10 w-10 rounded-lg shadow-inner"
                style={{ backgroundColor: signal.cyan }}
              />
              <div>
                <h4 className="font-semibold text-slate-100 flex items-center gap-1.5">
                  Cyan <span className="text-xs font-mono text-cyan-400">Primary</span>
                </h4>
                <span className="font-mono text-xs text-slate-400">{signal.cyan}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-2">Primary interaction, key highlights, selections.</p>
            <code className="text-[11px] font-mono text-cyan-300 bg-cyan-950/50 px-2 py-1 rounded block">
              signal.cyan · cyan[500] · var(--sb-signal-cyan)
            </code>
          </div>

          {/* Violet */}
          <div className="rounded-xl border border-violet-500/30 bg-violet-950/20 p-4 transition-all hover:border-violet-400 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="h-10 w-10 rounded-lg shadow-inner"
                style={{ backgroundColor: signal.violet }}
              />
              <div>
                <h4 className="font-semibold text-slate-100 flex items-center gap-1.5">
                  Violet <span className="text-xs font-mono text-violet-400">System</span>
                </h4>
                <span className="font-mono text-xs text-slate-400">{signal.violet}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-2">Special operations, AI prompts, telemetry mode.</p>
            <code className="text-[11px] font-mono text-violet-300 bg-violet-950/50 px-2 py-1 rounded block">
              signal.violet · violet[400] · var(--sb-signal-purple)
            </code>
          </div>

          {/* Green */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 transition-all hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="h-10 w-10 rounded-lg shadow-inner"
                style={{ backgroundColor: signal.green }}
              />
              <div>
                <h4 className="font-semibold text-slate-100 flex items-center gap-1.5">
                  Green <span className="text-xs font-mono text-emerald-400">Success</span>
                </h4>
                <span className="font-mono text-xs text-slate-400">{signal.green}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-2">Operational success, online status, safe states.</p>
            <code className="text-[11px] font-mono text-emerald-300 bg-emerald-950/50 px-2 py-1 rounded block">
              signal.green · green[400] · var(--sb-signal-green)
            </code>
          </div>

          {/* Amber */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 transition-all hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,165,36,0.2)]">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="h-10 w-10 rounded-lg shadow-inner"
                style={{ backgroundColor: signal.amber }}
              />
              <div>
                <h4 className="font-semibold text-slate-100 flex items-center gap-1.5">
                  Amber <span className="text-xs font-mono text-amber-400">Warning</span>
                </h4>
                <span className="font-mono text-xs text-slate-400">{signal.amber}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-2">Warning alerts, pending actions, elevated risk.</p>
            <code className="text-[11px] font-mono text-amber-300 bg-amber-950/50 px-2 py-1 rounded block">
              signal.amber · amber[500] · var(--sb-signal-amber)
            </code>
          </div>

          {/* Rose */}
          <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 transition-all hover:border-rose-400 hover:shadow-[0_0_20px_rgba(251,90,126,0.2)]">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="h-10 w-10 rounded-lg shadow-inner"
                style={{ backgroundColor: signal.rose }}
              />
              <div>
                <h4 className="font-semibold text-slate-100 flex items-center gap-1.5">
                  Rose <span className="text-xs font-mono text-rose-400">Critical</span>
                </h4>
                <span className="font-mono text-xs text-slate-400">{signal.rose}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-2">Critical threats, destructive actions, errors.</p>
            <code className="text-[11px] font-mono text-rose-300 bg-rose-950/50 px-2 py-1 rounded block">
              signal.rose · rose[500] · var(--sb-signal-rose)
            </code>
          </div>
        </div>
      </ContentSection>

      {/* Surface Elevation System */}
      <ContentSection title="Surface Elevation System" id="surfaces">
        <p className="mb-6 text-sm text-slate-400">
          SiberUI uses a multi-tiered surface hierarchy (near-black rather than pure black) to establish depth and spatial awareness in low-light cyber displays.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          <div
            className="rounded-xl border border-white/10 p-4 flex flex-col justify-between h-36"
            style={{ backgroundColor: surface.background }}
          >
            <div>
              <span className="text-xs font-mono text-slate-400">Level 0</span>
              <h4 className="font-semibold text-slate-100 text-sm">Background</h4>
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 block">{surface.background}</span>
              <span className="text-[10px] text-slate-500">App Void</span>
            </div>
          </div>

          <div
            className="rounded-xl border border-white/10 p-4 flex flex-col justify-between h-36"
            style={{ backgroundColor: surface.level1 }}
          >
            <div>
              <span className="text-xs font-mono text-slate-400">Level 1</span>
              <h4 className="font-semibold text-slate-100 text-sm">Surface</h4>
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 block">{surface.level1}</span>
              <span className="text-[10px] text-slate-500">Cards & Panels</span>
            </div>
          </div>

          <div
            className="rounded-xl border border-white/10 p-4 flex flex-col justify-between h-36"
            style={{ backgroundColor: surface.level2 }}
          >
            <div>
              <span className="text-xs font-mono text-slate-400">Level 2</span>
              <h4 className="font-semibold text-slate-100 text-sm">Elevated</h4>
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 block">{surface.level2}</span>
              <span className="text-[10px] text-slate-500">Hover / Selected</span>
            </div>
          </div>

          <div
            className="rounded-xl border border-white/10 p-4 flex flex-col justify-between h-36"
            style={{ backgroundColor: surface.level3 }}
          >
            <div>
              <span className="text-xs font-mono text-slate-400">Level 3</span>
              <h4 className="font-semibold text-slate-100 text-sm">Overlay</h4>
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 block">{surface.level3}</span>
              <span className="text-[10px] text-slate-500">Popovers & Menus</span>
            </div>
          </div>

          <div
            className="rounded-xl border border-white/10 p-4 flex flex-col justify-between h-36"
            style={{ backgroundColor: surface.level4 }}
          >
            <div>
              <span className="text-xs font-mono text-slate-400">Level 4</span>
              <h4 className="font-semibold text-slate-100 text-sm">Modal</h4>
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 block">{surface.level4}</span>
              <span className="text-[10px] text-slate-500">Dialogs & Command</span>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Text & Foreground Tokens */}
      <ContentSection title="Text & Foreground Tokens" id="typography">
        <p className="mb-4 text-sm text-slate-400">
          Standardized text opacity scale to ensure strict contrast compliance on dark surfaces.
        </p>
        <Playground code={`<div className="flex flex-col gap-3 p-4 bg-[#080b10] rounded-xl border border-white/10">
  <p style={{ color: text.primary }} className="text-lg font-bold">
    Primary Text (Headings & Key Metrics) — {text.primary}
  </p>
  <p style={{ color: text.secondary }} className="text-base">
    Secondary Text (Body copy & descriptions) — {text.secondary}
  </p>
  <p style={{ color: text.muted }} className="text-sm">
    Muted Text (Labels & metadata) — {text.muted}
  </p>
  <p style={{ color: text.disabled }} className="text-xs">
    Disabled Text (Inactive items) — {text.disabled}
  </p>
</div>`}>
          <div className="flex flex-col gap-3 p-4 bg-[#080b10] rounded-xl border border-white/10 w-full text-left">
            <p style={{ color: text.primary }} className="text-lg font-bold">
              Primary Text (Headings & Key Metrics) — <span className="font-mono text-xs opacity-70">{text.primary}</span>
            </p>
            <p style={{ color: text.secondary }} className="text-base">
              Secondary Text (Body copy & descriptions) — <span className="font-mono text-xs opacity-70">{text.secondary}</span>
            </p>
            <p style={{ color: text.muted }} className="text-sm">
              Muted Text (Labels & metadata) — <span className="font-mono text-xs opacity-70">{text.muted}</span>
            </p>
            <p style={{ color: text.disabled }} className="text-xs">
              Disabled Text (Inactive items) — <span className="font-mono text-xs opacity-70">{text.disabled}</span>
            </p>
          </div>
        </Playground>
      </ContentSection>

      {/* Status & Semantic Roles */}
      <ContentSection title="Status & Semantic Roles" id="status-semantic">
        <p className="mb-4 text-sm text-slate-400">
          Pre-paired solid colors and muted backgrounds for status badges, alert banners, and telemetry feeds.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 rounded-lg border border-emerald-500/30" style={{ backgroundColor: status.successMuted }}>
            <span className="text-xs font-mono font-bold block text-emerald-400">SUCCESS / OPERATIONAL</span>
            <span className="text-xs text-emerald-200/80">Foreground: {status.success}</span>
          </div>

          <div className="p-3 rounded-lg border border-amber-500/30" style={{ backgroundColor: status.warningMuted }}>
            <span className="text-xs font-mono font-bold block text-amber-400">WARNING / ELEVATED</span>
            <span className="text-xs text-amber-200/80">Foreground: {status.warning}</span>
          </div>

          <div className="p-3 rounded-lg border border-rose-500/30" style={{ backgroundColor: status.errorMuted }}>
            <span className="text-xs font-mono font-bold block text-rose-400">CRITICAL / THREAT</span>
            <span className="text-xs text-rose-200/80">Foreground: {status.error}</span>
          </div>

          <div className="p-3 rounded-lg border border-cyan-500/30" style={{ backgroundColor: status.infoMuted }}>
            <span className="text-xs font-mono font-bold block text-cyan-400">INFO / SCANNING</span>
            <span className="text-xs text-cyan-200/80">Foreground: {status.info}</span>
          </div>
        </div>
      </ContentSection>

      {/* Glassmorphism & Glow Tokens */}
      <ContentSection title="Glassmorphism & Glow Tokens" id="glass-glow">
        <p className="mb-4 text-sm text-slate-400">
          Controlled glow shadows and backdrop blur opacity presets designed for high-impact cards and command modals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-slate-200">Cyberpunk Glow Shadows</h4>
            <div className="grid grid-cols-2 gap-3">
              <div
                className="p-4 rounded-xl border border-cyan-500/30 bg-[#080b10] text-center"
                style={{ boxShadow: glow.cyan }}
              >
                <span className="text-xs font-mono text-cyan-300">glow.cyan</span>
              </div>
              <div
                className="p-4 rounded-xl border border-violet-500/30 bg-[#080b10] text-center"
                style={{ boxShadow: glow.purple }}
              >
                <span className="text-xs font-mono text-violet-300">glow.purple</span>
              </div>
              <div
                className="p-4 rounded-xl border border-emerald-500/30 bg-[#080b10] text-center"
                style={{ boxShadow: glow.green }}
              >
                <span className="text-xs font-mono text-emerald-300">glow.green</span>
              </div>
              <div
                className="p-4 rounded-xl border border-rose-500/30 bg-[#080b10] text-center"
                style={{ boxShadow: glow.rose }}
              >
                <span className="text-xs font-mono text-rose-300">glow.rose</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-slate-200">Glassmorphism Overlay Presets</h4>
            <div className="grid grid-cols-2 gap-3">
              <div
                className="p-4 rounded-xl border border-white/10 backdrop-blur-md text-center"
                style={{ backgroundColor: glass.surface }}
              >
                <span className="text-xs font-mono text-slate-300">glass.surface</span>
              </div>
              <div
                className="p-4 rounded-xl border border-white/10 backdrop-blur-md text-center"
                style={{ backgroundColor: glass.medium }}
              >
                <span className="text-xs font-mono text-slate-300">glass.medium</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Motion & Easing Presets */}
      <ContentSection title="Motion & Easing Presets" id="motion-tokens">
        <p className="mb-4 text-sm text-slate-400">
          Standardized duration and bezier curve presets for ultra-responsive UI micro-animations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border-hairline bg-[#080b10]">
            <h4 className="text-sm font-semibold text-slate-200 mb-2">Durations (<code className="text-cyan-400">motion.duration</code>)</h4>
            <ul className="space-y-1 text-xs font-mono text-slate-400">
              <li>instant: <span className="text-emerald-400">{motion.duration.instant}</span> (hover states, quick feedback)</li>
              <li>fast: <span className="text-emerald-400">{motion.duration.fast}</span> (dropdowns, tooltips)</li>
              <li>normal: <span className="text-emerald-400">{motion.duration.normal}</span> (modals, sheet drawers)</li>
              <li>slow: <span className="text-emerald-400">{motion.duration.slow}</span> (page transitions, expandables)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border-hairline bg-[#080b10]">
            <h4 className="text-sm font-semibold text-slate-200 mb-2">Easings (<code className="text-cyan-400">motion.easing</code>)</h4>
            <ul className="space-y-1 text-xs font-mono text-slate-400">
              <li>out: <span className="text-cyan-300">{motion.easing.out}</span></li>
              <li>inOut: <span className="text-cyan-300">{motion.easing.inOut}</span></li>
              <li>emphasized: <span className="text-cyan-300">{motion.easing.emphasized}</span></li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Utility Helper (cn) */}
      <ContentSection title="Utility Helper (cn)" id="utility-cn">
        <p className="mb-4 text-sm text-slate-400">
          In addition to design tokens, <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1 py-0.5 rounded">@siberui/react</code> exports the <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1 py-0.5 rounded">cn</code> utility for easy conditional class construction.
        </p>
        <CodeBlock
          code={`import { cn } from '@siberui/react';

// Merge classes safely without conflicts
const className = cn(
  'px-4 py-2 rounded-md bg-surface-1 text-fg-muted transition-colors',
  isActive && 'bg-signal-cyan/10 text-signal-cyan border-l-2 border-signal-cyan',
  customClassName
);`}
        />
      </ContentSection>

      {/* API Reference */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'red, blue, cyan, violet, green, amber, rose, slate, zinc, emerald',
              description: 'Individual 50-950 shade scale objects exported directly for convenient indexing (e.g., red[500], blue[600]).',
              type: 'ColorShadeScale',
            },
            {
              property: 'colorPalette',
              description: 'Combined mapping object of all color shade scales.',
              type: 'Record<string, ColorShadeScale>',
            },
            {
              property: 'colors',
              description: 'Root color tokens object containing surface, signal, text, border, status, glass, glow, motion, and palette.',
              type: 'SiberColors',
            },
            {
              property: 'surface',
              description: 'Surface elevation object (background, level1, level2, level3, level4).',
              type: 'Record<"background" | "level1" | "level2" | "level3" | "level4", string>',
            },
            {
              property: 'signal',
              description: 'Core semantic signal accents (cyan, violet, green, amber, rose).',
              type: 'Record<"cyan" | "violet" | "green" | "amber" | "rose", string>',
            },
            {
              property: 'text',
              description: 'Foreground contrast hierarchy tokens (primary, secondary, muted, disabled, inverted).',
              type: 'Record<"primary" | "secondary" | "muted" | "disabled" | "inverted", string>',
            },
            {
              property: 'border',
              description: 'Border opacity scale (default, strong, accent).',
              type: 'Record<"default" | "strong" | "accent", string>',
            },
            {
              property: 'status',
              description: 'Paired status colors for success, warning, error, info and their muted background variants.',
              type: 'Record<string, string>',
            },
            {
              property: 'cn',
              description: 'Classname utility combining clsx and tailwind-merge.',
              type: '(...inputs: ClassValue[]) => string',
            },
          ]}
        />
      </ContentSection>

      {/* WCAG 2.2 Compliance */}
      <ContentSection title="WCAG 2.2 Compliance" id="wcag-accessibility">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/15 p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">WCAG 2.2 Level AA / AAA Compliant Design System</h3>
              <p className="text-xs text-slate-400">Built to strictly satisfy WCAG 2.2 contrast ratio and keyboard navigation requirements.</p>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm">
            <li>
              <strong>Minimum 4.5:1 Contrast Ratio (WCAG 2.2 AA):</strong> All normal body text and secondary labels paired with surface levels satisfy or exceed 4.5:1 contrast ratio.
            </li>
            <li>
              <strong>Enhanced 7:1 Contrast Ratio (WCAG 2.2 AAA):</strong> High-emphasis text and metric displays (using <code className="text-cyan-300 font-mono">text.primary</code> or <code className="text-cyan-300 font-mono">cyan[500]</code> on dark surfaces) reach up to 12.4:1 contrast ratio.
            </li>
            <li>
              <strong>Keyboard Focus & Accessible Controls (WCAG 2.4.13):</strong> Interactive palette swatches include explicit <code className="text-cyan-400 font-mono">aria-label</code> values, non-color visual indicators, and visible focus rings.
            </li>
          </ul>
        </div>
      </ContentSection>
    </ComponentPage>
  );
}
