import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses/courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ZippyComponent } from './zippy/zippy.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CoursesComponent,
    FavoriteComponent,
    ZippyComponent,
    InputFormatDirective,
    ContactFormComponent,
    AddCourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    SkillsFormComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
