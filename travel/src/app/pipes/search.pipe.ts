import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'search',
    standalone: true,
    pure: false
})
export class SearchPipe implements PipeTransform {

    transform(value: any, filterString: string) {
     
        const resultArray = [];

        if(filterString === ''){
            resultArray.push(value);
        }
        
        for (let current of value){
            let currentPlace = current.place.toLowerCase();
            filterString = filterString.toLowerCase();
            
            if( currentPlace === filterString || currentPlace.startsWith(filterString)){
                resultArray.push(current);
            }
        }
        return resultArray;
    }
}