import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GanttModule } from './gantt/gantt.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GanttModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
