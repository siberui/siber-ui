import type { Meta, StoryObj } from '@storybook/react';
import {
  ProjectCard,
  ProjectCardMedia,
  ProjectCardHeader,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardFooter,
} from './project-card';
import { Badge } from './badge';
import { Button } from './button';

const meta: Meta<typeof ProjectCard> = {
  title: 'Cyber/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-slate-950 text-slate-100 max-w-sm mx-auto">
      <ProjectCard status="active">
        <ProjectCardMedia>
          <div className="absolute top-3 right-3">
            <Badge variant="neon" size="sm">v1.0.2 LIVE</Badge>
          </div>
        </ProjectCardMedia>
        <ProjectCardHeader>
          <ProjectCardTitle>Siber-UI Design System</ProjectCardTitle>
          <ProjectCardDescription>
            A minimalist, cyberpunk-themed React & Next.js component library featuring dark modes and futuristic HUD elements.
          </ProjectCardDescription>
          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="outline" size="sm">React 19</Badge>
            <Badge variant="outline" size="sm">Tailwind</Badge>
            <Badge variant="outline" size="sm">Storybook</Badge>
          </div>
        </ProjectCardHeader>
        <ProjectCardFooter>
          <Button variant="ghost" size="sm">Source Code</Button>
          <Button variant="neon" size="sm">Live Demo →</Button>
        </ProjectCardFooter>
      </ProjectCard>
    </div>
  ),
};

export const Classified: Story = {
  render: () => (
    <div className="p-6 bg-slate-950 text-slate-100 max-w-sm mx-auto">
      <ProjectCard status="classified">
        <ProjectCardMedia>
          <div className="absolute top-3 right-3">
            <Badge variant="neonPurple" size="sm">CLASSIFIED</Badge>
          </div>
        </ProjectCardMedia>
        <ProjectCardHeader>
          <ProjectCardTitle>Project Neural Core</ProjectCardTitle>
          <ProjectCardDescription>
            High-frequency autonomous neural graph analysis tool built for real-time threat intelligence.
          </ProjectCardDescription>
          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="outline" size="sm">Rust</Badge>
            <Badge variant="outline" size="sm">Wasm</Badge>
          </div>
        </ProjectCardHeader>
        <ProjectCardFooter>
          <Button variant="ghost" size="sm">Access Logs</Button>
          <Button variant="neonPurple" size="sm">Decrypt →</Button>
        </ProjectCardFooter>
      </ProjectCard>
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="p-6 bg-slate-950 text-slate-100 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProjectCard status="active">
        <ProjectCardMedia>
          <div className="absolute top-3 right-3">
            <Badge variant="neon" size="sm">v1.0 LIVE</Badge>
          </div>
        </ProjectCardMedia>
        <ProjectCardHeader>
          <ProjectCardTitle>Siber-UI Kit</ProjectCardTitle>
          <ProjectCardDescription>Minimalist Cyberpunk UI framework for React.</ProjectCardDescription>
          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="outline" size="sm">React</Badge>
            <Badge variant="outline" size="sm">Tailwind</Badge>
          </div>
        </ProjectCardHeader>
        <ProjectCardFooter>
          <Button variant="neon" size="sm" className="w-full">View Project →</Button>
        </ProjectCardFooter>
      </ProjectCard>

      <ProjectCard status="classified">
        <ProjectCardMedia>
          <div className="absolute top-3 right-3">
            <Badge variant="neonPurple" size="sm">BETA</Badge>
          </div>
        </ProjectCardMedia>
        <ProjectCardHeader>
          <ProjectCardTitle>Cyber Shield CLI</ProjectCardTitle>
          <ProjectCardDescription>Terminal security auditor for monorepos.</ProjectCardDescription>
          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="outline" size="sm">Node.js</Badge>
            <Badge variant="outline" size="sm">CLI</Badge>
          </div>
        </ProjectCardHeader>
        <ProjectCardFooter>
          <Button variant="neonPurple" size="sm" className="w-full">View Project →</Button>
        </ProjectCardFooter>
      </ProjectCard>

      <ProjectCard status="archived">
        <ProjectCardMedia>
          <div className="absolute top-3 right-3">
            <Badge variant="outline" size="sm">ARCHIVED</Badge>
          </div>
        </ProjectCardMedia>
        <ProjectCardHeader>
          <ProjectCardTitle>Legacy Portal v1</ProjectCardTitle>
          <ProjectCardDescription>Deprecating static docs portal template.</ProjectCardDescription>
          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="outline" size="sm">Legacy</Badge>
          </div>
        </ProjectCardHeader>
        <ProjectCardFooter>
          <Button variant="ghost" size="sm" className="w-full">View Archive</Button>
        </ProjectCardFooter>
      </ProjectCard>
    </div>
  ),
};
