import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page/login-page.component";
import {DashboardPage} from "./pages/dashboard/dashboard.component";
import {CalendarPage} from "./pages/calendar/calendar.component";
import { StudentView } from './pages/student-view/student-view.component';
import { TeacherClassView } from './pages/teacher-class-view/teacher-class-view.component';

const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component: LoginPageComponent},
  {path:'calendar', component:CalendarPage},
  {path:'dashboard', component:DashboardPage},
  {path:'student-list', component:StudentView},
  {path:'student-list-teacher', component:TeacherClassView}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
