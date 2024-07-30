import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { IPokemon } from '../../shared/ipokemon';
import { PokemonService } from '../../shared/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  pokemons: IPokemon[] = [];
  i: number = 0;

  service = inject(PokemonService);

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.service.fetchAll().subscribe((data: IPokemon[]) => {
      this.pokemons = data;
    });
  }

  prevPic() {
    if (this.i === 0) {
      this.i = this.pokemons.length - 1;
    } else {
      this.i--;
    }
  }

  nextPic() {
    if (this.i === this.pokemons.length - 1) {
      this.i = 0;
    } else {
      this.i++;
    }
  }
}
