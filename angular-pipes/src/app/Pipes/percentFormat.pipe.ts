import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percentFormat'
})
export class PercentPipeFormat implements PipeTransform {
    //Specifying number = 2 ensures if nothing passed as parameter from view while calling this pipe,
    //no error reported and by default, it takes number upto 2 decimals
    transform(marks: number, total: number, precision: number = 2) {
        return ((marks / total) * 100).toFixed(precision);
    }
}