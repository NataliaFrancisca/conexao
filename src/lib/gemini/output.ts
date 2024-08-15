export const API_OBJ_OUTPUT = {
  original:
    'Retorne a palavra/frase original na forma mais comum ou usada por nativos, no idioma especificado [INPUT].',
  translated: 'Traduza o valor original para o idioma especificado [OUTPUT].',
  meaning: 'Descreva o significado da palavra/frase em PORTUGUÊS.',
  examples: {
    phraseInput:
      'Forneça um exemplo de frase usando a palavra/frase original no idioma [INPUT].',
    phraseOutput: 'Traduza a frase do phraseInput para o idioma [OUTPUT].',
  },
};

export const API_OUTPUT_OBJ_RESPONSE = `
  Retorne um ARRAY[] com a tradução da palavra/frase inserida pelo usuário, além de mais 3 traduções relacionadas. 
  Cada tradução deve ser um objeto contendo as seguintes propriedades: ${JSON.stringify(API_OBJ_OUTPUT)}.
`;
