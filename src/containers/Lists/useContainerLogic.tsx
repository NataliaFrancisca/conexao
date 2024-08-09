import { ListsController } from '@/controllers/ListsController';
import { IList } from '@/utils/ts/interface';
import { useEffect, useState } from 'react';

export const useContainerLogic = () => {
  const [lists, setLists] = useState<IList[]>([]);

  const getLists = async () => {
    const controller = new ListsController();
    const response = await controller.fetchLists();

    if (response.data) {
      setLists(response.data);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  return { lists };
};
