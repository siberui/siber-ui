import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { 
  ProfileHero, 
  ProfileAvatar, 
  ProfileInfo, 
  ProfileTitle, 
  ProfileSubtitle, 
  ProfileMeta, 
  ProfileActions,
  Button
} from '@siberui/react';
import { MapPin, Terminal } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ProfileHeroDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Profile Hero"
        description="A specialized hero component for user profiles and developer bios."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<ProfileHero>
  <ProfileAvatar fallback="JD" status="online" />
  <ProfileInfo>
    <ProfileTitle>John Doe</ProfileTitle>
    <ProfileSubtitle>FULL-STACK ENGINEER</ProfileSubtitle>
    <ProfileMeta>
      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Earth</span>
      <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> 5 YOE</span>
    </ProfileMeta>
    <ProfileActions>
      <Button variant="neon" size="sm">HIRE ME</Button>
      <Button variant="ghost" size="sm">RESUME</Button>
    </ProfileActions>
  </ProfileInfo>
</ProfileHero>`}>
              <div className="flex items-center justify-center p-8 w-full">
                <ProfileHero className="w-full max-w-2xl">
                  <ProfileAvatar fallback="JD" status="online" />
                  <ProfileInfo>
                    <ProfileTitle>John Doe</ProfileTitle>
                    <ProfileSubtitle>FULL-STACK ENGINEER</ProfileSubtitle>
                    <ProfileMeta>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Earth</span>
                      <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> 5 YOE</span>
                    </ProfileMeta>
                    <ProfileActions>
                      <Button variant="neon" size="sm">HIRE ME</Button>
                      <Button variant="ghost" size="sm">RESUME</Button>
                    </ProfileActions>
                  </ProfileInfo>
                </ProfileHero>
              </div>
            </Playground>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Accent Colors</h3>
            <Playground code={`<div className="flex flex-col gap-4">
  <ProfileHero accent="purple">
    <ProfileAvatar fallback="SYS" status="busy" />
    <ProfileInfo>
      <ProfileTitle>SysAdmin</ProfileTitle>
      <ProfileSubtitle>INFRA ARCHITECT</ProfileSubtitle>
    </ProfileInfo>
  </ProfileHero>

  <ProfileHero accent="emerald">
    <ProfileAvatar fallback="SEC" status="offline" />
    <ProfileInfo>
      <ProfileTitle>NetSec</ProfileTitle>
      <ProfileSubtitle>SECURITY RESEARCHER</ProfileSubtitle>
    </ProfileInfo>
  </ProfileHero>
</div>`}>
              <div className="flex flex-col gap-4 p-8 w-full">
                <ProfileHero accent="purple" className="w-full max-w-2xl">
                  <ProfileAvatar fallback="SYS" status="busy" />
                  <ProfileInfo>
                    <ProfileTitle>SysAdmin</ProfileTitle>
                    <ProfileSubtitle>INFRA ARCHITECT</ProfileSubtitle>
                  </ProfileInfo>
                </ProfileHero>

                <ProfileHero accent="emerald" className="w-full max-w-2xl">
                  <ProfileAvatar fallback="SEC" status="offline" />
                  <ProfileInfo>
                    <ProfileTitle>NetSec</ProfileTitle>
                    <ProfileSubtitle>SECURITY RESEARCHER</ProfileSubtitle>
                  </ProfileInfo>
                </ProfileHero>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-lg font-medium text-slate-200 mb-4">ProfileHero</h3>
        <ApiTable
          props={[
            {
              property: 'accent',
              description: 'The accent color for the top border highlight.',
              type: '"cyan" | "purple" | "emerald"',
              defaultValue: '"cyan"',
            },
          ]}
        />
        
        <h3 className="text-lg font-medium text-slate-200 mb-4 mt-8">ProfileAvatar</h3>
        <ApiTable
          props={[
            {
              property: 'src',
              description: 'The image URL for the avatar.',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'fallback',
              description: 'Text to display when there is no image.',
              type: 'string',
              defaultValue: '"USER"',
            },
            {
              property: 'status',
              description: 'The status indicator dot color.',
              type: '"online" | "busy" | "offline"',
              defaultValue: '"online"',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
