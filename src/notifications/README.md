# 📬 Sistema de Notificações

Sistema completo de notificações push usando Firebase Cloud Messaging (FCM) com suporte a múltiplos dispositivos, tópicos e notificações agendadas.

## 📑 Índice

- [Visão Geral](#visão-geral)
- [Configuração](#configuração)
- [Rotas da API](#rotas-da-api)
- [Notificações Automáticas](#notificações-automáticas)
- [Exemplos de Uso](#exemplos-de-uso)
- [Testes](#testes)

---

## 🎯 Visão Geral

O módulo de notificações oferece:

- ✅ **Notificações Push via Firebase (FCM)**
- ✅ **Multi-dispositivo**: Suporte para vários dispositivos por usuário
- ✅ **Tópicos**: Envio em massa por role ou tópicos customizados
- ✅ **Histórico**: Armazena todas as notificações no banco de dados
- ✅ **Notificações Automáticas**: Lembretes de agendamentos via Cron Job
- ✅ **Controle de Leitura**: Marcar notificações como lidas
- ✅ **Interface de Testes**: Página web para testes completos

---

## ⚙️ Configuração

### Requisitos

1. **Firebase Project** configurado
2. **Service Account JSON** do Firebase
3. **VAPID Key** para notificações web

### Variáveis de Ambiente

```env
# Firebase (service account path é configurado no código)
FIREBASE_PROJECT_ID=your-project-id
```

### Arquivo de Service Account

Coloque o arquivo JSON do Firebase em:
```
src/notifications/firebase/[seu-arquivo]-firebase-adminsdk.json
```

---

## 🛣️ Rotas da API

Todas as rotas requerem autenticação JWT via Bearer token.

### 1️⃣ Gerenciamento de Dispositivos

#### `POST /api/notifications/register-device`
Registra um dispositivo FCM para receber notificações.

**Body:**
```json
{
  "userId": 1,
  "fcmToken": "device-fcm-token-here",
  "deviceInfo": "iPhone 14 Pro - iOS 17.1"
}
```

**Comportamento:**
- Registra o token FCM do dispositivo
- **Subscreve automaticamente** no tópico da role do usuário (ex: `role_petOwner`)
- Permite múltiplos dispositivos por usuário

**Resposta:**
```json
{
  "id": 1,
  "userId": 1,
  "fcmToken": "device-fcm-token-here",
  "deviceInfo": "iPhone 14 Pro - iOS 17.1"
}
```

---

#### `DELETE /api/notifications/device/:userId/:fcmToken`
Remove um dispositivo registrado.

**Parâmetros:**
- `userId`: ID do usuário
- `fcmToken`: Token FCM do dispositivo

**Comportamento:**
- Remove o dispositivo do banco
- **Desinscreve automaticamente** de todos os tópicos

---

### 2️⃣ Envio de Notificações

#### `POST /api/notifications` (Create DB Only)
Cria uma notificação apenas no banco de dados, **SEM enviar push**.

**Uso:** Para notificações que serão enviadas depois ou apenas para histórico.

**Body:**
```json
{
  "userId": 1,
  "title": "Bem-vindo!",
  "message": "Seja bem-vindo ao sistema",
  "channel": "GENERAL",
  "metadata": {
    "screen": "Home",
    "action": "welcome"
  }
}
```

**Resposta:**
```json
{
  "id": 1,
  "userId": 1,
  "title": "Bem-vindo!",
  "message": "Seja bem-vindo ao sistema",
  "channel": "GENERAL",
  "read": false,
  "createdAt": "2025-12-02T16:00:00Z"
}
```

---

#### `POST /api/notifications/send-push`
Cria notificação no banco **E envia push imediatamente**.

**Uso:** Notificações em tempo real.

**Body:**
```json
{
  "userIds": [1, 2, 3],
  "title": "Nova Mensagem",
  "body": "Você tem uma nova mensagem",
  "data": {
    "screen": "Messages",
    "messageId": "123"
  },
  "imageUrl": "https://example.com/image.png"
}
```

**Comportamento:**
- Cria notificações no banco para cada usuário
- Envia push FCM para **todos os dispositivos** de cada usuário (multicast)
- Suporta imagem e dados customizados

**Resposta:**
```json
{
  "success": true,
  "notificationIds": [1, 2, 3],
  "totalDevices": 5,
  "results": {
    "success": 5,
    "failed": 0
  }
}
```

---

#### `POST /api/notifications/:id/send-push`
Envia push para uma notificação **já existente** no banco.

**Uso:** Para notificações criadas previamente ou para reenviar.

**Parâmetros:**
- `id`: ID da notificação no banco

**Comportamento:**
- Busca a notificação existente
- Envia push para todos os dispositivos do usuário
- **NÃO cria nova notificação no banco**

**Resposta:**
```json
{
  "success": true,
  "notificationId": 1,
  "totalDevices": 2,
  "results": {
    "success": 2,
    "failed": 0
  }
}
```

---

### 3️⃣ Notificações por Role/Tópico

#### `POST /api/notifications/send-by-role`
Envia notificação para **todos os usuários de uma role**.

**Roles disponíveis:**
- `administrator`
- `semas`
- `veterinarian`
- `receptionist`
- `petOwner`
- `student`

**Body:**
```json
{
  "role": "petOwner",
  "title": "Manutenção Programada",
  "message": "Sistema em manutenção das 22h às 23h",
  "metadata": {
    "type": "maintenance",
    "priority": "high"
  }
}
```

**Comportamento:**
- Cria notificação no banco para cada usuário da role
- Envia push via tópico FCM `role_petOwner` (mais eficiente)

---

#### `POST /api/notifications/topics/send`
Envia notificação para um **tópico customizado**.

**Uso:** Campanhas, features específicas, grupos customizados.

**Body:**
```json
{
  "topic": "promotional-offers",
  "title": "🎉 Promoção Especial",
  "body": "50% de desconto na primeira consulta!",
  "data": {
    "campaign": "summer-2025",
    "discount": "50"
  }
}
```

**Comportamento:**
- Envia push para todos os dispositivos subscritos no tópico
- Nome do tópico é **normalizado automaticamente** (remove espaços, caracteres especiais)
- Exemplo: `"promotional offers"` → `"promotional-offers"`

---

### 4️⃣ Gerenciamento de Tópicos

#### `POST /api/notifications/topics/subscribe`
Subscreve um dispositivo em tópicos customizados.

**Body:**
```json
{
  "fcmToken": "device-token-here",
  "topics": ["promotional-offers", "news-updates"]
}
```

**Resposta:**
```json
{
  "success": ["promotional-offers", "news-updates"],
  "failed": []
}
```

---

#### `POST /api/notifications/topics/unsubscribe`
Remove subscrição de tópicos.

**Body:**
```json
{
  "fcmToken": "device-token-here",
  "topics": ["promotional-offers"]
}
```

---

### 5️⃣ Consulta de Notificações

#### `GET /api/notifications/user/:userId`
Lista todas as notificações de um usuário.

**Query Params:**
- `unreadOnly`: `true` para apenas não lidas (opcional)

**Resposta:**
```json
[
  {
    "id": 1,
    "title": "Nova Mensagem",
    "message": "Você tem uma nova mensagem",
    "channel": "CHAT",
    "read": false,
    "createdAt": "2025-12-02T16:00:00Z",
    "metadata": {
      "messageId": "123"
    }
  }
]
```

---

#### `GET /api/notifications/user/:userId/unread-count`
Retorna a contagem de notificações não lidas.

**Resposta:**
```json
{
  "count": 5
}
```

---

### 6️⃣ Marcar como Lida

#### `POST /api/notifications/mark-as-read`
Marca notificações específicas como lidas.

**Body:**
```json
{
  "notificationIds": [1, 2, 3]
}
```

---

#### `POST /api/notifications/user/:userId/mark-all-read`
Marca **todas** as notificações do usuário como lidas.

---

### 7️⃣ Exclusão

#### `DELETE /api/notifications/:id`
Deleta uma notificação específica.

---

#### `DELETE /api/notifications/user/:userId/read`
Deleta **todas as notificações lidas** de um usuário.

---

## 🤖 Notificações Automáticas

### Cron Job de Lembretes de Agendamento

O sistema possui um **cron job automático** que verifica e envia lembretes de agendamentos.

#### ⏰ Execução

- **Horário:** Todos os dias às **9h da manhã**
- **Timezone:** Horário do servidor

#### 📧 Tipos de Lembretes

##### 1. Lembrete de 1 Dia
- **Quando:** Agendamento é **amanhã**
- **Condições:**
  - Status: `scheduled` ou `confirmed`
  - Flag `oneDayReminderSent` = `false`
  - Horário do agendamento entre 00:00 e 23:59 do dia seguinte

**Exemplo de mensagem:**
```
🔔 Agendamento Amanhã
Lembrete: Você tem um agendamento amanhã (03/12/2025) às 16:07 de Triagem com Dr(a). Maria Santos.
```

##### 2. Lembrete de 1 Semana
- **Quando:** Agendamento é **daqui a 7 dias**
- **Condições:**
  - Status: `scheduled` ou `confirmed`
  - Flag `oneWeekReminderSent` = `false`
  - Horário do agendamento entre 00:00 e 23:59 do 7º dia

**Exemplo de mensagem:**
```
📅 Agendamento Próxima Semana
Lembrete: Você tem um agendamento na próxima semana (09/12/2025) às 14:30 de Cirurgia de Castração com Dr(a). João Silva.
```

#### 🔄 Fluxo do Cron Job

```
1. Cron dispara às 9h
2. Busca agendamentos elegíveis (1 dia e 1 semana)
3. Para cada agendamento:
   - Formata data/hora em PT-BR
   - Cria notificação no banco
   - Envia push FCM
   - Marca flag como enviado
4. Loga estatísticas (total, enviados, falhas)
```

#### 🧪 Endpoint de Teste Manual

Para testar o cron job sem esperar até 9h:

```http
POST /api/appointment/test-reminders
Authorization: Bearer <admin-token>
```

**Resposta:**
```json
{
  "success": true,
  "oneDayReminders": {
    "total": 5,
    "sent": 5,
    "failed": 0
  },
  "oneWeekReminders": {
    "total": 3,
    "sent": 3,
    "failed": 0
  }
}
```

**Requisitos:**
- Role: `administrator` apenas
- Útil para desenvolvimento e testes

---

## 📝 Exemplos de Uso

### Exemplo 1: Registrar Dispositivo e Receber Notificação

```javascript
// 1. Registrar dispositivo
const device = await fetch('/api/notifications/register-device', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>'
  },
  body: JSON.stringify({
    userId: 1,
    fcmToken: 'fcm-token-from-firebase-sdk',
    deviceInfo: 'Chrome on Windows'
  })
});

// 2. Enviar notificação push
const notification = await fetch('/api/notifications/send-push', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>'
  },
  body: JSON.stringify({
    userIds: [1],
    title: 'Teste',
    body: 'Notificação de teste',
    data: { screen: 'Home' }
  })
});
```

---

### Exemplo 2: Criar Agendamento e Receber Lembretes Automáticos

```javascript
// 1. Criar agendamento para amanhã
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(16, 0, 0, 0);

const endTime = new Date(tomorrow);
endTime.setHours(17, 0, 0, 0);

const appointment = await fetch('/api/appointment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>'
  },
  body: JSON.stringify({
    animalId: 1,
    petOwnerId: 1,
    veterinarianId: 1,
    startTime: tomorrow.toISOString(),
    endTime: endTime.toISOString(),
    serviceType: 'triage'
  })
});

// 2. Aguardar: O cron job enviará lembrete automaticamente às 9h
//    - 1 dia antes: hoje às 9h
//    - 1 semana antes: 7 dias antes às 9h

// 3. Ou testar manualmente (admin)
const test = await fetch('/api/appointment/test-reminders', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <admin-token>'
  }
});
```

---

### Exemplo 3: Notificação para Todos os Pet Owners

```javascript
// Enviar aviso geral para todos os tutores
const notification = await fetch('/api/notifications/send-by-role', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <admin-token>'
  },
  body: JSON.stringify({
    role: 'petOwner',
    title: '📢 Comunicado Importante',
    message: 'Nossa clínica estará fechada no feriado de 25/12',
    metadata: {
      type: 'announcement',
      date: '2025-12-25'
    }
  })
});
```

---

## 🧪 Testes

### Interface Web de Testes

Acesse: `http://localhost:8080/src/notifications/web-notification-test/test-notification.html`

**Funcionalidades:**
- ✅ Configurar VAPID key
- ✅ Obter FCM token
- ✅ Login no sistema
- ✅ Testar todas as 15 rotas
- ✅ Customizar título, mensagem e metadados
- ✅ Ver resultados formatados

### Rodar Servidor de Testes

```bash
# Da raiz do projeto
http-server -p 8080 -c-1
```

---

## 📊 Canais de Notificação

Os canais ajudam a categorizar notificações:

```typescript
enum NotificationChannel {
  push     // Notification via App
  email    // Messaging service
  whatsapp // Messaging service
}
```

---

## 🔐 Permissões por Rota

| Rota | Roles Permitidas |
|------|------------------|
| `POST /register-device` | Todas |
| `DELETE /device/:userId/:fcmToken` | Todas |
| `POST /` | administrator, receptionist |
| `POST /send-push` | administrator, receptionist |
| `POST /:id/send-push` | administrator, receptionist |
| `POST /send-by-role` | administrator |
| `POST /topics/*` | administrator |
| `GET /user/:userId` | Próprio usuário ou admin |
| `POST /mark-as-read` | Próprio usuário |
| `DELETE /*` | administrator |

---