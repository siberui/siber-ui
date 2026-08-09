import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import { SkillMatrix, SkillItem } from '@siberui/react';
import { Code2, Database, Layout, Shield } from 'lucide-react';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SkillMatrixDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Skill Matrix"
        description="A grid layout component to visualize technical proficiencies and capability levels."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={`<SkillMatrix cols={2}>
  <SkillItem 
    name="React / Next.js" 
    level={90} 
    category="FRONTEND" 
    icon={<Layout className="w-3.5 h-3.5" />} 
    color="cyan"
    statusLabel="EXPERT"
  />
  <SkillItem 
    name="Node.js / Express" 
    level={75} 
    category="BACKEND" 
    icon={<Code2 className="w-3.5 h-3.5" />} 
    color="purple"
  />
  <SkillItem 
    name="PostgreSQL" 
    level={60} 
    category="DATABASE" 
    icon={<Database className="w-3.5 h-3.5" />} 
    color="emerald"
  />
  <SkillItem 
    name="Web Security" 
    level={85} 
    category="SECURITY" 
    icon={<Shield className="w-3.5 h-3.5" />} 
    color="amber"
  />
</SkillMatrix>`}>
              <div className="flex items-center justify-center p-8 w-full">
                <SkillMatrix cols={2} className="w-full max-w-2xl">
                  <SkillItem 
                    name="React / Next.js" 
                    level={90} 
                    category="FRONTEND" 
                    icon={<Layout className="w-3.5 h-3.5" />} 
                    color="cyan"
                    statusLabel="EXPERT"
                  />
                  <SkillItem 
                    name="Node.js / Express" 
                    level={75} 
                    category="BACKEND" 
                    icon={<Code2 className="w-3.5 h-3.5" />} 
                    color="purple"
                  />
                  <SkillItem 
                    name="PostgreSQL" 
                    level={60} 
                    category="DATABASE" 
                    icon={<Database className="w-3.5 h-3.5" />} 
                    color="emerald"
                  />
                  <SkillItem 
                    name="Web Security" 
                    level={85} 
                    category="SECURITY" 
                    icon={<Shield className="w-3.5 h-3.5" />} 
                    color="amber"
                  />
                </SkillMatrix>
              </div>
            </Playground>
          </div>
          
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <h3 className="text-lg font-medium text-slate-200 mb-4">SkillMatrix</h3>
        <ApiTable
          props={[
            {
              property: 'cols',
              description: 'The number of grid columns.',
              type: '1 | 2 | 3',
              defaultValue: '2',
            },
          ]}
        />
        
        <h3 className="text-lg font-medium text-slate-200 mb-4 mt-8">SkillItem</h3>
        <ApiTable
          props={[
            {
              property: 'name',
              description: 'The name of the skill.',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'level',
              description: 'The proficiency level between 0 and 100. It determines how many segments are highlighted.',
              type: 'number',
              defaultValue: 'undefined',
            },
            {
              property: 'category',
              description: 'An optional category tag to display next to the name.',
              type: 'string',
              defaultValue: 'undefined',
            },
            {
              property: 'icon',
              description: 'Optional React node for an icon next to the skill name.',
              type: 'React.ReactNode',
              defaultValue: 'undefined',
            },
            {
              property: 'color',
              description: 'The accent color for the icon and progress segments.',
              type: '"cyan" | "purple" | "emerald" | "amber"',
              defaultValue: '"cyan"',
            },
            {
              property: 'statusLabel',
              description: 'Custom text to replace the default percentage display.',
              type: 'string',
              defaultValue: 'undefined',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
