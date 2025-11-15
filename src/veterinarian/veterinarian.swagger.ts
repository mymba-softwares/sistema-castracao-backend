import {
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger'
import {
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
} from '../decorators/swagger-decorators'

const CreateVeterinarianApiOperation = ApiOperation({
  summary: 'Create veterinarian',
  description:
    'Creates a new veterinarian linked to a user with the "veterinarian" role. Requires ADMIN privileges.',
})

const CreateVeterinarianApiResponseSuccess = ApiResponse({
  status: 201,
  description: 'Veterinarian successfully created',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number', example: 1 },
      crmv: { type: 'string', example: 'CRMV-PE12345' },
      specialty: { type: 'string', example: 'General Clinic' },
      userId: { type: 'number', example: 5 },
      user: {
        type: 'object',
        properties: {
          completeName: { type: 'string', example: 'Dr. João Alves' },
          email: { type: 'string', example: 'joao.alves@gmail.com' },
          phone: { type: 'string', example: '81999998888' },
        },
      },
    },
  },
  examples: {
    example: {
      summary: 'Veterinarian successfully registered',
      value: {
        id: 1,
        crmv: 'CRMV-PE12345',
        specialty: 'General Clinic',
        userId: 5,
        user: {
          completeName: 'Dr. John Alves',
          email: 'joao.alves@gmail.com',
          phone: '81999998888',
        },
        message: 'Veterinarian successfully created',
      },
    },
  },
})

const CreateVeterinarianApiResponseBadRequest = ApiResponse({
  status: 400,
  description: 'Invalid data or missing required fields',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string' },
    },
  },
  examples: {
    invalidCrmv: {
      summary: 'Invalid CRMV',
      value: { message: 'Invalid CRMV, must follow the format CRMV-UFxxxxx' },
    },
    invalidSpecialty: {
      summary: 'Invalid specialty',
      value: { message: 'Invalid or missing specialty' },
    },
    invalidUser: {
      summary: 'Invalid user',
      value: { message: 'Associated user not found or invalid' },
    },
  },
})

const CreateVeterinarianApiResponseConflict = ApiResponse({
  status: 409,
  description: 'Data conflict — CRMV or user already in use',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string' },
    },
  },
  examples: {
    crmvInUse: {
      summary: 'CRMV already in use',
      value: { message: 'CRMV already in use' },
    },
    userInUse: {
      summary: 'User already linked to a veterinarian',
      value: { message: 'User already has a veterinarian record' },
    },
  },
})

export function CreateVeterinarianApiResponsesOperation(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  CreateVeterinarianApiOperation(target, propertyKey, descriptor)
  CreateVeterinarianApiResponseSuccess(target, propertyKey, descriptor)
  CreateVeterinarianApiResponseBadRequest(target, propertyKey, descriptor)
  CreateVeterinarianApiResponseConflict(target, propertyKey, descriptor)
  ApiUnauthorizedResponse()(target, propertyKey, descriptor)
  ApiForbiddenResponse()(target, propertyKey, descriptor)
  ApiInternalServerErrorResponse()(target, propertyKey, descriptor)
}

const GetAllVeterinariansApiOperation = ApiOperation({
  summary: 'List veterinarians',
  description:
    'Returns a list of all registered veterinarians. Requires ADMIN privileges.',
})

const GetAllVeterinariansApiResponseSuccess = ApiResponse({
  status: 200,
  description: 'Veterinarians list successfully retrieved',
  schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'number', example: 1 },
        crmv: { type: 'string', example: 'CRMV-PE12345' },
        specialty: { type: 'string', example: 'General Clinic' },
        user: {
          type: 'object',
          properties: {
            completeName: { type: 'string', example: 'Dr. João Alves' },
            email: { type: 'string', example: 'joao.alves@gmail.com' },
            phone: { type: 'string', example: '81999998888' },
          },
        },
        _count: {
          type: 'object',
          properties: {
            clinicalRecords: { type: 'number', example: 12 },
          },
        },
      },
    },
  },
})

export function GetAllVeterinariansApiResponsesOperation(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  GetAllVeterinariansApiOperation(target, propertyKey, descriptor)
  GetAllVeterinariansApiResponseSuccess(target, propertyKey, descriptor)
  ApiUnauthorizedResponse()(target, propertyKey, descriptor)
  ApiForbiddenResponse()(target, propertyKey, descriptor)
  ApiInternalServerErrorResponse()(target, propertyKey, descriptor)
}

const GetVeterinarianByIdApiOperation = ApiOperation({
  summary: 'Get veterinarian by ID',
  description:
    'Returns the details of a specific veterinarian by ID. Requires ADMIN privileges.',
})

