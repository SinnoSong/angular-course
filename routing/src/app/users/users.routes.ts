import { Routes } from '@angular/router';

import { TasksComponent } from '../tasks/tasks.component';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';
import { resolvedUserName } from './user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    resolve: {
      username: resolvedUserName,
    },
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
  },
];
