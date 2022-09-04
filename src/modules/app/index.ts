import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { marketPrefix, MarketModule } from './market';
import { producerPrefix, ProducerModule } from './producer';
import { ProducerMarketModule, producerMarketPrefix } from './producer-market';
import { producerProductPrefix, ProducerProductModule } from './producer-product';
import { productPrefix, ProductModule } from './product';

const modules = [
  ProducerModule,
  ProducerProductModule,
  ProducerMarketModule,
  ProductModule,
  MarketModule
].sort((prev, next) =>
  prev.name.replace('Module', '').localeCompare(next.name.replace('Module', ''))
);

const prefixes = [
  producerPrefix,
  producerProductPrefix,
  producerMarketPrefix,
  marketPrefix,
  productPrefix
].sort((prev, next) => prev.path.localeCompare(next.path));

@Module({ imports: [...modules] })
export class AppModule {}

export const appPrefix: RouteTree = {
  path: '/api',
  module: AppModule,
  children: [...prefixes]
};
