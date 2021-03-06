import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invert'
})
export class InvertPipe implements PipeTransform {

  transform(value) {
    return value.slice().reverse();
  }

}
