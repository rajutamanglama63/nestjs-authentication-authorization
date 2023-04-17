import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {

    // inject user repository
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {

    }

    create(createUserDTO: CreateUserDTO): Promise<User> {
        let user: User = new User()

        user.firstname = createUserDTO.firstname;
        user.lastname = createUserDTO.lastname;
        user.email = createUserDTO.email;
        user.password = createUserDTO.password;

        return this.userRepository.save(user)
    }
}