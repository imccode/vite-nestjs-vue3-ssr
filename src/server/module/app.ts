import { Module } from '@nestjs/common'
import { SSRModule } from './ssr/ssr.module'

@Module({
  imports: [SSRModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
