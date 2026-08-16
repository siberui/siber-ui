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
  CypherText,
  Button,
  Input,
} from '@siberui/react';
import { RefreshCw } from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Mount Decryption', level: 2 },
  { id: 'triggers', text: 'Trigger Modes (Mount, Hover, InView, Manual)', level: 2 },
  { id: 'character-sets', text: 'Predefined Character Sets (Hex, Matrix, Binary)', level: 2 },
  { id: 'reveal-directions', text: 'Reveal Directions (Start, End, Center, Random)', level: 2 },
  { id: 'colors-and-glow', text: 'Signal Colors & Neon Glow', level: 2 },
  { id: 'interactive-station', text: 'Interactive Decryption Terminal', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
];

export default function CypherTextDocsPage() {
  const [customText, setCustomText] = React.useState('AUTHENTICATION_TOKEN_VERIFIED');
  const [keyCounter, setKeyCounter] = React.useState(0);

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Cypher Text"
        description="Futuristic cryptographic text decryption and scramble reveal animation component with custom glyph matrices, directional resolution, and interactive triggers."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { CypherText } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Mount Decryption" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            By default, CypherText starts scrambling immediately on mount and decrypts into the target string.
          </p>

          <Playground
            code={`<CypherText
  text="CLASSIFIED_SYSTEM_ACCESS_GRANTED"
  trigger="mount"
  speed={30}
  iterations={8}
  className="text-xl font-mono text-cyan-400 font-bold"
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <CypherText
                key={keyCounter}
                text="CLASSIFIED_SYSTEM_ACCESS_GRANTED"
                trigger="mount"
                speed={30}
                iterations={8}
                className="text-xl font-mono text-cyan-400 font-bold"
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Triggers ── */}
      <ContentSection title="Trigger Modes (Mount, Hover, InView, Manual)" id="triggers">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select an activation mechanism via <code className="text-cyan-400">trigger</code>: <code className="text-cyan-400">&quot;mount&quot;</code>, <code className="text-cyan-400">&quot;hover&quot;</code>, <code className="text-cyan-400">&quot;inView&quot;</code>, or <code className="text-cyan-400">&quot;manual&quot;</code>.
          </p>

          <Playground
            code={`<div className="flex flex-col gap-4">
  <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
    <span className="text-xs text-slate-400 font-mono block mb-1">TRIGGER: HOVER (Hover over text)</span>
    <CypherText
      text="HOVER_TO_DECRYPT_PAYLOAD_0x7F"
      trigger="hover"
      color="cyan"
      className="text-base font-mono font-bold cursor-pointer"
    />
  </div>

  <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
    <span className="text-xs text-slate-400 font-mono block mb-1">TRIGGER: IN-VIEW (Viewport Scroll)</span>
    <CypherText
      text="AUTO_TRIGGERED_WHEN_SCROLLED_INTO_VIEW"
      trigger="inView"
      color="violet"
      className="text-base font-mono font-bold"
    />
  </div>
</div>`}
          >
            <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
              <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
                <span className="text-xs text-slate-400 font-mono block mb-1">TRIGGER: HOVER (Hover over text)</span>
                <CypherText
                  text="HOVER_TO_DECRYPT_PAYLOAD_0x7F"
                  trigger="hover"
                  color="cyan"
                  className="text-base font-mono font-bold cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
                <span className="text-xs text-slate-400 font-mono block mb-1">TRIGGER: IN-VIEW (Viewport Scroll)</span>
                <CypherText
                  text="AUTO_TRIGGERED_WHEN_SCROLLED_INTO_VIEW"
                  trigger="inView"
                  color="violet"
                  className="text-base font-mono font-bold"
                />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Character Sets ── */}
      <ContentSection title="Predefined Character Sets (Hex, Matrix, Binary)" id="character-sets">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Customize the scramble character matrix using <code className="text-cyan-400">characters</code>: <code className="text-cyan-400">&quot;hex&quot;</code>, <code className="text-cyan-400">&quot;binary&quot;</code>, <code className="text-cyan-400">&quot;matrix&quot;</code>, <code className="text-cyan-400">&quot;alphanumeric&quot;</code>, or custom characters.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
  <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
    <span className="text-xs text-slate-400 font-mono block mb-1">CHARACTERS: BINARY (01)</span>
    <CypherText text="QUANTUM_STREAM" characters="binary" trigger="hover" color="emerald" className="font-mono font-bold" />
  </div>

  <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
    <span className="text-xs text-slate-400 font-mono block mb-1">CHARACTERS: MATRIX (KATAKANA)</span>
    <CypherText text="NEO_TOKYO_GRID" characters="matrix" trigger="hover" color="emerald" className="font-mono font-bold" />
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
              <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
                <span className="text-xs text-slate-400 font-mono block mb-1">CHARACTERS: BINARY (01)</span>
                <CypherText text="QUANTUM_STREAM" characters="binary" trigger="hover" color="emerald" className="font-mono font-bold" />
              </div>

              <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
                <span className="text-xs text-slate-400 font-mono block mb-1">CHARACTERS: MATRIX (KATAKANA)</span>
                <CypherText text="NEO_TOKYO_GRID" characters="matrix" trigger="hover" color="emerald" className="font-mono font-bold" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Reveal Directions ── */}
      <ContentSection title="Reveal Directions (Start, End, Center, Random)" id="reveal-directions">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">revealDirection</code> prop sets the character reveal sequence: <code className="text-cyan-400">&quot;start&quot;</code> (Left to Right), <code className="text-cyan-400">&quot;end&quot;</code> (Right to Left), <code className="text-cyan-400">&quot;center&quot;</code> (Inside Out), or <code className="text-cyan-400">&quot;random&quot;</code>.
          </p>

          <Playground
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
  <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
    <span className="text-xs text-slate-400 font-mono block mb-1">DIRECTION: CENTER-OUT</span>
    <CypherText text="ENCRYPTED_TELEMETRY" revealDirection="center" trigger="hover" color="violet" className="font-mono font-bold" />
  </div>

  <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
    <span className="text-xs text-slate-400 font-mono block mb-1">DIRECTION: RANDOM</span>
    <CypherText text="STOCHASTIC_DECODER" revealDirection="random" trigger="hover" color="amber" className="font-mono font-bold" />
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
              <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
                <span className="text-xs text-slate-400 font-mono block mb-1">DIRECTION: CENTER-OUT</span>
                <CypherText text="ENCRYPTED_TELEMETRY" revealDirection="center" trigger="hover" color="violet" className="font-mono font-bold" />
              </div>

              <div className="p-4 rounded-xl bg-[#060914] border border-white/[0.06]">
                <span className="text-xs text-slate-400 font-mono block mb-1">DIRECTION: RANDOM</span>
                <CypherText text="STOCHASTIC_DECODER" revealDirection="random" trigger="hover" color="amber" className="font-mono font-bold" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Colors & Glow ── */}
      <ContentSection title="Signal Colors & Neon Glow" id="colors-and-glow">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Configure chromatic highlights via <code className="text-cyan-400">color</code> and apply neon aura styling with <code className="text-cyan-400">glow</code>.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-4 items-center justify-center">
  <CypherText text="CYAN_GLOW" color="cyan" glow trigger="mount" className="font-mono font-bold" />
  <CypherText text="VIOLET_GLOW" color="violet" glow trigger="mount" className="font-mono font-bold" />
  <CypherText text="EMERALD_GLOW" color="emerald" glow trigger="mount" className="font-mono font-bold" />
  <CypherText text="ROSE_GLOW" color="rose" glow trigger="mount" className="font-mono font-bold" />
</div>`}
          >
            <div className="flex flex-wrap gap-6 items-center justify-center p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <CypherText text="CYAN_GLOW" color="cyan" glow trigger="mount" className="font-mono font-bold" />
              <CypherText text="VIOLET_GLOW" color="violet" glow trigger="mount" className="font-mono font-bold" />
              <CypherText text="EMERALD_GLOW" color="emerald" glow trigger="mount" className="font-mono font-bold" />
              <CypherText text="ROSE_GLOW" color="rose" glow trigger="mount" className="font-mono font-bold" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Interactive Station ── */}
      <ContentSection title="Interactive Decryption Terminal" id="interactive-station">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Test custom text input, character sets, and reveal directions in realtime.
          </p>

          <Playground
            code={`const [text, setText] = useState('AUTHENTICATION_TOKEN_VERIFIED');

<div className="space-y-4">
  <CypherText text={text} trigger="mount" color="cyan" glow className="text-lg font-mono font-bold" />
  <Input value={text} onChange={(e) => setText(e.target.value)} />
</div>`}
          >
            <div className="flex flex-col gap-6 p-6 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full max-w-xl mx-auto">
              <div className="p-4 rounded-xl bg-[#060914] border border-cyan-500/30 text-center min-h-[64px] flex items-center justify-center">
                <CypherText
                  key={keyCounter}
                  text={customText || 'ENTER_TEXT'}
                  characters="hex"
                  revealDirection="start"
                  trigger="mount"
                  color="cyan"
                  glow
                  className="text-lg font-mono font-bold"
                />
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Enter string to decrypt..."
                    className="font-mono text-xs"
                  />
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setKeyCounter((prev) => prev + 1)}
                    leftIcon={<RefreshCw className="h-3.5 w-3.5" />}
                  >
                    REPLAY
                  </Button>
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
              property: 'text',
              description: 'Target text string to decrypt and reveal.',
              type: 'string',
            },
            {
              property: 'trigger',
              description: 'Activation trigger mode.',
              type: '"mount" | "hover" | "inView" | "manual"',
              defaultValue: '"mount"',
            },
            {
              property: 'characters',
              description: 'Character set used for scramble glyphs.',
              type: '"hex" | "binary" | "matrix" | "alphanumeric" | "symbols" | "all" | string',
              defaultValue: '"hex"',
            },
            {
              property: 'revealDirection',
              description: 'Reveal order across text characters.',
              type: '"start" | "end" | "center" | "random"',
              defaultValue: '"start"',
            },
            {
              property: 'iterations',
              description: 'Number of scrambles per character before resolution.',
              type: 'number',
              defaultValue: '6',
            },
            {
              property: 'speed',
              description: 'Interval between character frame flips in milliseconds.',
              type: 'number',
              defaultValue: '35',
            },
            {
              property: 'color',
              description: 'Neon color accent.',
              type: '"cyan" | "violet" | "emerald" | "amber" | "rose" | "white" | "muted"',
              defaultValue: '"cyan"',
            },
            {
              property: 'glow',
              description: 'Enables neon text-shadow drop aura.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'onComplete',
              description: 'Callback fired when decryption finishes.',
              type: '() => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Screen Reader Support:</strong> The target text string is maintained statically in <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label</code>, so screen readers immediately read the correct text without waiting for animations.
          </li>
          <li>
            <strong>Reduced Motion:</strong> Automatically skips scrambling and displays the final string immediately when <code className="text-cyan-400 font-mono text-xs">prefers-reduced-motion: reduce</code> is detected.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
