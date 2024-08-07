export const API_OBJ_OUTPUT = {
  original:
    'trazer o valor original[INPUT] ou que os nativos mais usam, usando o idioma [INPUT]',
  translated: 'trazer o valor objeto original traduzido para o idioma [OUTPUT]',
  meaning: 'o que essa palavra significa - deve estar em PORTUGUÊS',
  examples:
    'retornar um objeto com exemplo usando a palavra ou frase, o objeto deve ter as seguintes propriedades {phraseInput: exemplo da frase usando o idioma indicado no INPUT, phraseOutput: traduzir a frase do phraseInput usando o idioma indicado no OUTPUT}',
};

export const API_OUTPUT_OBJ_RESPONSE = `
    Quero que retorne um ARRAY[] com a tradução da palavra que o usuário inseriu, e mais 3 traduções que tem relação com a palavra que o usuário inseriu. Cada tradução deve retornar um objeto, que deve ter as seguintes propriedade: ${JSON.stringify(API_OBJ_OUTPUT)}.
`;
