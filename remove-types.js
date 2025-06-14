import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const filesToUpdate = [
  'app/routes/works.jsx',
  'app/routes/novels/noli-me-tangere.jsx',
  'app/routes/novels/el-filibusterismo.jsx',
  'app/routes/about/timeline.jsx',
  'app/routes/about/quotes.jsx',
  'app/routes/about/political-thought.jsx',
  'app/routes/about/legacy.jsx',
  'app/routes/about/interview.jsx',
  'app/routes/about/biography.jsx'
];

filesToUpdate.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  try {
    let content = readFileSync(fullPath, 'utf8');
    
    // Remove type imports and type annotations
    content = content
      .replace(/^import type \{ [^}]+ \} from "[^"]+";\n+/gm, '')
      .replace(/\(\{\s*\}\s*:\s*[\w\.]+\s*}\)/g, '()');
    
    writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
});

console.log('TypeScript types removal complete!');
