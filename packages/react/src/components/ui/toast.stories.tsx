import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToastProvider, useToast } from './toast';
import { Button } from './button';
import { Terminal, Zap, ShieldAlert, CheckCircle2 } from 'lucide-react';

const meta: Meta = {
  title: 'Components/UI/Toast',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────────────────────
   Trigger wrapper (needs access to useToast hook)
───────────────────────────────────────────────────────── */

function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Button
        variant="neon"
        size="sm"
        leftIcon={<Terminal className="h-4 w-4" strokeWidth={1.5} />}
        onClick={() =>
          toast({
            variant: 'info',
            title: 'SYSTEM BROADCAST',
            description: 'Scheduled maintenance begins at 02:00 UTC.',
          })
        }
      >
        Info
      </Button>

      <Button
        variant="neonGreen"
        size="sm"
        leftIcon={<CheckCircle2 className="h-4 w-4" strokeWidth={1.5} />}
        onClick={() =>
          toast({
            variant: 'success',
            title: 'NODE SYNC COMPLETE',
            description: 'All 128 nodes synchronized. Grid integrity at 100%.',
          })
        }
      >
        Success
      </Button>

      <Button
        variant="secondary"
        size="sm"
        leftIcon={<Zap className="h-4 w-4" strokeWidth={1.5} />}
        onClick={() =>
          toast({
            variant: 'warning',
            title: 'LOAD THRESHOLD NEAR',
            description: 'Core Alpha at 89% capacity.',
            duration: 6000,
          })
        }
      >
        Warning
      </Button>

      <Button
        variant="destructive"
        size="sm"
        leftIcon={<ShieldAlert className="h-4 w-4" strokeWidth={1.5} />}
        onClick={() =>
          toast({
            variant: 'destructive',
            title: 'BREACH DETECTED',
            description: 'Unauthorized access at /sys/root. Lockdown initiated.',
            duration: 8000,
          })
        }
      >
        Destructive
      </Button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Stories
───────────────────────────────────────────────────────── */

export const BottomRight: Story = {
  render: () => (
    <ToastProvider position="bottom-right">
      <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl w-full max-w-xl">
        <div className="border-b border-white/[0.06] pb-4">
          <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// TOAST NOTIFICATIONS</h3>
          <p className="text-xs text-slate-500 mt-1.5">Click a button to trigger a notification (bottom-right)</p>
        </div>
        <ToastDemo />
      </div>
    </ToastProvider>
  ),
};

export const TopCenter: Story = {
  render: () => (
    <ToastProvider position="top-center">
      <div className="flex flex-col gap-6 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl w-full max-w-xl">
        <div className="border-b border-white/[0.06] pb-4">
          <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// TOAST NOTIFICATIONS</h3>
          <p className="text-xs text-slate-500 mt-1.5">Click a button to trigger a notification (top-center)</p>
        </div>
        <ToastDemo />
      </div>
    </ToastProvider>
  ),
};

export const ShowcaseAll: Story = {
  render: () => (
    <ToastProvider position="bottom-right">
      <div className="flex flex-col gap-8 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl w-full max-w-xl">
        <div className="border-b border-white/[0.06] pb-4">
          <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// NOTIFICATION SYSTEM</h3>
          <p className="text-xs text-slate-500 mt-1.5">
            Toasts stack in bottom-right · auto-dismiss with progress bar · stackable up to 5
          </p>
        </div>

        <ToastDemo />

        <div className="border-t border-white/[0.06] pt-5 space-y-3">
          <span className="text-[11px] font-mono text-slate-600 uppercase tracking-widest">// Features</span>
          <ul className="grid grid-cols-2 gap-2">
            {[
              'Glassmorphism glass surface',
              'Soft aura glow per variant',
              'Gradient accent top line',
              'Auto-dismiss progress bar',
              'Enter/exit animations',
              '6 configurable positions',
              'Stackable up to N toasts',
              'Dismiss on X click',
            ].map((f) => (
              <li key={f} className="flex items-start gap-1.5 text-[12px] text-slate-400 font-mono">
                <span className="text-cyan-500/60 mt-px">›</span> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToastProvider>
  ),
};
