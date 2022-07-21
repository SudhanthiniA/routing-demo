import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {
customers: any;
transform(items: Array<any>, searchData: object): any {
  if (!items) {return []; }
  if (!searchData) {return items; }
  // searchData = searchData.toString().toLowerCase();
  return items.filter( it => 
     it.name.includes(searchData)
);
}
  // transform(items: any, searchData?: any): any[] {
  //   if  (!items || !searchData) {
  //      return items;

  //   }
   
  //   else {
  //  return   this.customers = items.filter((employee:any) => employee.name.includes(searchData));
   
  //   }
  
  // }
 /*  transform(value: any, searchData?: any): any {

    if (!value) return null;
    if (!searchData) return value;

    searchData = searchData.toLowerCase();

     value.filter((item: any) => 
        item.name.includes(searchData));
} */
}