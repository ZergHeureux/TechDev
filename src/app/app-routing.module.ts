import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarViewAllComponent} from "./components/calendar-view/calendar-view-all/calendar-view-all.component";
import {CalendarViewDayComponent} from "./components/calendar-view/calendar-view-day/calendar-view-day.component";

const routes: Routes = [
  {path:'calendar', component:CalendarViewAllComponent},
  {path:'calendar-day', component:CalendarViewDayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
