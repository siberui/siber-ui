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
  ChamferCard,
  ChamferCardHeader,
  ChamferCardTitle,
  ChamferCardDescription,
  ChamferCardContent,
  ChamferCardFooter,
  Button,
  Badge,
  ThreatIndicator,
  CypherText,
} from '@siberui/react';
import { Shield } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & 360° Continuous Hairline Border', level: 2 },
  { id: 'hud-metadata', text: 'HUD Serial Tags, Status Pulse & Diagonal Notches', level: 2 },
  { id: 'cut-corners', text: 'Cut Corner Configurations (tl, tr, bl, br)', level: 2 },
  { id: 'cut-sizes', text: 'Cut Size Scales (sm, md, lg)', level: 2 },
  { id: 'interactive-laser', text: 'Interactive Hover Lift & Laser Shimmer', level: 2 },
  { id: 'cyber-composite', text: 'Tactical Defense Enclave Composite', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function ChamferCardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Chamfer Card"
        description="Futuristic chassis container featuring 45° beveled diagonal cut corners, 360° continuous hairline perimeter, HUD corner notch accents, and interactive laser sweep hover reflex."
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
  ChamferCard,
  ChamferCardHeader,
  ChamferCardTitle,
  ChamferCardDescription,
  ChamferCardContent,
  ChamferCardFooter,
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & 360° Continuous Hairline Border" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The dual-polygon nested clipping architecture ensures a crisp 1px hairline border travels continuously across all edges, including 45° diagonal chamfers, with corner HUD notch brackets (<code className="text-cyan-400">{'//'}</code>).
          </p>

          <Playground
            code={`<ChamferCard
  signal="cyan"
  glow
  tag="NODE.04 // SEC"
  statusDot="cyan"
  className="max-w-md w-full"
>
  <ChamferCardHeader>
    <ChamferCardTitle>NEURAL INTERFACE 01</ChamferCardTitle>
    <ChamferCardDescription>Sub-quantum telemetry buffer</ChamferCardDescription>
  </ChamferCardHeader>
  <ChamferCardContent>
    <p className="text-sm text-slate-300">
      Direct optical neural bridge active. Latency nominal at 0.42ms.
    </p>
  </ChamferCardContent>
  <ChamferCardFooter>
    <span className="text-xs font-mono text-cyan-400">STATUS: SYNCED</span>
    <Button size="sm" variant="primary">ACCESS NODE</Button>
  </ChamferCardFooter>
</ChamferCard>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <ChamferCard
                signal="cyan"
                glow
                tag="NODE.04 // SEC"
                statusDot="cyan"
                className="max-w-md w-full"
              >
                <ChamferCardHeader>
                  <ChamferCardTitle>NEURAL INTERFACE 01</ChamferCardTitle>
                  <ChamferCardDescription>Sub-quantum telemetry buffer</ChamferCardDescription>
                </ChamferCardHeader>
                <ChamferCardContent>
                  <p className="text-sm text-slate-300">
                    Direct optical neural bridge active. Latency nominal at 0.42ms.
                  </p>
                </ChamferCardContent>
                <ChamferCardFooter>
                  <span className="text-xs font-mono text-cyan-400">STATUS: SYNCED</span>
                  <Button size="sm" variant="primary">ACCESS NODE</Button>
                </ChamferCardFooter>
              </ChamferCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── HUD Metadata & Notches ── */}
      <ContentSection title="HUD Serial Tags, Status Pulse & Diagonal Notches" id="hud-metadata">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Equipped with tactical chassis instrumentation including <code className="text-cyan-400">tag</code>, <code className="text-cyan-400">statusDot</code>, <code className="text-cyan-400">hasTab</code>, and <code className="text-cyan-400">gridSubstrate</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  <ChamferCard
    tag="FIREWALL.PRIMARY"
    statusDot="green"
    signal="green"
    gridSubstrate
    glow
  >
    <ChamferCardHeader>
      <ChamferCardTitle className="text-emerald-400 text-sm">ENCLAVE SECURE</ChamferCardTitle>
      <ChamferCardDescription>Hardware isolated subsystem</ChamferCardDescription>
    </ChamferCardHeader>
    <ChamferCardContent>
      <span className="text-xs text-slate-300 font-mono">0 anomalous frame bursts detected</span>
    </ChamferCardContent>
  </ChamferCard>

  <ChamferCard
    hasTab
    tabLabel="LEVEL 5"
    tabSignal="violet"
    tag="QUANTUM.09"
    statusDot="violet"
    signal="violet"
    cornerBolts
    glow
  >
    <ChamferCardHeader>
      <ChamferCardTitle className="text-violet-400 text-sm">CORE PROCESSOR</ChamferCardTitle>
      <ChamferCardDescription>Sub-atomic qubit registers</ChamferCardDescription>
    </ChamferCardHeader>
    <ChamferCardContent>
      <span className="text-xs text-slate-300 font-mono">Coherence rate 99.98%</span>
    </ChamferCardContent>
  </ChamferCard>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <ChamferCard
                tag="FIREWALL.PRIMARY"
                statusDot="green"
                signal="green"
                gridSubstrate
                glow
              >
                <ChamferCardHeader>
                  <ChamferCardTitle className="text-emerald-400 text-sm">ENCLAVE SECURE</ChamferCardTitle>
                  <ChamferCardDescription>Hardware isolated subsystem</ChamferCardDescription>
                </ChamferCardHeader>
                <ChamferCardContent>
                  <span className="text-xs text-slate-300 font-mono">0 anomalous frame bursts detected</span>
                </ChamferCardContent>
              </ChamferCard>

              <ChamferCard
                hasTab
                tabLabel="LEVEL 5"
                tabSignal="violet"
                tag="QUANTUM.09"
                statusDot="violet"
                signal="violet"
                cornerBolts
                glow
              >
                <ChamferCardHeader>
                  <ChamferCardTitle className="text-violet-400 text-sm">CORE PROCESSOR</ChamferCardTitle>
                  <ChamferCardDescription>Sub-atomic qubit registers</ChamferCardDescription>
                </ChamferCardHeader>
                <ChamferCardContent>
                  <span className="text-xs text-slate-300 font-mono">Coherence rate 99.98%</span>
                </ChamferCardContent>
              </ChamferCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Cut Corners ── */}
      <ContentSection title="Cut Corner Configurations (tl, tr, bl, br)" id="cut-corners">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select exact corner cuts using the <code className="text-cyan-400">cutCorners</code> array.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  {/* Diagonal (tl, br) */}
  <ChamferCard cutCorners={['tl', 'br']} signal="cyan">
    <ChamferCardContent className="p-4 text-center font-mono text-xs text-cyan-400 font-semibold">
      DIAGONAL [tl, br]
    </ChamferCardContent>
  </ChamferCard>

  {/* All 4 corners */}
  <ChamferCard cutCorners={['tl', 'tr', 'bl', 'br']} signal="violet">
    <ChamferCardContent className="p-4 text-center font-mono text-xs text-violet-400 font-semibold">
      OCTAGONAL [all 4]
    </ChamferCardContent>
  </ChamferCard>

  {/* Single Corner (tr) */}
  <ChamferCard cutCorners={['tr']} signal="green">
    <ChamferCardContent className="p-4 text-center font-mono text-xs text-emerald-400 font-semibold">
      SINGLE CUT [tr]
    </ChamferCardContent>
  </ChamferCard>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <ChamferCard cutCorners={['tl', 'br']} signal="cyan">
                <ChamferCardContent className="p-6 text-center font-mono text-xs text-cyan-400 font-semibold">
                  DIAGONAL CUT [tl, br]
                </ChamferCardContent>
              </ChamferCard>

              <ChamferCard cutCorners={['tl', 'tr', 'bl', 'br']} signal="violet">
                <ChamferCardContent className="p-6 text-center font-mono text-xs text-violet-400 font-semibold">
                  OCTAGONAL [all 4 corners]
                </ChamferCardContent>
              </ChamferCard>

              <ChamferCard cutCorners={['tr']} signal="green">
                <ChamferCardContent className="p-6 text-center font-mono text-xs text-emerald-400 font-semibold">
                  SINGLE CUT [tr only]
                </ChamferCardContent>
              </ChamferCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Cut Sizes ── */}
      <ContentSection title="Cut Size Scales (sm, md, lg)" id="cut-sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Adjust chamfer depth via <code className="text-cyan-400">cutSize</code>: <code className="text-cyan-400">&quot;sm&quot; (10px)</code>, <code className="text-cyan-400">&quot;md&quot; (18px)</code>, or <code className="text-cyan-400">&quot;lg&quot; (26px)</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  <ChamferCard cutSize="sm" signal="cyan">
    <ChamferCardContent className="p-4 text-center font-mono text-xs text-slate-300">
      SM CUT (10px)
    </ChamferCardContent>
  </ChamferCard>

  <ChamferCard cutSize="md" signal="cyan">
    <ChamferCardContent className="p-4 text-center font-mono text-xs text-slate-300">
      MD CUT (18px)
    </ChamferCardContent>
  </ChamferCard>

  <ChamferCard cutSize="lg" signal="cyan">
    <ChamferCardContent className="p-4 text-center font-mono text-xs text-slate-300">
      LG CUT (26px)
    </ChamferCardContent>
  </ChamferCard>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <ChamferCard cutSize="sm" signal="cyan">
                <ChamferCardContent className="p-6 text-center font-mono text-xs text-slate-300">
                  SM CUT (10px)
                </ChamferCardContent>
              </ChamferCard>

              <ChamferCard cutSize="md" signal="cyan">
                <ChamferCardContent className="p-6 text-center font-mono text-xs text-slate-300">
                  MD CUT (18px)
                </ChamferCardContent>
              </ChamferCard>

              <ChamferCard cutSize="lg" signal="cyan">
                <ChamferCardContent className="p-6 text-center font-mono text-xs text-slate-300">
                  LG CUT (26px)
                </ChamferCardContent>
              </ChamferCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Interactive Laser Shimmer ── */}
      <ContentSection title="Interactive Hover Lift & Laser Shimmer" id="interactive-laser">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            With <code className="text-cyan-400">interactive</code> and <code className="text-cyan-400">laserSweep</code> enabled, hovering over the card triggers a smooth elevation lift and an angled laser light reflex across the border.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  <ChamferCard
    interactive
    laserSweep
    signal="cyan"
    glow
    tag="CLICKABLE // CARD_01"
    statusDot="cyan"
  >
    <ChamferCardHeader>
      <ChamferCardTitle>INTERACTIVE NODE</ChamferCardTitle>
      <ChamferCardDescription>Hover over me to see the laser sweep effect</ChamferCardDescription>
    </ChamferCardHeader>
    <ChamferCardContent>
      <p className="text-xs text-slate-400">Card elevates and reflects light on hover.</p>
    </ChamferCardContent>
  </ChamferCard>

  <ChamferCard
    interactive
    laserSweep
    signal="amber"
    glow
    tag="SECURITY // WARNING"
    statusDot="amber"
  >
    <ChamferCardHeader>
      <ChamferCardTitle className="text-amber-400">TELEMETRY WARNING</ChamferCardTitle>
      <ChamferCardDescription>Interactive amber chassis</ChamferCardDescription>
    </ChamferCardHeader>
    <ChamferCardContent>
      <p className="text-xs text-slate-400">Hover for laser reflex animation.</p>
    </ChamferCardContent>
  </ChamferCard>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <ChamferCard
                interactive
                laserSweep
                signal="cyan"
                glow
                tag="CLICKABLE // CARD_01"
                statusDot="cyan"
              >
                <ChamferCardHeader>
                  <ChamferCardTitle>INTERACTIVE NODE</ChamferCardTitle>
                  <ChamferCardDescription>Hover over me to see the laser sweep effect</ChamferCardDescription>
                </ChamferCardHeader>
                <ChamferCardContent>
                  <p className="text-xs text-slate-400">Card elevates and reflects light on hover.</p>
                </ChamferCardContent>
              </ChamferCard>

              <ChamferCard
                interactive
                laserSweep
                signal="amber"
                glow
                tag="SECURITY // WARNING"
                statusDot="amber"
              >
                <ChamferCardHeader>
                  <ChamferCardTitle className="text-amber-400">TELEMETRY WARNING</ChamferCardTitle>
                  <ChamferCardDescription>Interactive amber chassis</ChamferCardDescription>
                </ChamferCardHeader>
                <ChamferCardContent>
                  <p className="text-xs text-slate-400">Hover for laser reflex animation.</p>
                </ChamferCardContent>
              </ChamferCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical Defense Enclave Composite ── */}
      <ContentSection title="Tactical Defense Enclave Composite" id="cyber-composite">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission security card with embedded threat level gauges and cypher text headers.
          </p>

          <Playground
            code={`<ChamferCard
  hasTab
  tabLabel="THREAT MONITOR"
  tabSignal="rose"
  tag="SEC_OPS // NODE_7"
  statusDot="rose"
  cutCorners={['tl', 'br']}
  cornerBolts
  gridSubstrate
  signal="rose"
  glow
  className="max-w-md mx-auto"
>
  <ChamferCardHeader>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-rose-400" />
        <ChamferCardTitle className="text-rose-400">DEFCON 2 ALERT</ChamferCardTitle>
      </div>
      <Badge variant="destructive" size="sm">CRITICAL</Badge>
    </div>
    <ChamferCardDescription>
      <CypherText text="ACTIVE_INTRUSION_DETECTED" color="rose" glow />
    </ChamferCardDescription>
  </ChamferCardHeader>

  <ChamferCardContent className="flex flex-col items-center py-6 gap-4">
    <ThreatIndicator level="critical" value={92} label="INCURSION PROBABILITY" size="lg" />
  </ChamferCardContent>

  <ChamferCardFooter>
    <Button variant="outline" size="sm">ISOLATE POD</Button>
    <Button variant="danger" size="sm">ENGAGE LOCKDOWN</Button>
  </ChamferCardFooter>
</ChamferCard>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <ChamferCard
                hasTab
                tabLabel="THREAT MONITOR"
                tabSignal="rose"
                tag="SEC_OPS // NODE_7"
                statusDot="rose"
                cutCorners={['tl', 'br']}
                cornerBolts
                gridSubstrate
                signal="rose"
                glow
                className="max-w-md w-full"
              >
                <ChamferCardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-rose-400" />
                      <ChamferCardTitle className="text-rose-400">DEFCON 2 ALERT</ChamferCardTitle>
                    </div>
                    <Badge variant="destructive" size="sm">CRITICAL</Badge>
                  </div>
                  <ChamferCardDescription>
                    <CypherText text="ACTIVE_INTRUSION_DETECTED" color="rose" glow />
                  </ChamferCardDescription>
                </ChamferCardHeader>

                <ChamferCardContent className="flex flex-col items-center py-6 gap-4">
                  <ThreatIndicator level="critical" value={92} label="INCURSION PROBABILITY" size="lg" />
                </ChamferCardContent>

                <ChamferCardFooter>
                  <Button variant="outline" size="sm">ISOLATE POD</Button>
                  <Button variant="danger" size="sm">ENGAGE LOCKDOWN</Button>
                </ChamferCardFooter>
              </ChamferCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'cutCorners',
              description: 'Array specifying which corners receive 45° diagonal cuts.',
              type: 'Array<"tl" | "tr" | "bl" | "br">',
              defaultValue: '["tl", "br"]',
            },
            {
              property: 'cutSize',
              description: 'Chamfer depth scale or exact pixel number.',
              type: '"sm" | "md" | "lg" | number',
              defaultValue: '"md"',
            },
            {
              property: 'variant',
              description: 'Visual panel surface theme.',
              type: '"default" | "surface" | "glass" | "accent" | "terminal" | "ghost"',
              defaultValue: '"default"',
            },
            {
              property: 'signal',
              description: 'Signal highlight accent color.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose" | "none"',
              defaultValue: '"none"',
            },
            {
              property: 'glow',
              description: 'Applies matching neon glow aura to the perimeter.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'tag',
              description: 'Micro HUD serial index or tag text in the top-left area.',
              type: 'ReactNode',
            },
            {
              property: 'statusDot',
              description: 'Pulsing status indicator dot color in top header bar.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose"',
            },
            {
              property: 'cornerNotches',
              description: 'Renders 45° HUD "//" diagonal notches along cut corners.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'hasTab',
              description: 'Appends an angled technical identification tab in the top-right.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'tabLabel',
              description: 'Text or label inside the technical tab.',
              type: 'ReactNode',
            },
            {
              property: 'tabSignal',
              description: 'Technical tab signal color.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose"',
              defaultValue: '"cyan"',
            },
            {
              property: 'cornerBolts',
              description: 'Renders hardware rivet ticks on non-cut corners.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'gridSubstrate',
              description: 'Applies technical micro-dot grid pattern to the background.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'laserSweep',
              description: 'Plays angled laser sweep reflex shimmer on hover.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'interactive',
              description: 'Enables slight elevation lift and pointer cursor on hover.',
              type: 'boolean',
              defaultValue: 'false',
            },
          ]}
        />
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Consistent Geometry:</strong> Establishing <code className="text-cyan-400">[&apos;tl&apos;, &apos;br&apos;]</code> as standard across a dashboard reinforces visual identity.
          </li>
          <li>
            <strong>Content Padding:</strong> Use subcomponents like <code className="text-cyan-400">ChamferCardHeader</code> and <code className="text-cyan-400">ChamferCardContent</code> to keep content comfortably inside the cut boundaries.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
