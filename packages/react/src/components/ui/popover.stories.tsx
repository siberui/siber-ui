import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverFooter,
} from './popover';
import { Button } from './button';
import { Input } from './input';
import { Settings, Info } from 'lucide-react';

const meta: Meta = {
  title: 'Components/Data/Popover',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-[400px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" sideOffset={8}>
        <PopoverHeader>
          <h4 className="font-medium text-white leading-none">Dimensions</h4>
          <p className="text-sm text-slate-400 mt-1">
            Set the dimensions for the layer.
          </p>
        </PopoverHeader>
        <div className="p-4 grid gap-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="width" className="text-sm text-slate-400">Width</label>
            <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="maxWidth" className="text-sm text-slate-400">Max. width</label>
            <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
          </div>
        </div>
        <PopoverFooter>
          <Button size="sm" className="w-full">Save Changes</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <div className="bg-[#050d14] p-12 rounded-2xl flex items-center justify-center">
      <Popover variant="neon">
        <PopoverTrigger asChild>
          <Button variant="neon">
            <Settings className="w-4 h-4 mr-2" />
            SYSTEM_CONFIG
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" sideOffset={8} side="right">
          <PopoverHeader>
            <h4 className="font-mono text-cyan-300 tracking-widest text-sm">// NETWORK_PARAMS</h4>
            <p className="text-xs text-cyan-500/60 font-mono mt-1">Adjust core router settings</p>
          </PopoverHeader>
          <div className="p-4 grid gap-4 font-mono text-sm">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="port" className="text-cyan-400/80">PORT</label>
              <Input id="port" defaultValue="8080" variant="neon" className="col-span-2 h-8 text-xs" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="ip" className="text-cyan-400/80">IP_ADDR</label>
              <Input id="ip" defaultValue="192.168.1.1" variant="neon" className="col-span-2 h-8 text-xs" />
            </div>
          </div>
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => (
    <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-16 rounded-2xl flex items-center justify-center">
      <Popover variant="glass">
        <PopoverTrigger asChild>
          <Button variant="secondary">
            <Info className="w-4 h-4 mr-2" />
            Details
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72" sideOffset={12}>
          <div className="p-4 space-y-2">
            <h4 className="font-semibold text-white">Glassmorphism</h4>
            <p className="text-sm text-slate-300">
              This popover uses a frosted glass effect that blends beautifully with vibrant backgrounds.
            </p>
          </div>
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    </div>
  ),
};
