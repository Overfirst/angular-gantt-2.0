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
import { GanttService } from '../../services/gantt.service';
@Component({
  selector: 'ng-gantt-tasks-table',
  templateUrl: './gantt-tasks-table.component.html',
  styleUrls: ['./gantt-tasks-table.component.scss'],
})
export class GanttTasksTableComponent implements AfterViewInit {
  constructor(private service: GanttService) {}

  @ViewChild('content') public content!: ElementRef<HTMLDivElement>;

  @Input() public tasks: GanttTask[] = [];

  @Input() public set contentScroll(scroll: number) {
    if (this.content) {
      this.content.nativeElement.scrollTop = scroll;
    }
  }

  @Input() public visibleRows: number = 10;

  @Output() public onScroll = new EventEmitter<number>();

  public ngAfterViewInit(): void {
    this.content.nativeElement.onscroll = () =>
      this.onScroll.emit(this.content.nativeElement.scrollTop);
  }

  public getContentHeight(): string {
    return this.service.rowHeight * this.visibleRows + 'px';
  }
}
