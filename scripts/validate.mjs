import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const errors = [];
const textExtensions = new Set(['.css', '.html', '.js', '.json', '.md', '.svg']);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === '.git' || entry.name === 'output') return [];
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

const manifestPath = path.join(root, 'assets/manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const assetLists = ['brandMarks', 'consultingMasters', 'functionalIcons', 'socialIcons', 'photographyMasters'];
for (const list of assetLists) {
  for (const relative of manifest[list] || []) {
    const target = path.join(root, 'assets', relative);
    if (!fs.existsSync(target)) errors.push(`Manifest path missing: assets/${relative}`);
  }
}

for (const file of walk(root)) {
  if (!textExtensions.has(path.extname(file))) continue;
  const source = fs.readFileSync(file, 'utf8');
  if (path.extname(file) === '.css') {
    for (const match of source.matchAll(/@import\s+url\(['"]([^'"]+)['"]\)/g)) {
      if (/^(https?:|data:)/.test(match[1])) continue;
      const target = path.resolve(path.dirname(file), match[1]);
      if (!fs.existsSync(target)) errors.push(`CSS import missing: ${path.relative(root, file)} -> ${match[1]}`);
    }
  }
  if (path.extname(file) === '.html') {
    for (const match of source.matchAll(/(?:src|href)=["']([^"'#]+)["']/g)) {
      if (/^(https?:|mailto:|tel:|data:)/.test(match[1])) continue;
      const target = path.resolve(path.dirname(file), match[1]);
      if (!fs.existsSync(target)) errors.push(`HTML reference missing: ${path.relative(root, file)} -> ${match[1]}`);
    }
  }
}

if (errors.length) {
  errors.forEach((error) => console.error(error));
  process.exit(1);
}

console.log(`Validated design system ${manifest.version}: assets, imports, and local references are complete.`);
