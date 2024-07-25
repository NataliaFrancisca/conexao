import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ErrorMessage from './ErrorMessage';

const mockErrors = [
  'Você precisa digitar uma senha válida',
  'Você precisa digitar um email válido',
];

describe('Component <ErrorMessage />', () => {
  test('Should render a list of errors', () => {
    render(<ErrorMessage errors={mockErrors} />);
    const listErrors = screen.getAllByRole('listitem');
    expect(listErrors).toHaveLength(mockErrors.length);
  });

  test('Should render a list of errors with text', () => {
    render(<ErrorMessage errors={mockErrors} />);

    mockErrors.forEach((error) => {
      expect(screen.getByText(error)).toBeInTheDocument();
    });
  });
});
