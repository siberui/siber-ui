import fs from 'fs';
import path from 'path';

const slugs = [
  'accordion', 'avatar', 'border-beam', 'breadcrumb', 'card', 'scroll-area', 'separator', 'skeleton', 'spinner', 'tabs', 'tag',
  'checkbox', 'combobox', 'date-picker', 'form-field', 'input-otp', 'radio', 'select', 'textarea', 'toggle-group',
  'dialog', 'drawer', 'dropdown-menu', 'hover-card', 'popover', 'sidebar', 'tooltip', 'tree-view',
  'calendar', 'command', 'data-table', 'marquee', 'pagination', 'progress', 'terminal-block', 'toast'
];

function toTitleCase(slug) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function toComponentName(slug) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const baseDir = path.resolve('./apps/docs/src/app/(docs)/docs/components');

slugs.forEach(slug => {
  const dirPath = path.join(baseDir, slug);
  const filePath = path.join(dirPath, 'page.tsx');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    const title = toTitleCase(slug);
    const componentName = toComponentName(slug);
    
    const content = `import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';

const headings = [
  { id: 'examples', text: 'Examples', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ${componentName}DocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="${title}"
        description="Documentation and examples for the ${title} component."
      />

      <ContentSection title="Examples" id="examples">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Basic Usage</h3>
            <Playground code={\`// Import and use ${componentName} here\`}>
              <div className="flex items-center justify-center p-8 text-slate-400 border border-dashed border-slate-800 rounded-xl">
                ${title} Example (Coming Soon)
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'className',
              description: 'Additional CSS classes to apply.',
              type: 'string',
            },
          ]}
        />
      </ContentSection>
    </ComponentPage>
  );
}
`;
    fs.writeFileSync(filePath, content);
    console.log(`Generated: ${filePath}`);
  } else {
    console.log(`Skipped (already exists): ${filePath}`);
  }
});

console.log('Done generating boilerplate pages.');
