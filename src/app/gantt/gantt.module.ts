import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttComponent } from './components/gantt.component';
import { GanttTasksTableComponent } from './components/gantt-tasks-table/gantt-tasks-table.component';
import { GanttTimelineComponent } from './components/gantt-timeline/gantt-timeline.component';
import { GanttToolbarComponent } from './components/gantt-toolbar/gantt-toolbar.component';
import { GanttService } from './services/gantt.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GanttComponent,
    GanttTasksTableComponent,
    GanttTimelineComponent,
    GanttToolbarComponent,
  ],
  exports: [GanttComponent],
  providers: [GanttService],
})
export class GanttModule {}
