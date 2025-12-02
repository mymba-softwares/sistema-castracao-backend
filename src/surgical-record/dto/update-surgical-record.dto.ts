import { PartialType } from '@nestjs/swagger';
import { CreateSurgicalRecordDto } from './create-surgical-record.dto';

export class UpdateSurgicalRecordDto extends PartialType(CreateSurgicalRecordDto) {}
