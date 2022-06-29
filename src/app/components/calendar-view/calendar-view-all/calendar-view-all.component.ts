import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { colors } from '../calendar-utils/colors';
import {addHours, startOfDay} from "date-fns";
import {Router} from "@angular/router";

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
      start: new Date('2022-06-30'),
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
    {
      start: new Date('2022-06-29'),
      end: new Date('2022-06-29'),
      title: 'One day excluded event',
      color: colors.red,
      allDay: true,
    },
    {
      start: new Date('2022-07-01'),
      end: new Date('2022-07-01'),
      title: 'One day excluded event',
      color: colors.red,
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 10),
      end: addHours(new Date(), 2),
      title: 'A draggable event',
      color: colors.yellow,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },{
      start: addHours(startOfDay(new Date('2022-07-04')), 9),
      end: addHours(new Date('2022-07-04'), 3),
      title: 'A draggable event',
      color: colors.blue,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours(startOfDay(new Date()), 11),
      end: addHours(new Date(), 3),
      title: 'A draggable event',
      color: colors.yellow,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: new Date('2022-07-06'),
      end: new Date('2022-07-07'),
      title: 'Multiple weeks event',
      allDay: true,
    },
    {
      start: new Date('2022-07-08'),
      end: new Date('2022-07-08'),
      title: 'One day excluded event',
      color: colors.red,
      allDay: true,
    },
  ];

  // exclude weekends
  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  CalendarView = CalendarView;
  constructor(private router: Router){}

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
    this.router.navigate(['/student-list']).then(r => console.log(r));
  }
}



