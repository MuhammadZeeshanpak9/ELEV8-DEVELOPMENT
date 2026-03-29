const fs = require("fs");
let content = fs.readFileSync("src/data/portfolio.ts", "utf8");

// We have 3 arrays: continentsData, regionsData, projectsData
// We want to remove objects that have an "image:" URL we have seen before.

const seenImages = new Set();
let removedCount = 0;

// The objects look like:
//   {
//     id: ...
//     image: "..."
//     ...
//   },

const cleanArrayStr = (arrayStr) => {
  // split the array string into object blocks using a regex that correctly matches the top-level {}
  // A simple way is to match `{ ... }` but some have nested stuff? No, they don`t.
  // Actually, they are just properties.
  
  // We can match every block that starts with \n  {\n and ends with \n  }, or \n  }
  let newStr = arrayStr.replace(/  \{\n(?:[^}]|\n)*?\n  \}(?:,)?\n?/g, (match) => {
    // extract image
    const imgMatch = match.match(/image:\s*[\x27"]([^\x27"]+)[\x27"]/);
    if (imgMatch) {
      const imgUrl = imgMatch[1];
      if (seenImages.has(imgUrl)) {
        removedCount++;
        return ""; // delete this block
      }
      seenImages.add(imgUrl);
    }
    return match;
  });
  return newStr;
}

// Just apply this to the regions array and projects array
const regionsStart = content.indexOf("export const regionsData: Region[] = [");
const projectsStart = content.indexOf("export const projectsData: Project[] = [");

let regionsBlock = content.substring(regionsStart, projectsStart);
let projectsBlock = content.substring(projectsStart);

regionsBlock = cleanArrayStr(regionsBlock);
projectsBlock = cleanArrayStr(projectsBlock);

content = content.substring(0, regionsStart) + regionsBlock + projectsBlock;

fs.writeFileSync("src/data/portfolio.ts", content);
console.log("Removed " + removedCount + " duplicate objects");

