'use client';

import * as React from 'react';
import { codeToHtml } from 'shiki';
import { CopyButton } from './CopyButton';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const htmlCache = new Map<string, string>();

export function CodeBlock({ code, language = 'tsx', className }: CodeBlockProps) {
  const cacheKey = `${language}:${code}`;
  const [html, setHtml] = React.useState<string | null>(() => htmlCache.get(cacheKey) ?? null);

  React.useEffect(() => {
    if (htmlCache.has(cacheKey)) {
      return;
    }

    let isMounted = true;
    codeToHtml(code, {
      lang: language,
      theme: 'vitesse-dark',
    })
      .then((highlighted) => {
        htmlCache.set(cacheKey, highlighted);
        if (isMounted) {
          setHtml(highlighted);
        }
      })
      .catch((err) => {
        console.error('Shiki highlight error:', err);
      });

    return () => {
      isMounted = false;
    };
  }, [code, language, cacheKey]);

  return (
    <div className={`relative group rounded-lg overflow-hidden border border-border-hairline bg-[#121212] ${className || ''}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-border-hairline">
        <span className="text-xs font-mono text-slate-400">{language}</span>
        <CopyButton text={code} />
      </div>
      <div className="p-4 overflow-x-auto text-sm font-mono [&>pre]:!bg-transparent [&>pre]:!m-0">
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre className="!bg-transparent !m-0 text-slate-300">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
