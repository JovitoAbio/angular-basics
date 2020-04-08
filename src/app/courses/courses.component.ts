import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses;
  courseInputValue: string;

  @Input('appInputFormat') format: string;

  constructor(service: CoursesService, private el: ElementRef) {
    this.courses = service.getCourses();
  }

  onBlur() {
    let value: string = this.el.nativeElement.value as string;
  }

  onAdd() {
    let currentGratestId = this.courses.length;
    let newId = currentGratestId += 1;
    let title = this.courseInputValue;
    this.courses.push({id: newId, name: title });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdate(course) {
    course.name = this.courseInputValue;
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: "Angular"},
      { id: 2, name: "TypeScript"},
      { id: 3, name: "NodeJS"},
      { id: 4, name: "SQL Database"}
    ]
  }

  trackCourse(index, course) {
    return course? course.id : undefined;
  }

}
