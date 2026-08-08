import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from './dialog';
import { Button } from './button';
import { Input } from './input';
import { FormField } from './form-field';

const meta: Meta<typeof Dialog> = {
  title: 'Components/UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormField label="CODENAME">
            <Input defaultValue="Cipher" />
          </FormField>
          <FormField label="CLEARANCE">
            <Input defaultValue="Level 4" disabled />
          </FormField>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="primary">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const NeonCyber: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="neon">SYSTEM OVERRIDE</Button>
      </DialogTrigger>
      <DialogContent variant="neon" className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-cyan-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            // SYSTEM OVERRIDE INITIATED
          </DialogTitle>
          <DialogDescription className="text-cyan-600/80 font-mono text-xs">
            WARNING: Unauthorized access detected. Root privileges required.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormField label="OVERRIDE KEY" required>
            <Input variant="neon" type="password" placeholder="ENTER 16-BIT HEX..." />
          </FormField>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" className="text-cyan-500 hover:text-cyan-400">ABORT</Button>
          </DialogClose>
          <Button variant="neon">EXECUTE</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Purge Database</Button>
      </DialogTrigger>
      <DialogContent variant="destructive" className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-rose-400 font-mono">CRITICAL ACTION</DialogTitle>
          <DialogDescription className="text-rose-400/80">
            This action cannot be undone. This will permanently delete all logs
            and sever all active neural connections.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">CONFIRM PURGE</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
