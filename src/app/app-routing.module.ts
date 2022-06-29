import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarViewAllComponent} from "./components/calendar-view/calendar-view-all/calendar-view-all.component";
import {CalendarViewDayComponent} from "./components/calendar-view/calendar-view-day/calendar-view-day.component";
import {QrCodeImplComponent} from "./components/qr-code/qr-code-impl/qr-code-impl.component";
import {StudentList} from "./components/student-list/student-list.component";

const routes: Routes = [
  {path:'calendar', component:CalendarViewAllComponent},
  {path:'calendar-day', component:CalendarViewDayComponent},
  {path:'qrcode', component:QrCodeImplComponent},
  {path:'student-list', component:StudentList},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
