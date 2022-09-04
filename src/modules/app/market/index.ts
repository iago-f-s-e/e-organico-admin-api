import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { InfraModule } from '@src/infra';
import { ProducerMarketModule } from '../producer-market';
import { MarketController } from './controllers';

@Module({
  imports: [InfraModule, ProducerMarketModule],
  controllers: [MarketController]
})
export class MarketModule {}

export const marketPrefix: RouteTree = {
  path: '/market',
  module: MarketModule
};
