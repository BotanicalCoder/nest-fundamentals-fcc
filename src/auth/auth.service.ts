import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcryptjs';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor (private userService: UsersService, private jwtService: JwtService){

    }

    async login (loginDto: LoginDTO): Promise <{
        token: string
    }>{
        const user = await this.userService.findOne(loginDto);
        const passwordMatched =  await bcrypt.compare(loginDto.password, user.password)

        if (passwordMatched) {
            delete (user as Partial<User>).password;
            return {token: this.jwtService.sign(user)}
        }else{
            throw new UnauthorizedException("Password does not match")
        }
    }
}