const GetVeterinarianByIdApiResponseSuccess = ApiResponse({
  status: 200,
  description: 'Veterinarian successfully retrieved',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number', example: 1 },
      crmv: { type: 'string', example: 'CRMV-PE12345' },
      specialty: { type: 'string', example: 'General Clinic' },
      userId: { type: 'number', example: 5 },
      user: {
        type: 'object',
        properties: {
          completeName: { type: 'string', example: 'Dr. João Alves' },
          email: { type: 'string', example: 'joao.alves@gmail.com' },
          phone: { type: 'string', example: '81999998888' },
        },
      },
    },
  },
})

const GetVeterinarianByIdApiResponseBadRequest = ApiResponse({
  status: 400,
  description: 'Invalid ID — must be a number',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Invalid ID, must be a number' },
    },
  },
})

const GetVeterinarianByIdApiResponseNotFound = ApiResponse({
  status: 404,
  description: 'Veterinarian not found',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Veterinarian not found' },
    },
  },
})

export function GetVeterinarianByIdApiResponsesOperation(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  GetVeterinarianByIdApiOperation(target, propertyKey, descriptor)
  GetVeterinarianByIdApiResponseSuccess(target, propertyKey, descriptor)
  GetVeterinarianByIdApiResponseBadRequest(target, propertyKey, descriptor)
  GetVeterinarianByIdApiResponseNotFound(target, propertyKey, descriptor)
  ApiUnauthorizedResponse()(target, propertyKey, descriptor)
  ApiForbiddenResponse()(target, propertyKey, descriptor)
  ApiInternalServerErrorResponse()(target, propertyKey, descriptor)
}

const UpdateVeterinarianApiOperation = ApiOperation({
  summary: 'Update veterinarian by ID',
  description:
    'Allows updating veterinarian data (CRMV, specialty, or linked user). Requires ADMIN privileges.',
})

const UpdateVeterinarianApiResponseSuccess = ApiResponse({
  status: 200,
  description: 'Veterinarian successfully updated',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number', example: 1 },
      crmv: { type: 'string', example: 'CRMV-PE54321' },
      specialty: { type: 'string', example: 'Veterinary Surgery' },
      userId: { type: 'number', example: 5 },
    },
  },
})

const UpdateVeterinarianApiResponseBadRequest = ApiResponse({
  status: 400,
  description: 'Invalid data or missing fields',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string' },
    },
  },
  examples: {
    invalidCrmv: {
      summary: 'Invalid CRMV',
      value: { message: 'Invalid CRMV format' },
    },
    invalidSpecialty: {
      summary: 'Invalid specialty',
      value: { message: 'Invalid specialty' },
    },
  },
})

const UpdateVeterinarianApiResponseNotFound = ApiResponse({
  status: 404,
  description: 'Veterinarian not found',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Veterinarian not found' },
    },
  },
})

export function UpdateVeterinarianApiResponsesOperation(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  UpdateVeterinarianApiOperation(target, propertyKey, descriptor)
  UpdateVeterinarianApiResponseSuccess(target, propertyKey, descriptor)
  UpdateVeterinarianApiResponseBadRequest(target, propertyKey, descriptor)
  UpdateVeterinarianApiResponseNotFound(target, propertyKey, descriptor)
  ApiUnauthorizedResponse()(target, propertyKey, descriptor)
  ApiForbiddenResponse()(target, propertyKey, descriptor)
  ApiInternalServerErrorResponse()(target, propertyKey, descriptor)
}

const DeleteVeterinarianApiOperation = ApiOperation({
  summary: 'Delete veterinarian by ID',
  description:
    'Deletes a specific veterinarian from the system. Requires ADMIN privileges.',
})

const DeleteVeterinarianApiResponseSuccess = ApiResponse({
  status: 200,
  description: 'Veterinarian successfully deleted',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Veterinarian successfully deleted' },
    },
  },
})

const DeleteVeterinarianApiResponseNotFound = ApiResponse({
  status: 404,
  description: 'Veterinarian not found',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Veterinarian not found' },
    },
  },
})

export function DeleteVeterinarianApiResponsesOperation(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  DeleteVeterinarianApiOperation(target, propertyKey, descriptor)
  DeleteVeterinarianApiResponseSuccess(target, propertyKey, descriptor)
  DeleteVeterinarianApiResponseNotFound(target, propertyKey, descriptor)
  ApiUnauthorizedResponse()(target, propertyKey, descriptor)
  ApiForbiddenResponse()(target, propertyKey, descriptor)
  ApiInternalServerErrorResponse()(target, propertyKey, descriptor)
}
