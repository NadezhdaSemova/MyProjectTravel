import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'search',
    standalone: true,
    pure: false
})
export class SearchPipe implements PipeTransform {

    transform(value: any, filterString: string) {
        if (value.length === 0){
            return [];
        }

        if(filterString === ''){
            return value;
        }
        const resultArray = [];
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