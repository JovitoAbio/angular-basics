import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        UsernameValidators.cannotContainSpace
      ], UsernameValidators.isTaken),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

  constructor() { }

  ngOnInit() { }

  login() {
    let isValid: boolean = false;
    if(!isValid) {
      this.form.setErrors({
        invalidLogin: true
      })
    }
  }

}
