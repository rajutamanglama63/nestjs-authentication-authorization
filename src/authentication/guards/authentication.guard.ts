import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private readonly userService: UserService) {}

   
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = context.switchToHttp()

        const request = ctx.getRequest<Request>();

        // const users = await this.userService.findAll()
        const user = await this.userService.findUserByEmail(request.body.email)

        // const user = users.find((user) => user.email === request.body.email)

        if(user === undefined) {
            throw new UnauthorizedException("User does not exist.")
        }

        if(user.password !== request.body.password) {
            throw new UnauthorizedException("Invalid credentials.")
        }

        return true
    }
}