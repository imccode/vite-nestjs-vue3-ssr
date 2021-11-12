/** 环境变量 */
export const env = {
  /** 开发环境 */
  DEV: process.env.NODE_ENV === 'development',
  /** 生产环境 */
  PROD: process.env.NODE_ENV === 'production',
  /** 环境模式 */
  MODE: process.env.NODE_ENV
}