# 🐾 Sistema de Gestão de Castração - Backend

API REST desenvolvida com NestJS para gerenciar o sistema de castração de animais do Projeto Mymba.

## 📋 Descrição

Sistema backend completo para gerenciamento de castrações de animais, incluindo:

- 🔐 Autenticação JWT com múltiplos níveis de acesso
- 👥 Gestão de usuários (administradores, veterinários, tutores, etc.)
- 🐕 Cadastro e gerenciamento de animais
- 📅 Agendamento de consultas e cirurgias
# 🐾 Sistema de Gestão de Castração - Backend

API REST construída com NestJS para gerenciar o sistema de castração de animais do Projeto Mymba.

## 📋 Descrição

Backend completo para gerenciar castrações de animais, incluindo:

- 🔐 Autenticação JWT com múltiplos níveis de acesso
- 👥 Gestão de usuários (administradores, veterinários, tutores, etc.)
- 🐕 Cadastro e gerenciamento de animais
- 📅 Agendamento de consultas e cirurgias
- 📊 Prontuários médicos eletrônicos (fichas clínicas, cirúrgicas e anestésicas)
- 🔔 Sistema de notificações
- 📈 Logs de auditoria para conformidade com a LGPD

## 🚀 Tecnologias

- **Framework:** NestJS
- **Banco de dados:** PostgreSQL + Prisma ORM
- **Autenticação:** JWT (JSON Web Tokens)
- **Documentação:** Swagger / OpenAPI
- **Deploy:** Render.com

## 🌐 URLs (exemplos)

- **Produção:** https://sistema-castracao-backend.onrender.com
- **Docs (Swagger):** https://sistema-castracao-backend.onrender.com/api
- **Frontend:** https://sistema-castracao-frontend.vercel.app

## Configuração do projeto

Instale dependências:

```bash
npm install
```

## Configurar variáveis de ambiente

1. Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

2. Edite o arquivo `.env` com as credenciais do banco e as chaves JWT.

3. Aplique as migrations do Prisma:

```bash
npx prisma migrate dev
```

## 🧪 População do banco (seeds e utilitários)

Existem scripts úteis na pasta `prisma/` para popular o banco com dados de exemplo e para garantir que todos os animais possuam prontuário médico.

- **Script principal:** `prisma/populate.ts` (popula um conjunto completo de dados para desenvolvimento/testes)
- **Helper:** `prisma/check-and-create-medical-records.ts` (verifica e cria prontuários faltantes)
- **Seed leve (admin):** `prisma/seed.ts` (garante que o usuário administrador exista)

Como executar (PowerShell / Windows):

```powershell
# 1) Garanta que o .env está configurado e as migrations aplicadas
npx prisma migrate dev

# 2) Rode o seed leve (cria usuário admin se não existir)
npx ts-node prisma/seed.ts

# 3) Rode o script de população completo (também tenta executar o seed)
npx ts-node prisma/populate.ts

# 4) Se quiser apenas verificar/criar prontuários faltantes em um banco existente
npx ts-node prisma/check-and-create-medical-records.ts
```

Observações:

- `npx ts-node ...` executa o script TypeScript sem precisar instalar globalmente o `ts-node`. Se preferir, instale como dependência de desenvolvimento: `npm i -D ts-node typescript`.
- O `prisma/populate.ts` chama o `prisma/seed.ts` para garantir o admin e depois cria usuários, tutores, animais, prontuários, agendamentos e exemplos de fichas clínicas, cirúrgicas e anestésicas (incluindo medicamentos e monitoramento).

Resumo do que o `prisma/populate.ts` cria:

- **Usuários:** 7 (1 admin via `prisma/seed.ts`, 1 veterinário, 1 estudante, 1 recepcionista, 1 SEMAS, 2 tutores)
- **Animais:** 3
- **Prontuários médicos:** 3
- **Agendamentos:** 3
- **Fichas clínicas:** 2
- **Fichas cirúrgicas:** 1
- **Fichas anestésicas:** 1 (com medicamentos e registros de monitoramento)

Credenciais de exemplo (impressas pelo script):

- Administrador (criado por `prisma/seed.ts`): `admin@admin.com` / `admin123`
- Veterinário: `vet@unipet.com` / `Vet@123`
- Estudante: `student@unipet.com` / `Student@123`
- Recepção: `recepcao@unipet.com` / `Recepcao@123`
- SEMAS: `semas@recife.pe.gov.br` / `Semas@123`
- Tutor 1: `joao.tutor@email.com` / `Tutor@123`
- Tutor 2: `maria.tutora@email.com` / `Tutor@123`

O script `prisma/check-and-create-medical-records.ts` é útil quando você já tem dados e precisa garantir que nenhum animal fique sem prontuário. Se usar `prisma/populate.ts` em um banco limpo, o helper não é necessário.

## Compilar e executar a aplicação

```bash
# desenvolvimento
npm run start

# modo observação (watch)
npm run start:dev

# modo produção
npm run start:prod
```

## 📚 Documentação

- **[DEPLOY.md](./DEPLOY.md)** - Guia de deploy (Render)
- **[FRONTEND_INTEGRATION.md](./FRONTEND_INTEGRATION.md)** - Integração com frontend
- **Docs Swagger:** `http://localhost:3000/api` (após iniciar o servidor)

## Executar testes

```bash
# testes unitários
npm run test

# testes e2e
npm run test:e2e

# cobertura de testes
npm run test:cov
```
