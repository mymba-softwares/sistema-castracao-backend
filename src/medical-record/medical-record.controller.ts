import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { MedicalRecordService } from './medical-record.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import {
  ApiCreateMedicalRecord,
  ApiGetAllMedicalRecords,
  ApiGetMedicalRecordById,
  ApiGetMedicalRecordByAnimal,
  ApiUpdateMedicalRecord,
  ApiDeleteMedicalRecord,
} from './medical-record.swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../decorators/role-decorator';
import { Role } from '@prisma/client';

@ApiTags('Medical Records (Prontuários Médicos)')
@Controller('medical-record')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post()
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist)
  @ApiCreateMedicalRecord()
  create(@Body() dto: CreateMedicalRecordDto) {
    return this.medicalRecordService.create(dto);
  }

  @Get()
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist)
  @ApiGetAllMedicalRecords()
  findAll() {
    return this.medicalRecordService.findAll();
  }

  @Get(':id')
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist)
  @ApiParam({ name: 'id', description: 'Medical record ID' })
  @ApiGetMedicalRecordById()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.findOne(id);
  }

  @Get('animal/:animalId')
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist)
  @ApiParam({ name: 'animalId', description: 'Animal ID' })
  @ApiGetMedicalRecordByAnimal()
  findByAnimal(@Param('animalId', ParseIntPipe) animalId: number) {
    return this.medicalRecordService.findByAnimal(animalId);
  }

  @Patch(':id')
  @Roles(Role.veterinarian, Role.administrator)
  @ApiParam({ name: 'id', description: 'Medical record ID' })
  @ApiUpdateMedicalRecord()
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMedicalRecordDto) {
    return this.medicalRecordService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.administrator)
  @ApiParam({ name: 'id', description: 'Medical record ID' })
  @ApiDeleteMedicalRecord()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.remove(id);
  }
}

