import { PrismaClient, Role, Species, Gender, AppointmentStatus, ClinicalRecordType, SurgeryType, AsaClassification, AnestheticRisk, RecoveryQuality, MedicationPhase } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database population...\n');

  console.log('👥 Ensuring base users (seed)...');

  try {
    execSync('npx ts-node prisma/seed.ts', { stdio: 'inherit' });
  } catch (e) {
    console.warn('⚠️ Could not run prisma/seed.ts via npx ts-node. If the admin user is missing, run prisma/seed.ts manually.');
  }

  console.log('👥 Creating remaining users...');

  let vetUser = await prisma.user.findUnique({ where: { email: 'vet@unipet.com' } });
  if (!vetUser) {
    vetUser = await prisma.user.create({
      data: {
        role: Role.veterinarian,
        email: 'vet@unipet.com',
        hashedPassword: await bcrypt.hash('Vet@123', 10),
        completeName: 'Dr. Carlos Mendes',
        cpf: '22222222222',
        phone: '81988888888',
      },
    });
  }

  let veterinarian = await prisma.veterinarian.findUnique({ where: { userId: vetUser.id } }).catch(() => null);
  if (!veterinarian) {
    veterinarian = await prisma.veterinarian.create({
      data: {
        userId: vetUser.id,
        crmv: 'CRMV-PE 12345',
        specialty: 'Cirurgia',
        active: true,
      },
    });
  }

  let studentUser = await prisma.user.findUnique({ where: { email: 'student@unipet.com' } });
  if (!studentUser) {
    studentUser = await prisma.user.create({
      data: {
        role: Role.student,
        email: 'student@unipet.com',
        hashedPassword: await bcrypt.hash('Student@123', 10),
        completeName: 'Ana Paula Santos',
        cpf: '33333333333',
        phone: '81977777777',
      },
    });
  }

  let student = await prisma.veterinarian.findUnique({ where: { userId: studentUser.id } }).catch(() => null);
  if (!student) {
    student = await prisma.veterinarian.create({
      data: {
        userId: studentUser.id,
        enrollment: 'EST-2025-001',
        active: true,
      },
    });
  }

  let receptionistUser = await prisma.user.findUnique({ where: { email: 'recepcao@unipet.com' } });
  if (!receptionistUser) {
    receptionistUser = await prisma.user.create({
      data: {
        role: Role.receptionist,
        email: 'recepcao@unipet.com',
        hashedPassword: await bcrypt.hash('Recepcao@123', 10),
        completeName: 'Maria Silva',
        cpf: '44444444444',
        phone: '81966666666',
      },
    });
  }

  let semasUser = await prisma.user.findUnique({ where: { email: 'semas@recife.pe.gov.br' } });
  if (!semasUser) {
    semasUser = await prisma.user.create({
      data: {
        role: Role.semas,
        email: 'semas@recife.pe.gov.br',
        hashedPassword: await bcrypt.hash('Semas@123', 10),
        completeName: 'João Oliveira',
        cpf: '55555555555',
        phone: '81955555555',
      },
    });
  }

  let owner1User = await prisma.user.findUnique({ where: { email: 'joao.tutor@email.com' } });
  if (!owner1User) {
    owner1User = await prisma.user.create({
      data: {
        role: Role.petOwner,
        email: 'joao.tutor@email.com',
        hashedPassword: await bcrypt.hash('Tutor@123', 10),
        completeName: 'João Silva',
        cpf: '66666666666',
        phone: '81944444444',
      },
    });
  }

  let owner1 = await prisma.petOwner.findUnique({ where: { userId: owner1User.id } }).catch(() => null);
  if (!owner1) {
    owner1 = await prisma.petOwner.create({
      data: {
        userId: owner1User.id,
        fullAddress: 'Rua das Flores, 123, Centro, Recife-PE',
        nis: '12345678901',
      },
    });
  }

  let owner2User = await prisma.user.findUnique({ where: { email: 'maria.tutora@email.com' } });
  if (!owner2User) {
    owner2User = await prisma.user.create({
      data: {
        role: Role.petOwner,
        email: 'maria.tutora@email.com',
        hashedPassword: await bcrypt.hash('Tutor@123', 10),
        completeName: 'Maria Santos',
        cpf: '77777777777',
        phone: '81933333333',
      },
    });
  }

  let owner2 = await prisma.petOwner.findUnique({ where: { userId: owner2User.id } }).catch(() => null);
  if (!owner2) {
    owner2 = await prisma.petOwner.create({
      data: {
        userId: owner2User.id,
        fullAddress: 'Av. Boa Viagem, 456, Boa Viagem, Recife-PE',
        nis: '98765432109',
      },
    });
  }

  console.log('✅ Users created\n');

  console.log('🐾 Creating animals...');

  const animal1 = await prisma.animal.create({
    data: {
      petOwnerId: owner1.id,
      name: 'Rex',
      species: Species.canine,
      gender: Gender.male,
      estimatedAge: '3 anos',
      sizeWeight: '15kg',
      breed: 'Poodle',
    },
  });

  const animal2 = await prisma.animal.create({
    data: {
      petOwnerId: owner1.id,
      name: 'Luna',
      species: Species.feline,
      gender: Gender.female,
      estimatedAge: '2 anos',
      sizeWeight: '4kg',
      breed: 'SRD',
    },
  });

  const animal3 = await prisma.animal.create({
    data: {
      petOwnerId: owner2.id,
      name: 'Thor',
      species: Species.canine,
      gender: Gender.male,
      estimatedAge: '5 anos',
      sizeWeight: '25kg',
      breed: 'Pastor Alemão',
    },
  });

  console.log('✅ Animals created\n');

  console.log('📋 Creating medical records...');

  let medicalRecord1 = await prisma.medicalRecord.findUnique({ where: { animalId: animal1.id } }).catch(() => null);
  if (!medicalRecord1) {
    medicalRecord1 = await prisma.medicalRecord.create({ data: { animalId: animal1.id } });
  }

  let medicalRecord2 = await prisma.medicalRecord.findUnique({ where: { animalId: animal2.id } }).catch(() => null);
  if (!medicalRecord2) {
    medicalRecord2 = await prisma.medicalRecord.create({ data: { animalId: animal2.id } });
  }

  let medicalRecord3 = await prisma.medicalRecord.findUnique({ where: { animalId: animal3.id } }).catch(() => null);
  if (!medicalRecord3) {
    medicalRecord3 = await prisma.medicalRecord.findUnique({ where: { microchipNumber: 'MC123456789' } }).catch(() => null);
  }
  if (!medicalRecord3) {
    medicalRecord3 = await prisma.medicalRecord.create({ data: { animalId: animal3.id, microchipNumber: 'MC123456789' } });
  }

  console.log('✅ Medical records created\n');
  console.log('📅 Creating appointments...');

  const appointment1 = await prisma.appointment.create({
    data: {
      animalId: animal1.id,
      petOwnerId: owner1.id,
      startTime: new Date('2025-12-01T09:00:00'),
      endTime: new Date('2025-12-01T10:00:00'),
      status: AppointmentStatus.scheduled,
      notes: 'Triagem para cirurgia de castração',
    },
  });

  const appointment2 = await prisma.appointment.create({
    data: {
      animalId: animal1.id,
      petOwnerId: owner1.id,
      startTime: new Date('2025-12-05T10:00:00'),
      endTime: new Date('2025-12-05T11:30:00'),
      status: AppointmentStatus.completed,
      notes: 'Cirurgia de castração',
    },
  });

  const appointment3 = await prisma.appointment.create({
    data: {
      animalId: animal3.id,
      petOwnerId: owner2.id,
      startTime: new Date('2025-12-02T14:00:00'),
      endTime: new Date('2025-12-02T15:00:00'),
      status: AppointmentStatus.scheduled,
      notes: 'Consulta de rotina',
    },
  });

  console.log('✅ Appointments created\n');

  console.log('🏥 Creating clinical records...');

  const clinicalRecord1 = await prisma.clinicalRecord.create({
    data: {
      medicalRecordId: medicalRecord1.id,
      appointmentId: appointment1.id,
      veterinarianId: veterinarian.id,
      type: ClinicalRecordType.triage,
      animalName: 'Rex',
      breed: 'Poodle',
      age: '3 anos',
      weight: '15kg',
      ownerName: 'João Silva',
      ownerPhone: '81944444444',
      clinicalGuidance: true,
      anamnesis: 'Animal saudável, vacinação em dia',
      rectalTemp: '38.5',
      heartRate: '120',
      respiratoryRate: '30',
      pulse: '118',
      fitForSurgery: true,
      provisionalDiagnosis: 'Animal apto para cirurgia',
      prognosis: 'Excelente',
    },
  });

  const clinicalRecord2 = await prisma.clinicalRecord.create({
    data: {
      medicalRecordId: medicalRecord3.id,
      appointmentId: appointment3.id,
      veterinarianId: veterinarian.id,
      type: ClinicalRecordType.followUp,
      animalName: 'Thor',
      breed: 'Pastor Alemão',
      age: '5 anos',
      weight: '25kg',
      observations: 'Animal em boas condições pós-operatórias',
    },
  });

  console.log('✅ Clinical records created\n');
  console.log('⚕️ Creating surgical records...');

  const surgicalRecord1 = await prisma.surgicalRecord.create({
    data: {
      medicalRecordId: medicalRecord1.id,
      appointmentId: appointment2.id,
      recordNumber: 'SR-2025-001',
      animalName: 'Rex',
      species: 'Canino',
      breed: 'Poodle',
      weight: '15kg',
      age: '3 anos',
      gender: 'Macho',
      ownerName: 'João Silva',
      ownerPhone: '81944444444',
      ownerAddress: 'Rua das Flores, 123, Centro, Recife-PE',
      surgeon: 'Dr. Carlos Mendes',
      firstAssistant: 'Ana Paula Santos',
      anesthetist: 'Dr. Pedro Souza',
      duration: '45 minutos',
      surgeryStart: new Date('2025-12-05T10:00:00'),
      surgeryEnd: new Date('2025-12-05T10:45:00'),
      preoperativeDiagnosis: 'Animal reprodutivamente ativo',
      postoperativeDiagnosis: 'Animal castrado com sucesso',
      proposedOperation: 'Orquiectomia',
      performedOperation: 'Orquiectomia bilateral',
      materialsUsed: 'Bisturi, pinça hemostática, fio de sutura nylon 3-0, gaze estéril, luvas cirúrgicas',
      operationDescription: 'Realizada incisão pré-escrotal. Exposição dos testículos. Ligadura dupla do cordão espermático com fio nylon 3-0. Remoção bilateral dos testículos. Hemostasia verificada. Sutura do subcutâneo com pontos simples separados. Sutura de pele com pontos simples separados. Procedimento sem intercorrências.',
      postoperativeControl: 'Retorno em 10 dias para retirada de pontos. Uso de colar elisabetano por 10 dias. Repouso absoluto por 7 dias. Evitar esforço físico por 15 dias. Analgésico (Meloxicam 0,2mg/kg SID por 5 dias). Antibiótico (Cefalexina 30mg/kg BID por 7 dias).',
      additionalObservations: 'Procedimento transcorreu sem complicações. Animal acordou bem da anestesia.',
    },
  });

  console.log('✅ Surgical records created\n');
  console.log('💉 Creating anesthetic records...');

  const anestheticRecord1 = await prisma.anestheticRecord.create({
    data: {
      medicalRecordId: medicalRecord1.id,
      appointmentId: appointment2.id,
      animalName: 'Rex',
      species: 'Canino',
      breed: 'Poodle',
      weight: '15kg',
      age: '3 anos',
      procedure: 'Orquiectomia',
      anesthetistId: veterinarian.id,
      surgeonId: veterinarian.id,
      asaClassification: AsaClassification.ASA_I,
      anestheticRisk: AnestheticRisk.mild,
      preHeartRate: '120',
      preRespiratoryRate: '30',
      preMucousMembranes: 'Róseas',
      preCapillaryRefill: '< 2s',
      preTemperature: '38.5',
      comorbidities: 'Nenhuma',
      allergies: 'Nenhuma',
      intubation: true,
      tubeNumber: '7.5',
      circuit: 'Baraka',
      maintenanceInhalation: true,
      maintenanceTIVA: false,
      extubationTime: new Date('2025-12-05T10:50:00'),
      recoveryQuality: RecoveryQuality.rapidSmooth,
      postoperativeMedication: 'Meloxicam 0,2mg/kg SID, Tramadol 3mg/kg TID',
      generalObservations: 'Anestesia transcorreu sem intercorrências. Recuperação tranquila.',
    },
  });

  const medicationsData = [
    {
      anestheticRecordId: anestheticRecord1.id,
      phase: MedicationPhase.MPA,
      drugName: 'Acepromazina',
      dosage: '0,05mg/kg',
      route: 'IM',
      administrationTime: '09:30',
    },
    {
      anestheticRecordId: anestheticRecord1.id,
      phase: MedicationPhase.MPA,
      drugName: 'Morfina',
      dosage: '0,5mg/kg',
      route: 'IM',
      administrationTime: '09:30',
    },
    {
      anestheticRecordId: anestheticRecord1.id,
      phase: MedicationPhase.INDUCTION,
      drugName: 'Propofol',
      dosage: '4mg/kg',
      route: 'IV',
      administrationTime: '10:00',
    },
  ];

  for (const med of medicationsData) {
    await prisma.anestheticMedication.create({ data: med }).catch((e) => {
      console.warn('⚠️ Could not create medication entry:', e.message || e);
    });
  }

  const monitoringData = [
    {
      anestheticRecordId: anestheticRecord1.id,
      measurementTime: '10:00',
      agent: 'Isoflurano 1,5%',
      heartRate: '110',
      respiratoryRate: '20',
      spo2: '98',
      etco2: '38',
      systolicPressure: '120',
      diastolicPressure: '80',
      temperature: '37.8',
    },
    {
      anestheticRecordId: anestheticRecord1.id,
      measurementTime: '10:15',
      agent: 'Isoflurano 1,5%',
      heartRate: '105',
      respiratoryRate: '18',
      spo2: '99',
      etco2: '36',
      systolicPressure: '115',
      diastolicPressure: '75',
      temperature: '37.5',
    },
    {
      anestheticRecordId: anestheticRecord1.id,
      measurementTime: '10:30',
      agent: 'Isoflurano 1,2%',
      heartRate: '108',
      respiratoryRate: '20',
      spo2: '99',
      etco2: '37',
      systolicPressure: '118',
      diastolicPressure: '78',
      temperature: '37.3',
    },
    {
      anestheticRecordId: anestheticRecord1.id,
      measurementTime: '10:45',
      agent: 'Isoflurano 0,8%',
      heartRate: '115',
      respiratoryRate: '22',
      spo2: '98',
      etco2: '39',
      systolicPressure: '122',
      diastolicPressure: '82',
      temperature: '37.2',
    },
  ];

  for (const m of monitoringData) {
    await prisma.anestheticMonitoring.create({ data: m }).catch((e) => {
      console.warn('⚠️ Could not create monitoring entry:', e.message || e);
    });
  }

  console.log('✅ Anesthetic records created\n');

  console.log('📊 POPULATION SUMMARY:');
  console.log('='.repeat(50));
  console.log(`👥 Users: 7 (1 admin, 1 vet, 1 student, 1 receptionist, 1 semas, 2 pet owners)`);
  console.log(`🐾 Animals: 3 (2 dogs, 1 cat)`);
  console.log(`📋 Medical Records: 3`);
  console.log(`📅 Appointments: 3`);
  console.log(`🏥 Clinical Records: 2 (1 triage, 1 follow-up)`);
  console.log(`⚕️ Surgical Records: 1`);
  console.log(`💉 Anesthetic Records: 1 (with 3 medications and 4 monitoring entries)`);
  console.log('='.repeat(50));
  console.log('\n✅ Database populated successfully!\n');

  console.log('🔑 CREDENTIALS:');
  console.log('='.repeat(50));
  console.log('Administrator (created by prisma/seed.ts):');
  console.log('  Email: admin@admin.com');
  console.log('  Password: admin123\n');
  console.log('Veterinarian:');
  console.log('  Email: vet@unipet.com');
  console.log('  Password: Vet@123\n');
  console.log('Student:');
  console.log('  Email: student@unipet.com');
  console.log('  Password: Student@123\n');
  console.log('Receptionist:');
  console.log('  Email: recepcao@unipet.com');
  console.log('  Password: Recepcao@123\n');
  console.log('SEMAS:');
  console.log('  Email: semas@recife.pe.gov.br');
  console.log('  Password: Semas@123\n');
  console.log('Pet Owner 1:');
  console.log('  Email: joao.tutor@email.com');
  console.log('  Password: Tutor@123\n');
  console.log('Pet Owner 2:');
  console.log('  Email: maria.tutora@email.com');
  console.log('  Password: Tutor@123');
  console.log('='.repeat(50));
}

main()
  .catch((e) => {
    console.error('❌ Error populating database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
