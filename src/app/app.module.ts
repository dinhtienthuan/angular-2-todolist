import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task-list/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import {TaskService} from "./task-list/task.service";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
