import { readdirSync, statSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = __dirname;

function convertTsxToJsx(filePath) {
  try {
    // Read the .tsx file
    const content = readFileSync(filePath, 'utf8');
    
    // Create the new .jsx file path
    const jsxPath = filePath.replace(/\.tsx$/, '.jsx');
    
    // Write the content to the new .jsx file
    writeFileSync(jsxPath, content, 'utf8');
    
    // Delete the original .tsx file
    unlinkSync(filePath);
    
    console.log(`Converted: ${relative(projectRoot, filePath)} -> ${relative(projectRoot, jsxPath)}`);
    
    return true;
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
    return false;
  }
}

function processDirectory(directory) {
  const files = readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = join(directory, file);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules directory
      if (file === 'node_modules') {
        return;
      }
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx')) {
      convertTsxToJsx(fullPath);
    }
  });
}

// Start processing from the project root
processDirectory(projectRoot);
console.log('Conversion complete!');
