import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredDescription = '';
  enteredDate = '';

  userId = input.required<string>();
  close = output();
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTasks(
      {
        title: this.enteredTitle,
        description: this.enteredDescription,
        date: this.enteredDate,
      },
      this.userId()
    );
    this.close.emit();
  }
}
