import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.model';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks(): Task[] {
    return this.tasks;
  }
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: this.tasks.length + 1,
      title,
      description,
      status: taskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
