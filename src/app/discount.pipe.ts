import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    console.log(value);
    console.log(args);
    return value -( value*args[0] )/100;
  }

}
