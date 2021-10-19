import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { GanttTask } from '../types/gantt-task.interface';
import { GanttView } from '../types/gantt-view.enum';

@Component({
  selector: 'ng-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GanttComponent implements AfterViewInit {
  @ViewChild('gantt') public gantt!: ElementRef<HTMLDivElement>;
  @ViewChild('tasksTable') public tasksTable!: ElementRef<HTMLDivElement>;

  public contentScroll: number = 0;
  public timelineWidth: number = 0;

  @Input() public tasks: GanttTask[] = [];
  @Input() public view: GanttView = GanttView.Day;
  @Input() public visibleRows: number = 10;

  @Output() public onTaskCreated = new EventEmitter<GanttTask>();
  @Output() public onTaskRemoved = new EventEmitter<GanttTask>();
  @Output() public onTaskChanged = new EventEmitter<GanttTask>();

  constructor(private cdRef: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.calculateTimelineWidth();
  }

  public onContentScroll(scroll: number): void {
    this.contentScroll = scroll;
  }

  public changeView(view: GanttView): void {
    this.view = view;
  }

  public calculateTimelineWidth(): void {
    const ganttWidth = this.gantt.nativeElement.getBoundingClientRect().width;
    const tasksTableWidth = this.tasksTable.nativeElement.getBoundingClientRect().width;
    const totalWidth = ganttWidth - tasksTableWidth;

    this.timelineWidth = totalWidth >= 400 ? totalWidth : 400;
    this.cdRef.detectChanges();
  }

  @HostListener('window:resize') public onResize(): void {
    this.calculateTimelineWidth();
  }
}
