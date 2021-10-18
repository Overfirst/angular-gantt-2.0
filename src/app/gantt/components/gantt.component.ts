import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { GanttTask } from '../types/gantt-task.interface';
import { GanttView } from '../types/gantt-view.enum';

@Component({
  selector: 'ng-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GanttComponent {
  public ganttWidth: string = '100%';
  public ganttHeight: string = '400px';
  public contentScroll: number = 0;

  @Input() public set width(width: string) {
    if (parseInt(width) >= 1200) {
      this.ganttWidth = width;
    }
  }

  @Input() public set height(height: string) {
    if (parseInt(height) >= 400) {
      this.ganttHeight = height;
    }
  }

  @Input() public tasks: GanttTask[] = [];
  @Input() public view: GanttView = GanttView.Day;

  @Output() public onTaskCreated = new EventEmitter<GanttTask>();
  @Output() public onTaskRemoved = new EventEmitter<GanttTask>();
  @Output() public onTaskChanged = new EventEmitter<GanttTask>();

  public onContentScroll(scroll: number): void {
    this.contentScroll = scroll;
  }

  public changeView(view: GanttView): void {
    this.view = view;
  }
}
