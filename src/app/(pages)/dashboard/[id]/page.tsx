'use client';
import Loader from '@/components/Loader/Loader';
import Alert from '@/components/Alert/Alert';
import Dialog from '@/components/Dialog/Dialog';
import Words from '@/components/Words/Words';
import ListButtons from '@/containers/ListButtons/ListButtons';
import { handleDrop, allowDrop } from '@/handler/drag-and-drop';
import { useDialogHandler } from '@/hooks/useDialogHandler';
import { useListLogic } from '@/hooks/useListLogic';

const Page = ({ params }: { params: { id: string } }) => {
  const { dialogState } = useDialogHandler();
  const { listData, alertMessage, deleteList, updateList } = useListLogic(
    params.id,
  );

  if (listData === null && alertMessage?.status === false) {
    return (
      <main className="page__list">
        {alertMessage && <Alert props={alertMessage} />}
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
      onDrop={(e) => handleDrop(e, updateList)}
      onDragOver={allowDrop}
    >
      <header className="page__header">
        <h1>{listData.title}:</h1>
      </header>

      {listData.words.length > 0 && <Words data={listData.words} />}

      {alertMessage && <Alert props={alertMessage} />}

      {dialogState && (
        <Dialog
          data={{
            message: 'Deseja realmente deletar essa lista?',
            title: 'Deletar Lista',
            onConfirm: async () => deleteList(),
          }}
        />
      )}

      <ListButtons listData={listData} />
    </main>
  );
};

export default Page;
