import { geminiService } from '@/service/api/geminiService';

export class GeminiController {
  private geminiService;

  constructor() {
    this.geminiService = new geminiService();
  }

  search = async (value: string, language: string) => {
    const response = await this.geminiService.fetch(value, language);

    if (!response) {
      return {
        message:
          'Ocorreu um erro ao tentar buscar a tradução. Por favor, tente novamente mais tarde',
        requestWasSuccess: false,
      };
    }

    const responseObject = JSON.parse(response);

    if (!responseObject) {
      return {
        message:
          'Ocorreu um erro ao tentar buscar a tradução. Por favor, tente novamente mais tarde',
        requestWasSuccess: false,
      };
    }

    return {
      message: 'Requisição realizada com sucesso.',
      requestWasSuccess: true,
      data: JSON.parse(response),
    };
  };
}
