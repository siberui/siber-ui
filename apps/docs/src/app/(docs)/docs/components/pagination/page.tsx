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
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  usePagination,
  Badge,
  BorderBeam,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@siberui/react';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Usage & Item Anatomy', level: 2 },
  { id: 'interactive-state', text: 'Interactive Controlled Pagination with usePagination', level: 2 },
  { id: 'neon-variant', text: 'Neon Cybernetic Paginator', level: 2 },
  { id: 'frosted-glass-pagination', text: 'Frosted Cyber-Glass Log Paginator', level: 2 },
  { id: 'tactical-hud-deck', text: 'Tactical HUD Telemetry Index Deck', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility', level: 2 },
  { id: 'best-practices', text: 'Best Practices', level: 2 },
];

export default function PaginationDocsPage() {
  const [currentPage, setCurrentPage] = React.useState(3);
  const totalPages = 10;
  const paginationRange = usePagination({ totalPages, currentPage });

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Pagination"
        description="Navigation sequence component for dividing massive telemetry logs, database rows, and node rosters into discrete, indexable pages."
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
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationPrevious, 
  PaginationNext, 
  PaginationEllipsis,
  usePagination 
} from '@siberui/react';`}
        />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Usage & Item Anatomy" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pagination organizes page links, ellipsis skips, and directional step buttons inside an accessible <code className="text-cyan-400">&lt;nav&gt;</code> landmark.
          </p>

          <Playground
            code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#prev" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#3">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#next" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#prev" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#1">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#2" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#3">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#next" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Interactive State ── */}
      <ContentSection title="Interactive Controlled Pagination with usePagination" id="interactive-state">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Use the built-in <code className="text-cyan-400">usePagination</code> hook to automatically generate page ranges and ellipses based on total page counts.
          </p>

          <Playground
            code={`const [currentPage, setCurrentPage] = React.useState(3);
const totalPages = 10;
const paginationRange = usePagination({ totalPages, currentPage });

