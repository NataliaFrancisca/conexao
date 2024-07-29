import mockRouter from 'next-router-mock';
import { beforeEach, describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Page from '@/app/login/page';
beforeEach(() => {
  render(<Page />, { wrapper: MemoryRouterProvider });
});

describe('Page: Login', () => {
  test('Should render a form with two inputs: Email and Password', () => {
    expect(screen.getByPlaceholderText('Digite seu email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
  });

  test('Should render a form with two buttons: Login com Email and Login com Google', () => {
    expect(
      screen.getByRole('button', { name: /Login com Email/ }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Login com Google/ }),
    ).toBeInTheDocument();
  });

  test('Should render a link: Esqueceu a senha', () => {
    expect(
      screen.getByRole('link', { name: 'Esqueceu sua senha?' }),
    ).toBeInTheDocument();
  });

  test('Should render a input with value after user type', async () => {
    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');

    await userEvent.type(emailInput, 'email@mail.com', { delay: 1 });
    await userEvent.type(passwordInput, '12345678', { delay: 1 });

    expect(emailInput).toHaveValue('email@mail.com');
    expect(passwordInput).toHaveValue('12345678');
  });

  test('Should render a link that navigates user into Register page', async () => {
    const link = screen.getByRole('link', { name: 'Criar Conta' });
    await waitFor(() => userEvent.click(link));
    expect(mockRouter.asPath).toEqual('/register');
  });
});
