import { Pipe, PipeTransform } from '@angular/core';
import { Movement } from 'src/app/models/movement';

@Pipe({
  name: 'filterById'
})
export class FilterByIdPipe implements PipeTransform {

  transform(items: Movement[], selectedId: string): any[] {
    if(!items || !selectedId){
      return items
    }
    const filteredItems = items.filter(item => item.cardId === selectedId);
    return filteredItems
  }

}
