import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '../decorators/swagger-decorators'
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { RolesGuard } from '../auth/roles.guard'
import { Roles } from '../decorators/role-decorator'
import { $Enums } from '@prisma/client'
import { AuthUser } from '../interfaces/auth-user'
import type { Request } from 'express'
import {
  ApiCreateUser,
  ApiGetMe,
  ApiGetAllUsers,
  ApiGetUserById,
  ApiUpdateUser,
  ApiDeleteUser,
} from './user.swagger'

@ApiTags('users')
@ApiBearerAuth('access-token')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Roles($Enums.Role.administrator)
  @ApiCreateUser()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto)
  }

  @Get('me')
  @ApiGetMe()
  getMe(@Req() req: Request) {
    const user = req.user as AuthUser;
    return this.userService.findById(user.id);
  }

  @Get()
  @Roles($Enums.Role.administrator, $Enums.Role.semas, $Enums.Role.receptionist)
  @ApiGetAllUsers()
  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  @Roles($Enums.Role.administrator, $Enums.Role.semas, $Enums.Role.veterinarian, $Enums.Role.receptionist)
  @ApiGetUserById()
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.userService.findById(Number(id))
  }

  @Patch(':id')
  @ApiUpdateUser()
  @ApiParam({ name: 'id', type: Number })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(Number(id), dto)
  }

  @Delete(':id')
  @ApiDeleteUser()
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.userService.remove(Number(id))
  }
}
