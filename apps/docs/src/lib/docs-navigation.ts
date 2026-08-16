export type DocNavItem = {
  title: string;
  href: string;
  isNew?: boolean;
  isExperimental?: boolean;
  isUpdated?: boolean;
};

export type DocNavGroup = {
  title: string;
  items: DocNavItem[];
};

export const docsNavigation: DocNavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Design Guidelines', href: '/docs/design' },
    ],
  },
  {
    title: 'Layout & Primitives',
    items: [
      { title: 'Accordion', href: '/docs/components/accordion' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Border Beam', href: '/docs/components/border-beam' },
      { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Chamfer Card', href: '/docs/components/chamfer-card', isNew: true },
      { title: 'Colors', href: '/docs/components/colors' },
      { title: 'Cypher Text', href: '/docs/components/cypher-text', isNew: true },
      { title: 'Glitch Text', href: '/docs/components/glitch-text' },
      { title: 'Layout', href: '/docs/components/layout' },
      { title: 'Scroll Area', href: '/docs/components/scroll-area' },
      { title: 'Separator', href: '/docs/components/separator' },
      { title: 'Skeleton', href: '/docs/components/skeleton' },
      { title: 'Spinner', href: '/docs/components/spinner' },
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Tag', href: '/docs/components/tag' },
      { title: 'Typography', href: '/docs/components/typography' },
    ],
  },
  {
    title: 'Forms & Inputs',
    items: [
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Combobox', href: '/docs/components/combobox' },
      { title: 'Date Picker', href: '/docs/components/date-picker' },
      { title: 'Form Field', href: '/docs/components/form-field' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Input OTP', href: '/docs/components/input-otp' },
      { title: 'Kill Switch', href: '/docs/components/kill-switch', isNew: true },
      { title: 'Radio', href: '/docs/components/radio' },
      { title: 'Select', href: '/docs/components/select' },
      { title: 'Slider', href: '/docs/components/slider' },
      { title: 'Switch', href: '/docs/components/switch' },
      { title: 'Textarea', href: '/docs/components/textarea' },
      { title: 'Toggle Group', href: '/docs/components/toggle-group' },
    ],
  },
  {
    title: 'Overlays & Navigation',
    items: [
      { title: 'Dialog', href: '/docs/components/dialog' },
      { title: 'Drawer', href: '/docs/components/drawer' },
      { title: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
      { title: 'Hover Card', href: '/docs/components/hover-card' },
      { title: 'Popover', href: '/docs/components/popover' },
      { title: 'Sidebar', href: '/docs/components/sidebar' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
      { title: 'Tree View', href: '/docs/components/tree-view' },
    ],
  },
  {
    title: 'Data Display & Telemetry',
    items: [
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Arc Gauge', href: '/docs/components/arc-gauge', isNew: true },
      { title: 'Biometric Scanner', href: '/docs/components/biometric-scanner', isNew: true },
      { title: 'Calendar', href: '/docs/components/calendar' },
      { title: 'Command', href: '/docs/components/command' },
      { title: 'Data Table', href: '/docs/components/data-table' },
      { title: 'Hex Viewer', href: '/docs/components/hex-viewer', isNew: true },
      { title: 'Marquee', href: '/docs/components/marquee' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'Radar Progress', href: '/docs/components/radar-progress' },
      { title: 'Terminal Block', href: '/docs/components/terminal-block' },
      { title: 'Threat Indicator', href: '/docs/components/threat-indicator' },
      { title: 'Toast', href: '/docs/components/toast' },
    ],
  },
  {
    title: 'Profile & Bio',
    items: [
      { title: 'Achievement Badge', href: '/docs/components/achievement-badge' },
      { title: 'Profile Hero', href: '/docs/components/profile-hero' },
      { title: 'Project Card', href: '/docs/components/project-card' },
      { title: 'Skill Matrix', href: '/docs/components/skill-matrix' },
      { title: 'Stat Card', href: '/docs/components/stat-card' },
      { title: 'Timeline', href: '/docs/components/timeline' },
    ],
  },
  {
    title: 'System Chrome',
    items: [
      { title: 'Corner Frame', href: '/docs/components/corner-frame' },
      { title: 'Cyber Audio', href: '/docs/components/cyber-audio', isNew: true },
      { title: 'Signal Border', href: '/docs/components/signal-border' },
      { title: 'Scanline', href: '/docs/components/scanline' },
      { title: 'Tech Label', href: '/docs/components/tech-label' },
      { title: 'Status', href: '/docs/components/status' },
    ],
  },
];
