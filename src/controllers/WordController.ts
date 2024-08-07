import { WordService } from '@/service/database/wordService';
import { IList, IWord } from '@/utils/ts/interface';

export class WordController {
  private wordService;

  constructor() {
    this.wordService = new WordService();
  }

  private __getWord = (words: IWord[], wordId: string) => {
    return words.find((word) => word.id === wordId);
  };

  addWord = async (listId: string, values: IWord[]) => {
    if (values.length === 0) {
      return {
        message:
          'Você não selecionou nenhuma palavra. Por favor, selecione para poder prosseguir.',
        requestWasSuccess: false,
      };
    }

    const response = await this.wordService.insertWord(listId, values);

    if (response.status === 200) {
      return {
        message: `${values.length > 1 ? 'Palavras adicionadas' : 'Palavra adicionada'} com sucesso. Aguarde enquanto você é redirecionado `,
        requestWasSuccess: true,
      };
    }

    return {
      message:
        'Ocorreu um erro ao tentar adicionar as palavras. Por favor, tente novamente mais tarde.',
      requestWasSuccess: false,
    };
  };

  removeWord = async (list: IList, wordId: string) => {
    const word = this.__getWord(list.words, wordId);

    if (word == undefined) {
      return {
        message: 'Ocorreu um erro ao tentar buscar os dados da palavra.',
        requestWasSuccess: false,
      };
    }

    const response = await this.wordService.removeWord(list.id, word);

    if (response.status === 200) {
      return {
        message:
          'Palavra removida com sucesso. Aguarde enquanto você é redirecionado',
        requestWasSuccess: true,
      };
    }

    return {
      message:
        'Ocorreu um erro ao tentar deletar a palavra. Por favor, tente novamente mais tarde.',
      requestWasSuccess: false,
    };
  };
}
