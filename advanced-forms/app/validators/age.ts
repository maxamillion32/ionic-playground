import {Control} from '@angular/common';

export class AgeValidator {

    static isValid(control: Control): { [msg: string]: boolean } {

        if (isNaN(control.value)) {
            return {
                "not a number": true
            };
        }

        if (control.value % 1 !== 0) {
            return {
                "not a whole number": true
            };
        }

        if (control.value < 18) {
            return {
                "too young": true
            };
        }

        if (control.value > 120) {
            return {
                "not realistic": true
            };
        }

        return null;
    }

}