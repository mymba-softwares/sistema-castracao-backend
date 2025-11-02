import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PetOwnerService } from './pet-owner.service';
import { CreatePetOwnerDto } from './dto/create-pet-owner.dto';
import { UpdatePetOwnerDto } from './dto/update-pet-owner.dto';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '../decorators/swagger-decorators'
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/decorators/role-decorator';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthUser } from 'src/interfaces/auth-user';
import type { Request } from 'express';

@ApiTags('PetOwners (Responsáveis).')
@ApiBearerAuth()
@Controller('pet-owner')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PetOwnerController {
  constructor(private readonly petOwnerService: PetOwnerService) {}

  @Post()
  @Roles(Role.administrator, Role.semas, Role.receptionist)
  @ApiOperation({
    summary: 'Create a new pet owner',
  })
  @ApiCreatedResponse('PetOwner')
  @ApiInternalServerErrorResponse()

  create(@Body() dto: CreatePetOwnerDto) {
    return this.petOwnerService.createPetOwner(dto);
  }

  //Rotas para PetOwner logado
  @Get('me')
  @Roles(Role.petOwner)
  @ApiOperation({
    summary: 'Find profile of the currently logged-in PetOwner',
  })
  @ApiOkResponse('PetOwner')
  @ApiNotFoundResponse('PetOwner')
  getMyProfile(@Req() req: Request) {
    const user = req.user as AuthUser;
    return this.petOwnerService.findPetOwnerById(user.id);
  }

  @Get('me/pets')
  @Roles(Role.petOwner)
  @ApiOperation({
    summary: 'Find animals of the currently logged-in PetOwner',
  })
  @ApiOkResponse('Animals')
  @ApiNotFoundResponse('PetOwner')
  getMyPets(@Req() req: Request) {
    const user = req.user as AuthUser;
    return this.petOwnerService.findAnimalsByPetOwnerId(user.id);
  }

  @Patch('me')
  @Roles(Role.petOwner)
  @ApiOperation({
    summary: 'Update profile of the currently logged-in PetOwner',
  })
  @ApiOkResponse('PetOwner')
  @ApiNotFoundResponse('PetOwner')

  updateMyProfile(
    @Req() req: Request,
    @Body() dto: UpdatePetOwnerDto,
  ) {
    const user = req.user as AuthUser;
    return this.petOwnerService.updatePetOwner(user.id, dto);
  }

  @Delete('me')
  @Roles(Role.petOwner)
  @ApiOperation({
    summary: 'Delete profile of the currently logged-in PetOwner',
  })
  @ApiOkResponse('PetOwner')
  @ApiNotFoundResponse('PetOwner')

  deleteMyProfile(@Req() req: Request) {
    const user = req.user as AuthUser;
    return this.petOwnerService.deletePetOwner(user.id);
  }

  @Get()
  @Roles(Role.administrator, Role.semas, Role.receptionist)
  @ApiOperation({
    summary: 'Get all pet owners',
  })
  @ApiOkResponse('PetOwner')
  @ApiInternalServerErrorResponse()

  findAll() {
    return this.petOwnerService.findAllPetOwners();
  }

  @Get(':id')
  @Roles(Role.administrator, Role.semas, Role.receptionist)
  @ApiOperation({
    summary: 'Get a pet owner by ID',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('PetOwner')
  @ApiNotFoundResponse('PetOwner')
  @ApiUnauthorizedResponse()

  findOne(@Param('id') id: string) {
    return this.petOwnerService.findPetOwnerById(Number(id));
  }

  @Patch(':id')
  @Roles(Role.administrator, Role.semas, Role.receptionist)
  @ApiOperation({
    summary: 'Update a pet owner',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('PetOwner')
  @ApiNotFoundResponse('PetOwner')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()

  update(@Param('id') id: number, @Body() dto: UpdatePetOwnerDto) {
    return this.petOwnerService.updatePetOwner(Number(id), dto);
  }

  @Delete(':id')
  @Roles(Role.administrator, Role.semas)
  @ApiOperation({
    summary: 'Delete a pet owner',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('PetOwner')
  @ApiNotFoundResponse('PetOwner')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()

  remove(@Param('id') id: string) {
    return this.petOwnerService.deletePetOwner(Number(id));
  }
}
