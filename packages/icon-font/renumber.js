const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'BrightlayerUIIcons.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let modified = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/\[BrightlayerUIIcons\.\w+\]: "(\d+)"/);
  
  if (match) {
    const oldNum = parseInt(match[1]);
    let newNum = oldNum;
    
    // PipeLeak is at line 1597 (0-indexed), needs to shift from 61838 to 61838
    // Everything after PipeLeak up to Eaton needs +1
    // Eaton is at line 1804 (0-indexed), everything from Eaton onwards needs +2 total
    
    if (i >= 1597 && i < 1804) {
      // From PipeLeak to before Eaton: +1
      newNum = oldNum + 1;
    } else if (i >= 1804) {
      // From Eaton onwards: +2
      newNum = oldNum + 2;
    }
    
    if (newNum !== oldNum) {
      lines[i] = line.replace('"' + oldNum + '"', '"' + newNum + '"');
      modified = true;
    }
  }
}

if (modified) {
  fs.writeFileSync(filePath, lines.join('\n'));
  console.log('✓ Renumbered all affected Unicode codepoints');
  console.log('  - Icons from PipeLeak to Environment: +1');
  console.log('  - Icons from Eaton to bottom: +2');
} else {
  console.log('✗ No changes needed');
}
