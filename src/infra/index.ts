import { Module } from '@nestjs/common';
import { DatabaseModule } from './database';
import { HttpModule } from './http';
import { RedisModule } from './redis';

@Module({
  imports: [DatabaseModule, RedisModule, HttpModule],
  exports: [DatabaseModule, RedisModule, HttpModule]
})
export class InfraModule {}
