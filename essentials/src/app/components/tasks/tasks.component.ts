import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  isAddingTask = false;
  userId = input.required<string>();
  username = input.required<string>();
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddingTask() {
    this.isAddingTask = true;
  }

  onCancelAddingTask() {
    this.isAddingTask = false;
  }
}
