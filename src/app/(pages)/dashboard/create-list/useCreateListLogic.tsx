import { ListController } from '@/controllers/ListController';
import { IAlertMessage } from '@/utils/ts/interface';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export const useCreateListLogic = () => {
  const router = useRouter();

  const controller = new ListController();

  const [loading, setLoading] = useState(false);
  const [listTitle, setListTitle] = useState<null | string>(null);
  const [alertMessage, setAlertMessage] = useState<null | IAlertMessage>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (listTitle === null) {
      setAlertMessage({
        message: 'Digite um nome válido para sua lista.',
        status: false,
      });

      setLoading(false);
      return;
    }

    await create(listTitle);
  };

  const create = async (listTitle: string) => {
    const response = await controller.createList(listTitle);

    if (response.requestWasSuccess) {
      setTimeout(() => {
        router.back();
      }, 2400);
    }

    setAlertMessage({
      message: response.message,
      status: response.requestWasSuccess,
    });

    setLoading(false);
  };

  return { loading, alertMessage, onSubmit, setListTitle };
};
