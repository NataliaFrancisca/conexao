import { IWord } from '@/utils/ts/interface';
import { selectLogic } from './selectLogic';
import WordSelect from '@/components/WordSelect/WordSelect';
import Loader from '@/components/Loader/Loader';
import Alert from '@/components/Alert/Alert';

const SelectWord = (props: { data: IWord[] }) => {
  const { alertMessage, loading, onSubmit, toggleSelect } = selectLogic();

  return (
    <form
      className="container__select-word"
      onSubmit={async (e) => await onSubmit(e)}
    >
      {props.data.map((word, key) => (
        <WordSelect wordData={word} toggleWordSelect={toggleSelect} key={key} />
      ))}

      {loading && <Loader />}

      {alertMessage && (
        <Alert message={alertMessage.message} status={alertMessage.status} />
      )}

      {props.data.length > 0 && <button type="submit">ADICIONAR</button>}
    </form>
  );
};

export default SelectWord;
