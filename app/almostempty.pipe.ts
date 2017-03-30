import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "almostEmpty",
  pure: false
})

  export class AlmostEmptyPipe implements PipeTransform {
    transform(input: Keg[], desiredFullness) {
      var output: Keg[] = [];
    if(desiredFullness === "almostEmptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].volume < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFullness === "mostlyFullKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].volume > 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
