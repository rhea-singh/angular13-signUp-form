import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static validatePassword(firstName: string, lastName: string, password: string): ValidatorFn {
    return (controls: AbstractControl) => {  
      const fName = controls.get(firstName);
      const lName = controls.get(lastName);
      const passwrd = controls.get(password);

      if (passwrd?.errors && !passwrd.errors['invalid']) {
        return null;
      }

      if (passwrd?.value.includes(fName?.value) || passwrd?.value.includes(lName?.value)) {
        return null;
      } else {
        controls.get(password)?.setErrors({ invalid: true });
        return { invalid: true };
      }
    };
  }
}
