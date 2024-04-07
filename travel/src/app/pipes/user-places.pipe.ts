import { Pipe, PipeTransform } from '@angular/core';
import { Places } from '../share/models/Places';

@Pipe({
  name: 'userPlaces',
  standalone:true,
  pure: false
})
export class UserPlacesPipe implements PipeTransform {

  transform(value:Places[], userId: string): any {

    const resultArray = [];
    let currentOwner

    for (let current of value){
      currentOwner = current['ownerId'] as string;
      

      if(currentOwner == userId){
        resultArray.push(current);
      }
    }
   
    return resultArray;
  }

}