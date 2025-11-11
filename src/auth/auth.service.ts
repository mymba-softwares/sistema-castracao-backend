import { Injectable, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { VeterinarianService } from 'src/veterinarian/veterinarian.service'
import { PetOwnerService } from 'src/pet-owner/pet-owner.service'
import { UserService } from '../user/user.service'
import { TokenService } from '../token/token.service'
import { LoginDto } from '../dto/login.dto'
import { CreateUserDto } from '../dto/create-user.dto'
import { Role, Veterinarian, PetOwner } from '@prisma/client'
import { cpf } from 'cpf-cnpj-validator'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly veterinarianService: VeterinarianService,
    private readonly petOwnerService: PetOwnerService,
    private readonly tokenService: TokenService,
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

    if (!cpf.isValid(dto.cpf)) {
    throw new BadRequestException('CPF inválido')
  }

    if (!Object.values(Role).includes(dto.role)) {
      throw new BadRequestException('Role inválida')
    }

    const existingByEmail = await this.userService.findByEmail(dto.email)
    if (existingByEmail) {
      throw new ConflictException('Email já cadastrado')
    }

    const existingByCpf = await this.userService.findByCpf(dto.cpf)
    if (existingByCpf) {
      throw new ConflictException('CPF já cadastrado')
    }

    return true
  }

  async register(dto: CreateUserDto) {
  const existingUser = await this.prisma.user.findFirst({
    where: { OR: [{ email: dto.email }, { cpf: dto.cpf }] },
  });
  if (existingUser) {
    throw new ConflictException('User with this email or CPF already exists');
  }

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
        },
      });

      relatedEntity = await this.veterinarianService.createVeterinarian(user.id, {
        crmv: dto.crmv,
        active: true,
      });
      break;

    case Role.petOwner:
      if (!dto.address) {
        throw new BadRequestException('Endereço é obrigatório para responsáveis');
      }

      const hashedPasswordOwner = await bcrypt.hash(dto.password, 10);
      user = await this.prisma.user.create({
        data: {
          email: dto.email,
          cpf: dto.cpf,
          phone: dto.phone,
          completeName: dto.completeName,
          hashedPassword: hashedPasswordOwner,
          role: dto.role,
        },
      });

      relatedEntity = await this.petOwnerService.createPetOwner(user.id, {
        fullAddress: dto.address,
      });
      break;

    case Role.administrator:
      const hashedPasswordAdmin = await bcrypt.hash(dto.password, 10);
      user = await this.prisma.user.create({
        data: {
          email: dto.email,
          cpf: dto.cpf,
          phone: dto.phone,
          completeName: dto.completeName,
          hashedPassword: hashedPasswordAdmin,
          role: dto.role,
        },
      });
      relatedEntity = null;
      break;

    default:
      throw new BadRequestException('Role inválida');
  }

  const { hashedPassword: _, ...safeUser } = user;
  return { ...safeUser, related: relatedEntity };
}
}
