import { Model } from 'mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findTasks(): Promise<Task[]>;
    findTask(id: String): Promise<Task>;
    updateTask(id: String, updateTaskDto: UpdateTaskDto): Promise<Task>;
    deleteTask(id: String): Promise<Task>;
}
