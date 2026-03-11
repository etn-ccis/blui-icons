const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'BrightlayerUIIcons.json');
const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Convert to array of [key, value] pairs for easier manipulation
const entries = Object.entries(json);

// Find the indices for the insertion points
const pliersIndex = entries.findIndex(([key]) => key === 'pliers');
const eatonTaglineIndex = entries.findIndex(([key]) => key === 'eaton_tagline');

// New entries object
const updated = {};

for (let i = 0; i < entries.length; i++) {
  const [key, value] = entries[i];
  
  // Add placeholder after pliers
  if (i === pliersIndex) {
    updated[key] = value;
    updated['placeholder'] = 61838;
    continue;
  }
  
  // Add eaton_padded after eaton_tagline
  if (i === eatonTaglineIndex) {
    updated[key] = value + 1; // eaton_tagline shifts by 1
    updated['eaton_padded'] = 62045;
    continue;
  }
  
  // Shift values based on position
  if (value >= 61838 && value < 62042) {
    // From pipe_leak to environment: shift by +1
    updated[key] = value + 1;
  } else if (value >= 62044) {
    // From eaton onwards: shift by +2
    updated[key] = value + 2;
  } else {
    // Before pipe_leak: no change
    updated[key] = value;
  }
}

// Write back to file
fs.writeFileSync(jsonPath, JSON.stringify(updated, null, 4) + '\n');
console.log('✓ Updated BrightlayerUIIcons.json');
console.log('  - Added placeholder: 61838');
console.log('  - Added eaton_padded: 62045');
console.log('  - Renumbered affected icons');
