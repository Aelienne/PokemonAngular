import { Injectable } from '@angular/core';
import { IPokemon } from './ipokemon';
import { mockMyPokemons } from './mockMyPokemons';

@Injectable({
  providedIn: 'root',
})
export class PokemonTeamService {
  private team: IPokemon[] = mockMyPokemons;

  constructor() {}

  addToTeam(pokemon: IPokemon) {
    this.team.push(pokemon);
  }

  getMyTeam() {
    return mockMyPokemons;
  }
}
