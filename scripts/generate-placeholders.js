const fs = require('fs');
const path = require('path');

// Create public/assets directory if it doesn't exist
const assetsDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Create placeholder SVG files
const placeholders = {
  'hero-banner.svg': `<svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#FFF8DC"/>
    <text x="50%" y="50%" font-family="Caveat" font-size="48" text-anchor="middle" fill="#8B4513">
      Hero Banner Placeholder
    </text>
  </svg>`,
  'wheat-icon.svg': `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2 L20 8 L16 14 L12 8 Z" fill="#8B4513"/>
  </svg>`,
  'wheat-border.svg': `<svg width="100" height="4" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2 L100 2" stroke="#8B4513" stroke-width="2"/>
  </svg>`,
  'cupcake-icon.svg': `<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="20" fill="#FFB6C1"/>
    <rect x="15" y="35" width="20" height="10" fill="#8B4513"/>
  </svg>`,
  'facebook-icon.svg': `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" fill="#1877F2"/>
    <text x="50%" y="50%" font-family="Arial" font-size="20" text-anchor="middle" fill="white">f</text>
  </svg>`,
  'instagram-icon.svg': `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="6" fill="#E4405F"/>
    <circle cx="16" cy="16" r="6" fill="white"/>
  </svg>`,
  'twitter-icon.svg': `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" fill="#1DA1F2"/>
    <text x="50%" y="50%" font-family="Arial" font-size="20" text-anchor="middle" fill="white">t</text>
  </svg>`,
  'location-icon.svg': `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#8B4513"/>
  </svg>`,
  'phone-icon.svg': `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#8B4513"/>
  </svg>`,
  'email-icon.svg': `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#8B4513"/>
  </svg>`,
  'clock-icon.svg': `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="#8B4513"/>
  </svg>`,
};

// Generate placeholder images
Object.entries(placeholders).forEach(([filename, svg]) => {
  fs.writeFileSync(path.join(assetsDir, filename), svg);
});

console.log('Placeholder images generated successfully!'); 