import { applyDecorators } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { ApiOperation, ApiBody } from '@nestjs/swagger'
import { LoginDto } from '../dto/login.dto'

export function ApiUnauthorizedResponse() {
  return applyDecorators(
    ApiResponse({
      status: 401,
      description: 'Invalid or missing token',
      schema: { type: 'object', properties: { message: { type: 'string' } }, example: { message: 'Invalid or missing token' } },
    }),
  )
}

export function ApiForbiddenResponse() {
  return applyDecorators(
    ApiResponse({
      status: 403,
      description: 'User not authorized (not an admin)',
      schema: { type: 'object', properties: { message: { type: 'string' } }, example: { message: 'User not authorized' } },
    }),
  )
}

export function ApiInternalServerErrorResponse(description?: string, example?: string) {
  return applyDecorators(
    ApiResponse({
      status: 500,
      description: description || 'Internal server error',
      schema: { type: 'object', properties: { message: { type: 'string' } }, example: { message: example || description || 'Internal server error' } },
    }),
  )
}

export function ApiNotFoundResponse(entity?: string) {
  return applyDecorators(
    ApiResponse({
      status: 404,
      description: `${entity || 'Resource'} not found`,
      schema: { type: 'object', properties: { message: { type: 'string' } }, example: { message: `${entity || 'Resource'} not found` } },
    }),
  )
}

export function ApiCreatedResponse(entity?: string) {
  return applyDecorators(
    ApiResponse({
      status: 201,
      description: `${entity || 'Resource'} created successfully`,
      schema: { type: 'object', properties: { message: { type: 'string' } }, example: { message: `${entity || 'Resource'} created successfully` } },
    }),
  )
}

export function ApiOkResponse(entity?: string) {
  return applyDecorators(
    ApiResponse({
      status: 200,
      description: `${entity || 'Resource'} retrieved successfully`,
      schema: { type: 'object', properties: { message: { type: 'string' } }, example: { message: `${entity || 'Resource'} retrieved successfully` } },
    }),
  )
}

export function ApiLogin() {
  return applyDecorators(
    ApiOperation({ summary: 'Login user and return access and refresh tokens' }),
    ApiBody({
      description: 'User credentials',
      type: LoginDto,
      examples: {
        example1: {
          summary: 'Valid credentials',
          value: {
            email: 'thiago@example.com',
            password: '12345678',
          },
        },
      },
    }),
    ApiResponse({
      status: 200,
      description: 'Tokens returned successfully',
      schema: {
        type: 'object',
        properties: {
          accessToken: {
            type: 'string',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          },
          refreshToken: {
            type: 'string',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          },
        },
      },
    }),
    ApiUnauthorizedResponse(),
    ApiInternalServerErrorResponse('Failed to login', 'Internal server error while logging in'),
  )
}

