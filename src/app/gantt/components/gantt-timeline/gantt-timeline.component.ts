import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

import { GanttTask } from '../../types/gantt-task.interface';
import { GanttTimelineDates } from '../../types/gantt-timeline-dates.interface';
import { GanttService } from '../../services/gantt.service';
import { GanttView } from '../../types/gantt-view.enum';
import { endOfWeek } from 'date-fns';

@Component({
  selector: 'ng-gantt-timeline',
  templateUrl: './gantt-timeline.component.html',
  styleUrls: ['./gantt-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GanttTimelineComponent implements AfterViewInit {
  constructor(private service: GanttService) {}

  @ViewChild('header') public header!: ElementRef<HTMLDivElement>;
  @ViewChild('content') public content!: ElementRef<HTMLDivElement>;

  private ganttTasks: GanttTask[] = [];
  private ganttView: GanttView = GanttView.Day;

  public timelineDates: GanttTimelineDates | null = null;

  @Input() public set tasks(tasks: GanttTask[]) {
    this.ganttTasks = tasks;
    this.timelineDates = this.service.getTimelineDates(this.tasks, this.view);
  }

  public get tasks(): GanttTask[] {
    return this.ganttTasks;
  }

  @Input() public set view(view: GanttView) {
    this.ganttView = view;
    this.timelineDates = this.service.getTimelineDates(this.tasks, this.view);
  }

  public get view(): GanttView {
    return this.ganttView;
  }

  @Output() public onScroll = new EventEmitter<number>();

  @Input() public set contentScroll(scroll: number) {
    if (this.content) {
      this.content.nativeElement.scrollTop = scroll;
    }
  }

  @Input() public contentWidth: number = 400;
  @Input() public visibleRows: number = 10;

  public ngAfterViewInit(): void {
    this.header.nativeElement.onscroll = () => this.content.nativeElement.scrollLeft = this.header.nativeElement.scrollLeft;
    console.log('onContentScroll', this.header.nativeElement.scrollLeft);

    this.content.nativeElement.onscroll = () => {
      this.header.nativeElement.scrollLeft = this.content.nativeElement.scrollLeft;
      console.log('onContentScroll', this.content.nativeElement.scrollLeft);
      this.onScroll.emit(this.content.nativeElement.scrollTop);
    }
  }

  public getWeekEnd(date: Date): Date {
    return endOfWeek(date, { weekStartsOn: 1 });
  }

  public getContentHeight(): string {
    return 17 + this.service.rowHeight * this.visibleRows + 'px';
  }
}
