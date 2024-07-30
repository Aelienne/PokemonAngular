import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertHTtoTTC',
  standalone: true
})
export class ConvertHTtoTTCPipe implements PipeTransform {

  transform(value: number): number {
    let TVA = 1.2;
    return value*TVA;
  }

}
