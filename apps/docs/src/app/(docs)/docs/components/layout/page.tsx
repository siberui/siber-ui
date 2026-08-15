import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  Container,
  Grid,
  Col,
  Stack,
  Row,
  LayoutDivider,
  Spacer,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Button,
} from '@siberui/react';
import {
  LayoutGrid,
  Rows,
  Maximize2,
  Server,
  Wifi,
  ShieldCheck,
  Layers,
  Terminal,
  Cpu,
  ArrowRight,
} from 'lucide-react';

const headings = [
  { id: 'overview', text: 'Overview', level: 2 },
  { id: 'container', text: 'Container', level: 2 },
  { id: 'grid-12-col', text: '12-Column Grid & Spans', level: 2 },
  { id: 'responsive-grid', text: 'Responsive Breakpoints', level: 2 },
  { id: 'fluid-grid', text: 'Fluid Auto-Fill Grid', level: 2 },
  { id: 'gap-scale', text: 'Gap Scale & Spacing', level: 2 },
  { id: 'stack-and-row', text: 'Stack & Row (Flexbox)', level: 2 },
  { id: 'alignment-and-justify', text: 'Alignment & Justify', level: 2 },
  { id: 'divider-and-spacer', text: 'Divider & Spacer', level: 2 },
  { id: 'dashboard-composition', text: 'Dashboard Composition', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

function GridCell({
  children,
  accent = 'cyan',
  className = '',
}: {
  children: React.ReactNode;
  accent?: 'cyan' | 'purple' | 'green' | 'amber';
  className?: string;
}) {
  const styles = {
    cyan: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.1)]',
    purple: 'border-purple-500/40 bg-purple-500/10 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.1)]',
    green: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.1)]',
    amber: 'border-amber-500/40 bg-amber-500/10 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.1)]',
  };

  return (
    <div
      className={`flex items-center justify-center min-h-[46px] px-3 py-2 rounded-lg border border-dashed font-mono text-xs font-semibold tracking-wider transition-all duration-200 hover:scale-[1.01] ${styles[accent]} ${className}`}
    >
      {children}
    </div>
  );
}

