import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_KASWIRA_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_KASWIRA_SUPABASE_ANON_KEY!
  )
}