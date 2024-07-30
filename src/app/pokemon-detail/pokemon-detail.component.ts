import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from '../../shared/ipokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent implements OnInit {
  service = inject(PokemonService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  pokemon: IPokemon | undefined;

  ngOnInit(): void {
    this.fetchOnePokemon();
  }

  fetchOnePokemon() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.fetchOne(id).subscribe((data) => {
      this.pokemon = data;
    });
  }

  deletePokemon() {
    if (this.pokemon) {
      this.service.deleteById(this.pokemon.pokedex_id).subscribe(() => {
        this.router.navigate(['/listPokemon']);
      });
    }
  }
}
