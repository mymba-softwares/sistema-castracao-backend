import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentNotificationsService } from './appointment-notifications.service';
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
  constructor(
    private readonly appointmentService: AppointmentService,
    private readonly appointmentNotificationsService: AppointmentNotificationsService,
  ) {}

  @Post()
  @Roles($Enums.Role.administrator, $Enums.Role.receptionist, $Enums.Role.petOwner, $Enums.Role.veterinarian)
  @ApiOperation({ 
    summary: 'Create a new appointment',
    description: 'Creates a new appointment for an animal. Can optionally assign a veterinarian to the appointment. Veterinarian can be assigned later via update.'
  })
  @ApiCreatedResponse('Appointment')
  @ApiInternalServerErrorResponse()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  @Roles($Enums.Role.administrator, $Enums.Role.semas, $Enums.Role.veterinarian, $Enums.Role.receptionist)
  @ApiOperation({ 
    summary: 'Get all appointments',
    description: 'Returns all appointments with animal, pet owner, and assigned veterinarian information.'
  })
  @ApiOkResponse('Appointments')
  @ApiInternalServerErrorResponse()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get('status/:status')
  @Roles($Enums.Role.administrator, $Enums.Role.semas, $Enums.Role.veterinarian, $Enums.Role.receptionist)
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
  @Roles($Enums.Role.administrator, $Enums.Role.semas, $Enums.Role.veterinarian, $Enums.Role.receptionist, $Enums.Role.petOwner)
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
  @Roles($Enums.Role.administrator, $Enums.Role.semas, $Enums.Role.veterinarian, $Enums.Role.receptionist, $Enums.Role.petOwner)
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
  @Roles($Enums.Role.administrator, $Enums.Role.semas, $Enums.Role.veterinarian, $Enums.Role.receptionist, $Enums.Role.petOwner)
  @ApiOperation({ 
    summary: 'Get appointment by ID',
    description: 'Returns detailed appointment information including animal, pet owner, assigned veterinarian, and related clinical records.'
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse('Appointment')
  @ApiNotFoundResponse('Appointment')
  @ApiUnauthorizedResponse()
  @ApiInternalServerErrorResponse()
  findById(@Param('id') id: string) {
    return this.appointmentService.findById(Number(id));
  }

  @Patch(':id')
  @Roles($Enums.Role.administrator, $Enums.Role.veterinarian, $Enums.Role.receptionist, $Enums.Role.petOwner)
  @ApiOperation({ 
    summary: 'Update an appointment',
    description: 'Updates appointment details including date/time, status, notes, and assigned veterinarian. All fields are optional.'
  })
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
  @Roles($Enums.Role.administrator, $Enums.Role.receptionist)
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

  @Post('test-reminders')
  @Roles($Enums.Role.administrator)
  @ApiOperation({ 
    summary: 'Test appointment reminders (Admin only)',
    description: 'Manually triggers the appointment reminder check. Sends notifications for appointments 1 day and 1 week from now. For testing purposes only.'
  })
  @ApiOkResponse('Reminder test results')
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  async testReminders() {
    return this.appointmentNotificationsService.checkAndSendReminders();
  }
}