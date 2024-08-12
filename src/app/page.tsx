'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="page__home">
      <section className="section__wrapper">
        <header>
          <p>Seu dicionário pessoal, simples e eficaz.</p>

          <button
            role="button"
            onClick={() => router.push('/login')}
            className="button-nav"
          >
            INICIAR
          </button>
        </header>

        <Image
          className="image__illustration"
          src="images/illustration.svg"
          alt="ilustração de uma pessoa sentada em uma cadeira, com um pé apoiado em um tijolo. Essa pessoa está usando um telefone"
          width={263}
          height={320}
        />
      </section>
    </main>
  );
}
