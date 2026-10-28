import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Bg, Footer, Header, StickyCta } from '@/components/ui';
import { behaviorScript } from '@/lib/behavior';
import { defaultOg } from '@/lib/meta';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { type: 'website', locale: 'nl_NL', siteName: site.name, images: defaultOg },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark',
  themeColor: '#04060b',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <a className="skip" href="#main">Direct naar de inhoud</a>
        <Bg />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
        <script dangerouslySetInnerHTML={{ __html: behaviorScript }} />
      </body>
    </html>
  );
}
