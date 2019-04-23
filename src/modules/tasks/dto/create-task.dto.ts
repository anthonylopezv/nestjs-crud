
import { ApiModelProperty } from '@nestjs/swagger';

import { Length, IsString } from 'class-validator';

export class CreateTaskDto {
    @ApiModelProperty({ type: String })
    @Length(10, 25)
    @IsString()
    readonly name: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly description: string;
}