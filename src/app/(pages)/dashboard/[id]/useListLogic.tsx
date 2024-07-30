import { ListController } from '@/controllers/ListController';
import { useDialogHandler } from '@/hooks/useDialogHandler';
import { useSession } from '@/hooks/useSession';
import { IAlertMessage, IList } from '@/utils/ts/interface';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useListLogic = (id: string) => {
  const router = useRouter();

  const { user } = useSession();
  const { dialogState, openDialog } = useDialogHandler();

  const controller = new ListController();

  const [listData, setListData] = useState<IList | null>(null);
  const [alertMessage, setAlertMessage] = useState<null | IAlertMessage>(null);

  const getList = async () => {
    const response = await controller.fetchList(id);

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
    const response = await controller.deleteList(id);

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

  useEffect(() => {
    if (user) {
      getList();
    }
  }, [user]);

  return {
    dialogState,
    listData,
    alertMessage,
    openDialog,
    deleteList,
  };
};
