'use client';
import Image from 'next/image';
import { useDashboardLogic } from './useDashboardLogic';
import Loader from '@/components/Loader/Loader';
import Lists from '@/containers/Lists/Lists';

const Page = () => {
  const { user, router, logOut } = useDashboardLogic();

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

      <button className="button__icon" onClick={async () => await logOut()}>
        <Image
          src="icon/logout.svg"
          alt="logout icone"
          width={18}
          height={18}
        />
      </button>

      <Lists />

      <button
        className="btn__default"
        onClick={() => router.push(`/dashboard/create-list`)}
      >
        CRIAR LISTA
      </button>
    </main>
  );
};

export default Page;
