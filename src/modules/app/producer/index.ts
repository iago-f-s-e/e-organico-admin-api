import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { InfraModule } from '@src/infra';

import * as Controllers from './controllers';
import * as UseCases from './use-cases';

const controllers = Object.values(Controllers);
const useCases = Object.values(UseCases);

@Module({
  imports: [InfraModule],
  controllers: controllers,
  providers: useCases,
  exports: useCases
})
export class ProducerModule {}

export const producerPrefix: RouteTree = {
  path: '/producer',
  module: ProducerModule
};
