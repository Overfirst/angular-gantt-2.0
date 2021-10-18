import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GanttTask } from '../types/gantt-task.interface';

@Component({
  selector: 'ng-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GanttComponent {
  @Input() public tasks: GanttTask[] = [];
}
