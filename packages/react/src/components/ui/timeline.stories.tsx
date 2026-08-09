import type { Meta, StoryObj } from '@storybook/react';
import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineSubtitle,
  TimelinePeriod,
  TimelineContent,
} from './timeline';
import { Badge } from './badge';

const meta: Meta<typeof Timeline> = {
  title: 'Cyber/Timeline',
  component: Timeline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-slate-950 text-slate-100 max-w-2xl mx-auto rounded-xl">
      <Timeline variant="neon">
        <TimelineItem status="active">
          <TimelineHeader>
            <div>
              <TimelineTitle>Senior Lead Frontend Engineer</TimelineTitle>
              <TimelineSubtitle>CyberCorp Systems // Istanbul</TimelineSubtitle>
            </div>
            <TimelinePeriod>2024.03 — PRESENT</TimelinePeriod>
          </TimelineHeader>
          <TimelineContent>
            Leading the migration to a modern Cyberpunk Design System using Next.js 16, Vite, and Tailwind CSS. Architects high-frequency real-time dashboard modules.
          </TimelineContent>
          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="neon" size="sm">React 19</Badge>
            <Badge variant="destructive" size="sm">TypeScript</Badge>
            <Badge variant="outline" size="sm">Tailwind v4</Badge>

          </div>

        </TimelineItem>

        <TimelineItem status="completed">
          <TimelineHeader>
            <div>
              <TimelineTitle>Fullstack Software Developer</TimelineTitle>
              <TimelineSubtitle>SiberTech Labs</TimelineSubtitle>
            </div>
            <TimelinePeriod>2022.06 — 2024.02</TimelinePeriod>
          </TimelineHeader>
          <TimelineContent>
            Developed scalable microservices and security analytics UI for cloud posture security management.
          </TimelineContent>
          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="outline" size="sm">Node.js</Badge>
            <Badge variant="outline" size="sm">GraphQL</Badge>
            <Badge variant="outline" size="sm">Docker</Badge>
          </div>
        </TimelineItem>

        <TimelineItem status="archived">
          <TimelineHeader>
            <div>
              <TimelineTitle>Computer Engineering B.S.</TimelineTitle>
              <TimelineSubtitle>Istanbul Technical University</TimelineSubtitle>
            </div>
            <TimelinePeriod>2018.09 — 2022.06</TimelinePeriod>
          </TimelineHeader>
          <TimelineContent>
            Graduated with Honors. Specialization in Distributed Systems & Web Security Architecture.
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  ),
};
