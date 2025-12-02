import { PartialType } from '@nestjs/swagger';
import { CreateAnestheticRecordDto } from './create-anesthetic-record.dto';

export class UpdateAnestheticRecordDto extends PartialType(CreateAnestheticRecordDto) {}
