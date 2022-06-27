import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { DemoUtilsModule } from '../calendar-utils/calendar.module';
import { DemoComponent } from './demo.component';
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DemoUtilsModule,
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent],
})
export class DemoModule {}
