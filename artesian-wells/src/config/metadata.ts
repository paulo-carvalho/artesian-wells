import packageJson from '~/../package.json';

const cleanUrl = 'main.d3ri4kndvij8yl.amplifyapp.com';

const metadata = {
  website: {
    name: 'Artesian Wells',
    slogan: 'Simple Canvas Drawing App',
    description: 'Open-source canvas drawing web application, built with TypeScript, React, and Next.js.',
    cleanUrl,
    email: `hello@${cleanUrl}`,
    url: `https://${cleanUrl}`,
    manifest: `https://${cleanUrl}/manifest.json`,
    thumbnail: `https://${cleanUrl}/images/thumbnail.jpg`,
    locale: 'en',
    themeColor: '#FFFFFF',
    version: packageJson.version,
  },
  links: {
    github: 'https://github.com/paulo-carvalho/artesian-wells',
  },
  services: {
    googleAnalyticsMeasurementId: 'G-',
  },
};

export default metadata;
