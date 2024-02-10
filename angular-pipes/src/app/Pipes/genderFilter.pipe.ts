import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/Student";

@Pipe({
    name: 'filterByGender'
})
export class GenderFilterPipe implements PipeTransform {
    transform(value: Student[], gender: string) {
        if (gender.toLowerCase() === 'all') {
            return value;
        }
        else {
            return value.filter((student) => {
                return student.gender.toLowerCase() === gender.toLowerCase()
            }
            );
        }
    }
}