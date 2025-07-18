import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private selectedFilter = signal<string>('all');
  private service = inject(TasksService);
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'all':
        return this.service.allTasks();
      case 'open':
        return this.service.allTasks().filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.service
          .allTasks()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.service.allTasks().filter((task) => task.status === 'DONE');
      default:
        return this.service.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
