import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { InfraModule } from '@src/infra';
import { ProducerMarketController } from './controllers';

@Module({
  imports: [InfraModule],
  controllers: [ProducerMarketController]
})
export class ProducerMarketModule {}

export const producerMarketPrefix: RouteTree = {
  path: '/producer-market',
  module: ProducerMarketModule
};
