import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsBoolean, IsEnum, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AsaClassification, AnestheticRisk, RecoveryQuality, MedicationPhase } from '@prisma/client';

export class AnestheticMedicationDto {
  @ApiProperty({ description: 'Medication phase', enum: MedicationPhase })
  @IsEnum(MedicationPhase)
  phase: MedicationPhase;

  @ApiProperty({ description: 'Drug name' })
  @IsString()
  drugName: string;

  @ApiProperty({ description: 'Dosage' })
  @IsString()
  dosage: string;

  @ApiProperty({ description: 'Route of administration' })
  @IsString()
  route: string;

  @ApiProperty({ description: 'Administration time' })
  @IsString()
  administrationTime: string;
}

export class AnestheticMonitoringDto {
  @ApiProperty({ description: 'Measurement time' })
  @IsString()
  measurementTime: string;

  @ApiProperty({ description: 'Agent used', required: false })
  @IsOptional()
  @IsString()
  agent?: string;

  @ApiProperty({ description: 'Heart rate (FC)', required: false })
  @IsOptional()
  @IsString()
  heartRate?: string;

  @ApiProperty({ description: 'Respiratory rate (fR)', required: false })
  @IsOptional()
  @IsString()
  respiratoryRate?: string;

  @ApiProperty({ description: 'SpO2 saturation', required: false })
  @IsOptional()
  @IsString()
  spo2?: string;

  @ApiProperty({ description: 'EtCO2', required: false })
  @IsOptional()
  @IsString()
  etco2?: string;

  @ApiProperty({ description: 'Systolic pressure (PAS)', required: false })
  @IsOptional()
  @IsString()
  systolicPressure?: string;

  @ApiProperty({ description: 'Diastolic pressure (PAD)', required: false })
  @IsOptional()
  @IsString()
  diastolicPressure?: string;

  @ApiProperty({ description: 'Temperature', required: false })
  @IsOptional()
  @IsString()
  temperature?: string;
}

export class CreateAnestheticRecordDto {
  @ApiProperty({ description: 'Medical record ID' })
  @IsInt()
  medicalRecordId: number;

  @ApiProperty({ description: 'Appointment ID (optional)', required: false })
  @IsOptional()
  @IsInt()
  appointmentId?: number;

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

  @ApiProperty({ description: 'Weight', required: false })
  @IsOptional()
  @IsString()
  weight?: string;

  @ApiProperty({ description: 'Age', required: false })
  @IsOptional()
  @IsString()
  age?: string;

  @ApiProperty({ description: 'Procedure', required: false })
  @IsOptional()
  @IsString()
  procedure?: string;

  @ApiProperty({ description: 'Anesthetist veterinarian ID', required: false })
  @IsOptional()
  @IsInt()
  anesthetistId?: number;

  @ApiProperty({ description: 'Surgeon veterinarian ID', required: false })
  @IsOptional()
  @IsInt()
  surgeonId?: number;

  @ApiProperty({ description: 'ASA classification', enum: AsaClassification, required: false })
  @IsOptional()
  @IsEnum(AsaClassification)
  asaClassification?: AsaClassification;

  @ApiProperty({ description: 'Anesthetic risk', enum: AnestheticRisk, required: false })
  @IsOptional()
  @IsEnum(AnestheticRisk)
  anestheticRisk?: AnestheticRisk;

  @ApiProperty({ description: 'Pre-anesthetic heart rate (FC)', required: false })
  @IsOptional()
  @IsString()
  preHeartRate?: string;

  @ApiProperty({ description: 'Pre-anesthetic respiratory rate (fR)', required: false })
  @IsOptional()
  @IsString()
  preRespiratoryRate?: string;

  @ApiProperty({ description: 'Mucous membranes', required: false })
  @IsOptional()
  @IsString()
  preMucousMembranes?: string;

  @ApiProperty({ description: 'Capillary refill time (TPC)', required: false })
  @IsOptional()
  @IsString()
  preCapillaryRefill?: string;

  @ApiProperty({ description: 'Pre-anesthetic temperature', required: false })
  @IsOptional()
  @IsString()
  preTemperature?: string;

  @ApiProperty({ description: 'Comorbidities', required: false })
  @IsOptional()
  @IsString()
  comorbidities?: string;

  @ApiProperty({ description: 'Allergies', required: false })
  @IsOptional()
  @IsString()
  allergies?: string;

  @ApiProperty({ description: 'Intubation performed', required: false })
  @IsOptional()
  @IsBoolean()
  intubation?: boolean;

  @ApiProperty({ description: 'Tube number', required: false })
  @IsOptional()
  @IsString()
  tubeNumber?: string;

  @ApiProperty({ description: 'Circuit type', required: false })
  @IsOptional()
  @IsString()
  circuit?: string;

  @ApiProperty({ description: 'Inhalation maintenance', required: false, default: false })
  @IsOptional()
  @IsBoolean()
  maintenanceInhalation?: boolean;

  @ApiProperty({ description: 'TIVA maintenance', required: false, default: false })
  @IsOptional()
  @IsBoolean()
  maintenanceTIVA?: boolean;

  @ApiProperty({ description: 'Extubation time', required: false })
  @IsOptional()
  @IsDateString()
  extubationTime?: string;

  @ApiProperty({ description: 'Recovery quality', enum: RecoveryQuality, required: false })
  @IsOptional()
  @IsEnum(RecoveryQuality)
  recoveryQuality?: RecoveryQuality;

  @ApiProperty({ description: 'Postoperative medication', required: false })
  @IsOptional()
  @IsString()
  postoperativeMedication?: string;

  @ApiProperty({ description: 'General observations / Complications', required: false })
  @IsOptional()
  @IsString()
  generalObservations?: string;

  @ApiProperty({ 
    description: 'Medications (MPA and Induction)', 
    type: [AnestheticMedicationDto],
    required: false 
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnestheticMedicationDto)
  medications?: AnestheticMedicationDto[];

  @ApiProperty({ 
    description: 'Monitoring records (temporal grid)', 
    type: [AnestheticMonitoringDto],
    required: false 
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnestheticMonitoringDto)
  monitoring?: AnestheticMonitoringDto[];
}
