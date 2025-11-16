import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentStatus, $Enums } from '@prisma/client';
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '../decorators/swagger-decorators';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../decorators/role-decorator';

@ApiTags('Appointments')
@ApiBearerAuth('access-token')
@Controller('appointment')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  @Roles('administrator', 'receptionist', 'petOwner')
  @ApiOperation({ summary: 'Create a new appointment' })
  @ApiCreatedResponse('Appointment')
  @ApiInternalServerErrorResponse()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  @Roles('administrator', 'semas', 'veterinarian', 'receptionist')
  @ApiOperation({ summary: 'Get all appointments' })
  @ApiOkResponse('Appointments')
  @ApiInternalServerErrorResponse()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get('status/:status')
  @Roles('administrator', 'semas', 'veterinarian', 'receptionist')
  @ApiOperation({ summary: 'Get appointments by status' })
  @ApiParam({ name: 'status', enum: AppointmentStatus })
  @ApiOkResponse('Appointments')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiInternalServerErrorResponse()
  findByStatus(@Param('status') status: string) {
    const statusEnum = this.validateAndConvertStatus(status);
    return this.appointmentService.findByStatus(statusEnum);
  }

  @Get('animal/:animalId')
  @Roles('administrator', 'semas', 'veterinarian', 'receptionist', 'petOwner')
  @ApiOperation({ summary: 'Get appointments by animal ID' })
  @ApiParam({ name: 'animalId', type: Number })
  @ApiOkResponse('Appointments')
  @ApiNotFoundResponse('Animal')
  @ApiUnauthorizedResponse()
  @ApiInternalServerErrorResponse()
  findByAnimalId(@Param('animalId') animalId: string) {
    return this.appointmentService.findByAnimalId(Number(animalId));
  }

  @Get('pet-owner/:petOwnerId')
  @Roles('administrator', 'semas', 'veterinarian', 'receptionist', 'petOwner')
  @ApiOperation({ summary: 'Get appointments by pet owner ID' })
  @ApiParam({ name: 'petOwnerId', type: Number })
  @ApiOkResponse('Appointments')
  @ApiNotFoundResponse('Pet owner')
  @ApiUnauthorizedResponse()
  @ApiInternalServerErrorResponse()
  findByPetOwnerId(@Param('petOwnerId') petOwnerId: string) {
    return this.appointmentService.findByPetOwnerId(Number(petOwnerId));
  }

  @Get(':id')
  @Roles('administrator', 'semas', 'veterinarian', 'receptionist', 'petOwner')
  @ApiOperation({ summary: 'Get appointment by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('Appointment')
  @ApiNotFoundResponse('Appointment')
  @ApiUnauthorizedResponse()
  @ApiInternalServerErrorResponse()
  findById(@Param('id') id: string) {
    return this.appointmentService.findById(Number(id));
  }

  @Patch(':id')
  @Roles('administrator', 'veterinarian', 'receptionist', 'petOwner')
  @ApiOperation({ summary: 'Update an appointment' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('Appointment')
  @ApiNotFoundResponse('Appointment')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiInternalServerErrorResponse()
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.update(Number(id), updateAppointmentDto);
  }

  @Delete(':id')
  @Roles('administrator', 'receptionist')
  @ApiOperation({ summary: 'Delete an appointment' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('Appointment')
  @ApiNotFoundResponse('Appointment')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiInternalServerErrorResponse()
  delete(@Param('id') id: string) {
    return this.appointmentService.delete(Number(id));
  }

  private validateAndConvertStatus(status: string): AppointmentStatus {
    const validStatuses = Object.values(AppointmentStatus);

    if (!validStatuses.includes(status as AppointmentStatus)) {
      throw new BadRequestException(
        `Invalid status. Valid values are: ${validStatuses.join(', ')}`
      );
    }

    return status as AppointmentStatus;
  }
}