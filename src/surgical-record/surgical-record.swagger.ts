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

export function ApiCreateSurgicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Create a new surgical record',
      description: 'Creates a new surgical record (ficha cirúrgica) with patient identification, surgical team, diagnoses, procedures, and postoperative control. Veterinarians and administrators can create records.'
    }),
    ApiBody({
      description: 'Complete surgical record data',
      schema: {
        type: 'object',
        required: ['medicalRecordId'],
        properties: {
          medicalRecordId: { type: 'number', example: 1, description: 'Medical record ID' },
          appointmentId: { type: 'number', example: 1, description: 'Appointment ID (optional)' },
          recordNumber: { type: 'string', example: 'SR-2025-001', description: 'Record number' },
          recordDate: { type: 'string', format: 'date-time', example: '2025-11-30T10:00:00Z', description: 'Record date' },
          // Patient identification
          animalName: { type: 'string', example: 'Rex', description: 'Animal name' },
          species: { type: 'string', example: 'Canino', description: 'Species' },
          breed: { type: 'string', example: 'Poodle', description: 'Breed' },
          coat: { type: 'string', example: 'Branco', description: 'Coat/fur color' },
          size: { type: 'string', example: 'Pequeno', description: 'Size/build' },
          gender: { type: 'string', example: 'Macho', description: 'Gender' },
          age: { type: 'string', example: '3 anos', description: 'Age' },
          weight: { type: 'string', example: '8kg', description: 'Weight' },
          ownerName: { type: 'string', example: 'João Silva', description: 'Owner name' },
          ownerPhone: { type: 'string', example: '81999998888', description: 'Owner phone' },
          ownerAddress: { type: 'string', example: 'Rua das Flores, 123, Centro, Recife', description: 'Owner address' },
          // Surgical team
          surgeon: { type: 'string', example: 'Dr. Carlos Mendes', description: 'Surgeon' },
          firstAssistant: { type: 'string', example: 'Dr. Ana Paula', description: 'First assistant' },
          secondAssistant: { type: 'string', example: 'Dr. Roberto Lima', description: 'Second assistant' },
          instrumentator: { type: 'string', example: 'Enf. Maria Santos', description: 'Instrumentator' },
          anesthetist: { type: 'string', example: 'Dr. Pedro Souza', description: 'Anesthetist' },
          duration: { type: 'string', example: '45 minutos', description: 'Surgery duration' },
          surgeryStart: { type: 'string', format: 'date-time', example: '2025-11-30T10:00:00Z', description: 'Surgery start time' },
          surgeryEnd: { type: 'string', format: 'date-time', example: '2025-11-30T10:45:00Z', description: 'Surgery end time' },
          // Diagnoses and procedures
          preoperativeDiagnosis: { type: 'string', example: 'Animal reprodutivamente ativo', description: 'Preoperative diagnosis' },
          postoperativeDiagnosis: { type: 'string', example: 'Animal castrado com sucesso', description: 'Postoperative diagnosis' },
          proposedOperation: { type: 'string', example: 'Orquiectomia', description: 'Proposed operation' },
          performedOperation: { type: 'string', example: 'Orquiectomia bilateral', description: 'Performed operation' },
          // Details
          materialsUsed: { type: 'string', example: 'Bisturi, pinça, fio de sutura nylon 3-0, gaze estéril', description: 'Materials used' },
          postoperativeControl: { type: 'string', example: 'Retorno em 10 dias para retirada de pontos. Uso de colar elisabetano. Repouso por 7 dias.', description: 'Postoperative control' },
          operationDescription: { type: 'string', example: 'Realizada incisão pré-escrotal. Exposição dos testículos. Ligadura do cordão espermático. Remoção bilateral dos testículos. Sutura em camadas. Procedimento sem intercorrências.', description: 'Operation description' },
          additionalObservations: { type: 'string', example: 'Procedimento transcorreu sem complicações', description: 'Additional observations' },
        },
      },
      examples: {
        complete: {
          summary: 'Complete surgical record',
          value: {
            medicalRecordId: 1,
            appointmentId: 1,
            recordNumber: 'SR-2025-001',
            recordDate: '2025-11-30T10:00:00Z',
            animalName: 'Rex',
            species: 'Canino',
            breed: 'Poodle',
            coat: 'Branco',
            size: 'Pequeno',
            gender: 'Macho',
            age: '3 anos',
            weight: '8kg',
            ownerName: 'João Silva',
            ownerPhone: '81999998888',
            ownerAddress: 'Rua das Flores, 123, Centro, Recife',
            surgeon: 'Dr. Carlos Mendes',
            firstAssistant: 'Dr. Ana Paula',
            secondAssistant: 'Dr. Roberto Lima',
            instrumentator: 'Enf. Maria Santos',
            anesthetist: 'Dr. Pedro Souza',
            duration: '45 minutos',
            surgeryStart: '2025-11-30T10:00:00Z',
            surgeryEnd: '2025-11-30T10:45:00Z',
            preoperativeDiagnosis: 'Animal reprodutivamente ativo',
            postoperativeDiagnosis: 'Animal castrado com sucesso',
            proposedOperation: 'Orquiectomia',
            performedOperation: 'Orquiectomia bilateral',
            materialsUsed: 'Bisturi, pinça, fio de sutura nylon 3-0, gaze estéril',
            postoperativeControl: 'Retorno em 10 dias para retirada de pontos. Uso de colar elisabetano. Repouso por 7 dias.',
            operationDescription: 'Realizada incisão pré-escrotal. Exposição dos testículos. Ligadura do cordão espermático. Remoção bilateral dos testículos. Sutura em camadas. Procedimento sem intercorrências.',
            additionalObservations: 'Procedimento transcorreu sem complicações',
          },
        },
        minimal: {
          summary: 'Minimal surgical record',
          value: {
            medicalRecordId: 1,
            surgeon: 'Dr. Carlos Mendes',
            performedOperation: 'Orquiectomia bilateral',
          },
        },
      },
    }),
    ApiCreatedResponse('SurgicalRecord'),
    ApiResponse({
      status: 400,
      description: 'Bad Request - Validation error or missing required fields',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 400 },
          message: { type: 'string', example: 'medicalRecordId is required' },
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

export function ApiGetAllSurgicalRecords() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get all surgical records',
      description: 'Returns all surgical records with related data (medical record, animal, appointment). Accessible by veterinarians, administrators, and receptionists.'
    }),
    ApiOkResponse('SurgicalRecord'),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetSurgicalRecordById() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get a surgical record by ID',
      description: 'Returns a specific surgical record with all related data including animal and appointment information.'
    }),
    ApiOkResponse('SurgicalRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiGetSurgicalRecordsByMedicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Get surgical records by medical record ID',
      description: 'Returns all surgical records associated with a specific medical record.'
    }),
    ApiOkResponse('SurgicalRecord'),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiUpdateSurgicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Update a surgical record',
      description: 'Updates an existing surgical record. Only veterinarians and administrators can update records.'
    }),
    ApiBody({
      description: 'Fields to update',
      schema: {
        type: 'object',
        properties: {
          recordNumber: { type: 'string' },
          surgeon: { type: 'string' },
          performedOperation: { type: 'string' },
          postoperativeControl: { type: 'string' },
          additionalObservations: { type: 'string' },
        },
      },
    }),
    ApiOkResponse('SurgicalRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}

export function ApiDeleteSurgicalRecord() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Delete a surgical record',
      description: 'Deletes a surgical record. Only administrators can delete records.'
    }),
    ApiOkResponse('SurgicalRecord'),
    ApiNotFoundResponse(),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  );
}
