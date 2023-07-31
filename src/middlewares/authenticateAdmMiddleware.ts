import { Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class AuthenticateAdmMiddleware implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token: string = request.headers.cookie//.split('=')[1]
    if (token) {
      const tokenBruto = token.match(/access_token=[\w-]{36}.[\w-]{83}.[\w-]{43}/)
      if (tokenBruto) {
        const finalToken = tokenBruto[0].split('=')[1]
        const chekedToken = verify(finalToken, process.env.KEY_TOKEN)
        if(chekedToken) {
          const chekedToken2 = chekedToken as {id: string, iat: number}
          const user = await prismaClient.users.findUnique({
            where: {
              id: chekedToken2.id
            }
          })
          if (user.role === 'ADM') {
            return true
          }
        }
      }
    }
    return false
  }
}