import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../tasks/task.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);
  allTasks = this.tasks.asReadonly();

  onAddTask(task: { title: string; description: string }) {
    const newTask: Task = {
      id: Math.random().toString(),
      title: task.title,
      description: task.description,
      status: 'OPEN',
    };
    this.tasks.update((prevTasks) => [...prevTasks, newTask]);
    this.loggingService.log('add task ' + newTask.title);
  }

  updateTaskStatue(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          task.status = newStatus;
        }
        return task;
      });
    });
    this.loggingService.log('update task' + taskId);
  }
}
