import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  app.setGlobalPrefix('api');

  /**
   * https://docs.nestjs.com/techniques/versioning
   */
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1'],
  });

  /**
   * https://docs.nestjs.com/openapi/introduction
   */
  const createSwaggerDocument = app.get(ConfigService).get('swaggerDocument');
  const document = createSwaggerDocument(app);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
