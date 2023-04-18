// import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { User } from "src/user/entities/user.entity";


export class AuthenticationService {
    // constructor(private readonly jwtService: JwtService) {}
    private readonly jwtSecret = "secret"

    // genereting token or in simple words we can say that we are creating id card
    async generateToken(payload: User): Promise<string> {

        const token = jwt.sign(payload, this.jwtSecret)

        return token

        // return await this.jwtService.signAsync(payload)
    }
}