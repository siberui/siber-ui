import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Badge,
  Button,
  Row,
} from '@siberui/react';
import {
  Terminal,
  Server,
  Database,
  FileCode,
  Cpu,
} from 'lucide-react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'neon-variant', text: 'Neon Cyberpunk Variant', level: 2 },
  { id: 'custom-separators', text: 'Cyber Separators (Slash, Double Colon, Arrow)', level: 2 },
  { id: 'glass-variant', text: 'Glass Variant', level: 2 },
  { id: 'icons-in-breadcrumbs', text: 'With System & Node Icons', level: 2 },
  { id: 'collapsed-paths', text: 'Collapsed Paths (Ellipsis)', level: 2 },
  { id: 'hud-header-composition', text: 'HUD Header Bar Composition', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function BreadcrumbDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Breadcrumb"
        description="A hierarchical path component engineered with cyberpunk neon lighting, terminal scope delimiters, and frosted glass navigation."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator, 
  BreadcrumbEllipsis 
} from '@siberui/react';`} />
      </ContentSection>

      {/* ── Neon Cyberpunk Variant ── */}
      <ContentSection title="Neon Cyberpunk Variant" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;neon&quot;</code> preset formats breadcrumb paths into futuristic terminal routes. Links feature glowing cyan hover states, and the active page node is highlighted in an illuminated status capsule.
          </p>

          <Playground
            code={`<Breadcrumb variant="neon">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">
        <Terminal className="h-3.5 w-3.5 text-cyan-400" />
        root
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">clusters</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">us-east-zone-01</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>
        <Cpu className="h-3.5 w-3.5 text-cyan-400" />
        neural-core.conf
      </BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#050811] rounded-2xl border border-white/[0.06] shadow-xl">
              <div className="p-3 px-5 rounded-xl bg-[#080d1a] border border-cyan-500/30 shadow-[0_0_24px_rgba(0,217,232,0.12)]">
                <Breadcrumb variant="neon">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">
                        <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                        root
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">clusters</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">us-east-zone-01</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                        neural-core.conf
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Cyber Separators ── */}
      <ContentSection title="Cyber Separators (Slash, Double Colon, Arrow)" id="custom-separators">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Customize delimiters across the entire navigation hierarchy using the <code className="text-cyan-400">separator</code> prop or inline on <code className="text-cyan-400">{'<BreadcrumbSeparator />'}</code>.
          </p>

          <Playground
            code={`<div className="space-y-4">
  {/* Unix Slash separator */}
  <Breadcrumb variant="neon" separator={<span className="text-cyan-500/50">/</span>}>
    <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink href="#">sys</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="#">telemetry</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>live_stream.log</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

  {/* C++ / Rust Scope Operator (::) */}
  <Breadcrumb variant="neon" separator={<span className="text-cyan-400/60 font-mono font-bold">::</span>}>
    <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink href="#">std</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="#">crypto</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>QuantumCipher</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`}
          >
            <div className="w-full space-y-4 p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <div className="p-3 px-4 rounded-lg bg-cyan-950/20 border border-cyan-500/20">
                <span className="text-[10px] font-mono text-cyan-400/60 uppercase block mb-1.5">Unix Path Format</span>
                <Breadcrumb variant="neon" separator={<span className="text-cyan-500/60 font-mono font-bold">/</span>}>
                  <BreadcrumbList>
                    <BreadcrumbItem><BreadcrumbLink href="#">sys</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbLink href="#">telemetry</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>live_stream.log</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div className="p-3 px-4 rounded-lg bg-cyan-950/20 border border-cyan-500/20">
                <span className="text-[10px] font-mono text-cyan-400/60 uppercase block mb-1.5">Scope Namespace (::)</span>
                <Breadcrumb variant="neon" separator={<span className="text-cyan-400/70 font-mono font-bold">::</span>}>
                  <BreadcrumbList>
                    <BreadcrumbItem><BreadcrumbLink href="#">std</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbLink href="#">crypto</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>QuantumCipher</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Glass Variant ── */}
      <ContentSection title="Glass Variant" id="glass-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">variant=&quot;glass&quot;</code> style blends frosted translucent navigation links seamlessly across complex cyberpunk textures.
          </p>

          <Playground
            code={`<div className="p-8 rounded-2xl border border-white/10 bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat">
  <Breadcrumb variant="glass">
    <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink href="#">Security Hub</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="#">Access Control</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>Zero-Trust Policies</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`}
          >
            <div className="relative w-full p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl">
              <div className="relative z-10 flex items-center justify-center">
                <div className="p-3 px-5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
                  <Breadcrumb variant="glass">
                    <BreadcrumbList>
                      <BreadcrumbItem><BreadcrumbLink href="#">Security Hub</BreadcrumbLink></BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem><BreadcrumbLink href="#">Access Control</BreadcrumbLink></BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem><BreadcrumbPage>Zero-Trust Policies</BreadcrumbPage></BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── With Icons ── */}
      <ContentSection title="With System & Node Icons" id="icons-in-breadcrumbs">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Embed Lucide icons within links and pages to provide rich visual context for servers, databases, and microservices.
          </p>

          <Playground
            code={`<Breadcrumb variant="neon">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">
        <Server className="h-3.5 w-3.5 text-cyan-400" />
        Infrastructure
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">
        <Database className="h-3.5 w-3.5 text-cyan-400" />
        PostgreSQL-Master
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>
        <FileCode className="h-3.5 w-3.5 text-cyan-400" />
        schema_v4.sql
      </BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <div className="flex items-center justify-center p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Breadcrumb variant="neon">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                      <Server className="h-3.5 w-3.5 text-cyan-400" />
                      Infrastructure
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                      <Database className="h-3.5 w-3.5 text-cyan-400" />
                      PostgreSQL-Master
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      <FileCode className="h-3.5 w-3.5 text-cyan-400" />
                      schema_v4.sql
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Collapsed Paths (Ellipsis) ── */}
      <ContentSection title="Collapsed Paths (Ellipsis)" id="collapsed-paths">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use <code className="text-cyan-400">{'<BreadcrumbEllipsis />'}</code> to cleanly abbreviate deep hierarchy trees on mobile viewports or dense toolbars.
          </p>

          <Playground
            code={`<Breadcrumb variant="neon">
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="#">~</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="#">deployments</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>edge_gateway.yaml</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <div className="flex items-center justify-center p-6 bg-[#050811] rounded-2xl border border-white/[0.06]">
              <Breadcrumb variant="neon">
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="#">~</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbLink href="#">deployments</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage>edge_gateway.yaml</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── HUD Header Bar Composition ── */}
      <ContentSection title="HUD Header Bar Composition" id="hud-header-composition">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            An example of how Neon breadcrumbs integrate into a production Cyberpunk command header alongside status badges and telemetry controls.
          </p>

          <Playground
            code={`<div className="w-full p-4 rounded-xl bg-[#070b14] border border-cyan-500/30 flex items-center justify-between shadow-2xl">
  <Breadcrumb variant="neon">
    <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink href="#">COMMAND</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="#">SECTOR_07</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>GRID_ROUTER</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

  <Row gap="sm" align="center">
    <Badge variant="neon" dot dotColor="green">ONLINE</Badge>
    <Button size="sm" variant="outline">Telemetry</Button>
  </Row>
</div>`}
          >
            <div className="w-full p-4 rounded-xl bg-[#070b14] border border-cyan-500/30 flex flex-wrap gap-4 items-center justify-between shadow-[0_0_24px_rgba(0,217,232,0.1)]">
              <Breadcrumb variant="neon">
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="#">COMMAND</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbLink href="#">SECTOR_07</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage>GRID_ROUTER</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Row gap="sm" align="center">
                <Badge variant="neon" size="sm" dot dotColor="green">ONLINE</Badge>
                <Button size="sm" variant="outline" className="font-mono text-xs">
                  Telemetry
                </Button>
              </Row>
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
              description: 'Visual preset theme styling applied across breadcrumb children.',
              type: '"default" | "neon" | "glass" | "ghost"',
              defaultValue: '"default"',
            },
            {
              property: 'separator',
              description: 'Custom delimiter element rendered between breadcrumb items.',
              type: 'React.ReactNode',
              defaultValue: '<ChevronRight />',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            Wraps elements in a semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">{'<nav aria-label="breadcrumb">'}</code> container.
          </li>
          <li>
            The active page element automatically receives <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-current=&quot;page&quot;</code>.
          </li>
          <li>
            Separators are marked with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-hidden=&quot;true&quot;</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;presentation&quot;</code> so screen readers ignore decorative characters.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Terminal Paths:</strong> In developer or operations dashboards, pair <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">variant=&quot;neon&quot;</code> with slash <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">/</code> or double colon <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">::</code> separators for authentic system routing.
          </li>
          <li>
            <strong>Mobile Collapsing:</strong> Collapse middle levels with <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">{'<BreadcrumbEllipsis />'}</code> to prevent multi-line wrapping on narrow displays.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
