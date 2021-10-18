import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { GanttTask } from '../../types/gantt-task.interface';

@Component({
  selector: 'ng-gantt-timeline',
  templateUrl: './gantt-timeline.component.html',
  styleUrls: ['./gantt-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GanttTimelineComponent implements AfterViewInit {
  @ViewChild('content') public content!: ElementRef<HTMLBodyElement>;

  @Input() public tasks: GanttTask[] = [];

  @Output() public onScroll = new EventEmitter<number>();

  @Input() public set contentScroll(scroll: number) {
    if (this.content) {
      this.content.nativeElement.scrollTop = scroll;
    }
  }

  public ngAfterViewInit(): void {
    this.content.nativeElement.onscroll = () =>
      this.onScroll.emit(this.content.nativeElement.scrollTop);
  }
}
