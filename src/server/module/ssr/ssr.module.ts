import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
  RequestMethod,
} from '@nestjs/common'
import { HttpAdapterHost } from '@nestjs/core'
import { SSRController } from './ssr.controller'
import { SSRStaticMidleware } from './ssr.middleware'
import { SSRService } from './ssr.service'

@Module({
  imports: [],
  providers: [SSRService],
  controllers: [SSRController],
})
export class SSRModule implements NestModule, OnModuleInit {
  constructor(private readonly ssr: SSRService) {}

  async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SSRStaticMidleware)
      .forRoutes({ path: '/*', method: RequestMethod.GET })
  }

  async onModuleInit() {
    this.ssr.bootstrap()
  }
}
