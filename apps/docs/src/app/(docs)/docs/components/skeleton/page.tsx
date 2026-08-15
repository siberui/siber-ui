import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonBadge,
  SkeletonCard,
  Badge,
  Card,
  CardContent,
  BorderBeam,
} from '@siberui/react';
import { Radio, Zap } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Primitive Shimmers', level: 2 },
  { id: 'hud-tactical-mode', text: 'Tactical HUD Mode & Target Reticles', level: 2 },
  { id: 'signal-color-themes', text: 'Signal & Semantic Color Presets', level: 2 },
  { id: 'frosted-glass-buffer', text: 'Frosted Cyber-Glass Telemetry Buffer', level: 2 },
  { id: 'operator-hud-card', text: 'Operator HUD Telemetry Card Mock', level: 2 },
  { id: 'animation-modes', text: 'Animation Modes (Shimmer, Pulse, Scan)', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function SkeletonDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Skeleton"
        description="High-tech visual buffer placeholders for async data feeds, featuring holographic HUD sweeps, semantic signal colors, and frosted glass backdrops."
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
  Skeleton, 
  SkeletonText, 
  SkeletonAvatar, 
  SkeletonBadge, 
  SkeletonCard 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Primitive Shimmers ── */}
      <ContentSection title="Basic Primitive Shimmers" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Construct placeholder layouts with atomic primitives: <code className="text-cyan-400">SkeletonAvatar</code>, <code className="text-cyan-400">SkeletonText</code>, and <code className="text-cyan-400">SkeletonBadge</code>.
          </p>

          <Playground
            code={`<div className="flex items-center gap-4 p-5 rounded-2xl bg-[#070b14] border border-white/[0.06] max-w-md w-full">
  <SkeletonAvatar size="lg" shape="squircle" variant="neon" />
  <div className="flex-1 space-y-2">
    <div className="flex items-center justify-between">
      <Skeleton className="h-4 w-32 rounded-md" variant="neon" />
      <SkeletonBadge size="sm" variant="neon" />
    </div>
    <Skeleton className="h-3 w-48 rounded-md" />
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06]">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#070b14] border border-white/[0.06] max-w-md w-full shadow-xl">
                <SkeletonAvatar size="lg" shape="squircle" variant="neon" />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-32 rounded-md" variant="neon" />
                    <SkeletonBadge size="sm" variant="neon" />
                  </div>
                  <Skeleton className="h-3 w-48 rounded-md" />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Mode & Target Reticles ── */}
      <ContentSection title="Tactical HUD Mode & Target Reticles" id="hud-tactical-mode">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Enable <code className="text-cyan-400">hud</code> for rounded corner brackets and <code className="text-cyan-400">target</code> to project an illuminated, rotating dotted target crosshair inside placeholder viewports.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
  {/* Tactical HUD with Target Reticle */}
  <div className="p-6 rounded-2xl bg-[#050811] border border-white/[0.06] space-y-4">
    <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider">HUD BRACKETS & TARGET RETICLE</span>
    <Skeleton className="h-32 w-full rounded-2xl" variant="neon" hud target />
    <SkeletonText lines={2} variant="neon" />
  </div>

  {/* CRT Scanline Raster with Target Scanner */}
  <div className="p-6 rounded-2xl bg-[#050811] border border-white/[0.06] space-y-4">
    <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider">CRT SCANLINE & RADAR LOCK</span>
    <Skeleton className="h-32 w-full rounded-2xl" variant="neon" scanline target />
    <SkeletonText lines={2} variant="neon" />
  </div>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <div className="p-6 rounded-2xl bg-[#050811] border border-white/[0.06] space-y-4 shadow-xl">
                  <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider">HUD BRACKETS & TARGET RETICLE</span>
                  <Skeleton className="h-32 w-full rounded-2xl" variant="neon" hud target />
                  <SkeletonText lines={2} variant="neon" />
                </div>

                <div className="p-6 rounded-2xl bg-[#050811] border border-white/[0.06] space-y-4 shadow-xl">
                  <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider">CRT SCANLINE & RADAR LOCK</span>
                  <Skeleton className="h-32 w-full rounded-2xl" variant="neon" scanline target />
                  <SkeletonText lines={2} variant="neon" />
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal & Semantic Color Presets ── */}
      <ContentSection title="Signal & Semantic Color Presets" id="signal-color-themes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Align loading state visual energy with target data types: <code className="text-cyan-400">neon / cyan</code>, <code className="text-violet-400">violet</code>, <code className="text-emerald-400">emerald</code>, <code className="text-amber-400">amber</code>, and <code className="text-rose-400">rose</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
  <SkeletonCard variant="neon" hasImage={false} lines={2} />
  <SkeletonCard variant="violet" hasImage={false} lines={2} />
  <SkeletonCard variant="emerald" hasImage={false} lines={2} />
  <SkeletonCard variant="amber" hasImage={false} lines={2} />
  <SkeletonCard variant="rose" hasImage={false} lines={2} />
  <SkeletonCard variant="default" hasImage={false} lines={2} />
</div>`}
          >
            <div className="p-6 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <SkeletonCard variant="neon" hasImage={false} lines={2} />
                <SkeletonCard variant="violet" hasImage={false} lines={2} />
                <SkeletonCard variant="emerald" hasImage={false} lines={2} />
                <SkeletonCard variant="amber" hasImage={false} lines={2} />
                <SkeletonCard variant="rose" hasImage={false} lines={2} />
                <SkeletonCard variant="default" hasImage={false} lines={2} />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Telemetry Buffer ── */}
      <ContentSection title="Frosted Cyber-Glass Telemetry Buffer" id="frosted-glass-buffer">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;glass&quot;</code> preset renders translucent acrylic placeholders that blend seamlessly over circuit textures and kinetic BorderBeam perimeter rings.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <Radio className="h-4 w-4 text-cyan-400 animate-pulse" />
        <span className="font-mono text-xs font-bold text-white">SYNCING TELEMETRY STREAM</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">AWAITING BUFFER</Badge>
    </div>
    <SkeletonCard variant="glass" hasImage={false} lines={3} />
  </div>
  <BorderBeam variant="neon" size={130} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Radio className="h-4 w-4 text-cyan-400 animate-pulse" />
                      <span className="font-mono text-xs font-bold text-white">SYNCING TELEMETRY STREAM</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">AWAITING BUFFER</Badge>
                  </div>
                  <SkeletonCard variant="glass" hasImage={false} lines={3} />
                </div>
                <BorderBeam variant="neon" size={130} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Operator HUD Telemetry Card Mock ── */}
      <ContentSection title="Operator HUD Telemetry Card Mock" id="operator-hud-card">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite card placeholders for cybersecurity agent consoles and quantum telemetry dashboards.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardContent className="p-6 space-y-5">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-cyan-400 animate-pulse" />
        <span className="font-mono text-xs font-bold text-slate-200">OPERATOR_IDENTITY_BUFFER</span>
      </div>
      <SkeletonBadge size="sm" variant="neon" />
    </div>

    <div className="flex items-center gap-4">
      <SkeletonAvatar size="xl" shape="squircle" variant="neon" />
      <div className="flex-1 space-y-2.5">
        <Skeleton className="h-4 w-3/4" variant="neon" />
        <Skeleton className="h-3 w-1/2" variant="neon" />
        <Skeleton className="h-2.5 w-full" />
      </div>
    </div>

    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
      <Skeleton className="h-2.5 w-full rounded" />
      <Skeleton className="h-2.5 w-4/5 rounded" />
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-cyan-400 animate-pulse" />
                      <span className="font-mono text-xs font-bold text-slate-200">OPERATOR_IDENTITY_BUFFER</span>
                    </div>
                    <SkeletonBadge size="sm" variant="neon" />
                  </div>

                  <div className="flex items-center gap-4">
                    <SkeletonAvatar size="xl" shape="squircle" variant="neon" />
                    <div className="flex-1 space-y-2.5">
                      <Skeleton className="h-4 w-3/4" variant="neon" />
                      <Skeleton className="h-3 w-1/2" variant="neon" />
                      <Skeleton className="h-2.5 w-full" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    <Skeleton className="h-2.5 w-full rounded" />
                    <Skeleton className="h-2.5 w-4/5 rounded" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Animation Modes ── */}
      <ContentSection title="Animation Modes (Shimmer, Pulse, Scan)" id="animation-modes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Choose between high-speed laser horizontal shimmer (<code className="text-cyan-400">animation=&quot;shimmer&quot;</code>), vertical CRT scan (<code className="text-cyan-400">animation=&quot;scan&quot;</code>), rhythmic ambient pulse (<code className="text-cyan-400">animation=&quot;pulse&quot;</code>), or static (<code className="text-cyan-400">animation=&quot;none&quot;</code>).
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  <div className="p-5 rounded-xl bg-[#070b14] border border-white/[0.06] space-y-3">
    <span className="font-mono text-xs text-slate-400 font-bold">SHIMMER (Horizontal)</span>
    <Skeleton className="h-16 w-full rounded-lg" animation="shimmer" variant="neon" />
  </div>

  <div className="p-5 rounded-xl bg-[#070b14] border border-white/[0.06] space-y-3">
    <span className="font-mono text-xs text-slate-400 font-bold">SCAN (Vertical)</span>
    <Skeleton className="h-16 w-full rounded-lg" animation="scan" variant="neon" />
  </div>

  <div className="p-5 rounded-xl bg-[#070b14] border border-white/[0.06] space-y-3">
    <span className="font-mono text-xs text-slate-400 font-bold">PULSE (Heartbeat)</span>
    <Skeleton className="h-16 w-full rounded-lg" animation="pulse" variant="neon" />
  </div>
