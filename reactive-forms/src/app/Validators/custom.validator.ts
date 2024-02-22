import { AbstractControl, FormControl } from "@angular/forms";

//Create a const variable noSpaceValidator
//Assign a function to it
//Add param, in this case, it accepts form control
//This is one way, another is to use Class and then static method inside it, see below 
// export const noSpaceValidator = (control: FormControl) => {
//     if (control.value != null && control.value.indexOf(' ') !== -1) {
//         return { noSpace: true }
//     }
//     return null;
// }

export class CustomValidator {
    static noSpace(control: FormControl) {
        if (control.value != null && control.value.indexOf(' ') !== -1) {
            return { noSpace: true }
        }
        return null;
    }

    static usrNameAvailable(control: AbstractControl) {
        let takenUserNames = ['nilesh13', 'mahesh10', 'rakesh7'];
        return new Promise((resolve, reject) => {
            if (takenUserNames.includes(control.value?.toLowerCase())) {
                return resolve({ usrNameUnavailable: true })
            }
            else {
                return resolve(null);
            }
        })
    }

}