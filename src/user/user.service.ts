import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {

    // inject user repository
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {

    }

    async create(createUserDTO: CreateUserDTO): Promise<User> {
        let user: User = new User()

        user.firstname = createUserDTO.firstname;
        user.lastname = createUserDTO.lastname;
        user.email = createUserDTO.email;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(createUserDTO.password, salt);

        user.password = hashedPassword;

        return this.userRepository.save(user)
    }

    findAll(): Promise<User[]> {
        return this.userRepository.find()
    }

    findUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({
            where: {
                email: email
            }
        })
    }
}