import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(arrlist, search: string, field: string){
      if(arrlist.length ==0 || search === ''){
        return arrlist;
      }
      return arrlist.filter(work => work[field].toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
}
