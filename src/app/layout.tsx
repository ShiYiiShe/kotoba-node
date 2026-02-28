import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kotoba Node',
  description: 'Decode Japanese dialogue into learning nodes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
