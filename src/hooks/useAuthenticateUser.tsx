import { EAuthFormOption } from '@/utils/ts/enums';
import { IAlertMessage } from '@/utils/ts/interface';
import { FormEvent, useState } from 'react';
import { handleAuthForm } from '@/handler/auth-form';
import { useRouter } from 'next/navigation';

export const useAuthenticateUser = (authOption: EAuthFormOption) => {
  const router = useRouter();

  const [errors, setErrors] = useState<null | string[]>([]);
  const [alertMessage, setAlertMessage] = useState<null | IAlertMessage>(null);
  const [loading, setLoading] = useState(false);

  const [formInputValues, setFormInputValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handler = handleAuthForm({ authOption, inputValues: formInputValues });

  const validateFirebaseResponse = async (withGoogle: boolean) => {
    const response = await handler.submitAuth(withGoogle);

    if (!response.status) {
      setErrors(handler.formValidator.errors);
      return false;
    }

    setAlertMessage(response);

    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  };

  const onSubmitUsingGoogle = async () => {
    await validateFirebaseResponse(true);
  };

  const onSubmitUsingCredentials = async () => {
    const response = handler.validateFormRequest();
    setErrors(handler.formValidator.errors);

    if (response) {
      await validateFirebaseResponse(false);
    }
  };

  const onSubmit = async (e: FormEvent, withGoogle: boolean) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage(null);

    if (withGoogle) {
      await onSubmitUsingGoogle();
    } else {
      await onSubmitUsingCredentials();
    }

    setLoading(false);
  };

  return {
    loading,
    errors,
    alertMessage,
    formInputValues,
    onSubmit,
    setFormInputValues,
  };
};
