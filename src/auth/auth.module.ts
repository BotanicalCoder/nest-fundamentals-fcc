import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { authConstants } from './auth.constants';
import { JWTStrategy } from './jwt-strategy';

@Module({
  providers: [AuthService, JWTStrategy],
  controllers: [AuthController],
  exports:[AuthService],
  imports: [UsersModule, JwtModule.register({secret:authConstants.secret, signOptions:{
    expiresIn:"1d"
  }})],
})
export class AuthModule {}
