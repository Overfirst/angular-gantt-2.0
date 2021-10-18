import { Component } from '@angular/core';
import { GanttTask } from './gantt/types/gantt-task.interface';
import { ganttTasks } from './gantt-tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public tasks: GanttTask[] = ganttTasks;

  public taskCreated(task: GanttTask): void {
    console.log('Create task', task);
  }

  public taskChanged(task: GanttTask): void {
    console.log('Change task', task);
  }

  public taskRemoved(task: GanttTask): void {
    console.log('Remove task', task);
  }
}
