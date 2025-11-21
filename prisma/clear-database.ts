import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clearDatabase() {
  console.log('🗑️  Iniciando limpeza do banco de dados...\n');

  try {
    // Deletar na ordem correta devido às foreign keys
    console.log('Deletando ClinicalRecords...');
    const clinicalRecords = await prisma.clinicalRecord.deleteMany();
    console.log(`✓ ${clinicalRecords.count} registros deletados\n`);

    console.log('Deletando MedicalRecords...');
    const medicalRecords = await prisma.medicalRecord.deleteMany();
    console.log(`✓ ${medicalRecords.count} registros deletados\n`);

    console.log('Deletando Appointments...');
    const appointments = await prisma.appointment.deleteMany();
    console.log(`✓ ${appointments.count} registros deletados\n`);

    console.log('Deletando Animals...');
    const animals = await prisma.animal.deleteMany();
    console.log(`✓ ${animals.count} registros deletados\n`);

    console.log('Deletando PetOwners...');
    const petOwners = await prisma.petOwner.deleteMany();
    console.log(`✓ ${petOwners.count} registros deletados\n`);

    console.log('Deletando Veterinarians...');
    const veterinarians = await prisma.veterinarian.deleteMany();
    console.log(`✓ ${veterinarians.count} registros deletados\n`);

    console.log('Deletando Tokens...');
    const tokens = await prisma.token.deleteMany();
    console.log(`✓ ${tokens.count} registros deletados\n`);

    console.log('Deletando Users...');
    const users = await prisma.user.deleteMany();
    console.log(`✓ ${users.count} registros deletados\n`);

    console.log('✅ Banco de dados limpo com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao limpar banco de dados:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

clearDatabase();
