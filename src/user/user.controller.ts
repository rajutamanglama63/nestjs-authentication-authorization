import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserGuard } from "./guards/user.guard";
import { UserPipe } from "./pipes/user.pipe";
import { UserService } from "./user.service";


@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @UseGuards(UserGuard)
    create(@Body(new UserPipe()) createUserDTO: CreateUserDTO) {
        return this.userService.create(createUserDTO)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get()
    findUserByEmail(email: string) {
        return this.userService.findUserByEmail(email)
    }

    
}
