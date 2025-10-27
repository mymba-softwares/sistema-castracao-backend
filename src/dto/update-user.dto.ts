import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './create-user.dto'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ description: 'Password, if you want to update' })
  password?: string
}
