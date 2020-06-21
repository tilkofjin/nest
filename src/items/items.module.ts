/*
 * @Author: Tilkofjin
 * @Date: 2020-06-21 16:19:39
 * @LastEditTime: 2020-06-21 16:24:03
 * @LastEditors: Tilkofjin
 * @Description: 
 */ 
import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [],
  controllers: [ ItemsController],
  providers: [ ItemsService],
})
export class ItemsModule {}
