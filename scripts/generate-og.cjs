const fs = require('fs');
const sharp = require('sharp');

if (!fs.existsSync('public/images')) {
  fs.mkdirSync('public/images', { recursive: true });
}

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#101411"/>
      <stop offset="100%" stop-color="#1b211c"/>
    </linearGradient>
    <radialGradient id="goldGlow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#c7a76c" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#101411" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#goldGlow)"/>
  
  <rect x="40" y="40" width="1120" height="550" rx="20" fill="none" stroke="#c7a76c" stroke-opacity="0.25" stroke-width="1.5"/>
  
  <text x="600" y="160" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="600" letter-spacing="5" fill="#dfc79b">
    KHEMZY STUDIOS · VISUAL STORYTELLING
  </text>
  
  <text x="600" y="270" text-anchor="middle" font-family="Georgia, serif" font-size="68" font-weight="700" fill="#ffffff" letter-spacing="-1">
    Every Moment Deserves
  </text>
  <text x="600" y="350" text-anchor="middle" font-family="Georgia, serif" font-size="68" font-style="italic" font-weight="600" fill="#c7a76c" letter-spacing="-1">
    to Be Unforgettable.
  </text>
  
  <text x="600" y="440" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#a5a59e" letter-spacing="0.5">
    Weddings · Editorial Portraits · Fashion Campaigns · Commercial Imagery
  </text>
  
  <text x="600" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="500" fill="#dfc79b" letter-spacing="3">
    LAGOS, NIGERIA · WORLDWIDE COMMISSIONS
  </text>
</svg>
`;

sharp(Buffer.from(svg))
  .png({ quality: 90 })
  .toFile('public/images/og-cover.png')
  .then(() => console.log('Successfully generated public/images/og-cover.png'))
  .catch(err => {
    console.error('Error generating image:', err);
    process.exit(1);
  });
