import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallNamesPipe'
})
export class SmallNamesPipe implements PipeTransform {


  transform(namesList:{name:string}[],maxLength:number): {name:string}[] {
    let vowels = /[aeiou]/gi;
    let newList:{name:string}[]=[];
    namesList.forEach(element => {
      var name = element.name;
      var contador = 0;
        for (let index = 0; index < name.length; index++) {
          if(name[index]=='a' || name[index]=='e' || name[index]=='i' || name[index]=='o' || name[index]=='u'){
            contador++;
          }
          const element = name[index];
        }
        
        if(contador<maxLength){
          newList.push(element);
        }
      });
      return newList;
  //  return namesList.filter( value=> value.name && value.name.length <= maxLenght)
  }

}
