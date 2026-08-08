'use client';

import React from 'react';
import { Combobox } from '@siberui/react';

export function ComboboxDemo() {
  const [value, setValue] = React.useState("");
  const frameworks = [
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
  ];
  
  return (
    <Combobox
      label="Framework"
      placeholder="Select framework..."
      options={frameworks}
      value={value}
      onChange={setValue}
    />
  );
}

export function ComboboxNeonDemo() {
  const [value, setValue] = React.useState("");
  const systems = [
    { value: 'sys1', label: 'Mainframe Alpha' },
    { value: 'sys2', label: 'Backup Beta' },
    { value: 'sys3', label: 'Proxy Gamma' },
  ];
  
  return (
    <Combobox
      variant="neon"
      label="Target System"
      placeholder="Select node..."
      options={systems}
      value={value}
      onChange={setValue}
    />
  );
}
