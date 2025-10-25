# 🗄️ Diagrama de Entidade-Relacionamento (ER)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          SISTEMA DE CASTRAÇÃO ANIMAL                             │
│                           (Projeto Mymba - UFRPE)                               │
└─────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────────┐
│                              AUTENTICAÇÃO E USUÁRIOS                              │
└──────────────────────────────────────────────────────────────────────────────────┘

    ┌─────────────────┐
    │     users       │ ◄────┐
    ├─────────────────┤      │
    │ id (PK)         │      │
    │ role            │      │ 1:1
    │ email           │      │
    │ hashedPassword  │      │
    │ completeName    │      ├──► ┌─────────────────┐
    │ cpf             │      │    │    tokens       │
    │ phone           │      │    ├─────────────────┤
    │ createdAt       │      │    │ id (PK)         │
    │ updatedAt       │      │    │ userId (FK)     │
    │ recoveryMode    │      │    │ jwt             │
    └─────────────────┘      │    │ refreshJwt      │
            │                │    └─────────────────┘
            ├────────────────┘
            │
            ├──► 1:1 ┌─────────────────┐
            │        │   petOwners     │
            │        ├─────────────────┤
            │        │ id (PK)         │
            │        │ userId (FK)     │
            │        │ fullAddress     │──┐
            │        └─────────────────┘  │
            │                             │
            │                             ├──► 1:N ┌─────────────────┐
            │                             │        │ commitmentTerms │
            │                             │        ├─────────────────┤
            │                             │        │ id (PK)         │
            │                             │        │ petOwnerId (FK) │
            │                             │        │ signatureDate   │
            │                             │        │ documentUrl     │
            │                             │        └─────────────────┘
            │                             │
            └──► 1:1 ┌─────────────────┐ │
                     │ veterinarians   │ │
                     ├─────────────────┤ │
                     │ id (PK)         │ │
                     │ userId (FK)     │ │
                     │ crmv            │ │
                     │ active          │ │
                     └─────────────────┘ │
                                         │
┌────────────────────────────────────────┼────────────────────────────────────────┐
│                        ANIMAIS E PRONTUÁRIOS                                    │
└────────────────────────────────────────┼────────────────────────────────────────┘
                                         │
                     ┌─────────────────┐ │
                     │    animals      │◄┘
                     ├─────────────────┤
                     │ id (PK)         │
                     │ petOwnerId (FK) │──────┐
                     │ name            │      │
                     │ species         │      │ 1:N
                     │ gender          │      │
                     │ estimatedAge    │      │
                     │ sizeWeight      │      │
                     │ breed           │      │
                     │ microchipNumber │      │
                     └─────────────────┘      │
                             │                │
                             │ 1:1            │
                             ▼                │
                     ┌─────────────────┐      │
                     │ medicalRecords  │      │
                     ├─────────────────┤      │
                     │ id (PK)         │      │
                     │ animalId (FK)   │      │
                     │ microchipNumber │      │
                     │ createdAt       │      │
                     │ updatedAt       │      │
                     └─────────────────┘      │
                             │                │
                             │ 1:N            │
                             ▼                │
                     ┌─────────────────┐      │
                     │ clinicalRecords │      │
                     ├─────────────────┤      │
                     │ id (PK)         │      │
                     │ medicalRecordId │      │
                     │ appointmentId   │◄─┐   │
                     │ veterinarianId  │  │   │
                     │ type            │  │   │
                     │ treatmentDate   │  │   │
                     │ fitForSurgery   │  │   │
                     │ surgeryType     │  │   │
                     │ observations    │  │   │
                     │ instructions    │  │   │
                     └─────────────────┘  │   │
                                          │   │
┌─────────────────────────────────────────┼───┼────────────────────────────────────┐
│                            AGENDAMENTOS                                          │
└─────────────────────────────────────────┼───┼────────────────────────────────────┘
                                          │   │
                     ┌─────────────────┐  │   │
                     │  appointments   │──┼───┘
                     ├─────────────────┤  │
                     │ id (PK)         │──┘
                     │ animalId (FK)   │─────────┐
                     │ petOwnerId (FK) │         │
                     │ serviceType     │         │
                     │ startTime       │         │
                     │ endTime         │         │
                     │ status          │         │
                     │ createdAt       │         │
                     │ updatedAt       │         │
                     │ notes           │         │
                     └─────────────────┘         │
                                                 │
┌────────────────────────────────────────────────┼────────────────────────────────┐
│                       NOTIFICAÇÕES E LOGS                                       │
└────────────────────────────────────────────────┼────────────────────────────────┘
                                                 │
         ┌─────────────────┐                    │
         │  userDevices    │                    │
         ├─────────────────┤                    │
         │ id (PK)         │                    │
         │ userId (FK)     │──┐                 │
         │ fcmToken        │  │                 │
         │ deviceInfo      │  │                 │
         │ createdAt       │  │                 │
         │ lastActiveAt    │  │                 │
         └─────────────────┘  │                 │
                              │ N:1             │
         ┌─────────────────┐  │                 │
         │ notifications   │◄─┼─────────────────┘
         ├─────────────────┤  │
         │ id (PK)         │  │
         │ userId (FK)     │──┘
         │ title           │
         │ message         │
         │ read            │
         │ channel         │
         │ metadata        │
         │ createdAt       │
         └─────────────────┘

         ┌─────────────────┐
         │   bulletins     │
         ├─────────────────┤
         │ id (PK)         │
         │ createdByUserId │──────┐
         │ title           │      │ N:1
         │ message         │      │
         │ targetRoles     │      │
         │ createdAt       │      │
         └─────────────────┘      │
                                  │
         ┌─────────────────┐      │
         │   systemLogs    │      │
         ├─────────────────┤      │
         │ id (PK)         │      │
         │ userId (FK)     │──────┘
         │ targetTable     │
         │ targetId        │
         │ action          │
         │ description     │
         │ type            │
         │ originIp        │
         │ createdAt       │
         └─────────────────┘

