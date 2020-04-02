import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses() {
    return [ "Angular", "TypeScript", "NodeJS", "SQL Database"]
  }
}
