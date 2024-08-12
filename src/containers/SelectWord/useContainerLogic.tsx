import { useWordLogic } from '@/hooks/useWordLogic';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { setSelected } from '@/lib/redux/reducers/search-response';
import { IWord } from '@/utils/ts/interface';
import { useParams } from 'next/navigation';
import { FormEvent } from 'react';

export const useContainerLogic = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.translateResponse.selected);

  const params = useParams() as { id: string };

  const { loading, alertMessage, addWord } = useWordLogic();

  const toggleSelect = (word: IWord) => {
    const isAlreadyInTheList = words.find(
      (wordSome) => wordSome.id === word.id,
    );

    if (isAlreadyInTheList) {
      const removeSelectedWord = words.filter(
        (wordFilter) => wordFilter.id !== word.id,
      );
      dispatch(setSelected(removeSelectedWord));
    } else {
      dispatch(setSelected([...words, word]));
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addWord(params.id, words);
  };

  return { loading, alertMessage, toggleSelect, onSubmit };
};
