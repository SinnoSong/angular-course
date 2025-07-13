import { Component, computed, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userName = input.required<string>();
  // userId = input.required<string>();
  // private usersService = inject(UsersService);

  // userName = computed(
  //   () =>
  //     this.usersService.users.find((user) => this.userId() === user.id)?.name ??
  //     'Unknown User'
  // );
}

export const resolvedUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (user) => activatedRoute.paramMap.get('userId') === user.id
    )?.name ?? 'Unknown User';
  return userName;
};
