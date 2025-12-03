import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PetOwnerService } from './pet-owner.service';
import { AppointmentService } from '../appointment/appointment.service';
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
} from '../decorators/swagger-decorators';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../decorators/role-decorator';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../interfaces/auth-user';
import type { Request } from 'express';

@ApiTags('PetOwners')
@ApiBearerAuth('access-token')
@Controller('pet-owner')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PetOwnerController {
  constructor(
    private readonly petOwnerService: PetOwnerService,
    private readonly appointmentService: AppointmentService,
  ) {}

  @Post()
  @Roles(Role.administrator, Role.semas, Role.receptionist)
  @ApiOperation({
    summary: 'Create a new pet owner',
  })
  @ApiCreatedResponse('PetOwner')
  @ApiInternalServerErrorResponse()

    create(@Body() dto: CreatePetOwnerDto, @Req() req: Request) {
    const user = req.user as AuthUser;
    return this.petOwnerService.createPetOwner(user.id, dto);
  }

  //Rotas para PetOwner logado
  @Get('me')
  @Roles(Role.petOwner)
  @ApiOperation({
    summary: 'Find profile of the currently logged-in PetOwner',
  })
  @ApiOkResponse('PetOwner')
  @ApiNotFoundResponse('PetOwner')
  @ApiUnauthorizedResponse()
  @ApiInternalServerErrorResponse()
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
  @ApiUnauthorizedResponse()
  @ApiInternalServerErrorResponse()
  getMyPets(@Req() req: Request) {
    const user = req.user as AuthUser;
    return this.petOwnerService.findAnimalsByPetOwnerId(user.id);
  }

  @Get('me/appointments')
  @Roles(Role.petOwner)
  @ApiOperation({
    summary: 'Get my appointments as pet owner',
  })
  @ApiOkResponse('Appointments')
  @ApiNotFoundResponse('PetOwner')
  @ApiUnauthorizedResponse()
  @ApiInternalServerErrorResponse()
  async getMyAppointments(@Req() req: Request) {
    const user = req.user as AuthUser;
    const petOwner = await this.petOwnerService.findPetOwnerById(user.id);
    return this.appointmentService.findByPetOwnerId(petOwner.id);
  }

  @Patch('me')
  @Roles(Role.petOwner)
  @ApiOperation({
    summary: 'Update profile of the currently logged-in PetOwner',
  })
  @ApiOkResponse('PetOwner')
  @ApiNotFoundResponse('PetOwner')
  @ApiUnauthorizedResponse()
  @ApiInternalServerErrorResponse()
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
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiInternalServerErrorResponse()
  deleteMyProfile(@Req() req: Request) {
    const user = req.user as AuthUser;
    return this.petOwnerService.deletePetOwner(user.id);
  }

  @Get()
  @Roles(Role.administrator, Role.semas, Role.receptionist, Role.veterinarian)
  @ApiOperation({
    summary: 'Get all pet owners',
  })
  @ApiOkResponse('PetOwner')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
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
  @ApiForbiddenResponse()
  @ApiInternalServerErrorResponse()
  findOne(@Param('id') id: string) {
    return this.petOwnerService.findPetOwnerById(Number(id));
  }

  @Get('email/:email')
  @Roles(Role.administrator, Role.semas, Role.receptionist)
  @ApiOperation({
    summary: 'Get a pet owner by email',
  })
  @ApiParam({ name: 'email', type: String })
  @ApiOkResponse('PetOwner')
  @ApiNotFoundResponse('PetOwner')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiInternalServerErrorResponse()
  findOneByEmail(@Param('email') email: string) {
    return this.petOwnerService.findPetOwnerByEmail(email);
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
  update(@Param('id') id: string, @Body() dto: UpdatePetOwnerDto) {
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
  @ApiInternalServerErrorResponse()
  delete(@Param('id') id: string) {
    return this.petOwnerService.deletePetOwner(Number(id));
  }
}
