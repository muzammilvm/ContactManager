import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontact: any[], searchKey: string, propName: string): any[] {
    const result: any = []
    if (!allcontact || searchKey == '' || propName == '') {
      return allcontact
    }
    allcontact.forEach((allcontact:any)=>{
      if(allcontact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(allcontact)
      }
    })
    return result;
  }

}
