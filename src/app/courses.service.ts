import { InputFormatDirective } from './input-format.directive';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses = [
    { id: 1, name: "Angular"},
    { id: 2, name: "TypeScript"},
    { id: 3, name: "NodeJS"},
    { id: 4, name: "SQL Database"}
  ]

  getCourses() {
    return this.courses;
  }


}
