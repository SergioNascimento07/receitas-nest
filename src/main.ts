import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import '../redis/allowlist'
import '../redis/blocklist'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      //quando nest usa validação ignora campos que não estão no dto
      whitelist: true,
      //lança erro se manda dado que não está
      forbidNonWhitelisted: true 
    })
    
  )
  useContainer(app.select(AppModule), { 
    fallbackOnErrors: true 
   }); 
  await app.listen(3000);
}
bootstrap();
