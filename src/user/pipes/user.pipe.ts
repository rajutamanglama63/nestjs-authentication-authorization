import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";



export class UserPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata) {
        const {firstname, lastname, email, password} = value;
        if(!firstname || !lastname || !email || !password) {
            throw new BadRequestException("All fields are required.")
        }

        if(password.length <= 3) {
            throw new BadRequestException("Password is too weak.")
        }
         
        return value;
    }
}