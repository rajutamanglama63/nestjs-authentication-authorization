import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserPipe } from "./pipes/user.pipe";
import { UserService } from "./user.service";


@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body(new UserPipe()) createUserDTO: CreateUserDTO) {
        return this.userService.create(createUserDTO)
    }
}
