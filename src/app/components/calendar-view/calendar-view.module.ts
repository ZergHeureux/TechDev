import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CalendarCommonModule,
  CalendarDayModule,
  CalendarModule,
  CalendarMonthModule,
  CalendarWeekModule,
  DateAdapter
} from 'angular-calendar';
import { DemoUtilsModule } from './calendar-utils/calendar.module';
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {CalendarViewAllComponent} from "./calendar-view-all/calendar-view-all.component";
import {CalendarViewDayComponent} from "./calendar-view-day/calendar-view-day.component";


@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DemoUtilsModule,
    CalendarWeekModule,
    CalendarMonthModule,
    CalendarDayModule,
    CalendarCommonModule
  ],
  declarations: [CalendarViewAllComponent, CalendarViewDayComponent],
  exports: [CalendarViewAllComponent, CalendarViewDayComponent],
})
export class CalendarViewModule { }
