import '../globals.css';

export const metadata = {
  title: 'Login',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'adminBg '}>
        <main className="h-[100vh] w-full flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
