import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { 
  Timeline, 
  TimelineItem, 
  TimelineHeader, 
  TimelineTitle, 
  TimelineSubtitle, 
  TimelinePeriod, 
  TimelineContent
} from '@siberui/react';
import { Terminal, Shield, Network } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TimelineDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Timeline"
        description="A chronologically ordered list of events, useful for resumes and project histories."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<Timeline>
  <TimelineItem status="active" icon={<Terminal />}>
    <TimelineHeader>
      <TimelineTitle>Senior Security Engineer</TimelineTitle>
      <TimelinePeriod>2023 - PRESENT</TimelinePeriod>
    </TimelineHeader>
    <TimelineSubtitle>CYBERDYNAMICS INC.</TimelineSubtitle>
    <TimelineContent>
      Leading the offensive security team, architecting zero-trust networks, and 
      conducting advanced penetration testing on critical infrastructure.
    </TimelineContent>
  </TimelineItem>

  <TimelineItem status="completed" icon={<Shield />}>
    <TimelineHeader>
      <TimelineTitle>Security Analyst</TimelineTitle>
      <TimelinePeriod>2020 - 2023</TimelinePeriod>
    </TimelineHeader>
    <TimelineSubtitle>NEO TECH</TimelineSubtitle>
    <TimelineContent>
      Monitored SIEM alerts, performed vulnerability assessments, and mitigated 
      over 500+ active threats in enterprise environments.
    </TimelineContent>
  </TimelineItem>

  <TimelineItem status="archived" icon={<Network />}>
    <TimelineHeader>
      <TimelineTitle>B.S. Computer Science</TimelineTitle>
      <TimelinePeriod>2016 - 2020</TimelinePeriod>
    </TimelineHeader>
    <TimelineSubtitle>TECH UNIVERSITY</TimelineSubtitle>
    <TimelineContent>
      Specialized in Network Security and Cryptography. Graduated with Honors.
    </TimelineContent>
  </TimelineItem>
</Timeline>`}>
              <div className="flex items-center justify-center p-8 w-full max-w-xl mx-auto">
                <Timeline>
                  <TimelineItem status="active" icon={<Terminal />}>
                    <TimelineHeader>
                      <TimelineTitle>Senior Security Engineer</TimelineTitle>
                      <TimelinePeriod>2023 - PRESENT</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineSubtitle>CYBERDYNAMICS INC.</TimelineSubtitle>
                    <TimelineContent>
                      Leading the offensive security team, architecting zero-trust networks, and 
                      conducting advanced penetration testing on critical infrastructure.
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem status="completed" icon={<Shield />}>
                    <TimelineHeader>
                      <TimelineTitle>Security Analyst</TimelineTitle>
                      <TimelinePeriod>2020 - 2023</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineSubtitle>NEO TECH</TimelineSubtitle>
                    <TimelineContent>
                      Monitored SIEM alerts, performed vulnerability assessments, and mitigated 
                      over 500+ active threats in enterprise environments.
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem status="archived" icon={<Network />}>
                    <TimelineHeader>
                      <TimelineTitle>B.S. Computer Science</TimelineTitle>
                      <TimelinePeriod>2016 - 2020</TimelinePeriod>
                    </TimelineHeader>
                    <TimelineSubtitle>TECH UNIVERSITY</TimelineSubtitle>
                    <TimelineContent>
                      Specialized in Network Security and Cryptography. Graduated with Honors.
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </Playground>
          </div>
          
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-lg font-medium text-slate-200 mb-4">Timeline</h3>
        <ApiTable
          props={[
            {
              property: 'variant',
              description: 'The color variant for the timeline connecting line.',
              type: '"neon" | "cyan" | "emerald" | "rose" | "red" | "mono"',
              defaultValue: '"neon"',
            },
          ]}
        />
        
        <h3 className="text-lg font-medium text-slate-200 mb-4 mt-8">TimelineItem</h3>
        <ApiTable
          props={[
            {
              property: 'status',
              description: 'The status of the node indicator, determining its color.',
              type: '"active" | "completed" | "archived" | "future"',
              defaultValue: '"completed"',
            },
            {
              property: 'icon',
              description: 'Optional React node to render inside the node indicator.',
              type: 'React.ReactNode',
              defaultValue: 'undefined',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
