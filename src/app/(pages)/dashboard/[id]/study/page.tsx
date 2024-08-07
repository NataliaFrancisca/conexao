'use client';
import Loader from '@/components/Loader/Loader';
import { usePageLogic } from './usePageLogic';
import WordFlip from '@/components/WordFlip/WordFlip';

const Page = () => {
  const { currentList, randomList, updateCurrentList } = usePageLogic();

  if (!randomList) {
    return (
      <main className="page__study">
        <Loader />
      </main>
    );
  }

  return (
    <main className="page__study">
      <header className="page__header">
        <h1>Estudar:</h1>
      </header>

      <span className="page__study-status">
        {currentList + 1}/{randomList.length}
      </span>

      <WordFlip data={randomList[currentList]} />

      <section className="section__buttons">
        <button onClick={() => updateCurrentList.decrement()}>VOLTAR</button>
        <button onClick={() => updateCurrentList.increment()}>PRÓXIMO</button>
      </section>
    </main>
  );
};

export default Page;
