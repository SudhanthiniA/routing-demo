import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {
  transform(items: any, searchText: string): any[] {
    if (!items || !searchText||searchText===undefined)
      return items;

    return items.filter(
      item => item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}