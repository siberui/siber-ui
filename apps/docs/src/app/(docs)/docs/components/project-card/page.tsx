import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { 
  ProjectCard,
  ProjectCardMedia,
  ProjectCardHeader,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardFooter,
  Button,
  Badge
} from '@siberui/react';
import { Terminal, ExternalLink, Activity } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ProjectCardDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Project Card"
        description="A stylized card with a chamfered tech border, designed specifically for showcasing portfolio projects."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<ProjectCard className="max-w-sm">
  <ProjectCardMedia />
  <ProjectCardHeader>
    <div className="flex gap-2 mb-2">
      <Badge variant="neon" dot dotColor="cyan">ACTIVE</Badge>
      <Badge variant="outline">Next.js</Badge>
    </div>
    <ProjectCardTitle>Nexus Protocol</ProjectCardTitle>
    <ProjectCardDescription>
      A decentralized autonomous network infrastructure built for 
      high-frequency trading and secure asset transfer.
    </ProjectCardDescription>
  </ProjectCardHeader>
  <ProjectCardFooter>
    <Button variant="ghost" size="sm" leftIcon={<Terminal className="w-3.5 h-3.5" />}>
      CODE
    </Button>
    <Button variant="neon" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
      VIEW LIVE
    </Button>
  </ProjectCardFooter>
</ProjectCard>`}>
              <div className="flex items-center justify-center p-8 w-full">
                <ProjectCard className="w-full max-w-sm">
                  <ProjectCardMedia />
                  <ProjectCardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="neon" dot dotColor="cyan">ACTIVE</Badge>
                      <Badge variant="outline" className="text-[10px]">Next.js</Badge>
                      <Badge variant="outline" className="text-[10px]">TypeScript</Badge>
                    </div>
                    <ProjectCardTitle>Nexus Protocol</ProjectCardTitle>
                    <ProjectCardDescription>
                      A decentralized autonomous network infrastructure built for 
                      high-frequency trading and secure asset transfer.
                    </ProjectCardDescription>
                  </ProjectCardHeader>
                  <ProjectCardFooter>
                    <Button variant="ghost" size="sm" leftIcon={<Terminal className="w-3.5 h-3.5" />}>
                      CODE
                    </Button>
                    <Button variant="neon" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                      VIEW LIVE
                    </Button>
                  </ProjectCardFooter>
                </ProjectCard>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Statuses</h3>
            <Playground code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <ProjectCard status="active">
    <ProjectCardHeader>
      <ProjectCardTitle>Active Node</ProjectCardTitle>
      <ProjectCardDescription>Cyan hover state for active projects.</ProjectCardDescription>
    </ProjectCardHeader>
  </ProjectCard>

  <ProjectCard status="classified">
    <ProjectCardHeader>
      <ProjectCardTitle>Project X</ProjectCardTitle>
      <ProjectCardDescription>Purple hover state for classified projects.</ProjectCardDescription>
    </ProjectCardHeader>
  </ProjectCard>

  <ProjectCard status="archived">
    <ProjectCardHeader>
      <ProjectCardTitle>Legacy System</ProjectCardTitle>
      <ProjectCardDescription>Slate hover state for archived projects.</ProjectCardDescription>
    </ProjectCardHeader>
  </ProjectCard>
</div>`}>
              <div className="p-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ProjectCard status="active">
                    <ProjectCardHeader>
                      <ProjectCardTitle>Active Node</ProjectCardTitle>
                      <ProjectCardDescription>Cyan hover state for active projects.</ProjectCardDescription>
                    </ProjectCardHeader>
                  </ProjectCard>

                  <ProjectCard status="classified">
                    <ProjectCardHeader>
                      <ProjectCardTitle>Project X</ProjectCardTitle>
                      <ProjectCardDescription>Purple hover state for classified projects.</ProjectCardDescription>
                    </ProjectCardHeader>
                  </ProjectCard>

                  <ProjectCard status="archived">
                    <ProjectCardHeader>
                      <ProjectCardTitle>Legacy System</ProjectCardTitle>
                      <ProjectCardDescription>Slate hover state for archived projects.</ProjectCardDescription>
                    </ProjectCardHeader>
                  </ProjectCard>
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-lg font-medium text-slate-200 mb-4">ProjectCard</h3>
        <ApiTable
          props={[
            {
              property: 'status',
              description: 'Changes the hover border glow color.',
              type: '"active" | "archived" | "classified"',
              defaultValue: '"active"',
            },
          ]}
        />
        
        <h3 className="text-lg font-medium text-slate-200 mb-4 mt-8">ProjectCardMedia</h3>
        <ApiTable
          props={[
            {
              property: 'src',
              description: 'The image URL for the project thumbnail.',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'alt',
              description: 'Alt text for the project image.',
              type: 'string',
              defaultValue: '"Project Preview"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
