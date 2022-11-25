import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

describe('Teste componente Pokedex', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const message = screen.getByRole('heading', {
      level: 2,
      name: 'Encountered Pokémon',
    });
    expect(message).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App
      pokemonList={ pokemonList }
    />);

    pokemonList.forEach((pokemon) => {
      const nextPokemon = screen.getByText('Próximo Pokémon');
      expect(nextPokemon).toBeInTheDocument();
      const pokemonName = screen.getByText(pokemon.name);
      userEvent.click(nextPokemon);
      expect(pokemonName).toBeInTheDocument();
    });
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const buttonEletric = screen.getByRole('button', { name: /electric/i });
    expect(buttonEletric).toBeInTheDocument();

    const buttonFire = screen.getByRole('button', { name: /fire/i });
    expect(buttonFire).toBeInTheDocument();

    const buttonBug = screen.getByRole('button', { name: /bug/i });
    expect(buttonBug).toBeInTheDocument();

    const buttonPoison = screen.getByRole('button', { name: /poison/i });
    expect(buttonPoison).toBeInTheDocument();

    const buttonPsychic = screen.getByRole('button', { name: /psychic/i });
    expect(buttonPsychic).toBeInTheDocument();

    const buttonNormal = screen.getByRole('button', { name: /normal/i });
    expect(buttonNormal).toBeInTheDocument();

    const buttonDragon = screen.getByRole('button', { name: /dragon/i });
    expect(buttonDragon).toBeInTheDocument();
  });

  it('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);

    const buttonType = screen.getAllByTestId('pokemon-type-button');
    expect(buttonType).toHaveLength(7);
  });

  it('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);
  });
});
