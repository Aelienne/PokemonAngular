import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemon } from './ipokemon';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url = environment.APIurl;

  constructor(private http: HttpClient) {}

  fetchAll() {
    return this.http.get<IPokemon[]>(this.url);
  }

  fetchOne(id: any) {
    return this.http.get<IPokemon>(`${this.url}/${id}`);
  }

  filterPokemonsByType(pokemons: IPokemon[], typeName: string): IPokemon[] {
    const filteredPokemons = pokemons.filter((pokemon) => {
      const hasType = pokemon.types?.some((type) => type.name === typeName);
      return hasType;
    });
    return filteredPokemons;
  }

  deleteById(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
