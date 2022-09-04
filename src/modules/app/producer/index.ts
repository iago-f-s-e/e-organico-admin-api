import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { InfraModule } from '@src/infra';

import * as Controllers from './controllers';

const controllers = Object.values(Controllers);

@Module({
  imports: [InfraModule],
  controllers: controllers
})
export class ProducerModule {}

export const producerPrefix: RouteTree = {
  path: '/producer',
  module: ProducerModule
};
