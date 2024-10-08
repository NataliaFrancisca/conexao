import { ChangeEvent } from 'react';
import { EAuthFormOption } from './enums';

export interface ILabeledInput {
  label: string;
  input: {
    type: string;
    id: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

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

export interface IAuthFormValidatorConstructor {
  authOption: EAuthFormOption;
  inputValues: IAuthFormInputValues;
}
