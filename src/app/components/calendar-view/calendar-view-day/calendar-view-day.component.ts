import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { colors } from '../calendar-utils/colors';
import {
  startOfDay,
  addHours,
} from 'date-fns';

@Component({
  selector: 'app-calendar-view-day',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar-view-day.component.html',
  styleUrls: ['./calendar-view-day.component.scss']
})
export class CalendarViewDayComponent {

  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  dayStartHour: number = 8;
  dayEndHour: number = 19;

  events: CalendarEvent[] = [
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
      start: addHours(startOfDay(new Date('2022-07-03')), 9),
      end: addHours(new Date('2022-07-03'), 2),
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
      color: colors.blue,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    }
    ,{
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
    }
  ];

  // exclude weekends
  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  CalendarView = CalendarView;
}



