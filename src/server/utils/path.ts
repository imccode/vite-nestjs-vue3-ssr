import { resolve } from 'path'

export const resolvePath = (...path: string[]) => {
  return resolve(process.cwd(), ...path)
}

/** 客户端文件路径 */
export const clientPath = (...path: string[]) => resolvePath('dist/client', ...path)

/** 服务端文件路径 */
export const serverPath = (...path: string[]) => resolvePath('dist/server', ...path)