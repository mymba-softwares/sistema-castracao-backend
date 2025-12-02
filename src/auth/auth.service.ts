import { Injectable, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import * as crypto from 'crypto'
import { VeterinarianService } from '../veterinarian/veterinarian.service'
import { PetOwnerService } from '../pet-owner/pet-owner.service'
import { UserService } from '../user/user.service'
import { TokenService } from '../token/token.service'
import { EmailService } from '../email/email.service'
import { LoginDto } from '../dto/login.dto'
import { CreateUserDto } from '../dto/create-user.dto'
import { ForgotPasswordDto, ResetPasswordDto } from '../dto/password-reset.dto'
import { Role, Veterinarian, PetOwner, PetOwnerType } from '@prisma/client'
import { cpf, cnpj } from 'cpf-cnpj-validator'
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly veterinarianService: VeterinarianService,
    private readonly petOwnerService: PetOwnerService,
    private readonly tokenService: TokenService,
    private readonly emailService: EmailService,
    private readonly prisma: PrismaService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email)

    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos')
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.hashedPassword)
    if (!passwordMatches) {
      throw new UnauthorizedException('Email ou senha inválidos')
    }

    const tokens = await this.tokenService.createTokens(user.id, user.email, user.role)
    return tokens
  }

  async validateRegisterData(dto: CreateUserDto) {
    if (dto.password.length < 6) {
      throw new BadRequestException('Senha deve ter ao menos 6 caracteres')
    }

    if (dto.role === Role.petOwner && dto.petOwnerType === PetOwnerType.ngo) {
      if (!dto.cnpj) {
        throw new BadRequestException('CNPJ é obrigatório para ONGs')
      }
      if (!cnpj.isValid(dto.cnpj)) {
        throw new BadRequestException('CNPJ inválido')
      }
      const existingByCnpj = await this.prisma.user.findUnique({ where: { cnpj: dto.cnpj } })
      if (existingByCnpj) {
        throw new ConflictException('CNPJ já cadastrado')
      }
    } else {
      if (!dto.cpf) {
        throw new BadRequestException('CPF é obrigatório')
      }
      if (!cpf.isValid(dto.cpf)) {
        throw new BadRequestException('CPF inválido')
      }
      const existingByCpf = await this.prisma.user.findUnique({ where: { cpf: dto.cpf } })
      if (existingByCpf) {
        throw new ConflictException('CPF já cadastrado')
      }
    }

    if (!Object.values(Role).includes(dto.role)) {
      throw new BadRequestException('Role inválida')
    }

    const existingByEmail = await this.userService.findByEmail(dto.email)
    if (existingByEmail) {
      throw new ConflictException('Email já cadastrado')
    }

    return true
  }

  async register(dto: CreateUserDto) {
    await this.validateRegisterData(dto);

    let user;
    let relatedEntity: any = null;

    switch (dto.role) {
      case Role.veterinarian:
        if (!dto.crmv) {
          throw new BadRequestException('CRMV é obrigatório para veterinários');
        }

        const hashedPasswordVet = await bcrypt.hash(dto.password, 10);
        user = await this.prisma.user.create({
          data: {
            email: dto.email,
            cpf: dto.cpf,
            phone: dto.phone,
            completeName: dto.completeName,
            hashedPassword: hashedPasswordVet,
            role: dto.role,
            registered: true,
          },
        });

      relatedEntity = await this.veterinarianService.createVeterinarian(user.id, {
        crmv: dto.crmv,
        specialty: dto.specialty,
        active: true,
      });
      break;

      case Role.petOwner:
        if (!dto.address) {
          throw new BadRequestException('Endereço é obrigatório para responsáveis');
        }

        const ownerType = dto.petOwnerType || PetOwnerType.individual;
        const hashedPasswordOwner = await bcrypt.hash(dto.password, 10);
        user = await this.prisma.user.create({
          data: {
            email: dto.email,
            cpf: ownerType === PetOwnerType.individual ? dto.cpf : null,
            cnpj: ownerType === PetOwnerType.ngo ? dto.cnpj : null,
            phone: dto.phone,
            completeName: dto.completeName,
            hashedPassword: hashedPasswordOwner,
            role: dto.role,
            registered: true,
          },
        });

        relatedEntity = await this.petOwnerService.createPetOwner(user.id, {
          fullAddress: dto.address,
          nis: dto.nis,
          type: ownerType,
        });
        break;

    case Role.administrator:
    case Role.receptionist:
    case Role.semas:
      const hashedPasswordDefault = await bcrypt.hash(dto.password, 10);
      user = await this.prisma.user.create({
        data: {
          email: dto.email,
          cpf: dto.cpf,
          phone: dto.phone,
          completeName: dto.completeName,
          hashedPassword: hashedPasswordDefault,
          role: dto.role,
          registered: true,
        },
      });
      relatedEntity = null;
      break;

    case Role.student:
      if (!dto.enrollment) {
        throw new BadRequestException('Matrícula é obrigatória para estudantes');
      }

      const hashedPasswordStudent = await bcrypt.hash(dto.password, 10);
      user = await this.prisma.user.create({
        data: {
          email: dto.email,
          cpf: dto.cpf,
          phone: dto.phone,
          completeName: dto.completeName,
          hashedPassword: hashedPasswordStudent,
          role: dto.role,
          registered: true,
        },
      });

      relatedEntity = await this.veterinarianService.createVeterinarian(user.id, {
        specialty: dto.specialty,
        enrollment: dto.enrollment,
        active: true,
      });
      break;

    default:
      throw new BadRequestException('Role inválida');
  }

  const { hashedPassword: _, ...safeUser } = user;
  return { ...safeUser, related: relatedEntity };
}

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      return {
        message: 'Se o email existir no sistema, você receberá instruções de recuperação',
      };
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken: hashedToken,
        passwordResetExpires: expiresAt,
      },
    });

    try {
      await this.emailService.sendPasswordResetEmail(
        user.email,
        resetToken,
        user.completeName,
      );
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      throw new BadRequestException('Erro ao enviar email de recuperação');
    }

    return {
      message: 'Se o email existir no sistema, você receberá instruções de recuperação',
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const hashedToken = crypto.createHash('sha256').update(dto.token).digest('hex');

    const user = await this.prisma.user.findFirst({
      where: {
        passwordResetToken: hashedToken,
        passwordResetExpires: {
          gt: new Date(), 
        },
      },
    });

    if (!user) {
      throw new BadRequestException('Token inválido ou expirado');
    }

    if (dto.newPassword.length < 6) {
      throw new BadRequestException('Senha deve ter ao menos 6 caracteres');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        hashedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
        recoveryMode: false,
      },
    });

    try {
      await this.emailService.sendPasswordResetSuccessEmail(
        user.email,
        user.completeName,
      );
    } catch (error) {
      console.error('Erro ao enviar email de confirmação:', error);
    }

    return {
      message: 'Senha redefinida com sucesso',
    };
  }
}
