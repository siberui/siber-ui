'use client';

import { useEffect, useState } from 'react';
import { cn } from '@siberui/react';

export type TocHeading = {
  id: string;
  text: string;
  level: number;
};

interface TableOfContentsProps {
  headings?: TocHeading[];
}

export function TableOfContents({ headings = [] }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block w-64 shrink-0 pb-10">
      <div className="sticky top-14 pt-8">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          On this page
        </h4>
        <ul className="flex flex-col gap-2 border-l border-border-hairline pl-3">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
              >
                <a
                  href={`#${heading.id}`}
                  className={cn(
                    'block text-sm transition-colors',
                    isActive
                      ? 'text-cyan-400 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  )}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
