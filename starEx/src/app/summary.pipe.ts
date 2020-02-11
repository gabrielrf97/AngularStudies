import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, size?: number) {
    if (!value) {
      return null
    }
    let _size = (size) ? size : 50
    return value.substring(0,_size);
  }

}
