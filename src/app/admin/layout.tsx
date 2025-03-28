import AuthProvider from '@components/providers/AuthProvider';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import '../globals.css';
import ProtectedRoute from '@components/routes/ProtectedRoute';
import Sidebar from '@components/components/admin/Sidebar';
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
  title: 'Admin Panel Boroda Drink ',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${franklinGothicBook.variable} ${franklinGothicHeavy.variable} adminBg`}
      >
        <AuthProvider>
          <ProtectedRoute>
            <main className={'w-full p-8 h-[100vh]'}>
              <div
                className={
                  'w-full min-h-[100vh] rounded-xl bg-white text-black flex '
                }
              >
                <Sidebar />
                {children}
              </div>
            </main>
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
