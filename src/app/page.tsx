'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="page__home">
      <Image
        className="image__illustration"
        src="images/illustration.svg"
        alt="ilustração de uma mulher usando fones de ouvido e mexendo no notebook que está sobre suas pernas"
        width={300}
        height={364}
      />

      <section className="section__elements">
        <h1>
          CONEXÃO <br /> BRASIL
        </h1>
        <p>Seu dicionário pessoal, simples e eficaz.</p>

        <button
          role="button"
          onClick={() => router.push('/login')}
          className="button-nav"
        >
          INICIAR
        </button>
      </section>
    </main>
  );
}
