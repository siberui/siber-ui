import type { Meta, StoryObj } from '@storybook/react';
import {
  ProfileHero,
  ProfileAvatar,
  ProfileInfo,
  ProfileTitle,
  ProfileSubtitle,
  ProfileMeta,
  ProfileActions,
} from './profile-hero';
import { Button } from './button';

const meta: Meta<typeof ProfileHero> = {
  title: 'Cyber/ProfileHero',
  component: ProfileHero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileHero>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-slate-950 text-slate-100 max-w-4xl mx-auto">
      <ProfileHero accent="cyan">
        <ProfileAvatar fallback="VO" status="online" />
        <ProfileInfo>
          <ProfileTitle>Volkan Özbek</ProfileTitle>
          <ProfileSubtitle>Senior Cyberpunk UI/UX Architect & Systems Developer</ProfileSubtitle>


          <ProfileMeta>
            <span>📍 ISTANBUL, TR // 41.0082° N</span>
            <span>⚡ STATUS: IN_THE_FIELD</span>
            <span>🛡️ DEPLOYMENTS: 42+</span>
          </ProfileMeta>
          <p className="text-xs text-slate-400 font-sans leading-relaxed pt-1 max-w-xl">
            Passionate about building futuristic, minimalist, high-performance web applications and UI frameworks. Creator of Siber-UI kit.
          </p>
          <ProfileActions>
            <Button variant="neon" size="sm">Initiate Contact</Button>
            <Button variant="outline" size="sm">GitHub Profile</Button>
            <Button variant="ghost" size="sm">Download CV [.PDF]</Button>
          </ProfileActions>
        </ProfileInfo>
      </ProfileHero>
    </div>
  ),
};
