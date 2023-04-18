import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/entities/user.entity";


export class AuthenticationService {
    constructor(private readonly jwtService: JwtService) {}

    // genereting token or in simple words we can say that we are creating id card
    generateToken(payload: User) : string {
        // console.log("type: ", typeof this.jwtService)
        return this.jwtService.sign(payload)
    }
}