import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from '../shared/ipokemon';

@Pipe({
  name: 'searchPokedex',
  standalone: true
})
export class SearchPokedexPipe implements PipeTransform {

  transform(values: any[], terms: string): any{
    return values.filter((value) =>
      value.name.fr.toLowerCase().includes(terms.toLowerCase())
    );
  }
}
