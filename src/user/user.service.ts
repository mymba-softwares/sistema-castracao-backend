import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
  const hashedPassword = await bcrypt.hash(dto.password, 10)

  const { password, ...data } = dto // eslint-disable-line @typescript-eslint/no-unused-vars
  const user = await this.prisma.user.create({
    data: { ...data, hashedPassword },
  })

  const { hashedPassword: _, ...safeUser } = user
  return safeUser
}


  async findAll() {
    return this.prisma.user.findMany({
      select: { id: true, role: true, email: true, completeName: true, cpf: true, phone: true, createdAt: true },
    })
  }

  async findById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) throw new NotFoundException('User not found')
        
    const { hashedPassword: _, ...safeUser } = user  // eslint-disable-line @typescript-eslint/no-unused-vars
    return safeUser
  }

    async update(id: number, dto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) throw new NotFoundException('User not found')

    const data: Partial<{ hashedPassword: string }> & UpdateUserDto = { ...dto }

    if (dto.password) {
        data.hashedPassword = await bcrypt.hash(dto.password, 10)
        delete data.password
    }

    const updated = await this.prisma.user.update({ where: { id }, data })
    const { hashedPassword: _, ...safeUser } = updated  // eslint-disable-line @typescript-eslint/no-unused-vars
    return safeUser
    }


  async remove(id: number) {
    await this.prisma.user.delete({ where: { id } })
    return { message: 'User deleted successfully' }
  }
}
