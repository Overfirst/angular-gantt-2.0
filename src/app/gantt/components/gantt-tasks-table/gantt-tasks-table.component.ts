import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { GanttTask } from '../../types/gantt-task.interface';

@Component({
  selector: 'ng-gantt-tasks-table',
  templateUrl: './gantt-tasks-table.component.html',
  styleUrls: ['./gantt-tasks-table.component.scss'],
})
export class GanttTasksTableComponent implements AfterViewInit {
  @ViewChild('content') public content!: ElementRef<HTMLBodyElement>;

  @Input() public tasks: GanttTask[] = [];

  @Input() public set contentScroll(scroll: number) {
    if (this.content) {
      this.content.nativeElement.scrollTop = scroll;
    }
  }

  @Output() public onScroll = new EventEmitter<number>();

  public ngAfterViewInit(): void {
    this.content.nativeElement.onscroll = () =>
      this.onScroll.emit(this.content.nativeElement.scrollTop);
  }
}
