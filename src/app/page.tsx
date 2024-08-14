'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="page__home">
      <section className="section__background"></section>
      <header>
        <p>
          Seu <b>dicionário</b> pessoal, simples e eficaz.
        </p>

        <button
          role="button"
          onClick={() => router.push('/login')}
          className="btn__default"
        >
          INICIAR
        </button>
      </header>
    </main>
  );
}
