const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/PORTFOLIO');

const renameCase = (oldName, newName) => {
    const tempName = oldName + '-temp';
    const oldPath = path.join(dir, oldName);
    const tempPath = path.join(dir, tempName);
    const newPath = path.join(dir, newName);
    
    // Check if the old path exists (case insensitive match on Windows, but let's just try to rename)
    try {
        fs.renameSync(oldPath, tempPath);
        fs.renameSync(tempPath, newPath);
        console.log('Renamed', oldName, 'to', newName);
    } catch (err) {
        console.log('Could not rename:', oldName, err.message);
    }
}

renameCase('WA-1111', 'wa-1111');
renameCase('WA-1112', 'wa-1112');
renameCase('WA-1116', 'wa-1116');

// Asia Regions renaming
const tsFile = path.join(__dirname, 'src/data/portfolio.ts');
let content = fs.readFileSync(tsFile, 'utf8');

content = content.replace(/name:\s*'Indonesia',/g, "name: 'BALI, INDONESIA',");
content = content.replace(/name:\s*'Thailand',/g, "name: 'PHUKET, THAILAND',");
content = content.replace(/name:\s*'United Arab Emirates',/g, "name: 'DUBAI, UAE',");

fs.writeFileSync(tsFile, content);
console.log('Asia regions updated in portfolio.ts.');
