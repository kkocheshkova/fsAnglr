import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { CoursePageComponent } from './components/course-page/course-page.component';



@NgModule({
  declarations: [
    UserComponent,
    CoursePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
