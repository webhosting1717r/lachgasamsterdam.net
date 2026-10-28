import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lachgas Amsterdam',
    short_name: 'Lachgas A’dam',
    description: 'Fastgas Wegwerp Tank bezorgd in Amsterdam en omstreken, 24/7.',
    start_url: '/',
    display: 'standalone',
    background_color: '#04060b',
    theme_color: '#04060b',
    lang: 'nl',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
