import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPokemon } from '../../shared/ipokemon';
import { PokemonTeamService } from '../../shared/pokemon-team.service';
import { mockMyPokemons } from '../../shared/mockMyPokemons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() onePokemon: any | undefined;
  mesPokemons: IPokemon[] = [];

  teamService = inject(PokemonTeamService);

  addToTeam() {
    if (mockMyPokemons.length < 6) {
      this.teamService.addToTeam(this.onePokemon);
      alert('Le Pokémon a été ajouté à l\'équipe!');
    }
  }
}
