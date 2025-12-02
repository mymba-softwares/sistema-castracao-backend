import { applyDecorators } from '@nestjs/common';
import { 
  ApiOperation, 
  ApiBody, 
  ApiResponse,
  ApiBearerAuth 
} from '@nestjs/swagger';
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '../decorators/swagger-decorators';

export function ApiCreateAnestheticRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Create a new anesthetic record',
      description: 'Creates a new anesthetic record (ficha anestésica) with patient identification, risk assessment, pre-anesthetic evaluation, medications (MPA/Induction), monitoring grid, and recovery data. Veterinarians and administrators can create records.'
    }),
    ApiCreatedResponse('AnestheticRecord'),
    ApiResponse({
      status: 400,
      description: 'Bad Request - Validation error or missing required fields',
    }),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetAllAnestheticRecords() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get all anesthetic records',
      description: 'Returns all anesthetic records with related data (medical record, animal, appointment, anesthetist, surgeon, medications, monitoring). Accessible by veterinarians, administrators, and receptionists.'
    }),
    ApiOkResponse('AnestheticRecord'),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetAnestheticRecordById() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get an anesthetic record by ID',
      description: 'Returns a specific anesthetic record with all related data including medications and monitoring records.'
    }),
    ApiOkResponse('AnestheticRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetAnestheticRecordsByMedicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get anesthetic records by medical record ID',
      description: 'Returns all anesthetic records associated with a specific medical record.'
    }),
    ApiOkResponse('AnestheticRecord'),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiUpdateAnestheticRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Update an anesthetic record',
      description: 'Updates an existing anesthetic record. Only veterinarians and administrators can update records.'
    }),
    ApiOkResponse('AnestheticRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiDeleteAnestheticRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Delete an anesthetic record',
      description: 'Deletes an anesthetic record. Only administrators can delete records.'
    }),
    ApiOkResponse('AnestheticRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}
