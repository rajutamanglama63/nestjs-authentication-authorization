import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "../user.service";


@Injectable()
export class UserGuard implements CanActivate {

    constructor(private readonly userService: UserService) {}

    async canActivate(context: ExecutionContext): Promise<boolean>{
        const ctx = context.switchToHttp();

        const request = ctx.getRequest<Request>();
        // console.log("request: ", request.body)

        const users = await this.userService.findAll()

        const userExist = users.find((user) => user.email === request.body.email)

        if(userExist) {
            throw new BadRequestException("User already exist.")
        }

        return true
    }
}