import type { Metadata } from 'next';
import '../sass/main.scss';
import StoreProvider from '@/lib/redux/provider';

export const metadata: Metadata = {
  title: 'Conexão',
  description: 'Seu dicionário pessoal, simples e eficaz.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
