import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';


@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {

  transform( canFly: boolean ): string {
    return ( canFly ) ? "Vuela" : "No vuela"
  }



}
