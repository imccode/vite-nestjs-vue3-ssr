import { Controller, Get, Header, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { env } from 'src/server/utils/env'
import { SSRService } from './ssr.service'

@Controller()
export class SSRController {
  constructor(private readonly ssr: SSRService) {}

  @Get('ssr')
  str() {
    return 'ssr'
  }

  @Get('*')
  async ssrRender(@Req() req: Request, @Res() res: Response) {
    const url = req.originalUrl
    const ssrData = { title: 'server render' }
    
    const html = await (env.DEV
      ? this.ssr.ssrDevRender(url, ssrData)
      : this.ssr.ssrRender(url, ssrData))
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  }
}
