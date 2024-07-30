'use client';
import Loader from '@/components/Loader/Loader';
import Alert from '@/components/Alert/Alert';
import Dialog from '@/components/Dialog/Dialog';
import { useListLogic } from './useListLogic';

const Page = ({ params }: { params: { id: string } }) => {
  const { dialogState, listData, alertMessage, deleteList, openDialog } =
    useListLogic(params.id);

  if (listData === null && alertMessage?.status === false) {
    return (
      <main className="page__list">
        {alertMessage && (
          <Alert message={alertMessage.message} status={alertMessage.status} />
        )}
      </main>
    );
  }

  if (listData === null) {
    return (
      <main className="page__list">
        <Loader />
      </main>
    );
  }

  return (
    <main className="page__list">
      <header className="page__header">
        <h1>
          Lista:
          {listData.title}
        </h1>
      </header>

      {alertMessage && (
        <Alert message={alertMessage.message} status={alertMessage.status} />
      )}

      {dialogState && (
        <Dialog
          data={{
            message: 'Deseja realmente deletar essa lista?',
            title: 'Deletar Lista',
            onConfirm: async () => deleteList(),
          }}
        />
      )}

      <section className="section__buttons">
        <button>Estudar</button>
        <button className="btn__bg-green">Adicionar Palavra</button>
        <button className="btn__bg-red" onClick={() => openDialog()}>
          Deletar Lista
        </button>
      </section>
    </main>
  );
};

export default Page;
