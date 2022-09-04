import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { InfraModule } from '@src/infra';
import { AppModule, appPrefix } from './app';

@Module({
  imports: [AppModule, InfraModule, RouterModule.register([appPrefix])]
})
export class Modules {}
