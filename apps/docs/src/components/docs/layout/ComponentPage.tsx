import React from 'react';
import { TableOfContents, TocHeading } from './TableOfContents';

interface ComponentPageProps {
  children: React.ReactNode;
  headings: TocHeading[];
}

export function ComponentPage({ children, headings }: ComponentPageProps) {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-12">
      <div className="flex-1 min-w-0">
        {children}
      </div>
      <TableOfContents headings={headings} />
    </div>
  );
}
