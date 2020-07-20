import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.DB),
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
