import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente PokemonDetails', () => {
  it('É exibido na tela um h2 com o texto <name> Details', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    const headingDetails = screen.getByRole('heading', {
      level: 2,
      name: /pikachu details/i,
    });
    expect(headingDetails).toBeInTheDocument();
  });

  it('É exibido na tela um h2 com o texto Summary', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    const headingSummary = screen.getByRole('heading', {
      level: 2,
      name: /summary/i,
    });
    expect(headingSummary).toBeInTheDocument();
    const summaryText = screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);
    expect(summaryText).toBeInTheDocument();
  });

  it('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    const headingLocations = screen.getByRole('heading', {
      level: 2,
      name: /game locations of pikachu/i,
    });
    expect(headingLocations).toBeInTheDocument();
  });

  it('São exibidas na tela imagens de localização com o src correto', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    const imageLocation = screen.getAllByAltText('Pikachu location');
    const location1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const location2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(imageLocation[0]).toHaveAttribute('src', location1);
    expect(imageLocation[1]).toHaveAttribute('src', location2);
  });

  it('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    const labelFavorite = screen.getByText(/pokémon favoritado\?/i);
    expect(labelFavorite).toBeInTheDocument();
  });
});
