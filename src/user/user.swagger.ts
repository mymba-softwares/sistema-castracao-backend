import { applyDecorators } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiCreatedResponse,
} from '../decorators/swagger-decorators'

export function ApiCreateUser() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create a new user',
      description: 'Creates a new user in the system. Only administrators can create users.',
    }),
    ApiResponse({
      status: 201,
      description: 'User created successfully',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          role: { type: 'string', example: 'administrator' },
          email: { type: 'string', example: 'admin@sistema.com' },
          completeName: { type: 'string', example: 'Admin Sistema' },
          cpf: { type: 'string', example: '12345678901' },
          phone: { type: 'string', example: '81999998888' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
          recoveryMode: { type: 'boolean', example: false },
        },
      },
    }),
    ApiResponse({
      status: 400,
      description: 'Invalid data',
    }),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  )
}

export function ApiGetMe() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get current logged-in user profile',
      description: 'Returns the profile of the currently authenticated user, including related entities (veterinarian or petOwner if applicable).',
    }),
    ApiResponse({
      status: 200,
      description: 'User profile retrieved successfully',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          role: { type: 'string', example: 'veterinarian' },
          email: { type: 'string', example: 'maria.santos@vet.com' },
          completeName: { type: 'string', example: 'Dr. Maria Santos' },
          cpf: { type: 'string', example: '12345678901' },
          phone: { type: 'string', example: '81999998888' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
          recoveryMode: { type: 'boolean', example: false },
          veterinarian: {
            type: 'object',
            nullable: true,
            properties: {
              id: { type: 'number', example: 1 },
              crmv: { type: 'string', example: 'CRMV-PE12345' },
              specialty: { type: 'string', example: 'Cirurgia Veterinária' },
              active: { type: 'boolean', example: true },
            },
          },
          petOwner: {
            type: 'object',
            nullable: true,
            properties: {
              id: { type: 'number', example: 1 },
              fullAddress: { type: 'string', example: 'Rua das Flores, 456 - Recife/PE' },
              nis: { type: 'string', example: '12345678901' },
            },
          },
        },
      },
    }),
    ApiNotFoundResponse('User'),
    ApiUnauthorizedResponse(),
    ApiInternalServerErrorResponse(),
  )
}

export function ApiGetAllUsers() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get all users',
      description: 'Returns a list of all users in the system with their related entities. Accessible by administrators, SEMAS, and receptionists.',
    }),
    ApiResponse({
      status: 200,
      description: 'List of users retrieved successfully',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number', example: 1 },
            role: { type: 'string', example: 'veterinarian' },
            email: { type: 'string', example: 'user@example.com' },
            completeName: { type: 'string', example: 'João Silva' },
            cpf: { type: 'string', example: '12345678901' },
            phone: { type: 'string', example: '81999998888' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
            veterinarian: {
              type: 'object',
              nullable: true,
              properties: {
                crmv: { type: 'string', example: 'CRMV-PE12345' },
                specialty: { type: 'string', example: 'Clínica Geral' },
              },
            },
            petOwner: {
              type: 'object',
              nullable: true,
              properties: {
                fullAddress: { type: 'string', example: 'Rua Exemplo, 123' },
                nis: { type: 'string', example: '12345678901' },
              },
            },
          },
        },
      },
    }),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  )
}

export function ApiGetUserById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get user by ID',
      description: 'Returns a specific user by their ID, including related entities. Accessible by administrators, SEMAS, veterinarians, and receptionists.',
    }),
    ApiResponse({
      status: 200,
      description: 'User retrieved successfully',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          role: { type: 'string', example: 'petOwner' },
          email: { type: 'string', example: 'carlos@example.com' },
          completeName: { type: 'string', example: 'Carlos Oliveira' },
          cpf: { type: 'string', example: '12345678901' },
          phone: { type: 'string', example: '81988887777' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
          petOwner: {
            type: 'object',
            nullable: true,
            properties: {
              id: { type: 'number', example: 1 },
              fullAddress: { type: 'string', example: 'Rua das Flores, 456' },
              nis: { type: 'string', example: '12345678901' },
            },
          },
        },
      },
    }),
    ApiNotFoundResponse('User'),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  )
}

export function ApiUpdateUser() {
  return applyDecorators(
    ApiOperation({
      summary: 'Update a user',
      description: 'Updates user information. Only accessible by administrators.',
    }),
    ApiResponse({
      status: 200,
      description: 'User updated successfully',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          role: { type: 'string', example: 'veterinarian' },
          email: { type: 'string', example: 'updated@example.com' },
          completeName: { type: 'string', example: 'Updated Name' },
          cpf: { type: 'string', example: '12345678901' },
          phone: { type: 'string', example: '81999998888' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
    }),
    ApiNotFoundResponse('User'),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  )
}

export function ApiDeleteUser() {
  return applyDecorators(
    ApiOperation({
      summary: 'Delete a user',
      description: 'Deletes a user from the system. Only accessible by administrators.',
    }),
    ApiResponse({
      status: 200,
      description: 'User deleted successfully',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'User deleted successfully' },
        },
      },
    }),
    ApiNotFoundResponse('User'),
    ApiUnauthorizedResponse(),
    ApiForbiddenResponse(),
    ApiInternalServerErrorResponse(),
  )
}
