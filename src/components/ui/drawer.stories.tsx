import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';
import { Button } from './button';

const meta: Meta = {
  title: 'Components/UI/Drawer',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you're done.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="text-7xl font-bold tracking-tighter text-slate-100">
                120
              </div>
              <div className="text-[0.70rem] uppercase text-slate-400">
                Level
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button variant="primary">Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <Drawer variant="neon">
      <DrawerTrigger asChild>
        <Button variant="neon">Access Terminal</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>SYSTEM OVERRIDE</DrawerTitle>
            <DrawerDescription>Initiate manual control sequence. Warning: Safety protocols disabled.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
             <div className="h-32 w-full border border-cyan-500/20 bg-cyan-950/30 rounded-xl flex items-center justify-center">
                <span className="font-mono text-cyan-500 text-xs animate-pulse">Awaiting input...</span>
             </div>
          </div>
          <DrawerFooter>
            <Button variant="neon">Execute</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10">Abort</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => (
    <div className="w-[500px] h-[300px] bg-gradient-to-br from-cyan-900/40 via-slate-900 to-purple-900/40 rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden">
        {/* Background element to show blur over */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500 rounded-full blur-[60px] opacity-30" />
        
        <Drawer variant="glass">
          <DrawerTrigger asChild>
            <Button variant="outline" className="bg-white/5 backdrop-blur-md border-white/10">Open Glass Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Glass UI</DrawerTitle>
                <DrawerDescription>Observe the beautiful backdrop blur effect on this drawer component.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0 space-y-4">
                <div className="h-4 bg-white/5 rounded-full w-full" />
                <div className="h-4 bg-white/5 rounded-full w-4/5" />
                <div className="h-4 bg-white/5 rounded-full w-3/5" />
              </div>
              <DrawerFooter>
                <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">Acknowledge</Button>
                <DrawerClose asChild>
                  <Button variant="ghost">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Directions
// ─────────────────────────────────────────────────────────────────────────────
export const Directions: StoryObj = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button variant="outline">Top Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm p-4">
            <DrawerHeader>
              <DrawerTitle>Top Drawer</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 flex justify-center">Content comes from the top</div>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline">Bottom Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm p-4">
            <DrawerHeader>
              <DrawerTitle>Bottom Drawer</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 flex justify-center">Content comes from the bottom</div>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="outline">Left Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="w-full max-w-sm p-4 h-full flex flex-col">
            <DrawerHeader>
              <DrawerTitle>Left Drawer</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 flex-1">Content comes from the left (Default)</div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline">Right Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="w-full max-w-sm p-4 h-full flex flex-col">
            <DrawerHeader>
              <DrawerTitle>Right Drawer</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 flex-1">Content comes from the right</div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  ),
};

