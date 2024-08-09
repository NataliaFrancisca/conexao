import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { IWord } from '@/utils/ts/interface';
import { useListLogic } from '@/hooks/useListLogic';

export const usePageLogic = () => {
  const params = useParams() as { id: string };

  const { listData } = useListLogic(params.id);

  const [randomWordList, setRandomWordList] = useState<IWord[] | null>(null);
  const [currentWord, setCurrentWord] = useState(0);

  const updateCurrentWord = {
    increment() {
      if (randomWordList) {
        if (currentWord < randomWordList.length - 1) {
          setCurrentWord((prev) => prev + 1);
        }
      }
    },

    decrement() {
      if (randomWordList) {
        if (currentWord > 0) {
          setCurrentWord((prev) => prev - 1);
        }
      }
    },
  };

  const shuffleList = () => {
    if (listData) {
      const arr = [...listData.words];

      for (let i = arr.length; i; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const element = arr[i - 1];

        arr[i - 1] = arr[randomIndex];
        arr[randomIndex] = element;
      }

      setRandomWordList(arr);
    }
  };

  useEffect(() => {
    shuffleList();
  }, [listData]);

  return { currentWord, randomWordList, updateCurrentWord };
};
