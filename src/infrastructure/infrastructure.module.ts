import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/configuration';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './persistence/mikro-orm.config';
import { Logger as NestLogger } from '@nestjs/common/services/logger.service';

/**
 * The Infrastructure layer is responsible for providing the glue between the application layer and any external
 * dependencies. This includes database connections, HTTP clients, and other services. Global modules are registered here.
 */
@Module({
  imports: [
    /**
     * https://docs.nestjs.com/techniques/configuration
     */
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
    /**
     * https://docs.nestjs.com/recipes/mikroorm
     */
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          ...mikroOrmConfig,
          clientUrl: config.get('database.url'),
          logger: (message) => new NestLogger('MikroORM').log(message),
        };
      },
    }),
  ],
  providers: [],
})
export class InfrastructureModule {}
