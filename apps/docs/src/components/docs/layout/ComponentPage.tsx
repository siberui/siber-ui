'use client';

import React, { useState } from 'react';
import { TableOfContents, TocHeading } from './TableOfContents';
import { ChevronDown, ListOrdered } from 'lucide-react';
import { cn } from '@siberui/react';

interface ComponentPageProps {
  children: React.ReactNode;
  headings: TocHeading[];
}

export function ComponentPage({ children, headings }: ComponentPageProps) {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row xl:gap-12">
      <div className="flex-1 min-w-0">
        {/* Mobile & Tablet Quick Jump Table of Contents */}
        {headings && headings.length > 0 && (
          <div className="mb-6 xl:hidden rounded-lg border border-border-hairline bg-[#060913]/90 overflow-hidden shadow-lg backdrop-blur-md">
            <button
              type="button"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="flex w-full items-center justify-between px-4 py-2.5 text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 transition-colors"
              aria-expanded={mobileTocOpen}
            >
              <div className="flex items-center gap-2">
                <ListOrdered className="h-3.5 w-3.5 text-cyan-400" />
                <span className="tracking-wider uppercase text-[11px] text-slate-400">On this page</span>
                <span className="rounded bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.2 text-[10px] text-cyan-300 font-mono">
                  {headings.length}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  'h-4 w-4 text-slate-400 transition-transform duration-200',
                  mobileTocOpen && 'rotate-180 text-cyan-400'
                )}
              />
            </button>

            {mobileTocOpen && (
              <div className="border-t border-white/[0.06] px-4 py-3 bg-black/40">
                <ul className="flex flex-col gap-1.5">
                  {headings.map((heading) => (
                    <li
                      key={heading.id}
                      style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
                    >
                      <a
                        href={`#${heading.id}`}
                        onClick={() => setMobileTocOpen(false)}
                        className="block text-xs text-slate-400 hover:text-cyan-300 transition-colors py-0.5"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {children}
      </div>
      <TableOfContents headings={headings} />
    </div>
  );
}
