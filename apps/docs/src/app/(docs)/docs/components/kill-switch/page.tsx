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
  KillSwitch,
  ChamferCard,
  ChamferCardHeader,
  ChamferCardTitle,
  ChamferCardDescription,
  ChamferCardContent,
  ChamferCardFooter,
  Badge,
  Button,
  CypherText,
  useCyberAudio,
} from '@siberui/react';
import { AlertTriangle } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Two-Stage Safety Interlock', level: 2 },
  { id: 'hazard-themes', text: 'Industrial Hazard Chevron Themes (Amber, Rose, Cyan)', level: 2 },
  { id: 'sizes', text: 'Scale Dimensions (sm, md, lg)', level: 2 },
  { id: 'tactical-reactor', text: 'Mission-Critical Reactor Overdrive Console', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility & Fail-Safe Mechanics', level: 2 },
];

export default function KillSwitchDocsPage() {
  const { play } = useCyberAudio({ volume: 0.3 });
  const [isReactorArmed, setIsReactorArmed] = React.useState(false);
  const [isCoverOpen, setIsCoverOpen] = React.useState(false);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Kill Switch"
        description="Military-grade two-stage interlock toggle switch featuring a 3D translucent safety flip-cover guard, illuminated mechanical lever, and industrial hazard chevron borders."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { KillSwitch } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Two-Stage Safety Interlock" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Requires two intentional steps to activate: 1) Lift the protective flip-cover guard, 2) Flip the heavy toggle lever.
          </p>

          <Playground
            code={`<KillSwitch
  label="PRIMARY POWER OVERRIDE"
  hazard="amber"
  onArmChange={(armed) => console.log('Kill switch state:', armed)}
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <KillSwitch
                label="PRIMARY POWER OVERRIDE"
                hazard="amber"
                onArmChange={(armed) => console.log('Kill switch state:', armed)}
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Hazard Themes ── */}
      <ContentSection title="Industrial Hazard Chevron Themes (Amber, Rose, Cyan)" id="hazard-themes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Assign visual hazard warning stripes via <code className="text-cyan-400">hazard</code>: <code className="text-amber-400">amber</code> (Warning), <code className="text-rose-400">rose</code> (Critical Emergency), <code className="text-cyan-400">cyan</code> (Power Grid), or <code className="text-slate-400">neutral</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
  <KillSwitch hazard="amber" label="WARNING // CAUTION" />
  <KillSwitch hazard="rose" label="CRITICAL EMERGENCY" />
  <KillSwitch hazard="cyan" label="GRID OVERCLOCK" />
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <KillSwitch hazard="amber" label="WARNING // CAUTION" />
              <KillSwitch hazard="rose" label="CRITICAL EMERGENCY" />
              <KillSwitch hazard="cyan" label="GRID OVERCLOCK" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Scales ── */}
      <ContentSection title="Scale Dimensions (sm, md, lg)" id="sizes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select an appropriate scale via <code className="text-cyan-400">size</code>: <code className="text-cyan-400">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code>.
          </p>

          <Playground
            code={`<div className="flex flex-wrap items-center justify-center gap-8 w-full">
  <KillSwitch size="sm" hazard="cyan" label="SM SWITCH" />
  <KillSwitch size="md" hazard="amber" label="MD SWITCH" />
  <KillSwitch size="lg" hazard="rose" label="LG EMERGENCY" />
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-8 p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <KillSwitch size="sm" hazard="cyan" label="SM SWITCH" />
              <KillSwitch size="md" hazard="amber" label="MD SWITCH" />
              <KillSwitch size="lg" hazard="rose" label="LG EMERGENCY" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical Reactor ── */}
      <ContentSection title="Mission-Critical Reactor Overdrive Console" id="tactical-reactor">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission terminal with controlled safety switch interlocks.
          </p>

          <Playground
            code={`<ChamferCard
  signal={isReactorArmed ? 'rose' : isCoverOpen ? 'amber' : 'cyan'}
  glow
  tag="REACTOR_01 // SAFETY_INTERLOCK"
  statusDot={isReactorArmed ? 'rose' : 'green'}
  className="max-w-md mx-auto w-full"
>
  <ChamferCardHeader>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AlertTriangle className={isReactorArmed ? 'h-4 w-4 text-rose-400 animate-pulse' : 'h-4 w-4 text-cyan-400'} />
        <ChamferCardTitle>CORE VENT DISCHARGE</ChamferCardTitle>
      </div>
      <Badge variant={isReactorArmed ? 'destructive' : 'glass'} dot dotColor={isReactorArmed ? 'rose' : 'cyan'}>
        {isReactorArmed ? 'ARMED // LIVE' : 'SAFETY_LOCKED'}
      </Badge>
    </div>
    <ChamferCardDescription>
      {isReactorArmed
        ? 'WARNING: Superheated plasma ejection in progress.'
        : 'Lift protective guard and flip switch to initiate emergency venting.'}
    </ChamferCardDescription>
  </ChamferCardHeader>

  <ChamferCardContent className="flex flex-col items-center justify-center py-6">
    <KillSwitch
      size="lg"
      hazard="rose"
      label="CORE PURGE OVERRIDE"
      isArmed={isReactorArmed}
      isCoverOpen={isCoverOpen}
      onCoverOpenChange={setIsCoverOpen}
      onArmChange={setIsReactorArmed}
    />
  </ChamferCardContent>

  <ChamferCardFooter className="flex items-center justify-between">
    <span className="text-xs font-mono text-slate-400">
      {isReactorArmed ? <CypherText text="REACTOR_PURGE_SEQUENCE_RUNNING" trigger="mount" /> : 'ESC KEY TO DISARM'}
    </span>
    {isReactorArmed && (
      <Button
        variant="danger"
        size="sm"
        onClick={() => {
          setIsReactorArmed(false);
          setIsCoverOpen(false);
        }}
      >
        EMERGENCY ABORT
      </Button>
    )}
  </ChamferCardFooter>
</ChamferCard>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <ChamferCard
                signal={isReactorArmed ? 'rose' : isCoverOpen ? 'amber' : 'cyan'}
                glow
                tag="REACTOR_01 // SAFETY_INTERLOCK"
                statusDot={isReactorArmed ? 'rose' : 'green'}
                className="max-w-md w-full"
              >
                <ChamferCardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={isReactorArmed ? 'h-4 w-4 text-rose-400 animate-pulse' : 'h-4 w-4 text-cyan-400'} />
                      <ChamferCardTitle>CORE VENT DISCHARGE</ChamferCardTitle>
                    </div>
                    <Badge variant={isReactorArmed ? 'destructive' : 'glass'} dot dotColor={isReactorArmed ? 'rose' : 'cyan'}>
                      {isReactorArmed ? 'ARMED // LIVE' : 'SAFETY_LOCKED'}
                    </Badge>
                  </div>
                  <ChamferCardDescription>
                    {isReactorArmed
                      ? 'WARNING: Superheated plasma ejection in progress.'
                      : 'Lift protective guard and flip switch to initiate emergency venting.'}
                  </ChamferCardDescription>
                </ChamferCardHeader>

                <ChamferCardContent className="flex flex-col items-center justify-center py-6">
                  <KillSwitch
                    size="lg"
                    hazard="rose"
                    label="CORE PURGE OVERRIDE"
                    isArmed={isReactorArmed}
                    isCoverOpen={isCoverOpen}
                    onCoverOpenChange={(open) => {
                      play(open ? 'blip' : 'click');
                      setIsCoverOpen(open);
                    }}
                    onArmChange={(armed) => {
                      play(armed ? 'alarm' : 'arm');
                      setIsReactorArmed(armed);
                    }}
                  />
                </ChamferCardContent>

                <ChamferCardFooter className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {isReactorArmed ? <CypherText text="REACTOR_PURGE_SEQUENCE_RUNNING" trigger="mount" /> : 'ESC KEY TO DISARM'}
                  </span>
                  {isReactorArmed && (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        play('denied');
                        setIsReactorArmed(false);
                        setIsCoverOpen(false);
                      }}
                    >
                      EMERGENCY ABORT
                    </Button>
                  )}
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
              property: 'isArmed',
              description: 'Controlled armed toggle switch state.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'isCoverOpen',
              description: 'Controlled protective flip-cover guard position.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'hazard',
              description: 'Hazard chevron stripe accent color.',
              type: '"amber" | "rose" | "cyan" | "neutral"',
              defaultValue: '"amber"',
            },
            {
              property: 'size',
              description: 'Scale dimension tier.',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
            },
            {
              property: 'label',
              description: 'Text label displayed beneath the switch casing.',
              type: 'string',
              defaultValue: '"KILL SWITCH"',
            },
            {
              property: 'disabled',
              description: 'Disables all user interaction.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'onArmChange',
              description: 'Callback fired when armed state transitions.',
              type: '(armed: boolean) => void',
            },
            {
              property: 'onCoverOpenChange',
              description: 'Callback fired when cover opens or closes.',
              type: '(open: boolean) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility & Fail-Safe Mechanics" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Emergency Escape Key Fail-Safe:</strong> Pressing <code className="text-cyan-400 font-mono text-xs">Escape</code> immediately snaps the cover shut and disarms the switch.
          </li>
          <li>
            <strong>ARIA Switch Role:</strong> Implements <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;switch&quot;</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-checked</code>.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
