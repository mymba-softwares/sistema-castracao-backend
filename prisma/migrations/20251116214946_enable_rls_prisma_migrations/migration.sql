-- ============================================
-- ENABLE ROW LEVEL SECURITY ON _prisma_migrations
-- ============================================
-- Habilita RLS na tabela de controle de migrations do Prisma
-- Esta tabela é gerenciada automaticamente pelo Prisma

-- Habilitar RLS
ALTER TABLE "public"."_prisma_migrations" ENABLE ROW LEVEL SECURITY;

-- Política para service_role (backend completo)
CREATE POLICY "service_role_prisma_migrations_all" ON "public"."_prisma_migrations"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Política adicional para postgres role (necessário para migrations)
CREATE POLICY "postgres_prisma_migrations_all" ON "public"."_prisma_migrations"
  FOR ALL
  TO postgres
  USING (true)
  WITH CHECK (true);