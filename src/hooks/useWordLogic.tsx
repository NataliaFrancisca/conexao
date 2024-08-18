import { WordController } from '@/controllers/WordController';
import { useAppDispatch } from '@/lib/redux/hooks';
import { clean } from '@/lib/redux/reducers/search-response';
import { IAlertMessage, IList, IWord } from '@/utils/ts/interface';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useWordLogic = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const controller = new WordController();

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<null | IAlertMessage>(null);

  const deleteWord = async (list: IList, wordId: string) => {
    const response = await controller.removeWord(list, wordId);

    if (!response.status) {
      setAlertMessage(response);
    }
  };

  const addWord = async (listId: string, data: IWord[]) => {
    setLoading(true);
    const response = await controller.addWord(listId, data);

    setAlertMessage(response);

    if (response.status) {
      setTimeout(() => {
        router.back();
      }, 2600);
    }

    dispatch(clean());
    setLoading(false);
  };

  return { loading, alertMessage, deleteWord, addWord };
};
