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
    start: new Date('2021-07-25 06:00'),
    end: new Date('2021-07-28 14:00'),
    readyPercent: 31,
  },
  {
    ID: 4,
    name: 'Test task 4',
    start: new Date('2021-08-12 12:00'),
    end: new Date('2021-08-17 16:30'),
    readyPercent: 77,
  },
  {
    ID: 5,
    name: 'Test task 5',
    start: new Date('2021-08-13 12:44'),
    end: new Date('2021-08-18 17:30'),
    readyPercent: 44,
  },
  {
    ID: 6,
    name: 'Test task 6',
    start: new Date('2021-07-14 12:12'),
    end: new Date('2021-07-19 21:30'),
    readyPercent: 84,
  },
  {
    ID: 7,
    name: 'Test task 7',
    start: new Date('2021-07-24 10:15'),
    end: new Date('2021-07-27 22:45'),
    readyPercent: 66,
  },
  {
    ID: 8,
    name: 'Test task 8',
    start: new Date('2021-07-26 13:33'),
    end: new Date('2021-07-29 14:55'),
    readyPercent: 42,
  },
  {
    ID: 9,
    name: 'Test task 9',
    start: new Date('2021-07-10 13:33'),
    end: new Date('2021-07-24 16:55'),
    readyPercent: 62,
  },
  {
    ID: 10,
    name: 'Test task 10',
    start: new Date('2021-07-16 11:33'),
    end: new Date('2021-07-18 12:55'),
    readyPercent: 83,
  },
];
