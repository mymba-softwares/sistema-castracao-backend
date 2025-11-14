import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { Role } from '@prisma/client';
import { generateValidCPF } from '../src/utils/cpf-generator';

describe('Sistema de Castração (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let authToken: string;
  let adminUserId: number;
  let veterinarianUserId: number;
  let petOwnerUserId: number;
  let petOwnerId: number;
  let animalId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.init();

    prisma = app.get(PrismaService);

    // Clean database in order
    await prisma.commitmentTerm.deleteMany();
    await prisma.animal.deleteMany();
    await prisma.petOwner.deleteMany();
    await prisma.veterinarian.deleteMany();
    await prisma.token.deleteMany();
    await prisma.user.deleteMany();
    
    // Reset sequences to start fresh
    await prisma.$executeRawUnsafe('ALTER SEQUENCE animals_id_seq RESTART WITH 1');
    await prisma.$executeRawUnsafe('ALTER SEQUENCE users_id_seq RESTART WITH 1');
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  describe('Authentication', () => {
    describe('/auth/register (POST)', () => {
      it('should register a new administrator', async () => {
        const response = await request(app.getHttpServer())
          .post('/auth/register')
          .send({
            email: 'admin@test.com',
            password: 'admin123',
            completeName: 'Admin User',
            cpf: generateValidCPF(),
            phone: '11999999999',
            role: Role.administrator,
          })
          .expect(201);

        expect(response.body).toHaveProperty('id');
        expect(response.body.email).toBe('admin@test.com');
        expect(response.body).not.toHaveProperty('hashedPassword');
        adminUserId = response.body.id;
      });

      it('should register a new veterinarian', async () => {
        const response = await request(app.getHttpServer())
          .post('/auth/register')
          .send({
            email: 'vet@test.com',
            password: 'vet123',
            completeName: 'Dr. Veterinarian',
            cpf: generateValidCPF(),
            phone: '11988888888',
            role: Role.veterinarian,
            crmv: 'CRMV-12345',
          })
          .expect(201);

        expect(response.body).toHaveProperty('id');
        expect(response.body.related).toHaveProperty('crmv', 'CRMV-12345');
        veterinarianUserId = response.body.id;
      });

      it('should register a new pet owner', async () => {
        const response = await request(app.getHttpServer())
          .post('/auth/register')
          .send({
            email: 'owner@test.com',
            password: 'owner123',
            completeName: 'Pet Owner',
            cpf: generateValidCPF(),
            phone: '11977777777',
            role: Role.petOwner,
            address: 'Rua Teste, 123',
          })
          .expect(201);

        expect(response.body).toHaveProperty('id');
        expect(response.body.related).toHaveProperty('fullAddress', 'Rua Teste, 123');
        petOwnerUserId = response.body.id;
        petOwnerId = response.body.related.id;
      });

      it('should fail with duplicate email', async () => {
        await request(app.getHttpServer())
          .post('/auth/register')
          .send({
            email: 'admin@test.com',
            password: 'test123',
            completeName: 'Another User',
            cpf: generateValidCPF(),
            phone: '11966666666',
            role: Role.administrator,
          })
          .expect(409);
      });

      it('should fail with invalid CPF', async () => {
        await request(app.getHttpServer())
          .post('/auth/register')
          .send({
            email: 'invalid@test.com',
            password: 'test123',
            completeName: 'Invalid User',
            cpf: '12345678901',
            phone: '11955555555',
            role: Role.administrator,
          })
          .expect(400);
      });
    });

    describe('/auth/login (POST)', () => {
      it('should login successfully', async () => {
        const response = await request(app.getHttpServer())
          .post('/auth/login')
          .send({
            email: 'admin@test.com',
            password: 'admin123',
          })
          .expect(200);

        expect(response.body).toHaveProperty('accessToken');
        expect(response.body).toHaveProperty('refreshToken');
        authToken = response.body.accessToken;
      });

      it('should fail with wrong password', async () => {
        await request(app.getHttpServer())
          .post('/auth/login')
          .send({
            email: 'admin@test.com',
            password: 'wrongpassword',
          })
          .expect(401);
      });

      it('should fail with non-existent user', async () => {
        await request(app.getHttpServer())
          .post('/auth/login')
          .send({
            email: 'nonexistent@test.com',
            password: 'test123',
          })
          .expect(401);
      });
    });
  });

  describe('Animals', () => {
    describe('/animals (POST)', () => {
      it('should create a new animal', async () => {
        const response = await request(app.getHttpServer())
          .post('/animals')
          .set('Authorization', `Bearer ${authToken}`)
          .send({
            name: 'Rex',
            species: 'canine',
            breed: 'Labrador',
            estimatedAge: '3',
            sizeWeight: 'Grande',
            gender: 'male',
            petOwnerId: petOwnerId,
          })
          .expect(201);

        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Rex');
        animalId = response.body.id;
      });

      it('should fail without authentication', async () => {
        await request(app.getHttpServer())
          .post('/animals')
          .send({
            name: 'Fido',
            species: 'canine',
            estimatedAge: '2',
            sizeWeight: 'Médio',
            gender: 'male',
            petOwnerId: petOwnerId,
          })
          .expect(401);
      });
    });

    describe('/animals (GET)', () => {
      it('should get all animals', async () => {
        const response = await request(app.getHttpServer())
          .get('/animals')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('name');
      });
    });

    describe('/animals/:id (GET)', () => {
      it('should get animal by id', async () => {
        const response = await request(app.getHttpServer())
          .get(`/animals/${animalId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.id).toBe(animalId);
        expect(response.body.name).toBe('Rex');
      });

      it('should return 404 for non-existent animal', async () => {
        await request(app.getHttpServer())
          .get('/animals/99999')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(404);
      });
    });

    describe('/animals/:id (PATCH)', () => {
      it('should update animal', async () => {
        const response = await request(app.getHttpServer())
          .patch(`/animals/${animalId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .send({
            name: 'Rex Updated',
            estimatedAge: '4',
          })
          .expect(200);

        expect(response.body.name).toBe('Rex Updated');
        expect(response.body.estimatedAge).toBe('4');
      });
    });
  });

  describe('Veterinarians', () => {
    describe('/veterinarian (GET)', () => {
      it('should get all veterinarians', async () => {
        const response = await request(app.getHttpServer())
          .get('/veterinarian')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
      });
    });

    describe('/veterinarian/:id (GET)', () => {
      it('should get veterinarian by userId', async () => {
        const response = await request(app.getHttpServer())
          .get(`/veterinarian/${veterinarianUserId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body).toHaveProperty('crmv', 'CRMV-12345');
        expect(response.body.user).toHaveProperty('email', 'vet@test.com');
      });
    });
  });

  describe('Pet Owners', () => {
    describe('/pet-owner (GET)', () => {
      it('should get all pet owners', async () => {
        const response = await request(app.getHttpServer())
          .get('/pet-owner')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
      });
    });

    describe('/pet-owner/:id (GET)', () => {
      it('should get pet owner by userId', async () => {
        const response = await request(app.getHttpServer())
          .get(`/pet-owner/${petOwnerUserId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body).toHaveProperty('fullAddress', 'Rua Teste, 123');
        expect(response.body.user).toHaveProperty('email', 'owner@test.com');
      });
    });
  });

  describe('Users', () => {
    describe('/users (GET)', () => {
      it('should get all users', async () => {
        const response = await request(app.getHttpServer())
          .get('/users')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThanOrEqual(3);
      });
    });

    describe('/users/:id (GET)', () => {
      it('should get user by id', async () => {
        const response = await request(app.getHttpServer())
          .get(`/users/${adminUserId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.id).toBe(adminUserId);
        expect(response.body.email).toBe('admin@test.com');
        expect(response.body).not.toHaveProperty('hashedPassword');
      });
    });
  });

  describe('/ (GET)', () => {
    it('should return Hello World', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World!');
    });
  });
});
