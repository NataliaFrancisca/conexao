import { ListsController } from '@/controllers/ListsController';
import { IAlertMessage, IList } from '@/utils/ts/interface';
import { useEffect, useState } from 'react';

export const useContainerLogic = () => {
  const [lists, setLists] = useState<IList[]>([]);
  const [alertMessage, setAlertMessage] = useState<null | IAlertMessage>(null);

  const getLists = async () => {
    const controller = new ListsController();
    const response = await controller.fetchLists();

    if (response.status === undefined) {
      setAlertMessage(response);
    }

    if (response.data) {
      setLists(response.data);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  return { lists, alertMessage };
};
