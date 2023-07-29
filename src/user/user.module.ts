import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthenticateMiddleware } from './middlewares/authenticatedMiddleware';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthenticateMiddleware]
})
export class UserModule {}
