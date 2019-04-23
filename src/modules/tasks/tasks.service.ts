
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TaskModelToken') private readonly taskModel: Model<Task>
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return await createdTask.save();
  }

  async findTasks(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async findTask(id: String): Promise<Task> {
    return await this.taskModel.findById(id);
  }

  async updateTask(id: String, taskData: Partial<Task>): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(id, taskData);
  }

  async deleteTask(id: String) : Promise<Task> {
    return await this.taskModel.findByIdAndDelete(id);
  }
}