import { EAuthFormOption } from './enums';

export interface IAuthFormInputValues {
  name: string;
  email: string;
  password: string;
}

export interface IAuthFormInputError {
  name?: string | null;
  email: string | null;
  password: string | null;
}

export interface IAlertMessage {
  message: string;
  status: boolean | undefined;
}

export interface IDialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
}

export interface IUseHandleAuthFormErrors {
  inputValues: IAuthFormInputValues;
  authOption: EAuthFormOption;
}

export interface IAuthFormValidatorConstructor {
  authOption: EAuthFormOption;
  inputValues: IAuthFormInputValues;
}
