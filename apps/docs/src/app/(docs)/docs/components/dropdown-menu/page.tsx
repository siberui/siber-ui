import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, Button, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from '@siberui/react';
import { Settings, User, LogOut, Terminal } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function DropdownMenuDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Dropdown Menu"
        description="Displays a menu to the user—such as a set of actions or functions—triggered by a button."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-rose-400 focus:text-rose-300 focus:bg-rose-500/10">
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}>
              <div className="flex items-center justify-center p-8 h-64">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-rose-400 focus:text-rose-300 focus:bg-rose-500/10">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<DropdownMenuContent variant="neon">
  <DropdownMenuLabel variant="neon">SYSTEM</DropdownMenuLabel>
  <DropdownMenuSeparator variant="neon" />
  <DropdownMenuItem variant="neon">Start Core</DropdownMenuItem>
  <DropdownMenuSub>
    <DropdownMenuSubTrigger variant="neon">Modules</DropdownMenuSubTrigger>
    <DropdownMenuSubContent variant="neon">
      <DropdownMenuItem variant="neon">Alpha</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuSub>
</DropdownMenuContent>`}>
              <div className="flex items-center justify-center p-8 bg-slate-900/30 rounded-xl h-64 border border-white/5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="neon"><Terminal className="mr-2 w-4 h-4" /> Action</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent variant="neon" className="w-48">
                    <DropdownMenuLabel variant="neon">SYSTEM</DropdownMenuLabel>
                    <DropdownMenuSeparator variant="neon" />
                    <DropdownMenuItem variant="neon">Start Core</DropdownMenuItem>
                    <DropdownMenuItem variant="neon">Stop Core</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger variant="neon">Modules</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent variant="neon">
                        <DropdownMenuItem variant="neon">Alpha</DropdownMenuItem>
                        <DropdownMenuItem variant="neon">Beta</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            { property: 'variant', description: 'Visual style for Content, Item, Label, Separator, etc.', type: '"default" | "neon" | "glass"' },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
