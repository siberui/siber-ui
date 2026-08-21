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
    <div className="my-8 flex flex-col overflow-hidden rounded-xl border border-border-hairline bg-[#06090e]">
      {title && (
        <div className="flex items-center px-4 py-3 border-b border-border-hairline bg-white/5">
          <h3 className="text-sm font-medium text-slate-200">{title}</h3>
        </div>
      )}
      
      {/* Preview Area */}
      <div className="relative flex min-h-[180px] sm:min-h-[250px] w-full items-center justify-center p-3 sm:p-8 bg-[#04060b] overflow-x-auto">
        <div className="relative z-10 w-full max-w-3xl flex justify-center min-w-0">
          {children}
        </div>
      </div>

      {/* Code Area */}
      <div className="border-t border-border-hairline">
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