<Pagination variant="neon">
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
        onClick={(e) => {
          e.preventDefault();
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
      />
    </PaginationItem>
    {paginationRange.map((page, idx) => (
      <PaginationItem key={idx}>
        {page === '...' ? (
          <PaginationEllipsis />
        ) : (
          <PaginationLink
            isActive={currentPage === page}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(Number(page));
            }}
          >
            {page}
          </PaginationLink>
        )}
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationNext
        onClick={(e) => {
          e.preventDefault();
          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        }}
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          >
            <div className="flex flex-col items-center gap-4 p-8 bg-[#03060d] rounded-2xl border border-white/[0.06] w-full">
              <Pagination variant="neon">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  {paginationRange.map((page, idx) => (
                    <PaginationItem key={idx}>
                      {page === '...' ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          isActive={currentPage === page}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(Number(page));
                          }}
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <span className="text-[11px] font-mono text-cyan-400">
                Viewing Epoch Frame {currentPage} of {totalPages}
              </span>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Neon Variant ── */}
      <ContentSection title="Neon Cybernetic Paginator" id="neon-variant">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pass <code className="text-cyan-400">variant=&quot;neon&quot;</code> to apply cyan laser button frames, active glow halos, and monospace digits.
          </p>

          <Playground
            code={`<Pagination variant="neon">
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#prev" /></PaginationItem>
    <PaginationItem><PaginationLink href="#1">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#2" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#3">3</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#next" /></PaginationItem>
  </PaginationContent>
</Pagination>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Pagination variant="neon">
                <PaginationContent>
                  <PaginationItem><PaginationPrevious href="#prev" /></PaginationItem>
                  <PaginationItem><PaginationLink href="#1">1</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#2" isActive>2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#3">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationNext href="#next" /></PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Frosted Cyber-Glass Log Paginator ── */}
      <ContentSection title="Frosted Cyber-Glass Log Paginator" id="frosted-glass-pagination">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite pagination bar layered over circuit textures with perimeter laser sweeps.
          </p>

          <Playground
            code={`<div className="relative w-full max-w-md p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center space-y-4">
  <span className="font-mono text-xs font-bold text-white">INCIDENT LOG PARTITIONS</span>
  <Pagination variant="neon">
    <PaginationContent>
      <PaginationItem><PaginationPrevious href="#p" /></PaginationItem>
      <PaginationItem><PaginationLink href="#1" isActive>01</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#2">02</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#3">03</PaginationLink></PaginationItem>
      <PaginationItem><PaginationNext href="#n" /></PaginationItem>
    </PaginationContent>
  </Pagination>
  <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
</div>`}
          >
            <div className="relative flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-[#060913] bg-[url('/textures/circuit-board.svg')] bg-repeat overflow-hidden shadow-2xl w-full">
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <span className="font-mono text-xs font-bold text-white">INCIDENT LOG PARTITIONS</span>
                <Pagination variant="neon">
                  <PaginationContent>
                    <PaginationItem><PaginationPrevious href="#p" /></PaginationItem>
                    <PaginationItem><PaginationLink href="#1" isActive>01</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#2">02</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#3">03</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationNext href="#n" /></PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              <BorderBeam variant="neon" size={140} duration={6} borderWidth={1.5} glow />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Tactical HUD Telemetry Index Deck ── */}
      <ContentSection title="Tactical HUD Telemetry Index Deck" id="tactical-hud-deck">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Composite mission defense card with integrated pagination controls.
          </p>

          <Playground
            code={`<Card className="max-w-md mx-auto border-cyan-500/30 bg-[#070b14] shadow-xl">
  <CardHeader className="pb-3 border-b border-white/[0.06]">
    <div className="flex items-center justify-between">
      <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">TELEMETRY FRAME INDEX</CardTitle>
      <Badge variant="neon" size="sm">BUFFERED</Badge>
    </div>
  </CardHeader>

  <CardContent className="p-6 space-y-4">
    <div className="space-y-1 font-mono text-xs text-slate-300">
      <p>&gt; Ingesting Frame Cluster 0x4B... [VALID]</p>
      <p>&gt; Packet Integrity: 100.0%</p>
    </div>

    <Pagination variant="neon">
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#p" /></PaginationItem>
        <PaginationItem><PaginationLink href="#1" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#2">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#n" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  </CardContent>
</Card>`}
          >
            <div className="flex items-center justify-center p-8 bg-[#040711] rounded-2xl border border-white/[0.06] w-full">
              <Card className="max-w-md w-full border-cyan-500/25 bg-[#070b14] shadow-xl">
                <CardHeader className="pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-wider">TELEMETRY FRAME INDEX</CardTitle>
                    <Badge variant="neon" size="sm">BUFFERED</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-1 font-mono text-xs text-slate-300">
                    <p>&gt; Ingesting Frame Cluster 0x4B... [VALID]</p>
                    <p>&gt; Packet Integrity: 100.0%</p>
                  </div>

                  <Pagination variant="neon">
                    <PaginationContent>
                      <PaginationItem><PaginationPrevious href="#p" /></PaginationItem>
                      <PaginationItem><PaginationLink href="#1" isActive>1</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink href="#2">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationNext href="#n" /></PaginationItem>
                    </PaginationContent>
                  </Pagination>
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
              description: 'Visual theme for Pagination and its links.',
              type: '"default" | "neon" | "ghost"',
              defaultValue: '"default"',
            },
            {
              property: 'isActive',
              description: 'For PaginationLink: Marks link as the active current page.',
              type: 'boolean',
              defaultValue: 'false',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>ARIA Current:</strong> Active page links receive <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-current=&quot;page&quot;</code>.
          </li>
          <li>
            <strong>Direction Labels:</strong> Step buttons contain explicit <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label=&quot;Go to previous page&quot;</code> and <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">aria-label=&quot;Go to next page&quot;</code>.
          </li>
        </ul>
      </ContentSection>

      {/* ── Best Practices ── */}
      <ContentSection title="Best Practices" id="best-practices">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Ellipsis Truncation:</strong> For datasets exceeding 7 pages, utilize <code className="text-cyan-400">usePagination</code> to prevent long horizontal overflows.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
