import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      skills: fb.array([])
    })
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  ngOnInit() { }

  addSkill(skill: HTMLInputElement) {
    this.skills.push(new FormControl(skill.value));
    skill.value = '';
  }

  removeSkill(skill: FormControl) {
    let index = this.skills.controls.indexOf(skill);
    this.skills.removeAt(index);
  }

}
