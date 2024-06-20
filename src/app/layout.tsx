import SessionAuthProvider from '@/contexts/SessionAuthProvider';
import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Manrope } from 'next/font/google';

import NavBar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const font = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <SessionAuthProvider>
        <body className={font.className}>
          <NavBar />
          <main>{children}</main>
        </body>
      </SessionAuthProvider>
    </html>
  );
}
