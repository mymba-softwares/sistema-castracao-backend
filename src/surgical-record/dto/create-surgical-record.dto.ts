import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateSurgicalRecordDto {
  @ApiProperty({ description: 'Medical record ID' })
  @IsInt()
  medicalRecordId: number;

  @ApiProperty({ description: 'Appointment ID (optional)', required: false })
  @IsOptional()
  @IsInt()
  appointmentId?: number;

  @ApiProperty({ description: 'Record number', required: false })
  @IsOptional()
  @IsString()
  recordNumber?: string;

  @ApiProperty({ description: 'Record date', required: false })
  @IsOptional()
  @IsDateString()
  recordDate?: string;

  @ApiProperty({ description: 'Animal name', required: false })
  @IsOptional()
  @IsString()
  animalName?: string;

  @ApiProperty({ description: 'Species', required: false })
  @IsOptional()
  @IsString()
  species?: string;

  @ApiProperty({ description: 'Breed', required: false })
  @IsOptional()
  @IsString()
  breed?: string;

  @ApiProperty({ description: 'Coat/fur color', required: false })
  @IsOptional()
  @IsString()
  coat?: string;

  @ApiProperty({ description: 'Size/build', required: false })
  @IsOptional()
  @IsString()
  size?: string;

  @ApiProperty({ description: 'Gender', required: false })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty({ description: 'Age', required: false })
  @IsOptional()
  @IsString()
  age?: string;

  @ApiProperty({ description: 'Weight', required: false })
  @IsOptional()
  @IsString()
  weight?: string;

  @ApiProperty({ description: 'Owner name', required: false })
  @IsOptional()
  @IsString()
  ownerName?: string;

  @ApiProperty({ description: 'Owner phone', required: false })
  @IsOptional()
  @IsString()
  ownerPhone?: string;

  @ApiProperty({ description: 'Owner address', required: false })
  @IsOptional()
  @IsString()
  ownerAddress?: string;

  @ApiProperty({ description: 'Surgeon', required: false })
  @IsOptional()
  @IsString()
  surgeon?: string;

  @ApiProperty({ description: 'First assistant', required: false })
  @IsOptional()
  @IsString()
  firstAssistant?: string;

  @ApiProperty({ description: 'Second assistant', required: false })
  @IsOptional()
  @IsString()
  secondAssistant?: string;

  @ApiProperty({ description: 'Instrumentator', required: false })
  @IsOptional()
  @IsString()
  instrumentator?: string;

  @ApiProperty({ description: 'Anesthetist', required: false })
  @IsOptional()
  @IsString()
  anesthetist?: string;

  @ApiProperty({ description: 'Surgery duration', required: false })
  @IsOptional()
  @IsString()
  duration?: string;

  @ApiProperty({ description: 'Surgery start time', required: false })
  @IsOptional()
  @IsDateString()
  surgeryStart?: string;

  @ApiProperty({ description: 'Surgery end time', required: false })
  @IsOptional()
  @IsDateString()
  surgeryEnd?: string;

  @ApiProperty({ description: 'Preoperative diagnosis', required: false })
  @IsOptional()
  @IsString()
  preoperativeDiagnosis?: string;

  @ApiProperty({ description: 'Postoperative diagnosis', required: false })
  @IsOptional()
  @IsString()
  postoperativeDiagnosis?: string;

  @ApiProperty({ description: 'Proposed operation', required: false })
  @IsOptional()
  @IsString()
  proposedOperation?: string;

  @ApiProperty({ description: 'Performed operation', required: false })
  @IsOptional()
  @IsString()
  performedOperation?: string;

  @ApiProperty({ description: 'Materials used', required: false })
  @IsOptional()
  @IsString()
  materialsUsed?: string;

  @ApiProperty({ description: 'Postoperative control / Surgical discharge', required: false })
  @IsOptional()
  @IsString()
  postoperativeControl?: string;

  @ApiProperty({ description: 'Operation description', required: false })
  @IsOptional()
  @IsString()
  operationDescription?: string;

  @ApiProperty({ description: 'Additional observations / Complications', required: false })
  @IsOptional()
  @IsString()
  additionalObservations?: string;
}
