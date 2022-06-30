import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page/login-page.component";
import {StudentListPage} from "./pages/student-list/student-list.component";
import {DashboardPage} from "./pages/dashboard/dashboard.component";
import {CalendarPage} from "./pages/calendar/calendar.component";

const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component: LoginPageComponent},
  {path:'calendar', component:CalendarPage},
  {path:'dashboard', component:DashboardPage},
  {path:'student-list', component:StudentListPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
