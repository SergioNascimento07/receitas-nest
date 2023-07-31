import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthenticateUserMiddleware } from '../middlewares/authenticateUserMiddleware';
import { AuthenticateAdmMiddleware } from '../middlewares/authenticateAdmMiddleware';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthenticateUserMiddleware, AuthenticateAdmMiddleware]
})
export class UserModule {}
