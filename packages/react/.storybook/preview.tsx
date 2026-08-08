import type { Preview } from '@storybook/react-vite';
import React from 'react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'cyber-dark',
      values: [
        { name: 'cyber-dark', value: '#06090e' },
        { name: 'cyber-surface', value: '#0d121d' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-[#06090e] text-slate-100 p-8 font-sans antialiased flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default preview;