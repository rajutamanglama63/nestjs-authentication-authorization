import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly userService: UserService) {
        super()
    }

    async validate(email: string, password: string): Promise<User> {
        console.log("from validate: ", "hello")
        const user: User = await this.userService.findUserByEmail(email)
        console.log("user: ", user)

        if(!user) {
            throw new UnauthorizedException("User does not exist.")
        }

        if(!user && user.password !== password) {
            throw new UnauthorizedException("Invalid Credentials.")
        }
        return user;

    }
}