import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from '@siberui/react';
import { Settings, User, Terminal, CreditCard } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function CommandDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Command"
        description="Fast, composable, unstyled command menu for React. Wraps cmdk."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Command className="rounded-lg border border-border-hairline shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem><User className="mr-2 h-4 w-4" /> Profile</CommandItem>
      <CommandItem><CreditCard className="mr-2 h-4 w-4" /> Billing</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem><Settings className="mr-2 h-4 w-4" /> Settings <CommandShortcut>⌘S</CommandShortcut></CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}>
              <div className="flex items-center justify-center p-8">
                <Command className="max-w-[400px] h-[350px]">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem><User className="mr-2 h-4 w-4" /> Profile</CommandItem>
                      <CommandItem><CreditCard className="mr-2 h-4 w-4" /> Billing</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem><Settings className="mr-2 h-4 w-4" /> Settings <CommandShortcut>⌘S</CommandShortcut></CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Command variant="neon">...</Command>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl border border-border-hairline">
                <Command variant="neon" className="max-w-[400px] h-[350px]">
                  <CommandInput placeholder="Search modules..." />
                  <CommandList>
                    <CommandEmpty>No module matched.</CommandEmpty>
                    <CommandGroup heading="CORE MODULES">
                      <CommandItem><Terminal className="mr-2 h-4 w-4 text-cyan-500" /> init_sequence</CommandItem>
                      <CommandItem><Terminal className="mr-2 h-4 w-4 text-cyan-500" /> bypass_firewall</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="SYSTEM">
                      <CommandItem><Settings className="mr-2 h-4 w-4 text-cyan-500" /> configuration <CommandShortcut>sys.cfg</CommandShortcut></CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style for the command menu.', type: '"default" | "neon" | "glass"' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
