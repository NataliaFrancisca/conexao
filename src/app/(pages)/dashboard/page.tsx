'use client';
import Loader from '@/components/Loader/Loader';
import Lists from '@/containers/Lists/Lists';
import { useSession } from '@/hooks/useSession';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const { user } = useSession();

  if (user === null) {
    return (
      <main className="page__dashboard">
        <Loader />
      </main>
    );
  }

  return (
    <main className="page__dashboard">
      <header className="page__header">
        <h1>Olá, {user.displayName}.</h1>
        <p>
          <span className="__styled">Explore</span> ou{' '}
          <span className="__styled">crie</span> listas novas.
        </p>
      </header>

      <Lists />

      <button onClick={() => router.push(`/dashboard/create-list`)}>
        CRIAR LISTA
      </button>
    </main>
  );
};

export default Page;
