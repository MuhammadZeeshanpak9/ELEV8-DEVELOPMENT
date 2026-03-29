const fs = require("fs");

let content = fs.readFileSync("src/data/portfolio.ts", "utf8");

const seenImages = new Set();
let removedRegions = 0;
let removedProjects = 0;

const cleanArrayString = (arrayString) => {
  // Regex to match an object literal in the array
  // starts with: "  {" followed by newline
  // ends with: "  }," or "  }" followed by newline or EOF
  const blockRegex = /  \{\r?\n[\s\S]*?\r?\n  \},?/g;
  
  let result = arrayString.replace(blockRegex, (match) => {
    // Find the image URL
    const imgMatch = match.match(/image:\s*['"]([^'"]+)['"]/);
    if (imgMatch) {
      const imgUrl = imgMatch[1];
      if (seenImages.has(imgUrl)) {
        if (arrayString.includes('regionId:')) {
            removedProjects++;
        } else {
            removedRegions++;
        }
        return ""; // remove it
      }
      seenImages.add(imgUrl);
    }
    return match;
  });
  
  // clean up any double commas or empty lines
  result = result.replace(/,\s*,/g, ','); // fix double commas
  result = result.replace(/(?:\r?\n\s*){3,}/g, '\n\n'); // compress multiple empty lines
  
  return result;
}

const regionsStart = content.indexOf("export const regionsData: Region[] = [");
const projectsStart = content.indexOf("export const projectsData: Project[] = [");

let preamble = content.substring(0, regionsStart);
let regionsBlock = content.substring(regionsStart, projectsStart);
let projectsBlock = content.substring(projectsStart);

regionsBlock = cleanArrayString(regionsBlock);
projectsBlock = cleanArrayString(projectsBlock);

content = preamble + regionsBlock + projectsBlock;

// Final cleanup: if any `];` ended up as `,];`, fix it.
content = content.replace(/,\s*\];/g, '\n];');
content = content.replace(/,\r?\n\s*\/\/ [^\r\n]*\r?\n\s*\];/g, '\n];'); 

fs.writeFileSync("src/data/portfolio.ts", content);
console.log(`Deduplication complete. Removed ${removedRegions} duplicate regions and ${removedProjects} duplicate projects.`);
