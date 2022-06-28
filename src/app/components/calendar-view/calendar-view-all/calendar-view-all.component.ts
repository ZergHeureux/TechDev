import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { colors } from '../calendar-utils/colors';

@Component({
  selector: 'mwl-demo-component',

  // selector: 'app-calendar-view-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'calendar-view-all.component.html',
})
export class CalendarViewAllComponent {

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  dayStartHour: number = 8;
  dayEndHour: number = 19;

  events: CalendarEvent[] = [
    {
      start: new Date('2022-06-23'),
      end: new Date('2022-06-30'),
      title: 'One day excluded event',
      color: colors.red,
      allDay: true,
    },
    {
      start: new Date('2022-06-23'),
      end: new Date('2022-06-30'),
      title: 'Multiple weeks event',
      allDay: true,
    },
  ];

  // exclude weekends
  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  CalendarView = CalendarView;
}



