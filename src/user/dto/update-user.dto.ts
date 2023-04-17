import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDTO) {
    firstname: string
    lastname: string
    email: string
    password: string
}