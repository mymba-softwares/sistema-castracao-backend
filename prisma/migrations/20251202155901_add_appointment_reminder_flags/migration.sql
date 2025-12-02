-- AlterTable
ALTER TABLE "appointments" ADD COLUMN "oneWeekReminderSent" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "appointments" ADD COLUMN "oneDayReminderSent" BOOLEAN NOT NULL DEFAULT false;
