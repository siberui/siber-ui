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
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  BorderBeam,
} from '@siberui/react';
import { KeyRound } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Split Groups', level: 2 },
  { id: 'neon-variant', text: 'Neon Monospace PIN Mode', level: 2 },
  { id: 'validation-feedback', text: 'Validation States (Error & Success)', level: 2 },
  { id: 'frosted-glass-gateway', text: 'Frosted Cyber-Glass 2FA Gateway', level: 2 },
  { id: 'tactical-hud-vault', text: 'Tactical HUD Vault Decryption Console', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function InputOTPDocsPage() {
  const [value, setValue] = React.useState('');

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Input OTP"
        description="High-security segmented one-time passcode slots featuring glowing caret pulses, instant clipboard pasting, and cryptographic validation styling."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot, 
  InputOTPSeparator 
} from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Split Groups" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Split OTP slots across two discrete 3-digit groups using <code className="text-cyan-400">InputOTPSeparator</code> for optimal numerical readability.
          </p>

          <Playground
            code={`<InputOTP maxLength={6} label="AUTHENTICATION CODE (6-DIGIT)">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <InputOTP maxLength={6} label="AUTHENTICATION CODE (6-DIGIT)">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Monospace PIN Mode" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Activate <code className="text-cyan-400">variant=&quot;neon&quot;</code> to illuminate focused character slots with cybernetic cyan laser borders and glowing backgrounds.
          </p>

          <Playground
            code={`<InputOTP
  variant="neon"
  maxLength={4}
  label="QUANTUM ACCESS PIN (4-DIGIT)"
  helperText="Enter the 4-digit token generated on your physical security key"
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <InputOTP
                variant="neon"
                maxLength={4}
                label="QUANTUM ACCESS PIN (4-DIGIT)"
                helperText="Enter the 4-digit token generated on your physical security key"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Validation Feedback ── */}
      <ContentSection title="Validation States (Error & Success)" id="validation-feedback">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-rose-400">error</code> or <code className="text-emerald-400">success</code> to visually color slot perimeters and display alert messages.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
  <InputOTP
    error="INVALID_TOKEN: Checksum verification failed"
    value="892"
    maxLength={3}
    label="FAILED PASSCODE"
  >
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
    </InputOTPGroup>
  </InputOTP>

  <InputOTP
    success
    value="741"
    maxLength={3}
    label="VERIFIED PASSCODE"
    helperText="Biometric session authorized"
  >
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
    </InputOTPGroup>
  </InputOTP>
</div>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                <InputOTP
                  error="INVALID_TOKEN: Checksum verification failed"
                  value="892"
                  maxLength={3}
                  label="FAILED PASSCODE"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                </InputOTP>

                <InputOTP
                  success
                  value="741"
                  maxLength={3}
                  label="VERIFIED PASSCODE"
                  helperText="Biometric session authorized"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass 2FA Gateway ── */}
      <ContentSection title="Frosted Cyber-Glass 2FA Gateway" id="frosted-glass-gateway">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Construct glassmorphic secondary authentication dialogs with circuit textures and active border sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
  <div className="relative z-10 space-y-6">
    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
      <div className="flex items-center gap-2">
        <KeyRound className="h-4 w-4 text-cyan-400" />
        <span className="font-mono text-xs font-bold text-white tracking-wider">HARDWARE 2FA CHALLENGE</span>
      </div>
      <Badge variant="glass" dot dotColor="cyan">00:45</Badge>
    </div>

    <div className="flex flex-col items-center gap-5">
      <p className="text-xs text-slate-300 text-center">
        Enter the 6-digit TOTP challenge from your hardware authenticator app.
      </p>

      <InputOTP
        variant="neon"
        maxLength={6}
        value={value}
        onChange={setValue}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>

    <div className="pt-2">
      <Button variant="neon" glow className="w-full">
        AUTHORIZE ACCESS
      </Button>
    </div>
  </div>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <KeyRound className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">HARDWARE 2FA CHALLENGE</span>
                    </div>
                    <Badge variant="glass" dot dotColor="cyan">00:45</Badge>
                  </div>

                  <div className="flex flex-col items-center gap-5">
                    <p className="text-xs text-slate-300 text-center">
                      Enter the 6-digit TOTP challenge from your hardware authenticator app.
                    </p>

                    <InputOTP
                      variant="neon"
                      maxLength={6}
                      value={value}
                      onChange={setValue}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  <div className="pt-2">
                    <Button variant="neon" glow className="w-full">
                      AUTHORIZE ACCESS
                    </Button>
                  </div>
                </div>
                <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Vault Decryption Console ── */}
      <ContentSection title="Tactical HUD Vault Decryption Console" id="tactical-hud-vault">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite cipher entry console embedded into orbital defense telemetry systems.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-4 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">AIR-GAPPED VAULT KEYPAD</CardTitle>
      <Badge variant="neon" size="sm">LOCKED</Badge>
    </div>
    <CardDescription className="text-xs text-slate-400">
      Biometric multi-sig verification required for core purge.
    </CardDescription>
  </CardHeader>

  <CardContent className="p-6 space-y-6 flex flex-col items-center">
    <InputOTP variant="neon" maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>

    <div className="flex w-full justify-between gap-3">
      <Button variant="secondary" size="sm" className="w-1/2">CANCEL</Button>
      <Button variant="neon" size="sm" glow className="w-1/2">UNLOCK VAULT</Button>
    </div>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">AIR-GAPPED VAULT KEYPAD</CardTitle>
                    <Badge variant="neon" size="sm">LOCKED</Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-400">
                    Biometric multi-sig verification required for core purge.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-6 flex flex-col items-center">
                  <InputOTP variant="neon" maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>

                  <div className="flex w-full justify-between gap-3">
                    <Button variant="secondary" size="sm" className="w-1/2">CANCEL</Button>
                    <Button variant="neon" size="sm" glow className="w-1/2">UNLOCK VAULT</Button>
                  </div>
                </CardContent>
              </Card>
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
              description: 'Visual styling and laser glow theme passed down to slots.',
              type: '"default" | "neon" | "glass"',
              defaultValue: '"default"',
            },
            {
              property: 'maxLength',
              description: 'Total number of character slots (required).',
              type: 'number',
            },
            {
              property: 'label',
              description: 'Top monospace label linked for assistive technologies.',
              type: 'string',
            },
            {
              property: 'helperText',
              description: 'Instructional text beneath the OTP group.',
              type: 'string',
            },
            {
              property: 'error',
              description: 'Displays a danger state perimeter and error message.',
              type: 'string | boolean',
            },
            {
              property: 'success',
              description: 'Applies emerald verified styling to all slots.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'value',
              description: 'Controlled string value.',
              type: 'string',
            },
            {
              property: 'onChange',
              description: 'Callback fired whenever the input characters update.',
              type: '(value: string) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>input-otp Core:</strong> Built atop the industry-standard <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">input-otp</code> library with full support for SMS autofill on mobile devices.
          </li>
          <li>
            <strong>Clipboard Pasting:</strong> Users can copy a 6-digit token and paste anywhere over the OTP slots to populate all fields in one keystroke.
          </li>
          <li>
            <strong>Animated Caret:</strong> Blinking monospace carets clearly indicate the currently active slot.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Separator Usage:</strong> When codes exceed 4 digits (e.g. 6 or 8 digits), always insert <code className="text-cyan-400">&lt;InputOTPSeparator /&gt;</code> to reduce cognitive load.
          </li>
          <li>
            <strong>Auto-Submit:</strong> When the final digit is entered (<code className="text-cyan-400">value.length === maxLength</code>), consider triggering verification automatically.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
