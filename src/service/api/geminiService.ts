import { API_OUTPUT_OBJ_RESPONSE } from '@/lib/gemini/output';
import { GoogleGenerativeAI } from '@google/generative-ai';

export class geminiService {
  private readonly apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
  private readonly genAI = new GoogleGenerativeAI(this.apiKey);
  private readonly generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: 'application/json',
  };

  private readonly model = this.genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
  });

  fetch = async (value: string, language: string) => {
    const parts = [
      { text: 'input: ' + value.trim() },
      {
        text:
          'output: ' +
          `O idioma do "INPUT" você deve reconhecer, e o idioma de "OUTPUT" é ${language}. Você deve pensar em respostas para alguém que está aprendendo um novo idioma, com exemplos que a pessoa vai utilizar no seu dia a dia. Caso não ache a tradução da palavra, retornar um erro de que não foi possivel traduzir a palavra. ${JSON.stringify(API_OUTPUT_OBJ_RESPONSE)}`,
      },
    ];

    const response = await this.model.generateContent({
      contents: [{ role: 'user', parts }],
      generationConfig: this.generationConfig,
    });

    return response.response.text();
  };
}
