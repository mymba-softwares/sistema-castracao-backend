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

export function ApiCreateMedicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Create a new medical record',
      description: 'Creates a unique medical record for an animal. Each animal can only have one medical record. Microchip number is optional and must be unique.'
    }),
    ApiBody({
      description: 'Medical record data',
      schema: {
        type: 'object',
        required: ['animalId'],
        properties: {
          animalId: { type: 'number', example: 1, description: 'ID of the animal' },
          microchipNumber: { type: 'string', example: '982000123456789', description: 'Unique microchip number (optional)' },
        },
      },
      examples: {
        withMicrochip: {
          summary: 'Medical record with microchip',
          value: {
            animalId: 1,
            microchipNumber: '982000123456789',
          },
        },
        withoutMicrochip: {
          summary: 'Medical record without microchip',
          value: {
            animalId: 2,
          },
        },
      },
    }),
    ApiCreatedResponse('MedicalRecord'),
    ApiResponse({
      status: 409,
      description: 'Conflict - Medical record already exists for this animal or microchip is already registered',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 409 },
          message: { type: 'string', example: 'Medical record already exists for this animal' },
          error: { type: 'string', example: 'Conflict' },
        },
      },
    }),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetAllMedicalRecords() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get all medical records',
      description: 'Returns all medical records with animal, pet owner, and clinical records information.'
    }),
    ApiOkResponse('MedicalRecord'),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetMedicalRecordById() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get a medical record by ID',
      description: 'Returns a specific medical record with complete history including all clinical records, veterinarians, and appointments.'
    }),
    ApiOkResponse('MedicalRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetMedicalRecordByAnimal() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get medical record by animal ID',
      description: 'Returns the medical record for a specific animal with complete clinical history.'
    }),
    ApiOkResponse('MedicalRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiUpdateMedicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Update a medical record',
      description: 'Updates medical record information. Can update animal association or microchip number. Validates uniqueness constraints.'
    }),
    ApiBody({
      description: 'Medical record update data',
      schema: {
        type: 'object',
        properties: {
          animalId: { type: 'number', example: 1, description: 'New animal ID (must not have another medical record)' },
          microchipNumber: { type: 'string', example: '982000987654321', description: 'New microchip number (must be unique)' },
        },
      },
    }),
    ApiOkResponse('MedicalRecord'),
    ApiResponse({
      status: 409,
      description: 'Conflict - Animal already has a medical record or microchip is already registered',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 409 },
          message: { type: 'string', example: 'Microchip number already registered' },
          error: { type: 'string', example: 'Conflict' },
        },
      },
    }),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiDeleteMedicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Delete a medical record',
      description: 'Permanently deletes a medical record. Only possible if there are no clinical records associated. Only administrators can perform this action.'
    }),
    ApiOkResponse('MedicalRecord'),
    ApiResponse({
      status: 400,
      description: 'Bad Request - Cannot delete medical record with existing clinical records',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 400 },
          message: { type: 'string', example: 'Cannot delete medical record with existing clinical records' },
          error: { type: 'string', example: 'Bad Request' },
        },
      },
    }),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}
