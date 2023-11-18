import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const bodyFont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Eddi Chen',
  description: 'The personal site of Eddi Chen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={bodyFont.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
