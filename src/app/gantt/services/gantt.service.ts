import { Injectable } from '@angular/core';

import {
  addDays,
  addHours,
  addWeeks,
  differenceInCalendarDays,
  differenceInCalendarWeeks,
  endOfWeek,
  startOfWeek
} from 'date-fns';

import { GanttTask } from '../types/gantt-task.interface';
import { GanttView } from '../types/gantt-view.enum';
import { GanttTimelineDates } from '../types/gantt-timeline-dates.interface';

@Injectable()
export class GanttService {
  public readonly rowHeight: number = 40;

  public getTimelineDates(tasks: GanttTask[], view: GanttView): GanttTimelineDates {
    const extremeDates = this.getTasksExtremeDates(tasks);

    switch (view) {
      case GanttView.Day:
        return this.getTimelineDatesForDayView(extremeDates);

      case GanttView.Week:
        return this.getTimelineDatesForWeekView(extremeDates);

      case GanttView.Month:
        return this.getTimelineDatesForMonthView(extremeDates);
    }
  }

  private getTimelineDatesForDayView(extremeDates: Date[]): GanttTimelineDates {
    const daysDifference = differenceInCalendarDays(extremeDates[1], extremeDates[0]);

    const headerDates = [...Array<Date>(daysDifference + 1)]
      .map((date, index) => addDays(extremeDates[0], index));

    const detailDates = headerDates.reduce((dates: Date[], date: Date) => [...dates, ...[...Array<Date>(24)]
      .map((hour, index) => addHours(date, index))], []);

    return {
      headerDates,
      detailDates,
    };
  }

  private getTimelineDatesForWeekView(extremeDates: Date[]): GanttTimelineDates {
    const firstWeekStart = startOfWeek(extremeDates[0], { weekStartsOn: 1 });
    const lastWeekEnd = endOfWeek(extremeDates[1], { weekStartsOn: 1 });

    const weeksDifference = differenceInCalendarWeeks(lastWeekEnd, firstWeekStart, { weekStartsOn: 1 });

    const headerDates = [...Array<Date>(weeksDifference + 1)]
      .map((date, index) => addWeeks(firstWeekStart, index));

    const detailDates = headerDates.reduce((dates: Date[], date: Date) => [...dates, ...[...Array<Date>(7)]
      .map((hour, index) => addDays(date, index))], []);

    return {
      headerDates,
      detailDates,
    };
  }

  private getTimelineDatesForMonthView(extremeDates: Date[]): GanttTimelineDates {
    return {
      headerDates: [],
      detailDates: [],
    };
  }

  private getTasksExtremeDates(tasks: GanttTask[]): Date[] {
    const timeStamps = tasks
      .reduce((dates: Date[], task: GanttTask) => [...dates, task.start, task.end], [])
      .map((date) => date.getTime());

    return [
      new Date(Math.min(...timeStamps)),
      new Date(Math.max(...timeStamps))
    ].map((date) => this.clearDateTime(date));
  }

  private clearDateTime(date: Date): Date {
    const newDate = new Date(date);

    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);

    return newDate;
  }
}
