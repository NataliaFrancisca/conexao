import { IWord } from '@/utils/ts/interface';
import { useContainerLogic } from './useContainerLogic';
import WordSelect from '@/components/WordSelect/WordSelect';
import Loader from '@/components/Loader/Loader';
import Alert from '@/components/Alert/Alert';

const SelectWord = (props: { data: IWord[] }) => {
  const { alertMessage, loading, onSubmit, toggleSelect } = useContainerLogic();

  return (
    <form
      className="container__select-word"
      onSubmit={async (e) => await onSubmit(e)}
    >
      {props.data.map((word, key) => (
        <WordSelect wordData={word} toggleWordSelect={toggleSelect} key={key} />
      ))}

      {loading && <Loader />}

      {alertMessage && <Alert props={alertMessage} />}

      {props.data.length > 0 && (
        <button type="submit" className="btn__default">
          ADICIONAR
        </button>
      )}
    </form>
  );
};

export default SelectWord;
