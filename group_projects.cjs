const fs = require('fs');

let content = fs.readFileSync('src/data/portfolio.ts', 'utf8');

// 1. Update Project interface from `image: string` to `images: string[]`
content = content.replace(/  image: string;\r?\n  description: string;/g, "  images: string[];\n  description: string;");

// 2. Parse out the projectsData string block
const projectsStartIndex = content.indexOf('export const projectsData: Project[] = [');
const projectsEndIndex = content.lastIndexOf('];');

let preamble = content.slice(0, projectsStartIndex);
let projectsBlock = content.slice(projectsStartIndex, projectsEndIndex + 2);
let endBlock = content.slice(projectsEndIndex + 2);

// We can capture every object in the projectsData array using a greedy regex
const projectMatches = [];
const blockRegex = /  \{\r?\n[\s\S]*?\r?\n  \}/g;

let match;
while ((match = blockRegex.exec(projectsBlock)) !== null) {
  projectMatches.push(match[0]);
}

const groups = {};
const finalProjects = [];

projectMatches.forEach(p => {
  // Extract fields via regex
  const titleMatch = p.match(/title:\s*['"]([^'"]+)['"]/);
  const typeMatch = p.match(/type:\s*['"]([^'"]+)['"]/);
  const priceMatch = p.match(/price:\s*['"]([^'"]+)['"]/);
  const regionMatch = p.match(/regionId:\s*['"]([^'"]+)['"]/);
  const continentMatch = p.match(/continentId:\s*['"]([^'"]+)['"]/);
  const descMatch = p.match(/description:\s*['"]([^'"]+)['"]/);
  const statsMatch = p.match(/stats:\s*['"]([^'"]+)['"]/);
  
  // Extract either 'image' or 'images' depending on previous state
  let imgUrl = '';
  const imgMatch = p.match(/image:\s*['"]([^'"]+)['"]/);
  if (imgMatch) imgUrl = imgMatch[1];

  let id = p.match(/id:\s*['"]([^'"]+)['"]/)[1];
  
  const title = titleMatch ? titleMatch[1] : '';
  
  let isGroupable = false;
  let groupKey = '';
  
  if (imgUrl.includes('/PORTFOLIO/')) {
    const parts = imgUrl.split('/');
    if (parts.length >= 3) {
      // url mapped as `/PORTFOLIO/folderName/image.jpg`
      const folder = parts[2];
      groupKey = `${regionMatch[1]}-${folder}-${typeMatch[1]}`;
      // Wait, if it's the exact same type/price, we group it.
      // E.g., 'na-orlando-ph1-BUY'
      isGroupable = true;
    }
  }
  
  if (!isGroupable) {
    // If it's a legacy unsplash image, leave it alone but convert `image: '...'` to `images: ['...']`
    let fixed = p.replace(/image:\s*['"]([^'"]+)['"]/, "images: ['$1']");
    finalProjects.push(fixed);
  } else {
    if (!groups[groupKey]) {
      groups[groupKey] = {
        baseStr: p,
        images: []
      };
    }
    groups[groupKey].images.push(`'${imgUrl}'`);
  }
});

Object.values(groups).forEach(g => {
  // Take the base string of the first item, replace title ending with numbers, update `image` to `images`
  let str = g.baseStr;
  
  // Strip trailing numbers from title (e.g. "Orlando Signature Estate 1" -> "Orlando Signature Estate")
  str = str.replace(/(title:\s*['"][a-zA-Z\s]+?)\s+\d+(['"])/, "$1$2");
  
  // Replace `image: '...'` with `images: [ ... ]`
  const imagesArrStr = `[\n      ${g.images.join(',\n      ')}\n    ]`;
  str = str.replace(/image:\s*['"][^'"]+['"]/, `images: ${imagesArrStr}`);
  
  finalProjects.push(str);
});

const newProjectsBlock = `export const projectsData: Project[] = [\n${finalProjects.join(',\n')}\n];`;

fs.writeFileSync('src/data/portfolio.ts', preamble + newProjectsBlock + endBlock);
console.log('Portfolio grouped. Kept ' + finalProjects.length + ' base projects.');
