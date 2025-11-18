import { applyDecorators } from '@nestjs/common'
import { 
  ApiOperation, 
  ApiBody, 
  ApiResponse,
  ApiBearerAuth 
} from '@nestjs/swagger'
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
} from '../decorators/swagger-decorators'

export function ApiRegister() {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    ApiOperation({ 
      summary: 'Register a new user in the system',
      description: 'Creates a new user with role-specific data. Administrators can register users with any role. For veterinarians, CRMV is required. For pet owners, address is required.'
    }),
    ApiBody({
      description: 'User registration data',
      schema: {
        type: 'object',
        required: ['completeName', 'email', 'password', 'cpf', 'role'],
        properties: {
          completeName: { type: 'string', example: 'João Silva' },
          email: { type: 'string', format: 'email', example: 'joao.silva@example.com' },
          password: { type: 'string', minLength: 6, example: 'senha123' },
          cpf: { type: 'string', example: '39601045023' },
          phone: { type: 'string', example: '81999998888' },
          role: { 
            type: 'string', 
            enum: ['administrator', 'semas', 'veterinarian', 'receptionist', 'petOwner', 'student'],
            example: 'veterinarian'
          },
          crmv: { type: 'string', example: 'CRMV-PE12345', description: 'Required for veterinarians' },
          specialty: { type: 'string', example: 'Cirurgia Veterinária', description: 'Optional for veterinarians' },
          address: { type: 'string', example: 'Rua Exemplo, 123', description: 'Required for pet owners' },
          nis: { type: 'string', example: '12345678901', description: 'Optional for pet owners - NIS number' },
          active: { type: 'boolean', example: true, description: 'Optional, defaults to true for veterinarians' },
        },
      },
      examples: {
        veterinarian: {
          summary: 'Register veterinarian',
          value: {
            completeName: 'Dr. Maria Santos',
            email: 'maria.santos@vet.com',
            password: 'senha123',
            cpf: '81552103080',
            phone: '81999998888',
            role: 'veterinarian',
            crmv: 'CRMV-PE12345',
            specialty: 'Cirurgia Veterinária',
            active: true,
          },
        },
        petOwner: {
          summary: 'Register pet owner',
          value: {
            completeName: 'Carlos Oliveira',
            email: 'carlos@example.com',
            password: 'senha123',
            cpf: '39665543059',
            phone: '81988887777',
            role: 'petOwner',
            address: 'Rua das Flores, 456 - Recife/PE',
            nis: '12345678901',
          },
        },
        administrator: {
          summary: 'Register administrator',
          value: {
            completeName: 'Admin Sistema',
            email: 'admin@sistema.com',
            password: 'admin123',
            cpf: '81448875064',
            phone: '81977776666',
            role: 'administrator',
          },
        },
      },
    }),
    ApiResponse({
      status: 201,
      description: 'User registered successfully with related entity data',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          email: { type: 'string', example: 'maria.santos@vet.com' },
          completeName: { type: 'string', example: 'Dr. Maria Santos' },
          cpf: { type: 'string', example: '65160534059' },
          phone: { type: 'string', example: '81999998888' },
          role: { type: 'string', example: 'veterinarian' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
          related: {
            type: 'object',
            description: 'Related entity data (Veterinarian or PetOwner)',
            properties: {
              id: { type: 'number', example: 1 },
              crmv: { type: 'string', example: 'CRMV-PE12345' },
              specialty: { type: 'string', example: 'Cirurgia Veterinária' },
              active: { type: 'boolean', example: true },
            },
          },
        },
      },
    }),
    ApiResponse({
      status: 400,
      description: 'Bad request - Invalid data',
      schema: {
        type: 'object',
        properties: {
          message: { 
            type: 'array',
            items: { type: 'string' },
            example: ['CRMV é obrigatório para veterinários', 'CPF inválido']
          },
        },
      },
    }),
    ApiResponse({
      status: 409,
      description: 'Conflict - User with email or CPF already exists',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'User with this email or CPF already exists' },
        },
      },
    }),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse('Failed to register user', 'Internal server error while registering user'),
  )
}
