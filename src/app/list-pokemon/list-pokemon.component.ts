import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IPokemon } from '../../shared/ipokemon';
import { PokemonService } from '../../shared/pokemon.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
})
export class ListPokemonComponent implements OnInit {
  pokemons: IPokemon[] = [];
  service = inject(PokemonService);

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.service.fetchAll().subscribe((data: IPokemon[]) => {
      this.pokemons = data.slice(1, 21);
    });
  }
}
