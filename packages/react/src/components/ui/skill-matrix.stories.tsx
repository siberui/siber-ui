import type { Meta, StoryObj } from '@storybook/react';
import { SkillMatrix, SkillItem } from './skill-matrix';

const meta: Meta<typeof SkillMatrix> = {
  title: 'Cyber/SkillMatrix',
  component: SkillMatrix,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkillMatrix>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-slate-950 text-slate-100 max-w-3xl mx-auto rounded-xl">
      <SkillMatrix cols={2}>
        <SkillItem
          name="React / Next.js"
          level={95}
          category="FRONTEND"
          color="cyan"
          statusLabel="MASTERY // 95%"
        />
        <SkillItem
          name="TypeScript"
          level={90}
          category="LANGUAGE"
          color="purple"
          statusLabel="EXPERT // 90%"
        />
        <SkillItem
          name="Tailwind CSS v4"
          level={92}
          category="STYLING"
          color="emerald"
          statusLabel="ADVANCED // 92%"
        />
        <SkillItem
          name="Node.js / Express"
          level={82}
          category="BACKEND"
          color="amber"
          statusLabel="PROFICIENT // 82%"
        />
      </SkillMatrix>
    </div>
  ),
};
