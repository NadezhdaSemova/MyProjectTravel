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

    for (let current of value){
      let currentPlace = current['ownerId'];
      console.log(currentPlace);
      console.log(`userId${userId}`)

      if(currentPlace === userId){
        resultArray.push(currentPlace);
      }
    }

    return resultArray;
  }

}
