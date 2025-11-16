-- ============================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================
-- Este script habilita Row Level Security em todas as tabelas
-- e configura políticas para acesso via backend (service role)
-- 
-- IMPORTANTE: O Supabase requer RLS habilitado para segurança.
-- As políticas configuradas permitem acesso completo via service_role
-- (usado pelo backend NestJS) enquanto bloqueiam acesso direto não autorizado.

-- Habilitar RLS em todas as tabelas
ALTER TABLE "public"."users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."tokens" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."petOwners" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."commitmentTerms" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."veterinarians" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."animals" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."appointments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."medicalRecords" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."clinicalRecords" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."userDevices" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."notifications" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."bulletins" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."systemLogs" ENABLE ROW LEVEL SECURITY;

-- ============================================
-- POLÍTICAS DE ACESSO - SERVICE ROLE
-- ============================================
-- Estas políticas permitem que o backend (usando service_role key)
-- tenha acesso completo às tabelas, enquanto bloqueiam acesso direto
-- não autorizado via PostgREST.

-- Políticas para USERS
CREATE POLICY "service_role_users_all" ON "public"."users"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para TOKENS
CREATE POLICY "service_role_tokens_all" ON "public"."tokens"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para PET OWNERS
CREATE POLICY "service_role_petOwners_all" ON "public"."petOwners"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para COMMITMENT TERMS
CREATE POLICY "service_role_commitmentTerms_all" ON "public"."commitmentTerms"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para VETERINARIANS
CREATE POLICY "service_role_veterinarians_all" ON "public"."veterinarians"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para ANIMALS
CREATE POLICY "service_role_animals_all" ON "public"."animals"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para APPOINTMENTS
CREATE POLICY "service_role_appointments_all" ON "public"."appointments"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para MEDICAL RECORDS
CREATE POLICY "service_role_medicalRecords_all" ON "public"."medicalRecords"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para CLINICAL RECORDS
CREATE POLICY "service_role_clinicalRecords_all" ON "public"."clinicalRecords"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para USER DEVICES
CREATE POLICY "service_role_userDevices_all" ON "public"."userDevices"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para NOTIFICATIONS
CREATE POLICY "service_role_notifications_all" ON "public"."notifications"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para BULLETINS
CREATE POLICY "service_role_bulletins_all" ON "public"."bulletins"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Políticas para SYSTEM LOGS
CREATE POLICY "service_role_systemLogs_all" ON "public"."systemLogs"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ============================================
-- OBSERVAÇÕES IMPORTANTES
-- ============================================
-- 1. As políticas acima permitem acesso completo via service_role
--    (chave usada pelo backend)
-- 
-- 2. Para acesso autenticado via anon key (se necessário no futuro),
--    adicione políticas específicas baseadas em auth.uid()
--
-- 3. O RLS protege contra acesso direto não autorizado ao banco
--    enquanto permite que o backend NestJS opere normalmente
--
-- 4. _prisma_migrations não precisa de políticas RLS pois é gerenciada
--    automaticamente pelo Prisma