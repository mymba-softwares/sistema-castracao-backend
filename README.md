# 🐾 Sistema de Gestão de Castração - Backend

API REST desenvolvida com NestJS para gerenciar o sistema de castração de animais do Projeto Mymba.

## 📋 Descrição

Sistema backend completo para gerenciamento de castrações de animais, incluindo:

- 🔐 Autenticação JWT com múltiplos níveis de acesso
- 👥 Gestão de usuários (administradores, veterinários, tutores, etc.)
- 🐕 Cadastro e gerenciamento de animais
- 📅 Agendamento de consultas e cirurgias
- 📊 Prontuários médicos eletrônicos
- 🔔 Sistema de notificações
- 📈 Logs de auditoria para conformidade LGPD

## 🚀 Tecnologias

- **Framework:** NestJS
- **Database:** PostgreSQL + Prisma ORM
- **Autenticação:** JWT (JSON Web Tokens)
- **Documentação:** Swagger/OpenAPI
- **Deploy:** Render.com

## 🌐 URLs

- **Produção:** https://sistema-castracao-backend.onrender.com
- **API Docs (Swagger):** https://sistema-castracao-backend.onrender.com/api
- **Frontend:** https://sistema-castracao-frontend.vercel.app

## Project setup

```bash
npm install
```

## Configure Environment

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Edit `.env` with your database credentials and JWT secrets

3. Run Prisma migrations:
```bash
npx prisma migrate dev
```

## Compile and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## 📚 Documentation

- **[DEPLOY.md](./DEPLOY.md)** - Guia completo de deploy no Render
- **[FRONTEND_INTEGRATION.md](./FRONTEND_INTEGRATION.md)** - Instruções para integrar com o frontend
- **[Swagger Docs](http://localhost:3000/api)** - Documentação interativa da API (após iniciar o servidor)

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
