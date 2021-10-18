import { GanttTask } from './gantt/types/gantt-task.interface';

export const ganttTasks: GanttTask[] = [
  {
    ID: 1,
    name: 'Test task 1',
    start: new Date('2021-07-16 09:00'),
    end: new Date('2021-07-25 16:00'),
    readyPercent: 100,
  },
  {
    ID: 2,
    name: 'Test task 2',
    start: new Date('2021-07-12 07:00'),
    end: new Date('2021-07-16 12:00'),
    readyPercent: 62,
  },
  {
    ID: 3,
    name: 'Test task 3',
    start: new Date('2021-06-25 06:00'),
    end: new Date('2021-06-28 14:00'),
    readyPercent: 31,
  },
  {
    ID: 4,
    name: 'Test task 4',
    start: new Date('2021-08-12 12:00'),
    end: new Date('2021-08-17 16:30'),
    readyPercent: 77,
  },
];
