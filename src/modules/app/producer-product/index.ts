import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { InfraModule } from '@src/infra';
import { ProducerProductController } from './controllers';

@Module({
  imports: [InfraModule],
  controllers: [ProducerProductController]
})
export class ProducerProductModule {}

export const producerProductPrefix: RouteTree = {
  path: '/producer-product',
  module: ProducerProductModule
};
