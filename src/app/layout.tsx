import type { Metadata } from 'next';
import '../sass/main.scss';

export const metadata: Metadata = {
  title: 'Conexão Brasil',
  description: 'Seu dicionário pessoal, simples e eficaz.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
