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
];
