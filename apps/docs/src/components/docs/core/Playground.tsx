import React from 'react';
import { CodeBlock } from './CodeBlock';

interface PlaygroundProps {
  children: React.ReactNode;
  code: string;
  language?: string;
  title?: string;
}

export function Playground({ children, code, language = 'tsx', title }: PlaygroundProps) {
  return (
    <div className="my-8 flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#06090e]">
      {title && (
        <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
          <h3 className="text-sm font-medium text-slate-200">{title}</h3>
        </div>
      )}
      
      {/* Preview Area */}
      <div className="relative flex min-h-[250px] w-full items-center justify-center p-8 bg-black/40">
        {/* Subtle grid background for the playground */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-3xl flex justify-center">
          {children}
        </div>
      </div>

      {/* Code Area */}
      <div className="border-t border-white/10">
        {/* We reuse CodeBlock which has its own header and copy button. 
            We pass a class to remove its outer border and rounding to fit flush. */}
        <CodeBlock 
          code={code} 
          language={language} 
          className="border-none rounded-none bg-transparent"
        />
      </div>
    </div>
  );
}
