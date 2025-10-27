-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('administrator', 'semas', 'veterinarian', 'receptionist', 'petOwner', 'student');

-- CreateEnum
CREATE TYPE "public"."Species" AS ENUM ('canine', 'feline');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "public"."ServiceType" AS ENUM ('triage', 'castrationSurgery', 'postOperative');

-- CreateEnum
CREATE TYPE "public"."AppointmentStatus" AS ENUM ('scheduled', 'confirmed', 'completed', 'canceled', 'absent');

-- CreateEnum
CREATE TYPE "public"."ClinicalRecordType" AS ENUM ('triage', 'surgery', 'followUp');

-- CreateEnum
CREATE TYPE "public"."SurgeryType" AS ENUM ('orchiectomy', 'ovariohysterectomy');

-- CreateEnum
CREATE TYPE "public"."NotificationChannel" AS ENUM ('push', 'email', 'whatsapp');

-- CreateEnum
CREATE TYPE "public"."Target" AS ENUM ('all', 'petOwners', 'semas', 'veterinarians', 'receptionists');

-- CreateEnum
CREATE TYPE "public"."LogType" AS ENUM ('info', 'warning', 'error', 'security', 'audit');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "role" "public"."Role" NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "completeName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "recoveryMode" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tokens" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "jwt" TEXT,
    "refreshJwt" TEXT,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."petOwners" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullAddress" TEXT NOT NULL,

    CONSTRAINT "petOwners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."commitmentTerms" (
    "id" SERIAL NOT NULL,
    "petOwnerId" INTEGER NOT NULL,
    "signatureDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentUrl" TEXT,

    CONSTRAINT "commitmentTerms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."veterinarians" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "crmv" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "veterinarians_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."animals" (
    "id" SERIAL NOT NULL,
    "petOwnerId" INTEGER NOT NULL,
    "name" TEXT,
    "species" "public"."Species" NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "estimatedAge" TEXT NOT NULL,
    "sizeWeight" TEXT NOT NULL,
    "breed" TEXT,
    "microchipNumber" TEXT,

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."appointments" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "petOwnerId" INTEGER NOT NULL,
    "serviceType" "public"."ServiceType",
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "public"."AppointmentStatus" NOT NULL DEFAULT 'scheduled',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."medicalRecords" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "microchipNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medicalRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."clinicalRecords" (
    "id" SERIAL NOT NULL,
    "medicalRecordId" INTEGER NOT NULL,
    "appointmentId" INTEGER,
    "veterinarianId" INTEGER NOT NULL,
    "type" "public"."ClinicalRecordType" NOT NULL,
    "treatmentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fitForSurgery" BOOLEAN,
    "surgeryType" "public"."SurgeryType",
    "observations" TEXT,
    "instructions" TEXT,

    CONSTRAINT "clinicalRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."userDevices" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fcmToken" TEXT NOT NULL,
    "deviceInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActiveAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userDevices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notifications" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "channel" "public"."NotificationChannel" NOT NULL DEFAULT 'push',
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."bulletins" (
    "id" SERIAL NOT NULL,
    "createdByUserId" INTEGER NOT NULL,
    "title" TEXT,
    "message" TEXT NOT NULL,
    "targetRoles" "public"."Target" NOT NULL DEFAULT 'all',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bulletins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."systemLogs" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "targetTable" TEXT NOT NULL,
    "targetId" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "description" TEXT,
    "type" "public"."LogType" NOT NULL,
    "originIp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "systemLogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "public"."users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_userId_key" ON "public"."tokens"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_jwt_key" ON "public"."tokens"("jwt");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_refreshJwt_key" ON "public"."tokens"("refreshJwt");

-- CreateIndex
CREATE UNIQUE INDEX "petOwners_userId_key" ON "public"."petOwners"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "veterinarians_userId_key" ON "public"."veterinarians"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "veterinarians_crmv_key" ON "public"."veterinarians"("crmv");

-- CreateIndex
CREATE UNIQUE INDEX "animals_microchipNumber_key" ON "public"."animals"("microchipNumber");

-- CreateIndex
CREATE UNIQUE INDEX "medicalRecords_animalId_key" ON "public"."medicalRecords"("animalId");

-- CreateIndex
CREATE UNIQUE INDEX "medicalRecords_microchipNumber_key" ON "public"."medicalRecords"("microchipNumber");

-- AddForeignKey
ALTER TABLE "public"."tokens" ADD CONSTRAINT "tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."petOwners" ADD CONSTRAINT "petOwners_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."commitmentTerms" ADD CONSTRAINT "commitmentTerms_petOwnerId_fkey" FOREIGN KEY ("petOwnerId") REFERENCES "public"."petOwners"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."veterinarians" ADD CONSTRAINT "veterinarians_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."animals" ADD CONSTRAINT "animals_petOwnerId_fkey" FOREIGN KEY ("petOwnerId") REFERENCES "public"."petOwners"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "public"."animals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_petOwnerId_fkey" FOREIGN KEY ("petOwnerId") REFERENCES "public"."petOwners"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."medicalRecords" ADD CONSTRAINT "medicalRecords_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "public"."animals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."clinicalRecords" ADD CONSTRAINT "clinicalRecords_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "public"."medicalRecords"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."clinicalRecords" ADD CONSTRAINT "clinicalRecords_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "public"."appointments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."clinicalRecords" ADD CONSTRAINT "clinicalRecords_veterinarianId_fkey" FOREIGN KEY ("veterinarianId") REFERENCES "public"."veterinarians"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."userDevices" ADD CONSTRAINT "userDevices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bulletins" ADD CONSTRAINT "bulletins_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."systemLogs" ADD CONSTRAINT "systemLogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
