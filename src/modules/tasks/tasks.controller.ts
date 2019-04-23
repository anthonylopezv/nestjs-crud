import { Body, Controller, Get, Post, Param, Put, Delete} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/task.interface';

@ApiUseTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ title: 'Create task' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async create(@Body() createTaskDto: CreateTaskDto) {
    this.tasksService.create(createTaskDto);
  }

  @Get()
  async findTasks(): Promise<Task[]> {
    return this.tasksService.findTasks();
  }

  @Get(':id')
  async findTask(@Param('id') id: string) {
    return await this.tasksService.findTask(id);
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() task: Partial<Task>) {
    return await this.tasksService.updateTask(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.tasksService.deleteTask(id);
  }
}