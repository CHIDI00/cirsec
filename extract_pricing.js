const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/Chidi Mathaias/.gemini/antigravity/brain/4ec1bb21-a8b4-40a2-a334-a9e949bf3e48/.system_generated/logs/transcript_full.jsonl')
});

rl.on('line', (line) => {
  if (line.includes('"step_index":1103,')) {
    const data = JSON.parse(line);
    fs.writeFileSync('pricing_template.html', data.content, 'utf8');
    console.log('Saved pricing_template.html, length:', data.content.length);
    process.exit(0);
  }
});
