const fs = require('fs');
const path = require('path');

const PORTFOLIO_DIR = path.join(__dirname, 'public/PORTFOLIO');
const TS_FILE = path.join(__dirname, 'src/data/portfolio.ts');

let content = fs.readFileSync(TS_FILE, 'utf8');

const strat = {
  orlando: { reg: 'na-orlando', cont: 'north-america', rent: '$25,000 / month', buy: '$5,000,000', invest: 'Contact for Pricing' },
  miami: { reg: 'na-miami', cont: 'north-america', rent: '$40,000 / month', buy: '$10,000,000', invest: 'Contact for Pricing' },
  wa: { reg: 'au-wa', cont: 'australia', rent: '$30,000 / month', buy: '$8,000,000', invest: 'Contact for Pricing' },
  africa: { reg: 'africa-east', cont: 'africa', rent: '$12,000 / month', buy: '$2,500,000', invest: 'Contact for Pricing' },
  thailand: { reg: 'thailand', cont: 'asia', rent: '$60,000 / month', buy: '$12,000,000', invest: 'Contact for Pricing' },
  more: { reg: 'france', cont: 'europe', rent: '€35,000 / month', buy: '€15,000,000', invest: 'Contact for Pricing' }
};

const mappings = [
  { folder: 'na-orlando-ph1', ...strat.orlando, titlePrefix: 'Orlando Signature Estate' },
  { folder: 'na-orlando-ph2', ...strat.orlando, titlePrefix: 'Orlando Signature Estate' },
  { folder: 'na-orlando-ph3', ...strat.orlando, titlePrefix: 'Orlando Signature Estate' },
  { folder: 'na-miami-ph1', ...strat.miami, titlePrefix: 'Miami Vice Penthouse' },
  { folder: 'wa-1111', ...strat.wa, titlePrefix: 'WA Oceanfront Villa' },
  { folder: 'wa-1112', ...strat.wa, titlePrefix: 'WA Oceanfront Villa' },
  { folder: 'wa-1116', ...strat.wa, titlePrefix: 'WA Oceanfront Villa' },
  { folder: 'africa-east-new', ...strat.africa, titlePrefix: 'Tanzania Safari Lodge' },
  { folder: 'thailand-9m', ...strat.thailand, titlePrefix: 'Koh Samui Beachfront' },
  { folder: 'more-images', ...strat.more, titlePrefix: 'European Grand Reserve' }
];

let projectsToAdd = [];

for (const map of mappings) {
  const dirPath = path.join(PORTFOLIO_DIR, map.folder);
  if (!fs.existsSync(dirPath)) continue;
  
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.webp'));
  
  files.forEach((file, index) => {
    let type = 'BUY';
    let price = map.buy;
    if (index % 5 === 0) {
      type = 'INVEST';
      price = map.invest;
    } else if (index % 2 !== 0) {
      type = 'RENT';
      price = map.rent;
    }
    
    let stats = '5 Bed • 6 Bath • Luxury Finishes';
    if (type === 'INVEST') stats = 'Institutional Grade • High ROI Target';
    
    const projStr = `
  {
    id: '${map.reg}-${map.folder}-item-${index}',
    title: '${map.titlePrefix} ${index + 1}',
    type: '${type}',
    price: '${price}',
    stats: '${stats}',
    image: '/PORTFOLIO/${map.folder}/${file}',
    description: 'A spectacular luxury property joining the ${map.titlePrefix} collection, offering unparalleled design.',
    regionId: '${map.reg}',
    continentId: '${map.cont}'
  }`;
    projectsToAdd.push(projStr);
  });
}

const getFirstImage = (folder) => {
    const dir = path.join(PORTFOLIO_DIR, folder);
    if (!fs.existsSync(dir)) return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200';
    const files = fs.readdirSync(dir);
    return `/PORTFOLIO/${folder}/${files[0]}`;
};

const newRegions = `
  {
    id: 'na-orlando',
    name: 'Orlando Florida',
    image: '${getFirstImage('na-orlando-ph1')}',
    description: 'Expansive private estates and golf club luxury residences in Orlando.',
    continentId: 'north-america'
  },
  {
    id: 'au-wa',
    name: 'Western Australia',
    image: '${getFirstImage('wa-1111')}',
    description: 'Striking contemporary architecture along the stunning coastlines of Western Australia.',
    continentId: 'australia'
  },`;

let regionsEndIndex = content.indexOf('];', content.indexOf('export const regionsData'));
content = content.slice(0, regionsEndIndex) + newRegions + '\n' + content.slice(regionsEndIndex);

let projectsEndIndex = content.lastIndexOf('];');
content = content.slice(0, projectsEndIndex) + ',' + projectsToAdd.join(',') + '\n' + content.slice(projectsEndIndex);

// fix any syntax issues with commas
content = content.replace(/,\s*,/g, ',');

fs.writeFileSync(TS_FILE, content);
console.log('Successfully generated ' + projectsToAdd.length + ' projects.');
