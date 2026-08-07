import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion';
import { Badge } from './badge';
import { Cpu, Terminal, Database } from 'lucide-react';

const meta: Meta = {
  title: 'Components/UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is Siber-UI accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to WAI-ARIA design patterns and uses Radix UI primitives under the hood.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled with Tailwind CSS?</AccordionTrigger>
        <AccordionContent>
          Yes, all components are built using Tailwind CSS utility classes and custom cyber design tokens.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize neon color themes?</AccordionTrigger>
        <AccordionContent>
          Absolutely. All colors map to CSS variables that can be overridden globally or per component.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <Accordion variant="neon" type="single" collapsible defaultValue="item-1" className="w-[480px]">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>// SYSTEM_PROTOCOL_01</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p>Neural core status: ONLINE</p>
            <p>Firewall status: ACTIVE [ENCRYPTION LEVEL 256-BIT]</p>
            <p className="text-cyan-400">// Sub-routine initializations completed cleanly.</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>// MAINFRAME_ACCESS</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p>Target Node: grid-prime.siber.net</p>
            <p>Access level: ROOT_ADMIN</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-400" />
            <span>// STORAGE_CLUSTER</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p>Total capacity: 1024 TB</p>
            <p>Available sectors: 742 TB</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Bordered
// ─────────────────────────────────────────────────────────────────────────────
export const Bordered: StoryObj = {
  render: () => (
    <Accordion variant="bordered" type="single" collapsible defaultValue="item-1" className="w-[480px]">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center justify-between">
          <span className="font-semibold text-slate-200">Security Clearance</span>
          <Badge variant="neonGreen" className="mr-2">LEVEL 5</Badge>
        </AccordionTrigger>
        <AccordionContent>
          Agents holding Level 5 clearance are granted full read/write access to top-secret subnets and neural bridge controls.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-center justify-between">
          <span className="font-semibold text-slate-200">Threat Response</span>
          <Badge variant="destructive" className="mr-2">CRITICAL</Badge>
        </AccordionTrigger>
        <AccordionContent>
          In the event of a breach, all local subnets automatically isolate and trigger EMP countermeasures.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="flex items-center justify-between">
          <span className="font-semibold text-slate-200">System Diagnostics</span>
          <Badge variant="outline" className="mr-2">IDLE</Badge>
        </AccordionTrigger>
        <AccordionContent>
          Automated diagnostic routines run every 60 seconds across all active nodes.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Glass
// ─────────────────────────────────────────────────────────────────────────────
export const Glass: StoryObj = {
  render: () => (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-950 to-purple-950/30 border border-white/10 w-[500px]">
      <Accordion variant="glass" type="multiple" defaultValue={['item-1']} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Frosted Glass Panel A</AccordionTrigger>
          <AccordionContent>
            Glassmorphic styling with smooth backdrop-blur and subtle white borders.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Frosted Glass Panel B</AccordionTrigger>
          <AccordionContent>
            Supports opening multiple panels simultaneously using `type="multiple"`.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
