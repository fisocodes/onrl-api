import { Post, Get, Patch, Delete } from '@nestjs/common'

export class BaseController {
  @Post()
  async createOne (): Promise<void> {}

  @Get()
  async getOne (): Promise<void> {}

  @Get()
  async getMany (): Promise<void> {}

  @Patch()
  async updateOne (): Promise<void> {}

  @Delete()
  async deleteOne (): Promise<void> {}
}
