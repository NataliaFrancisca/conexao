import { authService } from '@/service/auth/authService';
import { EAuthFormOption } from '@/utils/ts/enums';
import { IAuthFormInputValues } from '@/utils/ts/interface';

export class UserAuthController {
  private authService = new authService();
  private inputValues: IAuthFormInputValues;
  private authOption: EAuthFormOption;

  constructor(inputValues: IAuthFormInputValues, authOption: EAuthFormOption) {
    this.inputValues = inputValues;
    this.authOption = authOption;
  }

  private __onSubmitAuthLogin = async () => {
    return await this.authService.signIn(this.inputValues);
  };

  private __onSubmitAuthRegister = async () => {
    return await this.authService.signUp(this.inputValues);
  };

  private __onSubmitAuthUsingGoogle = async () => {
    return await this.authService.signInWithGoogle();
  };

  onSubmitUserAuth = async (withGoogle: boolean) => {
    let response = null;

    if (withGoogle) {
      response = await this.__onSubmitAuthUsingGoogle();
    } else {
      response =
        this.authOption === EAuthFormOption.LOGIN
          ? await this.__onSubmitAuthLogin()
          : await this.__onSubmitAuthRegister();
    }

    if (response.status === 200) {
      return {
        message: response.message,
        requestWasSuccessful: true,
        data: response.data,
      };
    }

    return {
      message: response.message,
      requestWasSuccessful: false,
    };
  };
}
