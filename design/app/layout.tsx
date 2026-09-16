import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'design — System Atlas',
  description:
    'リポジトリ、クラウド、データ、画面。ひとつのモデルからシステムのつながりを辿る。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
