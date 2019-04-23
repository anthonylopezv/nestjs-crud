import { Body, Controller, Get, Post, Param, Put, Delete} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/task.interface';
import { async } from 'rxjs/internal/scheduler/async';
import { throws } from 'assert';

@Controller('api')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/tasks')
  async create(@Body() createTaskDto: CreateTaskDto) {
    this.tasksService.create(createTaskDto);
  }

  @Get('/tasks')
  async findTasks(): Promise<Task[]> {
    return this.tasksService.findTasks();
  }

  @Get('/tasks/:id')
  async findTask(@Param('id') id: string) {
    return await this.tasksService.findTask(id);
  }

  @Put('/tasks/:id')
  async updateTask(@Param('id') id: string, @Body() task: Partial<Task>) {
    return await this.tasksService.updateTask(id, task);
  }

  @Delete('/tasks/:id')
  async deleteTask(@Param('id') id: string) {
    return await this.tasksService.deleteTask(id);
  }
}