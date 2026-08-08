import React from 'react';
import { codeToHtml } from 'shiki';
import { CopyButton } from './CopyButton';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export async function CodeBlock({ code, language = 'tsx', className }: CodeBlockProps) {
  // We use the "vitesse-dark" or "github-dark" theme which looks good with our dark mode.
  const html = await codeToHtml(code, {
    lang: language,
    theme: 'vitesse-dark',
  });

  return (
    <div className={`relative group rounded-lg overflow-hidden border border-white/10 bg-[#121212] ${className || ''}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <span className="text-xs font-mono text-slate-400">{language}</span>
        <CopyButton text={code} />
      </div>
      <div 
        className="p-4 overflow-x-auto text-sm font-mono [&>pre]:!bg-transparent [&>pre]:!m-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
