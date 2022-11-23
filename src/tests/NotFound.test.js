import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Teste componenet NotFound', () => {
  it('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const message = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(message).toBeInTheDocument();
  });

  it('Teste se a página mostra uma imagem', () => {
    renderWithRouter(<NotFound />);

    const imagePikachu = screen.getByRole('img');
    expect(imagePikachu).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
