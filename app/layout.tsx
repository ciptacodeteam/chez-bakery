import type { Metadata } from 'next';
import { Libre_Baskerville, Quicksand } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { ClerkProvider } from '@clerk/nextjs';
import MainProvider from '@/providers/MainProvider';

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Chez Bakery & Cafe | Freshly Baked & Cozy Atmosphere',
  description:
    'Chez Bakery & Cafe menyajikan roti, kue, dan kopi terbaik dengan bahan pilihan. Nikmati suasana hangat, menu lezat, dan layanan ramah di tempat kami.',
  keywords: [
    'cafe enak medan',
    'medan bakery',
    'bakery medan',
    'Bakery',
    'cafe medan',
    'Cafe',
    'Chez Bakery',
    'Coffee Shop',
    'Roti Fresh',
    'Kue',
    'Cafe Cozy',
    'Bakery di Indonesia',
  ],
  openGraph: {
    title: 'Chez Bakery & Cafe',
    description:
      'Nikmati roti fresh, kue manis, dan kopi hangat di Chez Bakery & Cafe. Tempat terbaik untuk bersantai dengan suasana cozy.',
    url: 'https://www.chezbakerycafe.com',
    siteName: 'Chez Bakery & Cafe',
    images: [
      {
        url: 'https://www.chezbakerycafe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chez Bakery & Cafe',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${libre.variable} ${quicksand.variable} antialiased`}
          suppressHydrationWarning
        >
          <MainProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </MainProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
