import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Alert from './Alert';

const mockSuccessful = {
  message: 'Lista salva com sucesso. Aguarde enquanto você é redirecionado',
  status: true,
};

const mockFailed = {
  message:
    'Ocorreu um erro ao tentar buscar a lista. Por favor, tente novamente mais tarde',
  status: false,
};

const mockInfo = {
  message: 'Nenhuma palavra cadastrada nessa lista',
  status: undefined,
};

describe('Component <Alert />', () => {
  test('Should render an Alert component and have a style-class based on alert status [error]', () => {
    render(<Alert props={mockFailed} />);
    expect(screen.getByText(mockFailed.message));
    expect(screen.getByRole('article')).toHaveClass('__error');
  });

  test('Should render an Alert component and have a style-class based on alert status [success]', () => {
    render(<Alert props={mockSuccessful} />);
    expect(screen.getByText(mockSuccessful.message));
    expect(screen.getByRole('article')).toHaveClass('__success');
  });

  test('Should render an Alert component and have a style-class based on alert status [info]', () => {
    render(<Alert props={mockInfo} />);
    expect(screen.getByText(mockInfo.message));
    expect(screen.getByRole('article')).toHaveClass('__info');
  });
});
