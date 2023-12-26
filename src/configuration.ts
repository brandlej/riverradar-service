import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * https://docs.nestjs.com/techniques/configuration
 */
export default () => ({
  baseUrl: process.env.BASE_URL || `http://localhost:5130`,
  /**
   * https://docs.nestjs.com/openapi/introduction
   */
  swaggerDocument: (app) => {
    const config = new DocumentBuilder()
      .setTitle('RiverRadar Service')
      .setDescription('RiverRadar Service')
      .setVersion('1.0')
      .build();

    const options = {
      operationIdFactory: (controllerKey: string, methodKey: string) =>
        methodKey,
    };

    return SwaggerModule.createDocument(app, config, options);
  },
  database: {
    url: process.env.DATABASE_URL,
  },
});
