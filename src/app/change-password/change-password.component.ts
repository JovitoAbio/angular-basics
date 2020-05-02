import { PasswordValidators } from './password.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
      Validators.required,
      PasswordValidators.invalidOldPassword
    ],
      newPassword: ['', Validators.required,],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsMismatched
    });
  }

  get oldPassword() {
    return this.form.controls['oldPassword'];
  }

  get newPassword() {
    return this.form.controls['newPassword'];
  }

  get confirmPassword() {
    return this.form.controls['confirmPassword'];
  }

  ngOnInit() { }

}
