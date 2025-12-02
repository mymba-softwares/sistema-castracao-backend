import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { AppointmentStatus } from '@prisma/client';

@Injectable()
export class AppointmentNotificationsService {
  private readonly logger = new Logger(AppointmentNotificationsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  private translateServiceType(serviceType: string | null): string {
    const translations: Record<string, string> = {
      triage: 'Triagem',
      castrationSurgery: 'Cirurgia de Castra\u00e7\u00e3o',
      postOperative: 'P\u00f3s-operat\u00f3rio',
    };
    return serviceType ? (translations[serviceType] || serviceType) : 'Consulta';
  }

  @Cron(CronExpression.EVERY_DAY_AT_9AM)
  async sendAppointmentReminders() {
    return this.checkAndSendReminders();
  }

  async checkAndSendReminders() {
    this.logger.log('Checking for appointment reminders to send...');

    const now = new Date();
    const oneDayFromNow = new Date(now);
    oneDayFromNow.setDate(now.getDate() + 1);

    const oneWeekFromNow = new Date(now);
    oneWeekFromNow.setDate(now.getDate() + 7);

    try {
      const oneDayResult = await this.sendOneDayReminders(now, oneDayFromNow);

      const oneWeekResult = await this.sendOneWeekReminders(now, oneWeekFromNow);

      this.logger.log('Appointment reminders check completed');
      
      return {
        success: true,
        oneDayReminders: oneDayResult,
        oneWeekReminders: oneWeekResult,
      };
    } catch (error) {
      this.logger.error('Error sending appointment reminders:', error);
      throw error;
    }
  }

  private async sendOneDayReminders(now: Date, oneDayFromNow: Date) {
    const startRange = new Date(oneDayFromNow);
    startRange.setHours(0, 0, 0, 0);

    const endRange = new Date(oneDayFromNow);
    endRange.setHours(23, 59, 59, 999);

    const appointments = await this.prisma.appointment.findMany({
      where: {
        startTime: {
          gte: startRange,
          lte: endRange,
        },
        status: {
          in: [AppointmentStatus.scheduled, AppointmentStatus.confirmed],
        },
        oneDayReminderSent: false,
      },
      include: {
        animal: {
          select: {
            name: true,
            species: true,
          },
        },
        petOwner: {
          include: {
            user: {
              select: {
                id: true,
                completeName: true,
              },
            },
          },
        },
        veterinarian: {
          select: {
            user: {
              select: {
                completeName: true,
              },
            },
          },
        },
      },
    });

    this.logger.log(`Found ${appointments.length} appointments for 1-day reminders`);

    let sent = 0;
    let failed = 0;

    for (const appointment of appointments) {
      try {
        const appointmentDate = appointment.startTime.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });

        const appointmentTime = appointment.startTime.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        });

        const serviceTypeName = this.translateServiceType(appointment.serviceType);

        const message = `Lembrete: Você tem um agendamento amanhã (${appointmentDate}) às ${appointmentTime} de ${serviceTypeName}${appointment.veterinarian ? ` com Dr(a). ${appointment.veterinarian.user.completeName}` : ''}.`;

        await this.notificationsService.sendPushNotification({
          userIds: [appointment.petOwner.userId],
          title: '🔔 Agendamento Amanhã',
          body: message,
          data: {
            appointmentId: appointment.id.toString(),
            type: 'reminder_1day',
            animalName: appointment.animal.name || '',
            serviceType: appointment.serviceType || '',
          },
        });

        await this.prisma.appointment.update({
          where: { id: appointment.id },
          data: { oneDayReminderSent: true },
        });

        this.logger.log(`1-day reminder sent for appointment ${appointment.id}`);
        sent++;
      } catch (error) {
        this.logger.error(`Error sending 1-day reminder for appointment ${appointment.id}:`, error);
        failed++;
      }
    }

    return { total: appointments.length, sent, failed };
  }

  private async sendOneWeekReminders(now: Date, oneWeekFromNow: Date) {
    const startRange = new Date(oneWeekFromNow);
    startRange.setHours(0, 0, 0, 0);

    const endRange = new Date(oneWeekFromNow);
    endRange.setHours(23, 59, 59, 999);

    const appointments = await this.prisma.appointment.findMany({
      where: {
        startTime: {
          gte: startRange,
          lte: endRange,
        },
        status: {
          in: [AppointmentStatus.scheduled, AppointmentStatus.confirmed],
        },
        oneWeekReminderSent: false,
      },
      include: {
        animal: {
          select: {
            name: true,
            species: true,
          },
        },
        petOwner: {
          include: {
            user: {
              select: {
                id: true,
                completeName: true,
              },
            },
          },
        },
        veterinarian: {
          select: {
            user: {
              select: {
                completeName: true,
              },
            },
          },
        },
      },
    });

    this.logger.log(`Found ${appointments.length} appointments for 1-week reminders`);

    let sent = 0;
    let failed = 0;

    for (const appointment of appointments) {
      try {
        const appointmentDate = appointment.startTime.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });

        const appointmentTime = appointment.startTime.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        });

        const serviceTypeName = this.translateServiceType(appointment.serviceType);

        const message = `Lembrete: Você tem um agendamento na próxima semana (${appointmentDate}) às ${appointmentTime} de ${serviceTypeName}${appointment.veterinarian ? ` com Dr(a). ${appointment.veterinarian.user.completeName}` : ''}.`;

        await this.notificationsService.sendPushNotification({
          userIds: [appointment.petOwner.userId],
          title: '📅 Agendamento Próxima Semana',
          body: message,
          data: {
            appointmentId: appointment.id.toString(),
            type: 'reminder_1week',
            animalName: appointment.animal.name || '',
            serviceType: appointment.serviceType || '',
          },
        });

        await this.prisma.appointment.update({
          where: { id: appointment.id },
          data: { oneWeekReminderSent: true },
        });

        this.logger.log(`1-week reminder sent for appointment ${appointment.id}`);
        sent++;
      } catch (error) {
        this.logger.error(`Error sending 1-week reminder for appointment ${appointment.id}:`, error);
        failed++;
      }
    }

    return { total: appointments.length, sent, failed };
  }
}
