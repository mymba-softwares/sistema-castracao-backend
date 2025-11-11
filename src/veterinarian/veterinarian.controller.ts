import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { VeterinarianService } from './veterinarian.service';
import { CreateVeterinarianDto } from '../dto/create-veterinarian.dto';
import { UpdateVeterinarianDto } from '../dto/update-veterinarian.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import {
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '../decorators/swagger-decorators';
import {
  CreateVeterinarianApiResponsesOperation,
  GetAllVeterinariansApiResponsesOperation,
  GetVeterinarianByIdApiResponsesOperation,
} from './veterinarian.swagger'
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/decorators/role-decorator';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthUser } from 'src/interfaces/auth-user';
import type { Request } from 'express';
import { CreateUserDto } from 'src/dto/create-user.dto';

@ApiTags('Veterinarians')
@ApiBearerAuth('access-token')
@Controller('veterinarian')
@UseGuards(JwtAuthGuard, RolesGuard)
export class VeterinarianController {
  constructor(private readonly veterinarianService: VeterinarianService) {}

  @Post()
  @Roles(Role.administrator)
  @CreateVeterinarianApiResponsesOperation
  @ApiInternalServerErrorResponse()
  create(@Body() dto: CreateVeterinarianDto, @Req() req: Request) {
  const user = req.user as AuthUser;
  return this.veterinarianService.createVeterinarian(user.id, dto);
}

  @Get('me')
  @Roles(Role.veterinarian)
  @ApiOperation({ summary: 'Find profile of the currently logged-in Veterinarian' })
  @ApiOkResponse('Veterinarian')
  @ApiNotFoundResponse('Veterinarian')
  getMyProfile(@Req() req: Request) {
    const user = req.user as AuthUser;
    return this.veterinarianService.findVeterinarianById(user.id);
  }

  // @Patch('me')
  // @Roles(Role.veterinarian)
  // @ApiOperation({ summary: 'Update profile of the currently logged-in Veterinarian' })
  // @ApiOkResponse('Veterinarian')
  // @ApiNotFoundResponse('Veterinarian')
  // updateMyProfile(@Req() req: Request, @Body() dto: UpdateVeterinarianDto) {
  //   const user = req.user as AuthUser;
  //   return this.veterinarianService.updateVeterinarian(user.id, dto);
  // }

  @Delete('me')
  @Roles(Role.veterinarian)
  @ApiOperation({ summary: 'Delete profile of the currently logged-in Veterinarian' })
  @ApiOkResponse('Veterinarian')
  @ApiNotFoundResponse('Veterinarian')
  deleteMyProfile(@Req() req: Request) {
    const user = req.user as AuthUser;
    return this.veterinarianService.deleteVeterinarian(user.id);
  }

  @Get()
  @Roles(Role.administrator)
  @ApiOperation({ summary: 'Get all veterinarians' })
  @ApiOkResponse('Veterinarian')
  @ApiInternalServerErrorResponse()
  findAll() {
    return this.veterinarianService.findAllVeterinarians();
  }

  @Get(':id')
  @Roles(Role.administrator)
  @ApiOperation({ summary: 'Get a veterinarian by ID' })
  @ApiOkResponse('Veterinarian')
  @ApiNotFoundResponse('Veterinarian')
  findById(@Param('id') id: string) {
    return this.veterinarianService.findVeterinarianById(Number(id));
  }

  // @Patch(':id')
  // @Roles(Role.administrator)
  // @ApiOperation({ summary: 'Update a veterinarian by ID' })
  // @ApiOkResponse('Veterinarian')
  // @ApiNotFoundResponse('Veterinarian')
  // update(@Param('id') id: string, @Body() dto: UpdateVeterinarianDto) {
  //   return this.veterinarianService.updateVeterinarian(Number(id), dto);
  // }

  @Delete(':id')
  @Roles(Role.administrator)
  @ApiOperation({ summary: 'Delete a veterinarian by ID' })
  @ApiOkResponse('Veterinarian')
  @ApiNotFoundResponse('Veterinarian')
  delete(@Param('id') id: string) {
    return this.veterinarianService.deleteVeterinarian(Number(id));
  }
}
