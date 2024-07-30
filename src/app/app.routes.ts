import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { Error404Component } from './error404/error404.component';
import { MonEquipeComponent } from './mon-equipe/mon-equipe.component';
import { PokedexComponent } from './pokedex/pokedex.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'equipe', component: MonEquipeComponent },
  { path: 'pokedex', component: PokedexComponent},
  { path: '**', component: Error404Component },
];
