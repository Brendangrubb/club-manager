import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'superfan',
  pure: false
})
export class SuperfanPipe implements PipeTransform {

  transform(input, superfanFilter) {
    if(input) {
      let output: any[] = [];

      if (superfanFilter === "superfans") {
        for (let i = 0; i < input.length; i++) {
          if(input[i].watchedAll === true || input[i].watchedAll === "true") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }

    }
  }


}




// var output = [];
// for (var i = 0; i < membersDisplayLength; i++) {
//   if (input[i].watchedAll === true) {
//     output.push(input[i]);
//   }
// }
