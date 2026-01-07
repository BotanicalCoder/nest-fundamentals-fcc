import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/create-user-dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private userServive:UsersService,
        private authService: AuthService
    ){}
    @Post('signup')
    signup(
        @Body()
        userDto:CreateUserDTO,
    ):Promise<User>{
        return this.userServive.create(userDto)
    }

    @Post('login')
    login(
        @Body()
        loginDto: LoginDTO
    ):Promise <User>{
        return this.authService.login(loginDto)
    }
}
