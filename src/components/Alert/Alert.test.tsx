import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Alert from './Alert';

const mockAlertMessage = {
  error:
    'Ocorreu um erro ao tentar buscar a lista. Por favor, tente novamente mais tarde',
  success: 'Lista salva com sucesso. Aguarde enquanto você é redirecionado',
  info: 'Nenhuma palavra cadastrada nessa lista',
};

describe('Component <Alert />', () => {
  test('Should render an alert message', () => {
    render(<Alert message={mockAlertMessage.error} status={false} />);
    expect(screen.getByText(mockAlertMessage.error));
  });

  test('Should component have a style-class based on alert status [error]', () => {
    render(<Alert message={mockAlertMessage.error} status={false} />);
    expect(screen.getByRole('article')).toHaveClass('__error');
  });

  test('Should component have a style-class based on alert status [success]', () => {
    render(<Alert message={mockAlertMessage.success} status={true} />);
    expect(screen.getByRole('article')).toHaveClass('__success');
  });

  test('Should component have a style-class based on alert status [info]', () => {
    render(<Alert message={mockAlertMessage.success} status={undefined} />);
    expect(screen.getByRole('article')).toHaveClass('__info');
  });
});
