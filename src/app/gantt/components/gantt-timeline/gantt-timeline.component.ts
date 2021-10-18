import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-gantt-timeline',
  templateUrl: './gantt-timeline.component.html',
  styleUrls: ['./gantt-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GanttTimelineComponent {}
