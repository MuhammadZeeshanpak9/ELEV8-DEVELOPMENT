const fs = require('fs');
let text = fs.readFileSync('src/data/portfolio.ts', 'utf8');

// Find the exact missing comma at the `na-la` object ending.
// We are looking for:
//    continentId: 'north-america'
//  }
//
//  {
//    id: 'na-orlando',
text = text.replace(/continentId: 'north-america'\r?\n  \}\r?\n\r?\n  \{\r?\n    id: 'na-orlando',/g, "continentId: 'north-america'\n  },\n\n  {\n    id: 'na-orlando',");

fs.writeFileSync('src/data/portfolio.ts', text);
console.log('Comma fixed');
