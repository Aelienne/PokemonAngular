import { IPokemon } from './../../shared/ipokemon';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPokedexPipe } from '../search-pokedex.pipe';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPokedexPipe],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  service = inject(PokemonService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  searchValue = "";
  corresp: number |undefined;
  pokemons: IPokemon[] = [];
  pokemon: any;


  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.service.fetchAll().subscribe((data: IPokemon[]) => {
      this.pokemons = data.slice(1, 21);
    });
  }

  display(id:number){
    this.pokemon=this.service.fetchOne(id);
    console.log(this.pokemon)
  }
}