export default function LayoutDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Layout System"
        description="A comprehensive suite of layout primitives (Container, Grid, Col, Stack, Row, LayoutDivider, Spacer) engineered for responsive cyberpunk and tech-forward interfaces."
      />

      {/* ── Overview ── */}
      <ContentSection title="Overview" id="overview">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Siber-UI provides a composable, token-aware layout architecture. Instead of writing repetitive CSS grid and flex classes, combine these atomic layout primitives to build robust, fluid, and responsive layouts across any screen size.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                <Maximize2 className="h-4 w-4" />
                <code className="text-cyan-300 font-mono text-xs">Container</code>
              </div>
              <p className="text-xs text-slate-400">
                Constrains max-width, centers content, and ensures consistent horizontal padding across viewports.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-950/10 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                <LayoutGrid className="h-4 w-4" />
                <code className="text-purple-300 font-mono text-xs">Grid & Col</code>
              </div>
              <p className="text-xs text-slate-400">
                12-column grid system with breakpoint overrides (<code className="text-purple-300">smCols</code>, <code className="text-purple-300">mdCols</code>, <code className="text-purple-300">lgCols</code>) and fluid auto-fill.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Rows className="h-4 w-4" />
                <code className="text-emerald-300 font-mono text-xs">Stack & Row</code>
              </div>
              <p className="text-xs text-slate-400">
                Flexbox building blocks for vertical flow (<code className="text-emerald-300">Stack</code>) and horizontal alignments (<code className="text-emerald-300">Row</code>).
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ── Container ── */}
      <ContentSection title="Container" id="container">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            The <code className="text-cyan-400">Container</code> component centers your content horizontally, constrains it to standard breakpoint maximum widths, and applies responsive padding. Preset sizes include <code className="text-cyan-400">sm</code> (640px), <code className="text-cyan-400">md</code> (768px), <code className="text-cyan-400">lg</code> (1024px), <code className="text-cyan-400">xl</code> (1280px), <code className="text-cyan-400">2xl</code> (1536px), and <code className="text-cyan-400">full</code>.
          </p>

          <Playground
            code={`<Stack gap="md">
  <Container size="sm" className="border border-dashed border-cyan-500/40 p-4 rounded-lg bg-cyan-950/20">
    <Row justify="between" align="center">
      <span className="font-mono text-xs text-cyan-400 font-semibold">size="sm"</span>
      <span className="font-mono text-xs text-slate-500">max-w-screen-sm (640px)</span>
    </Row>
  </Container>

  <Container size="md" className="border border-dashed border-purple-500/40 p-4 rounded-lg bg-purple-950/20">
    <Row justify="between" align="center">
      <span className="font-mono text-xs text-purple-400 font-semibold">size="md"</span>
      <span className="font-mono text-xs text-slate-500">max-w-screen-md (768px)</span>
    </Row>
  </Container>

  <Container size="lg" className="border border-dashed border-emerald-500/40 p-4 rounded-lg bg-emerald-950/20">
    <Row justify="between" align="center">
      <span className="font-mono text-xs text-emerald-400 font-semibold">size="lg"</span>
      <span className="font-mono text-xs text-slate-500">max-w-screen-lg (1024px)</span>
    </Row>
  </Container>
</Stack>`}
          >
            <div className="w-full p-4 space-y-4">
              <Container size="sm" className="border border-dashed border-cyan-500/40 p-4 rounded-lg bg-cyan-950/20">
                <Row justify="between" align="center">
                  <span className="font-mono text-xs text-cyan-400 font-semibold">{'size="sm"'}</span>
                  <span className="font-mono text-xs text-slate-500">max-w-screen-sm (640px)</span>
                </Row>
              </Container>

              <Container size="md" className="border border-dashed border-purple-500/40 p-4 rounded-lg bg-purple-950/20">
                <Row justify="between" align="center">
                  <span className="font-mono text-xs text-purple-400 font-semibold">{'size="md"'}</span>
                  <span className="font-mono text-xs text-slate-500">max-w-screen-md (768px)</span>
                </Row>
              </Container>

              <Container size="lg" className="border border-dashed border-emerald-500/40 p-4 rounded-lg bg-emerald-950/20">
                <Row justify="between" align="center">
                  <span className="font-mono text-xs text-emerald-400 font-semibold">{'size="lg"'}</span>
                  <span className="font-mono text-xs text-slate-500">max-w-screen-lg (1024px)</span>
                </Row>
              </Container>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── 12-Column Grid & Spans ── */}
      <ContentSection title="12-Column Grid & Spans" id="grid-12-col">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            By default, <code className="text-cyan-400">Grid</code> sets up a 12-column layout. Use <code className="text-cyan-400">Col</code> with <code className="text-cyan-400">span</code>, <code className="text-cyan-400">start</code> (column offset), and <code className="text-cyan-400">rowSpan</code> to build standard and asymmetric grid compositions.
          </p>

          <div>
            <h3 className="mb-3 text-base font-medium text-slate-200">12-Column Base Grid</h3>
            <Playground
              code={`<Grid cols={12} gap="xs">
  {Array.from({ length: 12 }, (_, i) => (
    <Col key={i} span={1}>
      <div className="bg-cyan-500/10 border border-dashed border-cyan-500/40 text-cyan-300 p-2 rounded text-center font-mono text-xs">
        {i + 1}
      </div>
    </Col>
  ))}
</Grid>`}
            >
              <div className="w-full p-4">
                <Grid cols={12} gap="xs">
                  {Array.from({ length: 12 }, (_, i) => (
                    <Col key={i} span={1}>
                      <GridCell accent="cyan">{i + 1}</GridCell>
                    </Col>
                  ))}
                </Grid>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-3 text-base font-medium text-slate-200">Common Column Span Recipes</h3>
            <Playground
              code={`<Stack gap="sm">
  {/* Halves (6 + 6) */}
  <Grid cols={12} gap="sm">
    <Col span={6}><GridCell accent="cyan">Col span={6} (50%)</GridCell></Col>
    <Col span={6}><GridCell accent="purple">Col span={6} (50%)</GridCell></Col>
  </Grid>

  {/* Thirds (4 + 4 + 4) */}
  <Grid cols={12} gap="sm">
    <Col span={4}><GridCell accent="cyan">Col span={4} (33.3%)</GridCell></Col>
    <Col span={4}><GridCell accent="purple">Col span={4} (33.3%)</GridCell></Col>
    <Col span={4}><GridCell accent="green">Col span={4} (33.3%)</GridCell></Col>
  </Grid>

  {/* Main + Sidebar (8 + 4) */}
  <Grid cols={12} gap="sm">
    <Col span={8}><GridCell accent="cyan">Main Content: span={8} (66.6%)</GridCell></Col>
    <Col span={4}><GridCell accent="purple">Sidebar: span={4} (33.3%)</GridCell></Col>
  </Grid>

  {/* Centered with Column Start (start={3} span={8}) */}
  <Grid cols={12} gap="sm">
    <Col start={3} span={8}>
      <GridCell accent="amber">Centered Block: start={3} span={8}</GridCell>
    </Col>
  </Grid>
</Stack>`}
            >
              <div className="w-full p-4">
                <Stack gap="sm">
                  <Grid cols={12} gap="sm">
                    <Col span={6}><GridCell accent="cyan">Col span=&#123;6&#125; (50%)</GridCell></Col>
                    <Col span={6}><GridCell accent="purple">Col span=&#123;6&#125; (50%)</GridCell></Col>
                  </Grid>

                  <Grid cols={12} gap="sm">
                    <Col span={4}><GridCell accent="cyan">Col span=&#123;4&#125; (33.3%)</GridCell></Col>
                    <Col span={4}><GridCell accent="purple">Col span=&#123;4&#125; (33.3%)</GridCell></Col>
                    <Col span={4}><GridCell accent="green">Col span=&#123;4&#125; (33.3%)</GridCell></Col>
                  </Grid>

                  <Grid cols={12} gap="sm">
                    <Col span={8}><GridCell accent="cyan">Main Content: span=&#123;8&#125; (66.6%)</GridCell></Col>
                    <Col span={4}><GridCell accent="purple">Sidebar: span=&#123;4&#125; (33.3%)</GridCell></Col>
                  </Grid>

                  <Grid cols={12} gap="sm">
                    <Col start={3} span={8}>
                      <GridCell accent="amber">Centered Block: start=&#123;3&#125; span=&#123;8&#125;</GridCell>
                    </Col>
                  </Grid>
                </Stack>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      {/* ── Responsive Breakpoints ── */}
      <ContentSection title="Responsive Breakpoints" id="responsive-grid">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Layout follows a <strong>mobile-first</strong> responsive design approach. You can specify column counts directly on <code className="text-cyan-400">Grid</code> using <code className="text-cyan-400">cols</code> (base/mobile), <code className="text-cyan-400">smCols</code> (640px+), <code className="text-cyan-400">mdCols</code> (768px+), and <code className="text-cyan-400">lgCols</code> (1024px+).
          </p>

          <Playground
            code={`{/* 1 col on mobile -> 2 cols on sm -> 3 cols on md -> 4 cols on lg */}
<Grid cols={1} smCols={2} mdCols={3} lgCols={4} gap="md">
  <GridCell accent="cyan">NODE_01 (Mobile 1 / Desktop 4)</GridCell>
  <GridCell accent="purple">NODE_02 (Mobile 1 / Desktop 4)</GridCell>
  <GridCell accent="green">NODE_03 (Mobile 1 / Desktop 4)</GridCell>
  <GridCell accent="amber">NODE_04 (Mobile 1 / Desktop 4)</GridCell>
</Grid>`}
          >
            <div className="w-full p-4 space-y-4">
              <Grid cols={1} smCols={2} mdCols={3} lgCols={4} gap="md">
                <GridCell accent="cyan">NODE_01</GridCell>
                <GridCell accent="purple">NODE_02</GridCell>
                <GridCell accent="green">NODE_03</GridCell>
                <GridCell accent="amber">NODE_04</GridCell>
              </Grid>

              <Row gap="md" wrap className="text-xs text-slate-400 font-mono bg-white/[0.02] p-3 rounded-lg border border-border-hairline">
                <span>📱 Base: <strong className="text-cyan-400">1 col</strong></span>
                <span>📟 sm (640px+): <strong className="text-purple-400">2 cols</strong></span>
                <span>💻 md (768px+): <strong className="text-emerald-400">3 cols</strong></span>
                <span>🖥️ lg (1024px+): <strong className="text-amber-400">4 cols</strong></span>
              </Row>
            </div>
          </Playground>

          <div>
            <h3 className="mb-3 text-base font-medium text-slate-200">Responsive Column Spanning (<code className="text-cyan-400">smSpan</code>, <code className="text-cyan-400">mdSpan</code>, <code className="text-cyan-400">lgSpan</code>)</h3>
            <p className="text-slate-400 text-sm mb-4">
              Individual grid items can also adjust their spans dynamically. Here, the hero card spans 12 columns on mobile and tablet, but 8 columns on desktop.
            </p>
            <Playground
              code={`<Grid cols={12} gap="md">
  <Col span={12} lgSpan={8}>
    <GridCell accent="cyan" className="min-h-[90px]">
      Hero Cell: span={12} on mobile/tablet → lgSpan={8} on desktop
    </GridCell>
  </Col>
  <Col span={12} lgSpan={4}>
    <GridCell accent="purple" className="min-h-[90px]">
      Sidebar Cell: span={12} on mobile/tablet → lgSpan={4} on desktop
    </GridCell>
  </Col>
</Grid>`}
            >
              <div className="w-full p-4">
                <Grid cols={12} gap="md">
                  <Col span={12} lgSpan={8}>
                    <GridCell accent="cyan" className="min-h-[90px]">
                      Hero Cell: span=&#123;12&#125; on mobile/tablet → lgSpan=&#123;8&#125; on desktop
                    </GridCell>
                  </Col>
                  <Col span={12} lgSpan={4}>
                    <GridCell accent="purple" className="min-h-[90px]">
                      Sidebar Cell: span=&#123;12&#125; on mobile/tablet → lgSpan=&#123;4&#125; on desktop
                    </GridCell>
                  </Col>
                </Grid>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      {/* ── Fluid Auto-Fill Grid ── */}
      <ContentSection title="Fluid Auto-Fill Grid" id="fluid-grid">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Set <code className="text-cyan-400">{'cols="auto"'}</code> with <code className="text-cyan-400">minCellWidth</code> to create a completely breakpoint-free responsive grid. The grid automatically fits as many cells as possible into each row while ensuring every cell meets the minimum width constraint.
          </p>

          <Playground
            code={`<Grid cols="auto" minCellWidth="180px" gap="md">
  <GridCell accent="cyan">Cluster Alpha</GridCell>
  <GridCell accent="purple">Cluster Beta</GridCell>
  <GridCell accent="green">Cluster Gamma</GridCell>
  <GridCell accent="amber">Cluster Delta</GridCell>
  <GridCell accent="cyan">Cluster Epsilon</GridCell>
  <GridCell accent="purple">Cluster Zeta</GridCell>
</Grid>`}
          >
            <div className="w-full p-4">
              <Grid cols="auto" minCellWidth="180px" gap="md">
                <GridCell accent="cyan">Cluster Alpha</GridCell>
                <GridCell accent="purple">Cluster Beta</GridCell>
                <GridCell accent="green">Cluster Gamma</GridCell>
                <GridCell accent="amber">Cluster Delta</GridCell>
                <GridCell accent="cyan">Cluster Epsilon</GridCell>
                <GridCell accent="purple">Cluster Zeta</GridCell>
              </Grid>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Gap Scale & Spacing ── */}
      <ContentSection title="Gap Scale & Spacing" id="gap-scale">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            All layout components (<code className="text-cyan-400">Grid</code>, <code className="text-cyan-400">Stack</code>, <code className="text-cyan-400">Row</code>) share standard Siber-UI gap spacing tokens: <code className="text-cyan-400">none</code> (0px), <code className="text-cyan-400">xs</code> (4px), <code className="text-cyan-400">sm</code> (8px), <code className="text-cyan-400">md</code> (16px), <code className="text-cyan-400">lg</code> (24px), <code className="text-cyan-400">xl</code> (32px), and <code className="text-cyan-400">2xl</code> (48px). You can also control row and column gaps separately via <code className="text-cyan-400">rowGap</code> and <code className="text-cyan-400">colGap</code>.
          </p>

          <Playground
            code={`<Stack gap="lg">
  <div>
    <span className="font-mono text-xs text-slate-400 mb-2 block">gap="xs" (4px)</span>
    <Grid cols={4} gap="xs">
      <GridCell accent="cyan">xs</GridCell>
      <GridCell accent="cyan">xs</GridCell>
      <GridCell accent="cyan">xs</GridCell>
      <GridCell accent="cyan">xs</GridCell>
    </Grid>
  </div>

  <div>
    <span className="font-mono text-xs text-slate-400 mb-2 block">gap="md" (16px)</span>
    <Grid cols={4} gap="md">
      <GridCell accent="purple">md</GridCell>
      <GridCell accent="purple">md</GridCell>
      <GridCell accent="purple">md</GridCell>
      <GridCell accent="purple">md</GridCell>
    </Grid>
  </div>

  <div>
    <span className="font-mono text-xs text-slate-400 mb-2 block">gap="xl" (32px)</span>
    <Grid cols={4} gap="xl">
      <GridCell accent="green">xl</GridCell>
      <GridCell accent="green">xl</GridCell>
      <GridCell accent="green">xl</GridCell>
      <GridCell accent="green">xl</GridCell>
    </Grid>
  </div>
</Stack>`}
          >
            <div className="w-full p-4">
              <Stack gap="lg">
                <div>
                  <span className="font-mono text-xs text-slate-400 mb-2 block">{'gap="xs" (4px)'}</span>
                  <Grid cols={4} gap="xs">
                    <GridCell accent="cyan">xs</GridCell>
                    <GridCell accent="cyan">xs</GridCell>
                    <GridCell accent="cyan">xs</GridCell>
                    <GridCell accent="cyan">xs</GridCell>
                  </Grid>
                </div>

                <div>
                  <span className="font-mono text-xs text-slate-400 mb-2 block">{'gap="md" (16px)'}</span>
                  <Grid cols={4} gap="md">
                    <GridCell accent="purple">md</GridCell>
                    <GridCell accent="purple">md</GridCell>
                    <GridCell accent="purple">md</GridCell>
                    <GridCell accent="purple">md</GridCell>
                  </Grid>
                </div>

                <div>
                  <span className="font-mono text-xs text-slate-400 mb-2 block">{'gap="xl" (32px)'}</span>
                  <Grid cols={4} gap="xl">
                    <GridCell accent="green">xl</GridCell>
                    <GridCell accent="green">xl</GridCell>
                    <GridCell accent="green">xl</GridCell>
                    <GridCell accent="green">xl</GridCell>
                  </Grid>
                </div>
              </Stack>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Stack & Row ── */}
      <ContentSection title="Stack & Row (Flexbox)" id="stack-and-row">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <code className="text-cyan-400">Stack</code> is the fundamental vertical flex container for managing consistent vertical rhythm. <code className="text-cyan-400">Row</code> is a horizontal wrapper for toolbars, inline badge groups, metadata badges, and split headers.
          </p>

          <Playground
            code={`<Grid cols={1} mdCols={2} gap="lg">
  {/* Vertical Stack */}
  <div className="p-4 rounded-xl border border-border-hairline bg-slate-900/60">
    <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-4">
      Stack (Vertical Flow)
    </span>
    <Stack gap="sm">
      <GridCell accent="cyan">Vertical Item 1</GridCell>
      <GridCell accent="cyan">Vertical Item 2</GridCell>
      <GridCell accent="cyan">Vertical Item 3</GridCell>
    </Stack>
  </div>

  {/* Horizontal Row */}
  <div className="p-4 rounded-xl border border-border-hairline bg-slate-900/60">
    <span className="font-mono text-xs text-purple-400 uppercase tracking-wider block mb-4">
      Row (Horizontal Flow)
    </span>
    <Row gap="sm">
      <GridCell accent="purple" className="flex-1">A</GridCell>
      <GridCell accent="purple" className="flex-1">B</GridCell>
      <GridCell accent="purple" className="flex-1">C</GridCell>
    </Row>
  </div>
</Grid>`}
          >
            <div className="w-full p-4">
              <Grid cols={1} mdCols={2} gap="lg">
                <div className="p-4 rounded-xl border border-border-hairline bg-slate-900/60">
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-4">
                    Stack (Vertical Flow)
                  </span>
                  <Stack gap="sm">
                    <GridCell accent="cyan">Vertical Item 1</GridCell>
                    <GridCell accent="cyan">Vertical Item 2</GridCell>
                    <GridCell accent="cyan">Vertical Item 3</GridCell>
                  </Stack>
                </div>

                <div className="p-4 rounded-xl border border-border-hairline bg-slate-900/60">
                  <span className="font-mono text-xs text-purple-400 uppercase tracking-wider block mb-4">
                    Row (Horizontal Flow)
                  </span>
                  <Row gap="sm">
                    <GridCell accent="purple" className="flex-1">A</GridCell>
                    <GridCell accent="purple" className="flex-1">B</GridCell>
                    <GridCell accent="purple" className="flex-1">C</GridCell>
                  </Row>
                </div>
              </Grid>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Alignment & Justify ── */}
      <ContentSection title="Alignment & Justify" id="alignment-and-justify">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Both <code className="text-cyan-400">Stack</code> and <code className="text-cyan-400">Row</code> support fine-grained cross-axis alignment (<code className="text-cyan-400">align</code>) and main-axis distribution (<code className="text-cyan-400">justify</code>).
          </p>

          <Playground
            code={`<Stack gap="md">
  {/* justify="between" */}
  <div>
    <span className="font-mono text-xs text-slate-400 mb-1 block">justify="between"</span>
    <Row justify="between" align="center" className="p-3 rounded-lg border border-dashed border-cyan-500/30 bg-cyan-950/20">
      <GridCell accent="cyan" className="w-24">Left</GridCell>
      <GridCell accent="cyan" className="w-24">Right</GridCell>
    </Row>
  </div>

  {/* justify="center" */}
  <div>
    <span className="font-mono text-xs text-slate-400 mb-1 block">justify="center"</span>
    <Row justify="center" gap="md" align="center" className="p-3 rounded-lg border border-dashed border-purple-500/30 bg-purple-950/20">
      <GridCell accent="purple" className="w-24">Center 1</GridCell>
      <GridCell accent="purple" className="w-24">Center 2</GridCell>
    </Row>
  </div>

  {/* justify="evenly" */}
  <div>
    <span className="font-mono text-xs text-slate-400 mb-1 block">justify="evenly"</span>
    <Row justify="evenly" align="center" className="p-3 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-950/20">
      <GridCell accent="green" className="w-20">Even 1</GridCell>
      <GridCell accent="green" className="w-20">Even 2</GridCell>
      <GridCell accent="green" className="w-20">Even 3</GridCell>
    </Row>
  </div>
</Stack>`}
          >
            <div className="w-full p-4">
              <Stack gap="md">
                <div>
                  <span className="font-mono text-xs text-slate-400 mb-1 block">{'justify="between"'}</span>
                  <Row justify="between" align="center" className="p-3 rounded-lg border border-dashed border-cyan-500/30 bg-cyan-950/20">
                    <GridCell accent="cyan" className="w-24">Left</GridCell>
                    <GridCell accent="cyan" className="w-24">Right</GridCell>
                  </Row>
                </div>

                <div>
                  <span className="font-mono text-xs text-slate-400 mb-1 block">{'justify="center"'}</span>
                  <Row justify="center" gap="md" align="center" className="p-3 rounded-lg border border-dashed border-purple-500/30 bg-purple-950/20">
                    <GridCell accent="purple" className="w-24">Center 1</GridCell>
                    <GridCell accent="purple" className="w-24">Center 2</GridCell>
                  </Row>
                </div>

                <div>
                  <span className="font-mono text-xs text-slate-400 mb-1 block">{'justify="evenly"'}</span>
                  <Row justify="evenly" align="center" className="p-3 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-950/20">
                    <GridCell accent="green" className="w-20">Even 1</GridCell>
                    <GridCell accent="green" className="w-20">Even 2</GridCell>
                    <GridCell accent="green" className="w-20">Even 3</GridCell>
                  </Row>
                </div>
              </Stack>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Divider & Spacer ── */}
      <ContentSection title="Divider & Spacer" id="divider-and-spacer">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <code className="text-cyan-400">LayoutDivider</code> creates subtle, gradient-faded horizontal or vertical separation lines. <code className="text-cyan-400">Spacer</code> acts as an auto-expanding flex element to push items apart inside any <code className="text-cyan-400">Row</code> or <code className="text-cyan-400">Stack</code>.
          </p>

          <Playground
            code={`<Card className="p-6">
  {/* Header with Spacer */}
  <Row align="center">
    <div className="flex items-center gap-2">
      <Layers className="h-5 w-5 text-cyan-400" />
      <span className="font-semibold text-white">Cluster Security Telemetry</span>
    </div>
    
    {/* Spacer pushes the badge and button to the far right */}
    <Spacer />
    
    <Row gap="sm" align="center">
      <Badge variant="neon" dot dotColor="green" size="sm">ONLINE</Badge>
      <Button variant="ghost" size="sm">Configure</Button>
    </Row>
  </Row>

  <LayoutDivider className="my-5" />

  {/* Content with vertical divider */}
  <Row align="center" justify="around">
    <Stack gap="xs" align="center">
      <span className="text-xs font-mono text-slate-400">UPTIME</span>
      <span className="text-lg font-bold font-mono text-cyan-400">99.98%</span>
    </Stack>

    <LayoutDivider orientation="vertical" className="h-10" />

    <Stack gap="xs" align="center">
      <span className="text-xs font-mono text-slate-400">LATENCY</span>
      <span className="text-lg font-bold font-mono text-emerald-400">0.42 ms</span>
    </Stack>

    <LayoutDivider orientation="vertical" className="h-10" />

    <Stack gap="xs" align="center">
      <span className="text-xs font-mono text-slate-400">THREAT LEVEL</span>
      <span className="text-lg font-bold font-mono text-purple-400">LOW</span>
    </Stack>
  </Row>
</Card>`}
          >
            <div className="w-full p-4">
              <Card className="p-6">
                <Row align="center">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-cyan-400" />
                    <span className="font-semibold text-white text-sm">Cluster Security Telemetry</span>
                  </div>

                  <Spacer />

                  <Row gap="sm" align="center">
                    <Badge variant="neon" dot dotColor="green" size="sm">ONLINE</Badge>
                    <Button variant="ghost" size="sm">Configure</Button>
                  </Row>
                </Row>

                <LayoutDivider className="my-5" />

                <Row align="center" justify="around">
                  <Stack gap="xs" align="center">
                    <span className="text-xs font-mono text-slate-400">UPTIME</span>
                    <span className="text-lg font-bold font-mono text-cyan-400">99.98%</span>
                  </Stack>

                  <LayoutDivider orientation="vertical" className="h-10" />

                  <Stack gap="xs" align="center">
                    <span className="text-xs font-mono text-slate-400">LATENCY</span>
                    <span className="text-lg font-bold font-mono text-emerald-400">0.42 ms</span>
                  </Stack>

                  <LayoutDivider orientation="vertical" className="h-10" />

                  <Stack gap="xs" align="center">
                    <span className="text-xs font-mono text-slate-400">THREAT LEVEL</span>
                    <span className="text-lg font-bold font-mono text-purple-400">LOW</span>
                  </Stack>
                </Row>
              </Card>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Real-world Dashboard Composition ── */}
      <ContentSection title="Dashboard Composition" id="dashboard-composition">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Here is a complete, real-world example illustrating how <code className="text-cyan-400">Container</code>, <code className="text-cyan-400">Grid</code>, <code className="text-cyan-400">Col</code>, <code className="text-cyan-400">Stack</code>, and <code className="text-cyan-400">Row</code> seamlessly compose to structure high-density, cyberpunk-styled dashboard pages.
          </p>

          <Playground
            code={`<Container size="xl" className="space-y-6">
  {/* Header Row */}
  <Row justify="between" align="center" wrap gap="md">
    <Stack gap="xs">
      <Row gap="sm" align="center">
        <Terminal className="h-5 w-5 text-cyan-400" />
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">SIBER / CORE / TELEMETRY</span>
      </Row>
      <h2 className="text-xl font-bold text-white tracking-tight">Quantum Node Dashboard</h2>
    </Stack>

    <Row gap="sm" align="center">
      <Badge variant="neon" dot dotColor="green">ALL SYSTEMS NORMAL</Badge>
      <Button variant="neon" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
        DEPLOY NODE
      </Button>
    </Row>
  </Row>

  {/* Stat Cards: Responsive 4-Column Grid */}
  <Grid cols={1} smCols={2} lgCols={4} gap="md">
    <Card accentLine="cyan" variant="neon">
      <CardContent className="p-4">
        <Row justify="between" align="start">
          <Stack gap="xs">
            <span className="font-mono text-[11px] text-slate-400 uppercase">Active Nodes</span>
            <span className="text-2xl font-bold font-mono text-cyan-400">12 / 16</span>
            <span className="text-[11px] text-emerald-400 font-mono">+2 online today</span>
          </Stack>
          <Server className="h-5 w-5 text-cyan-400" />
        </Row>
      </CardContent>
    </Card>

    <Card accentLine="purple">
      <CardContent className="p-4">
        <Row justify="between" align="start">
          <Stack gap="xs">
            <span className="font-mono text-[11px] text-slate-400 uppercase">Compute Load</span>
            <span className="text-2xl font-bold font-mono text-purple-400">42.8%</span>
            <span className="text-[11px] text-slate-500 font-mono">Balanced cluster</span>
          </Stack>
          <Cpu className="h-5 w-5 text-purple-400" />
        </Row>
      </CardContent>
    </Card>

    <Card accentLine="green">
      <CardContent className="p-4">
        <Row justify="between" align="start">
          <Stack gap="xs">
            <span className="font-mono text-[11px] text-slate-400 uppercase">Network Bandwidth</span>
            <span className="text-2xl font-bold font-mono text-emerald-400">9.4 TB/s</span>
            <span className="text-[11px] text-emerald-400 font-mono">99.9% throughput</span>
          </Stack>
          <Wifi className="h-5 w-5 text-emerald-400" />
        </Row>
      </CardContent>
    </Card>

    <Card accentLine="cyan">
      <CardContent className="p-4">
        <Row justify="between" align="start">
          <Stack gap="xs">
            <span className="font-mono text-[11px] text-slate-400 uppercase">Security Protocol</span>
            <span className="text-2xl font-bold font-mono text-cyan-400">ACTIVE</span>
            <span className="text-[11px] text-emerald-400 font-mono">0 breaches</span>
          </Stack>
          <ShieldCheck className="h-5 w-5 text-cyan-400" />
        </Row>
      </CardContent>
    </Card>
  </Grid>

  {/* Main 8+4 Asymmetric Grid */}
  <Grid cols={12} gap="md">
    <Col span={12} lgSpan={8}>
      <Card className="h-full">
        <CardHeader>
          <Row justify="between" align="center">
            <div>
              <CardTitle>Distributed Node Clusters</CardTitle>
              <CardDescription>Live real-time node telemetry stream</CardDescription>
            </div>
            <Badge variant="secondary" size="sm">3 Nodes</Badge>
          </Row>
        </CardHeader>
        <CardContent>
          <Stack gap="sm">
            {[
              { id: 'NODE_ALPHA_01', ip: '192.168.1.104', load: '32%', status: 'Active' },
              { id: 'NODE_BETA_02', ip: '192.168.1.105', load: '68%', status: 'Active' },
              { id: 'NODE_GAMMA_03', ip: '192.168.1.106', load: '14%', status: 'Standby' },
            ].map((node) => (
              <Row key={node.id} justify="between" align="center" className="p-3 rounded-lg bg-white/[0.02] border border-border-hairline font-mono text-xs">
                <span className="text-cyan-400 font-semibold">{node.id}</span>
                <span className="text-slate-400">{node.ip}</span>
                <span className="text-purple-400">{node.load} load</span>
                <Badge variant="neon" size="sm">{node.status}</Badge>
              </Row>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Col>

    <Col span={12} lgSpan={4}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>System Log</CardTitle>
          <CardDescription>Real-time node events</CardDescription>
        </CardHeader>
        <CardContent>
          <Stack gap="sm" className="font-mono text-xs">
            <div className="p-2.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              [21:42:01] Quantum link synced
            </div>
            <div className="p-2.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
              [21:42:15] Load rebalanced (+4%)
            </div>
            <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              [21:42:30] Security handshake OK
            </div>
          </Stack>
        </CardContent>
      </Card>
    </Col>
  </Grid>
</Container>`}
          >
            <div className="w-full p-4">
              <Container size="full" className="space-y-6">
                {/* Header Row */}
                <Row justify="between" align="center" wrap gap="md">
                  <Stack gap="xs">
                    <Row gap="sm" align="center">
                      <Terminal className="h-5 w-5 text-cyan-400" />
                      <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">SIBER / CORE / TELEMETRY</span>
                    </Row>
                    <h2 className="text-xl font-bold text-white tracking-tight">Quantum Node Dashboard</h2>
                  </Stack>

                  <Row gap="sm" align="center">
                    <Badge variant="neon" dot dotColor="green">ALL SYSTEMS NORMAL</Badge>
                    <Button variant="neon" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                      DEPLOY NODE
                    </Button>
                  </Row>
                </Row>

                {/* Stat Cards: Responsive 4-Column Grid */}
                <Grid cols={1} smCols={2} lgCols={4} gap="md">
                  <Card accentLine="cyan" variant="neon">
                    <CardContent className="p-4">
                      <Row justify="between" align="start">
                        <Stack gap="xs">
                          <span className="font-mono text-[11px] text-slate-400 uppercase">Active Nodes</span>
                          <span className="text-2xl font-bold font-mono text-cyan-400">12 / 16</span>
                          <span className="text-[11px] text-emerald-400 font-mono">+2 online today</span>
                        </Stack>
                        <Server className="h-5 w-5 text-cyan-400" />
                      </Row>
                    </CardContent>
                  </Card>

                  <Card accentLine="purple">
                    <CardContent className="p-4">
                      <Row justify="between" align="start">
                        <Stack gap="xs">
                          <span className="font-mono text-[11px] text-slate-400 uppercase">Compute Load</span>
                          <span className="text-2xl font-bold font-mono text-purple-400">42.8%</span>
                          <span className="text-[11px] text-slate-500 font-mono">Balanced cluster</span>
                        </Stack>
                        <Cpu className="h-5 w-5 text-purple-400" />
                      </Row>
                    </CardContent>
                  </Card>

                  <Card accentLine="green">
                    <CardContent className="p-4">
                      <Row justify="between" align="start">
                        <Stack gap="xs">
                          <span className="font-mono text-[11px] text-slate-400 uppercase">Network Bandwidth</span>
                          <span className="text-2xl font-bold font-mono text-emerald-400">9.4 TB/s</span>
                          <span className="text-[11px] text-emerald-400 font-mono">99.9% throughput</span>
                        </Stack>
                        <Wifi className="h-5 w-5 text-emerald-400" />
                      </Row>
                    </CardContent>
                  </Card>

                  <Card accentLine="cyan">
                    <CardContent className="p-4">
                      <Row justify="between" align="start">
                        <Stack gap="xs">
                          <span className="font-mono text-[11px] text-slate-400 uppercase">Security Protocol</span>
                          <span className="text-2xl font-bold font-mono text-cyan-400">ACTIVE</span>
                          <span className="text-[11px] text-emerald-400 font-mono">0 breaches</span>
                        </Stack>
                        <ShieldCheck className="h-5 w-5 text-cyan-400" />
                      </Row>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Main 8+4 Asymmetric Grid */}
                <Grid cols={12} gap="md">
                  <Col span={12} lgSpan={8}>
                    <Card className="h-full">
                      <CardHeader>
                        <Row justify="between" align="center">
                          <div>
                            <CardTitle>Distributed Node Clusters</CardTitle>
                            <CardDescription>Live real-time node telemetry stream</CardDescription>
                          </div>
                          <Badge variant="secondary" size="sm">3 Nodes</Badge>
                        </Row>
                      </CardHeader>
                      <CardContent>
                        <Stack gap="sm">
                          {[
                            { id: 'NODE_ALPHA_01', ip: '192.168.1.104', load: '32%', status: 'Active' },
                            { id: 'NODE_BETA_02', ip: '192.168.1.105', load: '68%', status: 'Active' },
                            { id: 'NODE_GAMMA_03', ip: '192.168.1.106', load: '14%', status: 'Standby' },
                          ].map((node) => (
                            <Row key={node.id} justify="between" align="center" className="p-3 rounded-lg bg-white/[0.02] border border-border-hairline font-mono text-xs">
                              <span className="text-cyan-400 font-semibold">{node.id}</span>
                              <span className="text-slate-400">{node.ip}</span>
                              <span className="text-purple-400">{node.load} load</span>
                              <Badge variant="neon" size="sm">{node.status}</Badge>
                            </Row>
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Col>

                  <Col span={12} lgSpan={4}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>System Log</CardTitle>
                        <CardDescription>Real-time node events</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Stack gap="sm" className="font-mono text-xs">
                          <div className="p-2.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                            [21:42:01] Quantum link synced
                          </div>
                          <div className="p-2.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                            [21:42:15] Load rebalanced (+4%)
                          </div>
                          <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                            [21:42:30] Security handshake OK
                          </div>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Col>
                </Grid>
              </Container>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="mb-2 text-base font-semibold text-cyan-300 font-mono">Container</h3>
            <p className="text-slate-400 text-sm mb-3">Props for the <code className="text-cyan-400">Container</code> component.</p>
            <ApiTable
              props={[
                {
                  property: 'size',
                  description: 'Maximum width constraint presets.',
                  type: '"sm" | "md" | "lg" | "xl" | "2xl" | "full"',
                  defaultValue: '"xl"',
                },
                {
                  property: 'className',
                  description: 'Additional Tailwind CSS classes.',
                  type: 'string',
                  defaultValue: 'undefined',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-2 text-base font-semibold text-purple-300 font-mono">Grid</h3>
            <p className="text-slate-400 text-sm mb-3">Props for the <code className="text-purple-400">Grid</code> component.</p>
            <ApiTable
              props={[
                {
                  property: 'cols',
                  description: 'Default column count (1-12) or "auto" for fluid auto-fill mode.',
                  type: 'number | "auto"',
                  defaultValue: '12',
                },
                {
                  property: 'smCols',
                  description: 'Column count at sm breakpoint (640px+).',
                  type: 'number',
                  defaultValue: 'undefined',
                },
                {
                  property: 'mdCols',
                  description: 'Column count at md breakpoint (768px+).',
                  type: 'number',
                  defaultValue: 'undefined',
                },
                {
                  property: 'lgCols',
                  description: 'Column count at lg breakpoint (1024px+).',
                  type: 'number',
                  defaultValue: 'undefined',
                },
                {
                  property: 'gap',
                  description: 'Uniform gap size between rows and columns.',
                  type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
                  defaultValue: '"md"',
                },
                {
                  property: 'rowGap',
                  description: 'Overrides row gap spacing.',
                  type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
                  defaultValue: 'undefined',
                },
                {
                  property: 'colGap',
                  description: 'Overrides column gap spacing.',
                  type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
                  defaultValue: 'undefined',
                },
                {
                  property: 'minCellWidth',
                  description: 'Minimum cell width when cols="auto".',
                  type: 'string',
                  defaultValue: '"240px"',
                },
                {
                  property: 'stretch',
                  description: 'Stretches grid items to match row height.',
                  type: 'boolean',
                  defaultValue: 'false',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-2 text-base font-semibold text-emerald-300 font-mono">Col</h3>
            <p className="text-slate-400 text-sm mb-3">Props for the <code className="text-emerald-400">Col</code> child component.</p>
            <ApiTable
              props={[
                {
                  property: 'span',
                  description: 'Number of columns to span (1-12) or "full".',
                  type: 'number | "full"',
                  defaultValue: '1',
                },
                {
                  property: 'smSpan',
                  description: 'Column span at sm breakpoint (640px+).',
                  type: 'number | "full"',
                  defaultValue: 'undefined',
                },
                {
                  property: 'mdSpan',
                  description: 'Column span at md breakpoint (768px+).',
                  type: 'number | "full"',
                  defaultValue: 'undefined',
                },
                {
                  property: 'lgSpan',
                  description: 'Column span at lg breakpoint (1024px+).',
                  type: 'number | "full"',
                  defaultValue: 'undefined',
                },
                {
                  property: 'rowSpan',
                  description: 'Number of rows to span (1-6).',
                  type: 'number',
                  defaultValue: 'undefined',
                },
                {
                  property: 'start',
                  description: 'Starting column position (col-start-N).',
                  type: 'number',
                  defaultValue: 'undefined',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-2 text-base font-semibold text-amber-300 font-mono">Stack & Row</h3>
            <p className="text-slate-400 text-sm mb-3">Props for <code className="text-amber-400">Stack</code> (vertical flex) and <code className="text-amber-400">Row</code> (horizontal flex).</p>
            <ApiTable
              props={[
                {
                  property: 'direction',
                  description: 'Flex direction (Stack only).',
                  type: '"vertical" | "horizontal"',
                  defaultValue: '"vertical"',
                },
                {
                  property: 'gap',
                  description: 'Spacing between flex items.',
                  type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
                  defaultValue: '"md"',
                },
                {
                  property: 'align',
                  description: 'Cross-axis alignment (align-items).',
                  type: '"start" | "center" | "end" | "stretch" | "baseline"',
                  defaultValue: '"stretch" (Stack) / "center" (Row)',
                },
                {
                  property: 'justify',
                  description: 'Main-axis distribution (justify-content).',
                  type: '"start" | "center" | "end" | "between" | "around" | "evenly"',
                  defaultValue: '"start"',
                },
                {
                  property: 'wrap',
                  description: 'Allows flex items to wrap onto multiple lines.',
                  type: 'boolean',
                  defaultValue: 'false',
                },
                {
                  property: 'full',
                  description: 'Sets width to 100% (w-full).',
                  type: 'boolean',
                  defaultValue: 'false',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-2 text-base font-semibold text-cyan-300 font-mono">LayoutDivider & Spacer</h3>
            <p className="text-slate-400 text-sm mb-3">Props for layout separation utilities.</p>
            <ApiTable
              props={[
                {
                  property: 'orientation',
                  description: 'Divider direction (horizontal or vertical).',
                  type: '"horizontal" | "vertical"',
                  defaultValue: '"horizontal"',
                },
                {
                  property: 'className',
                  description: 'Custom styling for divider or spacer.',
                  type: 'string',
                  defaultValue: 'undefined',
                },
              ]}
            />
          </div>
        </div>
      </ContentSection>
    </ComponentPage>
  );
}