┌──────────────────────────────────────────────────────────────────────────────────┐
│                                    ENUMS                                         │
└──────────────────────────────────────────────────────────────────────────────────┘

Role                    Species         Gender          ServiceType
├─ administrator        ├─ canine       ├─ male         ├─ triage
├─ semas                └─ feline       └─ female       ├─ castrationSurgery
├─ veterinarian                                         └─ postOperative
├─ receptionist         
├─ petOwner             AppointmentStatus               ClinicalRecordType
└─ student              ├─ scheduled                    ├─ triage
                        ├─ confirmed                    ├─ surgery
                        ├─ completed                    └─ followUp
                        ├─ canceled
                        └─ absent                       SurgeryType
                                                        ├─ orchiectomy
NotificationChannel     Target                          └─ ovariohysterectomy
├─ push                 ├─ all
├─ email                ├─ petOwners                    LogType
└─ whatsapp             ├─ semas                        ├─ info
                        ├─ veterinarians                ├─ warning
                        └─ receptionists                ├─ error
                                                        ├─ security
                                                        └─ audit

┌──────────────────────────────────────────────────────────────────────────────────┐
│                            RELACIONAMENTOS                                       │
└──────────────────────────────────────────────────────────────────────────────────┘

1:1 (Um para Um)
├─ User ←→ Token
├─ User ←→ PetOwner
├─ User ←→ Veterinarian
├─ Animal ←→ MedicalRecord

1:N (Um para Muitos)
├─ User ─┬─► UserDevice
│        ├─► Notification
│        ├─► Bulletin (como criador)
│        └─► SystemLog
│
├─ PetOwner ─┬─► Animal
│            ├─► Appointment
│            └─► CommitmentTerm
│
├─ Veterinarian ──► ClinicalRecord
│
├─ Animal ──► Appointment
│
├─ MedicalRecord ──► ClinicalRecord
│
└─ Appointment ──► ClinicalRecord (opcional)

┌──────────────────────────────────────────────────────────────────────────────────┐
│                         POLÍTICAS DE DELEÇÃO                                     │
└──────────────────────────────────────────────────────────────────────────────────┘

CASCADE (Deletar em cascata)
├─ User → Token, PetOwner, Veterinarian
├─ PetOwner → Animal, Appointment, CommitmentTerm
├─ Animal → Appointment, MedicalRecord
├─ MedicalRecord → ClinicalRecord
└─ UserDevice, Notification, Bulletin (quando User deletado)

SET NULL (Manter registro, anular referência)
├─ User → SystemLog (preserva histórico)
└─ Appointment → ClinicalRecord (preserva histórico)

RESTRICT (Impedir deleção)
└─ Veterinarian → ClinicalRecord (não permite deletar vet com registros)

┌──────────────────────────────────────────────────────────────────────────────────┐
│                            ÍNDICES ÚNICOS                                        │
└──────────────────────────────────────────────────────────────────────────────────┘

users:           email, cpf
tokens:          userId, jwt, refreshJwt
petOwners:       userId
veterinarians:   userId, crmv
animals:         microchipNumber
medicalRecords:  animalId, microchipNumber

┌──────────────────────────────────────────────────────────────────────────────────┐
│                        CAMPOS OBRIGATÓRIOS (NOT NULL)                            │
└──────────────────────────────────────────────────────────────────────────────────┘

✓ User: role, email, hashedPassword, completeName, cpf, phone
✓ Animal: petOwnerId, species, gender, estimatedAge, sizeWeight
✓ Appointment: animalId, petOwnerId, startTime, endTime, status
✓ ClinicalRecord: medicalRecordId, veterinarianId, type, treatmentDate
✓ Notification: userId, title, message, read, channel
✓ SystemLog: targetTable, targetId, action, type

```

## 📊 Estatísticas do Schema

- **Total de Tabelas**: 15
- **Total de Enums**: 11
- **Total de Relacionamentos**: 26
- **Campos com Unique**: 10
- **Campos com Index**: 15+

## 🔐 Segurança e LGPD

- ✅ Logs de auditoria (`systemLogs`)
- ✅ Rastreamento de ações por usuário
- ✅ Registro de IP de origem
- ✅ Timestamps automáticos
- ✅ Soft delete possível (adicionar campo `deletedAt` se necessário)

## 🎯 Principais Funcionalidades Suportadas

1. ✅ **Autenticação Multi-perfil** (6 roles diferentes)
2. ✅ **Gestão de Animais** (cadastro, microchip, histórico)
3. ✅ **Agendamentos** (triagem, cirurgia, pós-operatório)
4. ✅ **Prontuário Eletrônico** (único por animal)
5. ✅ **Registros Clínicos** (triagem, cirurgias, acompanhamento)
6. ✅ **Notificações Multi-canal** (push, email, WhatsApp)
7. ✅ **Termo de Compromisso** (assinatura digital)
8. ✅ **Heatmap** (endereços dos tutores)
9. ✅ **Auditoria LGPD** (todos os logs rastreáveis)
10. ✅ **Boletins Informativos** (comunicação segmentada)
