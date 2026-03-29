const fs = require('fs');
let content = fs.readFileSync('src/data/portfolio.ts', 'utf8');

// 1. Remove the 'au-wa' region from regionsData
content = content.replace(/\s*\{\s*id: 'au-wa',[\s\S]*?continentId: 'australia'\s*\},?/g, '');

// 2. Fix the Projects
// Change title prefix
content = content.replace(/WA Oceanfront Villa/g, 'West Africa Luxury Estate');

// Change description mentions
content = content.replace(/joining the WA Oceanfront Villa collection/g, 'joining the West Africa collection');

// Change IDs (for consistency)
content = content.replace(/id: 'au-wa-wa-/g, "id: 'africa-west-wa-");

// Change regionId and continentId for all these projects
content = content.replace(/regionId: 'au-wa',\s*continentId: 'australia'/g, "regionId: 'africa-west',\n    continentId: 'africa'");

// Clean up any double commas that might have been left if the region was deleted poorly
content = content.replace(/,\s*,/g, ',');

fs.writeFileSync('src/data/portfolio.ts', content);
console.log('Migration completed.');
