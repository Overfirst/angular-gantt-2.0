import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttComponent } from './components/gantt.component';
import { GanttTasksTableComponent } from './components/gantt-tasks-table/gantt-tasks-table.component';
import { GanttTimelineComponent } from './components/gantt-timeline/gantt-timeline.component';
import { GanttToolbarComponent } from './components/gantt-toolbar/gantt-toolbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GanttComponent,
    GanttTasksTableComponent,
    GanttTimelineComponent,
    GanttToolbarComponent,
  ],
  exports: [GanttComponent],
})
export class GanttModule {}
