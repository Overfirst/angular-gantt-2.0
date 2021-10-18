import { Component, Input } from '@angular/core';
import { GanttTask } from '../../types/gantt-task.interface';

@Component({
  selector: 'ng-gantt-tasks-table',
  templateUrl: './gantt-tasks-table.component.html',
  styleUrls: ['./gantt-tasks-table.component.scss'],
})
export class GanttTasksTableComponent {
  @Input() public tasks: GanttTask[] = [];
}
