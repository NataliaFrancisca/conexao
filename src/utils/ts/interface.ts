import { EAuthFormOption } from './enums';

export interface ICardWordSelectProps {
  wordData: IWord;
  toggleWordSelect: (word: IWord) => void;
}

export interface IList {
  id: string;
  title: string;
  words: Array<IWord>;
}

export interface IWord {
  id: string;
  original: string;
  translated: string;
  meaning: string;
  examples: {
    phraseInput: string;
    phraseOutput: string;
  };
}

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
