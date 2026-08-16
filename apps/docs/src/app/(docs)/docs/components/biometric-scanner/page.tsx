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
  BiometricScanner,
  ChamferCard,
  ChamferCardHeader,
  ChamferCardTitle,
  ChamferCardDescription,
  ChamferCardContent,
  ChamferCardFooter,
  Badge,
} from '@siberui/react';
import { ShieldCheck } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Optical Laser Scanner', level: 2 },
  { id: 'biometric-modes', text: 'Sensor Modes (Fingerprint, Retina, Facial, DNA)', level: 2 },
  { id: 'interaction-types', text: 'Interaction Mechanics (Click vs Hold-to-Scan)', level: 2 },
  { id: 'security-terminal', text: 'Composite Level-5 Security Checkpoint', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function BiometricScannerDocsPage() {
  const [authStatus, setAuthStatus] = React.useState<string>('WAITING_FOR_BIOMETRIC');

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Biometric Scanner"
        description="Interactive biometric authentication sensor featuring a continuous optical laser sweep beam, radial progress telemetry, feature nodal locks, and fingerprint, retina, facial, or DNA scan modes."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { BiometricScanner } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Optical Laser Scanner" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Click-to-trigger optical biometric reader with continuous laser hairline beam traversal and telemetry readout.
          </p>

          <Playground
            code={`<BiometricScanner
  mode="fingerprint"
  label="PRIMARY BIOMETRIC SENSOR"
  signal="cyan"
  onScanComplete={(success) => console.log('Scan result:', success)}
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <BiometricScanner
                mode="fingerprint"
                label="PRIMARY BIOMETRIC SENSOR"
                signal="cyan"
                onScanComplete={(success) => console.log('Scan result:', success)}
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Biometric Modes ── */}
      <ContentSection title="Sensor Modes (Fingerprint, Retina, Facial, DNA)" id="biometric-modes">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select one of 4 dedicated biometric authentication vectors via <code className="text-cyan-400">mode</code>: <code className="text-cyan-400">&quot;fingerprint&quot;</code>, <code className="text-cyan-400">&quot;retina&quot;</code>, <code className="text-cyan-400">&quot;facial&quot;</code>, or <code className="text-cyan-400">&quot;dna&quot;</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
  <BiometricScanner mode="fingerprint" signal="cyan" label="FINGERPRINT SENSOR" />
  <BiometricScanner mode="retina" signal="violet" label="RETINAL OCULAR SCAN" />
  <BiometricScanner mode="facial" signal="green" label="FACIAL TOPOLOGY" />
  <BiometricScanner mode="dna" signal="amber" label="DNA HELIX SEQUENCER" />
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <BiometricScanner mode="fingerprint" signal="cyan" label="FINGERPRINT SENSOR" />
              <BiometricScanner mode="retina" signal="violet" label="RETINAL OCULAR SCAN" />
              <BiometricScanner mode="facial" signal="green" label="FACIAL TOPOLOGY" />
              <BiometricScanner mode="dna" signal="amber" label="DNA HELIX SEQUENCER" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Interaction Mechanics ── */}
      <ContentSection title="Interaction Mechanics (Click vs Hold-to-Scan)" id="interaction-types">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Set <code className="text-cyan-400">triggerType=&quot;hold&quot;</code> to require continuous press-and-hold interaction to fill the verification progress buffer. Releasing early aborts the scan.
          </p>

          <Playground
            code={`<div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full">
  <BiometricScanner
    mode="retina"
    triggerType="click"
    signal="cyan"
    label="CLICK TO TRIGGER"
  />

  <BiometricScanner
    mode="fingerprint"
    triggerType="hold"
    holdDuration={2400}
    signal="amber"
    label="HOLD TO VERIFY (2.4s)"
  />
</div>`}
          >
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <BiometricScanner
                mode="retina"
                triggerType="click"
                signal="cyan"
                label="CLICK TO TRIGGER"
              />

              <BiometricScanner
                mode="fingerprint"
                triggerType="hold"
                holdDuration={2400}
                signal="amber"
                label="HOLD TO VERIFY (2.4s)"
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Security Terminal ── */}
      <ContentSection title="Composite Level-5 Security Checkpoint" id="security-terminal">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense checkpoint embedding biometric telemetry inside a <code className="text-cyan-400">ChamferCard</code> housing.
          </p>

          <Playground
            code={`<ChamferCard signal="cyan" glow tag="AIR-LOCK // GATE_04" statusDot="cyan" className="max-w-md mx-auto w-full">
  <ChamferCardHeader>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-cyan-400" />
        <ChamferCardTitle>CLEARANCE CHECKPOINT</ChamferCardTitle>
      </div>
      <Badge variant="glass" dot dotColor="cyan">LEVEL-5</Badge>
    </div>
    <ChamferCardDescription>
      Present physical biometric verification to disengage orbital lockdown.
    </ChamferCardDescription>
  </ChamferCardHeader>

  <ChamferCardContent className="flex flex-col items-center justify-center py-4">
    <BiometricScanner
      mode="retina"
      signal="cyan"
      label="RETINA VALIDATION NODE"
      onScanComplete={(success) => setAuthStatus(success ? 'ACCESS_GRANTED // OVERRIDE_OK' : 'ACCESS_DENIED // RE-SCAN')}
    />
  </ChamferCardContent>

  <ChamferCardFooter className="flex items-center justify-between text-xs font-mono">
    <span className="text-slate-400">STATUS:</span>
    <span className={authStatus.includes('GRANTED') ? 'text-emerald-400 font-bold' : 'text-cyan-400'}>
      {authStatus}
    </span>
  </ChamferCardFooter>
</ChamferCard>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <ChamferCard signal="cyan" glow tag="AIR-LOCK // GATE_04" statusDot="cyan" className="max-w-md w-full">
                <ChamferCardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-cyan-400" />
                      <ChamferCardTitle>CLEARANCE CHECKPOINT</ChamferCardTitle>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">LEVEL-5</Badge>
                  </div>
                  <ChamferCardDescription>
                    Present physical biometric verification to disengage orbital lockdown.
                  </ChamferCardDescription>
                </ChamferCardHeader>

                <ChamferCardContent className="flex flex-col items-center justify-center py-4">
                  <BiometricScanner
                    mode="retina"
                    signal="cyan"
                    label="RETINA VALIDATION NODE"
                    onScanComplete={(success) => setAuthStatus(success ? 'ACCESS_GRANTED // OVERRIDE_OK' : 'ACCESS_DENIED // RE-SCAN')}
                  />
                </ChamferCardContent>

                <ChamferCardFooter className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">STATUS:</span>
                  <span className={authStatus.includes('GRANTED') ? 'text-emerald-400 font-bold' : 'text-cyan-400'}>
                    {authStatus}
                  </span>
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
              property: 'mode',
              description: 'Biometric vector graphic model ("fingerprint", "retina", "facial", "dna").',
              type: '"fingerprint" | "retina" | "facial" | "dna"',
              defaultValue: '"fingerprint"',
            },
            {
              property: 'triggerType',
              description: 'Trigger mechanism: one-tap timed scan vs continuous press-and-hold.',
              type: '"click" | "hold"',
              defaultValue: '"click"',
            },
            {
              property: 'signal',
              description: 'Laser beam, progress halo, and HUD telemetry accent color.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose"',
              defaultValue: '"cyan"',
            },
            {
              property: 'scanDuration',
              description: 'Total duration for click-mode verification in milliseconds.',
              type: 'number',
              defaultValue: '1500',
            },
            {
              property: 'holdDuration',
              description: 'Required hold time for hold-mode verification in milliseconds.',
              type: 'number',
              defaultValue: '1200',
            },
            {
              property: 'simulatedSuccessRate',
              description: 'Probability of successful scan resolution (0.0 to 1.0).',
              type: 'number',
              defaultValue: '1.0',
            },
            {
              property: 'onScanComplete',
              description: 'Callback fired when scan sequence finishes with boolean success outcome.',
              type: '(success: boolean) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Keyboard Trigger:</strong> Fully interactive via keyboard focus with <code className="text-cyan-400 font-mono text-xs">Space</code> or <code className="text-cyan-400 font-mono text-xs">Enter</code> keys.
          </li>
          <li>
            <strong>Screen Readers:</strong> Live status updates are announced politely via <code className="text-cyan-400 font-mono text-xs">aria-live=&quot;polite&quot;</code>.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
