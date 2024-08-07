import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/hooks/useSession';
import { ListController } from '@/controllers/ListController';
import { WordController } from '@/controllers/WordController';
import { IAlertMessage, IList } from '@/utils/ts/interface';

export const useListLogic = (listId: string) => {
  const router = useRouter();
  const { user } = useSession();

  const controller = new ListController();

  const [listData, setListData] = useState<IList | null>(null);
  const [alertMessage, setAlertMessage] = useState<null | IAlertMessage>(null);

  useEffect(() => {
    if (user) {
      getList();
    }
  }, [user]);

  const getList = async () => {
    const response = await controller.fetchList(listId);

    if (!response.requestWasSuccess) {
      setAlertMessage({
        message: response.message,
        status: response.requestWasSuccess,
      });
    }

    if (response.data) {
      setListData(response.data);
    }
  };

  const deleteList = async () => {
    const response = await controller.deleteList(listId);

    setAlertMessage({
      message: response.message,
      status: response.requestWasSuccess,
    });

    if (response.requestWasSuccess) {
      setTimeout(() => {
        router.back();
      }, 2400);
    }
  };

  const updateListState = (list: IList, wordId: string) => {
    const updated = list.words.filter((word) => word.id !== wordId);

    setListData({
      ...list,
      words: updated,
    });

    if (list.words.length === 0) {
      setAlertMessage({
        message: 'Nenhuma palavra foi salva nessa lista.',
        status: undefined,
      });
    }
  };

  const sendListUpdated = async (wordId: string) => {
    const controller = new WordController();

    if (listData) {
      updateListState(listData, wordId);

      const response = await controller.removeWord(
        { ...listData, id: listId },
        wordId,
      );

      if (!response.requestWasSuccess) {
        setAlertMessage({
          message: response.message,
          status: response.requestWasSuccess,
        });
      }
    }
  };

  return {
    listData,
    alertMessage,
    deleteList,
    sendListUpdated,
  };
};
