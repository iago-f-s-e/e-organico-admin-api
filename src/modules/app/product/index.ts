import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { InfraModule } from '@src/infra';
import { ProducerProductModule } from '../producer-product';
import { ProductController } from './controllers';

@Module({
  imports: [InfraModule, ProducerProductModule],
  controllers: [ProductController]
})
export class ProductModule {}

export const productPrefix: RouteTree = {
  path: '/product',
  module: ProductModule
};
