import { UserAuthController } from '@/controllers/UserAuthController';
import { IAuthFormValidatorConstructor } from '@/utils/ts/interface';
import { AuthFormValidator } from '@/utils/validator/auth-form';

export const handleAuthForm = (props: IAuthFormValidatorConstructor) => {
  const { inputValues, authOption } = props;

  const formValidator = new AuthFormValidator({
    authOption,
    inputValues,
  });

  const validateFormRequest = () => {
    formValidator.validateFormInput();
    return formValidator.errors.length === 0;
  };

  const validateFirebaseResponse = (response: string) => {
    formValidator.validateFirebaseResponse(response);
  };

  const submitAuth = async (withGoogle: boolean) => {
    const authController = new UserAuthController(inputValues, authOption);

    const response = await authController.onSubmitUserAuth(withGoogle);

    if (!response.status) {
      validateFirebaseResponse(response.message);
    }

    return response;
  };

  return {
    formValidator,
    validateFormRequest,
    validateFirebaseResponse,
    submitAuth,
  };
};
