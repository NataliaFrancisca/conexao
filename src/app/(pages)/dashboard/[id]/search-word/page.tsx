'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import SearchWord from '@/containers/SearchWord/SearchWord';
import SelectWord from '@/containers/SelectWord/SelectWord';

const Page = () => {
  const words = useAppSelector((state) => state.searchResponse.original);

  return (
    <main className="page__search-word">
      <header className="page__header">
        <h1>Pesquisar & Adicionar:</h1>
      </header>

      <SearchWord />

      {words && <SelectWord data={words} />}
    </main>
  );
};

export default Page;
