import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardHeader, CardTitle, CardContent } from '@siberui/react';
import { Activity, Shield, Terminal } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TabsDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Tabs"
        description="A set of layered sections of content, displaying one panel of content at a time."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Default</h3>
            <Playground code={`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card><CardHeader><CardTitle>Account Details</CardTitle></CardHeader></Card>
  </TabsContent>
  <TabsContent value="password">
    <Card><CardHeader><CardTitle>Security Settings</CardTitle></CardHeader></Card>
  </TabsContent>
</Tabs>`}>
              <div className="flex items-center justify-center p-8">
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <Card><CardHeader><CardTitle>Account Details</CardTitle></CardHeader><CardContent className="text-sm text-slate-400">Make changes to your account here.</CardContent></Card>
                  </TabsContent>
                  <TabsContent value="password">
                    <Card><CardHeader><CardTitle>Security Settings</CardTitle></CardHeader><CardContent className="text-sm text-slate-400">Update your encryption keys.</CardContent></Card>
                  </TabsContent>
                </Tabs>
              </div>
            </Playground>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Neon Variant with Icons</h3>
            <Playground code={`<Tabs variant="neon" defaultValue="system" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="system"><Terminal className="w-4 h-4 mr-2"/>Sys</TabsTrigger>
    <TabsTrigger value="network"><Activity className="w-4 h-4 mr-2"/>Net</TabsTrigger>
    <TabsTrigger value="security"><Shield className="w-4 h-4 mr-2"/>Sec</TabsTrigger>
  </TabsList>
  <TabsContent value="system">...</TabsContent>
</Tabs>`}>
              <div className="flex items-center justify-center p-8">
                <Tabs variant="neon" defaultValue="system" className="w-[500px]">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="system"><Terminal className="w-4 h-4 mr-2"/>System</TabsTrigger>
                    <TabsTrigger value="network"><Activity className="w-4 h-4 mr-2"/>Network</TabsTrigger>
                    <TabsTrigger value="security"><Shield className="w-4 h-4 mr-2"/>Security</TabsTrigger>
                  </TabsList>
                  <TabsContent value="system">
                    <Card variant="neon"><CardHeader><CardTitle className="text-cyan-400">System Core</CardTitle></CardHeader></Card>
                  </TabsContent>
                  <TabsContent value="network">
                    <Card variant="neon"><CardHeader><CardTitle className="text-cyan-400">Network Nodes</CardTitle></CardHeader></Card>
                  </TabsContent>
                  <TabsContent value="security">
                    <Card variant="neon"><CardHeader><CardTitle className="text-cyan-400">Active Firewalls</CardTitle></CardHeader></Card>
                  </TabsContent>
                </Tabs>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Underline Variant</h3>
            <Playground code={`<Tabs variant="underline" defaultValue="tab1" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">...</TabsContent>
</Tabs>`}>
              <div className="flex items-center justify-center p-8">
                <Tabs variant="underline" defaultValue="tab1" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger value="tab1">Overview</TabsTrigger>
                    <TabsTrigger value="tab2">Analytics</TabsTrigger>
                    <TabsTrigger value="tab3" disabled>Logs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <div className="p-4 text-sm text-slate-400 border border-border-hairline bg-white/[0.02] mt-4">Overview Content</div>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <div className="p-4 text-sm text-slate-400 border border-border-hairline bg-white/[0.02] mt-4">Analytics Content</div>
                  </TabsContent>
                </Tabs>
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
              description: 'Visual style for the tabs.',
              type: '"default" | "neon" | "ghost" | "underline"',
              defaultValue: '"default"',
            },
            {
              property: 'defaultValue',
              description: 'The value of the tab that should be active when initially rendered.',
              type: 'string',
            },
            {
              property: 'value',
              description: 'The controlled value of the tab to activate.',
              type: 'string',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
