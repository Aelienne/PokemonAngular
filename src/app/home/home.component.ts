import { Component, inject, OnInit, PipeTransform } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { IPokemon } from '../../shared/ipokemon';
import { PokemonService } from '../../shared/pokemon.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ConvertHTtoTTCPipe } from '../convert-htto-ttc.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardComponent, CommonModule, ConvertHTtoTTCPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pokemons: IPokemon[] = [];
  service = inject(PokemonService);

  ngOnInit(): void {
    this.get3PokemonsByType('Feu');
  }

  get3PokemonsByType(type: string) {
    this.service.fetchAll().subscribe((data: IPokemon[]) => {
      this.pokemons = this.service.filterPokemonsByType(data, type).slice(0, 3);
    });
  }
}
