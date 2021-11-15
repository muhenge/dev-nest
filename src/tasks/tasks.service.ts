import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.model';
import { CreateTaskDto } from './create-task-dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks(): Task[] {
    return this.tasks;
  }
  createTask(CreateTaskDto: CreateTaskDto): Task {
    const { title, description } = CreateTaskDto; 
    const task: Task = {
      id: this.tasks.length + 1,
      title,
      description,
      status: taskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  getOneTask(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
