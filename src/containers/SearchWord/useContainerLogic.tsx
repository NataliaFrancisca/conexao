import { FormEvent, useEffect, useState } from 'react';
import { createId } from '@/utils/constants/id';
import { IAlertMessage, IWord } from '@/utils/ts/interface';
import { GeminiController } from '@/controllers/GeminiController';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { toggleLoader } from '@/lib/redux/reducers/loader-form-search';
import { setOriginal } from '@/lib/redux/reducers/search-response';
import {
  getUserLanguageLastPreference,
  setUserLanguageLastPreference,
} from '@/lib/nookies/nookies';

export const useContainerLogic = () => {
  const dispatch = useAppDispatch();

  const controller = new GeminiController();
  const loading = useAppSelector((state) => state.toggleLoader);

  const [language, setLanguage] = useState('');
  const [search, setSearch] = useState('');
  const [alertMessage, setAlertMessage] = useState<IAlertMessage | null>(null);

  useEffect(() => {
    const storage = getUserLanguageLastPreference();
    setLanguage(storage);
  }, []);

  const onSearch = async () => {
    const response = await controller.search(search, language);

    if (response.data) {
      const data = response.data as IWord[];
      const dataWithId = data.map((word) => {
        return {
          ...word,
          id: createId(),
        };
      });

      dispatch(setOriginal(dataWithId));
    }

    if (!response.data) {
      setAlertMessage({
        message: response.message,
        status: false,
      });
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(toggleLoader(true));

    if (search !== '' && language) {
      await onSearch();
    }

    dispatch(toggleLoader(false));
    setUserLanguageLastPreference(language);
  };

  return {
    language,
    loading,
    alertMessage,
    search,
    setSearch,
    setLanguage,
    onSubmit,
  };
};
