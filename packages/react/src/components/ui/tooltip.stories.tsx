import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TooltipProvider,
  SimpleTooltip,
} from './tooltip';
import { Button } from './button';
import { Badge } from './badge';
import { Info, Zap, AlertTriangle, Copy, Settings, Wifi } from 'lucide-react';

const meta: Meta = {
  title: 'Components/UI/Tooltip',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="p-16">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
    <SimpleTooltip label="Save your changes">
      <Button variant="outline">Hover me</Button>
    </SimpleTooltip>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <SimpleTooltip variant="neon" label="// NEURAL_LINK_ACTIVE">
      <Button variant="neon">
        <Zap className="w-4 h-4 mr-2" />
        Connect
      </Button>
    </SimpleTooltip>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// All Variants
// ─────────────────────────────────────────────────────────────────────────────
export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex items-center gap-6">
      <SimpleTooltip variant="default" label="Default tooltip">
        <Button variant="ghost" size="icon" aria-label="Info">
          <Info className="w-4 h-4 text-slate-400" />
        </Button>
      </SimpleTooltip>

      <SimpleTooltip variant="neon" label="// SYSTEM_ACTIVE">
        <Button variant="ghost" size="icon" aria-label="Network">
          <Wifi className="w-4 h-4 text-cyan-400" />
        </Button>
      </SimpleTooltip>

      <SimpleTooltip variant="neonPurple" label="Advanced settings">
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="w-4 h-4 text-purple-400" />
        </Button>
      </SimpleTooltip>

      <SimpleTooltip variant="destructive" label="Purge all data">
        <Button variant="ghost" size="icon" aria-label="Warning">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
        </Button>
      </SimpleTooltip>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Positions
// ─────────────────────────────────────────────────────────────────────────────
export const Positions: StoryObj = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 place-items-center w-64 h-48">
      <div />
      <SimpleTooltip side="top" label="Top">
        <Button variant="outline" size="sm">Top</Button>
      </SimpleTooltip>
      <div />

      <SimpleTooltip side="left" label="Left">
        <Button variant="outline" size="sm">Left</Button>
      </SimpleTooltip>
      <div />
      <SimpleTooltip side="right" label="Right">
        <Button variant="outline" size="sm">Right</Button>
      </SimpleTooltip>

      <div />
      <SimpleTooltip side="bottom" label="Bottom">
        <Button variant="outline" size="sm">Bottom</Button>
      </SimpleTooltip>
      <div />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Rich Content
// ─────────────────────────────────────────────────────────────────────────────
export const RichContent: StoryObj = {
  render: () => (
    <SimpleTooltip
      variant="neon"
      delayDuration={200}
      label={
        <div className="space-y-1.5 max-w-[200px]">
          <p className="font-mono text-cyan-300 text-[11px] uppercase tracking-wider">
            // COPY_ADDRESS
          </p>
          <p className="text-slate-300 text-[11px]">
            Copies the wallet address to your clipboard.
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <kbd className="px-1.5 py-0.5 bg-cyan-900/50 border border-cyan-500/30 rounded text-[10px] font-mono text-cyan-400">
              ⌘
            </kbd>
            <kbd className="px-1.5 py-0.5 bg-cyan-900/50 border border-cyan-500/30 rounded text-[10px] font-mono text-cyan-400">
              C
            </kbd>
          </div>
        </div>
      }
    >
      <Button variant="neon">
        <Copy className="w-4 h-4 mr-2" />
        Copy Address
      </Button>
    </SimpleTooltip>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// On Badge
// ─────────────────────────────────────────────────────────────────────────────
export const OnBadge: StoryObj = {
  render: () => (
    <div className="flex gap-4 items-center">
      <SimpleTooltip label="System is fully operational" variant="neon">
        <Badge variant="neonGreen">Online</Badge>
      </SimpleTooltip>
      <SimpleTooltip label="Awaiting clearance" variant="default">
        <Badge variant="outline">Pending</Badge>
      </SimpleTooltip>
      <SimpleTooltip label="Connection lost — retry?" variant="destructive">
        <Badge variant="destructive">Offline</Badge>
      </SimpleTooltip>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// No Arrow
// ─────────────────────────────────────────────────────────────────────────────
export const NoArrow: StoryObj = {
  render: () => (
    <SimpleTooltip label="Tooltip without arrow" showArrow={false}>
      <Button variant="primary">No Arrow</Button>
    </SimpleTooltip>
  ),
};
