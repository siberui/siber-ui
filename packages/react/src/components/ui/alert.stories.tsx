import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'destructive'],
    },
    closable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'SYSTEM BROADCAST',
    children: 'Scheduled maintenance window begins at 02:00 UTC. Expect 15-minute downtime.',
    closable: false,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'NODE SYNC COMPLETE',
    children: 'All 128 nodes have been synchronized. Grid integrity verified at 100%.',
    closable: true,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'LOAD THRESHOLD NEAR',
    children: 'Core Alpha is operating at 89% capacity. Consider redistributing workload.',
    closable: true,
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'BREACH DETECTED',
    children: 'Unauthorized access attempt identified at endpoint /sys/root. Protocol lockdown initiated.',
    closable: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-[520px] w-full p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl">
      <div className="border-b border-white/[0.06] pb-4 mb-1">
        <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// ALERT SPECTRUM</h3>
        <p className="text-xs text-slate-500 mt-1.5">System status & inline feedback messages</p>
      </div>

      <Alert
        variant="info"
        title="SYSTEM BROADCAST"
      >
        Scheduled maintenance window begins at 02:00 UTC. Expect 15-minute downtime.
      </Alert>

      <Alert
        variant="success"
        title="NODE SYNC COMPLETE"
        closable
        onClose={() => {}}
      >
        All 128 nodes have been synchronized. Grid integrity verified at 100%.
      </Alert>

      <Alert
        variant="warning"
        title="LOAD THRESHOLD NEAR"
        closable
        onClose={() => {}}
      >
        Core Alpha is operating at 89% capacity. Consider redistributing workload.
      </Alert>

      <Alert
        variant="destructive"
        title="BREACH DETECTED"
        closable
        onClose={() => {}}
      >
        Unauthorized access attempt at <span className="font-mono text-rose-300 text-[12px]">/sys/root</span>. Lockdown initiated.
      </Alert>

      <div className="border-t border-white/[0.06] pt-4">
        <p className="text-[11px] font-mono text-slate-600 uppercase tracking-widest">// Title-only & description-only</p>
        <div className="flex flex-col gap-3 mt-3">
          <Alert variant="info" title="PING — Grid latency nominal." />
          <Alert variant="success">
            Deployment to <span className="font-mono text-emerald-300 text-[12px]">prod-cluster-v3</span> completed in 4.2s.
          </Alert>
        </div>
      </div>
    </div>
  ),
};
