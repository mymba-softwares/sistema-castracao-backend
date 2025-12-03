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
import { AnestheticRecordService } from './anesthetic-record.service';
import { CreateAnestheticRecordDto } from './dto/create-anesthetic-record.dto';
import { UpdateAnestheticRecordDto } from './dto/update-anesthetic-record.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../decorators/role-decorator';
import { Role } from '@prisma/client';
import {
  ApiCreateAnestheticRecord,
  ApiGetAllAnestheticRecords,
  ApiGetAnestheticRecordById,
  ApiGetAnestheticRecordsByMedicalRecord,
  ApiUpdateAnestheticRecord,
  ApiDeleteAnestheticRecord,
} from './anesthetic-record.swagger';

@ApiTags('anesthetic-record')
@Controller('anesthetic-record')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AnestheticRecordController {
  constructor(private readonly anestheticRecordService: AnestheticRecordService) {}

  @Post()
  @Roles(Role.veterinarian, Role.administrator)
  @ApiCreateAnestheticRecord()
  create(@Body() createAnestheticRecordDto: CreateAnestheticRecordDto) {
    return this.anestheticRecordService.create(createAnestheticRecordDto);
  }

  @Get()
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiGetAllAnestheticRecords()
  findAll() {
    return this.anestheticRecordService.findAll();
  }

  @Get(':id')
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiGetAnestheticRecordById()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.anestheticRecordService.findOne(id);
  }

  @Get('medical-record/:medicalRecordId')
  @Roles(Role.veterinarian, Role.administrator, Role.receptionist, Role.student)
  @ApiGetAnestheticRecordsByMedicalRecord()
  findByMedicalRecord(@Param('medicalRecordId', ParseIntPipe) medicalRecordId: number) {
    return this.anestheticRecordService.findByMedicalRecord(medicalRecordId);
  }

  @Patch(':id')
  @Roles(Role.veterinarian, Role.administrator, Role.student)
  @ApiUpdateAnestheticRecord()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnestheticRecordDto: UpdateAnestheticRecordDto,
  ) {
    return this.anestheticRecordService.update(id, updateAnestheticRecordDto);
  }

  @Delete(':id')
  @Roles(Role.administrator)
  @ApiDeleteAnestheticRecord()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.anestheticRecordService.remove(id);
  }
}
