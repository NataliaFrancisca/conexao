'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import SelectWord from '@/containers/SelectWord/SelectWord';
import TranslateWord from '@/containers/TranslateWord/TranslateWord';

const Page = () => {
  const words = useAppSelector((state) => state.translateResponse.original);

  return (
    <main className="page__search-word">
      <header className="page__header">
        <h1>Traduzir & Adicionar:</h1>
      </header>

      <TranslateWord />

      {words && <SelectWord data={words} />}
    </main>
  );
};

export default Page;
