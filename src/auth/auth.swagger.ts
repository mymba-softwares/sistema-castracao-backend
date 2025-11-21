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
      description: 'Creates a new user with role-specific data. Administrators can register users with any role. For veterinarians, CRMV is required. For students, enrollment is required. For pet owners, address is required. Receptionist, administrator, and semas roles only create a basic user without additional entities.'
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
          cpf: { type: 'string', example: '05064734069' },
          phone: { type: 'string', example: '81999998888' },
          role: { 
            type: 'string', 
            enum: ['administrator', 'semas', 'veterinarian', 'receptionist', 'petOwner', 'student'],
            example: 'veterinarian'
          },
          crmv: { type: 'string', example: 'CRMV-PE12345', description: 'Required for veterinarians' },
          specialty: { type: 'string', example: 'Cirurgia Veterinária', description: 'Optional for veterinarians and students' },
          enrollment: { type: 'string', example: '20231001234', description: 'Required for students - University enrollment number' },
          address: { type: 'string', example: 'Rua Exemplo, 123', description: 'Required for pet owners' },
          nis: { type: 'string', example: '12345678901', description: 'Optional for pet owners - NIS number' },
          active: { type: 'boolean', example: true, description: 'Optional, defaults to true for veterinarians and students' },
        },
      },
      examples: {
        veterinarian: {
          summary: 'Register veterinarian',
          value: {
            completeName: 'Dr. Maria Santos',
            email: 'maria.santos@vet.com',
            password: 'senha123',
            cpf: '37628107028',
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
            cpf: '89852605020',
            phone: '81988887777',
            role: 'petOwner',
            address: 'Rua das Flores, 456 - Recife/PE',
            nis: '12345678901',
          },
        },
        student: {
          summary: 'Register student',
          value: {
            completeName: 'João Estudante',
            email: 'joao.estudante@ufrpe.br',
            password: 'senha123',
            cpf: '58522458014',
            phone: '81988889999',
            role: 'student',
            enrollment: '20231001234',
            specialty: 'Clínica Geral',
          },
        },
        receptionist: {
          summary: 'Register receptionist',
          value: {
            completeName: 'Ana Recepcionista',
            email: 'ana.recepcao@sistema.com',
            password: 'senha123',
            cpf: '86819663080',
            phone: '81977778888',
            role: 'receptionist',
          },
        },
        semas: {
          summary: 'Register SEMAS user',
          value: {
            completeName: 'João SEMAS',
            email: 'joao.semas@recife.pe.gov.br',
            password: 'senha123',
            cpf: '11223977048',
            phone: '81966665555',
            role: 'semas',
          },
        },
        administrator: {
          summary: 'Register administrator',
          value: {
            completeName: 'Admin Sistema',
            email: 'admin@sistema.com',
            password: 'admin123',
            cpf: '13668497010',
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
          cpf: { type: 'string', example: '04788861011' },
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

export function ApiForgotPassword() {
  return applyDecorators(
    ApiOperation({ 
      summary: 'Solicitar recuperação de senha',
      description: 'Envia um email com instruções para redefinir a senha. Por segurança, sempre retorna sucesso, mesmo se o email não existir.'
    }),
    ApiBody({
      description: 'Email do usuário',
      schema: {
        type: 'object',
        required: ['email'],
        properties: {
          email: { type: 'string', format: 'email', example: 'user@example.com' }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Email enviado com sucesso (se o email existir)',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Se o email existir no sistema, você receberá instruções de recuperação' }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Erro ao enviar email',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Erro ao enviar email de recuperação' }
        }
      }
    }),
    ApiInternalServerErrorResponse('Failed to process request', 'Internal server error'),
  )
}

export function ApiResetPassword() {
  return applyDecorators(
    ApiOperation({ 
      summary: 'Redefinir senha',
      description: 'Redefine a senha usando o token recebido por email. O token expira em 1 hora.'
    }),
    ApiBody({
      description: 'Token e nova senha',
      schema: {
        type: 'object',
        required: ['token', 'newPassword'],
        properties: {
          token: { type: 'string', example: 'abc123token' },
          newPassword: { type: 'string', minLength: 6, example: 'novaSenha123' }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Senha redefinida com sucesso',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Senha redefinida com sucesso' }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Token inválido, expirado ou senha inválida',
      schema: {
        type: 'object',
        properties: {
          message: { 
            type: 'string', 
            examples: ['Token inválido ou expirado', 'Senha deve ter ao menos 6 caracteres']
          }
        }
      }
    }),
    ApiInternalServerErrorResponse('Failed to reset password', 'Internal server error'),
  )
}
