import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  exports:[AuthService],
  imports: [UsersModule, JwtModule.register({secret:"Badgani-shuuuuuu it's a secret"})],
})
export class AuthModule {}
