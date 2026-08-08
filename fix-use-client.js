const fs = require('fs');
const path = require('path');

const baseDir = '/Users/v/Documents/projects/others/siber-ui/apps/docs/src/app/(docs)/docs/components';

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name === 'page.tsx') {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.startsWith("'use client';\n")) {
        console.log(`Fixing ${fullPath}`);
        // Remove exactly "'use client';\n" (and maybe an extra newline)
        let newContent = content.replace(/^'use client';\r?\n\r?\n?/, '');
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

processDir(baseDir);
console.log('Done.');
