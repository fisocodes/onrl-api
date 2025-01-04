import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class BaseService<T extends keyof PrismaClient> {
  constructor (private readonly prisma: PrismaService) {}

  async createOne (): Promise<PrismaClient[T]> {
  }
}
