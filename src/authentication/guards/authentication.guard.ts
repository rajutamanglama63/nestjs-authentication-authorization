import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import * as bcrypt from 'bcrypt';
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private readonly userService: UserService) {}

   
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = context.switchToHttp()

        const request = ctx.getRequest<Request>();
        console.log("rreq: ", request.body)
        // const users = await this.userService.findAll()
        const user = await this.userService.findUserByEmail(request.body.email)
        console.log("user: ", user)

        // const user = users.find((user) => user.email === request.body.email)

        if(!user) {
            throw new UnauthorizedException("User does not exist.")
        }

        const isMatch = await bcrypt.compare(request.body.password, user.password)
        if(!isMatch) {
            throw new UnauthorizedException("Invalid credentials.")
        }

        return true
    }
}