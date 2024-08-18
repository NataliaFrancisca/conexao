import { useDialogHandler } from '@/hooks/useDialogHandler';
import { IList } from '@/utils/ts/interface';
import { useRouter } from 'next/navigation';

const ListButtons = (props: { listData: IList }) => {
  const router = useRouter();
  const { openDialog } = useDialogHandler();
  const { id, words } = props.listData;

  const navigate = (path: string) => {
    router.push(`/dashboard/${id}/${path}`);
  };

  return (
    <section className="section__buttons">
      {words.length > 0 && (
        <button className="btn__default" onClick={() => navigate('study')}>
          ESTUDAR
        </button>
      )}

      <button
        className="btn__default"
        onClick={() => navigate('translate-word')}
      >
        TRADUZIR PALAVRA
      </button>

      <button className="btn__default btn__bg-red" onClick={() => openDialog()}>
        DELETAR LISTA
      </button>
    </section>
  );
};

export default ListButtons;
