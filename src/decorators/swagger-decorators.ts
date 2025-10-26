import { applyDecorators } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'

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
