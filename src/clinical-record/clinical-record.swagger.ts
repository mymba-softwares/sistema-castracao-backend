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

export function ApiCreateClinicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Create a new clinical record',
      description: 'Creates a new clinical record for an animal. Can be a triage, surgery, or follow-up record. Veterinarians and administrators can create records.'
    }),
    ApiBody({
      description: 'Clinical record data',
      schema: {
        type: 'object',
        required: ['medicalRecordId', 'veterinarianId', 'type'],
        properties: {
          medicalRecordId: { type: 'number', example: 1, description: 'ID of the medical record' },
          appointmentId: { type: 'number', example: 1, description: 'ID of the appointment (optional)' },
          veterinarianId: { type: 'number', example: 1, description: 'ID of the veterinarian' },
          type: { 
            type: 'string', 
            enum: ['triage', 'surgery', 'followUp'],
            example: 'triage',
            description: 'Type of clinical record'
          },
          treatmentDate: { type: 'string', format: 'date-time', example: '2025-11-16T10:00:00Z', description: 'Date of treatment (optional, defaults to now)' },
          fitForSurgery: { type: 'boolean', example: true, description: 'Required for triage records' },
          surgeryType: { 
            type: 'string', 
            enum: ['orchiectomy', 'ovariohysterectomy'],
            example: 'ovariohysterectomy',
            description: 'Required for surgery records'
          },
          observations: { type: 'string', example: 'Animal is healthy and ready for surgery', description: 'General observations' },
          instructions: { type: 'string', example: 'No food 8 hours before surgery', description: 'Prescriptions and instructions' },
        },
      },
      examples: {
        triage: {
          summary: 'Triage record',
          value: {
            medicalRecordId: 1,
            appointmentId: 1,
            veterinarianId: 1,
            type: 'triage',
            fitForSurgery: true,
            observations: 'Animal is in good health condition. All vital signs are normal.',
            instructions: 'Fast for 8 hours before surgery. Avoid water 2 hours before.',
          },
        },
        surgery: {
          summary: 'Surgery record',
          value: {
            medicalRecordId: 1,
            appointmentId: 2,
            veterinarianId: 1,
            type: 'surgery',
            surgeryType: 'ovariohysterectomy',
            observations: 'Surgery performed successfully without complications. Patient recovering well.',
            instructions: 'Elizabethan collar for 10 days. Return for suture removal in 10 days. Avoid physical activity.',
          },
        },
        followUp: {
          summary: 'Follow-up record',
          value: {
            medicalRecordId: 1,
            appointmentId: 3,
            veterinarianId: 1,
            type: 'followUp',
            observations: 'Wound healing properly. No signs of infection. Sutures can be removed.',
            instructions: 'Continue with Elizabethan collar for 3 more days. Animal is cleared for normal activities.',
          },
        },
      },
    }),
    ApiCreatedResponse('ClinicalRecord'),
    ApiResponse({
      status: 400,
      description: 'Bad Request - Validation error or missing required fields for specific record types',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 400 },
          message: { type: 'string', example: 'fitForSurgery is required for triage records' },
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

export function ApiGetAllClinicalRecords() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get all clinical records',
      description: 'Returns all clinical records with related data (medical record, animal, appointment, veterinarian). Accessible by veterinarians, administrators, and receptionists.'
    }),
    ApiOkResponse('ClinicalRecord'),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetClinicalRecordById() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get a clinical record by ID',
      description: 'Returns a specific clinical record with all related data including animal, pet owner, appointment, and veterinarian information.'
    }),
    ApiOkResponse('ClinicalRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetClinicalRecordsByMedicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get all clinical records by medical record ID',
      description: 'Returns all clinical records for a specific medical record, ordered by treatment date (most recent first).'
    }),
    ApiOkResponse('ClinicalRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetClinicalRecordsByAnimal() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get all clinical records by animal ID',
      description: 'Returns all clinical records for a specific animal by finding its medical record first, then retrieving all associated clinical records.'
    }),
    ApiOkResponse('ClinicalRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiUpdateClinicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Update a clinical record',
      description: 'Updates an existing clinical record. All fields are optional. Validates business rules based on record type.'
    }),
    ApiBody({
      description: 'Clinical record update data',
      schema: {
        type: 'object',
        properties: {
          medicalRecordId: { type: 'number', example: 1 },
          appointmentId: { type: 'number', example: 1 },
          veterinarianId: { type: 'number', example: 1 },
          type: { 
            type: 'string', 
            enum: ['triage', 'surgery', 'followUp'],
            example: 'triage'
          },
          treatmentDate: { type: 'string', format: 'date-time', example: '2025-11-16T10:00:00Z' },
          fitForSurgery: { type: 'boolean', example: true },
          surgeryType: { 
            type: 'string', 
            enum: ['orchiectomy', 'ovariohysterectomy'],
            example: 'ovariohysterectomy'
          },
          observations: { type: 'string', example: 'Updated observations' },
          instructions: { type: 'string', example: 'Updated instructions' },
        },
      },
    }),
    ApiOkResponse('ClinicalRecord'),
    ApiResponse({
      status: 400,
      description: 'Bad Request - Validation error',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 400 },
          message: { type: 'string', example: 'surgeryType is required for surgery records' },
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

export function ApiDeleteClinicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Delete a clinical record',
      description: 'Permanently deletes a clinical record. Only administrators can perform this action.'
    }),
    ApiOkResponse('ClinicalRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}
