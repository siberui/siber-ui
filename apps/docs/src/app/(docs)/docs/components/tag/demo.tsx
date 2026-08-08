'use client';

import React from 'react';
import { TagGroup } from '@siberui/react';
import { Terminal, Shield, Network } from 'lucide-react';

export function TagGroupDemo() {
  const [selected, setSelected] = React.useState<string[]>(['firewall']);
  return (
    <TagGroup
      variant="neon"
      selected={selected}
      onSelectionChange={setSelected}
      tags={[
        { label: 'Firewall', value: 'firewall', icon: <Shield className="w-3 h-3" /> },
        { label: 'Network', value: 'network', icon: <Network className="w-3 h-3" /> },
        { label: 'Terminal', value: 'terminal', icon: <Terminal className="w-3 h-3" /> },
      ]}
    />
  );
}
