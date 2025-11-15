import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@admin.com';
  const password = 'admin123';
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const existingAdmin = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email,
        hashedPassword,
        completeName: 'Administrador do Sistema',
        role: Role.administrator,
        cpf: '00000000000',
        phone: '0000000000',
      },
    });
    console.log('Usuário admin criado com sucesso!');
  } else {
    console.log('ℹUsuário admin já existe.');
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
