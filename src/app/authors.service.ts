import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return ["William Shakespeare", "John Doe", "T.S. Eliot"]
  }
}
