import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    {id: 1, name: 'email'},
    {id: 2, name: 'phone'}
  ]
  constructor() { }

  ngOnInit() { }

  logForm(form: NgForm) {
    console.log(form.value);
  }

}
