import { Injectable, CanActivate, Req} from '@nestjs/common';


@Injectable()
export class AuthenticateMiddleware implements CanActivate {
  canActivate(): boolean {
    const now = new Date();
    return now.getFullYear() === 2023;
  }
}