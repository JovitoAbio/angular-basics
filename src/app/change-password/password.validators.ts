import { ValidationErrors, AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static invalidOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if((control.value as string) !== '1234')
          resolve({ invalidOldPassword: true })
        else
          resolve(null);
      }, 2000)
    });
  }

  static passwordsMismatched(control: AbstractControl) : ValidationErrors | null {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');
    if(newPassword.value !== confirmPassword.value)
        return { passwordsMismatched: true };
    return null;
  }

}
