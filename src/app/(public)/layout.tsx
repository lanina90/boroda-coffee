import type { Metadata } from 'next';
import '../globals.css';
import Header from '@components/components/Header/Header';
import localFont from 'next/font/local';
import Hero from '@components/components/Hero/Hero';
import Footer from '@components/components/Footer/Footer';
import FloatingContacts from '@components/components/FloatingContacts/FloatingContacts';
import { fetchAnnouncements } from '@components/utils/fetchAnnouncements';

const franklinGothicBook = localFont({
  src: '../fonts/FranklinGothic-Book.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-franklin-gothic-book',
});

const franklinGothicHeavy = localFont({
  src: '../fonts/FranklinGothic-Heavy.woff2',
  weight: '800',
  style: 'normal',
  variable: '--font-franklin-gothic-heavy',
});

export const metadata: Metadata = {
  title: 'Boroda Drink - Добра Кава ',
  description: 'Boroda Drink - Добра Кава',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const announcements = await fetchAnnouncements();

  return (
    <html lang="uk">
      <body
        className={`${franklinGothicBook.variable} ${franklinGothicHeavy.variable}`}
      >
        <Header />
        <main>
          <Hero announcements={announcements} />
          {children}
          <Footer />
          <FloatingContacts />
        </main>
      </body>
    </html>
  );
}
