import Home from '@/app/page';
import mockRouter from 'next-router-mock';
import { beforeEach, describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

beforeEach(() => {
  render(<Home />);
});

describe('Page: Home', () => {
  test('Should render page text', () => {
    expect(screen.getByTestId('home__text')).toBeInTheDocument();
  });

  test('Should render a button that navigates to login page', () => {
    expect(screen.getByRole('button', { name: 'INICIAR' })).toBeInTheDocument();
  });

  test('Should navigate to page Login when button INICIAR is clicked', async () => {
    const button = screen.getByRole('button', { name: 'INICIAR' });

    await waitFor(() => userEvent.click(button));

    expect(mockRouter).toMatchObject({
      asPath: '/login',
      pathname: '/login',
      query: {},
    });
  });
});
