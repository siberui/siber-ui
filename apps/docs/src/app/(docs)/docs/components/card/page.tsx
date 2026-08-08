import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Input, Badge } from '@siberui/react';
import { Cpu, Gauge, HardDrive, Wifi, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function CardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Card"
        description="A stylized container for grouping related content and actions."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>System Config</CardTitle>
    <CardDescription>Adjust your firewall settings.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex flex-col space-y-2">
      <Input placeholder="IP Address..." />
    </div>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="ghost">Cancel</Button>
    <Button variant="primary">Deploy</Button>
  </CardFooter>
</Card>`}>
              <div className="flex items-center justify-center p-8">
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>System Config</CardTitle>
                    <CardDescription>Adjust your firewall settings.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <Input placeholder="IP Address..." />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="primary">Deploy</Button>
                  </CardFooter>
                </Card>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Cyber Card Showcase</h3>
            <Playground code={`<Card className="w-[400px]" accentLine="cyan" variant="neon">
  <CardHeader>
    <div className="flex items-center justify-between">
      <Badge variant="neon" dot dotColor="cyan">ACTIVE NODE</Badge>
      <span className="text-[10px] font-mono text-slate-600">ID: 0x9F41</span>
    </div>
    <CardTitle className="flex items-center gap-2.5 mt-3">
      <Cpu className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
      Quantum Core Alpha
    </CardTitle>
    <CardDescription>High throughput distributed compute module</CardDescription>
  </CardHeader>
  <CardContent className="space-y-0 font-mono text-xs">
    <div className="flex justify-between py-3 border-b border-white/[0.05]">
      <span className="text-slate-500 flex items-center gap-2">
        <Gauge className="h-3.5 w-3.5" strokeWidth={1.5} />
        Load Level
      </span>
      <span className="text-cyan-400 font-semibold">42.8%</span>
    </div>
    <div className="flex justify-between py-3 border-b border-white/[0.05]">
      <span className="text-slate-500 flex items-center gap-2">
        <HardDrive className="h-3.5 w-3.5" strokeWidth={1.5} />
        Memory Allocation
      </span>
      <span className="text-white">128 GB / 256 GB</span>
    </div>
    <div className="flex justify-between py-3 border-b border-white/[0.05]">
      <span className="text-slate-500 flex items-center gap-2">
        <Wifi className="h-3.5 w-3.5" strokeWidth={1.5} />
        Latency
      </span>
      <span className="text-white">0.3 ms</span>
    </div>
    <div className="flex justify-between py-3">
      <span className="text-slate-500 flex items-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
        Security Layer
      </span>
      <span className="text-emerald-400 font-semibold">VERIFIED</span>
    </div>
  </CardContent>
  <CardFooter className="justify-between">
    <Button variant="ghost" size="sm">DIAGNOSTICS</Button>
    <Button variant="neon" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />}>CONNECT</Button>
  </CardFooter>
