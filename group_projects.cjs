const fs = require('fs');

let content = fs.readFileSync('src/data/portfolio.ts', 'utf8');

// Parse out the projectsData string block
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
  // Extract either 'image' or 'images' depending on previous state
  let imgUrls = [];
  const imagesMatch = p.match(/images:\s*\[([\s\S]*?)\]/);
  
  if (imagesMatch) {
    // extract all strings from the array block
    const urls = imagesMatch[1].match(/['"]([^'"]+)['"]/g);
    if(urls) {
        imgUrls = urls.map(u => u.replace(/['"]/g, ''));
    }
  } else {
    // fallback just in case
    const imgMatch = p.match(/image:\s*['"]([^'"]+)['"]/);
    if (imgMatch) imgUrls.push(imgMatch[1]);
  }
  
  let id = p.match(/id:\s*['"]([^'"]+)['"]/)[1];
  
  let isGroupable = false;
  let groupKey = id; // Default to ID for unique legacy items

  // We are grouping by FOLDER exclusively!
  // If ANY image in this project comes from a specific PORTFOLIO folder, group by that folder.
  if (imgUrls.length > 0 && imgUrls[0].includes('/PORTFOLIO/')) {
    const parts = imgUrls[0].split('/');
    if (parts.length >= 3) {
      const folder = parts[2];
      groupKey = folder;
      isGroupable = true;
    }
  }
  
  if (!isGroupable) {
    // If it's a legacy unsplash image
    finalProjects.push(p);
  } else {
    if (!groups[groupKey]) {
      groups[groupKey] = {
        baseStr: p,
        images: []
      };
    }
    // Add all images to the folder group safely
    imgUrls.forEach(url => {
        if(!groups[groupKey].images.includes(`'${url}'`)) {
            groups[groupKey].images.push(`'${url}'`);
        }
    });
  }
});

Object.values(groups).forEach(g => {
  // Take the base string of the first item
  let str = g.baseStr;
  
  // Strip trailing numbers from title (e.g. "Orlando Signature Estate 1" -> "Orlando Signature Estate")
  str = str.replace(/(title:\s*['"][a-zA-Z\s]+?)\s+\d+(['"])/g, "$1$2");
  
  // Replace `images: [ ... ]` with our consolidated full-folder images array
  const imagesArrStr = `[\n      ${g.images.join(',\n      ')}\n    ]`;
  str = str.replace(/images:\s*\[([\s\S]*?)\]/, `images: ${imagesArrStr}`);
  
  finalProjects.push(str);
});

const newProjectsBlock = `export const projectsData: Project[] = [\n${finalProjects.join(',\n')}\n];`;

fs.writeFileSync('src/data/portfolio.ts', preamble + newProjectsBlock + endBlock);
console.log('Portfolio merged purely by FOLDER. Total projects remaining: ' + finalProjects.length);
