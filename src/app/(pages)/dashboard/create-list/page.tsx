'use client';
import { usePageLogic } from './usePageLogic';
import Alert from '@/components/Alert/Alert';
import Loader from '@/components/Loader/Loader';

const Page = () => {
  const { loading, alertMessage, setListTitle, onSubmit } = usePageLogic();

  return (
    <main className="page__create-list">
      <header className="page__header">
        <h1>Criar Lista:</h1>
        <p>
          Escolha o <b className="__styled">nome</b> da sua nova lista:
        </p>
      </header>

      {alertMessage && (
        <Alert message={alertMessage.message} status={alertMessage.status} />
      )}

      {loading && <Loader />}

      <form onSubmit={async (e) => await onSubmit(e)}>
        <input
          type="text"
          placeholder="blink-182 adam's song"
          required
          minLength={4}
          maxLength={50}
          onChange={(e) => setListTitle(e.target.value)}
        />

        <button type="submit" className="btn__default">
          Criar Lista
        </button>
      </form>
    </main>
  );
};

export default Page;