</Card>`}>
              <div className="flex items-center justify-center p-8">
                <Card className="w-[400px]" accentLine="cyan" variant="neon">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="neon" dot dotColor="cyan">ACTIVE NODE</Badge>
                      <span className="text-[10px] font-mono text-slate-600">ID: 0x9F41</span>
                    </div>
                    <CardTitle className="flex items-center gap-2.5 mt-3">
                      <Cpu className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
                      Quantum Core Alpha
                    </CardTitle>
                    <CardDescription>High throughput distributed compute module</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-0 font-mono text-xs">
                    <div className="flex justify-between py-3 border-b border-white/[0.05]">
                      <span className="text-slate-500 flex items-center gap-2">
                        <Gauge className="h-3.5 w-3.5" strokeWidth={1.5} />
                        Load Level
                      </span>
                      <span className="text-cyan-400 font-semibold">42.8%</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/[0.05]">
                      <span className="text-slate-500 flex items-center gap-2">
                        <HardDrive className="h-3.5 w-3.5" strokeWidth={1.5} />
                        Memory Allocation
                      </span>
                      <span className="text-white">128 GB / 256 GB</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/[0.05]">
                      <span className="text-slate-500 flex items-center gap-2">
                        <Wifi className="h-3.5 w-3.5" strokeWidth={1.5} />
                        Latency
                      </span>
                      <span className="text-white">0.3 ms</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-slate-500 flex items-center gap-2">
                        <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
                        Security Layer
                      </span>
                      <span className="text-emerald-400 font-semibold">VERIFIED</span>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <Button variant="ghost" size="sm">DIAGNOSTICS</Button>
                    <Button variant="neon" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />}>CONNECT</Button>
                  </CardFooter>
                </Card>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Card Variants Showcase</h3>
            <Playground code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
  <Card accentLine="cyan">
    <CardHeader>
      <CardTitle>Default Glass Card</CardTitle>
      <CardDescription>Glassmorphic surface with cyan accent gradient</CardDescription>
    </CardHeader>
    <CardContent className="text-xs text-slate-400">
      Frosted glass effect with backdrop-blur and subtle white/alpha borders create premium depth perception.
    </CardContent>
  </Card>

  <Card accentLine="purple" variant="interactive">
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        Interactive Card
        <Activity className="h-4 w-4 text-purple-400" strokeWidth={1.5} />
      </CardTitle>
      <CardDescription>Hover for micro-interaction feedback</CardDescription>
    </CardHeader>
    <CardContent className="text-xs text-slate-400">
      Responds to hover with scale-[1.02] elevation, deepened shadow, and glass border intensification.
    </CardContent>
  </Card>

  <Card variant="neon" accentLine="green">
    <CardHeader>
      <div className="flex items-center justify-between">
        <Badge variant="neonGreen" dot dotColor="green" size="sm">ONLINE</Badge>
        <span className="text-[9px] font-mono text-slate-600">UPTIME: 99.97%</span>
      </div>
      <CardTitle className="mt-2">Neon Variant</CardTitle>
      <CardDescription>Soft cyan aura with ambient glow diffusion</CardDescription>
    </CardHeader>
    <CardContent className="text-xs text-slate-400">
      Multi-layered box-shadow with decreasing opacity creates atmospheric light bleed around the card edges.
    </CardContent>
  </Card>

  <Card variant="ghost">
    <CardHeader>
      <CardTitle>Ghost Card</CardTitle>
      <CardDescription>Transparent minimal surface</CardDescription>
    </CardHeader>
    <CardContent className="text-xs text-slate-400">
      Zero background opacity for embedding in complex layouts where visual layering is already present.
    </CardContent>
  </Card>
</div>`}>
              <div className="p-8 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                  <Card accentLine="cyan">
                    <CardHeader>
                      <CardTitle>Default Glass Card</CardTitle>
                      <CardDescription>Glassmorphic surface with cyan accent gradient</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-slate-400">
                      Frosted glass effect with backdrop-blur and subtle white/alpha borders create premium depth perception.
                    </CardContent>
                  </Card>

                  <Card accentLine="purple" variant="interactive">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Interactive Card
                        <Activity className="h-4 w-4 text-purple-400" strokeWidth={1.5} />
                      </CardTitle>
                      <CardDescription>Hover for micro-interaction feedback</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-slate-400">
                      Responds to hover with scale-[1.02] elevation, deepened shadow, and glass border intensification.
                    </CardContent>
                  </Card>

                  <Card variant="neon" accentLine="green">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="neonGreen" dot dotColor="green" size="sm">ONLINE</Badge>
                        <span className="text-[9px] font-mono text-slate-600">UPTIME: 99.97%</span>
                      </div>
                      <CardTitle className="mt-2">Neon Variant</CardTitle>
                      <CardDescription>Soft cyan aura with ambient glow diffusion</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-slate-400">
                      Multi-layered box-shadow with decreasing opacity creates atmospheric light bleed around the card edges.
                    </CardContent>
                  </Card>

                  <Card variant="ghost">
                    <CardHeader>
                      <CardTitle>Ghost Card</CardTitle>
                      <CardDescription>Transparent minimal surface</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-slate-400">
                      Zero background opacity for embedding in complex layouts where visual layering is already present.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant</h3>
            <Playground code={`<Card variant="neon" className="w-[350px]">
  <CardHeader>
    <CardTitle>Network Breach</CardTitle>
    <CardDescription>Immediate action required.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-slate-400">
      Multiple failed login attempts detected from unknown origin.
    </p>
  </CardContent>
</Card>`}>
              <div className="flex items-center justify-center p-8">
                <Card variant="neon" className="w-[350px]">
                  <CardHeader>
                    <CardTitle className="text-cyan-400">Network Breach</CardTitle>
                    <CardDescription>Immediate action required.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400">
                      Multiple failed login attempts detected from unknown origin.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Accent Lines</h3>
            <Playground code={`<div className="flex gap-6">
  <Card accentLine="cyan" className="w-[200px]">
    <CardHeader><CardTitle>Data Node</CardTitle></CardHeader>
  </Card>
  <Card accentLine="purple" className="w-[200px]">
    <CardHeader><CardTitle>AI Cluster</CardTitle></CardHeader>
  </Card>
  <Card accentLine="green" className="w-[200px]">
    <CardHeader><CardTitle>Secure Vault</CardTitle></CardHeader>
  </Card>
</div>`}>
              <div className="flex flex-wrap items-center justify-center gap-6 p-8">
                <Card accentLine="cyan" className="w-[200px]">
                  <CardHeader>
                    <CardTitle>Data Node</CardTitle>
                    <CardDescription>Active</CardDescription>
                  </CardHeader>
                </Card>
                <Card accentLine="purple" className="w-[200px]">
                  <CardHeader>
                    <CardTitle>AI Cluster</CardTitle>
                    <CardDescription>Processing</CardDescription>
                  </CardHeader>
                </Card>
                <Card accentLine="green" className="w-[200px]">
                  <CardHeader>
                    <CardTitle>Secure Vault</CardTitle>
                    <CardDescription>Encrypted</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'variant',
              description: 'The visual style variant.',
              type: '"default" | "neon" | "interactive" | "ghost"',
              defaultValue: '"default"',
            },
            {
              property: 'accentLine',
              description: 'Adds a glowing top border accent line.',
              type: '"none" | "cyan" | "purple" | "green"',
              defaultValue: '"none"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
