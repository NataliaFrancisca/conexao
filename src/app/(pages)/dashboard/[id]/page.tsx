'use client';
import Loader from '@/components/Loader/Loader';
import Alert from '@/components/Alert/Alert';
import Dialog from '@/components/Dialog/Dialog';
import { useListLogic } from './useListLogic';
import Words from '@/components/Words/Words';
import { handleDrop, allowDrop } from '@/handler/drag-and-drop';
import { useDialogHandler } from '@/hooks/useDialogHandler';
import { useRouter } from 'next/navigation';

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { dialogState, openDialog } = useDialogHandler();
  const { listData, alertMessage, deleteList, sendListUpdated } = useListLogic(
    params.id,
  );

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
    <main
      className="page__list"
      onDrop={(e) => handleDrop(e, sendListUpdated)}
      onDragOver={allowDrop}
    >
      <header className="page__header">
        <h1>
          Lista:
          {listData.title}
        </h1>
      </header>

      {listData.words.length > 0 && <Words data={listData.words} />}

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
        <button>ESTUDAR</button>
        <button
          onClick={() => router.push(`/dashboard/${params.id}/search-word`)}
        >
          PESQUISAR PALAVRA
        </button>
        <button className="btn__bg-red" onClick={() => openDialog()}>
          DELETAR LISTA
        </button>
      </section>
    </main>
  );
};

export default Page;
