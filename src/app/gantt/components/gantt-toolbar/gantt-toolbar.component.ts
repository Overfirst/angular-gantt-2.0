import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GanttView } from '../../types/gantt-view.enum';

@Component({
  selector: 'ng-gantt-toolbar',
  templateUrl: './gantt-toolbar.component.html',
  styleUrls: ['./gantt-toolbar.component.scss'],
})
export class GanttToolbarComponent {
  public views: string[] = [...Object.values(GanttView)];

  @Input() public selectedView: GanttView = GanttView.Week;

  @Output() public onViewChanged = new EventEmitter<GanttView>();
  @Output() public onAddTaskClicked = new EventEmitter<void>();

  public selectView(view: string) {
    this.selectedView = view as GanttView;
    this.onViewChanged.emit(this.selectedView);
  }

  public addTask(): void {
    this.onAddTaskClicked.emit();
  }
}
