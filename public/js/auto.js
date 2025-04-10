const fs = require('fs');
const path = require('path');

const files = [
  'style.sass',
  'index.html'
];

function randomComment() {
  const comments = [
    '/* auto update */',
    '// waka boost',
    '<!-- fake edit -->',
    '/* productivity hack */'
  ];
  return comments[Math.floor(Math.random() * comments.length)];
}

function touchFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  const timestamp = new Date().toISOString();
  const comment = `\n\n// ${timestamp} ${randomComment()}`;
  
  fs.appendFile(fullPath, comment, (err) => {
    if (err) console.error(`Erreur en modifiant ${filePath}:`, err);
    else console.log(`Modifié: ${filePath}`);
  });
}

function loopEdit() {
  files.forEach(file => touchFile(file));
}

// Lancer une modif toutes les X secondes
const interval = 60 * 1000; // 1 minute
console.log('🔥 Simulation WakaTime en cours... Ctrl+C pour arrêter.');

loopEdit(); // premier appel
setInterval(loopEdit, interval);
