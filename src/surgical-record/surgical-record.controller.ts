import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SurgicalRecordService } from './surgical-record.service';
import { CreateSurgicalRecordDto } from './dto/create-surgical-record.dto';
import { UpdateSurgicalRecordDto } from './dto/update-surgical-record.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../decorators/role-decorator';
import { Role } from '@prisma/client';
import {
  ApiCreateSurgicalRecord,
  ApiGetAllSurgicalRecords,
  ApiGetSurgicalRecordById,
  ApiGetSurgicalRecordsByMedicalRecord,
  ApiUpdateSurgicalRecord,
  ApiDeleteSurgicalRecord,
} from './surgical-record.swagger';

@ApiTags('surgical-record')
@Controller('surgical-record')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SurgicalRecordController {
  constructor(private readonly surgicalRecordService: SurgicalRecordService) {}

  @Post()
  @Roles(Role.veterinarian, Role.administrator, Role.student)
  @ApiCreateSurgicalRecord()
  create(@Body() createSurgicalRecordDto: CreateSurgicalRecordDto) {
    return this.surgicalRecordService.create(createSurgicalRecordDto);
  }

  @Get()
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiGetAllSurgicalRecords()
  findAll() {
    return this.surgicalRecordService.findAll();
  }

  @Get(':id')
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiGetSurgicalRecordById()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.surgicalRecordService.findOne(id);
  }

  @Get('medical-record/:medicalRecordId')
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiGetSurgicalRecordsByMedicalRecord()
  findByMedicalRecord(@Param('medicalRecordId', ParseIntPipe) medicalRecordId: number) {
    return this.surgicalRecordService.findByMedicalRecord(medicalRecordId);
  }

  @Patch(':id')
  @Roles(Role.veterinarian, Role.administrator, Role.student)
  @ApiUpdateSurgicalRecord()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSurgicalRecordDto: UpdateSurgicalRecordDto,
  ) {
    return this.surgicalRecordService.update(id, updateSurgicalRecordDto);
  }

  @Delete(':id')
  @Roles(Role.administrator)
  @ApiDeleteSurgicalRecord()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.surgicalRecordService.remove(id);
  }
}
