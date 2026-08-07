import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './dropdown-menu';
import { Button } from './button';
import {
  Cloud,
  CreditCard,
  Terminal,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';
import React from 'react';

const meta: Meta = {
  title: 'Components/UI/DropdownMenu',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
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
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Terminal className="mr-2 h-4 w-4" />
          <span>Terminal</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="neon">System Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" variant="neon">
        <DropdownMenuLabel variant="neon">// NEURAL_NET_CONFIG</DropdownMenuLabel>
        <DropdownMenuSeparator variant="neon" />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="neon">
            <User className="mr-2 h-4 w-4" />
            <span>Identity</span>
            <DropdownMenuShortcut>⇧⌘I</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem variant="neon">
            <Settings className="mr-2 h-4 w-4" />
            <span>Parameters</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator variant="neon" />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger variant="neon">
            <Cloud className="mr-2 h-4 w-4" />
            <span>Nodes</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent variant="neon">
              <DropdownMenuItem variant="neon">Node Alpha</DropdownMenuItem>
              <DropdownMenuItem variant="neon">Node Beta</DropdownMenuItem>
              <DropdownMenuSeparator variant="neon" />
              <DropdownMenuItem variant="neon">Add Node...</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator variant="neon" />
        <DropdownMenuItem variant="neon">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Disconnect</span>
          <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => (
    <div className="w-96 h-64 p-8 bg-gradient-to-br from-cyan-900/40 via-slate-900 to-purple-900/40 rounded-xl flex items-center justify-center border border-white/10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-white/5 backdrop-blur-md border-white/10">
            Glass Menu
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" variant="glass">
          <DropdownMenuLabel>Glass Design</DropdownMenuLabel>
          <DropdownMenuSeparator variant="glass" />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator variant="glass" />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Checkboxes
// ─────────────────────────────────────────────────────────────────────────────
export const Checkboxes = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<boolean>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<boolean>(false);
  const [showPanel, setShowPanel] = React.useState<boolean>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Toggle View</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" variant="neon">
        <DropdownMenuLabel variant="neon">// VIEW_OPTIONS</DropdownMenuLabel>
        <DropdownMenuSeparator variant="neon" />
        <DropdownMenuCheckboxItem
          variant="neon"
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          variant="neon"
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          variant="neon"
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Radio Group
// ─────────────────────────────────────────────────────────────────────────────
export const RadioGroup = () => {
  const [position, setPosition] = React.useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Panel Position</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" variant="glass">
        <DropdownMenuLabel>Position</DropdownMenuLabel>
        <DropdownMenuSeparator variant="glass" />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
