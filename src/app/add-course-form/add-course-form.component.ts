import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.scss']
})
export class AddCourseFormComponent implements OnInit {
  categories = [
    {id: 1, name: 'Art'},
    {id: 2, name: 'Development'},
    {id: 3, name: 'Languages'}
  ]
  constructor() { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
