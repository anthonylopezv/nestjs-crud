
import { Length, IsString } from 'class-validator';

export class CreateTaskDto {
    @Length(10, 25)
    @IsString()
    name: string;

    @IsString()
    description: string;
}