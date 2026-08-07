import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from './form-field';
import { Input } from './input';
import { Textarea } from './textarea';
import { Select } from './select';
import { Checkbox } from './checkbox';
import { RadioGroup, Radio } from './radio';
import { Switch } from './switch';
import { Button } from './button';
import { Mail, Lock, User, Shield } from 'lucide-react';

const meta: Meta<typeof FormField> = {
  title: 'Components/UI/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const WithInput: Story = {
  render: () => (
    <FormField label="EMAIL ADDRESS" required helperText="We'll never share your data.">
      <Input placeholder="agent@siber.net" leftIcon={<Mail className="h-4 w-4" strokeWidth={1.5} />} />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField label="PASSWORD" required error="Minimum 12 characters required.">
      <Input type="password" leftIcon={<Lock className="h-4 w-4" strokeWidth={1.5} />} defaultValue="short" state="error" />
    </FormField>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <FormField label="MISSION BRIEFING" required helperText="Provide all operational details.">
      <Textarea placeholder="Describe the mission parameters..." maxCharacters={500} />
    </FormField>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <FormField label="DEPLOYMENT TARGET" required>
      <Select
        placeholder="Select target..."
        options={[
          { value: 'prod', label: 'Production — Live servers' },
          { value: 'staging', label: 'Staging — Test environment' },
          { value: 'dev', label: 'Development — Local' },
        ]}
        defaultValue=""
      />
    </FormField>
  ),
};

export const FullForm: Story = {
  render: () => (
    <div className="flex flex-col gap-0 p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl max-w-lg w-full">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-5 mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <Shield className="h-4 w-4 text-cyan-400" strokeWidth={1.5} />
          <h3 className="text-lg font-mono text-cyan-400 font-semibold tracking-wider">// AGENT REGISTRATION</h3>
        </div>
        <p className="text-xs text-slate-500">Create your secure identity in the neural network.</p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Name */}
        <FormField label="AGENT CODENAME" required helperText="Your unique identifier in the grid.">
          <Input
            placeholder="AGENT_SHADOW_01"
            variant="neon"
            leftIcon={<User className="h-4 w-4 text-cyan-500/60" strokeWidth={1.5} />}
          />
        </FormField>

        {/* Email */}
        <FormField label="NEURAL LINK EMAIL" required>
          <Input
            placeholder="agent@matrix.internal"
            leftIcon={<Mail className="h-4 w-4" strokeWidth={1.5} />}
          />
        </FormField>

        {/* Password */}
        <FormField label="ACCESS KEY" required helperText="Min. 12 chars, mixed case + symbols.">
          <Input
            type="password"
            placeholder="••••••••••••"
            leftIcon={<Lock className="h-4 w-4" strokeWidth={1.5} />}
          />
        </FormField>

        {/* Role */}
        <FormField label="CLEARANCE LEVEL" required>
          <Select
            placeholder="Select level..."
            options={[
              { value: '1', label: 'Level 1 — Observer' },
              { value: '2', label: 'Level 2 — Operator' },
              { value: '3', label: 'Level 3 — Commander' },
              { value: '4', label: 'Level 4 — Overseer' },
            ]}
            defaultValue=""
          />
        </FormField>

        {/* Division */}
        <RadioGroup label="DIVISION" defaultValue="cyber">
          <Radio variant="neon" radioValue="cyber" label="Cyber Operations" description="Digital warfare & defense" />
          <Radio variant="neon" radioValue="intel" label="Intelligence" description="Data analysis & surveillance" />
          <Radio variant="neon" radioValue="field" label="Field Operations" description="Physical deployment" />
        </RadioGroup>

        {/* Bio */}
        <FormField label="OPERATION NOTES">
          <Textarea
            variant="neon"
            placeholder="> Enter additional briefing data..."
            maxCharacters={300}
            textareaSize="sm"
          />
        </FormField>

        {/* Toggles */}
        <div className="border-t border-white/[0.06] pt-4 flex flex-col gap-3">
          <Switch variant="neon" label="Enable 2FA neural verification" defaultChecked />
          <Switch variant="neonGreen" label="Auto-sync with command center" />
          <Checkbox variant="neon" label="I accept the Grid Protocol Terms" description="Review the terms of engagement." />
        </div>

        {/* Submit */}
        <div className="border-t border-white/[0.06] pt-5 flex gap-3">
          <Button variant="neon" className="flex-1">REGISTER AGENT</Button>
          <Button variant="ghost">CANCEL</Button>
        </div>
      </div>
    </div>
  ),
};