</div>`}
          >
            <div className="p-6 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="p-5 rounded-xl bg-[#070b14] border border-white/[0.06] space-y-3">
                  <span className="font-mono text-xs text-slate-400 font-bold">SHIMMER (Horizontal)</span>
                  <Skeleton className="h-16 w-full rounded-lg" animation="shimmer" variant="neon" />
                </div>

                <div className="p-5 rounded-xl bg-[#070b14] border border-white/[0.06] space-y-3">
                  <span className="font-mono text-xs text-slate-400 font-bold">SCAN (Vertical)</span>
                  <Skeleton className="h-16 w-full rounded-lg" animation="scan" variant="neon" />
                </div>

                <div className="p-5 rounded-xl bg-[#070b14] border border-white/[0.06] space-y-3">
                  <span className="font-mono text-xs text-slate-400 font-bold">PULSE (Heartbeat)</span>
                  <Skeleton className="h-16 w-full rounded-lg" animation="pulse" variant="neon" />
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
              description: 'Color theme and surface styling preset.',
              type: '"default" | "neon" | "cyan" | "violet" | "emerald" | "amber" | "rose" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'shape',
              description: 'Border radius style for the container.',
              type: '"rounded" | "circle" | "squircle" | "square"',
              defaultValue: '"rounded"',
            },
            {
              property: 'animation',
              description: 'Kinetic light sweep mode.',
              type: '"shimmer" | "scan" | "pulse" | "none"',
              defaultValue: '"shimmer"',
            },
            {
              property: 'hud',
              description: 'Enables sci-fi corner bracket tech ticks.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'scanline',
              description: 'Overlays a holographic CRT scanline raster.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'target',
              description: 'Embeds an illuminated, rotating tactical target reticle and crosshair in the center.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'lines',
              description: 'For SkeletonText / SkeletonCard: number of paragraph lines.',
              type: 'number',
              defaultValue: '3',
            },
            {
              property: 'size',
              description: 'For SkeletonAvatar: "xs" | "sm" | "md" | "lg" | "xl" | "2xl".',
              type: 'string',
              defaultValue: '"md"',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Screen Reader Suppression:</strong> Skeletons automatically receive <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-hidden=&quot;true&quot;</code> so screen readers do not attempt to announce placeholder boxes.
          </li>
          <li>
            <strong>Live Regions:</strong> Wrap the parent loading region in <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-busy=&quot;true&quot;</code> with an <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-live</code> announcer informing the user that data is loading.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Shape Matching:</strong> Ensure the skeleton&apos;s dimensions and shapes closely match the expected content (e.g. <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">shape=&quot;squircle&quot;</code> for squircle avatars) to prevent visual layout shifts (CLS).
          </li>
          <li>
            <strong>Cohesive Theming:</strong> Use the matching signal variant (e.g. <code className="text-cyan-400">variant=&quot;rose&quot;</code> for threat cards, <code className="text-cyan-400">variant=&quot;glass&quot;</code> for frosted panels) to maintain UI continuity during loading.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
