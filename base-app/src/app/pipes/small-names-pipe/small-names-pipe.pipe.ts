import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallNamesPipe'
})
export class SmallNamesPipe implements PipeTransform {

  transform(namesList:{name:string}[],maxLength:number): {name:string}[] {
    return namesList.filter(value=> value.name && value.name.length<= maxLength);
  }

}
