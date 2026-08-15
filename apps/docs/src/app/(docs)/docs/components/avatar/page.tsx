import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  Avatar,
  AvatarGroup,
  Badge,
  Card,
  CardContent,
  Row,
  Stack,
} from '@siberui/react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'neon-and-hologram', text: 'Neon & Hologram Cyberpunk Avatars', level: 2 },
  { id: 'neural-network-glow', text: 'Neural Glow & Activity States', level: 2 },
  { id: 'frosted-glass', text: 'Frosted Glassmorphism Variant', level: 2 },
  { id: 'shapes-and-scaling', text: 'Shapes & Scaling', level: 2 },
  { id: 'rings-and-glows', text: 'Glowing Ring Halos', level: 2 },
  { id: 'live-status', text: 'Animated Neural Status Pulses', level: 2 },
  { id: 'ai-fallbacks', text: 'AI Agents & Entity Fallbacks', level: 2 },
  { id: 'avatar-group-stack', text: 'Avatar Group with Hover Expansion', level: 2 },
  { id: 'hud-profile-card', text: 'HUD Operator Card Composition', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function AvatarDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Avatar"
        description="A specialized entity visual crafted with frosted glassmorphism, cyberpunk neon auras, animated neural status pulses, and squircle geometries."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { Avatar, AvatarGroup } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Neon & Hologram Avatars ── */}
      <ContentSection title="Neon & Hologram Cyberpunk Avatars" id="neon-and-hologram">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;neon&quot;</code> and <code className="text-cyan-400">variant=&quot;hologram&quot;</code> presets illuminate avatars with cyber cyan ambient glows, crisp high-tech borders, and optional scanlines.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-6 items-center">
  {/* Neon Variant */}
  <Avatar 
    size="xl"
    variant="neon"
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
    name="Cypher Sentinel"
    status="streaming"
  />

  {/* Hologram Variant with Scanlines */}
  <Avatar 
    size="xl"
    variant="hologram"
    scanline
    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" 
    name="Apex Operator"
    status="online"
  />

  {/* Fallback Neon Initials */}
  <Avatar 
    size="xl"
    variant="neon"
    name="Ghost Shell"
    status="busy"
  />
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-8 p-8 bg-[#050811] rounded-2xl border border-white/[0.06] shadow-xl">
              <div className="flex flex-col items-center gap-2">
                <Avatar 
                  size="xl"
                  variant="neon"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                  name="Cypher Sentinel"
                  status="streaming"
                />
                <span className="text-[11px] font-mono text-cyan-400">variant=&quot;neon&quot;</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar 
                  size="xl"
                  variant="hologram"
                  scanline
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" 
                  name="Apex Operator"
                  status="online"
                />
                <span className="text-[11px] font-mono text-cyan-300">scanline hologram</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar 
                  size="xl"
                  variant="neon"
                  name="Ghost Shell"
                  status="busy"
                />
                <span className="text-[11px] font-mono text-slate-400">neon initials</span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neural Glow & Activity States ── */}
      <ContentSection title="Neural Glow & Activity States" id="neural-network-glow">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Combine <code className="text-cyan-400">ring</code> halo highlights with active <code className="text-cyan-400">status</code> states to indicate live telemetry and signal sync.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-8 items-center justify-center">
  <Avatar ring="emerald" status="online" size="lg" name="Neural Node" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80" />
  <Avatar ring="cyan" variant="neon" size="lg" name="CY" status="streaming" />
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Avatar ring="emerald" status="online" size="lg" name="Neural Node" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80" />
              <Avatar ring="cyan" variant="neon" size="lg" name="CY" status="streaming" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Glassmorphism ── */}
      <ContentSection title="Frosted Glassmorphism Variant" id="frosted-glass">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;glass&quot;</code> preset renders translucent acrylic avatar tokens designed to layer seamlessly on textured cyberpunk backdrops.
          </p>

          <Playground
            code={`<div className="p-8 rounded-2xl border border-white/10 bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat flex flex-wrap gap-8 items-center justify-center">
  <Avatar variant="glass" size="lg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" name="Glass Operator" />
  <Avatar variant="glass" size="lg" name="VS" />
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl">
              <div className="relative z-10 flex flex-wrap gap-8 items-center justify-center">
                <Avatar variant="glass" size="lg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" name="Glass Operator" />
                <Avatar variant="glass" size="lg" name="VS" />
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Shapes & Scaling ── */}
      <ContentSection title="Shapes & Scaling" id="shapes-and-scaling">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Choose between traditional rounded circles, smooth geometric squircles (<code className="text-cyan-400">shape=&quot;squircle&quot;</code>), or angular cyber squares (<code className="text-cyan-400">shape=&quot;square&quot;</code>).
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-8 items-center justify-center">
  <div className="flex flex-col items-center gap-2">
    <Avatar shape="circle" size="lg" name="CI" />
    <span className="text-[11px] font-mono text-slate-400">circle</span>
  </div>

  <div className="flex flex-col items-center gap-2">
    <Avatar shape="squircle" size="lg" name="SQ" />
    <span className="text-[11px] font-mono text-cyan-300">squircle</span>
  </div>

  <div className="flex flex-col items-center gap-2">
    <Avatar shape="square" size="lg" name="BX" />
    <span className="text-[11px] font-mono text-slate-400">square</span>
  </div>
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <div className="flex flex-col items-center gap-2">
                <Avatar shape="circle" size="lg" name="CI" />
                <span className="text-[11px] font-mono text-slate-400">circle</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar shape="squircle" size="lg" name="SQ" />
                <span className="text-[11px] font-mono text-cyan-300">squircle</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar shape="square" size="lg" name="BX" />
                <span className="text-[11px] font-mono text-slate-400">square</span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Glowing Ring Halos ── */}
      <ContentSection title="Glowing Ring Halos" id="rings-and-glows">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Highlight VIP agents, clearance levels, or active roles with illuminated dual-layer ring halos (<code className="text-cyan-400">cyan</code>, <code className="text-violet-400">violet</code>, <code className="text-emerald-400">emerald</code>, <code className="text-rose-400">rose</code>, <code className="text-amber-400">amber</code>).
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-6 items-center">
  <Avatar size="lg" ring="cyan" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" />
  <Avatar size="lg" ring="violet" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" />
  <Avatar size="lg" ring="emerald" name="Sarah Connor" />
  <Avatar size="lg" ring="rose" name="Red Team" />
  <Avatar size="lg" ring="amber" name="Sentinel Warning" />
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Avatar size="lg" ring="cyan" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" />
              <Avatar size="lg" ring="violet" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" />
              <Avatar size="lg" ring="emerald" name="Sarah Connor" />
              <Avatar size="lg" ring="rose" name="Red Team" />
              <Avatar size="lg" ring="amber" name="Sentinel Warning" />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Animated Neural Status Pulses ── */}
      <ContentSection title="Animated Neural Status Pulses" id="live-status">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Real-time status indicators support pulse animations. The <code className="text-cyan-400">streaming</code> status emits an animated telemetry radar ping.
          </p>

          <Playground
            code={`<div className="flex flex-wrap gap-8 items-center">
  <Avatar size="lg" status="online" name="Agent 01" />
  <Avatar size="lg" status="streaming" name="Neural Stream" />
  <Avatar size="lg" status="idle" name="Agent 02" />
  <Avatar size="lg" status="busy" name="Agent 03" />
  <Avatar size="lg" status="offline" name="Agent 04" />
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" status="online" name="Agent 01" />
                <span className="text-[11px] font-mono text-emerald-400">online (pulse)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" status="streaming" name="Neural Stream" />
                <span className="text-[11px] font-mono text-cyan-400">streaming (ping)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" status="idle" name="Agent 02" />
                <span className="text-[11px] font-mono text-amber-400">idle</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" status="busy" name="Agent 03" />
                <span className="text-[11px] font-mono text-rose-400">busy</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" status="offline" name="Agent 04" />
                <span className="text-[11px] font-mono text-slate-500">offline</span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── AI Agents & Entity Fallbacks ── */}
      <ContentSection title="AI Agents & Entity Fallbacks" id="ai-fallbacks">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            When displaying non-human entities like Autonomous LLM Agents, Core Processors, or Generic Operators, use <code className="text-cyan-400">fallbackType=&quot;bot&quot; | &quot;cpu&quot; | &quot;user&quot;</code>.
          </p>

          <Playground
            code={`<div className="flex gap-6 items-center">
  <Avatar size="lg" variant="neon" fallbackType="bot" status="streaming" />
  <Avatar size="lg" variant="neon" fallbackType="cpu" status="online" />
  <Avatar size="lg" variant="neon" fallbackType="user" status="idle" />
</div>`}
          >
            <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" variant="neon" fallbackType="bot" status="streaming" />
                <span className="text-[11px] font-mono text-cyan-300">fallbackType=&quot;bot&quot;</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" variant="neon" fallbackType="cpu" status="online" />
                <span className="text-[11px] font-mono text-violet-300">fallbackType=&quot;cpu&quot;</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" variant="neon" fallbackType="user" status="idle" />
                <span className="text-[11px] font-mono text-slate-400">fallbackType=&quot;user&quot;</span>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Avatar Group with Hover Expansion ── */}
      <ContentSection title="Avatar Group with Hover Expansion" id="avatar-group-stack">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <code className="text-cyan-400">AvatarGroup</code> stacks avatars with a negative overlap. Hovering dynamically expands the stack with smooth spring spacing and active hover scaling.
          </p>

          <Playground
            code={`<AvatarGroup 
  max={4}
  size="lg"
  variant="neon"
  shape="squircle"
  avatars={[
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', name: 'Commander Nova', status: 'streaming' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', name: 'Echo Zero', status: 'online' },
    { fallbackType: 'bot', name: 'Agent Sentinel', status: 'online' },
    { fallbackType: 'cpu', name: 'Neural Core', status: 'online' },
    { name: 'Marcus Vance' },
    { name: 'Elena Rostova' }
  ]}
/>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <AvatarGroup 
                max={4}
                size="lg"
                variant="neon"
                shape="squircle"
                avatars={[
                  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', name: 'Commander Nova', status: 'streaming' },
                  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', name: 'Echo Zero', status: 'online' },
                  { fallbackType: 'bot', name: 'Agent Sentinel', status: 'online' },
                  { fallbackType: 'cpu', name: 'Neural Core', status: 'online' },
                  { name: 'Marcus Vance' },
                  { name: 'Elena Rostova' }
                ]}
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── HUD Operator Card Composition ── */}
      <ContentSection title="HUD Operator Card Composition" id="hud-profile-card">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Here is how Cyber & Frosted Glass avatars integrate seamlessly into cyberpunk HUD operator and agent telemetry cards.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-2xl">
  <CardContent className="p-6">
    <Row gap="md" align="center">
      <Avatar 
        size="xl"
        shape="squircle"
        variant="neon"
        scanline
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
        name="Nova Vance"
        status="streaming"
      />
      <Stack gap="xs" className="flex-1">
        <Row justify="between" align="center">
          <span className="font-mono font-bold text-slate-100">NOVA_VANCE</span>
          <Badge variant="neon" size="sm">CLEARANCE: L5</Badge>
        </Row>
        <span className="text-xs text-cyan-400 font-mono">Neural Interface Architect</span>
        <span className="text-xs text-slate-400">Node Sync: 99.8% | Latency: 0.2ms</span>
      </Stack>
    </Row>
  </CardContent>
</Card>`}
          >
            <div className="w-full p-4">
              <Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-[0_0_30px_rgba(0,217,232,0.1)]">
                <CardContent className="p-6">
                  <Row gap="md" align="center">
                    <Avatar 
                      size="xl"
                      shape="squircle"
                      variant="neon"
                      scanline
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                      name="Nova Vance"
                      status="streaming"
                    />
                    <Stack gap="xs" className="flex-1">
                      <Row justify="between" align="center">
                        <span className="font-mono font-bold text-slate-100 tracking-wider">NOVA_VANCE</span>
                        <Badge variant="neon" size="sm">L5 CLEARANCE</Badge>
                      </Row>
                      <span className="text-xs text-cyan-400 font-mono">Neural Interface Architect</span>
                      <span className="text-xs text-slate-400">Node Sync: 99.8% | Latency: 0.2ms</span>
                    </Stack>
                  </Row>
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
              property: 'size',
              description: 'Dimensions of the avatar container.',
              type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
              defaultValue: '"md"',
            },
            {
              property: 'shape',
              description: 'Corner rounding geometry style.',
              type: '"circle" | "squircle" | "square"',
              defaultValue: '"circle"',
            },
            {
              property: 'variant',
              description: 'Cyberpunk & frosted glass visual aesthetic preset.',
              type: '"default" | "neon" | "glass" | "hologram"',
              defaultValue: '"default"',
            },
            {
              property: 'ring',
              description: 'Illuminated dual-layer ring halo color.',
              type: '"none" | "cyan" | "violet" | "emerald" | "rose" | "amber" | "white"',
              defaultValue: '"none"',
            },
            {
              property: 'status',
              description: 'Animated live status indicator dot.',
              type: '"online" | "idle" | "busy" | "streaming" | "offline"',
            },
            {
              property: 'fallbackType',
              description: 'Icon glyph displayed when image is missing or for autonomous agents.',
              type: '"initials" | "user" | "bot" | "cpu"',
              defaultValue: '"initials"',
            },
            {
              property: 'scanline',
              description: 'Overlays futuristic holographic CRT scanline raster.',
              type: 'boolean',
              defaultValue: 'false',
            },
            {
              property: 'src',
              description: 'Direct image URL source.',
              type: 'string',
            },
            {
              property: 'name',
              description: 'Entity name used for fallback initials and accessible alt label.',
              type: 'string',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            Always provide a descriptive <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">name</code> or <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">alt</code> property for assistive screen readers.
          </li>
          <li>
            Status indicator dots include programmatic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label</code> tags (e.g., &quot;Online&quot;, &quot;Streaming Telemetry&quot;).
          </li>
          <li>
            Status colors are backed by high-contrast border outlines so they remain discernible against bright or dark avatars.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Spatial UIs:</strong> Use <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">shape=&quot;squircle&quot;</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">variant=&quot;glass&quot;</code> when building spatial navigation or floating HUD cards.
          </li>
          <li>
            <strong>AI Agent Distinction:</strong> Pair <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">fallbackType=&quot;bot&quot;</code> or <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">fallbackType=&quot;cpu&quot;</code> with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">variant=&quot;neon&quot;</code> to immediately differentiate AI co-pilots from human operators.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
