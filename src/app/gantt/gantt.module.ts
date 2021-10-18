import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttComponent } from './components/gantt.component';
import { GanttTasksTableComponent } from './components/gantt-tasks-table/gantt-tasks-table.component';
import { GanttTimelineComponent } from './components/gantt-timeline/gantt-timeline.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GanttComponent,
    GanttTasksTableComponent,
    GanttTimelineComponent,
  ],
  exports: [GanttComponent],
})
export class GanttModule {}
