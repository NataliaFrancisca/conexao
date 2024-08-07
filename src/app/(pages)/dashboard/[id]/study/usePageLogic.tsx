import { useListLogic } from '@/hooks/useListLogic';
import { IWord } from '@/utils/ts/interface';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const usePageLogic = () => {
  const params = useParams() as { id: string };
  const { listData } = useListLogic(params.id);

  const [randomList, setRandomList] = useState<IWord[] | null>(null);
  const [currentList, setCurrentList] = useState(0);

  const updateCurrentList = {
    increment() {
      if (randomList) {
        if (currentList < randomList.length - 1) {
          setCurrentList((prev) => prev + 1);
        }
      }
    },

    decrement() {
      if (randomList) {
        if (currentList > 0) {
          setCurrentList((prev) => prev - 1);
        }
      }
    },
  };

  const shuffleList = () => {
    if (listData) {
      const arr = [...listData.words];

      for (let i = arr.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        const element = arr[i - 1];

        arr[i - 1] = arr[indiceAleatorio];
        arr[indiceAleatorio] = element;
      }

      setRandomList(arr);
    }
  };

  useEffect(() => {
    shuffleList();
  }, [listData]);

  return { currentList, randomList, updateCurrentList };
};
