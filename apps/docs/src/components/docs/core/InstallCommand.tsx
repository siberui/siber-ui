'use client';

import { useState } from 'react';
import { cn } from '@siberui/react';
import { CopyButton } from './CopyButton';

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

const commands: Record<PackageManager, string> = {
  npm: 'npm install @siberui/react',
  pnpm: 'pnpm add @siberui/react',
  yarn: 'yarn add @siberui/react',
  bun: 'bun add @siberui/react',
};

export function InstallCommand() {
  const [activeTab, setActiveTab] = useState<PackageManager>('pnpm');

  return (
    <div className="mb-10 w-full overflow-hidden rounded-lg border border-border-hairline bg-[#121212]">
      <div className="flex border-b border-border-hairline bg-white/5 px-2">
        {(Object.keys(commands) as PackageManager[]).map((pm) => (
          <button
            key={pm}
            onClick={() => setActiveTab(pm)}
            className={cn(
              'relative px-4 py-2.5 text-xs font-mono transition-colors',
              activeTab === pm
                ? 'text-cyan-400'
                : 'text-slate-500 hover:text-slate-300'
            )}
          >
            {pm}
            {activeTab === pm && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-400" />
            )}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between p-4 text-sm font-mono text-slate-300">
        <span>
          <span className="text-slate-500 mr-2">$</span>
          {commands[activeTab]}
        </span>
        <CopyButton text={commands[activeTab]} />
      </div>
    </div>
  );
}
