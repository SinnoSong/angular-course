import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: '1',
      userId: 'u1',
      title: 'Task 1',
      description: 'Description for Task 1',
      dueDate: '2025-10-01',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description for Task 2',
      dueDate: '2025-10-02',
      userId: 'u2',
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'Description for Task 3',
      dueDate: '2025-10-03',
      userId: 'u3',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTasks(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId,
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
