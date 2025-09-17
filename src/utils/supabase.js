import { crateClient } from '@supabase/supabase-js';

export const supabase = crateClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);