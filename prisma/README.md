# Schema do Banco de Dados - Sistema de Castração Animal

## Visão Geral

Este schema implementa o banco de dados para o **Sistema de Gestão de Castração Animal (Mymba Software)** da UFRPE, seguindo os requisitos funcionais do projeto.

## Estrutura do Banco de Dados

### 📋 Enums

- **Role**: Define os tipos de usuários do sistema (administrator, semas, veterinarian, receptionist, petOwner, student)
- **Species**: Espécies de animais (canine, feline)
- **Gender**: Gênero do animal (male, female)
- **ServiceType**: Tipos de serviços (triage, castrationSurgery, postOperative)
- **AppointmentStatus**: Status dos agendamentos (scheduled, confirmed, completed, canceled, absent)
- **ClinicalRecordType**: Tipos de registros clínicos (triage, surgery, followUp)
- **SurgeryType**: Tipos de cirurgia (orchiectomy, ovariohysterectomy)
- **NotificationChannel**: Canais de notificação (push, email, whatsapp)
- **Target**: Alvos de comunicação (all, petOwners, semas, veterinarians, receptionists)
- **LogType**: Tipos de log (info, warning, error, security, audit)

### 👥 Autenticação e Usuários

#### User (users)
Tabela central de autenticação para todos os atores do sistema.
- Armazena dados básicos: email, senha hash, CPF (usado para login), telefone
- Campo `role` define as permissões do usuário
- Relacionamento 1:1 com especializações (PetOwner, Veterinarian)

#### Token (tokens)
Armazena tokens JWT para autenticação e refresh tokens.

### 🎭 Especializações de Usuários

#### PetOwner (petOwners)
Dados específicos dos tutores de animais.
- Contém endereço completo (usado para geração de heatmap - RF08)
- Relacionamento 1:1 com User

#### CommitmentTerm (commitmentTerms)
Registro dos termos de compromisso assinados pelos tutores.
- Armazena data de assinatura e URL do documento

#### Veterinarian (veterinarians)
Dados específicos dos veterinários.
- Contém CRMV (Conselho Regional de Medicina Veterinária)
- Flag `active` para controlar veterinários ativos

### 🐾 Entidades Centrais

#### Animal (animals)
Os "pacientes" do sistema.
- Dados básicos: nome, espécie, gênero, idade estimada, tamanho/peso, raça
- Número de microchip (único, preenchido após a cirurgia)
- Relacionado ao tutor (PetOwner)

### 📅 Lógica de Agendamentos (RF02)

#### Appointment (appointments)
Representa os agendamentos de serviços.
- Campos de data/hora: `startTime` e `endTime`
- Tipo de serviço: triagem, cirurgia ou pós-operatório
- Status do agendamento
- Notas do tutor ao agendar
- **Validação necessária**: Backend deve validar disponibilidade de horário e limite de vagas

### 🏥 Lógica Clínica (RF03)

#### MedicalRecord (medicalRecords)
Prontuário único de cada animal no projeto.
- Relacionamento 1:1 com Animal
- Armazena número de microchip registrado após cirurgia

#### ClinicalRecord (clinicalRecords)
Cada evento médico (triagem, cirurgia, acompanhamento) gera um registro.
- **Campos de triagem**: `fitForSurgery` (apto para cirurgia)
- **Campos de cirurgia**: `surgeryType` (tipo de procedimento)
- **Campos gerais**: observações e instruções (prescrições - RF06.3)
- Relacionado ao veterinário que realizou o procedimento

### 🔔 Notificações e Logs

#### UserDevice (userDevices)
Tokens de dispositivos para notificações push.
- Armazena FCM tokens e informações do dispositivo

#### Notification (notifications)
Log de notificações enviadas aos usuários.
- Suporta múltiplos canais: push, email, WhatsApp
- Campo `metadata` (JSON) para dados adicionais
- Usado para lembretes, confirmações e instruções (RF06, RF09)

#### Bulletin (bulletins)
Comunicações gerais da administração.
- Pode ser direcionado para grupos específicos de usuários

#### SystemLog (systemLogs)
Logs de auditoria do sistema.
- **Essencial para LGPD** (Lei Geral de Proteção de Dados)
- Rastreia quem fez o quê, quando e de onde
- Tipos de log: info, warning, error, security, audit

## 🔒 Políticas de Deleção

- **CASCADE**: Quando um registro pai é deletado, os registros filhos também são deletados
  - User → Token, PetOwner, Veterinarian
  - Animal → Appointments, MedicalRecord
  
- **SET NULL**: Quando um registro pai é deletado, a referência é definida como NULL
  - Appointment → ClinicalRecord (preserva histórico mesmo se agendamento for deletado)
  - User → SystemLog (preserva logs mesmo se usuário for deletado)

- **RESTRICT**: Previne deleção se existirem registros relacionados
  - Veterinarian → ClinicalRecord (não permite deletar veterinário com registros clínicos)

## 🚀 Comandos Úteis

### Criar nova migration
```bash
npx prisma migrate dev --name nome_da_migration
```

### Aplicar migrations em produção
```bash
npx prisma migrate deploy
```

### Gerar Prisma Client
```bash
npx prisma generate
```

### Visualizar banco de dados (Prisma Studio)
```bash
npx prisma studio
```

### Resetar banco de dados (desenvolvimento)
```bash
npx prisma migrate reset
```

### Ver status das migrations
```bash
npx prisma migrate status
```

## 📝 Configuração

Certifique-se de configurar a variável de ambiente `DATABASE_URL` no arquivo `.env`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
```

## 🔍 Índices e Constraints

O schema inclui automaticamente:
- **Primary Keys**: Em todas as tabelas
- **Unique Constraints**: email, cpf, microchipNumber, etc.
- **Foreign Keys**: Todas as relações entre tabelas
- **Indexes**: Criados automaticamente para chaves únicas e estrangeiras

## 📚 Referências dos Requisitos Funcionais

- **RF02**: Lógica de agendamentos (Appointment)
- **RF03**: Prontuário médico (MedicalRecord, ClinicalRecord)
- **RF06**: Instruções pós-cirúrgicas (ClinicalRecord.instructions)
- **RF08**: Geração de heatmap (PetOwner.fullAddress)
- **RF09**: Notificações (Notification, UserDevice)
- **LGPD**: Auditoria (SystemLog)
