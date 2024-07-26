'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="page__home">
      <h1>CONEXÃO</h1>
      <p>Seu dicionário pessoal, simples e eficaz.</p>

      <Image
        className="image__illustration"
        src="images/illustration.svg"
        alt="ilustração de uma mulher usando fones de ouvido e mexendo no notebook que está sobre suas pernas"
        width={315.72}
        height={359}
      />

      <button
        role="button"
        onClick={() => router.push('/login')}
        className="button-nav"
      >
        INICIAR
      </button>
    </main>
  );
}
