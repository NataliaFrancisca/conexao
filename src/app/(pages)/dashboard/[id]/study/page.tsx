'use client';
import { usePageLogic } from './usePageLogic';
import Loader from '@/components/Loader/Loader';
import WordFlip from '@/components/WordFlip/WordFlip';

const Page = () => {
  const { currentWord, randomWordList, updateCurrentWord } = usePageLogic();

  if (!randomWordList) {
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

      <span className="study-status">
        {currentWord + 1}/{randomWordList.length}
      </span>

      <WordFlip data={randomWordList[currentWord]} key={currentWord} />

      <section className="section__button">
        <button
          className="btn__default"
          onClick={() => updateCurrentWord.decrement()}
          disabled={currentWord === 0}
        >
          VOLTAR
        </button>
        <button
          className="btn__default"
          onClick={() => updateCurrentWord.increment()}
          disabled={currentWord === randomWordList.length - 1}
        >
          PRÓXIMO
        </button>
      </section>
    </main>
  );
};

export default Page;
