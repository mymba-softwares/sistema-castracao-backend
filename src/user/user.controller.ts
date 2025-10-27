import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common'
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
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger'

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse('User')
  @ApiInternalServerErrorResponse()

  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto)
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse('User')
  @ApiInternalServerErrorResponse()

  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('User')
  @ApiNotFoundResponse('User')
  @ApiUnauthorizedResponse()

  findOne(@Param('id') id: string) {
    return this.userService.findById(Number(id))
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('User')
  @ApiNotFoundResponse('User')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()

  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(Number(id), dto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('User')
  @ApiNotFoundResponse('User')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()

  remove(@Param('id') id: string) {
    return this.userService.remove(Number(id))
  }
}
