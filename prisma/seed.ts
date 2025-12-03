import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admins = [
    {
      email: 'admin@admin.com',
      password: 'admin123',
      completeName: 'Administrador do Sistema',
      cpf: '00000000000',
      phone: '0000000000',
    },
    {
      email: 'admin2@admin.com',
      password: 'admin123',
      completeName: 'Administrador 2',
      cpf: '00000000001',
      phone: '0000000001',
    },
    {
      email: 'admin3@admin.com',
      password: 'admin123',
      completeName: 'Administrador 3',
      cpf: '00000000002',
      phone: '0000000002',
    },
    {
      email: 'admin4@admin.com',
      password: 'admin123',
      completeName: 'Administrador 4',
      cpf: '00000000003',
      phone: '0000000003',
    },
  ];

  const saltRounds = 10;

  for (const admin of admins) {
    const existingAdmin = await prisma.user.findUnique({
      where: { email: admin.email },
    });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(admin.password, saltRounds);
      await prisma.user.create({
        data: {
          email: admin.email,
          hashedPassword,
          completeName: admin.completeName,
          role: Role.administrator,
          cpf: admin.cpf,
          phone: admin.phone,
        },
      });
      console.log(`✅ Usuário ${admin.email} criado com sucesso!`);
    } else {
      console.log(`ℹ️  Usuário ${admin.email} já existe.`);
    }
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
