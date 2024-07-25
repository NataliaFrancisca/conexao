import { EAuthFormOption } from '../ts/enums';
import {
  IAuthFormInputError,
  IAuthFormInputValues,
  IAuthFormValidatorConstructor,
} from '../ts/interface';
import { AuthInputValidator } from './auth-input';

export class AuthFormValidator {
  private authOption: EAuthFormOption;
  private inputValues: IAuthFormInputValues;
  private inputValidator;
  errors: Array<string> = [];

  constructor(props: IAuthFormValidatorConstructor) {
    this.authOption = props.authOption;
    this.inputValues = props.inputValues;
    this.inputValidator = new AuthInputValidator();
  }

  private __setOnlyErrors = (errorsObj: IAuthFormInputError) => {
    const values = Object.values(errorsObj);
    this.errors = values.filter((error) => error !== null);
  };

  validateFirebaseResponse = (response: string) => {
    this.inputValidator.firebaseAuthResponse(response);
    this.__setOnlyErrors(this.inputValidator.errors);
  };

  validateFormInput = () => {
    this.inputValidator.email(this.inputValues.email);
    this.inputValidator.password(this.inputValues.password);

    if (this.authOption === EAuthFormOption.REGISTER) {
      this.inputValidator.name(this.inputValues.name);
    }

    this.__setOnlyErrors(this.inputValidator.errors);
  };
}
