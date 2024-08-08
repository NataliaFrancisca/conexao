'use client';
import { usePageLogic } from './usePageLogic';
import Loader from '@/components/Loader/Loader';
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

      <WordFlip data={randomList[currentList]} key={currentList} />

      <section className="section__buttons">
        <button
          onClick={() => updateCurrentList.decrement()}
          disabled={currentList === 0}
        >
          VOLTAR
        </button>
        <button
          onClick={() => updateCurrentList.increment()}
          disabled={currentList === randomList.length - 1}
        >
          PRÓXIMO
        </button>
      </section>
    </main>
  );
};

export default Page;
