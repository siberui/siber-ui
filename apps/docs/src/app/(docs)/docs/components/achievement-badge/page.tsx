import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { AchievementBadge } from '@siberui/react';
import { Shield, Book, Award } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function AchievementBadgeDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Achievement Badge"
        description="A stylized badge to display certifications, awards, and milestones."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<div className="flex flex-col gap-3 w-full max-w-sm">
  <AchievementBadge 
    title="AWS Certified Security" 
    issuer="AMAZON WEB SERVICES" 
    date="2023"
    icon={<Shield className="w-5 h-5" />}
    href="#"
  />
  <AchievementBadge 
    title="OSCP" 
    issuer="OFFENSIVE SECURITY" 
    date="2022"
    icon={<Book className="w-5 h-5" />}
  />
  <AchievementBadge 
    title="Hackathon Winner" 
    issuer="CYBER CONF" 
    date="2021"
    icon={<Award className="w-5 h-5" />}
    status="pending"
  />
</div>`}>
              <div className="flex items-center justify-center p-8 w-full">
                <div className="flex flex-col gap-3 w-full max-w-sm">
                  <AchievementBadge 
                    title="AWS Certified Security" 
                    issuer="AMAZON WEB SERVICES" 
                    date="2023"
                    icon={<Shield className="w-5 h-5" />}
                    href="#"
                  />
                  <AchievementBadge 
                    title="OSCP" 
                    issuer="OFFENSIVE SECURITY" 
                    date="2022"
                    icon={<Book className="w-5 h-5" />}
                  />
                  <AchievementBadge 
                    title="Hackathon Winner" 
                    issuer="CYBER CONF" 
                    date="2021"
                    icon={<Award className="w-5 h-5" />}
                    status="pending"
                  />
                </div>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-lg font-medium text-slate-200 mb-4">AchievementBadge</h3>
        <ApiTable
          props={[
            {
              property: 'title',
              description: 'The main title of the achievement.',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'issuer',
              description: 'The organization or entity issuing the achievement.',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'date',
              description: 'Optional date string (e.g., "2023").',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'icon',
              description: 'Optional React node for the icon on the left.',
              type: 'React.ReactNode',
              defaultValue: '"🏆"',
            },
            {
              property: 'href',
              description: 'If provided, renders the badge as a clickable link.',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'status',
              description: 'Sets the color of the status dot.',
              type: '"verified" | "pending"',
              defaultValue: '"verified"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
