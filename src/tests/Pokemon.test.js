import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste componente Pokemon', () => {
  it('A imagem do pokemon possui o src e o alt corretos', () => {
    renderWithRouter(<App />);

    const imagePokemon = screen.getByAltText('Pikachu sprite');
    expect(imagePokemon).toBeInTheDocument();
    expect(imagePokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('A imagem de favorito star possui o src e o alt corretos', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    const favoriteCheck = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favoriteCheck);
    const imageFavorite = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(imageFavorite).toBeInTheDocument();
    expect(imageFavorite).toHaveAttribute('src', '/star-icon.svg');
  });

  it('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toBe('Electric');
  });

  it('É exibido na tela um link com o href /pokemon/<id>', () => {
    renderWithRouter(<App />);

    const linkId = screen.getByRole('link', { name: /more details/i });
    expect(linkId).toBeInTheDocument();
    expect(linkId).toHaveAttribute('href', '/pokemon/25');
  });
});
