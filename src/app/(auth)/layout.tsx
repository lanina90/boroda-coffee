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
      <body className={'adminBg'}>
        <main>{children}</main>
      </body>
    </html>
  );
}
