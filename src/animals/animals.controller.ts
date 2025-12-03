import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '../decorators/swagger-decorators'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../decorators/role-decorator';
import { Role } from '@prisma/client';

@ApiTags('Animals (Animais).')
@ApiBearerAuth('access-token')
@Controller('animals')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @Roles(Role.administrator, Role.semas, Role.receptionist)
  @ApiOperation({
    summary: 'Create a new animal',
  })
  @ApiCreatedResponse('Animal')
  @ApiInternalServerErrorResponse()

  create(@Body() dto: CreateAnimalDto) {
    return this.animalsService.createAnimal(dto);
  }

  @Get()
  @Roles(Role.administrator, Role.semas, Role.receptionist, Role.veterinarian)
  @ApiOperation({
    summary: 'Get all animals',
  })
  @ApiOkResponse('Animal')
  @ApiInternalServerErrorResponse()

  findAll() {
    return this.animalsService.findAllAnimals();
  }

  @Get(':id')
  @Roles(Role.administrator, Role.semas, Role.receptionist)
  @ApiOperation({
    summary: 'Get animal by ID',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('Animal')
  @ApiNotFoundResponse('Animal')
  @ApiUnauthorizedResponse()

  findOne(@Param('id') id: string) {
    return this.animalsService.findAnimalById(Number(id));
  }

  @Patch(':id')
  @Roles(Role.administrator, Role.semas, Role.receptionist)
  @ApiOperation({
    summary: 'Update a animal',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('Animal')
  @ApiNotFoundResponse('Animal')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()

  update(@Param('id') id: string, @Body() dto: UpdateAnimalDto) {
    return this.animalsService.updateAnimal(Number(id), dto);
  }

  @Delete(':id')
  @Roles(Role.administrator, Role.semas)
  @ApiOperation({
    summary: 'Delete a animal',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('Animal')
  @ApiNotFoundResponse('Animal')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()

  delete(@Param('id') id: string) {
    return this.animalsService.deleteAnimal(Number(id));
  }
}
