import {Pipe, PipeTransform} from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
  name: "searchFilter"
})

export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();
    debugger;
    return value.filter(function(item){
      return JSON.stringify(item)
      .toLowerCase()
      .includes(args);
    })
  }
}