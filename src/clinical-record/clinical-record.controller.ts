import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ClinicalRecordService } from './clinical-record.service';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import {
  ApiCreateClinicalRecord,
  ApiGetAllClinicalRecords,
  ApiGetClinicalRecordById,
  ApiGetClinicalRecordsByMedicalRecord,
  ApiGetClinicalRecordsByAnimal,
  ApiUpdateClinicalRecord,
  ApiDeleteClinicalRecord,
} from './clinical-record.swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../decorators/role-decorator';
import { Role } from '@prisma/client';

@ApiTags('Clinical Records (Registros Clínicos)')
@Controller('clinical-record')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ClinicalRecordController {
  constructor(private readonly clinicalRecordService: ClinicalRecordService) {}

  @Post()
  @Roles(Role.veterinarian, Role.administrator, Role.student)
  @ApiCreateClinicalRecord()
  create(@Body() dto: CreateClinicalRecordDto) {
    return this.clinicalRecordService.create(dto);
  }

  @Get()
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiGetAllClinicalRecords()
  findAll() {
    return this.clinicalRecordService.findAll();
  }

  @Get(':id')
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiParam({ name: 'id', description: 'Clinical record ID' })
  @ApiGetClinicalRecordById()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clinicalRecordService.findOne(id);
  }

  @Get('medical-record/:medicalRecordId')
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiParam({ name: 'medicalRecordId', description: 'Medical record ID' })
  @ApiGetClinicalRecordsByMedicalRecord()
  findByMedicalRecord(@Param('medicalRecordId', ParseIntPipe) medicalRecordId: number) {
    return this.clinicalRecordService.findByMedicalRecord(medicalRecordId);
  }

  @Get('animal/:animalId')
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiParam({ name: 'animalId', description: 'Animal ID' })
  @ApiGetClinicalRecordsByAnimal()
  findByAnimal(@Param('animalId', ParseIntPipe) animalId: number) {
    return this.clinicalRecordService.findByAnimal(animalId);
  }

  @Patch(':id')
  @Roles(Role.veterinarian, Role.administrator, Role.student)
  @ApiParam({ name: 'id', description: 'Clinical record ID' })
  @ApiUpdateClinicalRecord()
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateClinicalRecordDto) {
    return this.clinicalRecordService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.administrator)
  @ApiParam({ name: 'id', description: 'Clinical record ID' })
  @ApiDeleteClinicalRecord()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clinicalRecordService.remove(id);
  }
}
