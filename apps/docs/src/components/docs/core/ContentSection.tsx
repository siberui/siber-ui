import React from 'react';
import { cn } from '@siberui/react';

interface ContentSectionProps {
  title: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({ title, id, children, className }: ContentSectionProps) {
  return (
    <section id={id} className={cn('mt-16 first:mt-0', className)}>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-100 border-b border-white/10 pb-4">
        {title}
      </h2>
      <div className="space-y-4 text-slate-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
